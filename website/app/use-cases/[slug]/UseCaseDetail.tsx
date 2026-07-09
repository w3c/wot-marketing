'use client';

import { useState } from 'react';
import { Route } from 'next';
import {
  AspectRatio,
  Box,
  Card,
  CardContent,
  Chip,
  List,
  ListItem,
  ListItemDecorator,
  Sheet,
  Stack,
  Typography,
} from '@mui/joy';
import { CheckCircle2, Clock, Play } from 'lucide-react';
import { PageLayout } from '../../_components/PageLayout';
import { PageSection } from '../../_components/PageSection';
import { getMeetupVideoId, getUseCaseBySlug, UseCaseVideo } from '@/lib/useCases';

export function UseCaseDetail({ slug }: { slug: string }) {
  const entry = getUseCaseBySlug(slug);

  if (!entry) {
    return null;
  }

  return (
    <PageLayout
      title={entry.title}
      subtitle={entry.description}
      breadcrumbs={{ startingPath: '/use-cases' as Route }}
      banner={
        <Chip
          variant="soft"
          color={entry.category === 'domain' ? 'primary' : 'success'}
          startDecorator={<Box sx={{ display: 'flex' }}>{entry.icon}</Box>}
          sx={{ '--Chip-decoratorChildHeight': '28px' }}
        >
          {entry.category === 'domain' ? 'Application Domain' : 'Technology Trend'}
        </Chip>
      }
    >
      <Stack gap={2}>
        <PageSection title="How WoT Helps" id="how-wot-helps">
          <Typography level="body-md">{entry.howWoT}</Typography>
        </PageSection>

        <PageSection title="Key Benefits" id="benefits">
          <List sx={{ '--ListItem-paddingY': '8px' }}>
            {entry.benefits.map((benefit) => (
              <ListItem key={benefit}>
                <ListItemDecorator sx={{ color: 'primary.main' }}>
                  <CheckCircle2 size={20} />
                </ListItemDecorator>
                <Typography level="body-md">{benefit}</Typography>
              </ListItem>
            ))}
          </List>
        </PageSection>

        <PageSection title="Real-World Use Cases" id="real-world-use-cases">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
              gap: 2,
            }}
          >
            {entry.realWorldUseCases.map((useCase) => (
              <Card
                key={useCase.title}
                variant="outlined"
                sx={{ borderTop: '3px solid', borderColor: 'primary.main', height: '100%' }}
              >
                <CardContent>
                  <Typography level="title-md" mb={1}>
                    {useCase.title}
                  </Typography>
                  <Typography level="body-sm">{useCase.description}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </PageSection>

        <PageSection title="From the Community Meetups" id="videos">
          <Typography level="body-md" mb={2}>
            The examples above are drawn from talks in the WoT Community Group meetups. Select a highlighted moment to
            play that part of the recording directly.
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
              gap: 3,
            }}
          >
            {entry.videos.map((video) => (
              <VideoEmbed key={video.meetupNumber} video={video} />
            ))}
          </Box>
        </PageSection>
      </Stack>
    </PageLayout>
  );
}

function VideoEmbed({ video }: { video: UseCaseVideo }) {
  const videoId = getMeetupVideoId(video.meetupNumber);
  const [activeStart, setActiveStart] = useState<number | null>(null);

  if (!videoId) {
    return null;
  }

  const start = activeStart ?? video.fragments[0]?.start ?? 0;
  const autoplay = activeStart !== null ? 1 : 0;
  const src = `https://www.youtube-nocookie.com/embed/${videoId}?start=${start}&autoplay=${autoplay}&rel=0`;

  return (
    <Card variant="outlined" sx={{ height: '100%' }}>
      <AspectRatio ratio="16/9" sx={{ borderRadius: 'sm', overflow: 'hidden' }}>
        <iframe
          key={`${videoId}-${start}`}
          src={src}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          style={{ border: 0, width: '100%', height: '100%' }}
        />
      </AspectRatio>
      <CardContent>
        <Typography level="title-sm">{video.title}</Typography>
        <Typography level="body-xs" sx={{ color: 'text.secondary', mb: 1 }}>
          WoT CG Meetup #{video.meetupNumber}
        </Typography>
        <Stack gap={1}>
          {video.fragments.map((fragment) => {
            const isActive = fragment.start === start && activeStart !== null;
            return (
              <Sheet
                key={fragment.start}
                variant={isActive ? 'solid' : 'soft'}
                color="primary"
                component="button"
                onClick={() => setActiveStart(fragment.start)}
                sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 1,
                  p: 1,
                  borderRadius: 'sm',
                  textAlign: 'left',
                  cursor: 'pointer',
                  border: 'none',
                  width: '100%',
                  bgcolor: isActive ? 'primary.solidBg' : 'primary.softBg',
                  '&:hover': {
                    bgcolor: isActive ? 'primary.solidHoverBg' : 'primary.softHoverBg',
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mt: '2px' }}>
                  {isActive ? <Play size={16} /> : <Clock size={16} />}
                </Box>
                <Box>
                  <Typography
                    level="body-xs"
                    sx={{ fontWeight: 700, color: isActive ? 'common.white' : 'primary.plainColor' }}
                  >
                    {fragment.timestamp}
                  </Typography>
                  <Typography level="body-xs" sx={{ color: isActive ? 'common.white' : 'text.primary' }}>
                    {fragment.label}
                  </Typography>
                </Box>
              </Sheet>
            );
          })}
        </Stack>
      </CardContent>
    </Card>
  );
}
