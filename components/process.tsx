import { Reveal } from "@/components/reveal";

const steps = [
  {
    number: "01",
    title: "Kostenfreie Erstanalyse",
    description:
      "30 Minuten, standardisierte Prüfpunkte entlang Ihrer gesamten Umsatzkette: Sichtbarkeit, Nachfrage, Direktansprache, Vertriebsprozess und Team.",
  },
  {
    number: "02",
    title: "Wachstums-Audit",
    description:
      "Zwei Wochen, Festpreis, bei Folgeauftrag vollständig angerechnet: Diagnose Ihres Engpasses, Zahlenmodell für Ihr Umsatzziel und priorisierte Massnahmen.",
  },
  {
    number: "03",
    title: "Wachstumsplan",
    description:
      "Ihre individuelle Konfiguration aus unseren Leistungsbausteinen — mit klarer Reihenfolge, Verantwortlichkeiten und Kennzahlen je Baustein.",
  },
  {
    number: "04",
    title: "Umsetzung",
    description:
      "Wir setzen die Bausteine um: im laufenden Betrieb für Sie (Managed) oder als Aufbau mit Übergabe an Ihr Team (Build & Transfer).",
  },
  {
    number: "05",
    title: "Quartals-Review",
    description:
      "Alle drei Monate: Kennzahlen je Baustein, Rekonfiguration, nächste Ausbaustufe. So bleibt der Plan an Ihrem Wachstum ausgerichtet.",
  },
] as const;

export function Process() {
  return (
    <section id="vorgehen" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Unser Vorgehen</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Vom Engpass zum Wachstumsplan
            </h2>
          </div>
        </Reveal>

        <ol className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {steps.map((step, index) => (
            <li key={step.number} className="h-full">
              <Reveal delay={index * 80} className="h-full">
                <div className="h-full rounded-xl border border-border bg-card p-7 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-primary/40">
                  <span className="text-xs font-bold tracking-[0.25em] text-brand-primary">
                    {step.number}
                  </span>
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
