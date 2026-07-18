/**
 * Zentrale Site-Konfiguration — eine Quelle für SEO, Structured Data und Inhalte.
 * TODO vor Launch: url auf die echte R&F-Consulting-Domain setzen.
 */
export const siteConfig = {
  name: "R&F Consulting",
  url: "https://rf-consulting.ch",
  email: "info@aurobots.ch",
  phone: "+41 44 505 25 51",
  title:
    "R&F Consulting | Wachstumspartner & B2B-Vertriebsberatung für Tech & Robotics",
  description:
    "R&F Consulting ist Ihr Wachstumspartner für B2B-Tech & Robotics im DACH-Raum: Go-to-Market-Strategie, Neukundengewinnung und Vertriebsaufbau – für planbares Umsatzwachstum.",
  keywords: [
    "Wachstumspartner B2B",
    "B2B Vertriebsberatung",
    "Umsatzsteigerung B2B",
    "Neukundengewinnung B2B",
    "Vertriebsaufbau",
    "Vertriebsteam aufbauen",
    "Go-to-Market Strategie",
    "B2B Leadgenerierung",
    "qualifizierte B2B-Termine",
    "Sales Consulting",
    "Robotik Vertrieb",
    "Wachstumsberatung DACH",
    "Vertriebsberatung Schweiz",
    "Vertriebsberatung Deutschland",
  ],
  region: "DACH",
  legal: {
    /** R&F Consulting ist eine Marke der Aurobots GmbH */
    companyName: "Aurobots GmbH",
    street: "Sunnehaldeweg 2",
    city: "8620 Wetzikon ZH",
    country: "Schweiz",
    management: ["Matthias Frech", "Philipp Resch"],
    register: "Handelsregister des Kantons Zürich",
    uid: "CHE-144.444.644",
    jurisdiction: "Zürich",
  },
} as const;
