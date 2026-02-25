import { config } from "dotenv";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { devToolsInput, type ToolInput } from "../docs/_data/devToolsInput.ts";
import { writeFileSync } from "fs";
import { Octokit } from "octokit";
import constants from "../docs/_data/constants.json" with { type: "json" };

// Configure environment variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
config({ path: resolve(__dirname, "../.env") });

// GitHub and GitLab client init
const githubToken = process.env.GITHUB_TOKEN;
if (!githubToken) {
  throw new Error("GITHUB_TOKEN is not defined");
}
const octokit = new Octokit({
  auth: githubToken,
});
const gitlabToken = process.env.GITLAB_TOKEN;
if (!gitlabToken) {
  throw new Error("GITLAB_TOKEN is not defined");
}

// Main output of tools with grouping
interface DevToolsOutput {
  [groupName: string]: {
    [subGroupName: string]: {
      description: string;
      tools: ToolOutput[];
    };
  };
}
// A single tool structure
interface ToolOutput {
  name: string;
  description: string;
  url: string;
  languages: string[];
  isObsolete: boolean;
}
// Data retrieved from a GitLab/GitHub repo
interface RepoData {
  name: string;
  description: string | null;
  language: string | null | undefined;
  lastUpdated: string;
}

// Main script (called in the end of the file)
async function fetchDevTools() {
  const outputJSON: DevToolsOutput = {};
  for (const [groupName, subGroup] of Object.entries(devToolsInput)) {
    for (const [subGroupName, subGroupData] of Object.entries(subGroup)) {
      outputJSON[groupName] = {
        ...outputJSON[groupName],
        [subGroupName]: {
          description: subGroupData.description,
          tools: await Promise.all(subGroupData.tools.map(mapTool)),
        },
      };
    }
  }

  // Save the fetched data in devToolsOutput.json
  try {
    writeFileSync(
      resolve(__dirname, "../docs/_data/generated/devToolsOutput.json"),
      JSON.stringify(outputJSON, null, 2),
    );
    console.log(
      "/docs/_data/generated/devToolsOutput.ts successfully generated",
    );
  } catch (error) {
    console.error("Could not save the output file:", error);
  }
}

/**
 * Maps the tools to the fetched data. Properties can be overriden in the input file.
 */
async function mapTool(tool: ToolInput): Promise<ToolOutput> {
  try {
    // Create a copy of the tool to avoid mutating the original object
    const _tool = { ...tool };
    // If the tool has a repoUrl, fetch the data from the provider
    if (_tool.repoUrl) {
      const url = new URL(_tool.repoUrl);
      const host = url.host;
      let data: RepoData | null = null;
      if (host.includes("github")) {
        // GitHub
        data = await getGitHubData(url);
      } else if (host.includes("gitlab")) {
        // GitLab
        data = await getGitLabData(url);
      }
      console.log(JSON.stringify(data));
      if (data) {
        // If an override exists use it directly otherwise use the fetched data
        _tool.name = _tool.name ?? data.name;
        _tool.description = _tool.description ?? data.description ?? undefined;
        _tool.languages =
          _tool.languages ?? (data.language ? [data.language] : []);
        _tool.isObsolete = _tool.isObsolete ?? isObsolete(data.lastUpdated);
        _tool.url = _tool.url ?? _tool.repoUrl;
      }
    }
    return parseTool(_tool);
  } catch (error: any) {
    throw new Error(`${error.message} for tool: ${JSON.stringify(tool)}`);
  }
}

/**
 * Fetches repo data from GitHub
 */
async function getGitHubData(url: URL): Promise<RepoData> {
  const pathname = url.pathname.slice(1); // remove the first slash
  const pathParts = pathname.split("/").filter((part) => part.length > 0);
  const owner = pathParts[0];
  const repo = pathParts[1];
  const dir = pathParts.slice(2).join("/");
  const headers = {
    "X-GitHub-Api-Version": "2022-11-28",
  };
  try {
    const { data: rootData } = await octokit.rest.repos.get({
      owner,
      repo,
      headers,
    });
    // The resource is a subfolder
    if (dir) {
      // Search for the closest Readme file at that level
      const { data: innerReadme } =
        await octokit.rest.repos.getReadmeInDirectory({
          owner,
          repo,
          dir,
          headers,
        });
      rootData.description =
        innerReadme && extractDescription(atob(innerReadme.content));
    }
    return {
      name: rootData.name,
      description: rootData.description,
      language: rootData.language,
      lastUpdated: rootData.updated_at,
    };
  } catch (error: any) {
    throw new Error(`GitHub API Error: ${error.message}`);
  }
}

