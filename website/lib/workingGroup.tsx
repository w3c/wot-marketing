import { LogIn, FileText, Mail, Users, UserCog, CalendarDays } from 'lucide-react';
import { Route } from 'next';

export const CARD_LINKS = [
  {
    icon: <LogIn />,
    label: 'Join',
    description: 'Step-by-step instructions for getting involved',
    external_url: 'https://www.w3.org/2004/01/pp-impl/95969/instructions',
  },
  {
    icon: <FileText />,
    label: 'WG Charter',
    description: 'Official group mandate and timeline',
    external_url: 'https://www.w3.org/2023/10/wot-wg-2023.html',
  },
  {
    icon: <Mail />,
    label: 'Mailing List',
    description: 'Archive of official group discussions',
    external_url: 'https://lists.w3.org/Archives/Member/member-wot-wg/',
  },
  {
    icon: <Users />,
    label: 'Participants',
    description: 'Directory of active members and contributing organizations',
    external_url: 'https://www.w3.org/groups/wg/wot/participants',
  },
  {
    icon: <UserCog />,
    label: 'Task Forces',
    description: 'Focused sub-groups for specific standardization areas',
    path: '/participate/working-group/task-forces' as Route,
  },
  {
    icon: <CalendarDays />,
    label: 'Events',
    description: 'In-person gatherings, testfests, and global conferences',
    path: '/participate/working-group/events' as Route,
  },
];
export const TIMEZONES = [
  { value: 'browser', label: 'Timezone of Browser' },
  { value: 'America/Los_Angeles', label: 'America/Los_Angeles' },
  { value: 'America/New_York', label: 'America/New_York' },
  { value: 'Europe/London', label: 'Europe/London' },
  { value: 'Europe/Berlin', label: 'Europe/Berlin' },
  { value: 'Europe/Helsinki', label: 'Europe/Helsinki' },
  { value: 'Asia/Singapore', label: 'Asia/Singapore' },
  { value: 'Asia/Tokyo', label: 'Asia/Tokyo' },
] as const;
