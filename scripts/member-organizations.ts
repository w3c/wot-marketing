import { writeFileSync } from 'fs';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function fetchMemberOrganizations() {
  console.log('Fetching member organizations...');
  const res = await fetch('https://api.w3.org/ecosystems/web-of-things/member-organizations');

  if (!res.ok) {
    throw new Error(`Failed to fetch list: ${res.statusText}`);
  }

  const data = await res.json();

  if (!data._links || !data._links.affiliations) {
    throw new Error('Could not find _links.affiliations in response');
  }

  const affiliations = data._links.affiliations;
  console.log(`Found ${affiliations.length} affiliations.`);

  const results = [];

  // To avoid hitting API limits or being too slow, we can process them sequentially
  // or in smaller batches, but since there are ~49, sequential is fine.
  for (const affiliation of affiliations) {
    const title = affiliation.title;
    const href = affiliation.href;

    try {
      const addRes = await fetch(href);
      if (!addRes.ok) {
        console.error(`Failed to fetch additional data for ${title}: ${addRes.statusText}`);
        continue;
      }

      const addData = await addRes.json();

      // According to API structure _links.homepage usually has an href
      // Or it might just be a string if the prompt meant that, but we'll try to extract .href
      let homePage = null;
      if (addData._links && addData._links.homepage) {
        homePage = addData._links.homepage.href || addData._links.homepage;
      }

      results.push({
        title,
        homePage,
      });
    } catch (e) {
      console.error(`Error fetching additional data for ${title}:`, e);
    }
  }

  // Save the fetched data in memberOrganizationsOutput.json
  try {
    writeFileSync(
      resolve(__dirname, '../docs/_data/generated/memberOrganizationsOutput.json'),
      JSON.stringify(results, null, 2)
    );
    console.log('/docs/_data/generated/memberOrganizationsOutput.json successfully generated');
  } catch (error) {
    console.error('Could not save the output file:', error);
  }
}

fetchMemberOrganizations().catch(console.error);
