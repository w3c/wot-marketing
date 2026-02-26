# Developer Tools Script

The `scripts/dev-tools.ts` script fetches metadata for WoT developer tools from GitHub and GitLab APIs, and generates the JSON file consumed by the [Developer Tools page](./index.html).

## Data Flow

```
docs/_data/devToolsInput.ts   ──▶   scripts/dev-tools.ts   ──▶   docs/_data/generated/devToolsOutput.json
```

1. **Input** – `docs/_data/devToolsInput.ts` contains the curated list of tools organized by group → subgroup → tools.
2. **Script** – `scripts/dev-tools.ts` iterates over each tool, fetches repository data from GitHub / GitLab, and merges it with any manual overrides from the input.
3. **Output** – The enriched data is written to `docs/_data/generated/devToolsOutput.json`, which is used by `docs/developers/index.html` at runtime.

## Prerequisites

| Requirement      | Notes                                        |
| ---------------- | -------------------------------------------- |
| **Node.js**      | v22+                                         |
| **npm**          | Used to install dependencies                 |
| **GitHub Token** | Personal access token with `repo` read scope |
| **GitLab Token** | Personal access token with `read_api` scope  |

## Environment Setup

Create a `.env` file in the **project root** (next to `scripts/`):

```env
GH_TOKEN=ghp_your_token_here
GITLAB_TOKEN=glpat-your_token_here
```

The script loads these via the `dotenv` package.

## Running the Script

```bash
# 1. Install dependencies (first time only)
cd scripts
npm install

# 2. Run the script
npm run dev-tools
```

On success the console will print:

```
/docs/_data/generated/devToolsOutput.json successfully generated
```

## Working with `devToolsInput.ts`

The input file (`docs/_data/devToolsInput.ts`) exports a `devToolsInput` object with the following structure:

```
Group (e.g. "Thing Description")
 └─ Subgroup (e.g. "Editing and Validation")
     ├─ description: string          – displayed as the subgroup heading
     └─ tools: ToolInput[]           – list of tools in this subgroup
```

### `ToolInput` Properties

| Property      | Type       | Description                                                                            |
| ------------- | ---------- | -------------------------------------------------------------------------------------- |
| `repoUrl`     | `string`   | GitHub or GitLab repository URL. Used to fetch metadata automatically.                 |
| `name`        | `string`   | Display name. Falls back to the README's main heading or repo name if omitted.         |
| `description` | `string`   | Short description. Falls back to the first sentence of the README or repo description. |
| `url`         | `string`   | Link shown to the user. Falls back to `repoUrl` if omitted.                            |
| `languages`   | `string[]` | Programming languages. Falls back to the repo's primary language.                      |
| `isObsolete`  | `boolean`  | Mark a tool as obsolete manually. Auto-detected if not set (see below).                |

> [!IMPORTANT]
> Any property you set explicitly in `devToolsInput.ts` **overrides** the value fetched from the API. Leave properties out to let the script populate them automatically.

### Adding a New Tool

**Minimal entry** – just provide a `repoUrl` and everything else is fetched automatically:

```ts
{
  repoUrl: "https://github.com/org/repo",
}
```

**With overrides** – set any properties you want to control manually:

```ts
{
  name: "My Tool",
  description: "A custom description that won't be overwritten",
  repoUrl: "https://github.com/org/repo",
  url: "https://my-tool-homepage.com",
  languages: ["TypeScript", "Python"],
}
```

**Without a repo** – tools that are not hosted on GitHub / GitLab must have `name`, `description`, and `url` set explicitly:

```ts
{
  name: "My Hosted Tool",
  description: "Description of the tool",
  url: "https://example.com/tool",
  languages: ["JSON"],
}
```

### Removing a Tool

Delete the tool's entry from the `tools` array in `devToolsInput.ts` and re-run the script.

## Workflow

1. **Re-run the script** after every change to `devToolsInput.ts` to regenerate `devToolsOutput.json`.
2. **The GitHub pipeline runs the script automatically** on each push — you do not need to trigger it manually.
3. **Verify the output** by reviewing the diff of `devToolsOutput.json` to make sure only the intended tool properties changed and no other tools were affected. Do this both locally during development and after deployment.
4. **If the script produces incorrect results**, try to fix the issue in `dev-tools.ts`. If a fix is not straightforward, create an issue and manually override the affected tool properties in `devToolsInput.ts` as a workaround.

## Obsolescence Detection

A tool is automatically marked as obsolete if its repository has not been updated for the number of years set via `OBSOLETE_IN` in `docs/_data/constants.json`. You can override this by setting `isObsolete: false` (or `true`) explicitly in the input.

## Output Format

The generated `devToolsOutput.json` follows this shape:

```json
{
  "Group Name": {
    "Subgroup Name": {
      "description": "...",
      "tools": [
        {
          "name": "Tool Name",
          "description": "First letter capitalized, no trailing dot",
          "url": "https://...",
          "languages": ["TypeScript"],
          "isObsolete": false
        }
      ]
    }
  }
}
```

## Troubleshooting

| Problem                                                     | Solution                                                                                              |
| ----------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| `GH_TOKEN is not defined`                               | Make sure the `.env` file exists in the project root and contains a valid `GH_TOKEN`.             |
| `GITLAB_TOKEN is not defined`                               | Same as above, but for `GITLAB_TOKEN`.                                                                |
| `GitHub API Error` / `GitLab API Error` / `Could not fetch` | Check that your tokens have the required scopes and have not expired.                                 |
| `Name is missing` / `Description is missing`                | The repo README could not be parsed. Add explicit `name` / `description` overrides in the input file. |
