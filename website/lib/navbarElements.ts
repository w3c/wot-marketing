import { NavbarElement } from '../app/_components/navbar/Navbar';
import type { Dictionary } from './i18n/dictionaries';

/**
 * Builds the navigation structure with labels/descriptions taken from the
 * active locale's dictionary. Paths stay locale-agnostic; the locale prefix is
 * added by the link components at render time.
 */
export function buildNavbarElements(dict: Dictionary): NavbarElement[] {
  const nav = dict.nav;
  return [
    {
      label: nav.home,
      path: '/',
    },
    {
      label: nav.useCases,
      path: '/use-cases',
    },
    {
      label: nav.developers.label,
      description: nav.developers.description,
      subpages: [
        {
          label: nav.developers.tools.label,
          description: nav.developers.tools.description,
          path: '/developers/tools',
        },
        {
          label: nav.developers.documentation.label,
          description: nav.developers.documentation.description,
          path: '/developers/documentation',
        },
      ],
    },
    {
      label: nav.videos,
      path: '/videos',
    },
    {
      label: nav.participate.label,
      description: nav.participate.description,
      subpages: [
        {
          label: nav.participate.workingGroup.label,
          description: nav.participate.workingGroup.description,
          path: '/participate/working-group',
        },
        {
          label: nav.participate.communityGroups.label,
          description: nav.participate.communityGroups.description,
          path: '/participate/community-groups',
        },
      ],
    },
    {
      label: nav.about.label,
      description: nav.about.description,
      subpages: [
        {
          label: nav.about.contact.label,
          description: nav.about.contact.description,
          path: '/about/contact',
        },
        {
          label: nav.about.articles.label,
          description: nav.about.articles.description,
          path: '/about/articles',
        },
        {
          label: nav.about.history.label,
          description: nav.about.history.description,
          path: '/about/history',
        },
      ],
    },
  ];
}
