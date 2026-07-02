import { PageLayout } from '@/app/_components/PageLayout';
import { PageSection } from '@/app/_components/PageSection';
import { DOMAINS, getDomainPageSlug } from '@/lib/use-cases/domains';
import { Testimonial, TESTIMONIALS } from '@/lib/use-cases/testimonials';
import { Box, Card, Chip, List, ListItem, Stack, Typography } from '@mui/joy';
import { notFound } from 'next/navigation';
import { TestimonialCard } from './_components/TestimonialCard';
import { ResourceCard } from './_components/ResourceCard';
import { VideoCard } from './_components/VideoCard';

export function generateStaticParams() {
  return Object.values(DOMAINS)
    .flatMap((group) => Object.keys(group))
    .map((title) => ({
      slug: getDomainPageSlug(title),
    }));
}

export default async function DomainUseCasePage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const pageEntry = Object.values(DOMAINS)
    .flatMap((group) => Object.entries(group))
    .find(([title]) => getDomainPageSlug(title) === params.slug);

  if (!pageEntry) {
    notFound();
  }

  const [title, pageData] = pageEntry;
  const testimonials = getTestimonialsById(pageData.testimonialIds ?? []);

  const videos = pageData.resources.filter((resource) => resource.video_url);
  const resources = pageData.resources.filter((resource) => !resource.video_url);

  return (
    <PageLayout breadcrumbs={{ startingPath: '/use-cases' }} title={title} subtitle={pageData.description}>
      <PageSection title="Use Case">
        <Stack gap={2}>
          {[pageData.useCase, pageData.howItWorks].map((paragraph) => (
            <Typography key={paragraph}>{paragraph}</Typography>
          ))}
        </Stack>
      </PageSection>

      <PageSection title="Why WoT Fits">
        <Stack gap={2}>
          <Typography>{pageData.woTRole.text}</Typography>
          <List marker="disc" sx={{ pl: 2 }}>
            {pageData.woTRole.keyBenefits.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </List>
        </Stack>
      </PageSection>

      <PageSection title="Real-World Examples">
        <List marker="disc" sx={{ pl: 2 }}>
          {pageData.realWorldExamples.map((example) => (
            <ListItem key={example}>{example}</ListItem>
          ))}
        </List>
        <Card variant="outlined">
          <Typography>{pageData.cta}</Typography>
        </Card>
      </PageSection>

      <PageSection title="Standards">
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {pageData.standards.map((standard) => (
            <Chip
              key={standard.title}
              component="a"
              href={standard.url}
              target="_blank"
              rel="noreferrer"
              variant="soft"
              color="primary"
              sx={{ textDecoration: 'none' }}
            >
              {standard.title}
            </Chip>
          ))}
        </Box>
      </PageSection>

      {testimonials.length > 0 ? (
        <PageSection title="Testimonials">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 2,
            }}
          >
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </Box>
        </PageSection>
      ) : null}

      {pageData.resources.length > 0 && (
        <PageSection title="Resources">
          <Stack gap={2}>
            {/* Videos */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                gap: 2,
              }}
            >
              {videos.map((resource) => (
                <VideoCard key={resource.url} resource={resource} />
              ))}
            </Box>
            {/* Resources */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                gap: 2,
              }}
            >
              {resources.map((resource) => (
                <ResourceCard key={resource.url} resource={resource} />
              ))}
            </Box>
          </Stack>
        </PageSection>
      )}
    </PageLayout>
  );
}

function getTestimonialsById(ids: string[]) {
  return ids
    .map((id) => TESTIMONIALS.find((testimonial) => testimonial.id === id))
    .filter((testimonial): testimonial is Testimonial => Boolean(testimonial));
}
