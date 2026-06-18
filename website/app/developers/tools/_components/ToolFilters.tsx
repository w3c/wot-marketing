import { Box, Stack } from '@mui/joy';
import { Filter } from './Filter';
import toolsJSON from '@/lib/generated/devToolsOutput.json';
import { DevToolsOutput, ToolOutput } from '../../../../../scripts/dev-tools/types';
import { useMemo } from 'react';

export function ToolFilters({
  category,
  setCategory,
  platform,
  setPlatform,
  language,
  setLanguage,
  showObsolete,
  setShowObsolete,
  getMatchCount,
}: {
  category: string;
  setCategory: (category: string) => void;
  platform: string;
  setPlatform: (platform: string) => void;
  language: string;
  setLanguage: (language: string) => void;
  showObsolete: string;
  setShowObsolete: (showObsolete: string) => void;
  getMatchCount: (category: string, platform: string, language: string, showObsolete: string) => number;
}) {
  const tools = toolsJSON as DevToolsOutput;
  const allCategories = Object.keys(tools);

  const { allPlatformsSet, allLanguagesSet } = useMemo(
    () =>
      allCategories.reduce(
        ({ allPlatformsSet, allLanguagesSet }, category) => {
          Object.keys(tools[category]).forEach((subCategory: string) => {
            tools[category][subCategory].tools.forEach((tool: ToolOutput) => {
              tool.platforms.forEach((platform: string) => {
                allPlatformsSet.add(platform);
              });
              tool.languages.forEach((language: string) => {
                allLanguagesSet.add(language);
              });
            });
          });
          return { allPlatformsSet, allLanguagesSet };
        },
        { allPlatformsSet: new Set<string>(), allLanguagesSet: new Set<string>() }
      ),
    [allCategories, tools]
  );

  const allCategoriesOptions = useMemo(() => ['All', ...allCategories], [allCategories]);
  const allPlatformsOptions = useMemo(() => ['All', ...Array.from(allPlatformsSet).sort()], [allPlatformsSet]);
  const allLanguagesOptions = useMemo(() => ['All', ...Array.from(allLanguagesSet).sort()], [allLanguagesSet]);

  const disabledCategories = useMemo(
    () => allCategoriesOptions.filter((opt) => getMatchCount(opt, platform, language, showObsolete) === 0),
    [allCategoriesOptions, platform, language, showObsolete, getMatchCount]
  );

  const disabledPlatforms = useMemo(
    () => allPlatformsOptions.filter((opt) => getMatchCount(category, opt, language, showObsolete) === 0),
    [allPlatformsOptions, category, language, showObsolete, getMatchCount]
  );

  const disabledLanguages = useMemo(
    () => allLanguagesOptions.filter((opt) => getMatchCount(category, platform, opt, showObsolete) === 0),
    [allLanguagesOptions, category, platform, showObsolete, getMatchCount]
  );

  const disabledObsolete = useMemo(
    () => ['Show', 'Hide'].filter((opt) => getMatchCount(category, platform, language, opt) === 0),
    [category, platform, language, getMatchCount]
  );

  return (
    <Stack gap={2}>
      <Filter
        label="Category"
        options={allCategoriesOptions}
        selectedOption={category}
        onClick={(option) => setCategory(option)}
        disabledOptions={disabledCategories}
      />
      <Filter
        label="Platform"
        options={allPlatformsOptions}
        selectedOption={platform}
        onClick={(option) => setPlatform(option)}
        disabledOptions={disabledPlatforms}
      />
      <Filter
        label="Language"
        options={allLanguagesOptions}
        selectedOption={language}
        onClick={(option) => setLanguage(option)}
        disabledOptions={disabledLanguages}
      />
      <Filter
        label="Obsolete*"
        options={['Show', 'Hide']}
        selectedOption={showObsolete}
        onClick={(option) => setShowObsolete(option)}
        disabledOptions={disabledObsolete}
      />
    </Stack>
  );
}
