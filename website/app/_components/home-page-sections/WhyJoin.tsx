'use client';
import { ButtonGroup, Stack, Typography } from '@mui/joy';
import { PageSection } from '../PageSection';
import { UserCheck2, HandHeart } from 'lucide-react';
import { LinkButton } from '../LinkButton';
import { useDictionary } from '../i18n/LocaleProvider';

export function WhyJoin() {
  const dict = useDictionary();
  const t = dict.home.whyJoin;
  return (
    <PageSection title={t.title}>
      <Stack gap={4}>
        <Typography>{t.intro}</Typography>
        <ButtonGroup size="lg" spacing={1.5}>
          <LinkButton endDecorator={<UserCheck2 />} color="primary" variant="solid" path="/participate/working-group">
            {t.participate}
          </LinkButton>
          <LinkButton endDecorator={<HandHeart />} external_url="https://www.w3.org/support-us/">
            {dict.common.supportUs}
          </LinkButton>
        </ButtonGroup>
      </Stack>
    </PageSection>
  );
}
