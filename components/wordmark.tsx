import { cn } from "@/lib/utils";

/**
 * Leverise-Wortmarke als Text (kein Bild), entsprechend dem offiziellen
 * Logo: LEVERISE im Markenverlauf, gesperrte Subline GROWTH PARTNERS.
 * Grösse skaliert über font-size des Parents, alle Masse sind em-basiert.
 * Kontrast: als Logotyp von WCAG 1.4.3 ausgenommen; eingesetzt nur auf Ink.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex flex-col leading-none", className)}>
      <span className="bg-gradient-to-r from-brand-primary via-brand-mid to-brand-accent bg-clip-text font-bold tracking-[0.06em] text-transparent">
        LEVERISE
      </span>
      <span
        className="mt-[0.4em] text-[0.44em] font-semibold tracking-[0.3em] text-foreground"
      >
        GROWTH&nbsp;PARTNERS
      </span>
    </span>
  );
}
