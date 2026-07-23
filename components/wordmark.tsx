import Image from "next/image";

import { cn } from "@/lib/utils";

/**
 * Leverise-Wortmarke: das Original-Logo als Bild (public/logo.png,
 * freigestellt aus "leverise_hintergrund-schwarz.jpg"). Höhe über
 * className steuern (Standard h-9).
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <Image
      src="/logo.png"
      alt="Leverise Growth Partners"
      width={920}
      height={300}
      priority
      className={cn("h-9 w-auto", className)}
    />
  );
}
