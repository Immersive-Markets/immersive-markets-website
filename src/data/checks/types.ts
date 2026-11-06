// Gemeinsames Schema für alle Selbstchecks. Die Bewertung ist rein regelbasiert, ohne KI.

export type SaeuleId = "kunden" | "mitarbeiter" | "prozesse" | "ki";

export interface Option {
  text: string;
  /** Reifegrad 1–4. Fehlt bei Profil- und reinen Mengenfragen. */
  m?: number;
  /** Beitrag zum Zeitpotenzial in Stunden pro Woche (nur Modus "stunden"), vor Multiplikator. */
  h?: number;
  /** Größen-Multiplikator für das Zeitpotenzial (nur an der Frage `multFrage`). */
  mult?: number;
  /** Warnsignal-Satz für den Report, nur bei schwachen Antworten (m ≤ 2). */
  signal?: string;
}

export interface Frage {
  id: string;
  bereich: string;
  /** Kurzes Fachstichwort über der Frage, z. B. "Kundenkonzentration". */
  thema?: string;
  frage: string;
  hinweis: string;
  optionen: Option[];
}

export interface Bereich {
  id: string;
  label: string;
  kurz: string;
  /** Deutung im Report: [Reifegrad unter 40 %, 40–69 %, ab 70 %]. */
  deutung?: [string, string, string];
}

export interface Massnahme {
  id: string;
  titel: string;
  text: string;
  saeule: SaeuleId;
  fragen: string[];
  schritte: [string, string, string];
}

export interface Stufe {
  /** Obergrenze des Handlungsbedarfs (100 − Ø-Reifegrad) für diese Stufe. */
  bis: number;
  label: string;
  text: string;
}

export interface CheckConfig {
  id: string;
  /** Name des Checks, z. B. "Modernisierungscheck". */
  name: string;
  /**
   * "bedarf": Hauptergebnis ist der Handlungsbedarf in %, Maßnahmen kommen aus den schwächsten Bereichen.
   * "stunden": Hauptergebnis ist das Zeitpotenzial in Std./Woche (+ Euro), Maßnahmen nach Stunden sortiert.
   */
  modus: "bedarf" | "stunden";
  bereiche: Bereich[];
  fragen: Frage[];
  massnahmen: Massnahme[];
  stufen: Stufe[];
  /** Frage, deren Optionen den Größen-Multiplikator `mult` tragen (Modus "stunden"). */
  multFrage?: string;
  /** Annahmen für die Euro-Umrechnung (Modus "stunden"). */
  annahmen?: { stundensatz: number; wochen: number };
  /** Maßnahme, die vorgezogen wird, wenn der Reifegrad eines Bereichs unter der Schwelle liegt. */
  grundlage?: { massnahme: string; bereich: string; schwelle: number; text: string };
  texte: {
    /** Kopfzeile der Live-Karte, z. B. "Modernisierungsprofil". */
    profil: string;
    /** Titel des Reports, z. B. "Modernisierungs-Report". */
    report: string;
    /** Bezeichnung des Hauptergebnisses im Modus "bedarf", z. B. "Modernisierungsbedarf". */
    ergebnis: string;
    /** Zusatz zum Haftungshinweis im Report-Fuß. */
    rechtshinweis?: string;
  };
}
