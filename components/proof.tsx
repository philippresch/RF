import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/reveal";

/**
 * Referenzen — das dunkle Beweisband mit Einblicken aus dem laufenden
 * Betrieb. Kennzahlen, Kundenlogos, Testimonials und Case Study folgen
 * später. Einer von zwei Einsatzorten des Markenverlaufs (Akzentlinie).
 */

export function Proof() {
  return (
    <section id="referenzen" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Referenzen</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ergebnisse, an denen wir uns messen lassen
            </h2>
            <div
              aria-hidden="true"
              className="mx-auto mt-6 h-0.5 w-24 rounded-full bg-[image:var(--brand-gradient)]"
            />
          </div>
        </Reveal>

        {/* Beweisbilder — Auszug, komplette Sammlung auf /referenzen */}
        <Reveal>
          <div className="mt-14">
            <p className="text-center text-xs uppercase tracking-widest text-muted-foreground">
              Einblicke aus dem laufenden Betrieb
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                {
                  src: "/proof/kalender-nachher-v5.png",
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
                  className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-brand-accent/40"
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
      </div>
    </section>
  );
}
