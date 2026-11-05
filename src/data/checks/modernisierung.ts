// Modernisierungscheck für Nachfolgerinnen und Nachfolger im Amt.
// Bewertung ist rein regelbasiert: jede Option trägt einen Reifegrad m (1 = schwach, 4 = stark).
// Modernisierungsbedarf = 100 − Ø-Reifegrad (auf 0–100 % umgerechnet). Keine Benchmarks, keine KI.

export type SaeuleId = "kunden" | "mitarbeiter" | "prozesse" | "ki";

export interface Option {
  text: string;
  /** Reifegrad 1–4. Fehlt bei Profilfragen. */
  m?: number;
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

export const bereiche: Bereich[] = [
  { id: "profil", label: "Profil", kurz: "Profil" },
  {
    id: "markt",
    label: "Markt & Vertrieb",
    kurz: "Markt",
    deutung: [
      "Ihr Umsatz hängt an wenigen Kunden und an Beziehungen aus der Vorgängergeneration. Neues Geschäft entsteht eher zufällig, und ob die großen Kunden auch die profitablen sind, ist offen.",
      "Der Vertrieb funktioniert, aber er ist an Personen gebunden. Für planbares Wachstum fehlen Kennzahlen, eine klare Positionierung oder ein digitaler Zugang zu neuen Kunden.",
      "Ihr Vertrieb ist breit aufgestellt und wird über Zahlen gesteuert. Der nächste Schritt ist Feinschliff bei Positionierung und Kundenwert.",
    ],
  },
  {
    id: "talente",
    label: "Arbeitgeber & Talente",
    kurz: "Talente",
    deutung: [
      "Als Arbeitgeber treten Sie auf wie vor zwanzig Jahren. Das Wissen der erfahrenen Leute ist nicht gesichert, und junge Fachkräfte finden bei Ihnen weder Perspektive noch einen schnellen Bewerbungsweg.",
      "Die Basis stimmt, aber im Wettbewerb um Fachkräfte verlieren Sie Zeit: beim Bewerbungsprozess, beim Onboarding oder bei nachvollziehbaren Gehalts- und Entwicklungswegen.",
      "Sie sind als Arbeitgeber gut aufgestellt. Jetzt geht es darum, das sichtbar zu machen und die Nachfolge in Schlüsselpositionen abzusichern.",
    ],
  },
  {
    id: "fuehrung",
    label: "Führung & Steuerung",
    kurz: "Führung",
    deutung: [
      "Entscheidungen laufen über eine Person, Ziele liegen im Kopf, gesteuert wird mit dem Blick in den Rückspiegel. Die Organisation ist noch auf die bisherige Führung zugeschnitten, nicht auf Ihre.",
      "Es gibt erste Strukturen, aber Zuständigkeiten, Freigaben und Ziele sind nicht klar genug geregelt. Das bremst Tempo und kostet Sie selbst viel Zeit im Tagesgeschäft.",
      "Ihr Unternehmen wird über klare Rollen, Ziele und Kennzahlen geführt. Das ist eine starke Grundlage für jede weitere Veränderung.",
    ],
  },
  {
    id: "prozesse",
    label: "Prozesse & Daten",
    kurz: "Prozesse",
    deutung: [
      "Ihre Abläufe leben von Insellösungen, Doppelerfassung und dem Wissen einzelner Mitarbeiter. Fällt eine Schlüsselperson aus, steht ein Teil des Betriebs.",
      "Die Kernsysteme sind da, aber nicht durchgängig verbunden. Zwischen Anfrage und Rechnung wird abgetippt, gesucht und nachgefragt.",
      "Ihre Prozesse sind dokumentiert und weitgehend digital. Damit haben Sie die Datenbasis, auf der Automatisierung und KI wirklich wirken.",
    ],
  },
  {
    id: "digital",
    label: "Digitalisierung & KI",
    kurz: "Digital & KI",
    deutung: [
      "Digitalisierung findet bei Ihnen vor allem als Ersatzinvestition statt. KI wird kaum oder ungeregelt genutzt, und die Pflichten aus dem EU AI Act sind noch offen.",
      "Erste Schritte sind gemacht, aber ohne Plan und ohne Regeln. Das Potenzial von Automatisierung und KI bleibt größtenteils liegen.",
      "Sie investieren gezielt in Digitalisierung und setzen KI geregelt ein. Jetzt lohnt der Blick auf die nächsten Anwendungsfälle mit messbarem Nutzen.",
    ],
  },
];

export const fragen: Frage[] = [
  // ---------- Profil ----------
  {
    id: "branche",
    bereich: "profil",
    frage: "In welcher Branche ist Ihr Unternehmen zu Hause?",
    hinweis: "Damit die Beispiele in Ihrem Report zu Ihrem Alltag passen.",
    optionen: [
      { text: "Metallbau & Zerspanung" },
      { text: "Maschinen- & Anlagenbau" },
      { text: "Bau, Ausbau & Handwerk" },
      { text: "Produktion & Fertigung" },
      { text: "Großhandel & Dienstleistung" },
    ],
  },
  {
    id: "groesse",
    bereich: "profil",
    frage: "Wie viele Mitarbeiter hat Ihr Unternehmen?",
    hinweis: "Die Größe bestimmt, welche Maßnahmen zuerst Sinn ergeben.",
    optionen: [
      { text: "Unter 20" },
      { text: "20 bis 49" },
      { text: "50 bis 99" },
      { text: "100 bis 250" },
      { text: "Mehr als 250" },
    ],
  },
  {
    id: "amtszeit",
    bereich: "profil",
    frage: "Seit wann tragen Sie die operative Verantwortung?",
    hinweis: "Die ersten Jahre nach der Übergabe sind das beste Fenster für Veränderung. Danach wird der Status quo schnell zu Ihrem eigenen.",
    optionen: [
      { text: "Die Übergabe läuft noch" },
      { text: "Seit weniger als einem Jahr" },
      { text: "Seit ein bis drei Jahren" },
      { text: "Seit drei bis fünf Jahren" },
      { text: "Seit mehr als fünf Jahren" },
    ],
  },

  // ---------- Markt & Vertrieb ----------
  {
    id: "klumpen",
    bereich: "markt",
    thema: "Kundenkonzentration",
    frage: "Welchen Anteil am Umsatz erwirtschaften Ihre fünf größten Kunden?",
    hinweis: "Kundenkonzentration ist eine der ersten Kennzahlen, auf die Banken, Investoren und Kaufinteressenten schauen.",
    optionen: [
      { text: "Unter 20 %", m: 4 },
      { text: "20 bis 40 %", m: 3 },
      { text: "40 bis 60 %", m: 2, signal: "Fünf Kunden tragen 40 bis 60 % Ihres Umsatzes. Ihre Verhandlungsposition bei Preisen und Konditionen ist entsprechend schwach." },
      { text: "Mehr als 60 %", m: 1, signal: "Ihre fünf größten Kunden stehen für mehr als 60 % des Umsatzes. Verliert einer davon das Interesse, trifft das Ihr Unternehmen im Kern." },
    ],
  },
  {
    id: "neukundenquote",
    bereich: "markt",
    thema: "Neukundenquote",
    frage: "Welcher Anteil Ihres Umsatzes stammt von Kunden, die in den letzten drei Jahren neu dazugekommen sind?",
    hinweis: "Die Neukundenquote zeigt, ob Ihr Unternehmen aus eigener Kraft wächst oder vom Bestand lebt.",
    optionen: [
      { text: "Weniger als 5 %", m: 1, signal: "Weniger als 5 % Ihres Umsatzes kommt von Neukunden. Ihr Unternehmen lebt vom Bestand, und der schrumpft mit jeder Kündigung." },
      { text: "5 bis 15 %", m: 2, signal: "Nur 5 bis 15 % des Umsatzes stammen von Neukunden. Für Wachstum nach der Übergabe reicht das selten." },
      { text: "15 bis 30 %", m: 3 },
      { text: "Mehr als 30 %", m: 4 },
    ],
  },
  {
    id: "deckungsbeitrag",
    bereich: "markt",
    thema: "Kundenprofitabilität",
    frage: "Kennen Sie den Deckungsbeitrag je Kunde oder je Auftrag?",
    hinweis: "Gemeint ist eine Auswertung, die Sie tatsächlich nutzen, nicht eine, die theoretisch möglich wäre.",
    optionen: [
      { text: "Laufend je Auftrag, mit Nachkalkulation", m: 4 },
      { text: "Für die größten Kunden, als grobe Größe", m: 2, signal: "Den Deckungsbeitrag kennen Sie nur grob. Preisentscheidungen fallen eher aus dem Bauch als aus den Zahlen." },
      { text: "Wir steuern vorrangig über den Umsatz", m: 1, signal: "Ihr Unternehmen steuert über Umsatz. Ob die größten Kunden auch die profitabelsten sind, weiß niemand genau." },
      { text: "Je Kunde, in einer jährlichen Auswertung", m: 3 },
    ],
  },
  {
    id: "pipeline",
    bereich: "markt",
    thema: "Vertriebssteuerung",
    frage: "Wie verlässlich können Sie den Auftragseingang der nächsten sechs Monate einschätzen?",
    hinweis: "Gemeint ist der Auftragseingang über alle Kunden, nicht nur bei Rahmenverträgen.",
    optionen: [
      { text: "Über eine Angebotsliste mit Abschlusschancen", m: 3 },
      { text: "Aus Erfahrung und Gesprächen mit Stammkunden", m: 2, signal: "Ihre Umsatzprognose beruht auf Bauchgefühl. Eine Vertriebspipeline mit Wahrscheinlichkeiten gibt es nicht." },
      { text: "Über eine laufend gepflegte Pipeline im CRM", m: 4 },
      { text: "Kaum, der Auftragseingang schwankt stark", m: 1, signal: "Den Auftragseingang können Sie nicht vorhersagen. Kapazität und Personal planen Sie damit auf Sicht." },
    ],
  },
  {
    id: "positionierung",
    bereich: "markt",
    thema: "Positionierung",
    frage: "Ein Kunde fragt, warum er bei Ihnen statt beim günstigsten Wettbewerber kaufen soll. Was antwortet Ihr Vertrieb?",
    hinweis: "Denken Sie an die Antwort, die Ihr Vertrieb tatsächlich gibt, nicht an die ideale.",
    optionen: [
      { text: "Mit konkreten Leistungsmerkmalen, je nach Verkäufer", m: 3 },
      { text: "Mit Qualität und Zuverlässigkeit", m: 1, signal: "Ihr Vertrieb argumentiert mit Qualität und Zuverlässigkeit. Das sagt jeder Wettbewerber, also entscheidet am Ende der Preis." },
      { text: "Mit einem festen Nutzenversprechen je Zielgruppe", m: 4 },
      { text: "Mit unserer Erfahrung und der persönlichen Betreuung", m: 2, signal: "Ihr stärkstes Argument ist die Beziehung. Die hängt an Personen und geht mit ihnen in Rente." },
    ],
  },
  {
    id: "digitalanteil",
    bereich: "markt",
    thema: "Digitale Akquise",
    frage: "Welcher Anteil Ihrer qualifizierten Anfragen kommt über digitale Kanäle wie Website, LinkedIn oder Branchenportale?",
    hinweis: "Qualifiziert heißt: eine konkrete Anfrage, aus der ein Angebot entstehen kann.",
    optionen: [
      { text: "Unter 10 %", m: 2, signal: "Weniger als 10 % Ihrer Anfragen kommen digital. Neue Ansprechpartner bei Kunden finden Sie online kaum." },
      { text: "10 bis 30 %", m: 3 },
      { text: "Mehr als 30 %", m: 4 },
      { text: "Das erfassen wir nicht", m: 1, signal: "Woher Ihre Anfragen kommen, wird nicht gemessen. Ob sich Website und Online-Auftritt lohnen, bleibt offen." },
    ],
  },

  // ---------- Arbeitgeber & Talente ----------
  {
    id: "evp",
    bereich: "talente",
    thema: "Arbeitgeberversprechen",
    frage: "Womit wirbt Ihre aktuelle Stellenanzeige unter „Wir bieten“?",
    hinweis: "Schauen Sie ruhig kurz in Ihre aktuelle Anzeige und wählen Sie, was am ehesten passt.",
    optionen: [
      { text: "Konkrete Extras wie Jobrad, bAV oder Zuschüsse", m: 3 },
      { text: "Gehaltsspanne, Entwicklungsmöglichkeiten und Einblicke ins Team", m: 4 },
      { text: "Familiäres Umfeld, Obstkorb und Getränke", m: 1, signal: "Ihre Stellenanzeigen werben mit familiärem Umfeld und Obstkorb. Für junge Fachkräfte ist das Standard, kein Grund zu wechseln." },
      { text: "Sicherer Arbeitsplatz, unbefristeter Vertrag, pünktliches Gehalt", m: 2, signal: "Ihre Anzeigen versprechen Sicherheit, aber keine Perspektive. Für die nächste Generation ist das zu wenig." },
    ],
  },
  {
    id: "timetohire",
    bereich: "talente",
    thema: "Time-to-Hire",
    frage: "Wie lange dauert es von der Bewerbung bis zur Zusage an den Kandidaten?",
    hinweis: "Gemessen vom Eingang der Bewerbung bis zur Zusage an den Kandidaten.",
    optionen: [
      { text: "Weniger als eine Woche", m: 4 },
      { text: "Eine bis zwei Wochen", m: 3 },
      { text: "Zwei bis vier Wochen", m: 2, signal: "Ihr Bewerbungsprozess dauert zwei bis vier Wochen. In dieser Zeit verlieren Sie die gefragtesten Kandidaten." },
      { text: "Mehr als vier Wochen", m: 1, signal: "Zwischen Bewerbung und Zusage vergehen mehr als vier Wochen. Gute Kandidaten haben bis dahin anderswo unterschrieben." },
    ],
  },
  {
    id: "wissenssicherung",
    bereich: "talente",
    thema: "Wissenssicherung",
    frage: "Wie ist das Wissen von Schlüsselpersonen gesichert, die in den nächsten fünf Jahren in Rente gehen?",
    hinweis: "Gemeint ist Erfahrungswissen: Maschineneinstellungen, Kundenbesonderheiten, Kalkulationslogik.",
    optionen: [
      { text: "Die Abgänge sind bekannt, die Übergabe planen wir zeitnah", m: 2, signal: "Die Abgänge sind bekannt, das Wissen ist nicht dokumentiert. Die Uhr läuft, und niemand hält sie an." },
      { text: "Für jede Schlüsselposition gibt es einen Nachfolgeplan mit dokumentiertem Wissen", m: 4 },
      { text: "Das haben wir noch nicht systematisch erfasst", m: 1, signal: "Sie wissen nicht genau, welche Schlüsselpersonen in den nächsten Jahren gehen. Mit jedem Abschied kann ungesichertes Wissen verschwinden." },
      { text: "Nachfolger sind benannt, die Einarbeitung läuft", m: 3 },
    ],
  },
  {
    id: "fruehfluktuation",
    bereich: "talente",
    thema: "Frühfluktuation",
    frage: "Wie viele neue Mitarbeiter verlassen Ihr Unternehmen im ersten Jahr wieder?",
    hinweis: "Gemeint sind Kündigungen von beiden Seiten innerhalb der ersten zwölf Monate.",
    optionen: [
      { text: "Unter 10 %", m: 4 },
      { text: "10 bis 25 %", m: 2, signal: "10 bis 25 % der Neuen gehen im ersten Jahr. Ein strukturiertes Onboarding würde hier spürbar Kosten sparen." },
      { text: "Mehr als 25 %", m: 1, signal: "Mehr als jeder vierte neue Mitarbeiter geht im ersten Jahr. Das Onboarding verliert, was das Recruiting mühsam gewonnen hat." },
      { text: "Das erfassen wir nicht", m: 1, signal: "Frühfluktuation wird nicht erfasst. Wie viel Recruiting-Aufwand im ersten Jahr verpufft, bleibt unsichtbar." },
    ],
  },
  {
    id: "verguetung",
    bereich: "talente",
    thema: "Vergütungssystem",
    frage: "Wie werden Gehälter und Entwicklungsschritte bei Ihnen festgelegt?",
    hinweis: "Die EU-Entgelttransparenzrichtlinie verlangt nachvollziehbare Kriterien für die Vergütung. Orientierung, keine Rechtsberatung.",
    optionen: [
      { text: "Nach Tarif oder festen Gehaltsbändern", m: 3 },
      { text: "Individuell, je nach Person und Verhandlung", m: 1, signal: "Gehälter sind individuell verhandelt und historisch gewachsen. Das wird mit der EU-Entgelttransparenzrichtlinie zum Risiko und sorgt intern für Unruhe." },
      { text: "Über Gehaltsbänder, Kompetenzmodell und jährliche Entwicklungsgespräche", m: 4 },
      { text: "Vor allem nach Betriebszugehörigkeit und Erfahrung", m: 2, signal: "Gehälter steigen vor allem mit der Betriebszugehörigkeit. Leistungsträger und Quereinsteiger sehen bei Ihnen keinen Entwicklungsweg." },
    ],
  },

  // ---------- Führung & Steuerung ----------
  {
    id: "strategie",
    bereich: "fuehrung",
    thema: "Strategie",
    frage: "Gibt es eine schriftliche Strategie mit Zielen für die nächsten drei Jahre, die Ihre Führungskräfte kennen?",
    hinweis: "Gemeint ist ein Dokument, auf das sich Ihre Führungskräfte im Alltag beziehen können.",
    optionen: [
      { text: "Wir arbeiten mit Jahreszielen, eine Mehrjahresplanung gibt es nicht", m: 2, signal: "Ihre Ziele sind nicht schriftlich festgehalten. So lassen sich weder Fortschritt messen noch Prioritäten begründen." },
      { text: "Schriftlich, mit Zielen je Bereich und regelmäßiger Überprüfung", m: 4 },
      { text: "Die Richtung bespreche ich direkt und situativ mit den Führungskräften", m: 1, signal: "Ihre Strategie liegt im Kopf. Führungskräfte entscheiden täglich, ohne das Ziel zu kennen." },
      { text: "Schriftlich, bisher aber nur in der Geschäftsleitung bekannt", m: 3 },
    ],
  },
  {
    id: "kennzahlen",
    bereich: "fuehrung",
    thema: "Controlling",
    frage: "Mit welchen Zahlen steuern Sie das Unternehmen unterjährig?",
    hinweis: "Gemeint ist, worauf Sie im Monat tatsächlich schauen.",
    optionen: [
      { text: "Über ein monatliches Reporting mit ausgewählten Kennzahlen", m: 3 },
      { text: "Über die BWA des Steuerberaters", m: 1, signal: "Sie steuern mit der BWA, also mit Wochen Verzug. Probleme sehen Sie erst, wenn sie schon in den Zahlen stehen." },
      { text: "Über ein Cockpit mit Frühindikatoren und Liquiditätsvorschau", m: 4 },
      { text: "Über Umsatz, Auftragsbestand und Kontostand", m: 2, signal: "Gesteuert wird über Umsatz und Kontostand. Frühindikatoren für Auslastung, Marge oder Liquidität fehlen." },
    ],
  },
  {
    id: "ebenen",
    bereich: "fuehrung",
    thema: "Organisationsstruktur",
    frage: "Wie viele Führungsebenen liegen zwischen Mitarbeitern und Geschäftsleitung?",
    hinweis: "Zählen Sie Meister, Team-, Abteilungs- und Bereichsleitungen dazwischen.",
    optionen: [
      { text: "Keine, alle berichten an die Geschäftsleitung", m: 1, signal: "Alle berichten direkt an die Geschäftsleitung. Gute Leute sehen bei Ihnen keinen Weg nach oben, und jede Frage landet bei Ihnen." },
      { text: "Eine, etwa Meister oder Teamleitung", m: 3 },
      { text: "Zwei", m: 4 },
      { text: "Drei oder mehr", m: 1, signal: "Zwischen Mitarbeitern und Geschäftsleitung liegen drei oder mehr Ebenen. Entscheidungen brauchen lange, Ideen kommen oben nicht an." },
    ],
  },
  {
    id: "delegation",
    bereich: "fuehrung",
    thema: "Entscheidungskompetenz",
    frage: "Bis zu welcher Grenze dürfen Führungskräfte ohne Rücksprache mit Ihnen entscheiden?",
    hinweis: "Gemeint sind Einkauf, Preisnachlässe, Einstellungen und Investitionen.",
    optionen: [
      { text: "Schriftlich geregelt für einzelne Bereiche, etwa den Einkauf", m: 3 },
      { text: "Wichtige Entscheidungen treffe ich grundsätzlich selbst", m: 1, signal: "Ohne Ihre Freigabe läuft nichts. Sie sind der Engpass Ihres eigenen Unternehmens." },
      { text: "Über eine Kompetenzmatrix für Einkauf, Preise und Personal", m: 4 },
      { text: "Es gibt klare Absprachen, aber nichts Schriftliches", m: 2, signal: "Entscheidungsgrenzen sind nur mündlich geregelt. Im Zweifel fragt jeder lieber nach, und Entscheidungen bleiben liegen." },
    ],
  },
  {
    id: "letztesWort",
    bereich: "fuehrung",
    thema: "Übergabe",
    frage: "Bei wem holen sich Mitarbeiter bei wichtigen Fragen das letzte Wort?",
    hinweis: "Ehrlich ist hier am hilfreichsten. Die Antwort sieht niemand außer Ihnen.",
    optionen: [
      { text: "Bei den zuständigen Führungskräften", m: 4 },
      { text: "Meist noch beim Senior", m: 1, signal: "Bei wichtigen Fragen hat noch der Senior das letzte Wort. Die Übergabe ist auf dem Papier erledigt, im Alltag noch nicht." },
      { text: "Bei mir", m: 3 },
      { text: "Je nach Thema bei mir oder beim Senior", m: 2, signal: "Mitarbeiter fragen mal Sie, mal den Senior. Doppelte Ansprechpartner bremsen jede Veränderung." },
    ],
  },

  // ---------- Prozesse & Daten ----------
  {
    id: "insel",
    bereich: "prozesse",
    thema: "Systemlandschaft",
    frage: "Wie viele Excel-Listen und Einzelprogramme steuern neben dem ERP Ihre Kernprozesse?",
    hinweis: "Kundenlisten, Auftragsübersichten, Kapazitätspläne, Preiskalkulationen: alles zählt.",
    optionen: [
      { text: "Kaum welche, die Kernprozesse laufen integriert", m: 4 },
      { text: "Eine Handvoll", m: 3 },
      { text: "Mehr als zehn", m: 2, signal: "Mehr als zehn Insellösungen steuern Ihre Kernprozesse. Ein gemeinsamer Datenstand existiert nicht." },
      { text: "Wir arbeiten ohne ERP, vor allem mit Excel", m: 1, signal: "Ihr Unternehmen läuft ohne ERP, vieles über Excel. Jede Liste ist eine Fehlerquelle und hängt an der Person, die sie pflegt." },
    ],
  },
  {
    id: "medienbrueche",
    bereich: "prozesse",
    thema: "Medienbrüche",
    frage: "Wie oft wechselt ein Auftrag zwischen Anfrage und Rechnung das Medium?",
    hinweis: "Jedes Abtippen, Ausdrucken, Einscannen oder Weiterleiten per E-Mail ist ein Medienbruch.",
    optionen: [
      { text: "Mehr als fünfmal", m: 2, signal: "Ein Auftrag wechselt mehr als fünfmal das Medium. Jede Doppelerfassung kostet Zeit und erzeugt Fehler." },
      { text: "Zwei- bis fünfmal", m: 3 },
      { text: "Gar nicht, der Ablauf ist durchgängig digital", m: 4 },
      { text: "Das haben wir nie gezählt", m: 1, signal: "Niemand kann sagen, wie oft ein Auftrag das Medium wechselt. Der Ablauf ist gewachsen, nicht gestaltet." },
    ],
  },
  {
    id: "prozessdoku",
    bereich: "prozesse",
    thema: "Prozessdokumentation",
    frage: "Wie sind Ihre Kernprozesse dokumentiert?",
    hinweis: "Gemeint ist der Ort, an dem jemand Neues nachschlagen würde, wie ein Ablauf funktioniert.",
    optionen: [
      { text: "Im QM-Handbuch", m: 2, signal: "Prozesse stehen im QM-Handbuch, gelebt wird etwas anderes. Die Dokumentation erfüllt das Audit, nicht den Alltag." },
      { text: "In einer digitalen Prozesslandkarte mit Verantwortlichen", m: 4 },
      { text: "Über Erfahrung und Einarbeitung durch Kollegen", m: 1, signal: "Ihre Prozesse stehen nirgends. Was nicht beschrieben ist, lässt sich weder verbessern noch automatisieren." },
      { text: "In aktuellen Beschreibungen der wichtigsten Abläufe", m: 3 },
    ],
  },
  {
    id: "kundendaten",
    bereich: "prozesse",
    thema: "CRM",
    frage: "Wo liegen Kundenhistorie, Ansprechpartner und offene Angebote?",
    hinweis: "Gemeint ist der Ort, an dem man den vollständigen Stand zu einem Kunden findet.",
    optionen: [
      { text: "Verteilt über ERP, Excel und Postfächer", m: 2, signal: "Kundendaten sind über Excel und ERP verteilt. Einen vollständigen Blick auf einen Kunden hat niemand." },
      { text: "Zentral im CRM, aktuell und für alle Berechtigten sichtbar", m: 4 },
      { text: "Bei den jeweiligen Betreuern, in Postfach und Notizen", m: 1, signal: "Kundenwissen liegt in Postfächern und Köpfen. Kündigt ein Vertriebler, gehen seine Kunden womöglich mit." },
      { text: "Im CRM, die Pflege ist unterschiedlich gut", m: 3 },
    ],
  },
  {
    id: "ausfall",
    bereich: "prozesse",
    thema: "Ausfallsicherheit",
    frage: "Was passiert, wenn Ihre wichtigste Person im Büro drei Wochen ausfällt?",
    hinweis: "Denken Sie an Auftragsabwicklung, Buchhaltung oder Disposition.",
    optionen: [
      { text: "Eine Vertretung übernimmt, mit kleinen Einbußen", m: 3 },
      { text: "Es läuft weiter, mit mehr Rückfragen als sonst", m: 2, signal: "Ein Ausfall im Büro führt zu Fehlern und Rückfragen. Vertretungen sind nicht vorbereitet." },
      { text: "Das wäre schwer zu überbrücken", m: 1, signal: "Fällt Ihre wichtigste Bürokraft aus, stehen Abläufe still. Ihr Betrieb hat eine Schwachstelle mit Namen." },
      { text: "Abläufe und Zugriffe sind so geregelt, dass es kaum auffällt", m: 4 },
    ],
  },

  // ---------- Digitalisierung & KI ----------
  {
    id: "budget",
    bereich: "digital",
    thema: "IT-Budget",
    frage: "Wie planen Sie Ihre Investitionen in IT und Digitalisierung?",
    hinweis: "Gemeint sind Software, Hardware, Schulung und externe Unterstützung zusammen.",
    optionen: [
      { text: "Mit einem festen Jahresbudget", m: 3 },
      { text: "Nach Bedarf, wenn etwas ersetzt werden muss", m: 1, signal: "IT wird ersetzt, wenn sie kaputtgeht. Digitalisierung findet bei Ihnen nur als Reparatur statt." },
      { text: "Mit Budget und mehrjähriger Digital-Roadmap", m: 4 },
      { text: "Von Fall zu Fall, je nach Projekt", m: 2, signal: "Für Digitalisierung gibt es kein festes Budget. Jede Investition muss einzeln erkämpft werden." },
    ],
  },
  {
    id: "automatisierung",
    bereich: "digital",
    thema: "Automatisierung",
    frage: "Welche Routineaufgaben laufen bei Ihnen bereits automatisiert?",
    hinweis: "Zum Beispiel Belegerfassung, Auftragsbestätigung, Mahnwesen oder Terminerinnerungen.",
    optionen: [
      { text: "Mehrere Abläufe, gezielt eingerichtet", m: 3 },
      { text: "Was das ERP standardmäßig mitbringt", m: 2, signal: "Automatisiert ist nur, was das ERP mitbringt. Gezielte Automatisierung findet nicht statt." },
      { text: "Systematisch, wir prüfen laufend neue Potenziale", m: 4 },
      { text: "Bisher erledigen wir das von Hand", m: 1, signal: "Routineaufgaben laufen komplett von Hand. Ihr Team verbringt Zeit mit Arbeit, die Software übernehmen könnte." },
    ],
  },
  {
    id: "kinutzung",
    bereich: "digital",
    thema: "Generative KI",
    frage: "Wie setzt Ihr Unternehmen generative KI wie ChatGPT oder Copilot heute ein?",
    hinweis: "Auch die private Nutzung durch Mitarbeiter für Firmenaufgaben zählt.",
    optionen: [
      { text: "Einzelne Mitarbeiter nutzen Tools nach eigenem Ermessen", m: 1, signal: "Mitarbeiter nutzen private KI-Tools ohne Freigabe. Firmendaten landen dabei unkontrolliert bei Drittanbietern." },
      { text: "Unternehmensweit, mit Richtlinie und festen Anwendungsfällen", m: 4 },
      { text: "Bisher nicht", m: 1, signal: "Generative KI spielt bei Ihnen keine Rolle. Wettbewerber, die sie nutzen, schreiben Angebote und Texte in einem Bruchteil der Zeit." },
      { text: "Mit freigegebenen Tools für einzelne Aufgaben", m: 3 },
    ],
  },
  {
    id: "aiact",
    bereich: "digital",
    thema: "EU AI Act",
    frage: "Seit Februar 2025 müssen Unternehmen sicherstellen, dass Mitarbeiter, die mit KI arbeiten, ausreichend KI-kompetent sind. Wie ist das bei Ihnen geregelt?",
    hinweis: "Die Pflicht ergibt sich aus Art. 4 der EU-KI-Verordnung (AI Act). Orientierung, keine Rechtsberatung.",
    optionen: [
      { text: "Erste Schulungen haben stattgefunden", m: 3 },
      { text: "Das Thema steht auf unserer Liste", m: 2, signal: "Die Pflicht zur KI-Kompetenz ist bekannt, aber nicht umgesetzt. Schulung und Nachweis fehlen." },
      { text: "Schulungen und KI-Richtlinie sind dokumentiert", m: 4 },
      { text: "Damit haben wir uns noch nicht befasst", m: 1, signal: "Die KI-Kompetenzpflicht aus dem EU AI Act ist bei Ihnen noch unbekannt. Wer KI nutzt, sollte das zeitnah klären." },
    ],
  },
  {
    id: "datenbasis",
    bereich: "digital",
    thema: "Datenbasis für KI",
    frage: "Könnte eine KI heute auf Ihre Angebote, Zeichnungen und Kundenkorrespondenz zugreifen, um Ihr Team zu unterstützen?",
    hinweis: "Gemeint sind die Unterlagen, mit denen Ihr Team täglich arbeitet.",
    optionen: [
      { text: "Größtenteils, sie liegen strukturiert in ERP oder DMS", m: 3 },
      { text: "Teilweise, sie liegen auf Laufwerken und in Postfächern", m: 2, signal: "Ihre Daten sind digital, aber verstreut. Eine KI fände dort so wenig wie Ihre Mitarbeiter." },
      { text: "Ja, zentral, strukturiert und mit Rechtekonzept", m: 4 },
      { text: "Kaum, vieles liegt auf Papier oder lokal", m: 1, signal: "Ihr Wissen liegt auf Papier und lokalen Rechnern. Für KI-Anwendungen fehlt die Grundlage." },
    ],
  },
];

export const massnahmen: Massnahme[] = [
  {
    id: "neukunden",
    titel: "Neukundenvertrieb mit System",
    text: "Ein planbarer Weg zu neuen Kunden, damit kein einzelner Abnehmer über Ihre Zukunft entscheidet.",
    saeule: "kunden",
    fragen: ["klumpen", "neukundenquote", "pipeline"],
    schritte: [
      "Zielkunden-Profil aus Ihren profitabelsten Bestandskunden ableiten",
      "Vertriebspipeline im CRM mit festen Stufen und Wahrscheinlichkeiten aufsetzen",
      "Monatlichen Akquise-Rhythmus über LinkedIn, Website und Direktansprache starten",
    ],
  },
  {
    id: "positionierung",
    titel: "Schärfere Positionierung",
    text: "Ein klares Nutzenversprechen je Zielgruppe, das Ihr Vertrieb in zwei Sätzen erklären kann.",
    saeule: "kunden",
    fragen: ["positionierung"],
    schritte: [
      "Fünf Gespräche mit Bestandskunden: Warum kaufen Sie wirklich bei uns?",
      "Nutzenversprechen je Zielgruppe formulieren und mit Belegen untermauern",
      "Website, Angebote und Vertriebsunterlagen darauf ausrichten",
    ],
  },
  {
    id: "digitaleakquise",
    titel: "Digitale Anfragestrecke",
    text: "Website und LinkedIn werden zum messbaren Kanal für qualifizierte Anfragen.",
    saeule: "kunden",
    fragen: ["digitalanteil"],
    schritte: [
      "Herkunft jeder Anfrage erfassen, damit Kanäle vergleichbar werden",
      "Website auf Zielgruppen, Referenzen und eine klare Anfrage ausrichten",
      "LinkedIn-Präsenz der Geschäftsführung mit festem Redaktionsplan aufbauen",
    ],
  },
  {
    id: "kundenwert",
    titel: "Steuerung nach Kundenwert",
    text: "Deckungsbeiträge je Kunde und Auftrag machen sichtbar, wo Sie Geld verdienen und wo nicht.",
    saeule: "prozesse",
    fragen: ["deckungsbeitrag"],
    schritte: [
      "Deckungsbeitrag je Kunde für die letzten zwei Jahre auswerten",
      "Kunden nach Umsatz und Marge in eine Matrix einordnen",
      "Preis- und Konditionsgespräche mit unprofitablen Kunden vorbereiten",
    ],
  },
  {
    id: "arbeitgeber",
    titel: "Arbeitgebermarke für die Gen Z",
    text: "Stellenanzeigen mit Gehaltsspanne, Perspektive und echten Einblicken, dazu ein Bewerbungsweg in zwei Minuten.",
    saeule: "mitarbeiter",
    fragen: ["evp", "timetohire"],
    schritte: [
      "Arbeitgeberversprechen mit Ihrem Team erarbeiten: Was macht uns wirklich aus?",
      "Stellenanzeigen neu schreiben und Kurzbewerbung am Handy ermöglichen",
      "Zusage-Prozess auf unter zwei Wochen verkürzen, mit festen Rückmeldezeiten",
    ],
  },
  {
    id: "onboarding",
    titel: "Onboarding und Gehaltsbänder",
    text: "Ein strukturierter Einstieg und nachvollziehbare Gehalts- und Entwicklungswege halten neue Leute im Unternehmen.",
    saeule: "mitarbeiter",
    fragen: ["fruehfluktuation", "verguetung"],
    schritte: [
      "Frühfluktuation erfassen und Austrittsgründe systematisch abfragen",
      "Onboarding-Plan für die ersten 100 Tage mit Pate und Checkliste einführen",
      "Gehaltsbänder und Entwicklungsstufen je Funktion definieren",
    ],
  },
  {
    id: "wissen",
    titel: "Wissen sichern vor der Rente",
    text: "Das Erfahrungswissen Ihrer Schlüsselpersonen wird festgehalten, bevor es in Rente geht.",
    saeule: "mitarbeiter",
    fragen: ["wissenssicherung", "ausfall"],
    schritte: [
      "Schlüsselpersonen und Rentenabgänge der nächsten fünf Jahre kartieren",
      "Erfahrungswissen in kurzen Videos und Checklisten festhalten",
      "Nachfolger benennen und Vertretungen für kritische Rollen einarbeiten",
    ],
  },
  {
    id: "organisation",
    titel: "Organisation nach der Übergabe",
    text: "Klare Ebenen, Rollen und Entscheidungsgrenzen machen Sie vom Engpass zur Führungskraft.",
    saeule: "prozesse",
    fragen: ["ebenen", "delegation", "letztesWort"],
    schritte: [
      "Ist-Organigramm mit tatsächlichen Entscheidungswegen aufnehmen",
      "Zielstruktur mit Ebenen, Rollen und Kompetenzmatrix festlegen",
      "Neue Ordnung gemeinsam mit dem Senior im Team verkünden",
    ],
  },
  {
    id: "steuerung",
    titel: "Strategie und Kennzahlen-Cockpit",
    text: "Schriftliche Ziele für drei Jahre und ein Cockpit mit Frühindikatoren statt Blick in den Rückspiegel.",
    saeule: "prozesse",
    fragen: ["strategie", "kennzahlen"],
    schritte: [
      "Strategie-Workshop mit den Führungskräften: Wo stehen wir in drei Jahren?",
      "Fünf bis acht Steuerungskennzahlen mit Zielwerten festlegen",
      "Monatliches Cockpit mit Auftragseingang, Auslastung und Liquidität einführen",
    ],
  },
  {
    id: "system",
    titel: "Ein System statt Insellösungen",
    text: "Kunden, Aufträge und Termine liegen an einem Ort. Jeder arbeitet mit dem gleichen Stand.",
    saeule: "prozesse",
    fragen: ["insel", "kundendaten"],
    schritte: [
      "Alle Insellösungen und Datenquellen erfassen und bewerten",
      "CRM einführen oder sauber an das ERP anbinden",
      "Excel-Listen schrittweise ablösen, beginnend mit den Kundendaten",
    ],
  },
  {
    id: "durchgaengig",
    titel: "Durchgängige Auftragsabwicklung",
    text: "Von der Anfrage bis zur Rechnung ohne Abtippen: dokumentiert, verbunden, nachvollziehbar.",
    saeule: "prozesse",
    fragen: ["medienbrueche", "prozessdoku"],
    schritte: [
      "Auftragsprozess von Anfrage bis Rechnung gemeinsam mit dem Team aufnehmen",
      "Medienbrüche markieren und nach Aufwand priorisieren",
      "Die drei größten Brüche durch Schnittstellen oder Automatisierung schließen",
    ],
  },
  {
    id: "kiregeln",
    titel: "KI-Richtlinie und Schulung",
    text: "Klare Regeln, freigegebene Tools und eine dokumentierte Schulung nach Art. 4 AI Act.",
    saeule: "ki",
    fragen: ["kinutzung", "aiact"],
    schritte: [
      "Bestandsaufnahme: Wer nutzt welche KI-Tools wofür?",
      "KI-Richtlinie mit freigegebenen Tools und Datenregeln erstellen",
      "Team-Schulung durchführen und dokumentieren",
    ],
  },
  {
    id: "kianwendung",
    titel: "Erste KI-Anwendungen mit Nutzen",
    text: "Routine in Angebot, Büro und Kommunikation wird automatisiert, auf einer sauberen Datenbasis.",
    saeule: "ki",
    fragen: ["automatisierung", "datenbasis", "budget"],
    schritte: [
      "Die zehn zeitintensivsten Routineaufgaben erfassen und bewerten",
      "Datenbasis für den ersten Anwendungsfall zentral und strukturiert ablegen",
      "Pilot umsetzen, Zeitersparnis messen, dann ausrollen",
    ],
  },
];

export const saeulenNamen: Record<SaeuleId, string> = {
  kunden: "Kunden",
  mitarbeiter: "Mitarbeiter",
  prozesse: "Prozesse",
  ki: "KI",
};

export const stufen = [
  { bis: 25, label: "Gut aufgestellt", text: "Ihr Unternehmen ist in vielen Punkten schon bereit für die nächste Generation. Jetzt geht es um gezielte nächste Schritte." },
  { bis: 50, label: "Spürbarer Nachholbedarf", text: "Das Fundament trägt. An mehreren Stellen arbeitet Ihr Unternehmen aber noch so, wie es vor zwanzig Jahren richtig war." },
  { bis: 75, label: "Deutlicher Modernisierungsstau", text: "Was Ihr Unternehmen bisher getragen hat, trägt nicht automatisch weiter. Mehrere Bereiche brauchen jetzt Ihre Handschrift." },
  { bis: 100, label: "Dringender Handlungsbedarf", text: "Ihr Unternehmen lebt stark vom Gewachsenen. Wer jetzt nicht anpackt, verliert Kunden und Fachkräfte an Betriebe, die es tun." },
];

export const pakete = [
  { name: "Fokus", saeulen: 1, preis: "1.490 €" },
  { name: "Wachstum", saeulen: 2, preis: "2.490 €" },
  { name: "Partner", saeulen: 4, preis: "3.990 €" },
];
