import GitHubIcon from '@/public/github.png';
import { Mail } from 'lucide-react';
import Image from 'next/image';
import { ReactNode } from 'react';
import DiscordIcon from '@/public/discord.png';

interface Contact {
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
}

export const CONTACTS: Contact[] = [
  {
    title: 'GitHub',
    description: 'Create issues for discussions on the overall WoT',
    href: 'https://github.com/w3c/wot/issues',
    icon: <Image src={GitHubIcon} alt="GitHub" width={24} height={24} />,
  },
  {
    title: 'W3C Website',
    description: 'Overall information on the World Wide Web',
    href: 'https://www.w3.org/',
    icon: <Image src="https://www.w3.org/assets/logos/w3c-2025/svg/w3c.svg" alt="W3C" width={24} height={24} />,
  },
  {
    title: 'StackOverflow',
    description: 'Technical questions',
    href: 'https://stackoverflow.com/questions/tagged/web-of-things',
    icon: (
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Stack_Overflow_icon.svg"
        alt="StackOverflow"
        width={24}
        height={24}
      />
    ),
  },
  {
    title: 'WoT Working Group',
    description: 'Public mailing list',
    href: 'https://lists.w3.org/Archives/Public/public-wot-wg/',
    icon: <Mail />,
  },
  {
    title: 'Discord',
    description:
      'Join our community for general discussions and support. This space is managed by the WoT Community Group and is not a W3C service or endorsed by W3C.',
    href: 'https://discord.gg/WP3MqCfKQ',
    icon: <Image src={DiscordIcon} alt="Discord" width={24} />,
  },
  {
    title: 'Edit this Website',
    description: 'Help us improve this website by editing it directly or reporting an issue',
    href: 'https://github.com/w3c/wot-marketing',
    icon: <Image src={GitHubIcon} alt="GitHub" width={24} height={24} />,
  },
];
