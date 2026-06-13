import { LIAISONS } from '@/lib/liaisons';
import { Box, Stack, Typography } from '@mui/joy';
import { PageSection } from '../PageSection';
import { LinkButton } from '../LinkButton';

export function Liaisons() {
  return (
    <PageSection title="Liaisons">
      <Stack gap={4}>
        <Typography>
          Liaisons systematically coordinate efforts between the core WoT group and external bodies governing specific
          protocols, semantics, or domains
        </Typography>
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
