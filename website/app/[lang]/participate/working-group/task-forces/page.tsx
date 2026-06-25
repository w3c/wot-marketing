import { PageLayout } from '@/app/_components/PageLayout';
import { StyledLink } from '@/app/_components/StyledLink';
import { StyledTable } from '@/app/_components/StyledTable';
import { TASK_FORCES } from '@/lib/taskForces';
import { Stack, Typography } from '@mui/joy';
import { Mail } from 'lucide-react';
import { Metadata, Route } from 'next';
import { isLocale } from '@/lib/i18n/config';
import { getDictionary } from '@/lib/i18n/dictionaries';
import { pageMetadata } from '@/lib/i18n/metadata';

export async function generateMetadata(props: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await props.params;
  const locale = isLocale(lang) ? lang : 'en';
  const dict = getDictionary(locale);
  return pageMetadata(locale, '/participate/working-group/task-forces', {
    title: dict.pages.taskForces.title,
    description: dict.pages.taskForces.subtitle,
  });
}

export default async function TaskForcesPage(props: { params: Promise<{ lang: string }> }) {
  const { lang } = await props.params;
  const locale = isLocale(lang) ? lang : 'en';
  const dict = getDictionary(locale);
  return (
    <PageLayout
      breadcrumbs={{ startingPath: '/participate/working-group' }}
      title={dict.pages.taskForces.title}
      subtitle={dict.pages.taskForces.subtitle}
    >
      <StyledTable
        header={[
          { label: 'Active', size: '60px' },
          { label: 'Name', size: '200px' },
          { label: 'Deliverables', size: '30%' },
          { label: 'Task Force Leads' },
        ]}
        rows={Object.keys(TASK_FORCES).map((taskForceKey) => {
          const taskForce = TASK_FORCES[taskForceKey];
          return {
            cells: [
              <Typography key={taskForceKey + 'active'} textAlign={'center'}>
                {taskForce.isActive ? '✓' : '✗'}
              </Typography>,
              <StyledLink
                key={taskForceKey + 'title'}
                path={`/participate/working-group/task-forces/${taskForceKey}` as Route}
              >
                {taskForce.title}
              </StyledLink>,
              taskForce.deliverables.map((deliverable, index) => {
                return <div key={index}>{deliverable.name}</div>;
              }),
              <Stack key={taskForceKey + 'leads'}>
                {taskForce.people['TF-Leads']?.map((lead) => (
                  <StyledLink key={lead.name} external_url={`mailto:${lead.href}`} startDecorator={<Mail size={14} />}>
                    {lead.name}
                  </StyledLink>
                ))}
              </Stack>,
            ],
          };
        })}
      />
    </PageLayout>
  );
}
