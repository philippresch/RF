/**
 * FAQ-Inhalte — gemeinsame Quelle für die FAQ-Sektion und das
 * FAQPage-Schema (JSON-LD). Klare, faktische Antworten unterstützen
 * sowohl klassisches SEO als auch generative Suchmaschinen (GEO).
 */
export const faqItems = [
  {
    question:
      "Wie unterscheidet sich R&F Consulting von klassischen Agenturen und Beratungen?",
    answer:
      "R&F Consulting ist Wachstumspartner mit Umsetzungskompetenz: Wir verbinden Strategieberatung mit dem operativen Aufbau und Betrieb Ihrer Vertriebsprozesse – gemessen an Ergebnissen wie qualifizierten Terminen und Umsatzwachstum, nicht an Aktivitätskennzahlen. Der gesamte Prozess läuft auf Ihren eigenen Konten und in Ihrem CRM. Sie haben jederzeit volle Transparenz.",
  },
  {
    question: "Wird die Reputation unserer Domains geschützt?",
    answer:
      "Ja. Wir versenden niemals über Ihre Hauptdomain. Für den Outbound-Betrieb richten wir dedizierte Sende-Domains mit sauberem Warmup, SPF-, DKIM- und DMARC-Konfiguration sowie strikten Volumen-Limits ein – auf Ihren eigenen Konten. Die Zustellbarkeit wird laufend überwacht.",
  },
  {
    question: "Wie schnell sehen wir erste Ergebnisse?",
    answer:
      "Der Systemaufbau inklusive Domain-Warmup dauert in der Regel vier bis sechs Wochen. Ab dem zweiten Monat entstehen kontinuierlich qualifizierte Termine. Ein schnellerer Start würde Domains und Zielmarkt beschädigen – darauf verzichten wir bewusst.",
  },
  {
    question: "Was bedeutet „quellenverifiziert“ bei Kontakten?",
    answer:
      "Jeder Kontakt wird per KI-Live-Recherche gegen mehrere Premium-Datenquellen geprüft: aktuelle Position, Firmenzugehörigkeit, Relevanz zum Zielkundenprofil und Erreichbarkeit. Sie erhalten keine gekauften Listen, sondern verifizierte Entscheider.",
  },
  {
    question: "Wie werden die Konditionen kalkuliert?",
    answer:
      "Die Konditionen richten sich nach Zielmarkt, Umfang und den gewählten Modulen – Go-to-Market-Strategie, Neukundengewinnung oder Vertriebsaufbau. Grundlage ist immer eine kostenfreie Erstanalyse Ihrer aktuellen Vertriebssituation. Danach erhalten Sie ein individuelles, transparentes Angebot.",
  },
  {
    question: "Sind wir langfristig vertraglich gebunden?",
    answer:
      "Nein. Laufende Mandate sind nach der Anlaufphase monatlich kündbar. Beim Aufbau mit Übergabe gehört das komplette System inklusive Playbooks, Vorlagen und Runbooks ohnehin Ihnen. Wir binden Kunden über Ergebnisse, nicht über Vertragslaufzeiten.",
  },
] as const;
