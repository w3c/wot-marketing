import { Link, Typography } from '@mui/joy';
import { StaticImageData } from 'next/image';

import thumbWotExplainer from '@/public/video-previews/video-thumbnail-wot-explainer.png';
import thumbWotEu2024 from '@/public/video-previews/video-thumbnail-wot_eu_2024.png';
import thumbWotCgSummary from '@/public/video-previews/video-thumbnail-wot_cg_summary.png';
import thumbTpac2020 from '@/public/video-previews/video-thumbnail-tpac-2020.png';
import thumbGeekle from '@/public/video-previews/video-thumbnail-geekle.png';
import thumbNodeRed from '@/public/video-previews/video-thumbnail-node-red.png';
import thumbPfOutcomeFarm from '@/public/video-previews/video-thumbnail-pf-outcome-farm.png';
import thumbWam from '@/public/video-previews/video-thumbnail-wam.png';
import thumbShortIntroRobotArm from '@/public/video-previews/video-short-intro-robot-arm.png';
import thumbWotAtIndustry24 from '@/public/video-previews/video-thumbnail-wot_at_industry24.png';
import thumbOcx24 from '@/public/video-previews/video-thumbnail-ocx24.png';
import thumbRiot2022 from '@/public/video-previews/video-thumbnail-riot-2022.png';
import thumbEclipsecon2021 from '@/public/video-previews/video-thumbnail-eclipsecon2021.png';
import thumbAsc2020 from '@/public/video-previews/video-thumbnail-asc-2020.jpg';
import thumbSiemens from '@/public/video-previews/video-thumbnail-siemens.jpg';
import thumbLemonbeat from '@/public/video-previews/video-thumbnail-lemonbeat.jpg';
import thumbJeffJaffe from '@/public/video-previews/video-thumbnail-jeff-jaffe.png';

export interface Video {
  title: string;
  url: string;
  thumbnail: StaticImageData | string;
  alternativeUrl?: string;
}

export interface VideoSection {
  title: string;
  description?: React.ReactNode;
  videos: Video[];
}

export const VIDEO_SECTIONS: VideoSection[] = [
  {
    title: 'Introduction',
    videos: [
      {
        title: 'Web of Things (WoT) Explainer Video',
        url: 'https://www.youtube.com/watch?v=WMFXg-kni0U',
        thumbnail: thumbWotExplainer,
        alternativeUrl: 'https://www.w3.org/2021/02/wot-explainer-video.html',
      },
      {
        title: 'Insights on the Web of Things, by Sebastian Käbisch (Siemens)',
        url: 'https://www.youtube.com/watch?v=pBuDoLG6M6I',
        thumbnail: thumbWotEu2024,
      },
      {
        title: '“Where is WoT?”: a summary of WoT CG meetups',
        url: 'https://www.youtube.com/watch?v=sVZsLXaJqRw',
        thumbnail: thumbWotCgSummary,
      },
      {
        title: 'TPAC 2020 Updates from the Web of Things Working and Interest Groups',
        url: 'https://www.youtube.com/watch?v=i_bNWV1CgeA',
        thumbnail: thumbTpac2020,
      },
    ],
  },
  {
    title: 'Tutorials',
    description: (
      <Typography sx={{ mb: 3 }}>
        A step-by-step tutorial can be found on the{' '}
        <Link href="https://w3c.github.io/wot-cg/tutorials/whatiswot/">&quot;What is WoT?&quot; page</Link> of the W3C
        WoT Community Group and the corresponding{' '}
        <Link href="https://www.youtube.com/playlist?list=PL7z9Jd8H_9zpA7LFyWy8-kuHvIfpL4X8i">YouTube playlist</Link>
      </Typography>
    ),
    videos: [
      {
        title: "Global Summit for Node.js'22 - Bringing the Power of the Web to the IoT: Web of Things and node-wot",
        url: 'https://www.youtube.com/watch?v=NkVrqSs-KOs',
        thumbnail: thumbGeekle,
      },
      {
        title: 'Auto-population using Node-RED Node Generator - TPAC 2020 Demo by Web of Things Groups',
        url: 'https://www.youtube.com/watch?v=oAcYbJ6P9bU',
        thumbnail: thumbNodeRed,
      },
      {
        title: 'W3C WoT PlugFest outcome: Sprinkler and Display sync',
        url: 'https://www.youtube.com/watch?v=JqKBwkvrjio',
        thumbnail: thumbPfOutcomeFarm,
      },
      {
        title: 'Building a WoT application: WoT application Manager and TD-code',
        url: 'https://www.youtube.com/watch?v=bPxIfZo7jns',
        thumbnail: thumbWam,
      },
      {
        title: 'Short Introduction to Web of Things',
        url: 'https://www.youtube.com/watch?v=lt_P2BU8e3I',
        thumbnail: thumbShortIntroRobotArm,
      },
    ],
  },
  {
    title: 'Interviews, Meetings, Conferences',
    videos: [
      {
        title: 'WoT@Industry Conference 2024',
        url: 'https://www.youtube.com/watch?v=gIMSnJqhtRY',
        thumbnail: thumbWotAtIndustry24,
      },
      {
        title:
          "Open Community Experience (OCX) 2024 - Thingweb's Next Chapter: How we are scaling our Project for better IoT and Digital Twin Applications",
        url: 'https://www.youtube.com/watch?v=GK0I8GU7oN4',
        thumbnail: thumbOcx24,
      },
      {
        title: 'RIOT Summit 2022, Keynote: "Web of Things - What is it all about"',
        url: 'https://www.youtube.com/watch?v=PuhNX0QdvYI&list=PLDXXQJiSjPKHyo7D9xDLJELFQw5GHKQYJ&index=3',
        thumbnail: thumbRiot2022,
      },
      {
        title: 'EclipseCon 2021 - Quick-start IoT Projects with Eclipse Thingweb & EdiTDor',
        url: 'https://www.youtube.com/watch?v=GljUcstf9mw',
        thumbnail: thumbEclipsecon2021,
      },
      {
        title: 'W3C Web of Things Description for API Description of Devices',
        url: 'https://www.youtube.com/watch?v=ySLuAIoz0Dg',
        thumbnail: thumbAsc2020,
      },
      {
        title: 'A common language for machines: new W3C consortium standard for IoT',
        url: 'https://www.youtube.com/watch?v=5k4JufTE9MQ',
        thumbnail: thumbSiemens,
      },
      {
        title: 'W3C meeting in Düsseldorf: Another step towards IoT standardization',
        url: 'https://www.youtube.com/watch?v=zGr6ZmeXjDM',
        thumbnail: thumbLemonbeat,
      },
      {
        title: 'Industry of Things World USA 2016 Interview - Jeff Jaffe, W3C',
        url: 'https://www.youtube.com/watch?list=PLEyJjfPQS2aCnJ7fktjgmnwvl_RmsvQbd&v=VKKxnk-aRhY',
        thumbnail: thumbJeffJaffe,
      },
    ],
  },
];
