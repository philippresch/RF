import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";

import { AnchorLink } from "@/components/anchor-link";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Referenzen & Beweise",
  description:
    "Echte Einblicke aus unserem eigenen B2B-Vertrieb: Kalender vor und nach der Kampagne, CRM-Pipeline mit über CHF 104'000 Abschlüssen und Terminbestätigungen bis zur unterschriebenen Offerte – anonymisiert.",
};

/** Klickbares Beweisbild — öffnet die Originalgrösse in neuem Tab. */
function ProofImage({
  src,
  alt,
  width,
  height,
  priority = false,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
}) {
  return (
    <a
      href={src}
      target="_blank"
      rel="noopener noreferrer"
      title="Zum Vergrössern klicken"
      className="block overflow-hidden rounded-xl border border-border bg-white transition-colors hover:border-ring/60"
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className="h-auto w-full"
        sizes="(min-width: 1024px) 896px, 100vw"
      />
    </a>
  );
}

const conversionPairs = [
  {
    kunde: "Kunde 1",
    kanal: "E-Mail-Kampagne",
    termin: { src: "/proof/k1-termin-v4.png", w: 1416, h: 937 },
    bestellung: { src: "/proof/k1-bestellung-v4.png", w: 1430, h: 902 },
  },
  {
    kunde: "Kunde 2",
    kanal: "E-Mail-Kampagne",
    termin: { src: "/proof/k2-termin-v4.png", w: 1394, h: 928 },
    bestellung: { src: "/proof/k2-bestellung-v4.png", w: 1394, h: 960 },
  },
  {
    kunde: "Kunde 3",
    kanal: "E-Mail-Kampagne",
    termin: { src: "/proof/k3-termin-v4.png", w: 1428, h: 923 },
    bestellung: { src: "/proof/k3-bestellung-v4.png", w: 1444, h: 741 },
  },
  {
    kunde: "Kunde 4",
    kanal: "Telefonakquise",
    termin: { src: "/proof/k4-termin-v4.png", w: 1438, h: 996 },
    bestellung: { src: "/proof/k4-bestellung-v4.png", w: 1431, h: 812 },
  },
];

const weitereTermine = [
  { src: "/proof/termin-05-v4.png", w: 1420, h: 763 },
  { src: "/proof/termin-06-v4.png", w: 2076, h: 764 },
  { src: "/proof/termin-07-v4.png", w: 1436, h: 910 },
  { src: "/proof/termin-08-v4.png", w: 1447, h: 683 },
  { src: "/proof/termin-09-v4.png", w: 1427, h: 737 },
  { src: "/proof/termin-10-v4.png", w: 1444, h: 680 },
];

