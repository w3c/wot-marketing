import { Select, Option } from '@mui/joy';
import { usePathname, useRouter } from 'next/navigation';
import type { Route } from 'next';
import { LOCALES, LOCALE_NAMES, localizeHref, stripLocale, type Locale } from '@/lib/i18n/config';
import { useLang } from './LocaleProvider';

/**
 * Language switcher that keeps the visitor on the equivalent page in the
 * selected locale (preserving the current sub-path).
 */
export function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLang = useLang();

  const switchTo = (locale: Locale) => {
    const basePath = stripLocale(pathname);
    router.push(localizeHref(locale, basePath) as Route);
  };

  return (
    <Select
      size="sm"
      variant="outlined"
      value={currentLang}
      onChange={(_, newValue) => switchTo(newValue as Locale)}
      sx={{ width: 95 }}
    >
      {LOCALES.map((locale) => (
        <Option key={locale} value={locale}>
          {LOCALE_NAMES[locale]}
        </Option>
      ))}
    </Select>
  );
}
