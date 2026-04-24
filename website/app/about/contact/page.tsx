'use client';
import { LinkCard } from '@/app/_components/LinkCard';
import { PageLayout } from '@/app/_components/PageLayout';
import { CONTACTS } from '@/lib/contacts';
import { Box } from '@mui/joy';
import { MastodonFeed } from '@/app/_components/home-page-sections/MastodonFeed';

export default function Contact() {
  return (
    <PageLayout title="Contact" subtitle="Get in touch with us for any questions or inquiries">
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
