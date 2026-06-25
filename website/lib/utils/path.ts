import { Route } from 'next';
import { usePathname } from 'next/navigation';
import { stripLocale } from '@/lib/i18n/config';

export function isSubPath(path: Route, parent: Route) {
  if (parent === '/') {
    return path === parent;
  }
  return path.startsWith(parent);
}

/**
 * Returns the current pathname with the leading locale segment removed, so that
 * navigation logic can keep comparing against locale-agnostic paths.
 */
export function useTypedPathname() {
  const pathName = usePathname();
  return stripLocale(pathName) as Route;
}
