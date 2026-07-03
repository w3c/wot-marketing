import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { RESEARCH_PAPERS } from './researchPapersInput.ts';
import { mkdirSync, writeFileSync } from 'fs';
import { CrossrefDate, ResearchPaperFetchOutput } from './types.ts';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Crossref asks callers to identify themselves; this also grants access to the
// faster "polite" pool and reduces the chance of throttled/empty responses.
const HEADERS = {
  'User-Agent': 'wot-marketing/1.0 (https://github.com/w3c/wot-marketing; mailto:bobur.khayitov@siemens.com)',
};

(async () => {
  const researchPapers: ResearchPaperFetchOutput[] = [];
  // Fetch sequentially to stay well within Crossref's rate limits; firing all
  for (const [title, doi] of Object.entries(RESEARCH_PAPERS)) {
    try {
      const result = await fetchWork(doi);
      researchPapers.push(result);
    } catch (err) {
      console.error(`Could not fetch ${title} \n ${err}`);
    }
  }
  // Save the fetched data in devToolsOutput.json
  try {
    const outputPath = resolve(__dirname, '../../website/lib/generated/researchPapers.json');
    mkdirSync(dirname(outputPath), { recursive: true });
    writeFileSync(outputPath, JSON.stringify(researchPapers, null, 2));
    console.log('website/lib/generated/researchPapers.json successfully generated');
  } catch (error) {
    console.error('Could not save the output file:', error);
  }
})();

async function fetchWork(doi: string, retries = 3): Promise<ResearchPaperFetchOutput> {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const response = await fetch(`https://api.crossref.org/works/${doi}`, {
        headers: HEADERS,
      });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status} ${response.statusText}`);
      }
      // Read the body as text first so an empty/truncated response gives a clear error
      const body = await response.text();
      if (!body.trim()) {
        throw new Error('Empty response body');
      }
      const message = JSON.parse(body).message;
      return {
        authors: message.author
          .sort((a: any, b: any) => {
            if (a.sequence === b.sequence) return 0;
            return a.sequence === 'first' ? -1 : 1;
          })
          .map((author: any) => author.given + ' ' + author.family),
        date: crossrefDateToLocaleString(message.published),
        link: message.URL,
        publisher: message.publisher,
        title: message.title.join('. '),
        type: message.type.replace(/[._-]+/g, ' ').replace(/\b\w/g, (char: string) => char.toUpperCase()),
      };
    } catch (err) {
      if (attempt === retries) throw err;
      // Exponential backoff before retrying (500ms, 1s, 2s, ...).
      await sleep(500 * 2 ** attempt);
    }
  }
  throw new Error('Could not fetch: ' + doi);
}

export function crossrefDateToLocaleString(date?: CrossrefDate): string {
  const parts = date?.['date-parts']?.[0];

  if (!parts?.[0]) throw new Error('Could not extract publish date');

  const [year, month = 1, day = 1] = parts;

  const dateObj = new Date(Date.UTC(year, month - 1, day));
  return dateObj.toISOString();
}

function sleep(ms: number) {
  return new Promise((res) => setTimeout(res, ms));
}
