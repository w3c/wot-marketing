import { PageLayout } from './_components/PageLayout';
import { WoTInANutshell } from './_components/home-page-sections/WoTInANutshell';
import { Members } from './_components/home-page-sections/Members';
import { Liaisons } from './_components/home-page-sections/Liaisons';
import { WhyJoin } from './_components/home-page-sections/WhyJoin';
import { RecentActivities } from './_components/home-page-sections/RecentActivities';
import { UseCases } from './_components/home-page-sections/UseCases';
import { MastodonFeed } from './_components/home-page-sections/MastodonFeed';

export default function HomePage() {
  return (
    <PageLayout
      title="W3C Web of Things"
      subtitle="The mission of the W3C Web of Things (WoT) is to define a universal application layer for the Internet of Things (IoT) built on web technologies, to counter fragmentation and enable seamless integration across IoT platforms and application domains"
    >
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
