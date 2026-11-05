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
      { text: "Mehr als 60 %", m: 1, signal: "Ihre fünf größten Kunden stehen für mehr als 60 % des Umsatzes. Verliert einer davon das Interesse, trifft das Ihr Unternehmen im Kern." },
      { text: "40 bis 60 %", m: 2, signal: "Fünf Kunden tragen 40 bis 60 % Ihres Umsatzes. Ihre Verhandlungsposition bei Preisen und Konditionen ist entsprechend schwach." },
      { text: "20 bis 40 %", m: 3 },
      { text: "Unter 20 %", m: 4 },
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
    hinweis: "Große Kunden sind nicht automatisch profitable Kunden. Rabatte, Sonderwünsche und kleine Losgrößen fressen Marge oft unbemerkt.",
    optionen: [
      { text: "Nein, wir steuern über den Umsatz", m: 1, signal: "Ihr Unternehmen steuert über Umsatz. Ob die größten Kunden auch die profitabelsten sind, weiß niemand genau." },
      { text: "Grob, für die größten Kunden", m: 2, signal: "Den Deckungsbeitrag kennen Sie nur grob. Preisentscheidungen fallen eher aus dem Bauch als aus den Zahlen." },
      { text: "Ja, je Kunde, einmal im Jahr ausgewertet", m: 3 },
      { text: "Ja, laufend je Auftrag mit Nachkalkulation", m: 4 },
    ],
  },
  {
    id: "pipeline",
    bereich: "markt",
    thema: "Vertriebssteuerung",
    frage: "Wie verlässlich können Sie den Auftragseingang der nächsten sechs Monate einschätzen?",
    hinweis: "Eine gepflegte Pipeline macht Kapazität, Einkauf und Personalplanung planbar.",
    optionen: [
      { text: "Gar nicht, Aufträge kommen, wie sie kommen", m: 1, signal: "Den Auftragseingang können Sie nicht vorhersagen. Kapazität und Personal planen Sie damit auf Sicht." },
      { text: "Über Bauchgefühl und Gespräche mit Stammkunden", m: 2, signal: "Ihre Umsatzprognose beruht auf Bauchgefühl. Eine Vertriebspipeline mit Wahrscheinlichkeiten gibt es nicht." },
      { text: "Über eine Angebotsliste mit Abschlusschancen", m: 3 },
      { text: "Über eine gepflegte Pipeline im CRM", m: 4 },
    ],
  },
  {
    id: "positionierung",
    bereich: "markt",
    thema: "Positionierung",
    frage: "Ein Kunde fragt, warum er bei Ihnen statt beim günstigsten Wettbewerber kaufen soll. Was antwortet Ihr Vertrieb?",
    hinweis: "Wer sein Nutzenversprechen nicht klar benennen kann, wird über den Preis verglichen.",
    optionen: [
      { text: "Qualität und Zuverlässigkeit", m: 1, signal: "Ihr Vertrieb argumentiert mit Qualität und Zuverlässigkeit. Das sagt jeder Wettbewerber, also entscheidet am Ende der Preis." },
      { text: "Unsere lange Tradition und die persönliche Beziehung", m: 2, signal: "Ihr stärkstes Argument ist die Beziehung. Die hängt an Personen und geht mit ihnen in Rente." },
      { text: "Konkrete Leistungsmerkmale, je nach Verkäufer", m: 3 },
      { text: "Ein klares, belegtes Nutzenversprechen je Zielgruppe", m: 4 },
    ],
  },
  {
    id: "digitalanteil",
    bereich: "markt",
    thema: "Digitale Akquise",
    frage: "Welcher Anteil Ihrer qualifizierten Anfragen kommt über digitale Kanäle wie Website, LinkedIn oder Branchenportale?",
    hinweis: "Einkäufer recherchieren heute zuerst online. Wer dort nicht überzeugt, kommt auf keine Auswahlliste.",
    optionen: [
      { text: "Wird nicht gemessen", m: 1, signal: "Woher Ihre Anfragen kommen, wird nicht gemessen. Ob sich Website und Online-Auftritt lohnen, bleibt offen." },
      { text: "Unter 10 %", m: 2, signal: "Weniger als 10 % Ihrer Anfragen kommen digital. Neue Ansprechpartner bei Kunden finden Sie online kaum." },
      { text: "10 bis 30 %", m: 3 },
      { text: "Mehr als 30 %", m: 4 },
    ],
  },

  // ---------- Arbeitgeber & Talente ----------
  {
    id: "evp",
    bereich: "talente",
    thema: "Arbeitgeberversprechen",
    frage: "Womit wirbt Ihre aktuelle Stellenanzeige unter „Wir bieten“?",
    hinweis: "Das Arbeitgeberversprechen (Employer Value Proposition) entscheidet, ob Fachkräfte überhaupt weiterlesen. Schauen Sie ruhig kurz nach.",
    optionen: [
      { text: "Obstkorb, Kaffee, familiäres Umfeld, flache Hierarchien", m: 1, signal: "Ihre Stellenanzeigen werben mit Obstkorb und familiärem Umfeld. Für junge Fachkräfte ist das Standard, kein Grund zu wechseln." },
      { text: "Sicherer Arbeitsplatz, unbefristet, pünktliches Gehalt", m: 2, signal: "Ihre Anzeigen versprechen Sicherheit, aber keine Perspektive. Für die nächste Generation ist das zu wenig." },
      { text: "Konkrete Extras wie Jobrad, bAV oder Zuschüsse", m: 3 },
      { text: "Gehaltsspanne, Entwicklungspfad und echte Einblicke ins Team", m: 4 },
    ],
  },
  {
    id: "timetohire",
    bereich: "talente",
    thema: "Time-to-Hire",
    frage: "Wie lange dauert es von der Bewerbung bis zur Zusage an den Kandidaten?",
    hinweis: "Gute Fachkräfte haben meist mehrere Optionen. Wer schneller zusagt, gewinnt.",
    optionen: [
      { text: "Mehr als vier Wochen", m: 1, signal: "Zwischen Bewerbung und Zusage vergehen mehr als vier Wochen. Gute Kandidaten haben bis dahin anderswo unterschrieben." },
      { text: "Zwei bis vier Wochen", m: 2, signal: "Ihr Bewerbungsprozess dauert zwei bis vier Wochen. In dieser Zeit verlieren Sie die gefragtesten Kandidaten." },
      { text: "Eine bis zwei Wochen", m: 3 },
      { text: "Weniger als eine Woche", m: 4 },
    ],
  },
  {
    id: "wissenssicherung",
    bereich: "talente",
    thema: "Wissenssicherung",
    frage: "Wie ist das Wissen von Schlüsselpersonen gesichert, die in den nächsten fünf Jahren in Rente gehen?",
    hinweis: "Gemeint ist Erfahrungswissen: Maschineneinstellungen, Kundenbesonderheiten, Kalkulationslogik.",
    optionen: [
      { text: "Wir wissen nicht genau, wer betroffen ist", m: 1, signal: "Sie wissen nicht genau, welche Schlüsselpersonen in den nächsten Jahren gehen. Mit jedem Abschied kann ungesichertes Wissen verschwinden." },
      { text: "Bekannt, aber nichts ist dokumentiert", m: 2, signal: "Die Abgänge sind bekannt, das Wissen ist nicht dokumentiert. Die Uhr läuft, und niemand hält sie an." },
      { text: "Nachfolger sind benannt, die Einarbeitung läuft", m: 3 },
      { text: "Nachfolgeplan je Schlüsselposition, Wissen dokumentiert", m: 4 },
    ],
  },
  {
    id: "fruehfluktuation",
    bereich: "talente",
    thema: "Frühfluktuation",
    frage: "Wie viele neue Mitarbeiter verlassen Ihr Unternehmen im ersten Jahr wieder?",
    hinweis: "Frühe Kündigungen deuten fast immer auf Lücken im Onboarding oder auf falsche Erwartungen aus der Stellenanzeige hin.",
    optionen: [
      { text: "Wird nicht erfasst", m: 1, signal: "Frühfluktuation wird nicht erfasst. Wie viel Recruiting-Aufwand im ersten Jahr verpufft, bleibt unsichtbar." },
      { text: "Mehr als jeder Vierte", m: 1, signal: "Mehr als jeder vierte neue Mitarbeiter geht im ersten Jahr. Das Onboarding verliert, was das Recruiting mühsam gewonnen hat." },
      { text: "10 bis 25 %", m: 2, signal: "10 bis 25 % der Neuen gehen im ersten Jahr. Ein strukturiertes Onboarding würde hier spürbar Kosten sparen." },
      { text: "Unter 10 %", m: 4 },
    ],
  },
  {
    id: "verguetung",
    bereich: "talente",
    thema: "Vergütungssystem",
    frage: "Wie werden Gehälter und Entwicklungsschritte bei Ihnen festgelegt?",
    hinweis: "Die EU-Entgelttransparenzrichtlinie verlangt nachvollziehbare Kriterien für die Vergütung. Orientierung, keine Rechtsberatung.",
    optionen: [
      { text: "Individuell verhandelt, historisch gewachsen", m: 1, signal: "Gehälter sind individuell verhandelt und historisch gewachsen. Das wird mit der EU-Entgelttransparenzrichtlinie zum Risiko und sorgt intern für Unruhe." },
      { text: "Vor allem nach Betriebszugehörigkeit", m: 2, signal: "Gehälter steigen vor allem mit der Betriebszugehörigkeit. Leistungsträger und Quereinsteiger sehen bei Ihnen keinen Entwicklungsweg." },
      { text: "Nach Tarif oder festen Gehaltsbändern", m: 3 },
      { text: "Transparente Bänder, Kompetenzmodell, jährliches Entwicklungsgespräch", m: 4 },
    ],
  },

  // ---------- Führung & Steuerung ----------
  {
    id: "strategie",
    bereich: "fuehrung",
    thema: "Strategie",
    frage: "Gibt es eine schriftliche Strategie mit Zielen für die nächsten drei Jahre, die Ihre Führungskräfte kennen?",
    hinweis: "Eine Strategie wirkt erst, wenn die Menschen, die sie umsetzen sollen, sie kennen.",
    optionen: [
      { text: "Nein, die Richtung liegt im Kopf", m: 1, signal: "Ihre Strategie liegt im Kopf. Führungskräfte entscheiden täglich, ohne das Ziel zu kennen." },
      { text: "Es gibt grobe Ziele, aber nicht schriftlich", m: 2, signal: "Ihre Ziele sind nicht schriftlich festgehalten. So lassen sich weder Fortschritt messen noch Prioritäten begründen." },
      { text: "Schriftlich, aber nur in der Geschäftsleitung bekannt", m: 3 },
      { text: "Schriftlich, mit Zielen je Bereich, regelmäßig überprüft", m: 4 },
    ],
  },
  {
    id: "kennzahlen",
    bereich: "fuehrung",
    thema: "Controlling",
    frage: "Mit welchen Zahlen steuern Sie das Unternehmen unterjährig?",
    hinweis: "Die BWA zeigt, was war. Frühindikatoren wie Auftragseingang, Auslastung und Liquiditätsvorschau zeigen, was kommt.",
    optionen: [
      { text: "BWA vom Steuerberater, mit Wochen Verzug", m: 1, signal: "Sie steuern mit der BWA, also mit Wochen Verzug. Probleme sehen Sie erst, wenn sie schon in den Zahlen stehen." },
      { text: "Umsatz und Kontostand", m: 2, signal: "Gesteuert wird über Umsatz und Kontostand. Frühindikatoren für Auslastung, Marge oder Liquidität fehlen." },
      { text: "Monatliches Reporting mit einigen Kennzahlen", m: 3 },
      { text: "Cockpit mit Frühindikatoren und Liquiditätsvorschau", m: 4 },
    ],
  },
  {
    id: "ebenen",
    bereich: "fuehrung",
    thema: "Organisationsstruktur",
    frage: "Wie viele Führungsebenen liegen zwischen Mitarbeitern und Geschäftsleitung?",
    hinweis: "Zählen Sie Meister, Team-, Abteilungs- und Bereichsleitungen dazwischen.",
    optionen: [
      { text: "Keine, alle berichten direkt an die Geschäftsleitung", m: 1, signal: "Alle berichten direkt an die Geschäftsleitung. Gute Leute sehen bei Ihnen keinen Weg nach oben, und jede Frage landet bei Ihnen." },
      { text: "Eine Ebene, etwa Meister oder Teamleitung", m: 3 },
      { text: "Zwei klar geregelte Ebenen", m: 4 },
      { text: "Drei oder mehr Ebenen", m: 1, signal: "Zwischen Mitarbeitern und Geschäftsleitung liegen drei oder mehr Ebenen. Entscheidungen brauchen lange, Ideen kommen oben nicht an." },
    ],
  },
  {
    id: "delegation",
    bereich: "fuehrung",
    thema: "Entscheidungskompetenz",
    frage: "Bis zu welcher Grenze dürfen Führungskräfte ohne Rücksprache mit Ihnen entscheiden?",
    hinweis: "Gemeint sind Einkauf, Preisnachlässe, Einstellungen und Investitionen.",
    optionen: [
      { text: "Gar nicht, alles läuft über die Geschäftsleitung", m: 1, signal: "Ohne Ihre Freigabe läuft nichts. Sie sind der Engpass Ihres eigenen Unternehmens." },
      { text: "Es gibt Grenzen, aber nur mündlich", m: 2, signal: "Entscheidungsgrenzen sind nur mündlich geregelt. Im Zweifel fragt jeder lieber nach, und Entscheidungen bleiben liegen." },
      { text: "Schriftlich geregelt, zum Beispiel für den Einkauf", m: 3 },
      { text: "Kompetenzmatrix für Einkauf, Preise und Personal", m: 4 },
    ],
  },
  {
    id: "letztesWort",
    bereich: "fuehrung",
    thema: "Übergabe",
    frage: "Bei wem holen sich Mitarbeiter bei wichtigen Fragen das letzte Wort?",
    hinweis: "Ehrlich ist hier am hilfreichsten. Die Antwort sieht niemand außer Ihnen.",
    optionen: [
      { text: "Beim Senior, wie früher", m: 1, signal: "Bei wichtigen Fragen hat noch der Senior das letzte Wort. Die Übergabe ist auf dem Papier erledigt, im Alltag noch nicht." },
      { text: "Mal bei mir, mal beim Senior", m: 2, signal: "Mitarbeiter fragen mal Sie, mal den Senior. Doppelte Ansprechpartner bremsen jede Veränderung." },
      { text: "Bei mir", m: 3 },
      { text: "Bei den zuständigen Führungskräften", m: 4 },
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
      { text: "Wir haben kein ERP, vieles läuft über Excel", m: 1, signal: "Ihr Unternehmen läuft ohne ERP, vieles über Excel. Jede Liste ist eine Fehlerquelle und hängt an der Person, die sie pflegt." },
      { text: "Mehr als zehn", m: 2, signal: "Mehr als zehn Insellösungen steuern Ihre Kernprozesse. Ein gemeinsamer Datenstand existiert nicht." },
      { text: "Eine Handvoll", m: 3 },
      { text: "Kaum, alles läuft in integrierten Systemen", m: 4 },
    ],
  },
  {
    id: "medienbrueche",
    bereich: "prozesse",
    thema: "Medienbrüche",
    frage: "Wie oft wechselt ein Auftrag zwischen Anfrage und Rechnung das Medium?",
    hinweis: "Jedes Abtippen, Ausdrucken, Einscannen oder Weiterleiten per E-Mail ist ein Medienbruch.",
    optionen: [
      { text: "Das kann niemand genau sagen", m: 1, signal: "Niemand kann sagen, wie oft ein Auftrag das Medium wechselt. Der Ablauf ist gewachsen, nicht gestaltet." },
      { text: "Mehr als fünfmal", m: 2, signal: "Ein Auftrag wechselt mehr als fünfmal das Medium. Jede Doppelerfassung kostet Zeit und erzeugt Fehler." },
      { text: "Zwei- bis fünfmal", m: 3 },
      { text: "Durchgängig digital, ohne Doppelerfassung", m: 4 },
    ],
  },
  {
    id: "prozessdoku",
    bereich: "prozesse",
    thema: "Prozessdokumentation",
    frage: "Wie sind Ihre Kernprozesse dokumentiert?",
    hinweis: "Dokumentierte Prozesse sind die Voraussetzung, um Abläufe zu verbessern, zu automatisieren oder neue Leute schnell einzuarbeiten.",
    optionen: [
      { text: "Gar nicht, das Wissen steckt in den Köpfen", m: 1, signal: "Ihre Prozesse stehen nirgends. Was nicht beschrieben ist, lässt sich weder verbessern noch automatisieren." },
      { text: "Im QM-Handbuch, das kaum jemand liest", m: 2, signal: "Prozesse stehen im QM-Handbuch, gelebt wird etwas anderes. Die Dokumentation erfüllt das Audit, nicht den Alltag." },
      { text: "Aktuelle Beschreibungen für die wichtigsten Abläufe", m: 3 },
      { text: "Digitale Prozesslandkarte mit Verantwortlichen", m: 4 },
    ],
  },
  {
    id: "kundendaten",
    bereich: "prozesse",
    thema: "CRM",
    frage: "Wo liegen Kundenhistorie, Ansprechpartner und offene Angebote?",
    hinweis: "Stellen Sie sich vor, Ihr bester Vertriebsmitarbeiter kündigt morgen.",
    optionen: [
      { text: "In Postfächern und Köpfen einzelner Mitarbeiter", m: 1, signal: "Kundenwissen liegt in Postfächern und Köpfen. Kündigt ein Vertriebler, gehen seine Kunden womöglich mit." },
      { text: "Verteilt über Excel und ERP", m: 2, signal: "Kundendaten sind über Excel und ERP verteilt. Einen vollständigen Blick auf einen Kunden hat niemand." },
      { text: "Im CRM, aber lückenhaft gepflegt", m: 3 },
      { text: "Zentral im CRM, aktuell und für alle Berechtigten sichtbar", m: 4 },
    ],
  },
  {
    id: "ausfall",
    bereich: "prozesse",
    thema: "Ausfallsicherheit",
    frage: "Was passiert, wenn Ihre wichtigste Person im Büro drei Wochen ausfällt?",
    hinweis: "Denken Sie an Auftragsabwicklung, Buchhaltung oder Disposition.",
    optionen: [
      { text: "Wichtige Abläufe stehen still", m: 1, signal: "Fällt Ihre wichtigste Bürokraft aus, stehen Abläufe still. Ihr Betrieb hat eine Schwachstelle mit Namen." },
      { text: "Es läuft, aber mit Fehlern und viel Nachfragen", m: 2, signal: "Ein Ausfall im Büro führt zu Fehlern und Rückfragen. Vertretungen sind nicht vorbereitet." },
      { text: "Eine Vertretung übernimmt mit kleinen Einbußen", m: 3 },
      { text: "Kein Problem, Abläufe und Zugriffe sind geregelt", m: 4 },
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
      { text: "Gar nicht, wir ersetzen, was kaputtgeht", m: 1, signal: "IT wird ersetzt, wenn sie kaputtgeht. Digitalisierung findet bei Ihnen nur als Reparatur statt." },
      { text: "Von Fall zu Fall, ohne festes Budget", m: 2, signal: "Für Digitalisierung gibt es kein festes Budget. Jede Investition muss einzeln erkämpft werden." },
      { text: "Festes Jahresbudget, aber ohne Roadmap", m: 3 },
      { text: "Budget mit mehrjähriger Digital-Roadmap", m: 4 },
    ],
  },
  {
    id: "automatisierung",
    bereich: "digital",
    thema: "Automatisierung",
    frage: "Welche Routineaufgaben laufen bei Ihnen bereits automatisiert?",
    hinweis: "Zum Beispiel Belegerfassung, Auftragsbestätigung, Mahnwesen oder Terminerinnerungen.",
    optionen: [
      { text: "Keine, alles läuft von Hand", m: 1, signal: "Routineaufgaben laufen komplett von Hand. Ihr Team verbringt Zeit mit Arbeit, die Software übernehmen könnte." },
      { text: "Nur, was das ERP von Haus aus kann", m: 2, signal: "Automatisiert ist nur, was das ERP mitbringt. Gezielte Automatisierung findet nicht statt." },
      { text: "Mehrere Abläufe, gezielt eingerichtet", m: 3 },
      { text: "Systematisch, mit laufender Suche nach neuen Potenzialen", m: 4 },
    ],
  },
  {
    id: "kinutzung",
    bereich: "digital",
    thema: "Generative KI",
    frage: "Wie setzt Ihr Unternehmen generative KI wie ChatGPT oder Copilot heute ein?",
    hinweis: "Auch die private Nutzung durch Mitarbeiter für Firmenaufgaben zählt.",
    optionen: [
      { text: "Gar nicht", m: 1, signal: "Generative KI spielt bei Ihnen keine Rolle. Wettbewerber, die sie nutzen, schreiben Angebote und Texte in einem Bruchteil der Zeit." },
      { text: "Einzelne nutzen private Tools, ohne Freigabe", m: 1, signal: "Mitarbeiter nutzen private KI-Tools ohne Freigabe. Firmendaten landen dabei unkontrolliert bei Drittanbietern." },
      { text: "Freigegebene Tools für einzelne Aufgaben", m: 3 },
      { text: "Unternehmensweit, mit Richtlinie und klaren Anwendungsfällen", m: 4 },
    ],
  },
  {
    id: "aiact",
    bereich: "digital",
    thema: "EU AI Act",
    frage: "Seit Februar 2025 müssen Unternehmen sicherstellen, dass Mitarbeiter, die mit KI arbeiten, ausreichend KI-kompetent sind. Wie ist das bei Ihnen geregelt?",
    hinweis: "Die Pflicht ergibt sich aus Art. 4 der EU-KI-Verordnung (AI Act). Orientierung, keine Rechtsberatung.",
    optionen: [
      { text: "Das Thema ist mir neu", m: 1, signal: "Die KI-Kompetenzpflicht aus dem EU AI Act ist bei Ihnen noch unbekannt. Wer KI nutzt, sollte das zeitnah klären." },
      { text: "Bekannt, aber noch nicht umgesetzt", m: 2, signal: "Die Pflicht zur KI-Kompetenz ist bekannt, aber nicht umgesetzt. Schulung und Nachweis fehlen." },
      { text: "Erste Schulungen, nicht dokumentiert", m: 3 },
      { text: "Schulungen und KI-Richtlinie sind dokumentiert", m: 4 },
    ],
  },
  {
    id: "datenbasis",
    bereich: "digital",
    thema: "Datenbasis für KI",
    frage: "Könnte eine KI heute auf Ihre Angebote, Zeichnungen und Kundenkorrespondenz zugreifen, um Ihr Team zu unterstützen?",
    hinweis: "KI ist nur so gut wie die Daten, auf die sie zugreifen darf.",
    optionen: [
      { text: "Nein, vieles liegt auf Papier oder lokalen Rechnern", m: 1, signal: "Ihr Wissen liegt auf Papier und lokalen Rechnern. Für KI-Anwendungen fehlt die Grundlage." },
      { text: "Digital, aber verstreut über Laufwerke und Postfächer", m: 2, signal: "Ihre Daten sind digital, aber verstreut. Eine KI fände dort so wenig wie Ihre Mitarbeiter." },
      { text: "Größtenteils strukturiert in ERP oder DMS", m: 3 },
      { text: "Ja, zentral, strukturiert und mit Rechtekonzept", m: 4 },
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
