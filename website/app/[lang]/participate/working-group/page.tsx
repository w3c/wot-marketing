'use client';

import { LinkCard } from '@/app/_components/LinkCard';
import { PageLayout } from '@/app/_components/PageLayout';
import { PageSection } from '@/app/_components/PageSection';
import { CARD_LINKS, TIMEZONES } from '@/lib/workingGroup';
import { Box, Link, Option, Select, Stack, Typography } from '@mui/joy';
import { Globe, Mail } from 'lucide-react';
import { useState } from 'react';
import { useDictionary } from '@/app/_components/i18n/LocaleProvider';

export default function WorkingGroupPage() {
  const dict = useDictionary();
  const [timezone, setTimezone] = useState('browser');

  return (
    <PageLayout
      title={dict.pages.workingGroup.title}
      subtitle={
        <>
          The W3C WoT Working Group (WG) is tasked to create standards-track specifications and test suites. To ensure
          royalty-free Web standards, participants must be W3C and WoT WG Members and acknowledge the{' '}
          <Link href="https://www.w3.org/Consortium/Patent-Policy/">W3C Patent Policy.</Link>
        </>
      }
    >
      <PageSection title="Important Resources">
        <Typography sx={{ display: 'flex', alignItems: 'baseline', columnGap: 1, flexWrap: 'wrap' }}>
          <Box component="span" sx={{ whiteSpace: 'nowrap' }}>
            Co-Chairs:
          </Box>{' '}
          <Link href="mailto:sebastian.kaebisch@siemens.com" startDecorator={<Mail size={15} />}>
            Sebastian Käbisch (Siemens AG)
          </Link>{' '}
          and{' '}
          <Link href="mailto:michaeljohnkoster@gmail.com" startDecorator={<Mail size={15} />}>
            Michael Koster
          </Link>
        </Typography>
        <Typography sx={{ display: 'flex', alignItems: 'baseline', gap: 1, mb: 2, flexWrap: 'wrap' }}>
          <Box component="span" sx={{ whiteSpace: 'nowrap' }}>
            Team Contact:
          </Box>
          <Link href="https://www.w3.org/People#dsr" startDecorator={<Globe size={15} />}>
            Dave Raggett
          </Link>
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gap: 3,
            gridTemplateColumns: {
              sm: '1fr',
              md: '1fr 1fr',
            },
            mb: 4,
          }}
        >
          {CARD_LINKS.map((link) => (
            <LinkCard key={link.label} size="lg" {...link} />
          ))}
        </Box>
      </PageSection>
      <PageSection title="Web Conference Meetings">
        <Typography mb={2}>
          We have grouped our weekly meetings in the table below. We also recommend you to use{' '}
          <Link href="https://www.w3.org/groups/ig/wot/calendar">the W3C calendar</Link> system in order to download ICS
          files for all our meetings.
        </Typography>
        <Stack gap={2} direction="row" alignItems="baseline" mb={2}>
          <Typography level="title-md">Select Timezone:</Typography>
          <Select
            size="sm"
            defaultValue="browser"
            value={timezone}
            onChange={(_, newValue) => setTimezone(newValue ?? '')}
          >
            {TIMEZONES.map((option) => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
        </Stack>

        <iframe
          id="open-web-calendar"
          style={{
            background:
              "url('https://raw.githubusercontent.com/niccokunzmann/open-web-calendar/master/static/img/loaders/circular-loader.gif') center center no-repeat",
          }}
          src={`https://open-web-calendar.hosted.quelltext.eu/calendar.html?url=https://www.w3.org/groups/wg/wot/calendar/export&start_of_week=work&plugin_event_tooltip=false&style-event-status-cancelled=true&style-event-status-confirmed=true&style-event-status-tentative=true${timezone !== 'browser' ? `&timezone=${timezone}` : ''}`}
          sandbox="allow-scripts allow-same-origin allow-popups"
          frameBorder="0"
          height="810px"
          width="100%"
        ></iframe>
      </PageSection>
    </PageLayout>
  );
}
