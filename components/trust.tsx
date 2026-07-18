export function Trust() {
  return (
    <section className="border-t border-foreground/10 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground">
          Aus der Praxis
        </p>
        <p className="mt-6 text-xl font-semibold leading-relaxed tracking-tight text-foreground sm:text-2xl">
          Unsere Methodik basiert auf eigener Vertriebspraxis: Mit diesem
          Vorgehen haben wir selbst Robotik im DACH-Markt vertrieben.
        </p>
        <a
          href="/ueber-uns"
          className="mt-6 inline-block text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
        >
          Mehr über uns und unsere Geschichte
        </a>
      </div>
    </section>
  );
}
