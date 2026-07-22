import Link from "next/link";

import { AnchorLink } from "@/components/anchor-link";

const footerLinks = [
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/#kontakt", label: "Kontakt" },
  { href: "/agb", label: "AGB" },
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 border-x border-foreground/15 px-6 py-10 sm:flex-row">
        <p className="text-sm font-bold tracking-[0.18em] text-foreground">
          R&amp;F GROWTH PARTNERS
        </p>
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
                className="text-muted-foreground transition-colors hover:text-foreground"
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
