import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export function Audit() {
  return (
    <section id="audit" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <Reveal>
          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-8 text-center sm:p-12">
<p className="eyebrow">Der Einstieg</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Das Wachstums-Audit
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Jede Zusammenarbeit beginnt mit dem Wachstums-Audit: zwei
              Wochen, Festpreis, bei Folgeauftrag vollständig angerechnet. Sie
              erhalten die Diagnose Ihres Engpasses, ein Zahlenmodell für Ihr
              Umsatzziel und Ihren Wachstumsplan mit priorisierten Bausteinen
              — umsetzbar mit uns oder in Eigenregie.
            </p>
            <Button
              className="mt-8 h-11 px-7"
              nativeButton={false}
              render={<a href="#kontakt" />}
            >
              Erstanalyse vereinbaren
              <ArrowRight data-icon="inline-end" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
