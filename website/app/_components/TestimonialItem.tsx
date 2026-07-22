'use client';

import { Accordion, AccordionDetails, AccordionSummary, Box, Stack, Typography } from '@mui/joy';
import { Testimonial } from '@/lib/use-cases/testimonialsData';

export function TestimonialItem({
  testimonial,
  defaultExpanded: defaultExpanded,
}: {
  testimonial: Testimonial;
  defaultExpanded?: boolean;
}) {
  return (
    <Accordion
      defaultExpanded={defaultExpanded}
      sx={{
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 'sm',
        overflow: 'hidden',
        mb: 1,
        '&.Mui-expanded': {
          mb: 1,
        },
      }}
    >
      <AccordionSummary
        sx={{
          bgcolor: 'background.level1',
          '&:hover': {
            bgcolor: 'background.level2',
          },
        }}
      >
        <Typography level="title-sm" sx={{ fontWeight: 600 }}>
          {testimonial.name}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ p: 2, bgcolor: 'background.surface' }}>
          {testimonial.isJoint ? (
            <Stack gap={3}>
              {testimonial.quotes?.map((q, idx) => (
                <Box key={idx}>
                  <Typography
                    level="body-md"
                    sx={{
                      fontStyle: 'italic',
                      borderLeft: '3px solid',
                      borderColor: 'primary.main',
                      pl: 2,
                      mb: 1,
                    }}
                  >
                    {q.quote}
                  </Typography>
                  <Typography level="body-xs" sx={{ color: 'text.secondary' }}>
                    - <strong>{q.author.split(',')[0]}</strong>, {q.author.split(',').slice(1).join(',')}
                  </Typography>
                </Box>
              ))}
            </Stack>
          ) : (
            <Box>
              <Typography
                level="body-md"
                sx={{
                  fontStyle: 'italic',
                  borderLeft: '3px solid',
                  borderColor: 'primary.main',
                  pl: 2,
                  mb: 1,
                }}
              >
                {testimonial.content}
              </Typography>
              <Typography level="body-xs" sx={{ color: 'text.secondary' }}>
                - <strong>{testimonial.author?.split(',')[0]}</strong>,{' '}
                {testimonial.author?.split(',').slice(1).join(',')}
              </Typography>
            </Box>
          )}
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
