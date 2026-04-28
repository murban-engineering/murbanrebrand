import { Upload, Facebook, Instagram, Youtube } from "lucide-react";

export function ContactSection() {
  return (
    <section className="bg-[#213164] px-6 py-12 md:px-12 md:py-16 lg:px-20">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-[#213164] shadow-2xl lg:grid-cols-[1.2fr_0.8fr]">
        <div
          className="relative min-h-[360px] p-8 md:min-h-[520px] md:p-12"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(33,49,100,0.78), rgba(24,33,66,0.92)), url('/images/contactusbg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="flex h-full flex-col justify-between">
            <div>
              <span className="inline-flex rounded-full border border-white/30 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/80">
                Contact Murban
              </span>
              <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">Contact us</h2>
            </div>

            <div className="grid gap-8 text-white/90 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-white/65">Our address</p>
                <p className="mt-3 text-sm leading-relaxed md:text-base">
                  123456 Moscow
                  <br />
                  Lane Dyuzheva
                  <br />
                  Building 47 office 202
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-white/65">Our contacts</p>
                <p className="mt-3 text-sm leading-relaxed md:text-base">
                  hello@name.com
                  <br />
                  +7 900 800 70 60
                </p>
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

              <button
                type="submit"
                className="inline-flex items-center rounded-md bg-[#A60D0F] px-6 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#8f0b0d]"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="mx-auto mt-6 flex max-w-7xl items-center justify-between text-white/80">
        <div className="flex items-center gap-3">
          {[Facebook, Instagram, Youtube].map((Icon, index) => (
            <span key={index} className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/25">
              <Icon className="h-4 w-4" />
            </span>
          ))}
        </div>
        <p className="text-xs uppercase tracking-[0.18em] text-white/70">follow us</p>
      </div>
    </section>
  );
}
