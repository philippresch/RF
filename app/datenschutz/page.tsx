import type { Metadata } from "next";

import { LegalPage } from "@/components/legal-page";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  description: `Datenschutzerklärung von ${siteConfig.name}: Informationen zur Verarbeitung personenbezogener Daten nach Schweizer DSG und EU-DSGVO.`,
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  const { legal } = siteConfig;
  return (
    <LegalPage title="Datenschutzerklärung">
      <section className="space-y-3">
        <h2>1. Verantwortliche Stelle</h2>
        <p>
          {legal.companyName} (Marke: {siteConfig.name})
          <br />
          {legal.street}, {legal.city}, {legal.country}
          <br />
          E-Mail: {siteConfig.email}
        </p>
        <p>
          Wir nehmen den Schutz Ihrer persönlichen Daten ernst und halten uns
          an die Bestimmungen des schweizerischen Datenschutzgesetzes (DSG)
          sowie – soweit anwendbar – der EU-Datenschutz-Grundverordnung
          (DSGVO).
        </p>
      </section>

      <section className="space-y-3">
        <h2>2. Cookies</h2>
        <p>
          Diese Website verwendet Cookies ausschliesslich, soweit sie für die
          Funktionalität erforderlich sind. Sie können Cookies in Ihrem
          Browser deaktivieren; dadurch kann die Funktionalität dieser Website
          eingeschränkt werden. Tracking- oder Marketing-Cookies werden derzeit
          nicht eingesetzt.
        </p>
      </section>

      <section className="space-y-3">
        <h2>3. Kontaktformular und Terminbuchung</h2>
        <p>
          Wenn Sie uns über das Kontaktformular oder ein eingebettetes
          Buchungstool kontaktieren, verarbeiten wir die von Ihnen angegebenen
          Daten (Name, E-Mail-Adresse, Unternehmen, Nachricht) zur Bearbeitung
          Ihrer Anfrage. Die Verarbeitung erfolgt über unseren E-Mail-Dienst
          bzw. unser CRM-System; die Server können sich im In- oder Ausland
          befinden.
        </p>
      </section>

      <section className="space-y-3">
        <h2>4. Weitergabe an Dritte</h2>
        <p>
          Daten aus Kontaktanfragen werden nur dann mit Partnern geteilt,
          sofern ein direktes Geschäftsinteresse besteht – ausschliesslich zur
          technischen oder kommerziellen Klärung Ihres Anliegens. Ein
          darüberhinausgehender Verkauf oder eine Weitergabe Ihrer Daten
          findet nicht statt.
        </p>
      </section>

      <section className="space-y-3">
        <h2>5. Eingebettete Inhalte</h2>
        <p>
          Inhalte dieser Website können Elemente externer Anbieter enthalten
          (z.&nbsp;B. eingebettete Buchungstools). Diese Anbieter können beim
          Aufruf Daten erheben, Cookies setzen und Ihre Interaktion mit dem
          eingebetteten Inhalt verfolgen.
        </p>
      </section>

      <section className="space-y-3">
        <h2>6. Aufbewahrung</h2>
        <p>
          Personenbezogene Daten werden so lange gespeichert, wie es für die
          Abwicklung der Geschäftsbeziehung erforderlich ist oder gesetzliche
          Aufbewahrungspflichten bestehen.
        </p>
      </section>

      <section className="space-y-3">
        <h2>7. Ihre Rechte</h2>
        <p>
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung oder
          Sperrung Ihrer personenbezogenen Daten. Wenden Sie sich dazu an{" "}
          {siteConfig.email}. Zudem besteht ein Beschwerderecht bei der
          zuständigen Aufsichtsbehörde.
        </p>
      </section>

      <section className="space-y-3">
        <h2>8. Stand dieser Erklärung</h2>
        <p>Juli 2026</p>
      </section>
    </LegalPage>
  );
}
