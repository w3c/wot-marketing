'use client';

import { PageLayout } from './_components/PageLayout';
import Link from 'next/link';
import { Button, ButtonGroup } from '@mui/joy';
import { Home, RotateCw } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Error() {
  const path = usePathname();
  return (
    <PageLayout title="Error" subtitle="Something went wrong while loading the page. Please try again later.">
      <ButtonGroup variant="soft" color="neutral" spacing={2}>
        <Button startDecorator={<RotateCw size={18} />} onClick={() => window.location.reload()}>
          Refresh Page
        </Button>
        {path !== '/' && (
          <Link href="/">
            <Button startDecorator={<Home size={18} />}>Return to Home</Button>
          </Link>
        )}
      </ButtonGroup>
    </PageLayout>
  );
}
