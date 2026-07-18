"use client";

import { useActionState } from "react";

import { submitContactRequest, type ContactFormState } from "@/app/actions";
import { Button } from "@/components/ui/button";

const initialState: ContactFormState = { status: "idle" };

const inputClasses =
  "w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-ring focus:outline-none focus:ring-2 focus:ring-ring/30";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactRequest,
    initialState
  );

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="rounded-xl border border-border bg-card p-8 text-center"
      >
        <p className="text-base font-semibold text-foreground">
          Anfrage erhalten
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5" noValidate>
      {/* Honeypot gegen Spam — für Menschen unsichtbar */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="mb-2 block text-xs font-semibold uppercase tracking-widest text-foreground"
          >
            Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Max Mustermann"
            className={inputClasses}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="mb-2 block text-xs font-semibold uppercase tracking-widest text-foreground"
          >
            Geschäftliche E-Mail <span aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="max@unternehmen.de"
            className={inputClasses}
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="company"
          className="mb-2 block text-xs font-semibold uppercase tracking-widest text-foreground"
        >
          Unternehmen <span aria-hidden="true">*</span>
        </label>
        <input
          id="company"
          name="company"
          type="text"
          required
          autoComplete="organization"
          placeholder="Unternehmen GmbH"
          className={inputClasses}
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-xs font-semibold uppercase tracking-widest text-foreground"
        >
          Ihre aktuelle Vertriebssituation{" "}
          <span className="normal-case tracking-normal text-muted-foreground">
            (optional)
          </span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="Wo steht Ihr Vertrieb heute, und was ist das Ziel?"
          className={`${inputClasses} resize-none`}
        />
      </div>

      {state.status === "error" ? (
        <p role="alert" className="text-sm text-destructive">
          {state.message}
        </p>
      ) : null}

      <Button type="submit" disabled={isPending} className="h-11 w-full">
        {isPending ? "Wird gesendet …" : "Erstanalyse anfragen"}
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        Antwort innerhalb von 24 Stunden. Ihre Daten werden ausschliesslich zur
        Bearbeitung der Anfrage verwendet.
      </p>
    </form>
  );
}
