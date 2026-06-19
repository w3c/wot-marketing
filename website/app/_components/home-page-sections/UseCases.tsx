'use client';
import { Box, Stack, Typography } from '@mui/joy';
import { PageSection } from '../PageSection';
import { BookOpen, Globe, Quote, Rocket } from 'lucide-react';
import { LinkCard } from '../LinkCard';
import { Route } from 'next';
import { LinkButton } from '../LinkButton';
import { useDictionary } from '../i18n/LocaleProvider';

export function UseCases() {
  const t = useDictionary().home.useCases;
  return (
    <PageSection title={t.title}>
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
            <Typography>{t.p1}</Typography>
            <Typography>{t.p2}</Typography>
          </Stack>
          <LinkButton path="/use-cases">{t.cta}</LinkButton>
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
            label={t.resources.label}
            description={t.resources.description}
            path={'/use-cases/#resources' as Route}
            icon={<BookOpen />}
            sx={{ pointerEvents: 'none' }}
          />
          <LinkCard
            label={t.domains.label}
            description={t.domains.description}
            path={'/use-cases/#application-domains' as Route}
            icon={<Globe />}
            sx={{ pointerEvents: 'none' }}
          />
          <LinkCard
            label={t.trends.label}
            description={t.trends.description}
            path={'/use-cases/#technology-trends' as Route}
            icon={<Rocket />}
            sx={{ pointerEvents: 'none' }}
          />
          <LinkCard
            label={t.testimonials.label}
            description={t.testimonials.description}
            path={'/use-cases/#testimonials' as Route}
            icon={<Quote />}
            sx={{ pointerEvents: 'none' }}
          />
        </Box>
      </Stack>
    </PageSection>
  );
}
