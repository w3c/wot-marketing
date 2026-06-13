import { PageLayout } from '@/app/_components/PageLayout';
import { StyledTable } from '@/app/_components/StyledTable';
import { EVENTS } from '@/lib/events';
import { Link, Chip, Box } from '@mui/joy';

export default function EventsPage() {
  const currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  return (
    <PageLayout
      title="Events"
      subtitle="Web of Things (WoT) groups convene at the W3C annual Technical Plenary and hold biannual face-to-face meetings. Work items are prototyped and tested at WoT IG PlugFests, which occur the week or weekend immediately preceding the face-to-face sessions."
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
