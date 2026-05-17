const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? process.env.BASE_PATH ?? ""
const normalizedBasePath = configuredBasePath.replace(/\/$/, "")
const basePath = normalizedBasePath || undefined

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
