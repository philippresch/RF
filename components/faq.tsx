import { Plus } from "lucide-react";

import { faqItems } from "@/lib/faq";

/**
 * FAQ als native <details>-Elemente: zugänglich, ohne JavaScript,
 * und der Inhalt ist für Suchmaschinen und KI-Crawler direkt im DOM.
 */
export function Faq() {
  return (
    <section id="faq" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 sm:px-10">
        <div className="text-center">
<p className="eyebrow">FAQ</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Häufige Fragen zur Zusammenarbeit
          </h2>
        </div>

        <div className="mt-14 divide-y divide-border border-y border-border">
          {faqItems.map((item) => (
            <details key={item.question} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-base font-semibold text-foreground outline-none transition-colors hover:text-foreground/80 focus-visible:ring-2 focus-visible:ring-ring rounded-sm [&::-webkit-details-marker]:hidden">
                {item.question}
                <Plus
                  className="size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                />
              </summary>
              <p className="pb-6 text-sm leading-relaxed text-muted-foreground">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
