import { PageSection } from '@/app/_components/PageSection';
import { PageLayout } from '@/app/_components/PageLayout';
import { Box, Card, Divider, Link, Stack, Table, Typography } from '@mui/joy';
import { LinkButton } from '@/app/_components/LinkButton';
import { DELIVERABLES } from '@/lib/deliverables';
import { StyledTable } from '@/app/_components/StyledTable';

export default function DocumentationPage() {
  return (
    <PageLayout
      title="Documentation"
      subtitle="Explore the Web of Things (WoT) specifications, tutorials, and resources"
    >
      <PageSection title="Foundations">
        <Stack gap={3}>
          <Typography>
            New to the Web of Things? These beginner-friendly community-based tutorials will help you understand the
            core concepts behind WoT and get you up to speed quickly. Whether you&apos;re a developer, researcher, or
            just curious, these are the best places to start.
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1', md: 'repeat(3, 1fr)' },
              columnGap: 3,
              rowGap: 4,
            }}
          >
            <TutorialCard
              title="What is WoT?"
              description="A gentle introduction to the Web of Things. Learn what WoT is all about, why it matters, and how it connects everyday devices to the Web using open standards. "
              cta="Start the Tutorial »"
              href="https://w3c.github.io/wot-cg/tutorials/whatiswot/"
            />
            <TutorialCard
              title="Thing Description 1.1 Explainer"
              description="Understand the Thing Description (TD), the cornerstone of WoT. This explainer walks you through how TDs describe the capabilities, interfaces, and metadata of connected devices in a machine-readable format."
              cta="Read the Explainer »"
              href="https://github.com/w3c/wot-thing-description/blob/main/explainer/Explainer11.md"
            />
            <TutorialCard
              title="WoT Discovery Explainer"
              description="Learn how devices and services find each other on the Web of Things. This explainer covers the WoT Discovery mechanism, which makes it easy to search for and locate Thing Descriptions across networks."
              cta="Read the Explainer »"
              href="https://github.com/w3c/wot-discovery/blob/main/explainer/Explainer.md"
            />
          </Box>
        </Stack>
      </PageSection>
      <PageSection title="Deliverables">
        <Stack gap={3}>
          <Typography>
            The W3C WoT Working Group publishes and maintains a suite of documents that define the Web of Things. These
            are categorized into normative specifications and informative deliverables. The tables below provide an
            overview of our current deliverables and their publication status.
          </Typography>

          <Stack gap={1}>
            <Typography level="title-lg">Normative Deliverables</Typography>
            <StyledTable
              header={[
                { label: 'Deliverable' },
                { label: 'Status', size: '200px' },
                { label: 'Last Publication', size: '150px' },
              ]}
              rows={DELIVERABLES.normative_deliverables.map((deliverable) => ({
                cells: [
                  <Link key={deliverable.url} href={deliverable.url}>
                    {deliverable.deliverable}
                  </Link>,
                  deliverable.status,
                  deliverable.last_publication,
                ],
              }))}
            />
          </Stack>
          <Stack gap={1}>
            <Typography level="title-lg">Informative Deliverables</Typography>
            <StyledTable
              header={[{ label: 'Deliverable' }, { label: 'Last Publication', size: '150px' }]}
              rows={DELIVERABLES.informative_deliverables.map((deliverable) => ({
                cells: [
                  <Link key={deliverable.url} href={deliverable.url}>
                    {deliverable.deliverable}
                  </Link>,
                  deliverable.last_publication,
                ],
              }))}
            />
          </Stack>
        </Stack>
      </PageSection>
    </PageLayout>
  );
}

function TutorialCard({
  title,
  description,
  cta,
  href,
}: {
  title: string;
  description: string;
  cta: string;
  href: string;
}) {
  return (
    <Card sx={{ p: 0 }}>
      <Stack>
        <Card variant="soft" sx={{ borderBottomRightRadius: 0, borderBottomLeftRadius: 0, p: 2 }}>
          <Typography level="title-lg">{title}</Typography>
        </Card>
        <Divider />
      </Stack>
      <Stack justifyContent="space-between" sx={{ p: 2, pt: 0, height: '100%', gap: 3 }}>
        <Typography>{description}</Typography>
        <LinkButton variant="solid" color="primary" external_url={href}>
          {cta}
        </LinkButton>
      </Stack>
    </Card>
  );
}
