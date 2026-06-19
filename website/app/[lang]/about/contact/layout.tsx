import { Metadata } from 'next';
import { isLocale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { pageMetadata } from '@/lib/i18n/metadata';

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await props.params;
  const locale = isLocale(lang) ? lang : 'en';
  const dict = getDictionary(locale);
  return pageMetadata(locale, '/about/contact', {
    title: dict.pages.contact.title,
    description: dict.pages.contact.subtitle,
  });
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
