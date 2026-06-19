'use client';
import { Box, Stack, Typography } from '@mui/joy';
import Image from 'next/image';
import iotProjectsImg from '@/public/iot-projects.png';
import { PageSection } from '../PageSection';
import { useDictionary } from '../i18n/LocaleProvider';

export function WoTInANutshell() {
  const t = useDictionary().home.nutshell;
  return (
    <PageSection title={t.title}>
      <Stack direction={{ xs: 'column-reverse', md: 'row' }} gap={4}>
        <Stack gap={2} sx={{ width: { xs: '100%', md: '50%' } }}>
          <Typography>{t.p1}</Typography>
          <Typography>{t.p2}</Typography>
        </Stack>
        <Box sx={{ width: { xs: '100%', md: '50%' } }}>
          <Image
            src={iotProjectsImg}
            alt="section image"
            style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
          />
        </Box>
      </Stack>
    </PageSection>
  );
}
