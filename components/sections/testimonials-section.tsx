"use client";

import Image from "next/image";
import { CheckCircle2, MapPin } from "lucide-react";

import { AfricaGoogleMap, whereWeWorkCountries } from "./africa-google-map";

const whoWeAre = [
  "Conventional and Advanced NDT and Inspection Services",
  "Engineering",
  "Oil and Gas, Refinery, Petrochemical, Heavy Industry, Mining and Power Plant",
  "Qualified and certified inspectors and NDT Practitioners",
  "Operating since 2007 across East, Central, Southern and West Africa, with delivered projects in 20+ countries.",
];

export function TestimonialsSection() {
  return (
    <section id="about" className="scroll-mt-28 bg-background">
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

      {/* Service-to-outcomes visual */}
      <div
        className="relative isolate min-h-screen w-full overflow-hidden bg-[#101522]"
        role="img"
        aria-label="Murban asset integrity connects inspection services and fabrication"
      >
        <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
          <div className="relative flex min-h-[50vh] items-center justify-center overflow-hidden px-6 py-24 text-center md:min-h-screen md:px-12 lg:px-20">
            <Image
              src="/images/NDT Inspection Services.jpg"
              alt="Inspection services background"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[#A60D0F]/80 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#A60D0F]/90 via-[#A60D0F]/70 to-[#A60D0F]/55" />
            <div className="relative z-10 max-w-md text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/75">01</p>
              <h3 className="mt-5 text-fluid-3xl font-semibold tracking-tight text-balance">Inspection Services</h3>
              <p className="mt-5 text-base leading-relaxed text-white/85 md:text-lg">
                NDT, certification, testing, and compliance-focused field inspection teams.
              </p>
            </div>
          </div>

          <div className="relative flex min-h-[50vh] items-center justify-center overflow-hidden px-6 py-24 text-center md:min-h-screen md:px-12 lg:px-20">
            <Image
              src="/images/fabrication.jpg"
              alt="Fabrication services background"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[#213164]/80 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-l from-[#213164]/90 via-[#213164]/72 to-[#213164]/55" />
            <div className="relative z-10 max-w-md text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/75">02</p>
              <h3 className="mt-5 text-fluid-3xl font-semibold tracking-tight text-balance">Fabrication</h3>
              <p className="mt-5 text-base leading-relaxed text-white/85 md:text-lg">
                Engineering assessments, repair planning, fabrication support, and site execution.
              </p>
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 flex w-[min(58vw,18rem)] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-[1.25rem] border border-white/30 bg-white/88 px-4 py-5 text-center shadow-2xl shadow-black/25 backdrop-blur-xl md:w-[17rem] md:px-6 md:py-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#213164]/15 bg-white shadow-lg md:h-16 md:w-16">
            <Image
              src="/images/murban-logo.ico"
              alt="murban ENGINEERING logo"
              width={52}
              height={52}
              className="h-10 w-10 object-contain md:h-12 md:w-12"
            />
          </div>
          <p className="mt-3 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-[#A60D0F]">Outcome</p>
          <h3 className="mt-1.5 text-fluid-xl font-semibold uppercase tracking-tight text-[#213164] text-balance">
            Asset Integrity
          </h3>
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
                Operating since 2007 across East, Central, Southern and West Africa, with delivered projects in 20+ countries. Our services help clients extend asset life, ensure regulatory compliance, and minimise downtime.
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
                  <span className="font-semibold text-white">African-based, globally credible:</span>{" "}
                  Operating since 2007 across East, Central, Southern and West Africa, with delivered projects in 20+ countries.
                </p>
                <p className="text-base leading-relaxed">
                  <span className="font-semibold text-white">ISO 9001:2015 Certified:</span>{" "}
                  Every aspect of our service delivery governed by a certified quality management system.
                </p>
                <p className="text-base leading-relaxed">
                  <span className="font-semibold text-white">Sharp Focus on Safety:</span>{" "}
                  100% commitment to safety embedded in every engagement, with zero tolerance on HSE.
                </p>
                <p className="text-base leading-relaxed">
                  <span className="font-semibold text-white">Fast, Effective Mobilisation:</span>{" "}
                  Strategic Nairobi and Mombasa bases enable rapid deployment across East, Central, Southern and West Africa.
                </p>
                <p className="text-base leading-relaxed">
                  <span className="font-semibold text-white">International Standards:</span>{" "}
                  API, ASNT and ISO: all work executed to internationally recognised codes and standards.
                </p>
                <p className="text-base leading-relaxed">
                  <span className="font-semibold text-white">Solutions-Focused Excellence:</span>{" "}
                  Technical depth ensures any inspection challenge, conventional or advanced, can be tackled.
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
                It is our vision to be the undisputed leaders in the field of specialised
                Non-Destructive Testing through innovation, experience and the use of technology.
              </p>

              <h4 className="mt-8 text-2xl font-medium text-[#A60D0F]">Mission</h4>
              <p className="mt-3 text-lg leading-relaxed text-muted-foreground">
                We will deliver value to our clients by executing world class asset integrity
                services that maximise up-time and safety.
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
                  sister company Murban Chemicals (
                  <a
                    href="https://www.murchem.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-foreground underline underline-offset-4 transition-colors hover:text-primary"
                  >
                    Murchem
                  </a>
                  ) delivers dye injection and marine logistics services to the petroleum sector. Where a project calls
                  for cross-disciplinary scope, the group entities collaborate under a single point of contact.
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
