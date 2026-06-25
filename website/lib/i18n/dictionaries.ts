import type { Locale } from './config';
import { DEFAULT_LOCALE } from './config';
import en from './dictionaries/en.json';
import ru from './dictionaries/ru.json';
import zh from './dictionaries/zh.json';

/** The dictionary shape, inferred from the English source of truth. */
export type Dictionary = typeof en;

const dictionaries: Record<Locale, Dictionary> = {
  en,
  ru,
  zh,
};

/**
 * Returns the dictionary for the given locale, falling back to the default
 * locale for unknown values. Safe to use in both Server and Client Components
 * because the dictionaries are plain JSON bundled at build time.
 */
export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE];
}
