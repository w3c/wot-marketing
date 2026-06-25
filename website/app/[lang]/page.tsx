import { Metadata } from 'next';
import { PageLayout } from '../_components/PageLayout';
import { WoTInANutshell } from '../_components/home-page-sections/WoTInANutshell';
import { Members } from '../_components/home-page-sections/Members';
import { Liaisons } from '../_components/home-page-sections/Liaisons';
import { WhyJoin } from '../_components/home-page-sections/WhyJoin';
import { RecentActivities } from '../_components/home-page-sections/RecentActivities';
import { UseCases } from '../_components/home-page-sections/UseCases';
import { MastodonFeed } from '../_components/home-page-sections/MastodonFeed';
import { isLocale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { getAlternates } from '@/lib/i18n/metadata';

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await props.params;
  const locale = isLocale(lang) ? lang : 'en';
  const dict = getDictionary(locale);
  return {
    title: 'W3C Web of Things',
    description: dict.home.hero.subtitle,
    alternates: getAlternates(locale, '/'),
  };
}

export default async function HomePage(props: { params: Promise<{ lang: string }> }) {
  const { lang } = await props.params;
  const locale = isLocale(lang) ? lang : 'en';
  const dict = getDictionary(locale);

  return (
    <PageLayout title={dict.home.hero.title} subtitle={dict.home.hero.subtitle}>
      <WoTInANutshell />
      <UseCases />
      <Members />
      <Liaisons />
      <WhyJoin />
      <RecentActivities />
      <MastodonFeed />
    </PageLayout>
  );
}
