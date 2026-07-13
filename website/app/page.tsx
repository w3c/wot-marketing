import './home.css';
import { CommunityCallToAction } from './_components/home-page-sections/CommunityCallToAction';
import { DomainsSection } from './_components/home-page-sections/DomainsSection';
import { EcosystemSection } from './_components/home-page-sections/EcosystemSection';
import { FeaturesSection } from './_components/home-page-sections/FeaturesSection';
import { HeroSection } from './_components/home-page-sections/HeroSection';
import { IntegrationSection } from './_components/home-page-sections/IntegrationSection';

export default function HomePage() {
  return (
    <main className="home">
      <HeroSection />
      <IntegrationSection />
      <FeaturesSection />
      <DomainsSection />
      <EcosystemSection />
      <CommunityCallToAction />
    </main>
  );
}
