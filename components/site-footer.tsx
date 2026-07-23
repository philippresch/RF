import Link from "next/link";

import { AnchorLink } from "@/components/anchor-link";
import { Wordmark } from "@/components/wordmark";

const footerLinks = [
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/#kontakt", label: "Kontakt" },
  { href: "/agb", label: "AGB" },
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
];

export function SiteFooter() {
  return (
    <footer className="section-dark">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 border-t border-border px-6 py-10 sm:flex-row">
        <Wordmark className="text-lg" />
        <p className="text-xs text-muted-foreground">
          B2B-Vertriebsberatung · Tech &amp; Robotic · DACH
        </p>
        <nav aria-label="Footer" className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs">
          {footerLinks.map((link) => {
            const Component = link.href.includes("#") ? AnchorLink : Link;
            return (
              <Component
                key={link.href}
                href={link.href}
                className="rounded-sm text-muted-foreground outline-none transition-colors hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
              >
                {link.label}
              </Component>
            );
          })}
        </nav>
      </div>
    </footer>
  );
}
