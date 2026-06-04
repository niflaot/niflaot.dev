import path from 'node:path'
import type { NextConfig } from 'next'

const githubPagesBasePath = process.env.GITHUB_PAGES_BASE_PATH

const nextConfig: NextConfig = {
  output: 'export',
  reactStrictMode: true,
  trailingSlash: true,
  basePath: githubPagesBasePath || undefined,
  assetPrefix: githubPagesBasePath || undefined,
  images: {
    unoptimized: true,
  },
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'styles')],
  },
}

export default nextConfig
