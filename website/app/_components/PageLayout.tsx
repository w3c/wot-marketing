import { Stack, Typography, Box } from '@mui/joy';
import { PropsWithChildren, ReactNode } from 'react';
import { NavBreadcrumbs } from './NavBreadcrumbs';
import { Route } from 'next';

export function PageLayout({
  title,
  banner,
  subtitle,
  breadcrumbs,
  children,
}: PropsWithChildren<{
  title: string;
  subtitle: ReactNode;
  banner?: ReactNode;
  breadcrumbs?: { startingPath: Route };
}>) {
  return (
    <Stack alignItems="center" p={{ xs: 2, md: 4 }}>
      <Stack sx={{ gap: 1, maxWidth: '1200px', width: '100%', mt: breadcrumbs ? -3 : 0 }}>
        <Stack gap={1.5}>
          {breadcrumbs && <NavBreadcrumbs startingPath={breadcrumbs.startingPath} currentPageTitle={title} />}
          <Stack gap={0.5}>
            <Typography level="h1">{title}</Typography>
            <Typography level="title-md">{subtitle}</Typography>
          </Stack>
          {banner && <Box mt={1}>{banner}</Box>}
        </Stack>
        <Stack gap={12} mt={4}>
          {children}
        </Stack>
      </Stack>
    </Stack>
  );
}
