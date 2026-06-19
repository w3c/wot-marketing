import { Metadata } from 'next';
import { isLocale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { pageMetadata } from '@/lib/i18n/metadata';

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await props.params;
  const locale = isLocale(lang) ? lang : 'en';
  const dict = getDictionary(locale);
  return pageMetadata(locale, '/participate/working-group', {
    title: dict.pages.workingGroup.title,
  });
}

export default function WorkingGroupLayout({ children }: { children: React.ReactNode }) {
  return children;
}
