import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";

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

        {/* Beweisbilder — Auszug, komplette Sammlung auf /referenzen */}
        <Reveal>
          <div className="mt-10">
            <p className="text-center text-xs uppercase tracking-widest text-muted-foreground">
              Einblicke aus dem laufenden Betrieb
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                {
                  src: "/proof/kalender-nachher-v4.png",
                  width: 1784,
                  height: 1250,
                  title: "Gebuchte Termine",
                  caption: "Kalenderwochen nach Kampagnenstart",
                  alt: "Terminkalender nach Kampagnenstart, gefüllt mit qualifizierten Erstgesprächen",
                },
                {
                  src: "/proof/pipeline-v4.png",
                  width: 4190,
                  height: 2502,
                  title: "Pipeline & Umsatz",
                  caption:
                    "Knapp CHF 2 Mio. Pipeline — über CHF 104'000 abgeschlossen",
                  alt: "CRM-Pipeline mit knapp CHF 2 Millionen Gesamtwert und über CHF 104'000 abgeschlossenem Umsatz",
                },
                {
                  src: "/proof/k3-bestellung-v4.png",
                  width: 1444,
                  height: 741,
                  title: "Antworten aus Kampagnen",
                  caption: "«Anbei die unterschriebene Offerte zu ihren Akten.»",
                  alt: "E-Mail eines Entscheiders mit unterschriebener Offerte, anonymisiert",
                },
              ].map((proof) => (
                <Link
                  key={proof.title}
                  href="/referenzen"
                  className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-ring/60"
                >
                  <div className="relative aspect-[4/3] overflow-hidden border-b border-border bg-white">
                    <Image
                      src={proof.src}
                      alt={proof.alt}
                      width={proof.width}
                      height={proof.height}
                      className="h-full w-full object-cover object-top"
                      sizes="(min-width: 640px) 33vw, 100vw"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-sm font-bold text-foreground">{proof.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                      {proof.caption}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/referenzen"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
              >
                Alle Referenzen und Beweise ansehen
                <ArrowRight className="size-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Reveal>

        {/* Case-Study-Teaser — [Platzhalter] */}
        <Reveal>
          <div className="mt-4 flex flex-col justify-center rounded-xl border border-dashed border-border bg-card p-7">
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
      </div>
    </section>
  );
}
