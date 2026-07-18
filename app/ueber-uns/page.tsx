import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "R&F Consulting sind Matthias Frech und Philipp Resch: Gründer der Aurobots GmbH, die selbst Robotik im DACH-Markt vertrieben haben – heute Wachstumspartner für B2B-Tech- und Robotik-Unternehmen.",
};

const founders = [
  {
    name: "Matthias Frech",
    role: "Geschäftsführer & Mitgründer",
    quote:
      "Robotik und KI übernehmen wiederkehrende Arbeiten – und schaffen Zeit für Fortschritt, Kreativität und das, was uns wirklich voranbringt.",
  },
  {
    name: "Philipp Resch",
    role: "Geschäftsführer & Mitgründer",
    quote:
      "Wir stehen am Anfang einer neuen Ära. Entscheidend ist die intelligente Zusammenarbeit zwischen Mensch und Maschine.",
  },
];

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": `${siteConfig.url}/ueber-uns#about`,
  mainEntity: {
    "@type": "Organization",
    name: siteConfig.name,
    legalName: siteConfig.legal.companyName,
    url: siteConfig.url,
    founder: founders.map((f) => ({
      "@type": "Person",
      name: f.name,
      jobTitle: "Geschäftsführer",
      worksFor: { "@type": "Organization", name: siteConfig.legal.companyName },
    })),
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.legal.street,
      addressLocality: "Wetzikon",
      postalCode: "8620",
      addressRegion: "ZH",
      addressCountry: "CH",
    },
  },
};

export default function UeberUnsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <SiteHeader />
      <main className="noise-overlay relative flex-1">
        <div className="mx-auto max-w-6xl border-x border-foreground/15">
          {/* Intro */}
          <section className="px-6 pb-20 pt-36 sm:px-10 sm:pt-44">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                Über uns
              </p>
              <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Vertriebsberatung aus{" "}
                <span className="text-muted-foreground">eigener Praxis</span>
              </h1>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
                {siteConfig.name} ist die Beratungsmarke der{" "}
                {siteConfig.legal.companyName} aus Wetzikon ZH. Als Gründer
                haben wir mit Aurobots selbst Robotik im DACH-Markt
                vertrieben – von der ersten Kaltakquise bis zum
                Robots-as-a-Service-Geschäftsmodell. Genau diese
                Vertriebspraxis stellen wir heute Technologie- und
                Robotik-Unternehmen zur Verfügung.
              </p>
            </div>
          </section>

          {/* Gründer */}
          <section className="border-t border-foreground/10 px-6 py-20 sm:px-10">
            <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:grid-cols-2">
              {founders.map((founder) => (
                <div
                  key={founder.name}
                  className="rounded-xl border border-border bg-card p-8 transition-colors hover:border-ring/60"
                >
                  <p className="text-base font-bold text-foreground">
                    {founder.name}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {founder.role}
                  </p>
                  <blockquote className="mt-6 border-l-2 border-foreground/20 pl-4 text-sm leading-relaxed text-muted-foreground">
                    «{founder.quote}»
                  </blockquote>
                </div>
              ))}
            </div>
          </section>

          {/* Warum wir */}
          <section className="border-t border-foreground/10 px-6 py-20 sm:px-10">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                Warum ein Wachstumspartner mit Robotik-Hintergrund?
              </h2>
              <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>
                  Ob Robotik, Software oder KI: Erklärungsbedürftige
                  B2B-Lösungen folgen eigenen Gesetzen. Die Verkaufszyklen
                  sind lang, die Entscheider anspruchsvoll, und der Vertrieb
                  muss die Sprache von Technik, Betrieb und Geschäftsführung
                  gleichermassen sprechen. Wir kennen diese Realität nicht
                  aus Fallstudien, sondern aus dem eigenen Unternehmen.
                </p>
                <p>
                  Beim Aufbau von Aurobots haben wir Zielkundenprofile
                  geschärft, Outbound-Prozesse aufgebaut, ein CRM-gestütztes
                  Vertriebssystem entwickelt und im Markt bewiesen – im
                  Wettbewerb, mit echten Quoten. Aus dieser Praxis stammen
                  unsere Methodik, unsere Playbooks und unser Anspruch:
                  Wachstum messbar zu machen statt Aktivität zu verkaufen.
                </p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <section className="border-t border-foreground/10 px-6 py-20 text-center sm:px-10">
            <h2 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Lernen Sie uns kennen
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              In einer kostenfreien Erstanalyse besprechen wir Ihre aktuelle
              Vertriebssituation – direkt mit der Geschäftsführung.
            </p>
            <Button
              className="mt-8 h-11 px-7"
              nativeButton={false}
              render={<Link href="/#kontakt" />}
            >
              Erstgespräch vereinbaren
              <ArrowRight data-icon="inline-end" />
            </Button>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
