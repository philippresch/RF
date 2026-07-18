import { Contact } from "@/components/contact";
import { Faq } from "@/components/faq";
import { Hero } from "@/components/hero";
import { Process } from "@/components/process";
import { Reveal } from "@/components/reveal";
import { Services } from "@/components/services";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Trust } from "@/components/trust";
import { faqItems } from "@/lib/faq";
import { siteConfig } from "@/lib/site";

/**
 * Structured Data (JSON-LD) für SEO & GEO:
 * ProfessionalService beschreibt das Unternehmen und die Leistungen,
 * FAQPage macht die FAQ-Inhalte für Such- und KI-Systeme maschinenlesbar.
 */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      legalName: siteConfig.legal.companyName,
      url: siteConfig.url,
      email: siteConfig.email,
      telephone: siteConfig.phone,
      description: siteConfig.description,
      slogan: "Ihr Wachstumspartner für B2B-Tech & Robotic",
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.legal.street,
        addressLocality: "Wetzikon",
        postalCode: "8620",
        addressRegion: "ZH",
        addressCountry: "CH",
      },
      founder: siteConfig.legal.management.map((name) => ({
        "@type": "Person",
        name,
        jobTitle: "Geschäftsführer",
      })),
      areaServed: [
        { "@type": "Country", name: "Deutschland" },
        { "@type": "Country", name: "Österreich" },
        { "@type": "Country", name: "Schweiz" },
      ],
      knowsAbout: [
        "B2B Vertriebsberatung",
        "Go-to-Market-Strategie",
        "Neukundengewinnung",
        "Umsatzwachstum",
        "Vertriebsaufbau",
        "B2B Leadgenerierung",
        "Robotik",
        "B2B Technologie",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Leistungen",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Go-to-Market-Strategie",
              description:
                "Strategische Grundlage für planbares Umsatzwachstum: Zielmarkt, Positionierung, Angebotsarchitektur und Wachstums-Roadmap.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Neukundengewinnung",
              description:
                "Aufbau und Betrieb der Neukundengewinnung: quellenverifizierte Kontaktrecherche, Multichannel-Kampagnen und qualifizierte B2B-Termine.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Vertriebsaufbau & Team",
              description:
                "Aufbau von Vertriebsprozessen und -teams: CRM-Automation, Playbooks, Besetzung von Vertriebsrollen und Befähigung zum Eigenbetrieb.",
            },
          },
        ],
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteConfig.url}/#faq`,
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <SiteHeader />
      <main className="noise-overlay relative flex-1">
        {/* Optimus-Grid: feine vertikale Linien rahmen den Inhalt ein */}
        <div className="mx-auto max-w-6xl border-x border-foreground/15">
          <Hero />
          <Services />
          <Process />
          <Reveal>
            <Trust />
          </Reveal>
          <Reveal>
            <Faq />
          </Reveal>
          <Reveal>
            <Contact />
          </Reveal>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
