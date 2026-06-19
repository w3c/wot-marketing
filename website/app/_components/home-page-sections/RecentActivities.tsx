'use client';
import { ARTICLES } from '@/lib/articles';
import { EVENTS } from '@/lib/events';
import { Typography, Stack, Chip, Box } from '@mui/joy';
import { PageSection } from '../PageSection';
import { LinkButton } from '../LinkButton';
import { useDictionary } from '../i18n/LocaleProvider';

export function RecentActivities() {
  const dict = useDictionary();
  const t = dict.home.recentActivities;
  return (
    <PageSection title={t.title}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
          gap: 2,
        }}
      >
        <Typography level="title-lg" sx={{ gridColumn: { md: '1' }, gridRow: { md: '1' } }}>
          {t.latestArticles}
        </Typography>
        {ARTICLES.slice(0, 3).map((article, index) => (
          <LinkButton
            key={article.title + index}
            external_url={article.url}
            sx={{ gridColumn: { md: '1' }, gridRow: { md: String(index + 2) }, textAlign: 'left' }}
          >
            <Stack sx={{ width: '100%', gap: 4, alignItems: 'flex-start', py: 2, px: 1 }}>
              <Typography level="title-lg">{article.title}</Typography>
              <Typography level="body-sm">{`${article.publisher} | ${article.type} | ${article.date}`}</Typography>
            </Stack>
          </LinkButton>
        ))}
        <LinkButton
          path="/about/articles"
          sx={{
            gridColumn: { md: '1' },
            gridRow: { md: '5' },
            fontSize: 'md',
            height: 'min-content',
            minHeight: '0',
          }}
        >
          {dict.common.seeAll}
        </LinkButton>

        <Typography level="title-lg" sx={{ gridColumn: { md: '2' }, gridRow: { md: '1' }, mt: { xs: 4, md: 0 } }}>
          {t.latestEvents}
        </Typography>
        {EVENTS.slice(0, 3).map((event, index) => (
          <LinkButton
            key={event.name + index}
            external_url={event.url}
            sx={{ gridColumn: { md: '2' }, gridRow: { md: String(index + 2) } }}
          >
            <Stack sx={{ width: '100%', gap: 4, alignItems: 'flex-start', py: 2, px: 1 }}>
              <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ width: '100%' }}>
                <Typography level="title-lg">{event.name}</Typography>
                {new Date(event.date) > new Date() && (
                  <Chip color="primary" variant="soft">
                    {dict.common.upcoming}
                  </Chip>
                )}
              </Stack>
              <Typography level="body-sm">{`${event.date_display}`}</Typography>
            </Stack>
          </LinkButton>
        ))}
        <LinkButton
          path="/participate/working-group/events"
          sx={{
            gridColumn: { md: '2' },
            gridRow: { md: '5' },
            fontSize: 'md',
            height: 'min-content',
            minHeight: '0',
          }}
        >
          {dict.common.seeAll}
        </LinkButton>
      </Box>
    </PageSection>
  );
}
