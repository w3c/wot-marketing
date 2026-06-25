import { PageLayout } from '@/app/_components/PageLayout';
import { PageSection } from '@/app/_components/PageSection';
import { Alert, Link, List, ListItem, Stack, Typography } from '@mui/joy';
import { TASK_FORCES } from '@/lib/taskForces';
import { notFound } from 'next/navigation';
import { Mail, User } from 'lucide-react';

export function generateStaticParams() {
  return Object.keys(TASK_FORCES).map((slug) => ({
    slug,
  }));
}

export default async function TaskForceDynamicPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const slug = params.slug;
  const pageData = TASK_FORCES[slug];

  if (!pageData) {
    notFound();
  }

  return (
    <PageLayout
      breadcrumbs={{
        startingPath: '/participate/working-group',
      }}
      title={pageData.title}
      banner={
        <Alert color={pageData.isActive ? 'success' : 'danger'} size="sm" sx={{ width: 'fit-content' }}>
          <Typography level="title-sm">{pageData.isActive ? 'Active' : 'Suspended'}</Typography>
        </Alert>
      }
      subtitle={pageData.description}
    >
      {pageData.deliverables.map((deliverable, index) => {
        return (
          <PageSection title={deliverable.type} key={index}>
            <Stack gap={2}>
              <Typography level="title-lg">{deliverable.name}</Typography>
              <Typography>{deliverable.description}</Typography>
            </Stack>
          </PageSection>
        );
      })}

      {pageData.tasks && (
        <PageSection title="Tasks">
          {pageData.tasks.map((task, index) => (
            <Stack key={index}>
              <Typography>{task.description}</Typography>
              <List marker="disc" size="md">
                {task.taskList.map((taskItem) =>
                  taskItem.subTasks.length > 0 ? (
                    <ListItem nested key={taskItem.name}>
                      <ListItem>{taskItem.name}</ListItem>
                      <List marker="circle" size="sm">
                        {taskItem.subTasks.map((sub) => (
                          <ListItem key={sub}>{sub}</ListItem>
                        ))}
                      </List>
                    </ListItem>
                  ) : (
                    <ListItem key={taskItem.name}>{taskItem.name}</ListItem>
                  )
                )}
              </List>
            </Stack>
          ))}
        </PageSection>
      )}

      <PageSection title="People">
        <Stack gap={2}>
          {Object.entries(pageData.people).map(([role, peopleList]) => (
            <div key={role}>
              <Typography level="title-md">{role}:</Typography>
              <Stack>
                {peopleList.map((person, index) =>
                  person.href ? (
                    <Link key={index} href={person.href} startDecorator={<Mail size={16} />}>
                      {person.name}
                    </Link>
                  ) : (
                    <Stack key={index} direction="row" alignItems="center" gap={1}>
                      <User size={16} />
                      {person.name}
                    </Stack>
                  )
                )}
              </Stack>
            </div>
          ))}
        </Stack>
      </PageSection>

      <PageSection title="Resources">
        <List marker="disc" size="sm">
          {pageData.resources.map((resource) => (
            <ListItem key={resource.url}>
              <Link href={resource.url}>{resource.label}</Link>
            </ListItem>
          ))}
        </List>
      </PageSection>
    </PageLayout>
  );
}
