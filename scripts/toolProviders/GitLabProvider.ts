import { type ProviderData } from "../dev-tools.ts";

const headers = {
  "X-GitHub-Api-Version": "2022-11-28",
};

export class GitLabProvider {
  private host: string;
  private dir: string; // directory of the tool

  constructor(host: string, dir: string) {
    const token = process.env.GITLAB_TOKEN;
    if (!token) {
      throw new Error("GITLAB_TOKEN is not defined");
    }
    this.host = host;
    this.dir = dir;
  }
  async getData(): Promise<ProviderData> {
    try {
      const encodedDir = encodeURIComponent(this.dir);
      const rootData = await this.safeFetch(
        `https://${this.host}/api/v4/projects/${encodedDir}`,
      );
      const languages = await this.safeFetch(
        `https://${this.host}/api/v4/projects/${encodedDir}/languages`,
      );

      if (!rootData.description) {
        const readme = await this.safeFetch(
          `https://${this.host}/api/v4/projects/${encodedDir}/repository/files/README.md?ref=HEAD`,
        );
        rootData.description = this.extractDescription(atob(readme.content));
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
        lastUpdated: rootData.updated_at,
      };
    } catch (error: any) {
      throw new Error(
        `GitLab API Error: ${error.message} for repo: ${this.dir}`,
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

  private async safeFetch(url: string) {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(res);
      throw new Error("Could not fetch: " + url);
    }
    return await res.json();
  }
}
