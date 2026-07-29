import Link from 'next/link';
import type { Route } from 'next';
import Image from 'next/image';
import GitHubIcon from '@/public/github.png';
import { ArrowRight, HandHeart, MessagesSquare, Users } from 'lucide-react';

const waysToJoin = [
  {
    icon: Users,
    image: undefined,
    title: 'Shape the standards',
    description: 'Join the W3C Web of Things Working Group and contribute directly to specifications and guidelines.',
    label: 'Participate in W3C WoT',
    href: '/participate/working-group',
  },
  {
    icon: undefined,
    image: GitHubIcon,
    title: 'Contribute in the open',
    description: 'Follow development, raise issues, and share the real-world use cases that the standards need to serve.',
    label: 'Follow us on GitHub',
    href: 'https://github.com/w3c/wot',
    external: true,
  },
  {
    icon: HandHeart,
    image: undefined,
    title: 'Support an open web',
    description: 'Help W3C keep the Web of Things open, interoperable, and available for everyone to build on.',
    label: 'Support W3C',
    href: 'https://www.w3.org/support-us/',
    external: true,
  },
];

export function WhyJoin() {
  return (
    <section className="why-join section">
      <div className="shell">
        <header>
          <label>WHY JOIN?</label>
          <h2>Help shape how the world&apos;s things connect.</h2>
          <p>
            Web of Things standards are developed in the open to ensure long-term IoT interoperability. Your
            experience can help create a more cohesive, useful, and resilient connected ecosystem.
          </p>
        </header>

        <div className="why-join-grid">
          {waysToJoin.map(({ icon: Icon, image, title, description, label, href, external }) => (
            <article key={title}>
              <div className="why-join-icon">
                {Icon ? <Icon aria-hidden="true" /> : <Image src={image} alt="" width={23} height={23} />}
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              {external ? (
                <a href={href} target="_blank" rel="noreferrer">
                  {label} <ArrowRight aria-hidden="true" />
                </a>
              ) : (
                <Link href={href as Route}>
                  {label} <ArrowRight aria-hidden="true" />
                </Link>
              )}
            </article>
          ))}
        </div>

        <div className="why-join-note">
          <MessagesSquare aria-hidden="true" />
          <p>
            You do not need to be a member to follow the work, open an issue, or tell us about a use case. We welcome
            your input.
          </p>
        </div>
      </div>
    </section>
  );
}
