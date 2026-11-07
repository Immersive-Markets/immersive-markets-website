// Inhalte des Menüs "Wissen". Jede Spalte erscheint im Mega-Menü wie eine
// Säule unter "Leistungen". Spalten ohne Einträge werden nicht angezeigt:
// Blog und Whitepaper einfach als weitere Spalte mit Einträgen ergänzen.
import { alleChecks } from "./checks/einstieg";

export interface WissenEintrag {
  label: string;
  href?: string;
}

export interface WissenSpalte {
  titel: string;
  kurz: string;
  href: string;
  eintraege: WissenEintrag[];
  linkLabel: string;
}

const [modernisierung, ki] = alleChecks;

export const wissenSpalten: WissenSpalte[] = [
  {
    titel: modernisierung.name,
    kurz: "Wie zukunftsfähig ist Ihr Unternehmen?",
    href: modernisierung.href,
    eintraege: [
      { label: modernisierung.umfang },
      { label: "Alle vier Säulen inklusive KI" },
      { label: "Profil sofort, Report mit 90-Tage-Plan" },
    ],
    linkLabel: "Check starten",
  },
  {
    titel: ki.name,
    kurz: "Wo spart KI in Ihrer Verwaltung Zeit?",
    href: ki.href,
    eintraege: [
      { label: ki.umfang },
      { label: "Angebote, Korrespondenz, Belege, Wissen" },
      { label: "Zeitpotenzial pro Woche, Annahmen offen" },
    ],
    linkLabel: "Check starten",
  },
  // Später:
  // { titel: "Blog", kurz: "Praxiswissen für Nachfolger", href: "/wissen", eintraege: [{ label: "Artikeltitel", href: "/wissen/slug" }], linkLabel: "Alle Artikel" },
  // { titel: "Whitepaper", kurz: "Leitfäden zum Download", href: "/wissen#whitepaper", eintraege: [...], linkLabel: "Alle Whitepaper" },
].filter((s) => s.eintraege.length > 0);

export const wissenEinstieg = [
  { label: "Alle Selbstchecks", href: "/checks", icon: "gauge" },
  { label: "Gespräch anfragen", href: "/gespraech", icon: "calendar" },
];
