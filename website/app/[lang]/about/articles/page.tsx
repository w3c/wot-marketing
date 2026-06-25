import { PageLayout } from '@/app/_components/PageLayout';
import { StyledTable } from '@/app/_components/StyledTable';
import { ARTICLES } from '@/lib/articles';
import { Alert, Link, Stack } from '@mui/joy';
import { ExternalLink } from 'lucide-react';
import { Metadata } from 'next';
import { isLocale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { pageMetadata } from '@/lib/i18n/metadata';

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await props.params;
  const locale = isLocale(lang) ? lang : 'en';
  const dict = getDictionary(locale);
  return pageMetadata(locale, '/about/articles', { title: dict.pages.articles.title });
}

export default async function Articles(props: { params: Promise<{ lang: string }> }) {
  const { lang } = await props.params;
  const locale = isLocale(lang) ? lang : 'en';
  const dict = getDictionary(locale);
  return (
    <PageLayout
      title={dict.pages.articles.title}
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
