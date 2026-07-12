import { Network, PlugZap, ShieldCheck, Sparkles, type LucideIcon } from 'lucide-react';

const features: { title: string; description: string; Icon: LucideIcon }[] = [
  { title: 'Describe once', description: 'A semantic description of properties, actions, and events.', Icon: Network },
  { title: 'Secure by design', description: 'Build on established web security mechanisms.', Icon: ShieldCheck },
  { title: 'Connect anything', description: 'Keep applications independent from protocols and transports.', Icon: PlugZap },
  { title: 'Compose freely', description: 'Reuse and combine capabilities across vendors and domains.', Icon: Sparkles },
];

export function FeaturesSection() {
  return <section className="features"><div className="shell"><header><label>BUILT FOR THE REAL WORLD</label><h2>Interoperability without compromise</h2></header><div className="cards">{features.map(({ title, description, Icon }) => <article key={title}><Icon /><h3>{title}</h3><p>{description}</p></article>)}</div></div></section>;
}
