import Link from 'next/link';
import { ArrowRight, Building2, Factory, Home, type LucideIcon, Zap } from 'lucide-react';

const domains: { title: string; description: string; Icon: LucideIcon }[] = [
  { title: 'Industry', description: 'Compose production assets', Icon: Factory },
  { title: 'Smart home', description: 'Bridge connected ecosystems', Icon: Home },
  { title: 'Smart cities', description: 'Connect public infrastructure', Icon: Building2 },
  { title: 'Energy', description: 'Coordinate distributed resources', Icon: Zap },
];

export function DomainsSection() {
  return (
    <section className="shell section domain-section">
      <header>
        <label>ONE STANDARD, MANY WORLDS</label>
        <h2>Turn connected systems into web systems.</h2>
        <p>Use the same open application layer from the factory floor to the energy grid.</p>
      </header>
      <div className="domain-grid">
        {domains.map(({ title, description, Icon }) => (
          <article key={title}>
            <Icon />
            <span>
              <b>{title}</b>
              <small>{description}</small>
            </span>
          </article>
        ))}
      </div>
      <Link className="domain-cta" href="/use-cases">
        Explore use cases <ArrowRight />
      </Link>
    </section>
  );
}
