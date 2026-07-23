"use client";

import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { selectPaket } from "@/lib/inquiry";

import { cn } from "@/lib/utils";

type Package = {
  name: string;
  modules: string[];
  mode?: string;
  description: string;
  featured?: boolean;
};

const packages: Package[] = [
  {
    name: "Demand-Paket",
    modules: ["Paid Ads", "Content & Sichtbarkeit"],
    description:
      "Für Unternehmen mit funktionierendem Vertrieb, aber zu wenig Sichtbarkeit und Anfragen.",
  },
  {
    name: "Pipeline-Paket",
    modules: ["Outbound-System", "Vertriebsprozess & CRM"],
    description:
      "Für Unternehmen mit starkem Produkt, aber zu wenigen qualifizierten Terminen.",
    featured: true,
  },
  {
    name: "Wachstums-Paket",
    modules: ["Paid Ads", "Outbound-System", "Vertriebsprozess & CRM"],
    description:
      "Für Unternehmen, die Marketing und Direktansprache kombinieren — der schnellste Weg zu planbarer Pipeline.",
  },
  {
    name: "Aufbau-Paket",
    modules: ["Outbound-System", "Vertriebsprozess & CRM", "Team"],
    mode: "Build & Transfer",
    description:
      "Für Unternehmen, die eine eigene, dauerhaft funktionierende Vertriebsorganisation aufbauen wollen.",
  },
];

export function Packages() {
  return (
    <section id="pakete" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Pakete</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Bewährte Kombinationen für typische Ausgangslagen
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Vier Pakete decken die häufigsten Engpässe ab. Ihr Wachstumsplan
              kann jederzeit davon abweichen — die Bausteine bleiben
              dieselben.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg, index) => (
            <Reveal key={pkg.name} delay={index * 80} className="h-full">
              {/* Flaggschiff-Paket: Markenverlauf als Kante (Gradient-Border) */}
              <div
                className={cn(
                  "relative h-full rounded-xl",
                  pkg.featured && "bg-[image:var(--brand-gradient)] p-px"
                )}
              >
                <div
                  className={cn(
                    "relative flex h-full flex-col rounded-[calc(var(--radius)-1px)] bg-card p-7 transition-colors",
                    pkg.featured
                      ? ""
                      : "border border-border hover:border-brand-accent/40"
                  )}
                >
                  {pkg.featured ? (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-brand-accent px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-ink">
                      Unsere Empfehlung
                    </span>
                  ) : null}
                  <h3 className="text-[11px] font-bold uppercase tracking-[0.25em] text-foreground">
                    {pkg.name}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {pkg.modules.map((module) => (
                      <Badge
                        key={module}
                        variant="outline"
                        className="h-auto px-2.5 py-1 text-[10px] font-medium text-muted-foreground"
                      >
                        {module}
                      </Badge>
                    ))}
                    {pkg.mode ? (
                      <Badge
                        variant="secondary"
                        className="h-auto px-2.5 py-1 text-[10px] font-semibold"
                      >
                        Modus: {pkg.mode}
                      </Badge>
                    ) : null}
                  </div>
                  <p className="mt-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {pkg.description}
                  </p>
                  <Button
                    variant={pkg.featured ? "default" : "outline"}
                    className="mt-6 h-10 w-full"
                    nativeButton={false}
                    onClick={() => selectPaket(pkg.name)}
                    render={<a href="#kontakt" />}
                  >
                    Paket anfragen
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
