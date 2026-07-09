import { Testimonial } from '@/lib/useCases';
import { Accordion, AccordionSummary, Typography, AccordionDetails, Stack, Box } from '@mui/joy';

export function TestimonialItem({ testimonial, isAlwaysOpen }: { testimonial: Testimonial; isAlwaysOpen?: boolean }) {
  return (
    <Accordion
      disabled={isAlwaysOpen}
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
      expanded={isAlwaysOpen ? true : undefined}
    >
      <AccordionSummary indicator={isAlwaysOpen ? null : undefined}>
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
                      borderColor: 'var(--joy-palette-primary-plainColor)',
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
                  borderColor: 'var(--joy-palette-primary-plainColor)',
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
