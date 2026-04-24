'use client';

import { Card, Stack, Tooltip, Typography } from '@mui/joy';

export function Footer() {
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
      <Typography level="title-sm">Copyright © 2026 World Wide Web Consortium</Typography>
      <Stack direction="row" gap={0.5}>
        <Tooltip title="World Wide Web Consortium" variant="plain" size="lg">
          <Typography level="title-sm" sx={{ display: 'inline', cursor: 'help', textDecoration: 'underline dotted' }}>
            W3C®
          </Typography>
        </Tooltip>
        <Typography level="title-sm">liability, trademark and permissive license rules apply</Typography>
      </Stack>
    </Card>
  );
}
