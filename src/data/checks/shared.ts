import type { SaeuleId } from "./types";

export const saeulenNamen: Record<SaeuleId, string> = {
  kunden: "Kunden",
  mitarbeiter: "Mitarbeiter",
  prozesse: "Prozesse",
  ki: "KI",
};

// Pakete laut Positionierung (Stand Nov 2026), Namen wie in src/data/pricing.ts.
export const pakete = [
  { name: "Fokus", vorhaben: 1, preis: "1.490 €" },
  { name: "Wachstum", vorhaben: 2, preis: "2.490 €" },
  { name: "Transformation", vorhaben: 3, preis: "3.990 €" },
];
