import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.GITHUB_PAGES === 'true' ? '/WoT' : '',
  images: {
    unoptimized: true,
  },
  // typedRoutes is disabled because the dynamic `[lang]` segment used for
  // sub-path internationalization makes locale-agnostic path literals
  // (e.g. "/developers/tools") invalid under the generated Route union.
  typedRoutes: false,
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;
