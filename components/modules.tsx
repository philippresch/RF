"use client";

import {
  ArrowRight,
  Check,
  GraduationCap,
  Megaphone,
  Newspaper,
  Send,
  Users,
  Workflow,
} from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import {
  isBausteinSelected,
  toggleBaustein,
  useInquirySelection,
} from "@/lib/inquiry";
import { cn } from "@/lib/utils";

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

function ModuleCard({
  module,
  delay,
  selected,
}: {
  module: Module;
  delay: number;
  selected: boolean;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <button
        type="button"
        onClick={() => toggleBaustein(module.name)}
        aria-pressed={selected}
        className={cn(
          "flex h-full w-full cursor-pointer flex-col rounded-xl border bg-card p-7 text-left transition-all duration-200",
          selected
            ? "-translate-y-0.5 border-foreground/40"
            : "border-border hover:border-ring/60"
        )}
      >
        <div className="flex items-center justify-between">
          <module.icon className="size-4 text-muted-foreground" aria-hidden />
          <span
            className={cn(
              "flex size-5 items-center justify-center rounded-full border transition-colors",
              selected
                ? "border-foreground bg-foreground text-background"
                : "border-border text-transparent"
            )}
            aria-hidden="true"
          >
            <Check className="size-3" />
          </span>
        </div>
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
      </button>
    </Reveal>
  );
}

export function Modules() {
  const selection = useInquirySelection();
  const selectedCount = selection.filter((s) => s.startsWith("Baustein:")).length;

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
              lassen. Wählen Sie die Bausteine aus, die Sie interessieren —
              oder lassen Sie den Wachstumsplan entscheiden.
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
                  <ModuleCard
                    key={module.name}
                    module={module}
                    delay={index * 80}
                    selected={isBausteinSelected(selection, module.name)}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Auswahl-Aktion */}
        <div
          className={cn(
            "mt-8 flex justify-center transition-opacity duration-300",
            selectedCount > 0 ? "opacity-100" : "pointer-events-none opacity-0"
          )}
          aria-hidden={selectedCount === 0}
        >
          <Button
            className="h-11 px-7"
            nativeButton={false}
            render={<a href="#kontakt" />}
          >
            {selectedCount === 1
              ? "1 Baustein anfragen"
              : `${selectedCount} Bausteine anfragen`}
            <ArrowRight data-icon="inline-end" />
          </Button>
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
