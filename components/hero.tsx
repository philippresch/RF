import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-28 pt-40 sm:pb-36 sm:pt-48">
      {/* Hebel-Diagonale — das eine grafische Element des Heros,
          verläuft unterhalb der CTA-Zeile durch den freien Raum */}
      <div aria-hidden="true" className="lever-line bottom-[4%]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="eyebrow hero-seq hero-seq-1 mb-6">
          Sichtbarkeit · Direktansprache · Vertriebsstruktur
        </p>

        <h1 className="hero-seq hero-seq-2 mx-auto max-w-3xl text-[clamp(2.2rem,6vw,4.5rem)] font-bold leading-[1.08] tracking-tight text-foreground">
          Ihr Wachstumspartner für{" "}
          <span className="bg-gradient-to-r from-brand-mid to-brand-accent bg-clip-text text-transparent">
            B2B&#8209;Tech &amp; Robotic
          </span>
        </h1>

        <p className="hero-seq hero-seq-3 mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Mehr Leads, stärkere Abschlüsse, planbares Wachstum: Wir
          analysieren Ihre Vertriebsstruktur und heben Ihre
          Neukundengewinnung aufs nächste Level.
        </p>

        <div className="hero-seq hero-seq-4 mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
          <Button
            size="lg"
            className="h-11 w-full px-7 sm:w-auto"
            nativeButton={false}
            render={<a href="#kontakt" />}
          >
            Kostenloses Erstgespräch
            <ArrowRight data-icon="inline-end" />
          </Button>
          <a
            href="#vorgehen"
            className="rounded-sm text-sm font-medium text-muted-foreground underline-offset-4 outline-none transition-colors hover:text-foreground hover:underline focus-visible:ring-2 focus-visible:ring-ring"
          >
            Unser Vorgehen
          </a>
        </div>
      </div>
    </section>
  );
}
