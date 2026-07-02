import { Resource } from '@/lib/use-cases/domains';
import { Link, Card, Stack, Typography } from '@mui/joy';

export function ResourceCard({ resource }: { resource: Resource }) {
  const { url, title, note } = resource;
  return (
    <Card key={url} variant="outlined" sx={{ height: '100%' }}>
      <Stack gap={1}>
        <Typography level="title-md">
          <Link href={url}>{title}</Link>
        </Typography>
        {note ? <Typography level="body-sm">{note}</Typography> : null}
        <Typography level="body-xs" color="neutral">
          {formatUrlLabel(url)}
        </Typography>
      </Stack>
    </Card>
  );
}

function formatUrlLabel(url: string) {
  try {
    const parsedUrl = new URL(url);
    return parsedUrl.hostname.replace(/^www\./, '') + parsedUrl.pathname;
  } catch {
    return url;
  }
}
