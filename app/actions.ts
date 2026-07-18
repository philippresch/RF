"use server";

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

  // TODO vor Launch: E-Mail-Versand anbinden (z. B. Resend) oder CRM-Webhook.
  // Bis dahin wird die Anfrage nur serverseitig protokolliert.
  console.log("[Kontaktanfrage]", { name, email, company, message });

  return {
    status: "success",
    message:
      "Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
  };
}
