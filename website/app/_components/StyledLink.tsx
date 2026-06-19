'use client';

import { Link, LinkProps } from '@mui/joy';
import NextLink from 'next/link';
import type { Route } from 'next';
import { LinkButtonProps } from './LinkButton';
import { localizeHref } from '@/lib/i18n/config';
import { useLang } from './i18n/LocaleProvider';

export function StyledLink({ path, external_url, children, ...props }: LinkProps & LinkButtonProps) {
  const lang = useLang();
  if (!path) {
    return (
      <Link {...props} href={external_url ?? ''}>
        {children}
      </Link>
    );
  }
  return (
    <Link {...props} component={NextLink} href={localizeHref(lang, path) as Route}>
      {children}
    </Link>
  );
}
