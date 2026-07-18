import { CalendarDays } from "lucide-react";

import { ContactForm } from "@/components/contact-form";
import { siteConfig } from "@/lib/site";

export function Contact() {
  return (
    <section id="kontakt" className="border-t border-foreground/10 py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 sm:px-10">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            Kontakt
          </p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Kostenfreie Erstanalyse vereinbaren
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            30 Minuten, keine Verkaufspräsentation: Wir analysieren Ihre
            aktuelle Situation entlang der gesamten Umsatzkette und zeigen
            konkret, wo Ihr Engpass liegt.
          </p>
        </div>

        {/* Kalender-Booking-Platzhalter — hier Cal.com/Calendly einbetten */}
        <div className="mt-12 flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card px-6 py-12 text-center">
          <CalendarDays
            className="size-6 text-muted-foreground"
            aria-hidden="true"
          />
          <p className="mt-4 text-sm font-medium text-foreground">
            Termin direkt online buchen
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Hier wird Ihr Booking-Tool (z.&nbsp;B. Cal.com oder Calendly)
            eingebettet.
          </p>
        </div>

        <div className="my-10 flex items-center gap-4" aria-hidden="true">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs uppercase tracking-widest text-muted-foreground">
            oder per Nachricht
          </span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <ContactForm />

        <p className="mt-8 text-center text-sm text-muted-foreground">
          Direkter Kontakt:{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-medium text-foreground underline-offset-4 hover:underline"
          >
            {siteConfig.email}
          </a>
        </p>
      </div>
    </section>
  );
}
