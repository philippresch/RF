import {
  GraduationCap,
  Megaphone,
  Newspaper,
  Send,
  Users,
  Workflow,
} from "lucide-react";

import { Reveal } from "@/components/reveal";

type Module = {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  name: string;
  description: string;
  kpi: string;
};

type ModuleGroup = {
  label: string;
  modules: Module[];
};

const groups: ModuleGroup[] = [
  {
    label: "Sichtbarkeit & Nachfrage",
    modules: [
      {
        icon: Megaphone,
        name: "Paid Ads",
        description:
          "LinkedIn- und Google-Kampagnen inklusive Landingpage, Tracking und Retargeting — für planbare Inbound-Anfragen aus Ihrer Zielgruppe.",
        kpi: "Qualifizierte Anfragen pro Monat",
      },
      {
        icon: Newspaper,
        name: "Content & Sichtbarkeit",
        description:
          "Case Studies und LinkedIn-Präsenz für Unternehmen und Geschäftsführung — Vertrauen dort, wo Ihre Zielkunden hinschauen.",
        kpi: "Reichweite und Engagement in der Zielkundenliste",
      },
    ],
  },
  {
    label: "Direktansprache",
    modules: [
      {
        icon: Send,
        name: "Outbound-System",
        description:
          "Quellenverifizierte Kontaktrecherche und Multichannel-Kampagnen über Telefon, E-Mail und LinkedIn — qualifizierte Termine mit Entscheidern, auf Ihren eigenen Konten und in Ihrem CRM.",
        kpi: "Qualifizierte Termine pro Monat",
      },
    ],
  },
  {
    label: "Vertrieb & Struktur",
    modules: [
      {
        icon: Workflow,
        name: "Vertriebsprozess & CRM",
        description:
          "Pipeline-Stufen, Automationen, Playbooks und Forecasting — damit aus Terminen systematisch Abschlüsse werden.",
        kpi: "Conversion je Pipeline-Stufe",
      },
      {
        icon: Users,
        name: "Team",
        description:
          "Rollenprofile, Recruiting-Unterstützung, Onboarding und Befähigung Ihrer Vertriebsmitarbeiter.",
        kpi: "Zeit bis zur vollen Produktivität",
      },
      {
        icon: GraduationCap,
        name: "Sales-Coaching",
        description:
          "Wöchentliche Pipeline-Reviews und Gesprächscoaching für Ihr Team.",
        kpi: "Abschlussquote",
      },
    ],
  },
];

function ModuleCard({ module, delay }: { module: Module; delay: number }) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="flex h-full flex-col rounded-xl border border-border bg-card p-7 transition-colors hover:border-ring/60">
        <module.icon className="size-4 text-muted-foreground" aria-hidden />
        <h3 className="mt-5 text-base font-bold text-foreground">{module.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {module.description}
        </p>
        <div className="mt-6 border-t border-border pt-4">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Kennzahl
          </p>
          <p className="mt-1 text-sm font-medium text-foreground">{module.kpi}</p>
        </div>
      </div>
    </Reveal>
  );
}

export function Modules() {
  return (
    <section id="bausteine" className="border-t border-foreground/10 py-24 sm:py-32">
      <div className="px-6 sm:px-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Leistungsbausteine
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Sechs Bausteine, ein System
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Jeder Baustein hat einen klaren Leistungsumfang, einen fixen
              Setup- und Monatspreis und eine Kennzahl, an der wir uns messen
              lassen. Welche Bausteine zum Einsatz kommen, entscheidet Ihr
              Wachstumsplan.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 space-y-12">
          {groups.map((group) => (
            <div key={group.label}>
              <Reveal>
                <div className="mb-5 flex items-center gap-4">
                  <p className="shrink-0 text-[11px] font-bold uppercase tracking-[0.22em] text-foreground">
                    {group.label}
                  </p>
                  <div className="h-px flex-1 bg-border" aria-hidden="true" />
                </div>
              </Reveal>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.modules.map((module, index) => (
                  <ModuleCard key={module.name} module={module} delay={index * 80} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Betriebsmodi */}
        <Reveal>
          <div className="mt-12 grid grid-cols-1 overflow-hidden rounded-xl border border-border sm:grid-cols-2">
            <div className="border-b border-border bg-card p-7 sm:border-b-0 sm:border-r">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-foreground">
                Managed
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Wir betreiben den Baustein dauerhaft für Sie.
              </p>
            </div>
            <div className="bg-card p-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-foreground">
                Build &amp; Transfer
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Wir bauen auf, befähigen Ihr Team und übergeben in den
                Eigenbetrieb.
              </p>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            Jeder Baustein ist in beiden Modi verfügbar.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
