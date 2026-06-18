import { IconButton, Drawer, Stack, Card, Typography, Button, Divider, useTheme } from '@mui/joy';
import { Menu, X, ChevronLeft } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import { NavbarElement, NavbarSubpages } from './Navbar';
import Link from 'next/link';
import { NavigationDrawerFooter } from './NavigationDrawerFooter';
import { NAVBAR_ELEMENTS } from '@/lib/navbarElements';
import { isSubPath } from '@/lib/utils/path';
import { Route } from 'next';

export function TabletNavbar({ currentPage }: { currentPage: Route }) {
  const [open, setOpen] = useState(false);
  const [activeSubnavigation, setActiveSubnavigation] = useState<NavbarSubpages | null>(null);
  const [isSubnavigationOpen, setIsSubnavigationOpen] = useState(false);
  const [activeSubnavigationDescription, setActiveSubnavigationDescription] = useState<string | null>(null);
  const theme = useTheme();

  // Close the drawer when viewport leaves the tablet range (sm-md).
  // Handles both resizing up to desktop (lg+) and down to mobile (<sm).
  const closeOutsideTabletRange = useCallback(() => {
    const width = window.innerWidth;
    if (width >= theme.breakpoints.values.lg || width < theme.breakpoints.values.sm) {
      setOpen(false);
      setIsSubnavigationOpen(false);
    }
  }, [theme.breakpoints.values.lg, theme.breakpoints.values.sm]);

  useEffect(() => {
    window.addEventListener('resize', closeOutsideTabletRange);
    return () => window.removeEventListener('resize', closeOutsideTabletRange);
  }, [closeOutsideTabletRange]);

  const isCurrentPageActive = (page: NavbarElement) => {
    return isSubnavigationOpen && activeSubnavigation?.label === page.label;
  };

  return (
    <>
      <IconButton aria-label="Menu" variant="plain" onClick={() => setOpen(true)}>
        <Menu />
      </IconButton>
      <Drawer
        open={open}
        onClose={() => {
          setOpen(false);
          setIsSubnavigationOpen(false);
        }}
        anchor="right"
        size="sm"
        slotProps={{
          content: {
            sx: {
              overflow: 'visible',
            },
          },
        }}
      >
        <Card
          sx={{
            width: '320px',
            height: '100%',
            pt: 0,
            position: 'absolute',
            transform: isSubnavigationOpen ? 'translateX(-100%)' : 'translateX(0)',
            transition: 'transform 0.15s ease',
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          }}
        >
          <Stack>
            <Stack height="70px" justifyContent="center" my={2}>
              <Typography level="title-md" textAlign="center">
                {activeSubnavigationDescription ?? activeSubnavigation?.description}
              </Typography>
            </Stack>
            <Divider sx={{ mb: 3 }} />
            <Stack>
              {activeSubnavigation?.subpages.map((page) => (
                <Link
                  href={page.path}
                  key={page.path}
                  sx={{ width: '100%' }}
                  onMouseOver={() => {
                    setActiveSubnavigationDescription(page.description);
                  }}
                  onMouseLeave={() => {
                    setActiveSubnavigationDescription(null);
                  }}
                  onClick={() => {
                    setOpen(false);
                    setIsSubnavigationOpen(false);
                  }}
                >
                  <Button
                    size="lg"
                    fullWidth
                    sx={{ justifyContent: 'center' }}
                    color={isSubPath(currentPage, page.path) ? 'primary' : 'neutral'}
                    variant="plain"
                  >
                    {page.label}
                  </Button>
                </Link>
              ))}
            </Stack>
          </Stack>
        </Card>
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
                  setIsSubnavigationOpen(false);
                  setOpen(false);
                }}
              >
                <X />
              </IconButton>
            </Stack>
            <Stack gap={0.5}>
              {NAVBAR_ELEMENTS.map((page) =>
                'subpages' in page ? (
                  <Button
                    key={page.label}
                    color={
                      page.subpages.some((subpage) => isSubPath(currentPage, subpage.path)) ? 'primary' : 'neutral'
                    }
                    fullWidth
                    sx={{ justifyContent: 'flex-start', '& > span': { ml: -3.5, mr: 0.3 } }}
                    startDecorator={
                      <ChevronLeft
                        style={{
                          height: '16px',
                          margin: 0,
                          transform: isCurrentPageActive(page) ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.15s ease',
                        }}
                      />
                    }
                    variant="plain"
                    size="lg"
                    onClick={() => {
                      if (isCurrentPageActive(page)) {
                        setIsSubnavigationOpen(false);
                      } else setIsSubnavigationOpen(true);
                      setActiveSubnavigation(page);
                    }}
                  >
                    {page.label}
                  </Button>
                ) : (
                  <Link href={page.path} key={page.path} sx={{ width: '100%' }}>
                    <Button
                      size="lg"
                      fullWidth
                      sx={{ justifyContent: 'flex-start' }}
                      color={page.path === currentPage ? 'primary' : 'neutral'}
                      variant="plain"
                      onClick={() => {
                        setOpen(false);
                        setIsSubnavigationOpen(false);
                      }}
                    >
                      {page.label}
                    </Button>
                  </Link>
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
