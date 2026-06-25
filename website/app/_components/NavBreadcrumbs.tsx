'use client';
import { Breadcrumbs, Card, Typography } from '@mui/joy';
import { StyledLink } from './StyledLink';
import { usePathname } from 'next/navigation';
import { Route } from 'next';
import { stripLocale } from '@/lib/i18n/config';

export function NavBreadcrumbs({ startingPath, currentPageTitle }: { startingPath: Route; currentPageTitle: string }) {
  const pathname = stripLocale(usePathname());
  const paths = pathname
    .split('/')
    .filter((path) => path)
    .slice(0, -1);

  const startingPathIndex = startingPath.split('/').filter((path) => path).length - 1;
  const visiblePaths = paths.slice(startingPathIndex);

  return (
    <Card variant="soft" size="sm" sx={{ py: 0.5, mt: -2, mb: 1 }}>
      <Breadcrumbs aria-label="breadcrumb" size="sm">
        {visiblePaths.map((path, index) => {
          const label = path
            .split('-')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
          const href = '/' + paths.slice(0, startingPathIndex + index + 1).join('/');
          return (
            <StyledLink key={label} path={href as Route}>
              {label}
            </StyledLink>
          );
        })}
        <Typography>{currentPageTitle.replace(/[/-]/g, ' ')}</Typography>
      </Breadcrumbs>
    </Card>
  );
}
