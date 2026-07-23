import { cn } from "@/lib/utils";

/**
 * Leverise-Wortmarke als Text (kein Bild): LEVERISE mit gesperrter
 * Subline GROWTH PARTNERS. Grösse skaliert über font-size des Parents,
 * alle Masse sind em-basiert.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex flex-col leading-none", className)}>
      <span className="font-bold tracking-[0.06em] text-foreground">
        LEVERISE
      </span>
      <span
        className="mt-[0.4em] text-[0.36em] font-semibold tracking-[0.3em] text-muted-foreground"
        aria-hidden="true"
      >
        GROWTH&nbsp;PARTNERS
      </span>
    </span>
  );
}
