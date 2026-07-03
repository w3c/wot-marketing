export interface DevToolsInput {
  [groupName: string]: {
    [subgroup: string]: {
      description: string;
      tools: ToolInput[];
    };
  };
}

export type ToolInput = { platforms: ToolPlatform[] } & (
  | ({
      ignoreFetch?: false;
    } & Partial<ToolInputBase>)
  | ({
      ignoreFetch: true; // if fetching is ignored, the data has to be filled in manually
    } & ToolInputBase)
);

interface ToolInputBase {
  repoUrl: string | null;
  name: string;
  description: string;
  languages: string[]; // only libraries can have languages
  homepageUrl: string | null;
  lastUpdated: string | null;
  affiliation: string | null;
}

export type ToolPlatform =
  | 'Application'
  | 'Browser' // browser-based UI/tool primarily used on the web
  | 'Library' // package meant to be imported and used in code
  | 'IDE Extension' // plugin/extension for an IDE or editor
  | 'CLI' // tool that provides a command-line interface
  | 'Service'; // network-accessible backend, API, hosted endpoint, or server you run somewhere

// WARNING: Before changing this object, please make sure you read docs/developers/README.md

// Main output of tools with grouping
export interface DevToolsOutput {
  [groupName: string]: {
    [subGroupName: string]: {
      description: string;
      tools: ToolOutput[];
    };
  };
}
// A single tool structure
export interface ToolOutput {
  name: string;
  description: string;
  languages: string[];
  // linked to .github/workflows/dev-tools.yml
  // if changed, update the workflow file
  lastUpdated: string | null;
  license: string | null;
  repoUrl: string | null;
  affiliation: string | null;
  homepageUrl: string | null;
  platforms: string[];
}
// Data retrieved from a GitLab/GitHub repo
export interface RepoData {
  name: string | null;
  description: string | null;
  languages: string[];
  lastUpdated: string;
  homepageUrl: string | null;
  license: string | null;
}
