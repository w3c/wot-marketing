'use client';

import { useTheme } from '@mui/joy';
import { useEffect, useState } from 'react';

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

type Input =
  | {
      up: Breakpoint;
    }
  | {
      down: Breakpoint;
    }
  | {
      between: [Breakpoint, Breakpoint];
    }
  | {
      outside: [Breakpoint, Breakpoint];
    };

/**
 * Hook to use theme breakpoints in order to apply styles only for specific screen sizes or range of screen sizes.
 *
 * @param param0 {
 *   up: greater than or equal to the breakpoint,
 *   down: less than or equal to the breakpoint,
 *   between: within the range [from: Breakpoint, to: Breakpoint],
 *   outside: outside the range [from: Breakpoint, to: Breakpoint]
 * }
 *
 * @returns {boolean | null} True if the current screen size matches the input, null if the hook is not set up yet.
 */
export function useBreakpointsMatch(input: Input): boolean | null {
  const theme = useTheme();
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
    return () => window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
  }, []);

  if (windowWidth) {
    if ('up' in input) {
      return windowWidth >= theme.breakpoints.values[input.up];
    }
    if ('down' in input) {
      return windowWidth <= theme.breakpoints.values[input.down];
    }
    if ('between' in input) {
      return (
        windowWidth >= theme.breakpoints.values[input.between[0]] &&
        windowWidth <= theme.breakpoints.values[input.between[1]]
      );
    }
    if ('outside' in input) {
      return (
        windowWidth < theme.breakpoints.values[input.outside[0]] ||
        windowWidth > theme.breakpoints.values[input.outside[1]]
      );
    }
  }
  return null;
}

export function useCurrentBreakpoint() {
  const theme = useTheme();
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setWindowWidth(window.innerWidth);
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
    return () => window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
  }, []);

  if (windowWidth) {
    if (windowWidth >= theme.breakpoints.values.xl) {
      return 'xl';
    }
    if (windowWidth >= theme.breakpoints.values.lg) {
      return 'lg';
    }
    if (windowWidth >= theme.breakpoints.values.md) {
      return 'md';
    }
    if (windowWidth >= theme.breakpoints.values.sm) {
      return 'sm';
    }
    return 'xs';
  }
  return null;
}
