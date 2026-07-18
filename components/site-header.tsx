import Link from "next/link";

import { AnchorLink } from "@/components/anchor-link";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/#vorgehen", label: "Vorgehen" },
  { href: "/#bausteine", label: "Bausteine" },
  { href: "/#pakete", label: "Pakete" },
  { href: "/ueber-uns", label: "Über uns", page: true },
  { href: "/#faq", label: "FAQ" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav
        aria-label="Hauptnavigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between border-x border-foreground/15 px-6"
      >
        <AnchorLink
          href="/#top"
          aria-label="R&F Consulting — zur Startseite"
          className="text-sm font-bold tracking-[0.18em] text-foreground"
        >
          R&amp;F CONSULTING
        </AnchorLink>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const Component = link.page ? Link : AnchorLink;
            return (
              <Component
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Component>
            );
          })}
        </div>

        <Button nativeButton={false} render={<AnchorLink href="/#kontakt" />}>
          Erstgespräch vereinbaren
        </Button>
      </nav>
    </header>
  );
}
