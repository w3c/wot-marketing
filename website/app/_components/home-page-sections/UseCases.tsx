'use client';
import { useMemo, useSyncExternalStore } from 'react';
import { AccordionGroup, Box, Stack, Typography } from '@mui/joy';
import { PageSection } from '../PageSection';
import { LinkButton } from '../LinkButton';
import { Testimonial, TESTIMONIALS } from '@/lib/useCases';
import { TestimonialItem } from '../TestimonialItem';

export function UseCases() {
  const isClient = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const testimonials = useMemo(() => (isClient ? shuffleArray(TESTIMONIALS) : []), [isClient]);

  return (
    <Stack direction={{ sm: 'column', md: 'row' }} gap={{ xs: 2, md: 10 }}>
      <PageSection
        title="Use Cases"
        sx={{
          width: {
            sm: '100%',
            md: '50%',
          },
        }}
      >
        <Stack gap={1}>
          <Typography>
            The Web of Things technologies apply to a variety of domains and unlock use cases. Whether it be industrial
            automation, smart home, infrastructure or agentic systems, you can use WoT for your solution. Find out below
            how the properties, actions, events abstraction over multitude of protocols and domains work.
          </Typography>
          <Typography>
            Read testimonials from industry leaders and W3C members to see how they are adopting the Web of Things
            standard to drive interoperability and innovation.
          </Typography>
          <LinkButton path="/use-cases" sx={{ mt: 4 }}>
            Explore WoT Use Cases
          </LinkButton>
        </Stack>
      </PageSection>
      <Box
        sx={{
          width: {
            sm: '100%',
            md: '50%',
          },
          mt: { sm: 1, md: -2 },
          maxHeight: '500px',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: 32,
            background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.96), rgba(255, 255, 255, 0))',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 32,
            background: 'linear-gradient(to top, rgba(255, 255, 255, 0.96), rgba(255, 255, 255, 0))',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />
        <Stack
          sx={{
            maxHeight: '500px',
            overflowY: 'auto',
            pr: 1,
          }}
        >
          <Typography level="title-lg" my={2}>
            Testimonials
          </Typography>
          <AccordionGroup>
            {testimonials.map((testimonial) => (
              <TestimonialItem key={testimonial.id} testimonial={testimonial} isAlwaysOpen />
            ))}
          </AccordionGroup>
        </Stack>
      </Box>
    </Stack>
  );
}

function shuffleArray(arr: Testimonial[]): Testimonial[] {
  const array = [...arr];

  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
}
