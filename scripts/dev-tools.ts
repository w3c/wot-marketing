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
const githubToken = process.env.GH_TOKEN;
if (!githubToken) {
  throw new Error("GH_TOKEN is not defined");
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
  languages: string[];
  isObsolete: boolean;
  repoUrl?: string;
  homepageUrl?: string;
}
// Data retrieved from a GitLab/GitHub repo
interface RepoData {
  name: string | null;
  description: string | null;
  language: string | null | undefined;
  lastUpdated: string;
  homepage: string | null;
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
      "/docs/_data/generated/devToolsOutput.json successfully generated",
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
    const mappedTool = { ...tool };
    // If the tool has a repoUrl, fetch the data from the provider
    if (mappedTool.name==="Eclipse LMOS"){
      console.log(needsFetching(mappedTool));
      console.log(mappedTool)
    }
    if (mappedTool.repoUrl && needsFetching(mappedTool)) {
      const url = new URL(mappedTool.repoUrl);
      const host = url.host;
      let data: RepoData | null = null;
      if (host.includes("github")) {
        // GitHub
        data = await getGitHubData(url);
      } else if (host.includes("gitlab")) {
        // GitLab
        data = await getGitLabData(url);
      }
      if (data) {
        // If an override exists use it directly otherwise use the fetched data
        mappedTool.name = mappedTool.name ?? data.name ?? undefined;
        mappedTool.description =
          mappedTool.description ?? data.description ?? undefined;
        mappedTool.languages =
          mappedTool.languages ?? (data.language ? [data.language] : []);
        mappedTool.isObsolete =
          mappedTool.isObsolete ?? isObsolete(data.lastUpdated);
        mappedTool.homepageUrl = mappedTool.homepageUrl ?? data.homepage ?? undefined;
      }
    }
    return parseTool(mappedTool);
  } catch (error: any) {
    throw new Error(`${error.message} for tool: ${JSON.stringify(tool)}`);
  }
}
function needsFetching(tool: ToolInput): boolean {
  // If all properties are overriden, we don't need to fetch
  return !(tool.name && tool.description && tool.languages && tool.isObsolete !== undefined && tool.homepageUrl);
}

/**
 * Fetches repo data from GitHub
 */
