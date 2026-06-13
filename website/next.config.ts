import type { NextConfig } from 'next';
import path from "path"

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.GITHUB_PAGES === 'true'? '/WoT' : '',
  images: {
    unoptimized: true,
  },
  typedRoutes: true,
  turbopack:{
    root: path.join(__dirname)
  }
};

export default nextConfig;
