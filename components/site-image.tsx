import Image, { type ImageProps } from "next/image";
import { withBlobImageBase } from "@/lib/blob-images";

export function SiteImage({ src, ...props }: ImageProps) {
  const resolvedSrc = typeof src === "string" ? withBlobImageBase(src) : src;

  return <Image {...props} src={resolvedSrc} />;
}
