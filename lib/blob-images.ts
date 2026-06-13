import { withSiteBasePath } from "@/lib/site-paths";

const configuredBlobBaseUrl = process.env.NEXT_PUBLIC_VERCEL_BLOB_BASE_URL ?? "";
const blobBaseUrl = configuredBlobBaseUrl.replace(/\/$/, "");

const imagePathPattern = /\.(avif|gif|ico|jpe?g|png|svg|webp)$/i;

function encodePath(path: string) {
  return path
    .split("/")
    .map((segment) => encodeURIComponent(segment))
    .join("/");
}

function isLocalPublicImage(src: string) {
  return src.startsWith("/") && imagePathPattern.test(src.split(/[?#]/, 1)[0] ?? src);
}

export function withBlobImageBase(src: string) {
  if (!blobBaseUrl || !isLocalPublicImage(src)) {
    return withSiteBasePath(src);
  }

  const [path, suffix = ""] = src.split(/([?#].*)/, 2);
  return `${blobBaseUrl}${encodePath(path)}${suffix}`;
}
