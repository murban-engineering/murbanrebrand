"use client";

const trustedBy = ["TotalEnergies", "KenGen", "Bolloré", "KPC"];

const testimonials = [
  "The level of HSE standards and problem solving is efficient. Their team demonstrates exceptional professionalism.",
  "The pipeline inspection provided were thorough, timely and exceeded our expectations. Their use of advanced technology, combined with a highly skilled team, helped us identify critical issues early and avoid costly downtime.",
  "Good time management improved productivity and focus. Project completed as planned with zero incidents.",
  "The custom-fabricated working platform delivered by the team was exceptional in both quality and design. It met all our safety standards, was completed on schedule, and integrated seamlessly into our project site.",
  "The additivation of red dye at the vessels was executed with precision and efficiency. The process met all regulatory requirements and ensured consistent coloration without disrupting operations.",
  "The tank cleaning service was carried out with a high level of professionalism, safety, and efficiency. Their attention to detail ensured the tanks were thoroughly cleaned and ready for inspection.",
];

export function TestimonialsSection() {
  return (
    <section id="about" className="bg-secondary/30 px-6 py-20 md:px-12 lg:px-20">
      <h3 className="text-center text-sm uppercase tracking-widest text-muted-foreground">Trusted by industry leaders</h3>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        {trustedBy.map((company) => (
          <span key={company} className="rounded-full border border-border bg-background px-4 py-2 text-sm font-medium">
            {company}
          </span>
        ))}
      </div>

      <div className="mt-16">
        <p className="text-sm uppercase tracking-widest text-muted-foreground">Testimonials</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">What Our Clients Say</h2>
        <p className="mt-4 text-muted-foreground">
          Trusted by industry leaders across Africa for critical infrastructure inspection.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {testimonials.map((quote, index) => (
            <blockquote key={index} className="rounded-2xl border border-border bg-background p-6 text-sm leading-relaxed md:text-base">
              “{quote}”
            </blockquote>
          ))}
        </div>
        <p className="mt-6 text-sm font-medium text-muted-foreground">Verified Client.</p>
      </div>
    </section>
  );
}
