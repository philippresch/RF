import { ImageIcon, Quote } from "lucide-react";

import { Reveal } from "@/components/reveal";

/**
 * Referenzen-Sektion — aktuell vollständig mit Platzhaltern bestückt.
 * TODO vor Launch: Kennzahlen, Kundenlogos, Testimonials und Case Study
 * durch echte Inhalte ersetzen (siehe [Platzhalter]-Markierungen).
 */

const stats = [
  { value: "[XXX]+", label: "Generierte Termine" },
  { value: "[XX]", label: "Betreute Unternehmen" },
  { value: "[X]", label: "Jahre eigene Vertriebspraxis" },
];

const testimonials = [
  {
    quote:
      "[Platzhalter — Zitat eines Kunden: konkretes Ergebnis, z. B. Anzahl Termine oder Umsatzeffekt.]",
    author: "[Name]",
    role: "[Rolle], [Unternehmen]",
  },
  {
    quote:
      "[Platzhalter — Zitat eines Kunden: Zusammenarbeit, Transparenz, Ergebnis im Zeitverlauf.]",
    author: "[Name]",
    role: "[Rolle], [Unternehmen]",
  },
];

export function Proof() {
  return (
    <section id="referenzen" className="border-t border-foreground/10 py-24 sm:py-32">
      <div className="px-6 sm:px-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Referenzen
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Ergebnisse, an denen wir uns messen lassen
            </h2>
          </div>
        </Reveal>

        {/* Kennzahlen-Leiste — [Platzhalter] */}
        <Reveal>
          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-dashed border-border bg-border/50 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-card px-6 py-8 text-center">
                <p className="text-3xl font-extrabold tracking-tight text-foreground">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Kundenlogos — [Platzhalter] */}
        <Reveal>
          <div className="mt-10">
            <p className="text-center text-xs uppercase tracking-widest text-muted-foreground">
              Vertrauen von B2B-Tech- und Robotik-Unternehmen
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="flex h-16 items-center justify-center rounded-lg border border-dashed border-border text-xs text-muted-foreground"
                >
                  Kundenlogo
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Testimonials — [Platzhalter] */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <Reveal key={index} delay={index * 80} className="h-full">
              <figure className="flex h-full flex-col rounded-xl border border-dashed border-border bg-card p-7">
                <Quote className="size-4 text-muted-foreground" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {testimonial.quote}
                </blockquote>
                <figcaption className="mt-5 border-t border-border pt-4">
                  <p className="text-sm font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Case-Study-Teaser + Reporting-Einblick — [Platzhalter] */}
        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="flex h-full flex-col justify-center rounded-xl border border-dashed border-border bg-card p-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-foreground">
                Case Study
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                [Platzhalter — Case Study folgt: Ausgangslage, eingesetzte
                Bausteine und Ergebnis in Zahlen, z.&nbsp;B. «Von X auf Y
                qualifizierte Termine in Z Monaten».]
              </p>
            </div>
          </Reveal>
          <Reveal delay={80} className="h-full">
            <div className="flex h-full min-h-44 flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card p-7 text-center">
              <ImageIcon className="size-5 text-muted-foreground" aria-hidden="true" />
              <p className="mt-3 text-sm font-medium text-foreground">
                Einblick ins Reporting
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                [Platzhalter — anonymisierter Screenshot aus CRM- oder
                Kampagnen-Reporting folgt.]
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
