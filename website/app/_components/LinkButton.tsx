'use client';

import { Button, ButtonProps } from '@mui/joy';
import { Route } from 'next';
import NextLink from 'next/link';

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
  return (
    <Button
      variant="outlined"
      color="neutral"
      component={NextLink}
      href={path ?? external_url ?? ''}
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
