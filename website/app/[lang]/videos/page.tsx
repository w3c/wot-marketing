import { AspectRatio, Card, CardContent, CardOverflow, Grid, Link, Stack, Typography } from '@mui/joy';
import { Metadata } from 'next';
import { PageLayout } from '../../_components/PageLayout';
import { PageSection } from '../../_components/PageSection';
import Image, { StaticImageData } from 'next/image';
import { VIDEO_SECTIONS } from '@/lib/videos';
import { isLocale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { pageMetadata } from '@/lib/i18n/metadata';

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await props.params;
  const locale = isLocale(lang) ? lang : 'en';
  const dict = getDictionary(locale);
  return pageMetadata(locale, '/videos', {
    title: dict.pages.videos.title,
    description: dict.pages.videos.subtitle,
  });
}

export default async function Videos(props: { params: Promise<{ lang: string }> }) {
  const { lang } = await props.params;
  const locale = isLocale(lang) ? lang : 'en';
  const dict = getDictionary(locale);
  return (
    <PageLayout title={dict.pages.videos.title} subtitle={dict.pages.videos.subtitle}>
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
