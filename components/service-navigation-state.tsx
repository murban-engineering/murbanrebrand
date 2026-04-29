"use client";

import Link, { type LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { type MouseEvent, type ReactNode } from "react";

const SERVICE_RETURN_URL_KEY = "murban:return:url";
const SERVICE_RETURN_SCROLL_KEY = "murban:return:scroll";

export function rememberServiceOrigin() {
  if (typeof window === "undefined") return;

  const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;
  sessionStorage.setItem(SERVICE_RETURN_URL_KEY, currentUrl);
  sessionStorage.setItem(SERVICE_RETURN_SCROLL_KEY, String(window.scrollY));
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
  return (
    <Link
      {...props}
      onClick={(event) => {
        rememberServiceOrigin();
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
