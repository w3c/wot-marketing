import Link from 'next/link';
import Image from 'next/image';

export function NavigationDrawerFooter() {
  return (
    <Link href="https://www.w3.org/" style={{ alignSelf: 'start' }}>
      <Image src="https://www.w3.org/assets/logos/w3c-2025/svg/w3c.svg" alt="W3C Logo" width={36} height={36} />
    </Link>
  );
}
