import type { SaeuleId } from "./types";

export const saeulenNamen: Record<SaeuleId, string> = {
  kunden: "Kunden",
  mitarbeiter: "Mitarbeiter",
  prozesse: "Prozesse",
  ki: "KI",
};

// Pakete laut Positionierung (Stand Nov 2026), Namen wie auf /preise.
export const pakete = [
  { name: "Fokus", saeulen: 1, preis: "1.490 €" },
  { name: "Wachstum", saeulen: 2, preis: "2.490 €" },
  { name: "Komplett", saeulen: 4, preis: "3.990 €" },
];
