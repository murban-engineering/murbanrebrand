const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? ""
const isGitHubPagesBuild = process.env.GITHUB_ACTIONS === "true"
const isUserOrOrgPagesRepo = repoName.endsWith(".github.io")
const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? process.env.BASE_PATH
const githubPagesBasePath =
  isGitHubPagesBuild && repoName && !isUserOrOrgPagesRepo ? `/${repoName}` : ""
const basePath = configuredBasePath ?? githubPagesBasePath

/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
}

export default nextConfig
