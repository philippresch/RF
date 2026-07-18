"use client";

import { useState } from "react";
import { Check } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Service = {
  name: string;
  tagline: string;
  description: string;
  features: string[];
};

const services: Service[] = [
  {
    name: "Go-to-Market-Strategie",
    tagline: "Beratung",
    description:
      "Wir schaffen die strategische Grundlage für planbares Umsatzwachstum – von der Positionierung bis zur Wachstums-Roadmap.",
    features: [
      "Analyse von Zielmarkt, Wettbewerb und idealem Kundenprofil",
      "Positionierung und Angebotsarchitektur",
      "Priorisierung der Vertriebskanäle und Wachstums-Roadmap",
      "Messbare Ziele und KPI-Framework für Ihren Vertrieb",
    ],
  },
  {
    name: "Neukundengewinnung",
    tagline: "Aufbau & Betrieb",
    description:
      "Wir bauen Ihre Neukundengewinnung auf und betreiben sie für Sie – qualifizierte Termine mit Entscheidern entstehen im laufenden Betrieb.",
    features: [
      "Quellenverifizierte Kontaktrecherche und CRM-Sequenzen",
      "Multichannel-Kampagnen über Telefon, E-Mail und LinkedIn",
      "Domains & Postfächer auf Ihren eigenen Konten (inkl. Warmup)",
      "Kontinuierlich qualifizierte Termine ab dem zweiten Monat",
      "Wöchentliche Optimierung & volle Transparenz in Ihrem CRM",
    ],
  },
  {
    name: "Vertriebsaufbau & Team",
    tagline: "Aufbau & Befähigung",
    description:
      "Wir bauen Prozesse und Team für Ihren Eigenbetrieb auf – von CRM und Playbooks bis zur Besetzung Ihrer Vertriebsrollen.",
    features: [
      "Vertriebsprozesse, CRM-Automation und Playbooks",
      "Aufbau und Besetzung Ihres Vertriebsteams (SDR, AE)",
      "Einarbeitung und Befähigung im laufenden Betrieb",
      "Coaching und strukturierte Übergabe in den Eigenbetrieb",
    ],
  },
];

export function Services() {
  const [selected, setSelected] = useState(1);

  return (
    <section id="leistungen" className="border-t border-foreground/10 py-24 sm:py-32">
      <div className="px-6 sm:px-10">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
              Leistungen
            </p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Strategie, Neukundengewinnung und Vertriebsaufbau – aus einer Hand
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Als Wachstumspartner begleiten wir Sie entlang der gesamten
              Umsatzkette. Die Module lassen sich einzeln oder kombiniert
              beauftragen – Grundlage ist eine kostenfreie Erstanalyse.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {services.map((service, index) => {
            const isSelected = index === selected;
            return (
              <Reveal key={service.name} delay={index * 80} className="h-full">
                <Card
                  data-selected={isSelected}
                  onClick={() => setSelected(index)}
                  onFocusCapture={() => setSelected(index)}
                  className={cn(
                    "relative h-full cursor-pointer border bg-card ring-0 transition-all duration-300 [--card-spacing:--spacing(7)]",
                    isSelected
                      ? "-translate-y-1 border-foreground/40"
                      : "border-border hover:border-ring/60"
                  )}
                >
                  <CardHeader>
                    <CardTitle className="text-[11px] font-bold uppercase tracking-[0.22em] text-foreground">
                      {service.name}
                    </CardTitle>
                    <Badge
                      variant={isSelected ? "default" : "outline"}
                      className="mt-2 h-auto px-3 py-1 text-[10px] font-semibold uppercase tracking-widest transition-colors"
                    >
                      {service.tagline}
                    </Badge>
                    <CardDescription className="mt-3 leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex flex-1 flex-col">
                    <ul className="flex-1 space-y-3.5 border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex gap-3">
                          <Check
                            className="mt-0.5 size-4 shrink-0 text-foreground"
                            aria-hidden="true"
                          />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
                      Individuelles Angebot nach kostenfreier Erstanalyse.
                    </p>
                  </CardContent>

                  <CardFooter className="border-border">
                    <Button
                      variant={isSelected ? "default" : "outline"}
                      className="h-10 w-full"
                      nativeButton={false}
                      render={<a href="#kontakt" />}
                    >
                      Gespräch vereinbaren
                    </Button>
                  </CardFooter>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
