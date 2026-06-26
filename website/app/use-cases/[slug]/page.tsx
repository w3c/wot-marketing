import { PageLayout } from '@/app/_components/PageLayout';
import { PageSection } from '@/app/_components/PageSection';
import { DOMAINS, getDomainPageSlug } from '@/lib/use-cases/domains';
import { Box, Card, Chip, Link, List, ListItem, Stack, Typography } from '@mui/joy';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return Object.values(DOMAINS)
    .flat()
    .map((page) => ({
      slug: getDomainPageSlug(page.title),
    }));
}

export default async function DomainUseCasePage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const pageData = Object.values(DOMAINS)
    .flat()
    .find((page) => getDomainPageSlug(page.title) === params.slug);

  if (!pageData) {
    notFound();
  }

  return (
    <PageLayout breadcrumbs={{ startingPath: '/use-cases' }} title={pageData.title} subtitle={pageData.subtitle}>
      <PageSection title="Use Case">
        <Stack gap={2}>
          <Typography level="title-lg">{pageData.heroUseCase}</Typography>
          {pageData.body.map((paragraph) => (
            <Typography key={paragraph}>{paragraph}</Typography>
          ))}
        </Stack>
      </PageSection>

      <PageSection title="Why WoT Fits">
        <Stack gap={2}>
          <Typography>{pageData.sellingPoint}</Typography>
          <List marker="disc" sx={{ pl: 2 }}>
            {pageData.wotEnables.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </List>
        </Stack>
      </PageSection>

      <PageSection title="Primary Capabilities">
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {pageData.primaryCapabilities.map((capability) => (
            <Chip key={capability} variant="soft" color="primary">
              {formatCapability(capability)}
            </Chip>
          ))}
        </Box>
      </PageSection>

      <PageSection title="Resources">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 2,
          }}
        >
          {pageData.resources.map((resource) => (
            <Card key={resource.url} variant="outlined" sx={{ height: '100%' }}>
              <Stack gap={1}>
                <Stack direction="row" gap={1} alignItems="center" justifyContent="space-between">
                  <Typography level="title-md">
                    <Link href={resource.url}>{resource.label}</Link>
                  </Typography>
                  <Chip size="sm" variant="soft">
                    {formatResourceKind(resource.kind)}
                  </Chip>
                </Stack>
                <Typography level="body-sm">{resource.note}</Typography>
                <Typography level="body-xs" sx={{ color: 'text.secondary' }}>
                  {formatUrlLabel(resource.url)}
                </Typography>
              </Stack>
            </Card>
          ))}
        </Box>
      </PageSection>

      <PageSection title="Related Standards and Organizations">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
            gap: 2,
          }}
        >
          <Card variant="outlined" sx={{ height: '100%' }}>
            <Stack gap={1}>
              <Typography level="title-md">Related Standards</Typography>
              <List marker="disc" size="sm" sx={{ pl: 2 }}>
                {pageData.relatedStandards.map((standard) => (
                  <ListItem key={standard}>{standard}</ListItem>
                ))}
              </List>
            </Stack>
          </Card>
          <Card variant="outlined" sx={{ height: '100%' }}>
            <Stack gap={1}>
              <Typography level="title-md">Related Organizations</Typography>
              <List marker="disc" size="sm" sx={{ pl: 2 }}>
                {pageData.relatedOrganizations.map((organization) => (
                  <ListItem key={organization}>{organization}</ListItem>
                ))}
              </List>
            </Stack>
          </Card>
        </Box>
      </PageSection>
    </PageLayout>
  );
}

function formatCapability(capability: string) {
  return capability
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function formatResourceKind(kind: string) {
  return kind
    .split('-')
    .map((word) => (word === 'w3c' ? 'W3C' : word.charAt(0).toUpperCase() + word.slice(1)))
    .join(' ');
}

function formatUrlLabel(url: string) {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.hostname.replace(/^www\./, '') + parsedUrl.pathname;
  } catch {
    return url;
  }
}