/**
 * Fetches repo data from GitLab
 */
async function getGitLabData(url: URL) {
  const host = url.host;
  const pathname = url.pathname.slice(1); // remove the first slash
  try {
    const encodedDir = encodeURIComponent(pathname);
    const rootData = await safeFetch(
      `https://${host}/api/v4/projects/${encodedDir}`,
    );
    const languages = await safeFetch(
      `https://${host}/api/v4/projects/${encodedDir}/languages`,
    );
    if (!rootData.description) {
      const readme = await safeFetch(
        `https://${host}/api/v4/projects/${encodedDir}/repository/files/README.md?ref=HEAD`,
      );
      rootData.description = extractDescription(atob(readme.content));
    }
    return {
      name: rootData.name,
      description: rootData.description,
      language:
        languages &&
        Object.entries(languages as Record<string, number>).reduce(
          (acc, language) => {
            if (language[1] > acc[1]) {
              return language;
            }
            return acc;
          },
          ["", 0],
        )[0],
      lastUpdated: rootData.last_activity_at,
    };
  } catch (error: any) {
    throw new Error(`GitLab API Error: ${error.message}`);
  }
}
/**
 * A fetch wrapper with error handling
 * @returns the json object of the response
 */
async function safeFetch(url: string) {
  const res = await fetch(url);
  if (!res.ok) {
    console.error(res);
    throw new Error("Could not fetch: " + url);
  }
  return await res.json();
}

/**
 * Checks if a tool is obsolete based on its last updated date
 * @param lastUpdated The last updated date of the tool
 * @returns True if the last update is older than 2 year, false otherwise
 */
function isObsolete(lastUpdated: string): boolean {
  const updatedDate = new Date(lastUpdated);
  if (isNaN(updatedDate.getTime())) {
    throw new Error("Could not retrieve last update date");
  }

  const targetDate = new Date(updatedDate.getTime());
  targetDate.setFullYear(targetDate.getFullYear() + constants.OBSOLETE_IN);

  return new Date() >= targetDate;
}

/**
 * Extracts the tool description from the readme file's content
 * @param markdown - readme file content
 * @returns tool description
 */
function extractDescription(markdown: string): string | null {
  // Use RegExp constructor to avoid syntax highlighting collisions with slash delimiters
  const commentPattern = new RegExp("", "g");
  const cleanMd = markdown.replace(commentPattern, "");

  const lines = cleanMd.split(/\r?\n/);

  const description: string[] = [];
  let capturing = false;

  for (const line of lines) {
    const trimmed = line.trim();

    if (!capturing) {
      if (
        !trimmed ||
        trimmed.startsWith("#") ||
        trimmed.startsWith("!") ||
        trimmed.startsWith("[")
      ) {
        continue;
      }
      capturing = true;
    }

    if (capturing) {
      if (!trimmed || trimmed.startsWith("#")) {
        break;
      }
      description.push(trimmed);
    }
  }

  return description.length > 0 ? description.join(" ") : null;
}

/**
 * Parses the tool to the right format by checking the existence of the required properties
 */
function parseTool(tool: ToolInput): ToolOutput {
  if (!tool.name) {
    throw new Error("Name is missing for tool: " + JSON.stringify(tool));
  }
  if (!tool.description) {
    throw new Error("Description is missing for tool: " + JSON.stringify(tool));
  }
  if (!tool.url) {
    throw new Error("Url is missing for tool: " + JSON.stringify(tool));
  }
  return {
    name: tool.name,
    description: tool.description,
    url: tool.url,
    languages: tool.languages ?? [],
    isObsolete: tool.isObsolete ?? false,
  };
}

// Call the main function
fetchDevTools();
