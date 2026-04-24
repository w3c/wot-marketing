import { Route } from 'next';
import { usePathname } from 'next/navigation';

export function isSubPath(path: Route, parent: Route) {
  if (parent === '/') {
    return path === parent;
  }
  return path.startsWith(parent);
}

export function useTypedPathname() {
  const pathName = usePathname();
  return pathName as Route;
}
