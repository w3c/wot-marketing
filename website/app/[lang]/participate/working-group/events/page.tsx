import { PageLayout } from '@/app/_components/PageLayout';
import { StyledTable } from '@/app/_components/StyledTable';
import { EVENTS } from '@/lib/events';
import { Link, Chip, Box } from '@mui/joy';
import { Metadata } from 'next';
import { isLocale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { pageMetadata } from '@/lib/i18n/metadata';

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await props.params;
  const locale = isLocale(lang) ? lang : 'en';
  const dict = getDictionary(locale);
  return pageMetadata(locale, '/participate/working-group/events', {
    title: dict.pages.events.title,
    description: dict.pages.events.subtitle,
  });
}

export default async function EventsPage(props: { params: Promise<{ lang: string }> }) {
  const { lang } = await props.params;
  const locale = isLocale(lang) ? lang : 'en';
  const dict = getDictionary(locale);
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  return (
    <PageLayout
      title={dict.pages.events.title}
      subtitle={dict.pages.events.subtitle}
      breadcrumbs={{
        startingPath: '/participate/working-group',
      }}
    >
      <StyledTable
        header={['Event', 'Date']}
        rows={EVENTS.map((event) => {
          const eventDate = new Date(event.date);
          const isUpcoming = eventDate >= currentDate;

          return {
            style: { opacity: isUpcoming ? 1 : 0.6 },
            cells: [
              <Box key={event.name} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <Link href={event.url}>{event.name}</Link>
                {event.isCancelled && (
                  <Chip color="danger" size="sm" variant="soft">
                    Cancelled
                  </Chip>
                )}
              </Box>,
              event.date_display || event.date,
            ],
          };
        })}
      />
    </PageLayout>
  );
}
