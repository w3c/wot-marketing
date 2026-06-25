import { PageLayout } from '@/app/_components/PageLayout';
import { Alert, Box, Stack, Typography, Card } from '@mui/joy';
import { history } from '@/lib/history';

export default function History() {
  return (
    <PageLayout
      title="History"
      subtitle="Web of Things has reached its place at W3C after many years of discussions and work by different parties "
      banner={
        <Alert variant="outlined">
          The journey of the Web of Things at the W3C began with initial discussions to bridge the gap between the Web
          and the physical world. Since then, it has evolved through various community efforts, workshops, and working
          groups to establish formal standards that enable interoperability across IoT ecosystems.
        </Alert>
      }
    >
      <Stack spacing={0} sx={{ maxWidth: '800px', mx: 'auto', position: 'relative' }}>
        {/* Vertical line */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: { xs: '16px', md: '50%' },
            width: 2,
            bgcolor: 'neutral.outlinedBorder',
            transform: 'translateX(-50%)',
          }}
        />

        {history.map((item, index) => {
          const isLeft = index % 2 === 0;
          return (
            <Box
              key={index}
              sx={{
                display: 'flex',
                width: '100%',
                mb: 4,
                justifyContent: { xs: 'flex-end', md: isLeft ? 'flex-start' : 'flex-end' },
                position: 'relative',
              }}
            >
              {/* Dot */}
              <Box
                sx={{
                  position: 'absolute',
                  left: { xs: '16px', md: '50%' },
                  top: '50%',
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  bgcolor: 'primary.500',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 1,
                  boxShadow: '0 0 0 4px var(--joy-palette-background-body)',
                }}
              />

              {/* Content Card */}
              <Box sx={{ width: { xs: 'calc(100% - 48px)', md: 'calc(50% - 32px)' } }}>
                <Card variant="outlined" sx={{ p: 3, height: '100%' }}>
                  <Typography
                    level="title-sm"
                    color="primary"
                    sx={{ textTransform: 'uppercase', letterSpacing: 'sm', fontWeight: 'bold' }}
                  >
                    {item.date}
                  </Typography>
                  <Typography level="h3" sx={{ mt: 0.5, mb: 1 }}>
                    {item.event}
                  </Typography>
                  <Typography level="body-md" color="neutral" sx={{ '& a': { display: 'inline' } }}>
                    {item.description}
                  </Typography>
                </Card>
              </Box>
            </Box>
          );
        })}
      </Stack>
    </PageLayout>
  );
}
