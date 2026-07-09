'use client';

import { PageLayout } from '../_components/PageLayout';
import { Typography, Stack, Box, Accordion, AccordionDetails, AccordionSummary, AccordionGroup } from '@mui/joy';
import { Route } from 'next';
import { RESOURCES, DOMAINS, TECH_TRENDS, TESTIMONIALS, Testimonial } from '@/lib/useCases';
import { LinkCard } from '../_components/LinkCard';
import { PageSection } from '../_components/PageSection';

export default function UseCasesPage() {
  return (
    <PageLayout
      title="WoT Use Cases"
      subtitle="Explore how the Web of Things is applied across industries, from smart manufacturing and energy management to connected buildings and beyond"
    >
      <Stack gap={2}>
        <PageSection title="Resources & References" id="resources">
          {/* Resources Section */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
              gap: 2,
            }}
          >
            {RESOURCES.map((resource, index) => (
              <LinkCard
                key={index}
                label={resource.title}
                description={resource.description}
                icon={resource.icon}
                external_url={resource.url}
              />
            ))}
          </Box>
        </PageSection>
      </Stack>

      {/* Domains and Trends Section */}
      <PageSection title="Domains and Technology Trends">
        <Stack gap={4}>
          <Typography>
            WoT technologies are designed to be domain-agnostic. The following domains and technology trends represent
            areas where WoT provides significant value through standardized integration of heterogeneous devices and
            services.
          </Typography>

          <Stack gap={2} id="application-domains">
            <Typography level="h4">Application Domains</Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
                gap: 2,
              }}
            >
              {DOMAINS.map((domain) => (
                <LinkCard
                  key={domain.slug}
                  icon={domain.icon}
                  description={domain.description}
                  label={domain.title}
                  path={`/use-cases/${domain.slug}` as Route}
                />
              ))}
            </Box>
          </Stack>

          <Stack gap={2} id="technology-trends">
            <Typography level="h4">Technology Trends</Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
                gap: 2,
              }}
            >
              {TECH_TRENDS.map((trend) => (
                <LinkCard
                  key={trend.slug}
                  icon={trend.icon}
                  description={trend.description}
                  label={trend.title}
                  path={`/use-cases/${trend.slug}` as Route}
                />
              ))}
            </Box>
          </Stack>
        </Stack>
      </PageSection>

      {/* Testimonials Section */}
      <PageSection title="Testimonials" id="testimonials">
        <Stack gap={4}>
          <Typography>
            Leading technology companies and organizations endorse the Web of Things standard. Click on each to read
            their testimonial.
          </Typography>

          <Stack gap={2}>
            <Typography level="h4">W3C Members</Typography>
            <AccordionGroup disableDivider>
              {TESTIMONIALS.slice(0, 8).map((testimonial) => (
                <TestimonialItem key={testimonial.id} testimonial={testimonial} />
              ))}
            </AccordionGroup>
          </Stack>

          <Stack gap={2}>
            <Typography level="h4">Liaison Partners</Typography>
            <AccordionGroup disableDivider>
              {TESTIMONIALS.slice(8).map((testimonial) => (
                <TestimonialItem key={testimonial.id} testimonial={testimonial} />
              ))}
            </AccordionGroup>
          </Stack>
        </Stack>
      </PageSection>
    </PageLayout>
  );
}

function TestimonialItem({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Accordion
      sx={{
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 'sm',
        overflow: 'hidden',
        mb: 1,
        '&.Mui-expanded': {
          mb: 1,
        },
      }}
    >
      <AccordionSummary
        sx={{
          bgcolor: 'background.level1',
          '&:hover': {
            bgcolor: 'background.level2',
          },
        }}
      >
        <Typography level="title-sm" sx={{ fontWeight: 600 }}>
          {testimonial.name}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ p: 2, bgcolor: 'background.surface' }}>
          {testimonial.isJoint ? (
            <Stack gap={3}>
              {testimonial.quotes?.map((q, idx) => (
                <Box key={idx}>
                  <Typography
                    level="body-md"
                    sx={{
                      fontStyle: 'italic',
                      borderLeft: '3px solid',
                      borderColor: 'primary.main',
                      pl: 2,
                      mb: 1,
                    }}
                  >
                    {q.quote}
                  </Typography>
                  <Typography level="body-xs" sx={{ color: 'text.secondary' }}>
                    - <strong>{q.author.split(',')[0]}</strong>, {q.author.split(',').slice(1).join(',')}
                  </Typography>
                </Box>
              ))}
            </Stack>
          ) : (
            <Box>
              <Typography
                level="body-md"
                sx={{
                  fontStyle: 'italic',
                  borderLeft: '3px solid',
                  borderColor: 'primary.main',
                  pl: 2,
                  mb: 1,
                }}
              >
                {testimonial.content}
              </Typography>
              <Typography level="body-xs" sx={{ color: 'text.secondary' }}>
                - <strong>{testimonial.author?.split(',')[0]}</strong>,{' '}
                {testimonial.author?.split(',').slice(1).join(',')}
              </Typography>
            </Box>
          )}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
