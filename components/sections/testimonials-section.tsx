"use client";

import Image from "next/image";

const countries = [
  "Kenya (HQ)",
  "Uganda",
  "Tanzania",
  "Ethiopia",
  "Rwanda",
  "Burundi",
  "Zambia",
  "Eritrea",
  "Seychelles",
  "Madagascar",
  "Somalia",
  "Zimbabwe",
  "Djibouti",
  "Malawi",
  "DRC",
  "Ghana",
];

export function TestimonialsSection() {
  return (
    <section id="about" className="bg-background">
      {/* Large Text Statement */}
      <div className="px-6 py-fluid-xl md:px-12 lg:px-20">
        <p className="content-wide text-fluid-3xl leading-relaxed text-foreground text-pretty">
          Meet Murban Engineering — Specialist in Asset Integrity, Inspection, and
          Non-Destructive Testing (NDT).
        </p>
      </div>

      {/* About Image */}
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="/images/e26fa9c3-966d-4966-94a4-954a1e511c1c.png"
          alt="Industrial workforce in protective gear"
          fill
          className="object-cover"
        />
        {/* Fade gradient overlay - white at bottom fading to transparent at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      <div className="px-6 pb-20 md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl rounded-2xl border border-border/60 bg-card p-6 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Company Profile
          </p>
          <p className="mt-4 max-w-4xl text-base leading-relaxed text-foreground md:text-lg">
            Murban Engineering is a specialist firm in Asset Integrity, Inspection,
            and Non-Destructive Testing (NDT). We deliver reliable and safe
            inspection solutions that support critical infrastructure in the oil &
            gas, energy, marine, and industrial sectors.
          </p>
          <p className="mt-4 max-w-4xl text-base leading-relaxed text-foreground md:text-lg">
            With over 20 years of experience, we operate across Africa. Our services
            help clients extend asset life, ensure regulatory compliance, and
            minimize downtime.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-6xl rounded-2xl border border-border/60 bg-card p-6 md:p-10">
          <h3 className="text-3xl font-semibold tracking-tight text-foreground md:text-5xl">
            Where We Work
          </h3>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div className="grid grid-cols-1 gap-2 text-sm font-medium text-foreground sm:grid-cols-2 md:text-base">
              {countries.map((country) => (
                <p key={country} className="flex items-center gap-3">
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-red-500 text-xs text-red-500">
                    ✓
                  </span>
                  {country}
                </p>
              ))}
            </div>

            <div className="relative rounded-xl bg-muted/40 p-4">
              <svg
                viewBox="0 0 520 520"
                className="h-auto w-full"
                role="img"
                aria-label="Africa region map with countries where Murban Engineering works"
              >
                <path
                  d="M194 46l40 5 22 24 18 9 34 3 24 20-9 24 10 23-8 35 13 22 19 21-5 33 24 33-4 28-31 7-17 28 7 28-13 23-31-2-23 18-40-6-16-27-33-9-24-30-24-5-8-25-23-29-2-25-24-18 5-22 23-20 8-25-11-33 17-26 25-13 26-3 30-17z"
                  className="fill-muted stroke-border"
                  strokeWidth="3"
                />
                <circle cx="365" cy="224" r="8" className="fill-red-600" />
                <circle cx="325" cy="245" r="7" className="fill-red-600" />
                <circle cx="346" cy="266" r="7" className="fill-red-600" />
                <circle cx="338" cy="214" r="7" className="fill-red-600" />
                <circle cx="297" cy="260" r="6" className="fill-red-600" />
                <circle cx="309" cy="282" r="6" className="fill-red-600" />
                <circle cx="299" cy="326" r="6" className="fill-red-600" />
                <circle cx="343" cy="180" r="6" className="fill-red-600" />
                <circle cx="356" cy="162" r="6" className="fill-red-600" />
                <circle cx="421" cy="372" r="9" className="fill-red-600" />
                <circle cx="375" cy="190" r="6" className="fill-red-600" />
                <circle cx="282" cy="350" r="6" className="fill-red-600" />
                <circle cx="332" cy="172" r="6" className="fill-red-600" />
                <circle cx="322" cy="301" r="6" className="fill-red-600" />
                <circle cx="372" cy="247" r="6" className="fill-red-600" />
                <circle cx="190" cy="265" r="7" className="fill-red-600" />

                <text x="381" y="228" className="fill-foreground text-[14px] font-semibold">Kenya</text>
                <text x="305" y="248" className="fill-foreground text-[13px]">Uganda</text>
                <text x="351" y="286" className="fill-foreground text-[13px]">Tanzania</text>
                <text x="344" y="206" className="fill-foreground text-[13px]">Ethiopia</text>
                <text x="275" y="263" className="fill-foreground text-[12px]">Rwanda</text>
                <text x="286" y="287" className="fill-foreground text-[12px]">Burundi</text>
                <text x="271" y="355" className="fill-foreground text-[12px]">Zambia</text>
                <text x="358" y="150" className="fill-foreground text-[12px]">Eritrea</text>
                <text x="429" y="380" className="fill-foreground text-[12px]">Madagascar</text>
                <text x="378" y="188" className="fill-foreground text-[12px]">Somalia</text>
                <text x="238" y="352" className="fill-foreground text-[12px]">Zimbabwe</text>
                <text x="324" y="162" className="fill-foreground text-[12px]">Djibouti</text>
                <text x="319" y="320" className="fill-foreground text-[12px]">Malawi</text>
                <text x="244" y="286" className="fill-foreground text-[12px]">DRC</text>
                <text x="135" y="268" className="fill-foreground text-[12px]">Ghana</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
