import { Divider, Stack, Typography } from '@mui/joy';
import { SxProps } from '@mui/joy/styles/types';
import { PropsWithChildren, ReactNode } from 'react';

export function PageSection({
  title,
  children,
  sx,
  id,
}: PropsWithChildren<{ title: ReactNode; sx?: SxProps; id?: string }>) {
  return (
    <Stack className="content-section" sx={sx}>
      <Typography className="section-title" level="h3" id={id}>
        {title}
      </Typography>
      <Divider className="section-divider" sx={{ mt: 1.5, mb: 3 }} />

      {children}
    </Stack>
  );
}
