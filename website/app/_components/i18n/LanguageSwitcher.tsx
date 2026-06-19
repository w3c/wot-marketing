'use client';

import { Dropdown, IconButton, Menu, MenuButton, MenuItem } from '@mui/joy';
import { Languages, Check } from 'lucide-react';
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
    <Dropdown>
      <MenuButton
        slots={{ root: IconButton }}
        slotProps={{ root: { variant: 'plain', color: 'neutral', 'aria-label': 'Select language' } }}
      >
        <Languages size={20} />
      </MenuButton>
      <Menu size="sm" placement="bottom-end">
        {LOCALES.map((locale) => (
          <MenuItem
            key={locale}
            selected={locale === currentLang}
            onClick={() => switchTo(locale)}
            sx={{ minWidth: 140, justifyContent: 'space-between' }}
          >
            {LOCALE_NAMES[locale]}
            {locale === currentLang && <Check size={16} />}
          </MenuItem>
        ))}
      </Menu>
    </Dropdown>
  );
}
