'use client';
import { LinkCard } from '@/app/_components/LinkCard';
import { PageLayout } from '@/app/_components/PageLayout';
import { CONTACTS } from '@/lib/contacts';
import { Box } from '@mui/joy';
import { MastodonFeed } from '@/app/_components/home-page-sections/MastodonFeed';
import { useDictionary } from '@/app/_components/i18n/LocaleProvider';

export default function Contact() {
  const dict = useDictionary();
  return (
    <PageLayout title={dict.pages.contact.title} subtitle={dict.pages.contact.subtitle}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: '1fr',
            md: '1fr 1fr',
          },
          gap: 2,
          alignContent: 'start',
        }}
      >
        {CONTACTS.map((contact, index) => (
          <LinkCard
            key={index}
            label={contact.title}
            description={contact.description}
            icon={contact.icon}
            external_url={contact.href}
          />
        ))}
      </Box>

      <MastodonFeed />
    </PageLayout>
  );
}
