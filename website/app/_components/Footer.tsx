'use client';

import { Card, Stack, Tooltip, Typography } from '@mui/joy';
import { useDictionary } from './i18n/LocaleProvider';

export function Footer() {
  const dict = useDictionary();
  return (
    <Card
      sx={{
        p: 0.5,
        gap: 0,
        borderRadius: 0,
        alignItems: 'center',
        mt: 6,
      }}
    >
      <Typography level="title-sm">{dict.footer.copyright}</Typography>
      <Stack direction="row" gap={0.5}>
        <Tooltip title={dict.footer.w3cTooltip} variant="plain" size="lg">
          <Typography level="title-sm" sx={{ display: 'inline', cursor: 'help', textDecoration: 'underline dotted' }}>
            W3C®
          </Typography>
        </Tooltip>
        <Typography level="title-sm">{dict.footer.rules}</Typography>
      </Stack>
    </Card>
  );
}
