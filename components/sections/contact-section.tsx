import { Upload } from "lucide-react";

const officeLocations = [
  {
    city: "Nairobi",
    division: "murban ENGINEERING",
    lines: [
      "POSTAL ADDRESS",
      "P.O. BOX 142-00502 Nairobi Karen",
      "OFFICE",
      "Embakasi, Old North Airport Rd",
      "Next to Naivas Embakasi",
      "Tel: +254 203673821",
      "Mob: +254 703041821",
    ],
  },
  {
    city: "Mombasa",
    division: "murban ENGINEERING",
    lines: [
      "Off Airport Road, Port Reitz",
      "P. O. Box 99215, 80107",
      "Mombasa, Kenya",
      "Tel: +254 202651068",
      "Mob: +254 724966694",
    ],
  },
];

export function ContactSection() {
  return (
    <section id="contact-us" className="bg-[#213164] px-6 py-12 md:px-12 md:py-16 lg:px-20">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-[#213164] shadow-2xl lg:grid-cols-[1.2fr_0.8fr]">
        <div className="relative min-h-[360px] overflow-hidden p-8 md:min-h-[520px] md:p-12">
          <iframe
            src="https://player.vimeo.com/video/1191095730?background=1&autoplay=1&loop=1&muted=1&autopause=0&playsinline=1"
            title="Murban contact section video"
            allow="autoplay; fullscreen; picture-in-picture"
            loading="lazy"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[140%] -translate-x-1/2 -translate-y-1/2 border-0 md:h-[130%] md:w-[130%]"
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(33,49,100,0.78),rgba(24,33,66,0.92))]" />
          <div className="relative z-10 flex h-full flex-col justify-between">
            <div>
              <span className="inline-flex rounded-full border border-white/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/80">
                Contact Murban
              </span>
              <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">Contact us</h2>
            </div>

            <div className="mt-8">
              <p className="text-[11px] uppercase tracking-[0.24em] text-white/65">Our Office Locations</p>
              <div className="mt-4 grid gap-6 text-[12px] leading-relaxed text-white/90 sm:grid-cols-2">
                {officeLocations.map((office) => (
                  <div key={office.city}>
                    <p className="text-sm font-semibold text-white">{office.city}</p>
                    <p className="mt-1 text-[12px] font-medium text-white/95">{office.division}</p>
                    <p className="mt-2 space-y-0.5 text-[11px] leading-relaxed text-white/90">
                      {office.lines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.24em] text-[#213164]/70">Feedback form</p>
          <form className="mt-8 space-y-7">
            {[
              { label: "Name", type: "text" },
              { label: "E-mail", type: "email" },
              { label: "Phone", type: "tel" },
              { label: "Message", type: "text" },
            ].map((field) => (
              <label key={field.label} className="block text-sm text-[#213164]">
                <span>{field.label}</span>
                <input
                  type={field.type}
                  className="mt-3 w-full border-0 border-b border-[#213164]/30 px-0 pb-2 text-sm text-[#213164] outline-none placeholder:text-[#213164]/40 focus:border-[#A60D0F] focus:ring-0"
                />
              </label>
            ))}

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <button
                type="button"
                className="inline-flex items-center gap-2 text-sm font-medium text-[#213164] transition-colors hover:text-[#A60D0F]"
              >
                <Upload className="h-4 w-4" />
                Upload file
              </button>

              <a
                href="mailto:info@murban-eng.com"
                className="inline-flex items-center rounded-md bg-[#A60D0F] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#8f0b0d]"
              >
                Send us a message
              </a>
            </div>
          </form>
        </div>
      </div>

    </section>
  );
}
