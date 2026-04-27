"use client";

import Image from "next/image";

const africanCountries = [
  "Nigeria",
  "Ghana",
  "Kenya",
  "Uganda",
  "Tanzania",
  "Angola",
  "Namibia",
  "South Africa",
  "Mozambique",
  "Egypt",
];

const whoWeAre = [
  "Conventional and Advanced NDT and Inspection Services",
  "API Inspection Agency",
  "Oil and Gas, Refinery, Petrochemical, Heavy Industry, Mining and Power Plant",
  "Qualified and certified inspectors and N-D-T Practitioners",
  "Kenya headquarters with Africa expertise since 2007",
];

const whereWeWorkExtended = [
  "Kenya",
  "Uganda",
  "Tanzania",
  "Ethiopia",
  "Rwanda",
  "Burundi",
  "Zambia",
  "DRC",
  "Somalia",
  "Seychelles",
  "Madagascar",
  "Ghana",
  "Eritrea",
  "Djibouti",
  "Zimbabwe",
  "Malawi",
];

export function TestimonialsSection() {
  return (
    <section id="about" className="bg-background">
      {/* Large Text Statement */}
      <div className="px-6 py-fluid-xl md:px-12 lg:px-20">
        <p className="content-wide text-fluid-3xl leading-relaxed text-foreground text-pretty">
          Murban Engineering specializes in Asset Integrity, Inspection, and Non-Destructive Testing.
          We deliver safe, reliable inspection solutions for critical infrastructure across oil &amp; gas,
          energy, marine, and industrial operations.
        </p>
      </div>

      {/* About Image */}
      <div className="relative aspect-[16/9] w-full">
        <Image
          src="/images/e26fa9c3-966d-4966-94a4-954a1e511c1c.png"
          alt="Murban Engineering inspection team onsite"
          fill
          className="object-cover"
        />
        {/* Fade gradient overlay - white at bottom fading to transparent at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
      </div>

      {/* Company Profile + Where We Work */}
      <div className="px-6 py-fluid-lg md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Company Profile</p>
            <h3 className="mt-4 text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              Murban Engineering
            </h3>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Murban Engineering is a specialist firm in Asset Integrity, Inspection, and
              Non-Destructive Testing (NDT). We deliver reliable and safe inspection solutions that
              support critical infrastructure in the oil &amp; gas, energy, marine, and industrial sectors.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              With over 20 years of experience, we operate across Africa. Our services help clients
              extend asset life, ensure regulatory compliance, and minimize downtime.
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Where We Work</p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-card">
              <Image
                src="/images/africa-map.svg"
                alt="Map of Africa with highlighted countries where Murban Engineering operates"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Countries shown on the map: {africanCountries.join(", ")}.
            </p>
          </div>
        </div>
      </div>

      {/* Extended About Content */}
      <div className="px-6 pb-fluid-xl md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl space-y-14">
          <div>
            <h3 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">Who We Are</h3>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {whoWeAre.map((item) => (
                <div key={item} className="rounded-xl border border-border bg-card/40 p-5">
                  <p className="text-base leading-relaxed text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <h3 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">Murban API Agency</h3>

              <h4 className="mt-8 text-2xl font-medium text-primary">Vision</h4>
              <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                It is our vision to be the undisputed leaders in the field of specialized
                Non-Destructive Testing through innovation, experience and the use of technology.
              </p>

              <h4 className="mt-8 text-2xl font-medium text-primary">Mission</h4>
              <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                We will deliver value to our clients by executing world class asset integrity
                services that maximize up-time and safety.
              </p>

              <h4 className="mt-8 text-2xl font-medium text-primary">Values</h4>
              <ul className="mt-3 space-y-1 text-lg leading-relaxed text-muted-foreground">
                <li>• Respect and Diversity;</li>
                <li>• Ethics and Integrity;</li>
                <li>• Safety and Sustainability are important to us;</li>
              </ul>

              <h4 className="mt-8 text-2xl font-medium text-primary">Core Values</h4>
              <ol className="mt-3 space-y-1 text-lg leading-relaxed text-muted-foreground list-decimal pl-6">
                <li>Passion for Innovation</li>
                <li>Customer Obsession</li>
                <li>Drive for Results</li>
              </ol>
            </div>

            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <Image
                src="/images/africa-map.svg"
                alt="Murban group capability overview"
                width={1200}
                height={900}
                className="h-auto w-full"
              />
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">Our Office Locations</h3>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h4 className="text-2xl font-medium text-primary">Nairobi</h4>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  <strong className="text-foreground">Murban Engineering</strong>
                  <br />
                  Kofisi Karen Road
                  <br />
                  P.O Box 856 00606
                  <br />
                  Nairobi Kenya
                  <br />
                  Tel: +254 203673821
                  <br />
                  Mob: +254 703041821
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6">
                <h4 className="text-2xl font-medium text-primary">Mombasa</h4>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  <strong className="text-foreground">Murban Inspection</strong>
                  <br />
                  Off Airport Road
                  <br />
                  P. O. Box 99215 – 80107
                  <br />
                  Mombasa, Kenya
                  <br />
                  Tel +254 202651068
                  <br />
                  Mob: +254 724966694
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">Where We Work</h3>
            <div className="mt-8 grid gap-8 lg:grid-cols-2 lg:items-start">
              <div className="grid grid-cols-2 gap-x-10 gap-y-2">
                {whereWeWorkExtended.map((country) => (
                  <p key={country} className="text-xl leading-relaxed text-muted-foreground">
                    • {country}
                  </p>
                ))}
              </div>
              <div className="overflow-hidden rounded-2xl border border-border bg-card">
                <Image
                  src="/images/africa-map.svg"
                  alt="Africa map showing Murban work regions"
                  width={1200}
                  height={900}
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
