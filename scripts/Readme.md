# Scripts

Node.js scripts used by GitHub workflows to generate data consumed by the [website](../website). Each script fetches data from an external source and writes a JSON file into `website/lib/generated/`, which the Next.js site reads at build time.

## Scripts

### `dev-tools`

Generates `website/lib/generated/devToolsOutput.json`, the data behind the developer tools listing on the website.

- Reads the curated tool list from [dev-tools/devToolsInput.ts](dev-tools/devToolsInput.ts).
- For each tool with a `repoUrl`, fetches repository metadata (name, description, primary language, last update, license, homepage) from the **GitHub** or **GitLab** API. If the repo is not hosted on one of these two, set `ignoreFetch: true`.
- Any field defined in the input file overrides the fetched value. Set `ignoreFetch: true` to skip fetching for a tool. In this case all the properties have to be filled manually. Set `lastUpdated: null` if you want to keep the tool non-obsolete.

> The tool type definitions live in [dev-tools/types.ts](dev-tools/types.ts). Review them before changing the input file or the output structure.

### `member-organizations`

Generates `website/lib/generated/memberOrganizationsOutput.json`, the list of organizations participating in each Web of Things group.

- Fetches the WoT ecosystem groups from the [W3C API](https://api.w3.org/ecosystems/web-of-things/groups).
- Walks each group's participations and collects the participating organizations (excluding individual participants).
- Orders groups according to a predefined list and sorts organizations alphabetically.

### `research-papers`

Generates `website/lib/generated/researchPapers.json`, the list of research papers related to the Web of Things.

- Reads the curated paper list (title → DOI) from [research-papers/researchPapersInput.ts](research-papers/researchPapersInput.ts).
- For each DOI, fetches publication metadata from the [Crossref API](https://api.crossref.org/works).

> Unlike `dev-tools` and `member-organizations`, this script is **not** run periodically/automatically. The relevant research papers change infrequently, so the list is maintained by hand and the script is run manually only when new papers need to be added. To add a paper, insert a new entry in [research-papers/researchPapersInput.ts](research-papers/researchPapersInput.ts) and run `npm run research-papers`.

## Setup

```bash
cd scripts
npm ci
```

### Environment variables

The `dev-tools` script requires API tokens, loaded from a `.env` file at the repository root:

| Variable       | Used by     | Purpose                   |
| -------------- | ----------- | ------------------------- |
| `GH_TOKEN`     | `dev-tools` | GitHub API authentication |
| `GITLAB_TOKEN` | `dev-tools` | GitLab API authentication |

The `member-organizations` script uses the public W3C API and needs no tokens.

## Usage

```bash
# Generate developer tools data
npm run dev-tools

# Generate member organizations data
npm run member-organizations

# Generate research papers data (run manually, on demand)
npm run research-papers
```

The scripts are run via [tsx](https://github.com/privatenumber/tsx), so no build step is required.

## Automation

The `dev-tools` and `member-organizations` scripts run automatically through the [Weekly Script Updates](../.github/workflows/scripts.yml) GitHub workflow (scheduled weekly, or triggered manually via `workflow_dispatch`). The `research-papers` script is excluded from this automation and is run manually on demand. The workflow:

1. Runs both scripts.
2. Commits directly to `main` if only `lastUpdated` fields changed.
3. Otherwise opens a pull request labeled `automated` for review.
