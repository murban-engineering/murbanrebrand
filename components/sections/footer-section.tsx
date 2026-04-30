"use client";

import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const companyLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Industry Solutions", href: "#industries" },
  { label: "Our Projects", href: "#our-projects" },
  { label: "Contact Us", href: "#contact-us" },
];

const serviceLinksColumnOne = [
  { label: "Alternating Current Field Measurement", href: "/services/alternating-current-field-measurement" },
  { label: "API 570 Piping Inspection and Certification", href: "/services/api-570-piping-inspection-and-certification" },
  { label: "Murban Fitness for Service", href: "/services/api-579-murban-fitness-for-service" },
  { label: "Murban Risk Based Inspection", href: "/services/api-580-murban-risk-based-inspection" },
  { label: "Boiler Inspection", href: "/services/boiler-inspection-services" },
  { label: "Lifting Equipment Thorough Examination and Certification", href: "/services/lifting-equipment-thorough-examination-and-certification" },
];

const serviceLinksColumnTwo = [
  { label: "Murban Pressure Testing", href: "/services/murban-pressure-testing" },
  { label: "Paint Inspection", href: "/services/paint-coating-inspection" },
  { label: "PMI Testing", href: "/services/positive-material-identification-testing" },
  { label: "RT Service", href: "/services/rt-radiographic-services" },
  { label: "Risk Based Inspection", href: "/services/api-580-murban-risk-based-inspection" },
  { label: "Sphere Tank Inspection", href: "/services/sphere-tank-inspections" },
];

export function FooterSection() {
  return (
    <footer className="bg-neutral-200">
      <div className="px-6 py-12 md:px-12 md:py-14 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.7fr_0.7fr_0.7fr]">
          <div>
            <h2 className="murban-engineering-wordmark text-2xl tracking-tight md:text-3xl">murban ENGINEERING</h2>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground md:mt-8 md:text-base">
              Our operations are split into two divisions, Murban Inspection Services and Murban
              Engineering Services. We pick the best talent from the industry and continually invest
              in their development through rigorous external and internal training so they stay
              ahead of industry trends.
            </p>

            <div className="mt-8 text-sm text-muted-foreground md:mt-10 md:text-base">
              <p>Find our latest office details in the Contact Us section above.</p>
            </div>

            <div className="mt-10 md:mt-14">
              <h3 className="text-2xl font-semibold text-foreground md:text-3xl">Follow Us</h3>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="mt-5 inline-flex h-12 w-12 md:mt-6 md:h-14 md:w-14 items-center justify-center rounded-full border border-rose-200 text-xl font-medium text-foreground transition-colors hover:bg-white"
              >
                in
              </Link>
            </div>
          </div>

          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Services" links={serviceLinksColumnOne} />
          <FooterColumn title="Services" links={serviceLinksColumnTwo} />
        </div>

        <div className="mt-10 border-t border-black/10 pt-8 md:mt-14 md:pt-10">
          <Dialog>
            <DialogTrigger asChild>
              <button
                type="button"
                className="text-sm font-medium text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground md:text-base"
              >
                Privacy Policy
              </button>
            </DialogTrigger>

            <DialogContent className="max-h-[85vh] max-w-4xl overflow-y-auto p-0">
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src="/images/industrial-refinery.jpg"
                  alt="Industrial site representing secure engineering operations"
                  className="h-48 w-full object-cover md:h-64"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-5 left-5 flex items-center gap-3 text-white md:bottom-6 md:left-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <p className="text-xs uppercase tracking-[0.2em] md:text-sm">Industry-grade privacy commitment</p>
                </div>
              </div>

              <div className="space-y-6 px-6 pb-8 pt-6 md:px-8">
                <DialogHeader className="text-left">
                  <DialogTitle className="text-2xl md:text-3xl">Protecting your information and building trust</DialogTitle>
                  <DialogDescription className="text-sm leading-relaxed text-muted-foreground md:text-base">
                    Murban Engineering Services safeguards client and partner information with the same rigor we apply
                    to our inspection and engineering assignments. This policy outlines how we collect, store, and use
                    personal data in line with applicable regulations and our commitment to transparency.
                  </DialogDescription>
                </DialogHeader>

                <section>
                  <h4 className="text-base font-semibold text-foreground md:text-lg">Information we collect</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                    We collect details provided through contact forms, project onboarding, and training registrations.
                    This may include contact names, company information, email addresses, phone numbers, and
                    documentation relevant to service delivery.
                  </p>
                </section>

                <section>
                  <h4 className="text-base font-semibold text-foreground md:text-lg">How we use your data</h4>
                  <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                    <li>Delivering inspection and engineering services.</li>
                    <li>Coordinating training, certification, and compliance reporting.</li>
                    <li>Responding to enquiries and providing project updates.</li>
                    <li>Improving our offerings through aggregated insights.</li>
                  </ul>
                </section>

                <section>
                  <h4 className="text-base font-semibold text-foreground md:text-lg">Your privacy choices</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                    You can request access to, correction of, or deletion of your personal data by contacting our team
                    at{" "}
                    <a className="font-medium text-foreground underline underline-offset-4" href="mailto:info@murban-eng.com">
                      info@murban-eng.com
                    </a>
                    . We respond promptly and transparently to all privacy-related requests.
                  </p>
                </section>

                <section>
                  <h4 className="text-base font-semibold text-foreground md:text-lg">Staying informed</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
                    We update this policy as regulations evolve or our service delivery processes change. Significant
                    updates are highlighted on this page, and we encourage you to review it periodically.
                  </p>
                </section>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="text-2xl font-semibold text-foreground md:text-3xl">{title}</h4>
      <ul className="mt-6 space-y-4 md:mt-8 md:space-y-5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm leading-snug text-foreground transition-colors hover:text-muted-foreground md:text-base"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
