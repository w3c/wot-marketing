import { Stack, Typography } from '@mui/joy';
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
    <Stack alignItems="center" p={4} mt={2}>
      <Stack sx={{ gap: 1, maxWidth: '1200px', width: '100%' }}>
        {breadcrumbs && <NavBreadcrumbs startingPath={breadcrumbs.startingPath} currentPageTitle={title} />}
        <Typography level="h2">
          <Stack direction="row" gap={2} alignItems="center">
            <Stack>{title}</Stack>
            {banner}
          </Stack>
        </Typography>
        <Typography level="title-md" mb={4}>
          {subtitle}
        </Typography>
        <Stack gap={8}>{children}</Stack>
      </Stack>
    </Stack>
  );
}
