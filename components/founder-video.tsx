import Image from "next/image";

import { Reveal } from "@/components/reveal";

/**
 * Founder-Video — bis das Video fertig ist, zeigt die Sektion ein Vorschaubild.
 * TODO: Video-Embed einsetzen (z. B. YouTube unlisted, Vimeo oder
 * self-hosted <video>) und das Bild ersetzen.
 */
export function FounderVideo() {
  return (
    <section className="px-6 pb-24 sm:px-10 sm:pb-32">
      <Reveal>
        <div className="mx-auto max-w-3xl">
          <Image
            src="/platzhalter-video.jpg"
            alt="Vorschaubild zum Founder-Video von R&F Growth Partners"
            width={1020}
            height={692}
            className="w-full rounded-xl border border-border"
            sizes="(min-width: 768px) 768px, 100vw"
          />
        </div>
      </Reveal>
    </section>
  );
}
