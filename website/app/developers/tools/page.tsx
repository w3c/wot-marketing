'use client';

import { PageLayout } from '@/app/_components/PageLayout';
import { ReactNode, useMemo, useState } from 'react';
import { ToolFilters } from './_components/ToolFilters';
import toolsJSON from '@/lib/generated/devToolsOutput.json';
import { DevToolsOutput, ToolOutput } from '../../../../scripts/dev-tools/types';
import { Alert, Link, Modal, ModalClose, ModalDialog, Stack, Table, Typography } from '@mui/joy';
import GitHubLogo from '@/public/github.png';
import GitLabLogo from '@/public/gitlab.png';
import Image, { StaticImageData } from 'next/image';
import { Building, Clock, House, Monitor, Scale } from 'lucide-react';
import { StyledTable } from '@/app/_components/StyledTable';

export default function ToolsPage() {
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [platformFilter, setPlatformFilter] = useState('All');
  const [languageFilter, setLanguageFilter] = useState('All');
  const [showObsoleteFilter, setShowObsoleteFilter] = useState('Hide');
  const [selectedTool, setSelectedTool] = useState<ToolOutput | null>(null);
  const OBSOLETE_IN = 2;

  const tools = toolsJSON as DevToolsOutput;

  const isToolObsolete = (lastUpdated: string | null) => {
    if (!lastUpdated) {
      return false;
    }
    const input = new Date(lastUpdated);
    const now = new Date();
    const obsoleteDate = new Date(input);
    obsoleteDate.setFullYear(obsoleteDate.getFullYear() + OBSOLETE_IN);
    return now >= obsoleteDate;
  };

  const getMatchCount = useMemo(
    () => (categoryFilter: string, platformFilter: string, languageFilter: string, showObsoleteFilter: string) => {
      let count = 0;
      Object.keys(tools).forEach((category) => {
        if (categoryFilter !== 'All' && category !== categoryFilter) {
          return;
        }
        const subCategories = tools[category];
        Object.keys(subCategories).forEach((subCategory) => {
          const toolsList = subCategories[subCategory].tools;
          const filtered = toolsList
            .filter((tool) => platformFilter === 'All' || tool.platforms.includes(platformFilter))
            .filter((tool) => languageFilter === 'All' || tool.languages.includes(languageFilter))
            .filter((tool) => showObsoleteFilter === 'Show' || !isToolObsolete(tool.lastUpdated));
          count += filtered.length;
        });
      });
      return count;
    },
    [tools]
  );

  const filteredTools = useMemo(() => {
    return Object.keys(tools).reduce((acc, category) => {
      if (categoryFilter !== 'All' && category !== categoryFilter) {
        return acc;
      }
      const subCategories = tools[category];
      Object.keys(subCategories).forEach((subCategory) => {
        const tools = subCategories[subCategory].tools;
        const filteredTools = tools
          .filter((tool) => platformFilter === 'All' || tool.platforms.includes(platformFilter))
          .filter((tool) => languageFilter === 'All' || tool.languages.includes(languageFilter))
          .filter((tool) => showObsoleteFilter === 'Show' || !isToolObsolete(tool.lastUpdated));
        if (filteredTools.length > 0) {
          if (!acc[category]) {
            acc[category] = {};
          }
          acc[category][subCategory] = {
            ...subCategories[subCategory],
            tools: filteredTools,
          };
        }
      });
      return acc;
    }, {} as DevToolsOutput);
  }, [categoryFilter, languageFilter, platformFilter, showObsoleteFilter, tools]);

  return (
    <PageLayout
      title="WoT Tools"
      subtitle="Various resources for building Web of Things applications, including libraries, ready-to-use software, services, and SDKs tailored for different development stages, are grouped below "
    >
      {selectedTool && (
        <Modal
          open={true}
          onClose={() => {
            setSelectedTool(null);
          }}
        >
          <ModalDialog>
            <ModalClose />
            <Typography level="h3">{selectedTool.name}</Typography>
            <Typography>{selectedTool.description}</Typography>
            <Stack gap={2} mt={2}>
              {selectedTool.homepageUrl && (
                <DetailItem
                  href={selectedTool.homepageUrl}
                  icon={<House size={18} />}
                  label="Homepage"
                  description={selectedTool.homepageUrl}
                />
              )}
              {selectedTool.repoUrl && (
                <DetailItem
                  href={selectedTool.repoUrl}
                  src={selectedTool.repoUrl.includes('github') ? GitHubLogo : GitLabLogo}
                  label="Repository"
                  description={selectedTool.repoUrl}
                />
              )}
              {selectedTool.license && (
                <DetailItem icon={<Scale size={18} />} label="License" description={selectedTool.license} />
              )}
              {selectedTool.affiliation && (
                <DetailItem icon={<Building size={18} />} label="Affiliation" description={selectedTool.affiliation} />
              )}
              {selectedTool.platforms && (
                <DetailItem
                  icon={<Monitor size={18} />}
                  label="Platforms"
                  description={selectedTool.platforms.join(', ')}
                />
              )}
              {selectedTool.lastUpdated && (
                <DetailItem
                  icon={<Clock size={18} />}
                  label="Last Updated"
                  description={new Date(selectedTool.lastUpdated).toLocaleDateString()}
                />
              )}
            </Stack>
          </ModalDialog>
        </Modal>
      )}
      <Stack gap={3}>
        <ToolFilters
          category={categoryFilter}
          platform={platformFilter}
          language={languageFilter}
          showObsolete={showObsoleteFilter}
          setCategory={setCategoryFilter}
          setPlatform={setPlatformFilter}
          setLanguage={setLanguageFilter}
          setShowObsolete={setShowObsoleteFilter}
          getMatchCount={getMatchCount}
        />
        <Alert variant="outlined" sx={{ width: 'fit-content', gap: 0.5 }}>
          Showing
          <Typography color="primary" fontWeight="bold">
            {Object.values(filteredTools).reduce((acc, category) => {
              return acc + Object.values(category).reduce((acc, subCategory) => acc + subCategory.tools.length, 0);
            }, 0)}
          </Typography>
          matching tools
        </Alert>
      </Stack>
      {Object.keys(filteredTools).map((category) => (
        <Stack key={category} gap={2}>
          <Typography level="h3">{category}</Typography>
          <Stack gap={4}>
            {Object.keys(filteredTools[category]).map((subCategory) => (
              <Stack key={subCategory} gap={2}>
                <Stack>
                  <Typography level="title-lg">{subCategory}</Typography>
                  <Typography>{filteredTools[category][subCategory].description}</Typography>
                </Stack>
                <StyledTable
                  header={[
                    { label: 'Name', size: '300px' },
                    { label: 'Description', size: '100%' },
                  ]}
                  rows={filteredTools[category][subCategory].tools.map((tool) => ({
                    cells: [
                      <Typography fontWeight="lg" key={tool.name}>
                        {tool.name}
                      </Typography>,
                      tool.description,
                    ],
                    onClick: () => setSelectedTool(tool),
                    style: {
                      color: isToolObsolete(tool.lastUpdated) ? 'gray' : 'inherit',
                    },
                  }))}
                />
              </Stack>
            ))}
          </Stack>
        </Stack>
      ))}
      <Typography level="body-sm">* Tools with developer activity older than 2 years are marked as obsolete</Typography>
    </PageLayout>
  );
}

function DetailItem({
  href,
  icon,
  label,
  src,
  description,
}: {
  href?: string;
  src?: StaticImageData;
  icon?: ReactNode;
  label: string;
  description: string;
}) {
  return (
    <Stack>
      <Stack direction="row" alignItems="center" gap={1}>
        {icon && icon}
        {src && <Image src={src} width={20} height={20} alt={label} />}
        <Typography level="title-lg">{label}</Typography>
      </Stack>
      {href ? <Link href={href}>{href}</Link> : <Typography>{description}</Typography>}
    </Stack>
  );
}
