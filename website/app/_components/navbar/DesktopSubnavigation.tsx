import { Divider, List, MenuItem, MenuList, Stack, Typography, useTheme } from '@mui/joy';
import { NavbarSubpages } from './Navbar';
import { useState, useEffect, useCallback } from 'react';
import { LocaleLink as Link } from '../LocaleLink';
import { isSubPath } from '@/lib/utils/path';
import { Route } from 'next';

export function DesktopSubnavigation({
  subnavigation,
  isOpen,
  setOpen,
  pathName,
}: {
  subnavigation: NavbarSubpages | null;
  isOpen: boolean;
  setOpen: (open: boolean) => void;
  pathName: Route;
}) {
  const [activeSubpageDescription, setActiveSubpageDescription] = useState<string | null>(null);
  const theme = useTheme();

  // Close the subnavigation when viewport drops below desktop range (< lg)
  const closeOnNonDesktop = useCallback(() => {
    if (window.innerWidth < theme.breakpoints.values.lg) {
      setOpen(false);
    }
  }, [theme.breakpoints.values.lg, setOpen]);

  useEffect(() => {
    window.addEventListener('resize', closeOnNonDesktop);
    return () => window.removeEventListener('resize', closeOnNonDesktop);
  }, [closeOnNonDesktop]);
  return (
    <MenuList
      size="md"
      sx={{
        position: 'absolute',
        width: '90%',
        maxWidth: '800px',
        left: '50%',
        transform: isOpen ? 'translate(-50%)' : 'translate(-50%, -100%)',
        opacity: isOpen ? 1 : 0,
        zIndex: -50,
        borderTop: 'none',
        borderTopLeftRadius: '0px',
        borderTopRightRadius: '0px',
        transition: 'transform 0.15s ease-out, opacity 0.15s ease-out',
        paddingTop: '70px',
        boxShadow: 'lg',
      }}
    >
      <Stack direction="row" alignItems="center" justifyContent="space-between" gap={4} p={2}>
        <List>
          {subnavigation?.subpages.map((subpage) => (
            <MenuItem
              key={subpage.label}
              sx={{ fontWeight: 600 }}
              onMouseOver={() => {
                setActiveSubpageDescription(subpage.description);
              }}
              onMouseLeave={() => {
                setActiveSubpageDescription(null);
              }}
              onClick={() => {
                setOpen(false);
              }}
              component={Link}
              href={subpage.path}
              color={isSubPath(pathName, subpage.path) ? 'primary' : 'neutral'}
            >
              {subpage.label}
            </MenuItem>
          ))}
        </List>
        <Divider orientation="vertical" />
        <Typography sx={{ width: '50%' }}>{activeSubpageDescription ?? subnavigation?.description}</Typography>
      </Stack>
    </MenuList>
  );
}
