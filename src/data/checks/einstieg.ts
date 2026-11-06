// Welcher fertige Selbstcheck zu einer Säule passt. Solange es keine eigenen
// Säulen-Checks gibt, deckt der Modernisierungscheck alle vier Säulen ab.
import type { Pillar } from "../pillars";
import { fragen as modFragen } from "./modernisierung";
import { fragen as kiFragen } from "./ki";

export interface CheckEinstieg {
  name: string;
  href: string;
  umfang: string;
  ergebnis: string;
}

const minuten = (n: number) => Math.round(n * 0.3);

const modernisierung: CheckEinstieg = {
  name: "Modernisierungscheck",
  href: "/checks/modernisierung",
  umfang: `${modFragen.length} Fragen · ca. ${minuten(modFragen.length)} Minuten`,
  ergebnis: "Ihr Profil über alle vier Säulen und ein Report mit 90-Tage-Plan.",
};

const ki: CheckEinstieg = {
  name: "KI-Potenzial-Check",
  href: "/checks/ki",
  umfang: `${kiFragen.length} Fragen · ca. ${minuten(kiFragen.length)} Minuten`,
  ergebnis: "Ihr Zeitpotenzial in der Verwaltung pro Woche, mit offen genannten Annahmen.",
};

export function checkFuer(id: Pillar["id"]): CheckEinstieg {
  return id === "ki" ? ki : modernisierung;
}
