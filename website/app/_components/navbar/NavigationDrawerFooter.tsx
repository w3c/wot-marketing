import Link from 'next/link';
import Image from 'next/image';
import { Stack } from '@mui/joy';
import { LanguageSwitcher } from '../i18n/LanguageSwitcher';

export function NavigationDrawerFooter() {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center" gap={2}>
      <LanguageSwitcher size="md" sx={{ width: 130 }} />
      <Link href="https://www.w3.org/" style={{ alignSelf: 'start' }}>
        <Image src="https://www.w3.org/assets/logos/w3c-2025/svg/w3c.svg" alt="W3C Logo" width={36} height={36} />
      </Link>
    </Stack>
  );
}
