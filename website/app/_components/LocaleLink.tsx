'use client';

import NextLink from 'next/link';
import type { Route } from 'next';
import { forwardRef, type ComponentPropsWithoutRef } from 'react';
import { localizeHref } from '@/lib/i18n/config';
import { useLang } from './i18n/LocaleProvider';

type LocaleLinkProps = Omit<ComponentPropsWithoutRef<typeof NextLink>, 'href'> & {
  href: string;
};

/**
 * Drop-in replacement for `next/link` that automatically prefixes internal,
 * locale-agnostic paths (e.g. `/developers/tools`) with the active locale.
 * External URLs, hashes and already-localized paths are left untouched.
 */
export const LocaleLink = forwardRef<HTMLAnchorElement, LocaleLinkProps>(function LocaleLink({ href, ...props }, ref) {
  const lang = useLang();
  return <NextLink ref={ref} href={localizeHref(lang, href) as Route} {...props} />;
});

export default LocaleLink;