async function getGitHubData(url: URL): Promise<RepoData> {
  const pathname = url.pathname.slice(1); // remove the first slash
  // Subfolders have repoUrl/tree/master/subfolder structure
  // The API requires repoUrl/subfolder so we filter out the tree and master parts
  const pathParts = pathname
    .split("/")
    .filter((part) => part.length > 0 && part !== "tree" && part !== "master");
  const owner = pathParts[0];
  const repo = pathParts[1];
  const subfolder = pathParts.slice(2).join("/");
  const headers = {
    "X-GitHub-Api-Version": "2022-11-28",
  };
  try {
    // Root folder data
    const { data: rootData } = await octokit.rest.repos.get({
      owner,
      repo,
      headers,
    });
    const { data: readme } = await octokit.rest.repos.getReadmeInDirectory({
      owner,
      repo,
      headers,
      dir: subfolder,
    });
    const { name, description } = extractToolMetadata(atob(readme.content));
    return {
      name: name ?? (subfolder ? null : rootData.name),
      description: description ?? (subfolder ? null : rootData.description),
      language: rootData.language ?? rootData.parent?.language,
      lastUpdated: rootData.updated_at,
      homepage: rootData.homepage,
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
      rootData.description = extractToolMetadata(
        atob(readme.content),
      ).description;
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
      homepage: rootData.homepage,
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
 * Extracts the tool name and the first sentence of the description from the readme file's content
 * @param markdown - readme file content
 * @returns object containing tool name and description
 */
function extractToolMetadata(markdown: string): {
  name: string | null;
  description: string | null;
} {
  const commentPattern = new RegExp("", "g");
  const noComments = markdown.replace(commentPattern, "");
  const lines = noComments.split(new RegExp("\\r?\\n"));

  let name: string | null = null;
  const paragraphs: string[] = [];
  let currentPara: string[] = [];
  let foundHeader = false;

  const headerPattern = new RegExp("^#+\\s+");

  for (const line of lines) {
    const trimmed = line.trim();

    if (!foundHeader && trimmed.match(headerPattern)) {
      const rawName = trimmed.replace(headerPattern, "");
      name = cleanLine(rawName);
      foundHeader = true;
      continue;
    }

    if (!foundHeader) {
      continue;
    }

    if (trimmed.match(headerPattern)) {
      if (currentPara.length > 0) {
        paragraphs.push(currentPara.join(" "));
        currentPara = [];
      }
      continue;
    }

    if (!trimmed) {
      if (currentPara.length > 0) {
        paragraphs.push(currentPara.join(" "));
        currentPara = [];
      }
      continue;
    }

    const cleaned = cleanLine(trimmed);
    if (cleaned) {
      currentPara.push(cleaned);
    }
  }

  if (currentPara.length > 0) {
    paragraphs.push(currentPara.join(" "));
  }

  let description: string | null = null;

  const whitespacePattern = new RegExp("\\s+", "g");
  const sentencePattern = new RegExp("^.*?[.!?](?=\\s|$)");

  for (const para of paragraphs) {
    const normalizedPara = para.replace(whitespacePattern, " ").trim();

    if (!normalizedPara || normalizedPara.length < 5) continue;
    if (normalizedPara.toLowerCase().startsWith("table of contents")) continue;

    const sentenceMatch = normalizedPara.match(sentencePattern);
    description = sentenceMatch ? sentenceMatch[0] : normalizedPara;
    break;
  }

  return { name, description };
}

function cleanLine(text: string): string {
  let cleaned = text;

  cleaned = cleaned.replace(
    new RegExp("\\[\\s*!\\[[^\\]]*\\]\\([^)]*\\)\\s*\\]\\([^)]*\\)", "g"),
    "",
  );
  cleaned = cleaned.replace(new RegExp("!\\[[^\\]]*\\]\\([^)]*\\)", "g"), "");
  cleaned = cleaned.replace(
    new RegExp("\\[([^\\]]+)\\]\\([^)]+\\)", "g"),
    "$1",
  );
  cleaned = cleaned.replace(
    new RegExp("\\[([^\\]]+)\\]\\[[^\\]]*\\]", "g"),
    "$1",
  );
  cleaned = cleaned.replace(new RegExp("^>\\s*"), "");
  cleaned = cleaned.replace(new RegExp("^[-_*]{3,}$", "g"), "");
  cleaned = cleaned.replace(new RegExp("(\\*\\*|__|\\*|_)(.*?)\\1", "g"), "$2");
  cleaned = cleaned.replace(new RegExp("`([^`]+)`", "g"), "$1");
  cleaned = cleaned.replace(new RegExp("<[^>]+>", "g"), "");
  cleaned = cleaned.replace(new RegExp("[^\\x20-\\x7E]", "g"), "");

  return cleaned.trim();
}

/**
 * Parses the tool to the right format by checking the existence of the required properties
 */
function parseTool(tool: ToolInput): ToolOutput {
  if (!tool.name) {
    throw new Error("Name is missing");
  }
  if (!tool.description) {
    throw new Error("Description is missing");
  }
  if (!tool.repoUrl && !tool.homepageUrl) {
    throw new Error("Repo or Homepage URL is missing");
  }
  return {
    name: tool.name,
    description: (
      tool.description[0].toUpperCase() + tool.description.slice(1)
    ).replace(/\.$/, ""), // remove trailing dot
    repoUrl: tool.repoUrl,
    languages: tool.languages ?? [],
    isObsolete: tool.isObsolete ?? false,
    homepageUrl: tool.homepageUrl || undefined,
  };
}

// Call the main function
fetchDevTools();
