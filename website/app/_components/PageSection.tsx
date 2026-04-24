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
    <Stack sx={sx}>
      <Typography level="h3" color="primary" id={id}>
        {title}
      </Typography>
      <Divider color="primary" sx={{ mt: 1, mb: 2 }} />

      {children}
    </Stack>
  );
}
