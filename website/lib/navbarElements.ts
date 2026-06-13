import { NavbarElement } from '../app/_components/navbar/Navbar';

export const NAVBAR_ELEMENTS: NavbarElement[] = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Use Cases',
    path: '/use-cases',
  },
  {
    label: 'Developers',
    description: 'Discover useful resources for developers building WoT applications',
    subpages: [
      {
        label: 'Tools',
        description: 'List of applications, libraries, services and more for WoT development',
        path: '/developers/tools',
      },
      {
        label: 'Documentation',
        description: 'Tutorials, specifications, standardizations and other documentation for WoT',
        path: '/developers/documentation',
      },
    ],
  },
  {
    label: 'Videos',
    path: '/videos',
  },
  {
    label: 'Participate',
    description: 'The W3C Web of Things is shaped by global experts. Join to drive standards or to incubate ideas.',
    subpages: [
      {
        label: 'Working Group (WG)',
        description: 'Develops normative specifications, creates test suites, and coordinates all Task Forces',
        path: '/participate/working-group',
      },
      {
        label: 'Community Groups (CG)',
        description:
          'Open forums to accelerate WoT adoption, gather use cases, and discuss specific domains and regions',
        path: '/participate/community-groups',
      },
    ],
  },
  {
    label: 'About',
    description: 'Find more important information about WoT',
    subpages: [
      {
        label: 'Contact',
        description: 'Get in touch with us for any questions or inquiries',
        path: '/about/contact',
      },
      {
        label: 'Articles',
        description: 'Latest articles and news about WoT',
        path: '/about/articles',
      },
      {
        label: 'History',
        description: 'Historical overview of WoT development',
        path: '/about/history',
      },
    ],
  },
];
