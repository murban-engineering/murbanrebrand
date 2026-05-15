const configuredBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const siteBasePath = configuredBasePath.replace(/\/$/, "");

export function withSiteBasePath(path: string) {
  if (!siteBasePath || !path.startsWith("/")) {
    return path;
  }

  if (path === siteBasePath || path.startsWith(`${siteBasePath}/`)) {
    return path;
  }

  return `${siteBasePath}${path}`;
}

export function withoutSiteBasePath(path: string) {
  if (!siteBasePath || !path.startsWith(siteBasePath)) {
    return path;
  }

  const pathWithoutBase = path.slice(siteBasePath.length);
  return pathWithoutBase.startsWith("/") ? pathWithoutBase : `/${pathWithoutBase}`;
}
