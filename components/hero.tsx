import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pb-28 pt-40 sm:pb-36 sm:pt-48">
      {/* Punktraster über den gesamten Hero, weicher Auslauf am unteren Rand */}
      <div
        aria-hidden="true"
        className="dot-grid absolute inset-0 [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]"
      />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground sm:text-xs">
          Sichtbarkeit · Direktansprache · Vertriebsstruktur
        </p>

        <h1 className="mx-auto max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Ihr Wachstumspartner für{" "}
          <span className="bg-gradient-to-r from-muted-foreground via-muted-foreground/70 to-muted-foreground bg-clip-text text-transparent">
            B2B&#8209;Tech &amp; Robotic
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Mehr Leads, stärkere Abschlüsse, planbares Wachstum: Wir
          analysieren Ihre Vertriebsstruktur und heben Ihre
          Neukundengewinnung aufs nächste Level.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="h-11 w-full px-7 sm:w-auto"
            nativeButton={false}
            render={<a href="#kontakt" />}
          >
            Kostenloses Erstgespräch
            <ArrowRight data-icon="inline-end" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="h-11 w-full px-7 sm:w-auto"
            nativeButton={false}
            render={<a href="#vorgehen" />}
          >
            Unser Vorgehen
          </Button>
        </div>
      </div>
    </section>
  );
}
