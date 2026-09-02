"use client";

import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { type MouseEvent, type ReactNode } from "react";
import { withoutSiteBasePath } from "@/lib/site-paths";

const SERVICE_RETURN_URL_KEY = "murban:return:url";
const SERVICE_RETURN_SCROLL_KEY = "murban:return:scroll";

function isServiceDetailHref(href: LinkProps["href"]) {
  if (typeof href === "string") {
    return href.startsWith("/services/");
  }

  return typeof href.pathname === "string" && href.pathname.startsWith("/services/");
}

function getServiceDetailPath(href: LinkProps["href"]) {
  if (typeof href === "string") {
    return href;
  }

  if (typeof href.pathname !== "string") {
    return null;
  }

  return href.pathname;
}

export function rememberServiceOrigin() {
  if (typeof window === "undefined") return;

  const currentUrl = withoutSiteBasePath(`${window.location.pathname}${window.location.search}${window.location.hash}`);
  sessionStorage.setItem(SERVICE_RETURN_URL_KEY, currentUrl);
  sessionStorage.setItem(SERVICE_RETURN_SCROLL_KEY, String(window.scrollY));
}

export function clearServiceScrollRestore() {
  if (typeof window === "undefined") return;

  sessionStorage.removeItem(SERVICE_RETURN_SCROLL_KEY);
}

export function ServiceDetailBackButton({ className }: { className?: string }) {
  const router = useRouter();

  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        if (typeof window === "undefined") return;

        const returnUrl = sessionStorage.getItem(SERVICE_RETURN_URL_KEY) || "/#services";
        router.push(returnUrl);
      }}
    >
      ← Back to services
    </button>
  );
}

type ServiceLinkProps = LinkProps & {
  children: ReactNode;
  className?: string;
};

export function ServiceLink({ children, onClick, ...props }: ServiceLinkProps & { onClick?: (event: MouseEvent<HTMLAnchorElement>) => void }) {
  const router = useRouter();
  const isServiceDetail = isServiceDetailHref(props.href);

  const prefetchService = () => {
    const servicePath = getServiceDetailPath(props.href);

    if (isServiceDetail && servicePath) {
      router.prefetch(servicePath);
    }
  };

  return (
    <Link
      {...props}
      // The services grid contains every service. Prefetching every route as it
      // enters the viewport competes with the visible images for bandwidth.
      // Prefetch on a deliberate navigation intent instead.
      prefetch={isServiceDetail ? false : props.prefetch}
      onMouseEnter={prefetchService}
      onFocus={prefetchService}
      onTouchStart={prefetchService}
      onClick={(event) => {
        if (isServiceDetail) {
          rememberServiceOrigin();
        }

        onClick?.(event);
      }}
    >
      {children}
    </Link>
  );
}

export function restoreServiceScroll() {
  if (typeof window === "undefined") return;

  const scrollY = sessionStorage.getItem(SERVICE_RETURN_SCROLL_KEY);
  if (!scrollY) return;

  window.requestAnimationFrame(() => {
    window.scrollTo({ top: Number(scrollY), behavior: "auto" });
    sessionStorage.removeItem(SERVICE_RETURN_SCROLL_KEY);
  });
}
