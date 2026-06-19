'use client';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { REDIRECTS } from '@/lib/redirects';
import { Route } from 'next';
import { localizeHref, stripLocale, getLocaleFromPathname } from '@/lib/i18n/config';

/**
 * Matches a path against a pattern (e.g., /path/:slug)
 * @returns An object with parameters if matched, otherwise null
 */
function matchPath(pattern: string, path: string) {
  const normalize = (p: string) => (p.length > 1 && p.endsWith('/') ? p.slice(0, -1) : p);
  const normalizedPattern = normalize(pattern);
  const normalizedPath = normalize(path);

  // Convert :param to named capture groups
  const regexPattern = normalizedPattern.replace(/:([^\/]+)/g, '(?<$1>[^/]+)');
  const regex = new RegExp(`^${regexPattern}$`);
  const match = normalizedPath.match(regex);
  if (!match) return null;
  return match.groups || {};
}

/**
 * Handles all internal redirects.
 * Checks if the current path matches any of the redirect sources and replaces it with the destination.
 */
export function Redirects() {
  const path = usePathname();
  const router = useRouter();

  useEffect(() => {
    const lang = getLocaleFromPathname(path);
    const localeAgnosticPath = stripLocale(path);
    for (const redirect of REDIRECTS) {
      const params = matchPath(redirect.source, localeAgnosticPath);
      if (params) {
        let destination = redirect.destination;
        // Replace parameters in the destination string
        for (const [key, value] of Object.entries(params)) {
          destination = destination.replace(`:${key}`, value) as Route;
        }

        router.replace(localizeHref(lang, destination) as Route);
        return;
      }
    }
  }, [path, router]);

  return null;
}
