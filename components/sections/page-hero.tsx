import Link from "next/link";

export function PageHero({ title, description }: { title: string; description: string }) {
  return (
    <section className="px-6 pb-16 pt-36 md:px-12 lg:px-20">
      <div className="text-sm text-muted-foreground">
        <Link href="/">Home</Link> / <span>{title}</span>
      </div>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">{title}</h1>
      <p className="mt-4 max-w-3xl text-muted-foreground">{description}</p>
    </section>
  );
}
