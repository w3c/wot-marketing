import { Resource } from '@/lib/use-cases/domains';
import { Link, Card, Stack, Typography, CardOverflow, AspectRatio, CardContent } from '@mui/joy';
import { Link as LinkIcon, Presentation } from 'lucide-react';

export function VideoCard({ resource }: { resource: Resource }) {
  const { url, title, note, video_url } = resource;
  if (!video_url) {
    throw new Error('PresentationCard requires a video_url');
  }
  return (
    <Card key={url} variant="outlined" sx={{ height: '100%' }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <iframe src={toYouTubeEmbedUrl(video_url)} allowFullScreen style={{ border: 'none' }}></iframe>
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Stack direction="row" gap={1} alignItems="center" justifyContent="space-between">
          <Typography level="title-md">{title}</Typography>
        </Stack>
        {note ? <Typography level="body-sm">{note}</Typography> : null}
        <Link level="body-xs" sx={{ gap: 0.5, display: 'flex', alignItems: 'center' }} href={url}>
          Slides <Presentation style={{ width: '0.75rem' }} />
        </Link>
      </CardContent>
    </Card>
  );
}

function toYouTubeEmbedUrl(url: string): string {
  const parsedUrl = new URL(url);

  let videoId: string | null = null;

  if (parsedUrl.hostname === 'youtu.be') {
    videoId = parsedUrl.pathname.slice(1);
  } else if (parsedUrl.hostname === 'youtube.com' || parsedUrl.hostname === 'www.youtube.com') {
    videoId = parsedUrl.searchParams.get('v');
  }

  if (!videoId) {
    throw new Error('Invalid YouTube URL');
  }

  return `https://www.youtube.com/embed/${videoId}`;
}

function formatResourceKind(kind: string) {
  return kind
    .split('-')
    .map((word) => (word === 'w3c' ? 'W3C' : word.charAt(0).toUpperCase() + word.slice(1)))
    .join(' ');
}

function formatResourceLinkLabel(kind: string) {
  return kind === 'presentation' ? 'Presentation' : 'Resource';
}

function formatUrlLabel(url: string) {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.hostname.replace(/^www\./, '') + parsedUrl.pathname;
  } catch {
    return url;
  }
}
