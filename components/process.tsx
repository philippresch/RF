import { Crosshair, ListChecks, Rocket, ScanSearch } from "lucide-react";

import { Reveal } from "@/components/reveal";

const steps = [
  {
    number: "01",
    icon: ScanSearch,
    title: "Analyse",
    description:
      "Ist-Situation: Wir analysieren Vertrieb, Marketing, Team und Kennzahlen – und identifizieren, wo Wachstum heute blockiert wird.",
  },
  {
    number: "02",
    icon: Crosshair,
    title: "Zieldefinition",
    description:
      "Soll-Situation: Gemeinsam definieren wir messbare Wachstumsziele und priorisieren, was den grössten Hebel hat.",
  },
  {
    number: "03",
    icon: ListChecks,
    title: "Massnahmenplan",
    description:
      "Ob Outbound, Marketing oder Vertriebsteam – wir legen die Massnahmen fest, die Ihre Ziele am wirksamsten erreichen.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Umsetzung",
    description:
      "Wir setzen die Massnahmen um – im Betrieb durch uns oder gemeinsam mit Ihrem Team, mit klaren KPIs und voller Transparenz.",
  },
] as const;

export function Process() {
  return (
    <section id="prozess" className="border-t border-foreground/10 py-24 sm:py-32">
      <div className="px-6 sm:px-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Der Prozess
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Vom Status quo zu planbarem Wachstum
            </h2>
          </div>
        </Reveal>

        <ol className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step.number} className="h-full">
              <Reveal delay={index * 80} className="h-full">
                <div className="h-full rounded-xl border border-border bg-card p-7 transition-colors hover:border-ring/60">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold tracking-widest text-muted-foreground">
                      {step.number}
                    </span>
                    <step.icon className="size-4 text-muted-foreground" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-base font-bold text-foreground">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
