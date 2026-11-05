import type { SaeuleId } from "./types";

export const saeulenNamen: Record<SaeuleId, string> = {
  kunden: "Kunden",
  mitarbeiter: "Mitarbeiter",
  prozesse: "Prozesse",
  ki: "KI",
};

// Pakete laut Positionierung (netto, Stand Nov 2026).
export const pakete = [
  { name: "Fokus", saeulen: 1, preis: "1.490 €" },
  { name: "Wachstum", saeulen: 2, preis: "2.490 €" },
  { name: "Partner", saeulen: 4, preis: "3.990 €" },
];
