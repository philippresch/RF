"use server";

import { siteConfig } from "@/lib/site";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitContactRequest(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot: von Bots ausgefülltes verstecktes Feld → still verwerfen
  if (String(formData.get("website") ?? "").length > 0) {
    return { status: "success", message: "Vielen Dank für Ihre Anfrage." };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const interesse = String(formData.get("interesse") ?? "").trim();

  if (!name || !email || !company) {
    return {
      status: "error",
      message: "Bitte füllen Sie Name, E-Mail und Unternehmen aus.",
    };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      status: "error",
      message: "Bitte geben Sie eine gültige E-Mail-Adresse an.",
    };
  }

  /**
   * E-Mail-Versand über Resend (https://resend.com).
   * Aktivierung: Env-Variablen in Vercel setzen —
   *   RESEND_API_KEY  = API-Key aus dem Resend-Dashboard
   *   CONTACT_TO      = Empfängeradresse (optional, Standard: siteConfig.email)
   *   CONTACT_FROM    = verifizierte Absenderadresse (optional)
   * Ohne API-Key wird die Anfrage nur serverseitig protokolliert.
   */
  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from:
          process.env.CONTACT_FROM ?? "Leverise Growth Partners <onboarding@resend.dev>",
        to: [process.env.CONTACT_TO ?? siteConfig.email],
        reply_to: email,
        subject: `Erstanalyse-Anfrage: ${company}`,
        text: [
          `Name: ${name}`,
          `E-Mail: ${email}`,
          `Unternehmen: ${company}`,
          interesse ? `Interesse: ${interesse}` : null,
          "",
          "Nachricht:",
          message || "(keine Angabe)",
        ]
          .filter((line) => line !== null)
          .join("\n"),
      }),
    });

    if (!res.ok) {
      console.error("[Kontaktanfrage] Resend-Fehler", res.status, await res.text());
      return {
        status: "error",
        message: `Die Anfrage konnte nicht gesendet werden. Bitte schreiben Sie uns direkt an ${siteConfig.email}.`,
      };
    }
  } else {
    console.log("[Kontaktanfrage]", { name, email, company, interesse, message });
  }

  return {
    status: "success",
    message:
      "Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
  };
}
