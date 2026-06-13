import { Button } from '@mui/joy';
import { PageLayout } from './_components/PageLayout';
import Link from 'next/link';

export default function NotFound() {
  return (
    <PageLayout title="404 - Not Found" subtitle="The page you are looking for doesn't exist or has been moved">
      <Link href="/">
        <Button variant="soft">Return to Home</Button>
      </Link>
    </PageLayout>
  );
}
