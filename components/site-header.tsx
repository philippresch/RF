"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { AnchorLink } from "@/components/anchor-link";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "/#vorgehen", label: "Vorgehen" },
  { href: "/#bausteine", label: "Bausteine" },
  { href: "/#pakete", label: "Pakete" },
  { href: "/referenzen", label: "Referenzen", page: true },
  { href: "/ueber-uns", label: "Über uns", page: true },
  { href: "/#faq", label: "FAQ" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

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
          onClick={() => setOpen(false)}
        >
          R&amp;F CONSULTING
        </AnchorLink>

        <div className="hidden items-center gap-6 md:flex">
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

        <div className="flex items-center gap-2">
          <Button nativeButton={false} render={<AnchorLink href="/#kontakt" />}>
            Erstgespräch vereinbaren
          </Button>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Menü schliessen" : "Menü öffnen"}
            className="flex size-9 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-muted md:hidden"
          >
            {open ? (
              <X className="size-4" aria-hidden="true" />
            ) : (
              <Menu className="size-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile-Menü */}
      {open ? (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col border-x border-foreground/15 px-6 py-3">
            {navLinks.map((link) => {
              const Component = link.page ? Link : AnchorLink;
              return (
                <Component
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Component>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}
