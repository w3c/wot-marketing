'use client';

import { PageLayout } from '../_components/PageLayout';
import { LocaleLink } from '../_components/LocaleLink';
import { Button, ButtonGroup } from '@mui/joy';
import { Home, RotateCw } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useDictionary } from '../_components/i18n/LocaleProvider';
import { stripLocale } from '@/lib/i18n/config';

export default function Error() {
  const path = stripLocale(usePathname());
  const dict = useDictionary();
  return (
    <PageLayout title={dict.error.title} subtitle={dict.error.subtitle}>
      <ButtonGroup variant="soft" color="neutral" spacing={2}>
        <Button startDecorator={<RotateCw size={18} />} onClick={() => window.location.reload()}>
          {dict.error.cta}
        </Button>
        {path !== '/' && (
          <LocaleLink href="/">
            <Button startDecorator={<Home size={18} />}>{dict.notFound.cta}</Button>
          </LocaleLink>
        )}
      </ButtonGroup>
    </PageLayout>
  );
}
