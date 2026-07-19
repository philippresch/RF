import { Audit } from "@/components/audit";
import { Contact } from "@/components/contact";
import { Faq } from "@/components/faq";
import { FounderVideo } from "@/components/founder-video";
import { Hero } from "@/components/hero";
import { Modules } from "@/components/modules";
import { Packages } from "@/components/packages";
import { Process } from "@/components/process";
import { Proof } from "@/components/proof";
import { Reveal } from "@/components/reveal";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StartingPoints } from "@/components/starting-points";
import { faqItems } from "@/lib/faq";
import { siteConfig } from "@/lib/site";

/**
 * Structured Data (JSON-LD) für SEO & GEO:
 * ProfessionalService beschreibt das Unternehmen und die Leistungsbausteine,
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
      parentOrganization: {
        "@type": "Organization",
        name: siteConfig.legal.companyName,
        url: "https://www.aurobots.ch",
      },
      sameAs: ["https://www.aurobots.ch"],
      areaServed: [
        { "@type": "Country", name: "Deutschland" },
        { "@type": "Country", name: "Österreich" },
        { "@type": "Country", name: "Schweiz" },
      ],
      knowsAbout: [
        "B2B Vertriebsberatung",
        "Neukundengewinnung",
        "B2B Leadgenerierung",
        "LinkedIn Ads",
        "Outbound Vertrieb",
        "Vertriebsaufbau",
        "Umsatzwachstum",
        "Robotik",
        "B2B Technologie",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Leistungsbausteine",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Wachstums-Audit",
              description:
                "Zweiwöchige Diagnose zum Festpreis: Engpass-Analyse, Zahlenmodell für das Umsatzziel und Wachstumsplan mit priorisierten Leistungsbausteinen.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Paid Ads",
              description:
                "LinkedIn- und Google-Kampagnen inklusive Landingpage, Tracking und Retargeting für planbare Inbound-Anfragen.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Content & Sichtbarkeit",
              description:
                "Case Studies und LinkedIn-Präsenz für Unternehmen und Geschäftsführung.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Outbound-System",
              description:
                "Quellenverifizierte Kontaktrecherche und Multichannel-Kampagnen über Telefon, E-Mail und LinkedIn für qualifizierte Termine mit Entscheidern.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Vertriebsprozess & CRM",
              description:
                "Pipeline-Stufen, Automationen, Playbooks und Forecasting.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Team",
              description:
                "Rollenprofile, Recruiting-Unterstützung, Onboarding und Befähigung von Vertriebsmitarbeitern.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Sales-Coaching",
              description:
                "Wöchentliche Pipeline-Reviews und Gesprächscoaching für Vertriebsteams.",
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
          <FounderVideo />
          <StartingPoints />
          <Process />
          <Modules />
          <Packages />
          <Proof />
          <Audit />
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
