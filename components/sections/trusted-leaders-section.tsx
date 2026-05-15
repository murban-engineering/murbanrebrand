import { SiteImage as Image } from "@/components/site-image";

const trustedLogos = [
  "/images/Screenshot 2026-04-27 185325.png",
  "/images/Screenshot 2026-04-27 185331.png",
  "/images/Screenshot 2026-04-27 185340.png",
  "/images/Screenshot 2026-04-27 185345.png",
  "/images/Screenshot 2026-04-27 185349.png",
  "/images/Screenshot 2026-04-27 185352.png",
  "/images/Screenshot 2026-04-27 185357.png",
  "/images/Screenshot 2026-04-27 185401.png",
  "/images/Screenshot 2026-04-27 185410.png",
  "/images/Screenshot 2026-04-27 185414.png",
  "/images/Screenshot 2026-04-27 185425.png",
  "/images/Screenshot 2026-04-27 185459.png",
  "/images/Screenshot 2026-04-27 185503.png",
  "/images/Screenshot 2026-04-27 185510.png",
  "/images/Screenshot 2026-04-27 185515.png",
  "/images/Screenshot 2026-04-27 185522.png",
  "/images/Screenshot 2026-04-27 185527.png",
];

function MarqueeRow({ images, reverse = false }: { images: string[]; reverse?: boolean }) {
  const trackImages = [...images, ...images];

  return (
    <div className="relative overflow-hidden">
      <div className={`trusted-marquee ${reverse ? "trusted-marquee-reverse" : ""}`}>
        {trackImages.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="flex h-20 w-44 shrink-0 items-center justify-center rounded-lg border border-border/60 bg-card/70 px-5"
          >
            <Image
              src={src}
              alt="Client logo"
              width={136}
              height={48}
              className="h-10 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export function TrustedLeadersSection() {
  const midpoint = Math.ceil(trustedLogos.length / 2);
  const firstRow = trustedLogos.slice(0, midpoint);
  const secondRow = trustedLogos.slice(midpoint);

  return (
    <section className="bg-background py-16 md:py-20">
      <div className="px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
            Trusted by industry leaders
          </h2>

          <div className="mt-10 space-y-5">
            <MarqueeRow images={firstRow} />
            <MarqueeRow images={secondRow} reverse />
          </div>
        </div>
      </div>
    </section>
  );
}