export default function ReferenzenPage() {
  return (
    <>
      <SiteHeader />
      <main className="relative flex-1">
        <div className="mx-auto max-w-6xl">
          {/* Intro */}
          <section className="px-6 pb-16 pt-36 sm:px-10 sm:pt-44">
            <div className="mx-auto max-w-3xl text-center">
              <p className="eyebrow">
                Referenzen
              </p>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-5xl">
                Ergebnisse aus{" "}
                <span className="text-muted-foreground">eigenem Vertrieb</span>
              </h1>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                Alle Ausschnitte stammen aus unserem eigenen B2B-Vertrieb im
                DACH-Markt — mit genau dem Vorgehen, das wir heute für unsere
                Kunden einsetzen. Sämtliche Namen und Firmendaten sind
                anonymisiert. Jedes Bild lässt sich per Klick vergrössern.
              </p>
            </div>
          </section>

          {/* Kalender vorher/nachher */}
          <section className="border-t border-border px-6 py-16 sm:px-10">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Der Kalender: vor und nach der Kampagne
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Gleicher Kalender, wenige Wochen dazwischen: Vor dem
              Kampagnenstart vereinzelte Termine — danach Wochen gefüllt mit
              qualifizierten Erstgesprächen.
            </p>
            <div className="mt-8 grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
              <div>
                <Badge variant="outline" className="mb-3 h-auto px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  Vor der Kampagne
                </Badge>
                <ProofImage
                  src="/proof/kalender-vorher-v5.png"
                  alt="Terminkalender vor der Kampagne: einzelne Termine in einer Woche"
                  width={1780}
                  height={964}
                  priority
                />
              </div>
              <div>
                <Badge className="mb-3 h-auto px-3 py-1 text-[10px] font-semibold uppercase tracking-widest">
                  Nach der Kampagne
                </Badge>
                <ProofImage
                  src="/proof/kalender-nachher-v5.png"
                  alt="Terminkalender nach der Kampagne: vier Wochen gefüllt mit qualifizierten Erstgesprächen"
                  width={1784}
                  height={1250}
                  priority
                />
              </div>
            </div>
          </section>

          {/* Pipeline */}
          <section className="border-t border-border px-6 py-16 sm:px-10">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Knapp CHF 2 Millionen in der Pipeline
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              CRM-Pipeline mit einem Gesamtwert von knapp CHF 2 Millionen —
              über CHF 104&#8217;000 davon bereits abgeschlossen.
            </p>
            <div className="mt-8">
              <ProofImage
                src="/proof/pipeline-v4.png"
                alt="CRM-Pipeline mit knapp CHF 2 Millionen Gesamtwert und über CHF 104'000 abgeschlossenem Umsatz"
                width={4190}
                height={2502}
              />
            </div>
          </section>

          {/* Termin → Bestellung */}
          <section className="border-t border-border px-6 py-16 sm:px-10">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Vom Termin zur Bestellung
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Vier vollständige Verläufe: zuerst die Terminbestätigung des
              Entscheiders, darunter die spätere Bestellung bzw.
              unterschriebene Offerte desselben Kunden.
            </p>

            {/* Gross und untereinander, damit jeder Ausschnitt ohne Klick lesbar ist */}
            <div className="mx-auto mt-10 max-w-3xl space-y-20">
              {conversionPairs.map((pair) => (
                <div key={pair.kunde}>
                  <div className="mb-5 flex items-center gap-3">
                    <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-foreground">
                      {pair.kunde}
                    </p>
                    <Badge variant="outline" className="h-auto px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                      {pair.kanal}
                    </Badge>
                    <div className="h-px flex-1 bg-border" aria-hidden="true" />
                  </div>
                  <Reveal>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Termin
                    </p>
                    <ProofImage
                      src={pair.termin.src}
                      alt={`${pair.kunde}: Terminbestätigung des Entscheiders (${pair.kanal})`}
                      width={pair.termin.w}
                      height={pair.termin.h}
                    />
                  </Reveal>
                  <div
                    className="my-5 flex justify-center text-muted-foreground"
                    aria-hidden="true"
                  >
                    <ArrowDown className="size-5" />
                  </div>
                  <Reveal>
                    <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      Bestellung
                    </p>
                    <ProofImage
                      src={pair.bestellung.src}
                      alt={`${pair.kunde}: Bestellung bzw. unterschriebene Offerte`}
                      width={pair.bestellung.w}
                      height={pair.bestellung.h}
                    />
                  </Reveal>
                </div>
              ))}
            </div>
          </section>

          {/* Weitere Terminbestätigungen */}
          <section className="border-t border-border px-6 py-16 sm:px-10">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Qualifizierte Termine durch hochpersonalisierte E-Mail-Sequenzen
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Eine Auswahl weiterer Antworten von Entscheidern —
              Geschäftsleitung, Betriebs- und Bereichsleitung.
            </p>
            {/* Zickzack-Galerie: grosse, gut lesbare Ausschnitte, die beim
                Scrollen abwechselnd von links und rechts hereingleiten */}
            <div className="mt-10 space-y-12">
              {weitereTermine.map((img, i) => (
                <Reveal
                  key={img.src}
                  from={i % 2 === 0 ? "left" : "right"}
                  className={
                    i % 2 === 0 ? "max-w-3xl lg:mr-auto" : "max-w-3xl lg:ml-auto"
                  }
                >
                  <ProofImage
                    src={img.src}
                    alt={`Terminbestätigung eines Entscheiders aus der Outbound-Kampagne (Beispiel ${i + 5})`}
                    width={img.w}
                    height={img.h}
                  />
                </Reveal>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="border-t border-border px-6 py-20 text-center sm:px-10">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Solche Ergebnisse für Ihr Unternehmen?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              In einer kostenfreien Erstanalyse zeigen wir, wo Ihr grösster
              Wachstumshebel liegt.
            </p>
            <Button
              className="mt-8 h-11 px-7"
              nativeButton={false}
              render={<AnchorLink href="/#kontakt" />}
            >
              Erstanalyse vereinbaren
              <ArrowRight data-icon="inline-end" />
            </Button>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
