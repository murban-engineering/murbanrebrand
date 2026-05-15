import Image, { type ImageProps } from "next/image";
import { withSiteBasePath } from "@/lib/site-paths";

export function SiteImage({ src, ...props }: ImageProps) {
  const resolvedSrc = typeof src === "string" ? withSiteBasePath(src) : src;

  return <Image {...props} src={resolvedSrc} />;
}
