import { NextResponse, type NextRequest } from 'next/server';
import { DEFAULT_LOCALE, isLocale } from '@/lib/i18n/config';

const PUBLIC_FILE = /\.(.*)$/;
const LOCALE_LIKE_SEGMENT = /^[a-z]{2}(?:-[a-z0-9]+)?$/i;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/_next') || pathname.startsWith('/api') || PUBLIC_FILE.test(pathname)) {
    return NextResponse.next();
  }

  const segments = pathname.split('/').filter(Boolean);
  const firstSegment = segments[0];
  if (isLocale(firstSegment)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  const pathWithoutUnsupportedLocale = LOCALE_LIKE_SEGMENT.test(firstSegment ?? '') ? segments.slice(1).join('/') : segments.join('/');
  url.pathname = pathWithoutUnsupportedLocale ? `/${DEFAULT_LOCALE}/${pathWithoutUnsupportedLocale}` : `/${DEFAULT_LOCALE}`;
  return NextResponse.redirect(url);
}
