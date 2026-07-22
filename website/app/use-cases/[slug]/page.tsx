import { notFound } from 'next/navigation';
import { UseCaseSubpage } from './UseCaseSubpage';
import { getAllUseCases, getUseCaseBySlug } from '@/lib/use-cases/useCasesData';

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

  return <UseCaseSubpage slug={slug} />;
}
