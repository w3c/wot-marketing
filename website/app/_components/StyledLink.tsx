'use client';

import { Link, LinkProps } from '@mui/joy';
import NextLink from 'next/link';
import { LinkButtonProps } from './LinkButton';

export function StyledLink({ path, external_url, children, ...props }: LinkProps & LinkButtonProps) {
  if (!path) {
    return (
      <Link {...props} href={external_url ?? ''}>
        {children}
      </Link>
    );
  }
  return (
    <Link {...props} component={NextLink} href={path ?? ''}>
      {children}
    </Link>
  );
}
