import { PageLayout } from '@/app/_components/PageLayout';
import { PageSection } from '@/app/_components/PageSection';
import { StyledTable } from '@/app/_components/StyledTable';
import { ARTICLES } from '@/lib/articles';
import { ExternalLink } from 'lucide-react';
import RESEARCH_PAPERS from '@/lib/generated/researchPapers.json';
import { Alert, Link } from '@mui/joy';

export default function Articles() {
  return (
    <PageLayout
      title="Publications"
      subtitle={
        <>
          This page collects publications about the W3C Web of Things. See our{' '}
          <Link href="https://github.com/w3c/wot-marketing/blob/main/Article_Policy.md">policy document</Link> for
          curation details.
        </>
      }
      banner={
        <Alert sx={{ display: 'block' }} variant="outlined">
          Note that the W3C does not guarantee the validity of the publications. When searching for other publications,
          include the &quot;W3C&quot; keyword to find content related to our standardization work. See also{' '}
          <Link href="https://en.wikipedia.org/wiki/Web_of_Things">Wikipedia</Link>.
        </Alert>
      }
    >
      <PageSection title="Articles and Press Releases">
        <StyledTable
          header={[
            { label: 'Publication', sx: { minWidth: '50px' } },
            { label: 'Type', sx: { width: '150px' } },
            { label: 'Publisher', sx: { width: '130px' } },
            { label: 'Date', sx: { width: '140px' } },
            { label: 'Link', sx: { width: '50px' } },
          ]}
          rows={ARTICLES.map((article) => ({
            cells: [
              article.title,
              article.type,
              article.publisher,
              article.date,
              <Link href={article.url} key={article.url} sx={{ display: 'flex', justifyContent: 'center' }}>
                <ExternalLink size={17} />
              </Link>,
            ],
          }))}
          // Remove the type column on small screens to save space, as it is less important than the other columns and often contains
          sx={{
            '& th:nth-child(2), & th:nth-child(3), & td:nth-child(2), & td:nth-child(3)': {
              display: { xs: 'none', sm: 'table-cell' },
            },
          }}
        />
      </PageSection>
      <PageSection title="Research Papers">
        <StyledTable
          header={[
            { label: 'Title', sx: { minWidth: '50px' } },
            { label: 'Authors', sx: { minWidth: '50px' } },
            { label: 'Type', sx: { width: '100px' } },
            { label: 'Publisher', sx: { width: '130px' } },
            { label: 'Date', sx: { width: '140px' } },
            { label: 'Link', sx: { width: '50px' } },
          ]}
          rows={RESEARCH_PAPERS.map((paper) => ({
            cells: [
              paper.title,
              paper.authors.join(', '),
              paper.type,
              paper.publisher,
              new Date(paper.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long', day: 'numeric' }),
              <Link href={paper.link} key={paper.link} sx={{ display: 'flex', justifyContent: 'center' }}>
                <ExternalLink size={17} />
              </Link>,
            ],
          }))}
          // Remove the authors column on small screens to save space, as it is less important than the other columns and often contains
          sx={{
            '& th:nth-child(2), & th:nth-child(3), & td:nth-child(2), & td:nth-child(3)': {
              display: { xs: 'none', sm: 'table-cell' },
            },
          }}
        />
      </PageSection>
    </PageLayout>
  );
}
