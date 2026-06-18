import { AspectRatio, Card, CardContent, CardOverflow, Grid, Link, Stack, Typography } from '@mui/joy';
import { PageLayout } from '../_components/PageLayout';
import { PageSection } from '../_components/PageSection';
import Image, { StaticImageData } from 'next/image';
import { VIDEO_SECTIONS } from '@/lib/videos';

export default function Videos() {
  return (
    <PageLayout
      title="WoT Videos"
      subtitle="A collection of videos related to the Web of Things (WoT) with useful insights on tutorials, specifications, and real-world applications"
    >
      {VIDEO_SECTIONS.map((section) => (
        <PageSection key={section.title} title={section.title}>
          {section.description}
          <Grid container spacing={4}>
            {section.videos.map((video) => (
              <Grid key={video.title} xs={12} md={6}>
                <VideoCard {...video} />
              </Grid>
            ))}
          </Grid>
        </PageSection>
      ))}
    </PageLayout>
  );
}

function VideoCard({
  url,
  thumbnail,
  title,
  alternativeUrl,
}: {
  url: string;
  thumbnail: StaticImageData | string;
  title: string;
  alternativeUrl?: string;
}) {
  return (
    <Card
      variant="outlined"
      sx={{
        height: '100%',
      }}
    >
      <CardOverflow
        sx={{
          '&:hover': {
            outline: '1px solid var(--joy-palette-primary-plainColor)',
          },
        }}
      >
        <AspectRatio ratio="16/9">
          <Link href={url}>
            <Image src={thumbnail} alt={title} fill style={{ objectFit: 'cover' }} />
          </Link>
        </AspectRatio>
      </CardOverflow>

      <CardContent>
        <Stack gap={1} direction="row" justifyContent="space-between" alignItems="baseline">
          <Typography level="title-md">{title}</Typography>
          {alternativeUrl && (
            <Link href={alternativeUrl} level="title-sm">
              Alternative Link
            </Link>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}
