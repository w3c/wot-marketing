import { Route } from 'next';

interface Redirect {
  source: string;
  destination: Route;
}

export const REDIRECTS: Redirect[] = [
  {
    source: '/wg',
    destination: '/participate/working-group',
  },
  {
    source: '/cg',
    destination: '/participate/community-groups',
  },
  {
    source: '/activities/task-forces',
    destination: '/participate/working-group/task-forces',
  },
  {
    source: '/activities/task-forces/:slug',
    destination: '/participate/working-group/task-forces/:slug' as Route,
  },
  {
    source: '/activities/events',
    destination: '/participate/working-group/events',
  },
  {
    source: '/activities/meetings',
    destination: '/participate/working-group',
  },
  { source: '/developers', destination: '/developers/tools' },
  {
    source: '/documentation',
    destination: '/developers/documentation',
  },
  {
    source: "/participate",
    destination: "/",
  },
  {
    source: "/about",
    destination: "/",
  }
];
