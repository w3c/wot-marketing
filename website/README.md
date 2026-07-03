# WoT Website

The official [W3C Web of Things](https://www.w3.org/WoT/) website, built with **Next.js 16** (App Router), **Joy UI**, and **TypeScript**.

## Setup & Running

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (bundled with Node.js)

### Install Dependencies

```bash
cd website
npm install
```

### Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Pages auto-refresh on file changes.

### Production Build (Static Export)

```bash
npm run build
```

This generates a fully static site in the `out/` directory, ready to be deployed to GitHub Pages.

## Project Structure

```
website/
├── app/                    # Next.js App Router - pages, layouts and components
│   ├── theme/             # Joy UI theme configuration and registry
│   │   ├── theme.ts        # Brand color palette customization
│   │   └── ThemeRegistry.tsx  # Emotion cache + CssVarsProvider setup
│   ├── layout.tsx          # Root layout (navbar, footer, theme, redirects)
│   ├── page.tsx            # Home page
│   ├── error.tsx           # Global error boundary
│   └── not-found.tsx       # Custom 404 page
├── lib/                    # Data sets, utilities, and generated content
├── public/                 # Static assets
└── next.config.ts          # Next.js configuration (static export, basePath, typed routes)

```

---

## Component Library - Joy UI

The project uses [**Joy UI**](https://mui.com/joy-ui/getting-started/) as its component library. Joy UI was chosen because it:

- Prioritises **accessibility** out of the box (ARIA attributes, keyboard navigation, focus management).
- Comes with a **standardized design language** that ensures visual consistency.
- Provides built-in **CSS variables** and theming capabilities.

### Theme Customization

The brand color palette is customized in [`app/_theme/theme.ts`](app/_theme/theme.ts) via `extendTheme()`. This is where primary colors, color schemes, and other design tokens live.

The theme is applied application-wide through `ThemeRegistry.tsx`, which sets up the Emotion cache and `CssVarsProvider`.

## Icons - Lucide

All icons are sourced from [**Lucide**](https://lucide.dev/) via the `lucide-react` package. Lucide provides a comprehensive set of clean, consistent, open-source icons.

Browse available icons at: https://lucide.dev/icons

## Next.js Essentials

This project is built on [Next.js](https://nextjs.org/) with the **App Router**, which provides a built-in file-system-based routing system.

### Static Export (GitHub Pages)

The project is configured for a **static export** (`output: 'export'` in `next.config.ts`). This means the entire site is pre-rendered at build time into static HTML/CSS/JS files and deployed to GitHub Pages. No Node.js server is required in production.

A `basePath` of `/WoT/` is set for production deployment, which is automatically excluded during local development.

### Server vs. Client Rendering

Even with a static export, Next.js maintains a separation between **server** and **client** components. By default, all components are server-rendered (at build time for static export), which means they:

- Have zero JavaScript shipped to the browser.
- Cannot use hooks like `useState`, `useEffect`, or browser APIs.

Interactive components that require state, effects, or event handlers **must** include the `"use client"` directive at the top of the file. Learn more in the official documentation: [Client Components](https://nextjs.org/docs/app/building-your-application/rendering/client-components).

### Routing Conventions

| Convention                          | Effect                                                                                                                   |
| ----------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `page.tsx` inside a folder          | Makes the folder a **navigable route** (e.g., `app/about/history/page.tsx` → `/about/history`)                           |
| `_folderName` (prefixed underscore) | **Excluded from the routing system** - used for colocated components and internal code (e.g., `_components/`, `_theme/`) |
| `layout.tsx`                        | Wraps all child routes in shared UI (navbar, footer, providers)                                                          |
| `error.tsx`                         | Error boundary for the route segment                                                                                     |
| `not-found.tsx`                     | Custom 404 page                                                                                                          |
| `[slug]`                            | Dynamic route segment (e.g., `task-forces/[slug]/page.tsx`)                                                              |

### Page-Specific Components

Custom components that are only relevant to a specific page should be stored in a `_components` folder **on the same routing level** as the page. For example:

```
app/
└── developers/
    └── tools/
        ├── _components/     # Components only used by the tools page
        │   ├── Filter.tsx
        │   └── ToolFilters.tsx
        └── page.tsx
```

## Design Standardization

### Page Layout

Use `<PageLayout />` for **every page**. It creates a consistent page structure with:

- A page **title**
- A **subtitle** beneath the title
- Standardized **spacing** and **max-width** for its children
- Optional **breadcrumb** navigation

```tsx
<PageLayout title="My Page" subtitle="A description of this page">
  {/* page content */}
</PageLayout>
```

### Page Sections

Use `<PageSection />` to divide page content into titled, visually separated blocks with a primary-colored heading and divider.

### Data Offloading

When a component needs to display a **static data set** (lists, tables, configuration objects), the data should be extracted into a separate `.ts` or `.tsx` file under `website/lib/`. This keeps page components focused on presentation:

```
lib/
├── articles.ts         # Article entries
├── events.ts           # WoT events
├── taskForces.ts       # Task force details
├── useCases.tsx        # Use case cards (TSX for icon components)
└── ...
```

Use `.tsx` when the data includes React nodes (e.g., icon components). Use `.ts` for plain data.

### Link Components

The project provides `<LinkButton />`, `<LinkCard />`, and `<StyledLink />` for navigation. These components accept two mutually exclusive props:

| Prop           | Usage                                                                                                                                                                                                                                  |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `path`         | **Internal navigation** - uses Next.js `<Link>` with optimized client-side routing. The path is **typed** via `Route` from `next`, meaning TypeScript will only accept paths where a `page.tsx` already exists. This eliminates typos. |
| `external_url` | **External navigation** - renders a standard anchor tag pointing to an outside URL.                                                                                                                                                    |

```tsx
// Internal link (typed - only valid routes accepted)
<LinkButton path="/developers/tools">Tools</LinkButton>

// External link
<LinkButton external_url="https://www.w3.org/WoT/">W3C WoT</LinkButton>
```

> **Note:** `path` and `external_url` cannot be used at the same time. TypeScript enforces this via a discriminated union type.

### Typed Routes

The project has `typedRoutes: true` enabled in `next.config.ts`. This means Next.js generates type definitions for all valid routes at build time. Any `path` prop that points to a non-existent page will cause a TypeScript error, catching broken links at compile time rather than in production.

## Redirects

Client-side redirects are managed in [`lib/redirects.ts`](lib/redirects.ts). The `Redirects` component (mounted in the root layout) listens for matching paths on navigation and performs `router.replace()` to the destination. This supports dynamic parameters (e.g., `:slug`).

## Path Alias

The TypeScript config defines a path alias `@/*` that maps to the `website/` root. This allows clean imports:

```tsx
import { REDIRECTS } from '@/lib/redirects';
```

## CI/CD

GitHub Actions workflows (in `.github/workflows/`) handle:

- **`nextjs.yml`** - Builds and deploys the static website to GitHub Pages.
- **`dev-tools.yml`** - Scrapes developer tool data and generates `lib/generated/devToolsOutput.json`.
