"use client";

const specs: Array<{ label: string; value: string }> = [];

export function EditorialSection() {
  return (
    <section className="bg-background">
      {/* Newsletter Banner */}
      

      {/* Decorative Icons */}
      <div className="flex items-center justify-center gap-6 pb-20">
        
        
      </div>

      {/* Specs Grid */}
      {specs.length > 0 ? (
        <div className="grid grid-cols-2 border-t border-border md:grid-cols-4">
          {specs.map((spec) => (
            <div
              key={spec.label}
              className="border-b border-r border-border p-8 text-center last:border-r-0 md:border-b-0"
            >
              <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
                {spec.label}
              </p>
              <p className="font-medium text-foreground text-4xl">
                {spec.value}
              </p>
            </div>
          ))}
        </div>
      ) : null}

      {/* Full-bleed Vimeo video above Contact Us */}
      <div className="relative left-1/2 aspect-[16/9] w-screen -translate-x-1/2 overflow-hidden bg-[#213164] md:aspect-[21/9]">
        <iframe
          src="https://player.vimeo.com/video/1191095730?background=1&autoplay=1&muted=1&loop=1&autopause=0&playsinline=1"
          title="Murban facility video"
          className="absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 border-0"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </section>
  );
}
