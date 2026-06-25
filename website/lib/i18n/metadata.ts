import type { Metadata } from 'next';
import { LOCALES, LOCALE_HREFLANG, DEFAULT_LOCALE, type Locale } from './config';

/**
 * Absolute origin of the deployed site, used to build canonical and
 * `hreflang` alternate URLs for SEO. Override with `NEXT_PUBLIC_SITE_URL`.
 */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://w3c.github.io').replace(/\/$/, '');

/** Base path of the deployment (mirrors `basePath` in next.config.ts). */
export const BASE_PATH = process.env.GITHUB_PAGES === 'true' ? '/WoT' : '';

function absolute(locale: Locale, pathWithoutLocale: string): string {
  const clean = pathWithoutLocale === '/' ? '' : pathWithoutLocale.replace(/\/$/, '');
  return `${SITE_URL}${BASE_PATH}/${locale}${clean}`;
}

/**
 * Builds canonical + `hreflang` alternate links for a locale-agnostic path.
 * Adds an `x-default` pointing at the default locale so search engines know
 * which version to show when no language matches.
 */
export function getAlternates(lang: Locale, pathWithoutLocale: string): Metadata['alternates'] {
  const languages: Record<string, string> = {};
  for (const locale of LOCALES) {
    languages[LOCALE_HREFLANG[locale]] = absolute(locale, pathWithoutLocale);
  }
  languages['x-default'] = absolute(DEFAULT_LOCALE, pathWithoutLocale);

  return {
    canonical: absolute(lang, pathWithoutLocale),
    languages,
  };
}

/**
 * Convenience builder for a route page's metadata: localized title/description
 * plus canonical + `hreflang` alternates for the given locale-agnostic path.
 */
export function pageMetadata(
  lang: Locale,
  pathWithoutLocale: string,
  opts: { title?: string; description?: string }
): Metadata {
  return {
    title: opts.title,
    description: opts.description,
    alternates: getAlternates(lang, pathWithoutLocale),
  };
}
