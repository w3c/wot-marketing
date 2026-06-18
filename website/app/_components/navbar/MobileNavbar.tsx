import {
  IconButton,
  Drawer,
  Stack,
  Card,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionGroup,
  useTheme,
  Button,
} from '@mui/joy';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import { NavbarSubpages } from './Navbar';
import { NavigationDrawerFooter } from './NavigationDrawerFooter';
import Link from 'next/link';
import { NAVBAR_ELEMENTS } from '@/lib/navbarElements';
import { Route } from 'next';
import { isSubPath } from '@/lib/utils/path';

export function MobileNavbar({ currentPage }: { currentPage: Route }) {
  const [open, setOpen] = useState(false);
  const [activeSubnavigation, setActiveSubnavigation] = useState<NavbarSubpages | null>(null);
  const theme = useTheme();

  // Close the drawer when viewport crosses into tablet/desktop range (sm+)
  // so no drawer traces remain when resizing from mobile to a larger viewport.
  const closeOnLargerViewport = useCallback(() => {
    if (window.innerWidth >= theme.breakpoints.values.sm) {
      setOpen(false);
      setActiveSubnavigation(null);
    }
  }, [theme.breakpoints.values.sm]);

  useEffect(() => {
    window.addEventListener('resize', closeOnLargerViewport);
    return () => window.removeEventListener('resize', closeOnLargerViewport);
  }, [closeOnLargerViewport]);

  return (
    <>
      <IconButton aria-label="Menu" variant="plain" onClick={() => setOpen(true)}>
        <Menu />
      </IconButton>
      <Drawer
        open={open}
        onClose={() => {
          setOpen(false);
          setActiveSubnavigation(null);
        }}
        anchor="right"
        size="sm"
      >
        <Card
          sx={{
            justifyContent: 'space-between',
            height: '100%',
            borderRadius: 0,
            p: 4,
          }}
        >
          <Stack gap={4}>
            <Stack direction="row" justifyContent="space-between" alignItems="center">
              <Typography level="h3">Navigation</Typography>
              <IconButton
                onClick={() => {
                  setOpen(false);
                  setActiveSubnavigation(null);
                }}
              >
                <X />
              </IconButton>
            </Stack>
            <Stack gap={0.5}>
              {NAVBAR_ELEMENTS.map((page) =>
                'subpages' in page ? (
                  <AccordionGroup key={page.label}>
                    <Accordion expanded={activeSubnavigation?.label === page.label} sx={{ p: 0 }}>
                      <NavigationButton
                        key={page.label}
                        label={page.label}
                        color={
                          page.subpages.some((subpage) => isSubPath(currentPage, subpage.path)) ? 'primary' : 'neutral'
                        }
                        onClick={() => {
                          setActiveSubnavigation(activeSubnavigation?.label === page.label ? null : page);
                        }}
                        endDecorator={
                          <ChevronDown
                            size={16}
                            style={{
                              transform: activeSubnavigation?.label === page.label ? 'rotate(180deg)' : 'rotate(0deg)',
                              transition: 'transform 0.2s ease-in-out',
                            }}
                          />
                        }
                      />
                      <AccordionDetails
                        slotProps={{
                          content: {
                            style: {
                              p: 0,
                              ml: 3.5,
                            },
                          },
                        }}
                      >
                        <Stack gap={0.5}>
                          {page.subpages.map((subpage) => (
                            <NavigationButton
                              key={subpage.label}
                              label={subpage.label}
                              path={subpage.path}
                              color={isSubPath(currentPage, subpage.path) ? 'primary' : 'neutral'}
                              onClick={() => {
                                setOpen(false);
                                setActiveSubnavigation(null);
                              }}
                            />
                          ))}
                        </Stack>
                      </AccordionDetails>
                    </Accordion>
                  </AccordionGroup>
                ) : (
                  <NavigationButton
                    key={page.label}
                    label={page.label}
                    path={page.path}
                    color={isSubPath(currentPage, page.path) ? 'primary' : 'neutral'}
                    onClick={() => {
                      setOpen(false);
                      setActiveSubnavigation(null);
                    }}
                  />
                )
              )}
            </Stack>
          </Stack>
          <NavigationDrawerFooter />
        </Card>
      </Drawer>
    </>
  );
}

function NavigationButton({
  label,
  path,
  color,
  onClick,
  endDecorator,
}: {
  label: string;
  path?: Route;
  color: 'primary' | 'neutral';
  onClick: () => void;
  endDecorator?: React.ReactNode;
}) {
  return (
    <Button
      href={path}
      size="lg"
      fullWidth
      sx={{ justifyContent: 'flex-start' }}
      color={color}
      variant="plain"
      onClick={onClick}
      endDecorator={endDecorator}
      component={path ? Link : 'button'}
    >
      {label}
    </Button>
  );
}
