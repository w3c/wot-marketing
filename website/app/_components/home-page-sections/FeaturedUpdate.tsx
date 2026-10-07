import { Box, Card, Link, Stack, Typography } from '@mui/joy';
import { ArrowUpRight } from 'lucide-react';

export function FeaturedUpdate() {
  return (
    <Stack component="section" aria-label="Web of Things highlights" direction={{ xs: 'column', md: 'row' }} gap={2}>
      <Box
        component="iframe"
        src="https://www.youtube-nocookie.com/embed/79iBfmc4ats"
        title="Web of Things featured video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        sx={{
          width: { xs: '100%', md: '70%' },
          aspectRatio: '16 / 9',
          border: 0,
          borderRadius: '8px',
          flexShrink: 0,
          alignSelf: 'center',
        }}
      />
      <Card variant="outlined" sx={{ flex: 1, minWidth: 0, p: 2, gap: 1, borderRadius: '8px' }}>
        <Typography level="h2" sx={{ fontSize: '1.25rem' }}>
          Web of Things Working Group Charter 2026-2028
        </Typography>
        <Typography>
          The new charter advances IoT interoperability with Thing Description 2.0, a WoT Binding Registry, and
          developer guidance, including emerging physical AI use cases.
        </Typography>
        <Link
          href="https://www.w3.org/2026/09/wot-wg-2026.html"
          endDecorator={<ArrowUpRight size={18} />}
          sx={{ alignSelf: 'flex-start', mt: 'auto' }}
        >
          Read the charter
        </Link>
      </Card>
    </Stack>
  );
}
