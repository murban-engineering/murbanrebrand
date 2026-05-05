"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ServiceLink } from "@/components/service-navigation-state";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { serviceCategories, services } from "@/lib/services";

const industryLinks = [
  { label: "All Industries", href: "#industries" },
  { label: "Oil & Gas Industry", href: "#industry-oil-gas-industry" },
  { label: "Power & Steam Generation", href: "#industry-power-steam-generation" },
  { label: "Storage & Logistics Terminals", href: "#industry-storage-logistics-terminals" },
  { label: "Food Processing Industry", href: "#industry-food-processing-industry" },
  { label: "Renewable Energy & Geothermal", href: "#industry-renewable-energy-geothermal" },
  { label: "Rail Industry", href: "#industry-rail-industry" },
  { label: "Shipping & Marine Industry", href: "#industry-shipping-marine-industry" },
];

const createSectionAnchor = (value: string) =>
  `#services-${value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "")}`;

const serviceGroups = serviceCategories.map((category) => ({
  category,
  sectionHref: createSectionAnchor(category),
  items: services.filter((service) => service.category === category),
}));

const aboutLinks = [
  { label: "Who We Are", href: "#who-we-are" },
  { label: "Where We Work", href: "#where-we-work" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [selectedServiceCategory, setSelectedServiceCategory] = useState<string | null>(null);
  const [selectedMobileServiceCategory, setSelectedMobileServiceCategory] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const navTextClass = `text-sm transition-colors ${isScrolled ? "text-muted-foreground hover:text-foreground" : "text-white/70 hover:text-white"}`;

  return (
    <header
      className={`fixed top-3 left-1/2 z-50 w-[94%] max-w-3xl -translate-x-1/2 transition-all duration-300 sm:top-4 sm:w-[90%] ${isScrolled ? "rounded-2xl bg-background/85 backdrop-blur-md sm:rounded-full" : "bg-transparent"}`}
      style={{
        boxShadow: isScrolled
          ? "rgba(14, 63, 126, 0.04) 0px 0px 0px 1px, rgba(42, 51, 69, 0.04) 0px 1px 1px -0.5px, rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px, rgba(42, 51, 70, 0.04) 0px 6px 6px -3px, rgba(14, 63, 126, 0.04) 0px 12px 12px -6px, rgba(14, 63, 126, 0.04) 0px 24px 24px -12px"
          : "none",
      }}
    >
      <div className="flex items-center justify-between px-3 py-2 transition-all duration-300 sm:pl-5">
        <Link href="#" className="flex items-center">
          <Image
            src="/images/murban-logo.ico"
            alt="murban ENGINEERING"
            width={40}
            height={40}
            className="object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          <Link href="#home" className={navTextClass}>
            Home
          </Link>
          <div className="group relative">
            <button type="button" className={`${navTextClass} inline-flex items-center gap-1`}>
              About
              <ChevronDown size={14} />
            </button>
            <div className="invisible absolute left-0 top-full z-50 mt-2 w-56 rounded-xl border border-border bg-background/95 p-2 opacity-0 shadow-xl backdrop-blur transition-all duration-200 group-hover:visible group-hover:opacity-100">
              {aboutLinks.map((aboutLink) => (
                <Link
                  key={aboutLink.href}
                  href={aboutLink.href}
                  className="block rounded-lg px-3 py-2 text-sm text-foreground transition-colors hover:bg-muted"
                >
                  {aboutLink.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="group relative">
            <button type="button" className={`${navTextClass} inline-flex items-center gap-1`}>
              Services
              <ChevronDown size={14} />
            </button>
            <div
              className="invisible absolute left-0 top-full z-50 mt-2 w-[44rem] rounded-xl border border-border bg-background/95 p-2 opacity-0 shadow-xl backdrop-blur transition-all duration-200 group-hover:visible group-hover:opacity-100"
              onMouseLeave={() => setSelectedServiceCategory(null)}
            >
              <div className="grid grid-cols-[18rem_1fr] gap-2">
                <div className="max-h-[70vh] overflow-y-auto rounded-lg border border-border/60 p-1">
                  <ServiceLink href="#services" className="mb-1 block rounded-lg px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted">
                    All Services
                  </ServiceLink>
                  {serviceGroups.map((group) => (
                    <div key={group.category} className="mb-1">
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedServiceCategory((prev) =>
                            prev === group.category ? null : group.category,
                          )
                        }
                        className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-muted-foreground transition-colors hover:bg-muted"
                      >
                        {group.category}
                        <ChevronDown
                          size={14}
                          className={`transition-transform ${selectedServiceCategory === group.category ? "-rotate-90" : ""}`}
                        />
                      </button>
                    </div>
                  ))}
                </div>

                <div className="min-h-[14rem] rounded-lg border border-border/60 p-1">
                  {selectedServiceCategory ? (
                    <div className="max-h-[70vh] overflow-y-auto">
                      {serviceGroups
                        .find((group) => group.category === selectedServiceCategory)
                        ?.items.map((service) => (
                          <ServiceLink
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="block rounded-lg px-3 py-2 text-sm text-foreground transition-colors hover:bg-muted"
                          >
                            {service.title}
                          </ServiceLink>
                        ))}
                    </div>
                  ) : (
                    <p className="px-3 py-2 text-sm text-muted-foreground">Select a service group to view items.</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="group relative">
            <button type="button" className={`${navTextClass} inline-flex items-center gap-1`}>
              Industries
              <ChevronDown size={14} />
            </button>
            <div className="invisible absolute left-0 top-full z-50 mt-2 w-72 rounded-xl border border-border bg-background/95 p-2 opacity-0 shadow-xl backdrop-blur transition-all duration-200 group-hover:visible group-hover:opacity-100">
              {industryLinks.map((industry) => (
                <Link
                  key={industry.href}
                  href={industry.href}
                  className="block rounded-lg px-3 py-2 text-sm text-foreground transition-colors hover:bg-muted"
                >
                  {industry.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="#our-projects" className={navTextClass}>
            Our Projects
          </Link>
          <Link href="#contact-us" className={navTextClass}>
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="https://portal.murban-eng.com/#/"
            target="_blank"
            rel="noopener noreferrer"
            className={navTextClass}
          >
            Portal
          </Link>
        </div>

        <button
          type="button"
          onClick={() => {
            setIsMenuOpen((prev) => !prev);
            setIsServicesOpen(false);
            setIsAboutOpen(false);
            setIsIndustriesOpen(false);
            setSelectedMobileServiceCategory(null);
          }}
          className={`rounded-md p-1 transition-colors md:hidden ${isScrolled ? "text-foreground" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="max-h-[calc(100vh-84px)] overflow-y-auto rounded-b-2xl border-t border-border bg-background px-5 py-6 pb-10 shadow-xl md:hidden">
          <nav className="flex flex-col gap-4">
            <Link href="#home" className="text-lg text-foreground" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <div className="space-y-3">
              <button
                type="button"
                className="flex w-full items-center justify-between text-lg text-foreground"
                onClick={() => setIsAboutOpen((prev) => !prev)}
              >
                About
                <ChevronDown size={18} className={`transition-transform ${isAboutOpen ? "rotate-180" : ""}`} />
              </button>
              {isAboutOpen && (
                <div className="space-y-2 border-l border-border pl-4">
                  {aboutLinks.map((aboutLink) => (
                    <Link
                      key={aboutLink.href}
                      href={aboutLink.href}
                      className="block text-base text-muted-foreground"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {aboutLink.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-3">
              <button
                type="button"
                className="flex w-full items-center justify-between text-lg text-foreground"
                onClick={() => setIsServicesOpen((prev) => !prev)}
              >
                Services
                <ChevronDown size={18} className={`transition-transform ${isServicesOpen ? "rotate-180" : ""}`} />
              </button>
              {isServicesOpen && (
                <div className="space-y-2 border-l border-border pl-4">
                  <ServiceLink href="#services" className="block text-base text-muted-foreground" onClick={() => setIsMenuOpen(false)}>
                    All Services
                  </ServiceLink>
                  {serviceGroups.map((group) => (
                    <div key={group.category} className="space-y-2">
                      <button
                        type="button"
                        className="flex w-full items-center justify-between text-sm font-semibold uppercase tracking-wide text-foreground"
                        onClick={() =>
                          setSelectedMobileServiceCategory((prev) =>
                            prev === group.category ? null : group.category,
                          )
                        }
                      >
                        {group.category}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${selectedMobileServiceCategory === group.category ? "rotate-180" : ""}`}
                        />
                      </button>
                      {selectedMobileServiceCategory === group.category &&
                        group.items.map((service) => (
                          <ServiceLink
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="block text-base text-muted-foreground"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {service.title}
                          </ServiceLink>
                        ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="space-y-3">
              <button
                type="button"
                className="flex w-full items-center justify-between text-lg text-foreground"
                onClick={() => setIsIndustriesOpen((prev) => !prev)}
              >
                Industries
                <ChevronDown size={18} className={`transition-transform ${isIndustriesOpen ? "rotate-180" : ""}`} />
              </button>
              {isIndustriesOpen && (
                <div className="space-y-2 border-l border-border pl-4">
                  {industryLinks.map((industry) => (
                    <Link
                      key={industry.href}
                      href={industry.href}
                      className="block text-base text-muted-foreground"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {industry.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="#our-projects" className="text-lg text-foreground" onClick={() => setIsMenuOpen(false)}>
              Our Projects
            </Link>
            <Link href="#contact-us" className="text-lg text-foreground" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
            <Link
              href="https://portal.murban-eng.com/#/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Portal
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
