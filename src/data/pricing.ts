export interface Tier {
  name: string;
  saeulen: string;
  preis: string;
  enthalten: string[];
  featured: boolean;
}

export const tiers: Tier[] = [
  {
    name: "Fokus",
    saeulen: "1 aktive Säule",
    preis: "1.490 €",
    enthalten: ["Monatlicher Strategie-Call", "Umsetzung in der gewählten Säule", "Monatsreport"],
    featured: false,
  },
  {
    name: "Wachstum",
    saeulen: "2 aktive Säulen",
    preis: "2.490 €",
    enthalten: ["Call alle zwei Wochen", "Umsetzung in zwei Säulen", "Zugang zur Lernbibliothek"],
    featured: true,
  },
  {
    name: "Partner",
    saeulen: "alle 4 Säulen",
    preis: "3.990 €",
    enthalten: ["Wöchentlicher Kontakt", "Umsetzung in allen vier Säulen", "Lernbibliothek & Vorrang bei Anfragen"],
    featured: false,
  },
];

export const nichtEnthalten = [
  "Werbebudget für Anzeigen",
  "Software-Lizenzen (z. B. CRM, Tools)",
  "Vor-Ort-Termine (Reisekosten plus Tagessatz)",
  "Große Einzelprojekte wie ein Website-Relaunch — die bieten wir separat zum Festpreis an",
];
