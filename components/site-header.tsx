"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { AnchorLink } from "@/components/anchor-link";
import { Wordmark } from "@/components/wordmark";
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
    <header className="section-dark header-glass fixed inset-x-0 top-0 z-50 border-b border-border">
      <nav
        aria-label="Hauptnavigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        <AnchorLink
          href="/#top"
          className="rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
          onClick={() => setOpen(false)}
        >
          <Wordmark />
        </AnchorLink>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => {
            const Component = link.page ? Link : AnchorLink;
            return (
              <Component
                key={link.href}
                href={link.href}
                className="rounded-sm text-sm text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
              >
                {link.label}
              </Component>
            );
          })}
        </div>

        <div className="flex items-center gap-2">
          <Button
            className="hidden sm:inline-flex"
            nativeButton={false}
            render={<AnchorLink href="/#kontakt" />}
          >
            Erstgespräch vereinbaren
          </Button>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Menü schliessen" : "Menü öffnen"}
            className="flex size-9 items-center justify-center rounded-lg border border-border text-foreground outline-none transition-colors hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring md:hidden"
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
        <div className="border-t border-border bg-ink md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-3">
            {navLinks.map((link) => {
              const Component = link.page ? Link : AnchorLink;
              return (
                <Component
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-sm py-3 text-sm text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {link.label}
                </Component>
              );
            })}
            <Button
              className="mb-2 mt-3 w-full"
              nativeButton={false}
              render={
                <AnchorLink href="/#kontakt" onClick={() => setOpen(false)} />
              }
            >
              Erstgespräch vereinbaren
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
