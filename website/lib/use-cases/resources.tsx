import { ReactNode } from 'react';
import youtubeIcon from '@/public/youtube.png';
import Image from 'next/image';
import { FileText, Network } from 'lucide-react';
import { Stack } from '@mui/joy';

export interface Resource {
  title: string;
  description: ReactNode;
  url: string;
  urlLabel: string;
  icon: ReactNode;
}

export const RESOURCES: Resource[] = [
  {
    title: 'WoT Community Group Case Studies',
    description: (
      <Stack justifyContent="space-between">
        Presentations of WoT adopters in the WoT Community Group are case studies of WoT is used in the industry,
        academia and enthusiasts.
      </Stack>
    ),
    url: 'https://www.youtube.com/playlist?list=PL7z9Jd8H_9zpDd7Y5pEw6lBrPehKpVKxZ',
    urlLabel: 'youtube.com',
    icon: <Image src={youtubeIcon} alt="Youtube" height={24} />,
  },
  {
    title: 'WoT Use Cases & Requirements',
    description:
      'The official W3C document detailing use cases gathered from WoT stakeholders, including functional and technical requirements.',
    url: 'https://w3c.github.io/wot-usecases/',
    urlLabel: 'w3c.github.io/wot-usecases',
    icon: <FileText size={24} />,
  },
  {
    title: 'WoT Architecture: Application Domains',
    description:
      'Section of the WoT Architecture 1.1 specification describing the key application domains where WoT technologies are applied.',
    url: 'https://www.w3.org/TR/wot-architecture11/#sec-application-domains',
    urlLabel: 'w3.org/TR/wot-architecture11',
    icon: <Network size={24} />,
  },
];
