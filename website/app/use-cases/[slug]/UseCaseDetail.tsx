'use client';

import { useState } from 'react';
import { Route } from 'next';
import {
  AspectRatio,
  AccordionGroup,
  Box,
  Button,
  Card,
  CardContent,
  CardOverflow,
  List,
  ListItem,
  ListItemDecorator,
  Stack,
  Typography,
} from '@mui/joy';
import { CheckCircle2, Clock, Play } from 'lucide-react';
import { PageLayout } from '../../_components/PageLayout';
import { PageSection } from '../../_components/PageSection';
import { LinkCard } from '../../_components/LinkCard';
import { TestimonialItem } from '../../_components/TestimonialItem';
import { getUseCaseBySlug, UseCaseVideo, getMeetupVideoId } from '@/lib/use-cases/USE_CASES';
import { getStandards } from '@/lib/use-cases/STANDARDS';
import { getTestimonials } from '@/lib/use-cases/TESTIMONIALS';

export function UseCaseDetail({ slug }: { slug: string }) {
  const entry = getUseCaseBySlug(slug);

  if (!entry) {
    return null;
  }

  const standards = getStandards(entry.standards);
  const testimonials = getTestimonials(entry.relatedTestimonials ?? []);

  return (
    <PageLayout title={entry.title} subtitle={entry.description} breadcrumbs={{ startingPath: '/use-cases' as Route }}>
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
        <Stack gap={6}>
          {entry.realWorldUseCases.map((useCase) => (
            <Stack key={useCase.title} gap={2}>
              <Box>
                <Typography level="title-lg" mb={0.5}>
                  {useCase.title}
                </Typography>
                <Typography level="body-md" sx={{ color: 'text.secondary' }}>
                  {useCase.description}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
                  gap: 3,
                }}
              >
                {useCase.videos.map((video) => (
                  <VideoEmbed key={video.meetupNumber} video={video} />
                ))}
              </Box>
            </Stack>
          ))}
        </Stack>
      </PageSection>

      {testimonials.length > 0 && (
        <PageSection title="Related Testimonials" id="testimonials">
          <Typography level="body-md" mb={2}>
            Leading organizations describe how the Web of Things supports work in this area. Select each to read their
            testimonial.
          </Typography>
          <AccordionGroup disableDivider>
            {testimonials.map((testimonial) => (
              <TestimonialItem
                key={testimonial.id}
                testimonial={testimonial}
                defaultExpanded={testimonials.length < 3}
              />
            ))}
          </AccordionGroup>
        </PageSection>
      )}

      {standards.length > 0 && (
        <PageSection title="Relevant Standards" id="standards">
          <Typography level="body-md" mb={2}>
            WoT builds on and complements established standards in this area. Each links to its official website.
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
              gap: 2,
            }}
          >
            {standards.map((standard) => (
              <LinkCard
                key={standard.url}
                label={standard.title}
                description={standard.description}
                icon={standard.icon}
                external_url={standard.url}
              />
            ))}
          </Box>
        </PageSection>
      )}
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
      <CardOverflow>
        <AspectRatio ratio="16/9">
          <iframe
            key={`${videoId}-${start}`}
            src={src}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ border: 0, width: '100%', height: '100%' }}
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="title-sm">{video.title}</Typography>
        <Typography level="body-xs" sx={{ color: 'text.secondary', mb: 1 }}>
          WoT CG Meetup #{video.meetupNumber}
        </Typography>
        <Stack gap={1}>
          {video.fragments.map((fragment) => {
            const isActive = fragment.start === start && activeStart !== null;
            return (
              <Button
                key={fragment.start}
                variant={'soft'}
                color={isActive ? 'primary' : 'neutral'}
                component="button"
                onClick={() => setActiveStart(fragment.start)}
                startDecorator={isActive ? <Play size={18} /> : <Clock size={18} />}
                sx={{
                  justifyContent: 'flex-start',
                  gap: 1,
                }}
              >
                <Stack alignItems="flex-start">
                  <Typography level="title-sm">{fragment.timestamp}</Typography>
                  <Typography level="body-xs" textAlign="left">
                    {fragment.label}
                  </Typography>
                </Stack>
              </Button>
            );
          })}
        </Stack>
      </CardContent>
    </Card>
  );
}
