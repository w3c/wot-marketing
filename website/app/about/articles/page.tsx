import { PageLayout } from '@/app/_components/PageLayout';
import { StyledTable } from '@/app/_components/StyledTable';
import { ARTICLES } from '@/lib/articles';
import { Alert, Link, Stack } from '@mui/joy';
import { ExternalLink } from 'lucide-react';

export default function Articles() {
  return (
    <PageLayout
      title="Articles"
      subtitle={
        <>
          This page collects articles about the W3C Web of Things. See our{' '}
          <Link href="https://github.com/w3c/wot-marketing/blob/main/Article_Policy.md">policy document</Link> for
          curation details.
        </>
      }
    >
      <Stack gap={2}>
        <Alert sx={{ display: 'block' }} variant="outlined">
          Note that the W3C does not guarantee the validity of the articles. When searching for other articles, include
          the &quot;W3C&quot; keyword to find content related to our standardization work. See also{' '}
          <Link href="https://en.wikipedia.org/wiki/Web_of_Things">Wikipedia</Link>.
        </Alert>
        <StyledTable
          header={[
            'Article',
            { label: 'Type', size: '150px' },
            { label: 'Publisher', size: '150px' },
            { label: 'Date', size: '140px' },
            { label: 'Link', size: '50px' },
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
        />
      </Stack>
    </PageLayout>
  );
}
