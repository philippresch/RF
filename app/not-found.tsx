import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="noise-overlay relative flex-1">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center border-x border-foreground/15 px-6 pb-32 pt-48 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
            404
          </p>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Diese Seite existiert nicht.
          </h1>
          <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
            Die angeforderte Seite wurde nicht gefunden oder ist umgezogen.
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
