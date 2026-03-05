import { config } from "dotenv";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { devToolsInput, type ToolInput } from "../docs/_data/devToolsInput.ts";
import { writeFileSync } from "fs";
import { Octokit } from "octokit";

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
  lastUpdated: string | null;
  license: string | null;
  repoUrl: string | null;
  affiliation: string | null;
  homepageUrl: string | null;
  platforms: string[];
}
// Data retrieved from a GitLab/GitHub repo
interface RepoData {
  name: string | null;
  description: string | null;
  languages: string[];
  lastUpdated: string;
  homepageUrl: string | null;
  license: string | null;
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
    let data: RepoData | null = null;
    // If the tool has a repoUrl, fetch the data from the provider
    if (tool.repoUrl && !tool.ignoreFetch) {
      const url = new URL(tool.repoUrl);
      const host = url.host;
      if (host.includes("github")) {
        // GitHub
        data = await getGitHubData(url);
      } else if (host.includes("gitlab")) {
        // GitLab
        data = await getGitLabData(url);
      } else {
        throw new Error(`Unsupported host: ${host}. Extend the fetching script or set ignoreFetch to true.`);
      }
    }
    return parseTool(tool, data);
  } catch (error: any) {
    throw new Error(`${error.message} for tool: ${JSON.stringify(tool)}`);
  }
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
    const language = rootData.language ?? rootData.parent?.language
    return {
      name: name ?? rootData.name,
      description: subfolder || !rootData.description ? description : rootData.description,
      languages: language ? [language] : [],
      lastUpdated: rootData.updated_at,
      homepageUrl: rootData.homepage,
      license: rootData.license?.name ?? null,
    };
  } catch (error: any) {
    throw new Error(`GitHub API Error: ${error.message}`);
  }
}

/**
 * Fetches repo data from GitLab
 */
async function getGitLabData(url: URL): Promise<RepoData> {
  const host = url.host;
  const pathname = url.pathname.slice(1); // remove the first slash
  try {
    const encodedDir = encodeURIComponent(pathname);
    const rootData = await safeFetch(
      `https://${host}/api/v4/projects/${encodedDir}?license=true`,
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
    const mostUsedLanguage = languages &&
      [Object.entries(languages as Record<string, number>).reduce(
        (acc, language) => {
          if (language[1] > acc[1]) {
            return language;
          }
          return acc;
        },
        ["", 0],
      )[0]]
    return {
      name: rootData.name,
      description: rootData.description,
      languages: mostUsedLanguage ? [mostUsedLanguage] : [],
      lastUpdated: rootData.last_activity_at,
      homepageUrl: null, // GitLab API does not provide homepage
      license: rootData.license?.name,
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
  if (description) {
    description = (description[0].toUpperCase() + description.slice(1)).replace(/\.$/, ""); // Capitalize first letter and remove trailing dot
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
function parseTool(inputTool: ToolInput, fetchedData: RepoData | null): ToolOutput {
  const mappedTool = {
    ...(fetchedData ?? {}),
    ...inputTool,
  };
  if (!mappedTool.name) {
    throw new Error("Name is missing");
  }
  if (!mappedTool.description) {
    throw new Error("Description is missing");
  }
  if (!mappedTool.repoUrl && !mappedTool.homepageUrl) {
    throw new Error("Repo or Homepage URL is missing");
  }
  return {
    name: mappedTool.name,
    description: mappedTool.description,
    repoUrl: mappedTool.repoUrl || null,
    languages: mappedTool.languages || [],
    lastUpdated: mappedTool.lastUpdated || null,
    homepageUrl: mappedTool.homepageUrl || null,
    platforms: mappedTool.platforms || [],
    license: mappedTool.license || null,
    affiliation: mappedTool.affiliation || null,
  };
}

// Call the main function
fetchDevTools();
