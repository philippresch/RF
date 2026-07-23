/**
 * FAQ-Inhalte — gemeinsame Quelle für die FAQ-Sektion und das
 * FAQPage-Schema (JSON-LD). Klare, faktische Antworten unterstützen
 * sowohl klassisches SEO als auch generative Suchmaschinen (GEO).
 */
export const faqItems = [
  {
    question:
      "Wie unterscheidet sich Leverise Growth Partners von klassischen Agenturen und Beratungen?",
    answer:
      "Leverise ist Wachstumspartner mit Umsetzungskompetenz: Wir verbinden Strategieberatung mit dem operativen Aufbau und Betrieb Ihrer Vertriebsprozesse – gemessen an Ergebnissen wie qualifizierten Terminen und Umsatzwachstum, nicht an Aktivitätskennzahlen. Unsere Leistungsbausteine sind standardisiert und werden über den Wachstumsplan individuell konfiguriert. Der gesamte Prozess läuft auf Ihren eigenen Konten und in Ihrem CRM. Sie haben jederzeit volle Transparenz.",
  },
  {
    question: "Wie werden die Konditionen kalkuliert?",
    answer:
      "Jeder Baustein hat einen fixen Setup- und Monatspreis aus unserer Preisliste. Ihr Angebot ergibt sich aus der Konfiguration Ihres Wachstumsplans – transparent und ohne individuelle Kalkulation. Die Konditionen nennen wir Ihnen im Erstgespräch.",
  },
  {
    question: "Warum gibt es keine Standardpakete zum Direktkauf?",
    answer:
      "Weil der Engpass individuell ist. Das Wachstums-Audit stellt sicher, dass Sie nur Bausteine einsetzen, die auf Ihren Engpass einzahlen. Die Bausteine selbst sind standardisiert – mit fixem Umfang, fixem Preis und klarer Kennzahl.",
  },
  {
    question: "Können wir mit einem einzelnen Baustein starten?",
    answer:
      "Ja. Viele Kunden starten mit einem Baustein und erweitern im Quartals-Review, sobald der erste Engpass gelöst ist.",
  },
  {
    question: "Was passiert im Quartals-Review?",
    answer:
      "Wir prüfen die Kennzahlen jedes aktiven Bausteins und entscheiden gemeinsam über Weiterführung, Erweiterung, Tausch oder Übergabe in den Eigenbetrieb.",
  },
  {
    question: "Wie schnell sehen wir erste Ergebnisse?",
    answer:
      "Das hängt vom Baustein ab. Beim Outbound-System dauert der Systemaufbau inklusive Domain-Warmup in der Regel vier bis sechs Wochen; ab dem zweiten Monat entstehen kontinuierlich qualifizierte Termine – ein schnellerer Start würde Domains und Zielmarkt beschädigen, darauf verzichten wir bewusst. Bei Paid Ads liegen erste Daten nach zwei bis vier Wochen vor; die belastbare Optimierung greift ab dem zweiten Monat.",
  },
  {
    question: "Wird die Reputation unserer Domains geschützt?",
    answer:
      "Ja. Wir versenden niemals über Ihre Hauptdomain. Für den Outbound-Betrieb richten wir dedizierte Sende-Domains mit sauberem Warmup, SPF-, DKIM- und DMARC-Konfiguration sowie strikten Volumen-Limits ein – auf Ihren eigenen Konten. Die Zustellbarkeit wird laufend überwacht.",
  },
  {
    question: "Was bedeutet „quellenverifiziert“ bei Kontakten?",
    answer:
      "Jeder Kontakt wird per KI-Live-Recherche gegen mehrere Premium-Datenquellen geprüft: aktuelle Position, Firmenzugehörigkeit, Relevanz zum Zielkundenprofil und Erreichbarkeit. Sie erhalten keine gekauften Listen, sondern verifizierte Entscheider.",
  },
  {
    question: "Sind wir langfristig vertraglich gebunden?",
    answer:
      "Nein. Laufende Mandate sind nach der Anlaufphase monatlich kündbar. Wir binden Kunden über Ergebnisse, nicht über Vertragslaufzeiten.",
  },
] as const;
