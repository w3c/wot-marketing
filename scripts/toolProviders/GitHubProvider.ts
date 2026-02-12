import { Octokit } from "octokit";
import { type ProviderData } from "../dev-tools.ts";

const headers = {
  "X-GitHub-Api-Version": "2022-11-28",
};

export class GitHubProvider {
  private octokit;
  private owner: string;
  private repo: string;
  private dir?: string; // directory of the tool if it is a subfolder

  constructor(pathname: string) {
    const auth = process.env.GITHUB_TOKEN;
    if (!auth) {
      throw new Error("GITHUB_TOKEN is not defined");
    }
    const pathParts = pathname.split("/").filter((part) => part.length > 0);
    this.owner = pathParts[0];
    this.repo = pathParts[1];
    this.dir = pathParts.slice(2).join("/");
    this.octokit = new Octokit({
      auth,
    });
  }
  async getData(): Promise<ProviderData> {
    try {
      const { data: rootData } = await this.octokit.rest.repos.get({
        owner: this.owner,
        repo: this.repo,
        headers,
      });
      // The resource is a subfolder
      if (this.dir) {
        // Search for the closest Readme file at that level
        const { data: innerReadme } =
          await this.octokit.rest.repos.getReadmeInDirectory({
            owner: this.owner,
            repo: this.repo,
            dir: this.dir,
            headers,
          });
        rootData.description =
          innerReadme && this.extractDescription(atob(innerReadme.content));
      }

      return {
        name: rootData.name,
        description: rootData.description,
        language: rootData.language,
        lastUpdated: rootData.updated_at,
      };
    } catch (error: any) {
      throw new Error(
        `GitHub API Error: ${error.message} for repo: ${this.owner}/${this.repo}`,
      );
    }
  }

  /**
   * Extracts the description from a readme markdown string
   * @param markdown The content of the readme file as a base64 string
   * @returns The description or null if no description is found
   */
  private extractDescription(markdown: string): string | null {
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
}
