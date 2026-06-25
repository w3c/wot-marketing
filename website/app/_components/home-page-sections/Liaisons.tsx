'use client';
import { LIAISONS } from '@/lib/liaisons';
import { Box, Stack, Typography } from '@mui/joy';
import { PageSection } from '../PageSection';
import { LinkButton } from '../LinkButton';
import { useDictionary } from '../i18n/LocaleProvider';

export function Liaisons() {
  const t = useDictionary().home.liaisons;
  return (
    <PageSection title={t.title}>
      <Stack gap={4}>
        <Typography>{t.intro}</Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gridAutoRows: '1fr',
            gap: 2,
          }}
        >
          {LIAISONS.map((liaison, index) => (
            <LinkButton key={liaison.title + index} external_url={liaison.url}>
              {liaison.title}
            </LinkButton>
          ))}
        </Box>
      </Stack>
    </PageSection>
  );
}
