import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDown, ArrowRight } from "lucide-react";

import { AnchorLink } from "@/components/anchor-link";
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
        sizes="(min-width: 1024px) 50vw, 100vw"
      />
    </a>
  );
}

const conversionPairs = [
  {
    kunde: "Kunde 1",
    kanal: "E-Mail-Kampagne",
    termin: { src: "/proof/k1-termin.png", w: 1460, h: 1274 },
    bestellung: { src: "/proof/k1-bestellung.png", w: 1466, h: 1222 },
  },
  {
    kunde: "Kunde 2",
    kanal: "E-Mail-Kampagne",
    termin: { src: "/proof/k2-termin.png", w: 1394, h: 928 },
    bestellung: { src: "/proof/k2-bestellung.png", w: 1394, h: 960 },
  },
  {
    kunde: "Kunde 3",
    kanal: "E-Mail-Kampagne",
    termin: { src: "/proof/k3-termin.png", w: 1470, h: 1448 },
    bestellung: { src: "/proof/k3-bestellung.png", w: 1482, h: 1248 },
  },
  {
    kunde: "Kunde 4",
    kanal: "Telefonakquise",
    termin: { src: "/proof/k4-termin.png", w: 1438, h: 996 },
    bestellung: { src: "/proof/k4-bestellung.png", w: 1480, h: 1282 },
  },
];

const weitereTermine = [
  { src: "/proof/termin-05-v2.png", w: 1466, h: 1344 },
  { src: "/proof/termin-06.png", w: 2154, h: 1428 },
  { src: "/proof/termin-07.png", w: 1462, h: 1252 },
  { src: "/proof/termin-08.png", w: 1466, h: 1110 },
  { src: "/proof/termin-09.png", w: 1454, h: 1242 },
  { src: "/proof/termin-10.png", w: 1462, h: 1390 },
];

export default function ReferenzenPage() {
  return (
    <>
      <SiteHeader />
      <main className="noise-overlay relative flex-1">
        <div className="mx-auto max-w-6xl border-x border-foreground/15">
          {/* Intro */}
          <section className="px-6 pb-16 pt-36 sm:px-10 sm:pt-44">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Referenzen
              </p>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
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
          <section className="border-t border-foreground/10 px-6 py-16 sm:px-10">
            <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
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
                  src="/proof/kalender-vorher.png"
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
                  src="/proof/kalender-nachher.png"
                  alt="Terminkalender nach der Kampagne: vier Wochen gefüllt mit qualifizierten Erstgesprächen"
                  width={1784}
                  height={1250}
                  priority
                />
              </div>
            </div>
          </section>

          {/* Pipeline */}
          <section className="border-t border-foreground/10 px-6 py-16 sm:px-10">
            <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Knapp CHF 2 Millionen in der Pipeline
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              CRM-Pipeline mit einem Gesamtwert von knapp CHF 2 Millionen —
              über CHF 104&#8217;000 davon bereits abgeschlossen («Won»),
              weitere sechsstellige Stufen in Verhandlung. Jede Karte ist ein
              realer Deal aus der Kampagne.
            </p>
            <div className="mt-8">
              <ProofImage
                src="/proof/pipeline-v2.png"
                alt="CRM-Pipeline mit knapp CHF 2 Millionen Gesamtwert und über CHF 104'000 abgeschlossenem Umsatz"
                width={4190}
                height={2502}
              />
            </div>
          </section>

          {/* Termin → Bestellung */}
          <section className="border-t border-foreground/10 px-6 py-16 sm:px-10">
            <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Vom Termin zur Bestellung
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Vier vollständige Verläufe: links die Terminbestätigung des
              Entscheiders, rechts die spätere Bestellung bzw. unterschriebene
              Offerte desselben Kunden.
            </p>

            <div className="mt-10 space-y-14">
              {conversionPairs.map((pair) => (
                <div key={pair.kunde}>
                  <div className="mb-4 flex items-center gap-3">
                    <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-foreground">
                      {pair.kunde}
                    </p>
                    <Badge variant="outline" className="h-auto px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground">
                      {pair.kanal}
                    </Badge>
                    <div className="h-px flex-1 bg-border" aria-hidden="true" />
                  </div>
                  <div className="grid grid-cols-1 items-center gap-4 lg:grid-cols-[1fr_auto_1fr]">
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        Termin
                      </p>
                      <ProofImage
                        src={pair.termin.src}
                        alt={`${pair.kunde}: Terminbestätigung des Entscheiders (${pair.kanal})`}
                        width={pair.termin.w}
                        height={pair.termin.h}
                      />
                    </div>
                    <div className="flex justify-center text-muted-foreground" aria-hidden="true">
                      <ArrowDown className="size-5 lg:hidden" />
                      <ArrowRight className="hidden size-5 lg:block" />
                    </div>
                    <div>
                      <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        Bestellung
                      </p>
                      <ProofImage
                        src={pair.bestellung.src}
                        alt={`${pair.kunde}: Bestellung bzw. unterschriebene Offerte`}
                        width={pair.bestellung.w}
                        height={pair.bestellung.h}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Weitere Terminbestätigungen */}
          <section className="border-t border-foreground/10 px-6 py-16 sm:px-10">
            <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Qualifizierte Termine durch hochpersonalisierte E-Mail-Sequenzen
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Eine Auswahl weiterer Antworten von Entscheidern —
              Geschäftsleitung, Betriebs- und Bereichsleitung.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {weitereTermine.map((img, i) => (
                <ProofImage
                  key={img.src}
                  src={img.src}
                  alt={`Terminbestätigung eines Entscheiders aus der Outbound-Kampagne (Beispiel ${i + 5})`}
                  width={img.w}
                  height={img.h}
                />
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="border-t border-foreground/10 px-6 py-20 text-center sm:px-10">
            <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
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
