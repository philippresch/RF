import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function LegalPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      <main className="relative flex-1">
        <div className="mx-auto max-w-6xl">
          <article className="mx-auto max-w-2xl px-6 pb-24 pt-36 sm:px-10">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {title}
            </h1>
            <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground [&_h2]:text-base [&_h2]:font-bold [&_h2]:text-foreground [&_h3]:text-sm [&_h3]:font-semibold [&_h3]:text-foreground">
              {children}
            </div>
          </article>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
