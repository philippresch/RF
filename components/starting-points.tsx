import { CalendarX, EyeOff, TrendingDown } from "lucide-react";

import { Reveal } from "@/components/reveal";

const situations = [
  {
    icon: EyeOff,
    title: "Zu wenig Sichtbarkeit",
    description:
      "Ihr Produkt ist stark, aber der Markt kennt Sie nicht. Anfragen entstehen zufällig statt planbar.",
  },
  {
    icon: CalendarX,
    title: "Zu wenige Termine",
    description:
      "Interessenten gibt es, aber es fehlt die systematische Direktansprache, die daraus qualifizierte Erstgespräche mit Entscheidern macht.",
  },
  {
    icon: TrendingDown,
    title: "Vertrieb skaliert nicht",
    description:
      "Anfragen und Termine sind da, aber Prozesse, CRM oder Team halten mit dem Wachstum nicht Schritt.",
  },
] as const;

export function StartingPoints() {
  return (
    <section id="ausgangslagen" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Ausgangslagen</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Wo liegt Ihr grösster Wachstumshebel?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Mehr Sichtbarkeit, mehr qualifizierte Termine oder ein Vertrieb,
              der mitwächst — wo das grösste Potenzial liegt, ist bei jedem
              Unternehmen anders. Deshalb beginnt jede Zusammenarbeit mit
              einer Analyse, nicht mit einem Standardpaket.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {situations.map((situation, index) => (
            <Reveal key={situation.title} delay={index * 80} className="h-full">
              <div className="group h-full rounded-xl border border-border bg-card p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-primary/40">
                <span className="flex size-9 items-center justify-center rounded-lg bg-brand-primary/10 text-brand-primary">
                  <situation.icon className="size-4" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-base font-bold text-foreground">
                  {situation.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {situation.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-10 text-center text-sm leading-relaxed text-muted-foreground">
            In der Praxis ist es meist eine Kombination. Welcher Hebel zuerst
            gezogen wird, ergibt die Analyse.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
