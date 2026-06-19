import { ButtonGroup, Button, Stack } from '@mui/joy';
import Link from 'next/link';
import { NavbarSubpages } from './Navbar';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { isSubPath } from '@/lib/utils/path';
import { buildNavbarElements } from '@/lib/navbarElements';
import { useDictionary } from '../i18n/LocaleProvider';
import { Route } from 'next';
import { LinkButton } from '../LinkButton';
import { LanguageSwitcher } from '../i18n/LanguageSwitcher';

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
  const NAVBAR_ELEMENTS = buildNavbarElements(useDictionary());
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
      <Stack direction="row" alignItems="center" gap={2} justifyContent="flex-end">
        {/* Language switcher - always visible */}
        <LanguageSwitcher />
        <Link href="https://www.w3.org/">
          <Image src="https://www.w3.org/assets/logos/w3c-2025/svg/w3c.svg" alt="W3C Logo" width={36} height={36} />
        </Link>
      </Stack>
    </>
  );
}
