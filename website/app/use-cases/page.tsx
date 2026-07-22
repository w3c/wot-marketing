'use client';

import { PageLayout } from '../_components/PageLayout';
import { Typography, Stack, Box, AccordionGroup } from '@mui/joy';
import { Route } from 'next';
import { DOMAINS, TECH_TRENDS } from '@/lib/use-cases/useCasesData';
import { LinkCard } from '../_components/LinkCard';
import { PageSection } from '../_components/PageSection';
import { TestimonialItem } from '../_components/TestimonialItem';
import { USE_CASES_REFERENCES } from '@/lib/use-cases/referencesData';
import { TESTIMONIALS } from '@/lib/use-cases/testimonialsData';

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
            {USE_CASES_REFERENCES.map((resource, index) => (
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
              {TESTIMONIALS.filter((testimonial) => testimonial.category === 'member').map((testimonial) => (
                <TestimonialItem key={testimonial.id} testimonial={testimonial} />
              ))}
            </AccordionGroup>
          </Stack>

          <Stack gap={2}>
            <Typography level="h4">Liaison Partners</Typography>
            <AccordionGroup disableDivider>
              {TESTIMONIALS.filter((testimonial) => testimonial.category === 'liaison').map((testimonial) => (
                <TestimonialItem key={testimonial.id} testimonial={testimonial} />
              ))}
            </AccordionGroup>
          </Stack>
        </Stack>
      </PageSection>
    </PageLayout>
  );
}
