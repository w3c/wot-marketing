import { notFound } from 'next/navigation';
import { getAllUseCases, getUseCaseBySlug } from '@/lib/useCases';
import { UseCaseDetail } from './UseCaseDetail';

export function generateStaticParams() {
  return getAllUseCases().map((entry) => ({ slug: entry.slug }));
}

export const dynamicParams = false;

export default async function UseCaseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const entry = getUseCaseBySlug(slug);

  if (!entry) {
    notFound();
  }

  return <UseCaseDetail slug={slug} />;
}
