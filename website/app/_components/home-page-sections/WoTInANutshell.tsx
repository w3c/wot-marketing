import { Box, Stack, Typography } from '@mui/joy';
import Image from 'next/image';
import iotProjectsImg from '@/public/iot-projects.png';
import { PageSection } from '../PageSection';

export function WoTInANutshell() {
  return (
    <PageSection title="WoT in a Nutshell">
      <Stack direction={{ xs: 'column-reverse', md: 'row' }} gap={4}>
        <Stack gap={2} sx={{ width: { xs: '100%', md: '50%' } }}>
          <Typography>
            In typical IoT projects, developers face a fragmented landscape of proprietary systems, incompatible
            communication protocols, differing data models, and varying security requirements. Applications built this
            way demand high effort for narrow use cases and become difficult to extend, maintain, or reuse over time.
          </Typography>
          <Typography>
            WoT provides standardized building blocks that simplify IoT application development by applying the
            well-established Web paradigm. This approach boosts flexibility and interoperability, especially for
            cross-domain scenarios, while enabling reuse of proven standards and tooling. WoT unlocks the commercial
            potential held back by IoT fragmentation.
          </Typography>
        </Stack>
        <Box sx={{ width: { xs: '100%', md: '50%' } }}>
          <Image
            src={iotProjectsImg}
            alt="section image"
            sx={{ width: '100%', height: 'auto', objectFit: 'contain' }}
          />
        </Box>
      </Stack>
    </PageSection>
  );
}
