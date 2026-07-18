import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "AGB",
  description: `Allgemeine Geschäftsbedingungen von ${siteConfig.name}, einer Marke der ${siteConfig.legal.companyName}.`,
  robots: { index: false, follow: true },
};

/**
 * Adaptiert von den AGB der Aurobots GmbH (Version 2, 09.01.2026) auf
 * Beratungs- und Dienstleistungsmandate der Marke R&F Consulting.
 * TODO vor Launch: juristisch prüfen lassen.
 */
export default function AgbPage() {
  const { legal } = siteConfig;
  return (
    <LegalPage title="Allgemeine Geschäftsbedingungen (AGB)">
      <section className="space-y-3">
        <h2>1. Geltungsbereich</h2>
        <p>
          Diese AGB gelten für sämtliche Angebote, Verträge und
          Dienstleistungen der {legal.companyName} unter der Marke{" "}
          {siteConfig.name} in den Bereichen Beratung, Vertriebsaufbau und
          Betrieb von Vertriebsprozessen. Abweichende Bedingungen des Kunden
          gelten nur bei ausdrücklicher schriftlicher Bestätigung.
        </p>
      </section>

      <section className="space-y-3">
        <h2>2. Vertragsabschluss</h2>
        <p>
          Ein Vertrag kommt zustande durch die schriftliche oder elektronische
          Bestätigung eines Angebots durch den Kunden, durch Bestellung mit
          anschliessender Auftragsbestätigung oder durch gemeinsame
          Unterzeichnung eines Vertragsdokuments.
        </p>
      </section>

      <section className="space-y-3">
        <h2>3. Preise und Zahlungsbedingungen</h2>
        <p>
          Alle Preisangaben verstehen sich in Schweizer Franken (CHF)
          exklusive Mehrwertsteuer, sofern nicht anders ausgewiesen.
          Preisanpassungen bleiben vorbehalten; auf frühere Konditionen
          besteht kein Anspruch.
        </p>
        <p>
          Rechnungen sind innert 14 Tagen netto ab Rechnungsdatum zahlbar. Bei
          Zahlungsverzug wird ein Verzugszins von 5% p.a. berechnet.
          Beanstandungen von Rechnungen sind innerhalb von 7 Tagen schriftlich
          mitzuteilen.
        </p>
      </section>

      <section className="space-y-3">
        <h2>4. Leistungserbringung und Mitwirkungspflichten</h2>
        <p>
          Der Umfang der Leistungen ergibt sich aus dem jeweiligen Angebot.
          Der Kunde stellt die für die Leistungserbringung erforderlichen
          Mitwirkungen rechtzeitig bereit, insbesondere Zugänge zu CRM- und
          Kommunikationssystemen sowie – soweit vereinbart – Domains und
          Postfächer auf eigenen Konten. Verzögerungen infolge fehlender
          Mitwirkung gehen nicht zulasten von {siteConfig.name}.
        </p>
      </section>

      <section className="space-y-3">
        <h2>5. Vertragslaufzeit und Kündigung</h2>
        <p>
          Laufzeiten ergeben sich aus dem jeweiligen Angebot. Sofern nicht
          abweichend vereinbart, sind laufende Mandate nach Abschluss der
          Anlaufphase monatlich kündbar. Projekte mit festem Umfang enden mit
          der Abnahme der vereinbarten Leistungen.
        </p>
      </section>

      <section className="space-y-3">
        <h2>6. Gewährleistung</h2>
        <p>
          {siteConfig.name} erbringt die Leistungen mit geschäftsüblicher
          Sorgfalt nach anerkannten Methoden. Bei Beratungs- und
          Dienstleistungsmandaten wird – soweit nicht ausdrücklich schriftlich
          zugesichert – kein bestimmter wirtschaftlicher Erfolg geschuldet,
          insbesondere keine konkreten Umsatz- oder Abschlusszahlen.
        </p>
      </section>

      <section className="space-y-3">
        <h2>7. Haftung</h2>
        <p>
          Die Haftung ist beschränkt auf Schäden, die durch Vorsatz oder grobe
          Fahrlässigkeit verursacht wurden, sowie auf Personenschäden und
          Ansprüche nach Produktehaftpflichtgesetz. Die Haftung für
          Produktionsausfall, entgangenen Gewinn und Folgeschäden ist – soweit
          gesetzlich zulässig – ausgeschlossen.
        </p>
      </section>

      <section className="space-y-3">
        <h2>8. Geistiges Eigentum</h2>
        <p>
          Für den Kunden individuell erstellte Arbeitsergebnisse (z.&nbsp;B.
          Playbooks, Vorlagen, Runbooks) gehen mit vollständiger Bezahlung in
          dessen Nutzungsrecht über. Methoden, Vorgehensmodelle und
          vorbestehendes Know-how verbleiben bei {siteConfig.name}.
        </p>
      </section>

      <section className="space-y-3">
        <h2>9. Vertraulichkeit und Datenschutz</h2>
        <p>
          Beide Parteien behandeln vertrauliche Informationen der jeweils
          anderen Partei vertraulich. Die Verarbeitung personenbezogener Daten
          richtet sich nach unserer{" "}
          <a href="/datenschutz" className="underline underline-offset-4">
            Datenschutzerklärung
          </a>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2>10. Höhere Gewalt</h2>
        <p>
          Bei Ereignissen höherer Gewalt (z.&nbsp;B. Naturkatastrophen,
          Pandemien, behördliche Massnahmen) ist {siteConfig.name} für die
          Dauer des Ereignisses von der Leistungspflicht befreit. Dauert das
          Ereignis länger als 30 Tage, kann der Kunde den Vertrag mit einer
          Frist von 14 Tagen kündigen.
        </p>
      </section>

      <section className="space-y-3">
        <h2>11. Schlussbestimmungen</h2>
        <p>
          Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die
          Wirksamkeit der übrigen Bestimmungen unberührt. Es gilt
          ausschliesslich schweizerisches Recht; Gerichtsstand ist{" "}
          {legal.jurisdiction}.
        </p>
      </section>
    </LegalPage>
  );
}
