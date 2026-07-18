"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Link auf einen Seitenabschnitt (z. B. "/#kontakt").
 *
 * Auf der Zielseite selbst wird ein nativer <a href="#…">-Anker gerendert:
 * Der Browser scrollt damit bei JEDEM Klick zum Abschnitt — auch wenn der
 * Hash bereits in der URL steht (next/link tut in dem Fall nichts,
 * bekanntes App-Router-Verhalten). Von anderen Seiten aus übernimmt
 * next/link die Navigation.
 */
export function AnchorLink({
  href,
  ...props
}: React.ComponentProps<"a"> & { href: string }) {
  const pathname = usePathname();
  const [path, hash] = href.split("#");

  if (hash && (path === "" || path === pathname)) {
    return <a href={`#${hash}`} {...props} />;
  }
  return <Link href={href} {...props} />;
}
