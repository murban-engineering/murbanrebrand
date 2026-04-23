import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import { Header } from "@/components/header";

type SectionProps = {
  title: string;
  description?: string;
  children?: ReactNode;
};

export function Section({ title, description, children }: SectionProps) {
  return (
    <section className="py-fluid-md border-b border-border/60">
      <div className="mx-auto w-[min(1120px,92vw)] content-flow">
        <div className="content-flow" style={{ "--content-gap": "0.75rem" } as CSSProperties}>
          <h2 className="text-fluid-2xl font-semibold text-balance">{title}</h2>
          {description ? (
            <p className="prose-responsive text-muted-foreground text-pretty content-readable m-0 md:mx-0">
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}

export function PageIntro({ label, title, description }: { label: string; title: string; description: string }) {
  return (
    <section className="pt-32 pb-16 md:pb-24 border-b border-border/60">
      <div className="mx-auto w-[min(1120px,92vw)] content-flow">
        <p className="text-xs font-semibold tracking-[0.22em] uppercase text-muted-foreground">{label}</p>
        <h1 className="text-fluid-4xl font-semibold tracking-tight text-balance max-w-4xl">{title}</h1>
        <p className="prose-responsive text-muted-foreground text-pretty content-readable m-0 md:mx-0">{description}</p>
      </div>
    </section>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      {children}
      <footer className="py-fluid-md">
        <div className="mx-auto w-[min(1120px,92vw)] flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Murban Engineering.</p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
