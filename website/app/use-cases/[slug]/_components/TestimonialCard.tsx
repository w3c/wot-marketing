import { Testimonial } from '@/lib/use-cases/testimonials';
import { Box, Card, Stack, Typography } from '@mui/joy';

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card variant="outlined" sx={{ height: '100%' }}>
      <Stack gap={2}>
        <Typography level="title-md">{testimonial.name}</Typography>
        {testimonial.isJoint ? (
          <Stack gap={2}>
            {testimonial.quotes?.map((quote) => (
              <TestimonialQuote key={quote.author} quote={quote.quote} author={quote.author} />
            ))}
          </Stack>
        ) : (
          <TestimonialQuote quote={testimonial.content ?? ''} author={testimonial.author} />
        )}
      </Stack>
    </Card>
  );
}

function TestimonialQuote({ quote, author }: { quote: string; author?: string }) {
  return (
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
        {quote}
      </Typography>
      {author ? (
        <Typography level="body-xs" sx={{ color: 'text.secondary' }}>
          - <strong>{author.split(',')[0]}</strong>, {author.split(',').slice(1).join(',')}
        </Typography>
      ) : null}
    </Box>
  );
}
