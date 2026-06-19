/**
 * Internationalization configuration for the W3C WoT website.
 *
 * The site uses sub-path based routing (e.g. `/en/...`, `/de/...`). When no
 * locale is present in the URL the visitor is redirected to the default
 * locale (English).
 */

export const LOCALES = ['en', 'de', 'es', 'ru', 'zh'] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

/** Human readable names shown in the language switcher (in their own language). */
export const LOCALE_NAMES: Record<Locale, string> = {
  en: 'English',
  de: 'Deutsch',
  es: 'Español',
  ru: 'Русский',
  zh: '中文',
};

/** BCP-47 language tags used for the `lang`/`hreflang` attributes. */
export const LOCALE_HREFLANG: Record<Locale, string> = {
  en: 'en',
  de: 'de',
  es: 'es',
  ru: 'ru',
  zh: 'zh-Hans',
};

export function isLocale(value: string | undefined | null): value is Locale {
  return !!value && (LOCALES as readonly string[]).includes(value);
}

/**
 * Removes a leading locale segment from a pathname.
 * `/de/developers/tools` -> `/developers/tools`, `/en` -> `/`.
 */
export function stripLocale(pathname: string): string {
  const segments = pathname.split('/');
  // segments[0] is '' because pathname starts with '/'
  if (isLocale(segments[1])) {
    const rest = '/' + segments.slice(2).join('/');
    return rest === '/' ? '/' : rest.replace(/\/$/, '') || '/';
  }
  return pathname;
}

/**
 * Returns the locale contained in a pathname, or the default locale.
 */
export function getLocaleFromPathname(pathname: string): Locale {
  const maybe = pathname.split('/')[1];
  return isLocale(maybe) ? maybe : DEFAULT_LOCALE;
}

/**
 * Prefixes an internal, locale-agnostic path with the active locale.
 * External URLs, hashes and already-localized paths are returned unchanged.
 */
export function localizeHref(locale: Locale, href: string): string {
  if (!href) return href;
  // Leave external links, protocol-relative, mailto, tel and pure hashes alone.
  if (!href.startsWith('/') || href.startsWith('//')) return href;

  const [pathPart, hashPart = ''] = href.split('#');
  const hash = hashPart ? `#${hashPart}` : '';

  const segments = pathPart.split('/');
  if (isLocale(segments[1])) {
    // Already localized.
    return href;
  }

  const normalized = pathPart === '/' ? '' : pathPart;
  return `/${locale}${normalized}${hash}`;
}
