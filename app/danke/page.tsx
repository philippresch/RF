import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Vielen Dank",
  description: "Ihre Anfrage ist bei uns eingegangen.",
  robots: { index: false, follow: false },
};

/**
 * Bestätigungsseite — Ziel für Formular- und Booking-Weiterleitungen
 * (z. B. Cal.com-Redirect) und Basis für Conversion-Tracking.
 */
export default function DankePage() {
  return (
    <>
      <SiteHeader />
      <main className="relative flex-1">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center px-6 pb-32 pt-48 text-center">
          <p className="eyebrow">
            Anfrage erhalten
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Vielen Dank.
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            Ihre Anfrage ist bei uns eingegangen. Wir melden uns innerhalb von
            24 Stunden bei Ihnen — in der Regel schneller.
          </p>
          <Button
            className="mt-10 h-11 px-7"
            nativeButton={false}
            render={<Link href="/" />}
          >
            Zur Startseite
          </Button>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
