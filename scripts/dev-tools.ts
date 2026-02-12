import { config } from "dotenv";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import { devToolsInput, type ToolInput } from "../docs/_data/devToolsInput.ts";
import { GitHubProvider } from "./toolProviders/GitHubProvider.ts";
import { writeFileSync } from "fs";

// Configure environment variables
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
config({ path: resolve(__dirname, "../.env") });

// Define the output JSON structure
interface DevToolsOutput {
  [groupName: string]: {
    [subGroupName: string]: {
      description: string;
      tools: ToolOutput[];
    };
  };
}
interface ToolOutput {
  name: string;
  description: string;
  url: string;
  languages: string[];
  isObsolete: boolean;
}

// Interface for the data returned by the provider
export interface ProviderData {
  name: string;
  description: string | null;
  language: string | null | undefined;
  lastUpdated: string;
}

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
  try {
    writeFileSync(
      resolve(__dirname, "../docs/_data/generated/devToolsOutput.json"),
      JSON.stringify(outputJSON, null, 2),
    );
  } catch (error) {
    console.error("Could not save the output file:", error);
  }
}
fetchDevTools();

async function mapTool(tool: ToolInput): Promise<ToolOutput> {
  // Create a copy of the tool to avoid modifying the original object
  const _tool = { ...tool };
  // If the tool has a repoUrl, fetch the data from the provider
  if (_tool.repoUrl) {
    const url = new URL(_tool.repoUrl);
    const host = url.host;
    const pathname = url.pathname;
    const pathParts = pathname.split("/").filter((part) => part.length > 0);
    let provider;

    // GitHub
    if (host.includes("github")) {
      provider = new GitHubProvider(
        pathParts[0],
        pathParts[1],
        pathParts.slice(2).join("/"),
      );
    } else if (host.includes("gitlab")) {
      // provider = new GitLabProvider(
      //   pathParts[0],
      //   pathParts[1],
      //   pathParts.slice(2).join("/"),
      // );
    }
    const data = await provider?.getData();
    if (data) {
      _tool.name = _tool.name ?? data.name;
      _tool.description = _tool.description ?? data.description ?? undefined;
      _tool.languages =
        _tool.languages ?? (data.language ? [data.language] : []);
      _tool.isObsolete = _tool.isObsolete ?? isObsolete(data.lastUpdated);
      _tool.url = _tool.url ?? _tool.repoUrl;
    }
  }
  return parseTool(_tool);
}

function isObsolete(lastUpdated: string): boolean {
  const date = new Date(lastUpdated);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const days = diff / (1000 * 60 * 60 * 24);
  return days > 365;
}

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
