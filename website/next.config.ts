import type { NextConfig } from 'next';
import path from "path"

const nextConfig: NextConfig = {
  output: 'export',
  //TODO: redirects from root to /WoT are required on the deployment platform
  //TODO: change /wot-marketing/ to /WoT/
  basePath: process.env.NODE_ENV === 'development' ? '' : '/WoT',
  images: {
    unoptimized: true,
  },
  typedRoutes: true,
  turbopack:{
    root: path.join(__dirname)
  }
};

export default nextConfig;
