"use client";

/**
 * Leichtgewichtiger Client-Store für die Anfrage-Auswahl:
 * Bausteine (Mehrfachauswahl) oder ein Paket wandern von den
 * Sektionen ins Kontaktformular. Auswahl ist entweder EIN Paket
 * ODER beliebig viele Bausteine — nie beides gemischt.
 */

import { useSyncExternalStore } from "react";

let selection: readonly string[] = [];
const listeners = new Set<() => void>();

function emit(next: readonly string[]) {
  selection = next;
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

const getSnapshot = () => selection;
const getServerSnapshot = () => selection;

export function useInquirySelection(): readonly string[] {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

export function toggleBaustein(name: string) {
  const item = `Baustein: ${name}`;
  const withoutPakete = selection.filter((s) => !s.startsWith("Paket:"));
  emit(
    withoutPakete.includes(item)
      ? withoutPakete.filter((s) => s !== item)
      : [...withoutPakete, item]
  );
}

export function isBausteinSelected(sel: readonly string[], name: string) {
  return sel.includes(`Baustein: ${name}`);
}

export function selectPaket(name: string) {
  emit([`Paket: ${name}`]);
}

export function removeItem(item: string) {
  emit(selection.filter((s) => s !== item));
}
