import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Impressum",
  description: `Impressum und Anbieterkennzeichnung von ${siteConfig.name}, einer Marke der ${siteConfig.legal.companyName}.`,
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  const { legal } = siteConfig;
  return (
    <LegalPage title="Impressum">
      <section className="space-y-3">
        <h2>Angaben zum Unternehmen</h2>
        <p>
          {siteConfig.name} ist eine Marke der
          <br />
          {legal.companyName}
          <br />
          {legal.street}
          <br />
          {legal.city}
          <br />
          {legal.country}
        </p>
      </section>

      <section className="space-y-3">
        <h2>Geschäftsführung</h2>
        <p>{legal.management.join(", ")}</p>
      </section>

      <section className="space-y-3">
        <h2>Kontakt</h2>
        <p>
          E-Mail: {siteConfig.email}
          <br />
          Telefon: {siteConfig.phone}
        </p>
      </section>

      <section className="space-y-3">
        <h2>Registereintrag</h2>
        <p>
          Eingetragen im {legal.register}
          <br />
          UID-Nummer: {legal.uid}
        </p>
      </section>

      <section className="space-y-3">
        <h2>Haftung für Inhalte und Links</h2>
        <p>
          Die Inhalte dieser Website wurden mit grösstmöglicher Sorgfalt
          erstellt. Für Richtigkeit, Vollständigkeit und Aktualität wird keine
          Gewähr übernommen. Trotz sorgfältiger inhaltlicher Kontrolle
          übernehmen wir keine Haftung für die Inhalte externer Links; für den
          Inhalt der verlinkten Seiten sind ausschliesslich deren Betreiber
          verantwortlich.
        </p>
      </section>

      <section className="space-y-3">
        <h2>Urheberrecht</h2>
        <p>
          Sämtliche Inhalte dieser Website (Texte, Grafiken, Layout) sind
          urheberrechtlich geschützt. Jede Verwendung ausserhalb der Grenzen
          des Urheberrechts bedarf der vorherigen schriftlichen Zustimmung der{" "}
          {legal.companyName}.
        </p>
      </section>

      <section className="space-y-3">
        <h2>Anwendbares Recht und Gerichtsstand</h2>
        <p>
          Es gilt ausschliesslich schweizerisches Recht. Gerichtsstand ist{" "}
          {legal.jurisdiction}.
        </p>
      </section>
    </LegalPage>
  );
}
