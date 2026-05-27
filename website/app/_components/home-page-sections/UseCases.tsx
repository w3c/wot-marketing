'use client';
import { Box, Stack, Typography } from '@mui/joy';
import { PageSection } from '../PageSection';
import { BookOpen, Globe, Quote, Rocket } from 'lucide-react';
import { LinkCard } from '../LinkCard';
import { Route } from 'next';
import { LinkButton } from '../LinkButton';

export function UseCases() {
  return (
    <PageSection title="Use Cases">
      <Stack direction={{ sm: 'column', md: 'row' }} gap={{ sm: 2, md: 10 }}>
        <Stack
          sx={{
            width: {
              sm: '100%',
              md: '50%',
            },
          }}
          gap={{
            sm: 4,
            md: 6,
          }}
        >
          <Stack gap={1}>
            <Typography>
              The Web of Things technologies apply to a variety of domains and unlock use cases. Whether it be
              industrial automation, smart home, infrastructure or agentic systems, you can use WoT for your solution.
              Find out below how the properties, actions, events abstraction over multitude of protocols and domains
              work.
            </Typography>
            <Typography>
              Read testimonials from industry leaders and W3C members to see how they are adopting the Web of Things
              standard to drive interoperability and innovation.
            </Typography>
          </Stack>
          <LinkButton path="/use-cases">Explore WoT Use Cases</LinkButton>
        </Stack>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 2,
            width: {
              xs: '100%',
              sm: '100%',
              md: '50%',
            },
          }}
        >
          <LinkCard
            label="Resources & References"
            description="Videos, specifications and documents on WoT use cases"
            path={'/use-cases/#resources' as Route}
            icon={<BookOpen />}
            sx={{ pointerEvents: 'none' }}
          />
          <LinkCard
            label="Application Domains"
            description="Manufacturing, energy, smart cities, healthcare and more"
            path={'/use-cases/#application-domains' as Route}
            icon={<Globe />}
            sx={{ pointerEvents: 'none' }}
          />
          <LinkCard
            label="Technology Trends"
            description="Digital twins, agentic systems, edge computing and AI"
            path={'/use-cases/#technology-trends' as Route}
            icon={<Rocket />}
            sx={{ pointerEvents: 'none' }}
          />
          <LinkCard
            label="Testimonials"
            description="Endorsments from industry leaders and W3C members"
            path={'/use-cases/#testimonials' as Route}
            icon={<Quote />}
            sx={{ pointerEvents: 'none' }}
          />
        </Box>
      </Stack>
    </PageSection>
  );
}
