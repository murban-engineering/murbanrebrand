"use client";

import Image from "next/image";
import { CheckCircle2, MapPin } from "lucide-react";

import { AfricaGoogleMap, whereWeWorkCountries } from "./africa-google-map";

const whoWeAre = [
  "Conventional and Advanced NDT and Inspection Services",
  "Engineering",
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
          We operate through two divisions:
          <br />
          Murban Inspection Services
          <br />
          murban ENGINEERING Services
          <br />
          With a fully equipped laboratory in Mombasa and mobile teams deployed regionally, Murban is
          your trusted partner for both on-site and lab-based inspections, delivered with safety,
          speed, and precision.
        </p>
      </div>

      {/* About Image */}
      <div className="px-6 md:px-12 lg:px-20">
        <div className="relative mx-auto aspect-[4/3] w-full max-w-2xl overflow-hidden rounded-2xl">
          <Image
            src="/images/Screenshot 2026-04-28 190300.png"
            alt="murban ENGINEERING inspection team onsite"
            fill
            className="object-cover object-center"
          />
        </div>
      </div>

      {/* Company Profile + Why Choose + About */}
      <div className="px-6 py-fluid-lg md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl space-y-14">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-stretch">
            <div className="rounded-3xl border border-[#213164]/20 bg-gradient-to-br from-[#213164]/5 via-white to-[#A60D0F]/5 p-8 shadow-sm md:p-10">
              <p className="text-xs uppercase tracking-[0.2em] text-[#213164]">Company Profile</p>
              <h3 className="murban-engineering-wordmark mt-4 text-3xl tracking-tight !text-black md:text-4xl">
                murban ENGINEERING
              </h3>
              <p className="mt-5 text-lg leading-relaxed text-black">
                murban ENGINEERING is a specialist firm in Asset Integrity, Inspection, and
                Non-Destructive Testing (NDT). We deliver reliable and safe inspection solutions that
                support critical infrastructure in the oil &amp; gas, energy, marine, and industrial sectors.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-black">
                With over 20 years of experience, we operate across Africa. Our services help clients
                extend asset life, ensure regulatory compliance, and minimize downtime.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-[#A60D0F]/25 bg-[#213164] p-8 text-white shadow-lg md:p-10">
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#A60D0F]/20 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-20 h-60 w-60 rounded-full bg-[#213164]/35 blur-3xl" />
              <div className="relative">
                <p className="murban-engineering-wordmark text-xs uppercase tracking-[0.2em] text-black">
                  Why Clients Choose murban ENGINEERING
                </p>
              </div>
              <div className="relative mt-6 space-y-4 text-white/90">
                <p className="text-base leading-relaxed">
                  <span className="font-semibold text-white">African-Based, Globally Credible:</span>{" "}
                  18 years of experience with international standards, operating from Kenya across 35+ countries worldwide.
                </p>
                <p className="text-base leading-relaxed">
                  <span className="font-semibold text-white">ISO 9001:2015 Certified:</span>{" "}
                  Every aspect of our service delivery governed by a certified quality management system.
                </p>
                <p className="text-base leading-relaxed">
                  <span className="font-semibold text-white">Sharp Focus on Safety:</span>{" "}
                  100% commitment to safety embedded in every engagement — zero tolerance on HSE.
                </p>
                <p className="text-base leading-relaxed">
                  <span className="font-semibold text-white">Fast, Effective Mobilization:</span>{" "}
                  Strategic Nairobi and Mombasa bases enable rapid deployment across East, Central, Southern and West Africa.
                </p>
                <p className="text-base leading-relaxed">
                  <span className="font-semibold text-white">International Standards:</span>{" "}
                  API, ASNT, ISO — all work executed to internationally recognized codes and standards.
                </p>
                <p className="text-base leading-relaxed">
                  <span className="font-semibold text-white">Solutions-Focused Excellence:</span>{" "}
                  Technical depth ensures any inspection challenge — conventional or advanced — can be tackled.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div className="animate-in fade-in-0 slide-in-from-left-4 duration-700">
              <h3 id="who-we-are" className="scroll-mt-28 text-3xl font-medium tracking-tight text-foreground md:text-4xl">Who We Are</h3>
              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {whoWeAre.map((item, index) => (
                  <div
                    key={item}
                    className="group relative overflow-hidden rounded-2xl border border-[#213164]/20 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#A60D0F]/45 hover:shadow-md"
                    style={{ animationDelay: `${index * 90}ms` }}
                  >
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-[#213164]" />
                    <p className="text-base leading-relaxed text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-in fade-in-0 slide-in-from-right-4 duration-700 rounded-3xl border border-[#213164]/20 bg-white p-8 md:p-10">
              <h3 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl">MURBAN ENGINEERING LTD</h3>

              <h4 className="mt-8 text-2xl font-medium text-[#A60D0F]">Vision</h4>
              <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                It is our vision to be the undisputed leaders in the field of specialized
                Non-Destructive Testing through innovation, experience and the use of technology.
              </p>

              <h4 className="mt-8 text-2xl font-medium text-[#A60D0F]">Mission</h4>
              <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                We will deliver value to our clients by executing world class asset integrity
                services that maximize up-time and safety.
              </p>

              <h4 className="mt-8 text-2xl font-medium text-[#A60D0F]">Values</h4>
              <ul className="mt-3 space-y-1 text-lg leading-relaxed text-muted-foreground">
                <li>• Respect and Diversity;</li>
                <li>• Ethics and Integrity;</li>
                <li>• Safety and Sustainability are important to us;</li>
              </ul>
            </div>
          </div>

          <div className="mx-auto mt-10 w-full max-w-md rounded-2xl border border-border bg-card/40 p-6">
            <h4 className="text-center text-2xl font-medium text-primary">Core Values</h4>
            <svg
              viewBox="0 0 240 240"
              className="mx-auto mt-6 h-72 w-72 max-w-full"
              role="img"
              aria-label="Core values pie chart"
            >
              <g transform="translate(120,120)">
                <path d="M 0 0 L 0 -90 A 90 90 0 0 1 77.94 45 Z" fill="#A60D0F" stroke="#0f172a" strokeWidth="1" />
                <path d="M 0 0 L 77.94 45 A 90 90 0 0 1 -77.94 45 Z" fill="#213164" stroke="#0f172a" strokeWidth="1" />
                <path d="M 0 0 L -77.94 45 A 90 90 0 0 1 0 -90 Z" fill="#FFFFFF" stroke="#0f172a" strokeWidth="1.5" />

                <text x="42" y="-18" textAnchor="middle" fontSize="8" fill="#FFFFFF" fontWeight="600">
                  Passion for
                </text>
                <text x="42" y="-8" textAnchor="middle" fontSize="8" fill="#FFFFFF" fontWeight="600">
                  Innovation
                </text>

                <text x="0" y="58" textAnchor="middle" fontSize="8" fill="#FFFFFF" fontWeight="600">
                  Customer
                </text>
                <text x="0" y="68" textAnchor="middle" fontSize="8" fill="#FFFFFF" fontWeight="600">
                  Obsession
                </text>

                <text x="-42" y="-18" textAnchor="middle" fontSize="8" fill="#0f172a" fontWeight="600">
                  Drive for
                </text>
                <text x="-42" y="-8" textAnchor="middle" fontSize="8" fill="#0f172a" fontWeight="600">
                  Results
                </text>
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* Extended About Content */}
      <div className="px-6 pb-fluid-xl md:px-12 lg:px-20">
        <div className="mx-auto max-w-6xl space-y-14">
          <div>
            <div className="rounded-3xl border border-border/60 bg-card px-6 py-10 md:px-10">
              <div className="mx-auto max-w-5xl space-y-4">
                <h3 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                  Part of the Murban Group
                </h3>
                <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
                  Murban Engineering Ltd is part of the Murban Group, a privately held East African holding company. Our
                  sister company Murban Chemicals (Murchem) delivers dye injection and marine logistics services to the
                  petroleum sector. Where a project calls for cross-disciplinary scope, the group entities collaborate
                  under a single point of contact.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-3xl bg-muted/60 px-6 py-12 md:px-10">
              <div className="mx-auto max-w-5xl">
                <div className="flex flex-col items-center text-center">
                  <MapPin className="h-10 w-10 text-primary" strokeWidth={1.8} aria-hidden="true" />
                  <h3 id="where-we-work" className="scroll-mt-28 mt-3 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                    Where We Work
                  </h3>
                </div>

                <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
                  <div className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
                    {whereWeWorkCountries.map(({ name, label, isHQ }) => {
                      const isKenya = name === "Kenya";
                      const highlightColor = isKenya ? "#213164" : "#A60D0F";

                      return (
                        <p key={name} className="flex items-center gap-3 text-2xl font-semibold" style={{ color: highlightColor }}>
                          <CheckCircle2 className="h-6 w-6 shrink-0" style={{ color: highlightColor }} strokeWidth={2.1} aria-hidden="true" />
                          {isHQ ? `${label} (HQ)` : label}
                        </p>
                      );
                    })}
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
