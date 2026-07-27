'use client';

import { PageLayout } from '../_components/PageLayout';
import { Card, CardContent, Typography, Stack, Box, Alert, AccordionGroup } from '@mui/joy';
import { HardHat } from 'lucide-react';
import { RESOURCES, DOMAINS, TECH_TRENDS, TESTIMONIALS, Domain } from '@/lib/useCases';
import { LinkCard } from '../_components/LinkCard';
import { PageSection } from '../_components/PageSection';
import { TestimonialItem } from '../_components/TestimonialItem';

export default function UseCasesPage() {
  return (
    <PageLayout
      title="WoT Use Cases"
      subtitle="Explore how the Web of Things is applied across industries, from smart manufacturing and energy management to connected buildings and beyond"
      banner={
        <Alert variant="outlined" color="warning" startDecorator={<HardHat size={24} />}>
          <Box>
            <Typography level="title-sm" color="warning">
              This page is under construction
            </Typography>
            <Typography level="body-sm" color="warning">
              We are actively expanding this section. In the meantime, check out the resources below for comprehensive
              information about WoT use cases.
            </Typography>
          </Box>
        </Alert>
      }
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
              {DOMAINS.map((domain, index) => (
                <DomainCard key={index} domain={domain} />
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
              {TECH_TRENDS.map((trend, index) => (
                <DomainCard key={index} domain={trend} />
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

function DomainCard({ domain }: { domain: Domain }) {
  return (
    <Card
      variant="outlined"
      sx={{
        borderTop: '3px solid',
        borderColor: 'primary.main',
        height: '100%',
      }}
    >
      <Box sx={{ color: 'primary.main', mb: 1.5 }}>{domain.icon}</Box>
      <CardContent>
        <Typography level="title-md" mb={1}>
          {domain.title}
        </Typography>
        <Typography level="body-sm">{domain.description}</Typography>
      </CardContent>
    </Card>
  );
}
