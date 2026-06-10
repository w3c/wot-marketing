import type { NextConfig } from 'next';
import path from "path"

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  typedRoutes: true,
  turbopack:{
    root: path.join(__dirname)
  }
};

export default nextConfig;
