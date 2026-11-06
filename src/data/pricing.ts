// Pakete nach dem Vorhaben-Modell: Alle Pakete haben dasselbe Fundament und
// unterscheiden sich nur darin, wie viele Vorhaben gleichzeitig laufen.
// Abgerechnet wird monatlich, nie nach Stunden.

export interface Tier {
  name: string;
  vorhaben: number;
  kurz: string;
  abstimmung: string;
  vorrang: boolean;
  preis: string;
  featured: boolean;
}

export const tiers: Tier[] = [
  {
    name: "Fokus",
    vorhaben: 1,
    kurz: "Ein Vorhaben nach dem anderen",
    abstimmung: "monatlich",
    vorrang: false,
    preis: "1.490 €",
    featured: false,
  },
  {
    name: "Wachstum",
    vorhaben: 2,
    kurz: "Zwei Vorhaben parallel",
    abstimmung: "alle zwei Wochen",
    vorrang: false,
    preis: "2.490 €",
    featured: true,
  },
  {
    name: "Transformation",
    vorhaben: 3,
    kurz: "Drei Vorhaben parallel, in klarer Reihenfolge",
    abstimmung: "wöchentlich",
    vorrang: true,
    preis: "3.990 €",
    featured: false,
  },
];

export const vorhabenText = (n: number) => `${n} Vorhaben gleichzeitig`;

export const enthalten = (t: Tier) => [
  vorhabenText(t.vorhaben),
  `Strategie-Call ${t.abstimmung}`,
  ...(t.vorrang ? ["Vorrang bei Anfragen"] : []),
  "Das Fundament: Roadmap, Kundenportal, Monatsreport, Lernbibliothek",
];

// Beispiele für Vorhaben, jeweils mit der passenden Themenseite.
export const vorhabenBeispiele = [
  { titel: "Karriereseite mit Arbeitgeberprofil", saeule: "Mitarbeiter", href: "/leistungen/mitarbeiter/employer-branding" },
  { titel: "Google-Profil und Branchenportale bereinigt", saeule: "Kunden", href: "/leistungen/kunden/sichtbarkeit" },
  { titel: "CRM-Basis mit Kontakten und Wiedervorlagen", saeule: "Prozesse", href: "/leistungen/prozesse/crm" },
  { titel: "KI-Richtlinie steht, das Team ist eingewiesen", saeule: "KI", href: "/leistungen/ki/regeln" },
];

export const nichtEnthalten = [
  "Werbebudget für Anzeigen",
  "Software-Lizenzen (z. B. CRM, Tools)",
  "Vor-Ort-Termine (Reisekosten plus Tagessatz)",
  "Große Einzelprojekte wie ein Website-Relaunch. Die biete ich separat zum Festpreis an",
];
