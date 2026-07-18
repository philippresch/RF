import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 border-x border-foreground/15 px-6 py-10 sm:flex-row">
        <p className="text-sm font-bold tracking-[0.18em] text-foreground">
          R&amp;F CONSULTING
        </p>
        <p className="text-xs text-muted-foreground">
          B2B-Vertriebsberatung · Tech &amp; Robotics · DACH
        </p>
        <nav aria-label="Rechtliches" className="flex items-center gap-6 text-xs">
          <a
            href="/ueber-uns"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Über uns
          </a>
          <a
            href="/agb"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            AGB
          </a>
          <a
            href="/impressum"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Impressum
          </a>
          <a
            href="/datenschutz"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Datenschutz
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Kontakt
          </a>
        </nav>
      </div>
    </footer>
  );
}
