import { PageLayout } from '@/app/_components/PageLayout';
import { StyledLink } from '@/app/_components/StyledLink';
import { StyledTable } from '@/app/_components/StyledTable';
import { TASK_FORCES } from '@/lib/taskForces';
import { Stack, Typography } from '@mui/joy';
import { Mail } from 'lucide-react';
import { Route } from 'next';

export default function TaskForcesPage() {
  return (
    <PageLayout
      breadcrumbs={{ startingPath: '/participate/working-group' }}
      title="Task Forces"
      subtitle="The Web of Things (WoT) Working Group conducts some of its work via task forces and uses a main wiki & call to provide an opportunity to summarize and coordinate the activities of the various task forces. See each task force page for details about specific work. "
    >
      <StyledTable
        header={[
          { label: 'Active', sx: { width: '60px' } },
          { label: 'Name', sx: { width: '200px' } },
          { label: 'Deliverables', sx: { width: '30%' } },
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
