import { ButtonGroup, Button } from '@mui/joy';
import Link from 'next/link';
import { NavbarSubpages } from './Navbar';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { isSubPath } from '@/lib/utils/path';
import { NAVBAR_ELEMENTS } from '@/lib/navbarElements';
import { Route } from 'next';
import { LinkButton } from '../LinkButton';

export function DesktopNavbar({
  pathName,
  activeSubnavigation,
  setActiveSubnavigation,
  isSubnavigationOpen,
  setIsSubnavigationOpen,
}: {
  pathName: Route;
  activeSubnavigation: NavbarSubpages | null;
  setActiveSubnavigation: (subnavigation: NavbarSubpages | null) => void;
  isSubnavigationOpen: boolean;
  setIsSubnavigationOpen: (isOpen: boolean) => void;
}) {
  const toggleSubnavigation = (subnavigation: NavbarSubpages) => {
    if (subnavigation.label === activeSubnavigation?.label && isSubnavigationOpen) {
      setIsSubnavigationOpen(false);
    } else {
      setActiveSubnavigation(subnavigation);
      setIsSubnavigationOpen(true);
    }
  };

  return (
    <>
      <ButtonGroup variant="plain" spacing={0.1} size="lg">
        {NAVBAR_ELEMENTS.map((page) =>
          'subpages' in page ? (
            <Button
              key={page.label}
              color={page.subpages.some((subpage) => isSubPath(pathName, subpage.path)) ? 'primary' : 'neutral'}
              endDecorator={
                <ChevronDown
                  size={16}
                  style={{
                    transform:
                      isSubnavigationOpen && activeSubnavigation?.label === page.label
                        ? 'rotate(180deg)'
                        : 'rotate(0deg)',
                    transition: 'transform 0.15s ease-out',
                  }}
                />
              }
              onClick={() => {
                toggleSubnavigation(page);
              }}
            >
              {page.label}
            </Button>
          ) : (
            <LinkButton
              key={page.label}
              path={page.path}
              color={isSubPath(pathName, page.path) ? 'primary' : 'neutral'}
              variant="plain"
              onClick={() => setIsSubnavigationOpen(false)}
            >
              {page.label}
            </LinkButton>
          )
        )}
      </ButtonGroup>
      <Link
        href="https://www.w3.org/"
        sx={{ transform: 'translateY(9px)', width: '250px', display: 'flex', justifyContent: 'flex-end' }}
      >
        <Image src="https://www.w3.org/assets/logos/w3c-2025/svg/w3c.svg" alt="W3C Logo" width={36} height={36} />
      </Link>
    </>
  );
}
