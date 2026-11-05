export interface Pillar {
  id: "mitarbeiter" | "kunden" | "prozesse" | "ki";
  name: string;
  icon: string;
  kurz: string;
  frage: string;
  tagline: string;
  themen: string[];
  intro: string;
  probleme: { titel: string; text: string }[];
  check: {
    name: string;
    hook: string;
    status: "live" | "bald";
  };
}

export const pillars: Pillar[] = [
  {
    id: "mitarbeiter",
    name: "Mitarbeiter",
    icon: "users",
    kurz: "Attraktiv für die nächste Generation",
    frage: "Wie werden Sie als Arbeitgeber attraktiv?",
    tagline: "Employer Branding, Recruiting, Gen Z, Einarbeitung",
    themen: ["Employer Branding", "Recruiting", "Gen Z", "Einarbeitung"],
    intro:
      "Die Belegschaft von morgen sucht anders, als Ihr Betrieb bisher eingestellt hat. Wer hier nicht sichtbar ist, bekommt keine Bewerbungen mehr — unabhängig davon, wie gut die Stelle ist.",
    probleme: [
      {
        titel: "Stellenanzeigen, die niemand findet",
        text: "Die Anzeige hängt auf der eigenen Website und in der Zeitung. Dort, wo junge Fachkräfte suchen, taucht sie nicht auf.",
      },
      {
        titel: "Kein Bild vom Arbeitsalltag",
        text: "Bewerberinnen und Bewerber wollen sehen, wie bei Ihnen gearbeitet wird — nicht nur lesen, was gesucht wird.",
      },
      {
        titel: "Einarbeitung nach Zufall",
        text: "Wissen hängt an einzelnen Köpfen. Neue Mitarbeitende lernen durch Zuschauen statt durch einen Plan.",
      },
    ],
    check: {
      name: "Arbeitgeber-Check",
      hook: "Wie attraktiv sind Sie für die Gen Z?",
      status: "bald",
    },
  },
  {
    id: "kunden",
    name: "Kunden",
    icon: "megaphone",
    kurz: "Sichtbar werden, Anfragen gewinnen",
    frage: "Wie finden Kunden Sie — und bleiben?",
    tagline: "Sichtbarkeit, Website, LinkedIn, Vertrieb",
    themen: ["Sichtbarkeit", "Website", "LinkedIn", "Vertrieb"],
    intro:
      "Viele Traditionsunternehmen leben von Bestandskunden und Empfehlungen. Das trägt, bis die Ansprechpartner dort in Rente gehen. Dann entscheidet die Website mit, ob ein neuer Kunde überhaupt anfragt.",
    probleme: [
      {
        titel: "Die Website wirkt wie aus einer anderen Zeit",
        text: "Zehn Jahre alt, nicht für das Handy gebaut, ohne klare Antwort auf die Frage: Was macht dieser Betrieb eigentlich genau?",
      },
      {
        titel: "Niemand ist auf LinkedIn sichtbar",
        text: "Die Nachfolge ist da, aber online taucht das Unternehmen kaum auf. Neue Ansprechpartner bei Kunden und Partnern finden Sie nicht.",
      },
      {
        titel: "Vertrieb läuft nur über den Zufall",
        text: "Anfragen kommen, wenn sie kommen. Es gibt keinen Prozess, der aus einer Anfrage zuverlässig ein Angebot und einen Auftrag macht.",
      },
    ],
    check: {
      name: "Sichtbarkeits- und Website-Check",
      hook: "Wie sichtbar ist Ihr Betrieb wirklich?",
      status: "bald",
    },
  },
  {
    id: "prozesse",
    name: "Prozesse",
    icon: "workflow",
    kurz: "Weniger Excel, mehr Überblick",
    frage: "Wie viel Zeit kostet Ihre Verwaltung?",
    tagline: "Digitalisierung, CRM, Automationen",
    themen: ["Digitalisierung", "CRM", "Automationen"],
    intro:
      "Viele Betriebe laufen über Excel-Listen, Zuruf und das Gedächtnis einzelner Mitarbeiter. Das funktioniert — bis jemand krank wird, geht, oder der Betrieb wächst.",
    probleme: [
      {
        titel: "Jeder hat seine eigene Excel-Liste",
        text: "Kundendaten, Angebote und Termine liegen verteilt auf einzelnen Rechnern. Niemand hat den vollen Überblick.",
      },
      {
        titel: "Dieselbe Information wird dreimal eingetippt",
        text: "Zwischen Angebot, Auftrag und Rechnung wird abgetippt statt verbunden. Fehler und Zeitverlust sind vorprogrammiert.",
      },
      {
        titel: "Nichts erinnert von selbst",
        text: "Nachfassen, Terminerinnerungen, Wiedervorlagen — das läuft über den Kopf einzelner Mitarbeiter, nicht über ein System.",
      },
    ],
    check: {
      name: "Insellösungs-Check",
      hook: "Wie viele Excel-Listen halten Ihren Betrieb am Laufen?",
      status: "bald",
    },
  },
  {
    id: "ki",
    name: "KI",
    icon: "sparkles",
    kurz: "Zeit zurückgewinnen, mit Regeln",
    frage: "Wo gibt Ihnen KI wirklich Zeit zurück?",
    tagline: "Potenzialanalyse, Assistenten, Regeln, Schulung",
    themen: ["Potenzialanalyse", "Assistenten", "Regeln", "Schulung"],
    intro:
      "KI ist kein Projekt für die IT-Abteilung, die Sie nicht haben. Richtig eingesetzt, gibt sie Ihrem Team in einzelnen, konkreten Aufgaben spürbar Zeit zurück — ohne Blackbox und ohne Hype.",
    probleme: [
      {
        titel: "Niemand weiß, wo anfangen",
        text: "KI ist überall Thema, aber es fehlt eine ehrliche erste Einschätzung: Was bringt bei Ihnen wirklich etwas?",
      },
      {
        titel: "Erste Versuche ohne Leitplanken",
        text: "Einzelne Mitarbeitende nutzen KI-Tools auf eigene Faust — ohne Regeln, ohne Schulung, ohne Blick auf Datenschutz.",
      },
      {
        titel: "Zeitfresser bleiben Zeitfresser",
        text: "Routinearbeit in Angebotswesen, Büro oder Kundenkommunikation wird weiter von Hand erledigt, obwohl KI sie abnehmen könnte.",
      },
    ],
    check: {
      name: "KI-Potenzial-Check",
      hook: "Wie viele Stunden pro Woche könnte KI Ihrem Betrieb zurückgeben?",
      status: "live",
    },
  },
];

export function getPillar(id: string): Pillar | undefined {
  return pillars.find((p) => p.id === id);
}
