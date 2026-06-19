'use client';

import { Button, ButtonProps } from '@mui/joy';
import { Route } from 'next';
import NextLink from 'next/link';
import { localizeHref } from '@/lib/i18n/config';
import { useLang } from './i18n/LocaleProvider';

/**
 * At the same time only one of path or external_url can be used
 */
export type LinkButtonProps =
  | {
      path: Route | undefined | null;
      external_url?: undefined;
    }
  | {
      external_url: string | undefined | null;
      path?: undefined;
    };

export function LinkButton({ children, path, external_url, sx, ...props }: ButtonProps & LinkButtonProps) {
  const lang = useLang();
  const href = path ? localizeHref(lang, path) : (external_url ?? '');
  return (
    <Button
      variant="outlined"
      color="neutral"
      component={NextLink}
      href={href}
      sx={{
        pointerEvents: path || external_url ? 'auto' : 'none',
        whiteSpace: 'normal',
        textAlign: 'center',
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
}
