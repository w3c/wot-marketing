'use client';

import { Button } from '@mui/joy';
import { PageLayout } from '../_components/PageLayout';
import { LocaleLink } from '../_components/LocaleLink';
import { useDictionary } from '../_components/i18n/LocaleProvider';

export default function NotFound() {
  const dict = useDictionary();
  return (
    <PageLayout title={dict.notFound.title} subtitle={dict.notFound.subtitle}>
      <LocaleLink href="/">
        <Button variant="soft">{dict.notFound.cta}</Button>
      </LocaleLink>
    </PageLayout>
  );
}
