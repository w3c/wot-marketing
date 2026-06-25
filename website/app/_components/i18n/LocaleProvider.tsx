'use client';

import { createContext, useContext } from 'react';
import type { Locale } from '@/lib/i18n/config';
import { DEFAULT_LOCALE } from '@/lib/i18n/config';
import type { Dictionary } from '@/lib/i18n/dictionaries';
import { getDictionary } from '@/lib/i18n/dictionaries';

type LocaleContextValue = {
  lang: Locale;
  dict: Dictionary;
};

const LocaleContext = createContext<LocaleContextValue>({
  lang: DEFAULT_LOCALE,
  dict: getDictionary(DEFAULT_LOCALE),
});

export function LocaleProvider({
  lang,
  dict,
  children,
}: {
  lang: Locale;
  dict: Dictionary;
  children: React.ReactNode;
}) {
  return <LocaleContext.Provider value={{ lang, dict }}>{children}</LocaleContext.Provider>;
}

/** Returns the active locale on the client. */
export function useLang(): Locale {
  return useContext(LocaleContext).lang;
}

/** Returns the active dictionary on the client. */
export function useDictionary(): Dictionary {
  return useContext(LocaleContext).dict;
}
