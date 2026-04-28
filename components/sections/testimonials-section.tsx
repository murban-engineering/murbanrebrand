"use client";

import Image from "next/image";
import { CheckCircle2, MapPin } from "lucide-react";

import { AfricaGoogleMap, whereWeWorkCountries } from "./africa-google-map";

const whoWeAre = [
  "Conventional and Advanced NDT and Inspection Services",
  "API Inspection Agency",
  "Oil and Gas, Refinery, Petrochemical, Heavy Industry, Mining and Power Plant",
  "Qualified and certified inspectors and N-D-T Practitioners",
  "Kenya headquarters with Africa expertise since 2007",
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
      <div className="px-6 md:px-12 lg:px-20">
        <div className="relative aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-2xl">
          <Image
            src="/images/Screenshot 2026-04-28 190300.png"
            alt="Murban Engineering inspection team onsite"
            fill
            className="object-cover object-center"
          />
        </div>
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
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              We support projects across Africa with teams and certified inspectors in key markets.
              Countries shown on the map include {whereWeWorkCountries.map((country) => country.label).join(", ")}.
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

          </div>


          <div>
            <div className="rounded-3xl bg-muted/60 px-6 py-12 md:px-10">
              <div className="mx-auto max-w-5xl">
                <div className="flex flex-col items-center text-center">
                  <MapPin className="h-10 w-10 text-primary" strokeWidth={1.8} aria-hidden="true" />
                  <h3 className="mt-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                    Where We Work
                  </h3>
                </div>

                <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
                  <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                    {whereWeWorkCountries.map(({ name, label, isHQ }) => (
                      <p key={name} className="flex items-center gap-3 text-2xl font-semibold text-foreground/90">
                        <CheckCircle2 className="h-6 w-6 shrink-0 text-primary" strokeWidth={2.1} aria-hidden="true" />
                        {isHQ ? `${label} (HQ)` : label}
                      </p>
                    ))}
                  </div>
                  <AfricaGoogleMap className="overflow-hidden rounded-2xl bg-card" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
