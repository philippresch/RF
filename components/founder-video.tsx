import { Play } from "lucide-react";

import { Reveal } from "@/components/reveal";

/**
 * Founder-Video — [Platzhalter].
 * TODO vor Launch: Video-Embed einsetzen (z. B. YouTube unlisted, Vimeo
 * oder self-hosted <video>) und Platzhalter-Box ersetzen.
 */
export function FounderVideo() {
  return (
    <section className="px-6 pb-24 sm:px-10 sm:pb-32">
      <Reveal>
        <div className="mx-auto max-w-3xl">
          <div className="flex aspect-video flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card text-center">
            <span className="flex size-14 items-center justify-center rounded-full border border-border">
              <Play className="ml-0.5 size-5 text-muted-foreground" aria-hidden="true" />
            </span>
            <p className="mt-5 text-sm font-medium text-foreground">
              Founder-Video
            </p>
            <p className="mt-1 max-w-sm px-6 text-xs text-muted-foreground">
              [Platzhalter — 60–90 Sekunden: Wer wir sind, welchen Engpass wir
              lösen und wie die Zusammenarbeit abläuft.]
            </p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
