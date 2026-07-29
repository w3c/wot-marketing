import { Stack, Box } from '@mui/joy';
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
    <div className="inner-page">
      <section className="page-hero">
        <div className="page-hero-grid" />
        <div className="page-shell">
          {breadcrumbs && <NavBreadcrumbs startingPath={breadcrumbs.startingPath} currentPageTitle={title} />}
          <div className="page-kicker">W3C WEB OF THINGS</div>
          <h1>{title}</h1>
          <div className="page-subtitle">{subtitle}</div>
          {banner && <Box className="page-banner">{banner}</Box>}
        </div>
      </section>
      <Stack component="div" className="page-shell page-content" gap={{ xs: 8, md: 12 }}>
        {children}
      </Stack>
    </div>
  );
}
