// KI-Potenzial-Check: KI und Automatisierung in der Verwaltung. Säule KI.
// Ergebnisgröße: Zeitpotenzial in Stunden pro Woche = Σ h × Größen-Multiplikator (Personen in der Verwaltung).
// h-Werte sind bewusst konservativ und beziehen sich auf eine Verwaltung mit 4 bis 8 Personen (mult 1).
// Reifegrad m (1–4) je Option; KI-Reife = 100 − Handlungsbedarf. Keine Benchmarks, keine KI in der Auswertung.

import type { Bereich, CheckConfig, Frage, Massnahme, Stufe } from "./types";

export const bereiche: Bereich[] = [
  { id: "profil", label: "Profil", kurz: "Profil" },
  {
    id: "angebot",
    label: "Angebot & Auftrag",
    kurz: "Angebot",
    deutung: [
      "Angebote entstehen weitgehend von Hand, Unterlagen werden abgetippt, und Nachfassen hängt am Gedächtnis einzelner. Hier liegt meist das größte und am schnellsten spürbare Zeitpotenzial.",
      "Vorlagen und ERP helfen bereits, aber Anfragen und technische Unterlagen werden noch manuell ausgewertet. Ein Angebotsassistent würde vor allem die Vorbereitung verkürzen.",
      "Ihr Angebotsprozess ist schon weitgehend systemgestützt. Der nächste Schritt sind gezielte Assistenten für Sonderfälle und schnellere Reaktionszeiten.",
    ],
  },
  {
    id: "kommunikation",
    label: "Kommunikation & Korrespondenz",
    kurz: "E-Mail",
    deutung: [
      "E-Mails, Standardanfragen und Protokolle kosten Ihr Büro täglich viel Zeit, und jede Antwort entsteht neu. Ein Großteil davon ließe sich vorbereiten, ohne dass Sie die Kontrolle abgeben.",
      "Es gibt erste Vorlagen und Regeln, aber Posteingang und Antworten laufen noch überwiegend manuell. Assistenten für Entwürfe und Vorsortierung würden hier spürbar entlasten.",
      "Ihre Kommunikation ist gut organisiert. Jetzt lohnt der Blick auf die verbleibenden Routinefälle und auf automatische Zusammenfassungen.",
    ],
  },
  {
    id: "belege",
    label: "Belege & Buchhaltung",
    kurz: "Belege",
    deutung: [
      "Rechnungen und Belege werden abgetippt, auf Papier freigegeben und von Hand abgeglichen. Mit der E-Rechnungspflicht wächst der Druck, das jetzt umzustellen.",
      "Belege kommen digital an, werden aber noch manuell übertragen oder freigegeben. Die Technik für automatisches Auslesen und Freigabe-Workflows ist ausgereift und bezahlbar.",
      "Ihre Belegverarbeitung ist weitgehend automatisiert. Verbleibende Potenziale liegen in Sonderfällen und im Zahlungsabgleich.",
    ],
  },
  {
    id: "wissen",
    label: "Wissen & Dokumente",
    kurz: "Wissen",
    deutung: [
      "Wissen steckt in Köpfen, persönlichen Ablagen und alten Mails. Suchen und Nachfragen kosten täglich Zeit, und für KI-Anwendungen fehlt die Grundlage.",
      "Die Ablage ist geordnet, aber nicht durchsuchbar genug. Ein interner Wissensassistent auf freigegebenen Dokumenten würde Suchzeiten deutlich verkürzen.",
      "Ihr Wissen ist strukturiert abgelegt und gut auffindbar. Damit haben Sie die beste Voraussetzung für einen internen KI-Assistenten.",
    ],
  },
  {
    id: "governance",
    label: "Regeln & Kompetenz",
    kurz: "Regeln",
    deutung: [
      "KI wird ungeregelt oder gar nicht genutzt, Verantwortung und Regeln fehlen. Das ist ein Risiko für Ihre Daten und ein offener Punkt beim EU AI Act. Bevor KI Zeit spart, braucht es hier eine Grundlage.",
      "Erste Regeln und Zuständigkeiten gibt es, aber nicht vollständig oder nicht dokumentiert. Mit einer klaren Richtlinie und einer Schulung wird aus Einzelinitiative ein geordneter Einsatz.",
      "Regeln, Zugänge und Schulung sind geklärt. Sie können neue KI-Anwendungen sicher und schnell einführen.",
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
    frage: "Wie viele Mitarbeiter hat Ihr Unternehmen insgesamt?",
    hinweis: "Inklusive Produktion, Montage und Außendienst.",
    optionen: [{ text: "Unter 20" }, { text: "20 bis 49" }, { text: "50 bis 99" }, { text: "100 bis 250" }, { text: "Mehr als 250" }],
  },
  {
    id: "verwaltung",
    bereich: "profil",
    thema: "Größe der Verwaltung",
    frage: "Wie viele Personen arbeiten in Büro und Verwaltung, also in Vertrieb-Innendienst, Auftragsabwicklung, Einkauf und Buchhaltung?",
    hinweis: "Teilzeitkräfte zählen anteilig. Diese Zahl bestimmt, wie stark sich Zeitersparnis aufsummiert.",
    optionen: [
      { text: "1 bis 3", mult: 0.6 },
      { text: "4 bis 8", mult: 1 },
      { text: "9 bis 15", mult: 1.6 },
      { text: "16 bis 30", mult: 2.4 },
      { text: "Mehr als 30", mult: 3.2 },
    ],
  },

  // ---------- Angebot & Auftrag ----------
  {
    id: "angebotsvolumen",
    bereich: "angebot",
    thema: "Angebotsvolumen",
    frage: "Wie viele Angebote erstellt Ihr Unternehmen pro Woche?",
    hinweis: "Alle Angebote zählen, auch kleine Nachträge und Ersatzteilangebote.",
    optionen: [
      { text: "Weniger als 5", h: 0.5 },
      { text: "5 bis 15", h: 1.5 },
      { text: "16 bis 40", h: 3 },
      { text: "Mehr als 40", h: 5 },
    ],
  },
  {
    id: "angebotserstellung",
    bereich: "angebot",
    thema: "Angebotserstellung",
    frage: "Wie entsteht bei Ihnen ein typisches Angebot?",
    hinweis: "Wählen Sie, was auf die Mehrheit Ihrer Angebote zutrifft.",
    optionen: [
      { text: "Aus Textbausteinen und Vorlagen in Word oder Excel", m: 2, h: 1.5, signal: "Angebote entstehen aus Word- und Excel-Vorlagen. Jede Anfrage wird von Hand übertragen und zusammengesetzt." },
      { text: "Im ERP mit hinterlegten Artikeln und Kalkulationsschemata", m: 3, h: 0.8 },
      { text: "Individuell, je nach Anfrage und Bearbeiter", m: 1, h: 2.5, signal: "Jedes Angebot entsteht individuell. Qualität und Dauer hängen davon ab, wer es bearbeitet." },
      { text: "Teilautomatisch: Die Anfrage wird ausgelesen, ein Entwurf entsteht im System", m: 4, h: 0.2 },
    ],
  },
  {
    id: "unterlagen",
    bereich: "angebot",
    thema: "Dokumentenauswertung",
    frage: "Wie werden technische Unterlagen aus Anfragen ausgewertet, etwa Zeichnungen, Leistungsverzeichnisse oder Stücklisten?",
    hinweis: "Gemeint ist der Schritt vom Kundendokument zur Kalkulationsgrundlage.",
    optionen: [
      { text: "Teilweise per Kopieren aus PDF und Excel", m: 2, h: 1.2, signal: "Positionen aus Kundenunterlagen werden per Kopieren übernommen. Das kostet Zeit und erzeugt Übertragungsfehler." },
      { text: "Mit Software, die Positionen und Mengen ausliest", m: 4, h: 0.2 },
      { text: "Von Hand gelesen und ins System übertragen", m: 1, h: 2, signal: "Technische Unterlagen werden von Hand gelesen und abgetippt. Genau diese Arbeit kann KI heute zuverlässig vorbereiten." },
      { text: "Solche Unterlagen kommen bei uns selten vor", h: 0 },
    ],
  },
  {
    id: "reaktionszeit",
    bereich: "angebot",
    thema: "Reaktionszeit",
    frage: "Wie lange dauert es im Schnitt von der Kundenanfrage bis zum versendeten Angebot?",
    hinweis: "Bei Standardanfragen, nicht bei großen Projekten.",
    optionen: [
      { text: "Am selben Tag", m: 4, h: 0 },
      { text: "Ein bis zwei Arbeitstage", m: 3, h: 0.3 },
      { text: "Drei bis fünf Arbeitstage", m: 2, h: 0.6, signal: "Standardangebote brauchen drei bis fünf Tage. Wer schneller antwortet, bekommt den Auftrag oft vor Ihnen." },
      { text: "Mehr als eine Woche", m: 1, h: 1, signal: "Ein Standardangebot dauert bei Ihnen mehr als eine Woche. Kunden holen in dieser Zeit Vergleichsangebote ein." },
    ],
  },
  {
    id: "nachfassen",
    bereich: "angebot",
    thema: "Nachfassen",
    frage: "Wie wird bei offenen Angeboten nachgefasst?",
    hinweis: "Gemeint ist die Rückfrage beim Kunden, bevor das Angebot verfällt.",
    optionen: [
      { text: "Über eine gemeinsame Liste, die wöchentlich durchgegangen wird", m: 3, h: 0.5 },
      { text: "Wenn der Bearbeiter daran denkt", m: 1, h: 0.8, signal: "Nachgefasst wird, wenn jemand daran denkt. Angebote verfallen, ohne dass jemand nachfragt." },
      { text: "Über Wiedervorlagen im CRM mit festen Fristen", m: 4, h: 0.1 },
      { text: "Mit Erinnerungen im Kalender des jeweiligen Bearbeiters", m: 2, h: 0.6, signal: "Nachfass-Erinnerungen liegen in persönlichen Kalendern. Bei Urlaub oder Krankheit geht der Überblick verloren." },
    ],
  },

  // ---------- Kommunikation & Korrespondenz ----------
  {
    id: "mailzeit",
    bereich: "kommunikation",
    thema: "E-Mail-Aufwand",
    frage: "Wie viel Zeit verbringt eine Bürokraft im Schnitt täglich mit E-Mails?",
    hinweis: "Lesen, Beantworten, Weiterleiten und Ablegen zusammen.",
    optionen: [
      { text: "Weniger als eine Stunde", h: 0.5 },
      { text: "Ein bis zwei Stunden", h: 1.2 },
      { text: "Zwei bis drei Stunden", h: 2 },
      { text: "Mehr als drei Stunden", h: 3 },
    ],
  },
  {
    id: "standardanteil",
    bereich: "kommunikation",
    thema: "Standardanfragen",
    frage: "Welcher Anteil der eingehenden Kundenanfragen betrifft wiederkehrende Themen wie Lieferzeit, Auftragsstatus, Unterlagen oder Termine?",
    hinweis: "Eine grobe Einschätzung reicht.",
    optionen: [
      { text: "Mehr als die Hälfte", h: 2.5 },
      { text: "Etwa ein Drittel bis die Hälfte", h: 1.8 },
      { text: "Etwa ein Viertel", h: 1 },
      { text: "Kaum, fast alles ist individuell", h: 0.3 },
    ],
  },
  {
    id: "antworten",
    bereich: "kommunikation",
    thema: "Antwortentwürfe",
    frage: "Wie entstehen Antworten auf diese wiederkehrenden Anfragen?",
    hinweis: "Gemeint ist der Normalfall, nicht die Ausnahme.",
    optionen: [
      { text: "Mit gemeinsamen Textbausteinen im Postfach", m: 2, h: 1, signal: "Antworten entstehen aus Textbausteinen, die Daten dazu werden im ERP nachgeschlagen. Ein Assistent könnte beides verbinden." },
      { text: "Ein Assistent erstellt Entwürfe aus ERP-Daten, das Team prüft", m: 4, h: 0.1 },
      { text: "Jeder formuliert selbst", m: 1, h: 1.6, signal: "Jede Antwort auf eine Standardanfrage wird neu formuliert. Das kostet Zeit und führt zu uneinheitlichen Auskünften." },
      { text: "Über ein Ticketsystem mit Vorlagen", m: 3, h: 0.5 },
    ],
  },
  {
    id: "posteingang",
    bereich: "kommunikation",
    thema: "Posteingang",
    frage: "Wie wird Ihr zentrales Postfach bearbeitet, etwa info@ oder vertrieb@?",
    hinweis: "Wer sieht eine neue Mail zuerst, und wie kommt sie zur richtigen Person?",
    optionen: [
      { text: "Eine Person sortiert vor und verteilt weiter", m: 2, h: 0.8, signal: "Eine Person sortiert das zentrale Postfach von Hand. Fällt sie aus, bleiben Anfragen liegen." },
      { text: "Eingänge werden automatisch klassifiziert und zugewiesen", m: 4, h: 0.1 },
      { text: "Mehrere schauen hinein, Zuständigkeit klärt sich im Einzelfall", m: 1, h: 1.2, signal: "Mehrere Personen bearbeiten das zentrale Postfach ohne feste Zuständigkeit. Doppelarbeit und übersehene Anfragen sind die Folge." },
      { text: "Regeln sortieren vor, der Rest wird von Hand verteilt", m: 3, h: 0.4 },
    ],
  },
  {
    id: "protokolle",
    bereich: "kommunikation",
    thema: "Protokolle",
    frage: "Wie entstehen Protokolle und Zusammenfassungen von Besprechungen und Kundenterminen?",
    hinweis: "Interne Runden, Kundengespräche und Baustellen- oder Abnahmetermine.",
    optionen: [
      { text: "Mit festen Vorlagen, die direkt im Termin ausgefüllt werden", m: 3, h: 0.4 },
      { text: "Meist gar nicht, Absprachen bleiben mündlich", m: 1, h: 0.6, signal: "Absprachen aus Besprechungen bleiben meist mündlich. Was vereinbart wurde, hängt am Gedächtnis der Beteiligten." },
      { text: "Per Transkription mit KI-Zusammenfassung und Freigabe", m: 4, h: 0.1 },
      { text: "Jemand schreibt mit und formuliert danach aus", m: 2, h: 1, signal: "Protokolle werden mitgeschrieben und danach ausformuliert. Das ist eine der Aufgaben, die KI heute am zuverlässigsten übernimmt." },
    ],
  },

  // ---------- Belege & Buchhaltung ----------
  {
    id: "rechnungsvolumen",
    bereich: "belege",
    thema: "Belegvolumen",
    frage: "Wie viele Eingangsrechnungen bearbeitet Ihr Unternehmen pro Monat?",
    hinweis: "Inklusive Gutschriften und Lieferantenrechnungen für Material und Dienstleistungen.",
    optionen: [
      { text: "Weniger als 100", h: 0.5 },
      { text: "100 bis 300", h: 1.2 },
      { text: "301 bis 800", h: 2.5 },
      { text: "Mehr als 800", h: 4 },
    ],
  },
  {
    id: "belegeingang",
    bereich: "belege",
    thema: "Belegerfassung",
    frage: "Wie gelangen Eingangsrechnungen und Lieferscheine in Ihre Systeme?",
    hinweis: "Gemeint ist der Weg vom Eingang bis zum Buchungssatz oder Wareneingang.",
    optionen: [
      { text: "Als PDF per E-Mail, die Daten werden von Hand übertragen", m: 2, h: 1.5, signal: "Rechnungen kommen digital an, die Daten werden aber von Hand übertragen. Das Auslesen ist eine Standardaufgabe für heutige Software." },
      { text: "Automatisch ausgelesen und vorkontiert, wir prüfen Abweichungen", m: 4, h: 0.2 },
      { text: "Auf Papier, sie werden abgetippt oder gescannt", m: 1, h: 2.5, signal: "Belege kommen auf Papier und werden abgetippt. Das ist doppelte Arbeit mit doppelter Fehlerquelle." },
      { text: "Über ein Belegportal mit Texterkennung", m: 3, h: 0.7 },
    ],
  },
  {
    id: "erechnung",
    bereich: "belege",
    thema: "E-Rechnung",
    frage: "Wie verarbeiten Sie strukturierte E-Rechnungen im Format XRechnung oder ZUGFeRD?",
    hinweis: "Seit 1. Januar 2025 müssen Unternehmen in Deutschland E-Rechnungen empfangen können. Orientierung, keine Steuerberatung.",
    optionen: [
      { text: "Der Empfang läuft, die Verarbeitung ist teilweise automatisiert", m: 3, h: 0.3 },
      { text: "Das klären wir gerade mit dem Steuerberater", m: 1, h: 0.6, signal: "Der Umgang mit E-Rechnungen ist noch nicht geklärt. Seit 2025 müssen Unternehmen sie empfangen können." },
      { text: "Wir lesen sie automatisch ins System ein", m: 4, h: 0 },
      { text: "Wir öffnen sie mit einem Anzeigeprogramm und übertragen von Hand", m: 2, h: 0.8, signal: "E-Rechnungen werden geöffnet und von Hand übertragen. Damit verschenken Sie genau den Vorteil, den das strukturierte Format bietet." },
    ],
  },
  {
    id: "freigabe",
    bereich: "belege",
    thema: "Rechnungsfreigabe",
    frage: "Wie läuft die Freigabe von Eingangsrechnungen?",
    hinweis: "Von der sachlichen Prüfung bis zur Zahlungsfreigabe.",
    optionen: [
      { text: "Digitaler Workflow mit Regeln nach Betrag und Kostenstelle", m: 4, h: 0.1 },
      { text: "Per E-Mail an die jeweils Zuständigen", m: 2, h: 0.8, signal: "Rechnungsfreigaben laufen per E-Mail. Den Stand einer Freigabe kennt nur, wer im richtigen Postfach sucht." },
      { text: "Digitaler Workflow, Zuständigkeiten werden von Hand gesetzt", m: 3, h: 0.4 },
      { text: "Im Papierumlauf mit Unterschrift", m: 1, h: 1.2, signal: "Rechnungen werden im Papierumlauf freigegeben. Skontofristen verstreichen, während Belege auf Schreibtischen liegen." },
    ],
  },
  {
    id: "mahnwesen",
    bereich: "belege",
    thema: "Zahlungsabgleich",
    frage: "Wie werden Zahlungseingänge abgeglichen und offene Posten gemahnt?",
    hinweis: "Gemeint ist die Debitorenseite.",
    optionen: [
      { text: "Automatischer Kontoabgleich und Mahnläufe", m: 4, h: 0.1 },
      { text: "Offene Posten werden von Hand geprüft und angeschrieben", m: 1, h: 1, signal: "Zahlungseingänge und Mahnungen werden von Hand bearbeitet. Das bindet Zeit und verzögert Ihren Geldeingang." },
      { text: "Weitgehend automatisch, Ausnahmen werden von Hand geklärt", m: 3, h: 0.3 },
      { text: "Das ERP erstellt Mahnungen, der Abgleich läuft von Hand", m: 2, h: 0.6, signal: "Der Zahlungsabgleich läuft von Hand, bevor das ERP mahnen kann. Hier entsteht regelmäßig Nacharbeit." },
    ],
  },

  // ---------- Wissen & Dokumente ----------
  {
    id: "suchen",
    bereich: "wissen",
    thema: "Suchaufwand",
    frage: "Wie oft am Tag sucht eine Bürokraft nach Informationen in alten Angeboten, Verträgen, Mails oder Zeichnungen?",
    hinweis: "Auch kurze Suchen zählen, ebenso Nachfragen bei Kollegen.",
    optionen: [
      { text: "Selten", h: 0.2 },
      { text: "Ein- bis zweimal", h: 0.8 },
      { text: "Drei- bis fünfmal", h: 1.6 },
      { text: "Häufiger", h: 2.5 },
    ],
  },
  {
    id: "ablage",
    bereich: "wissen",
    thema: "Ablage",
    frage: "Wie ist Ihre Dokumentenablage organisiert?",
    hinweis: "Angebote, Aufträge, Verträge, Korrespondenz und technische Unterlagen.",
    optionen: [
      { text: "Einheitliche Ordnerstruktur in einer Cloud-Ablage", m: 3, h: 0.5 },
      { text: "Persönliche Ablagen und Postfächer, teils Papierordner", m: 1, h: 1.5, signal: "Dokumente liegen in persönlichen Ablagen, Postfächern und Ordnern. Für Ihre Mitarbeiter ist das mühsam, für KI unerreichbar." },
      { text: "Dokumentenmanagement mit Volltextsuche und Verschlagwortung", m: 4, h: 0.1 },
      { text: "Netzlaufwerk mit Ordnerstruktur, je Abteilung unterschiedlich", m: 2, h: 0.9, signal: "Jede Abteilung legt anders ab. Wer etwas aus einem anderen Bereich braucht, muss fragen oder lange suchen." },
    ],
  },
  {
    id: "interneswissen",
    bereich: "wissen",
    thema: "Internes Wissen",
    frage: "Eine neue Bürokraft hat eine Frage zu einem Ablauf. Wo findet sie die Antwort?",
    hinweis: "Zum Beispiel: Wie lege ich einen Sonderpreis an? Wer gibt eine Reklamation frei?",
    optionen: [
      { text: "In Anleitungen auf dem Netzlaufwerk", m: 2, h: 0.6, signal: "Anleitungen liegen auf dem Laufwerk, aber nicht jeder findet sie. Neue Kollegen fragen trotzdem nach." },
      { text: "Bei einem internen Assistenten, der auf freigegebene Dokumente zugreift", m: 4, h: 0.1 },
      { text: "In einem internen Wiki oder einer Wissensdatenbank", m: 3, h: 0.3 },
      { text: "Bei erfahrenen Kollegen", m: 1, h: 1, signal: "Antworten auf Ablauffragen gibt es nur bei erfahrenen Kollegen. Deren Zeit fehlt dann im Tagesgeschäft." },
    ],
  },
  {
    id: "texte",
    bereich: "wissen",
    thema: "Texterstellung",
    frage: "Wie entstehen wiederkehrende Texte wie Stellenanzeigen, Produktbeschreibungen oder Kundenschreiben?",
    hinweis: "Alles, was regelmäßig geschrieben wird und nicht aus dem ERP kommt.",
    optionen: [
      { text: "Mit KI, jeder nach eigenem Vorgehen", m: 3, h: 0.4 },
      { text: "Aus alten Vorlagen, von Hand angepasst", m: 2, h: 0.8, signal: "Wiederkehrende Texte werden aus alten Vorlagen angepasst. Mit einer Prompt-Bibliothek ginge das in einem Bruchteil der Zeit." },
      { text: "Mit KI und einem gemeinsamen Leitfaden für Prompts und Freigabe", m: 4, h: 0.1 },
      { text: "Jedes Mal neu formuliert", m: 1, h: 1.2, signal: "Wiederkehrende Texte werden jedes Mal neu geschrieben. Das ist eine der einfachsten Aufgaben, die KI übernehmen kann." },
    ],
  },

  // ---------- Regeln & Kompetenz ----------
  {
    id: "kinutzung",
    bereich: "governance",
    thema: "Generative KI",
    frage: "Wie setzt Ihr Unternehmen generative KI wie ChatGPT, Copilot oder Gemini heute ein?",
    hinweis: "Auch die Nutzung eigener Konten durch Mitarbeiter für Firmenaufgaben zählt.",
    optionen: [
      { text: "Einzelne Mitarbeiter nutzen Tools nach eigenem Ermessen", m: 1, h: 0.5, signal: "Mitarbeiter nutzen KI-Tools nach eigenem Ermessen. Welche Firmendaten dabei wohin gehen, weiß niemand genau." },
      { text: "Unternehmensweit, mit Richtlinie und festen Anwendungsfällen", m: 4, h: 0 },
      { text: "Bisher nicht", m: 1, h: 0.8, signal: "Generative KI wird bei Ihnen noch nicht genutzt. Das Potenzial aus diesem Check liegt damit vollständig brach." },
      { text: "Mit freigegebenen Tools für einzelne Aufgaben", m: 3, h: 0.3 },
    ],
  },
  {
    id: "zugang",
    bereich: "governance",
    thema: "Lizenzen & Datenschutz",
    frage: "Über welche Zugänge nutzen Ihre Mitarbeiter KI-Tools?",
    hinweis: "Bei Business-Lizenzen regelt ein Vertrag zur Auftragsverarbeitung, was mit eingegebenen Daten geschieht. Orientierung, keine Rechtsberatung.",
    optionen: [
      { text: "Einzelne bezahlte Konten ohne zentrale Verwaltung", m: 2, signal: "KI-Konten werden einzeln bezahlt und nicht zentral verwaltet. Beim Ausscheiden eines Mitarbeiters bleiben Zugänge und Daten offen." },
      { text: "Über Business-Lizenzen mit Vertrag zur Auftragsverarbeitung", m: 4 },
      { text: "Über kostenlose Konten, teils mit privaten Logins", m: 1, signal: "Mitarbeiter nutzen kostenlose oder private KI-Konten. Was mit eingegebenen Firmendaten geschieht, liegt außerhalb Ihrer Kontrolle." },
      { text: "Bisher gar nicht" },
    ],
  },
  {
    id: "aiact",
    bereich: "governance",
    thema: "EU AI Act",
    frage: "Seit Februar 2025 müssen Unternehmen sicherstellen, dass Mitarbeiter, die mit KI arbeiten, ausreichend KI-kompetent sind. Wie ist das bei Ihnen geregelt?",
    hinweis: "Die Pflicht ergibt sich aus Art. 4 der EU-KI-Verordnung (AI Act). Orientierung, keine Rechtsberatung.",
    optionen: [
      { text: "Erste Schulungen haben stattgefunden", m: 3 },
      { text: "Das Thema steht auf unserer Liste", m: 2, signal: "Die Pflicht zur KI-Kompetenz ist bekannt, aber nicht umgesetzt. Schulung und Nachweis fehlen." },
      { text: "Schulungen und KI-Richtlinie sind dokumentiert", m: 4 },
      { text: "Damit haben wir uns noch nicht befasst", m: 1, signal: "Die KI-Kompetenzpflicht aus dem EU AI Act ist bei Ihnen noch offen. Wer KI nutzt, sollte das zeitnah klären." },
    ],
  },
  {
    id: "datenregel",
    bereich: "governance",
    thema: "Datenregeln",
    frage: "Gibt es eine schriftliche Regel, welche Daten in KI-Tools eingegeben werden dürfen?",
    hinweis: "Zum Beispiel Kundendaten, Preise, Zeichnungen oder Personaldaten.",
    optionen: [
      { text: "Mündlich besprochen", m: 2, signal: "Regeln zur Dateneingabe in KI-Tools gibt es nur mündlich. Im Zweifel entscheidet jeder selbst." },
      { text: "Ja, mit Beispielen und regelmäßiger Auffrischung", m: 4 },
      { text: "Nein", m: 1, signal: "Es gibt keine Regel, welche Daten in KI-Tools dürfen. Kundendaten und Preise können so ungewollt nach außen gelangen." },
      { text: "Ja, als Teil der allgemeinen IT-Richtlinie", m: 3 },
    ],
  },
  {
    id: "verantwortung",
    bereich: "governance",
    thema: "Verantwortung",
    frage: "Wer treibt das Thema KI in Ihrem Unternehmen voran?",
    hinweis: "Gemeint ist, wer Anwendungsfälle auswählt, Tools prüft und das Team mitnimmt.",
    optionen: [
      { text: "Ich selbst, neben dem Tagesgeschäft", m: 2, signal: "KI ist Chefsache neben dem Tagesgeschäft. Ohne feste Zeit dafür bleibt es bei Einzelversuchen." },
      { text: "Eine benannte Person mit festem Zeitbudget", m: 4 },
      { text: "Die IT oder ein externer IT-Dienstleister", m: 3 },
      { text: "Niemand gezielt, es ergibt sich", m: 1, signal: "Niemand ist für KI zuständig. Chancen werden zufällig genutzt oder gar nicht." },
    ],
  },
  {
    id: "schnittstellen",
    bereich: "governance",
    thema: "Schnittstellen",
    frage: "Lassen sich Ihre Kernsysteme wie ERP, Warenwirtschaft oder Buchhaltung per Schnittstelle an andere Tools anbinden?",
    hinweis: "Schnittstellen entscheiden, ob ein KI-Assistent auf aktuelle Daten zugreifen kann.",
    optionen: [
      { text: "Über Schnittstellen des Herstellers, gegen Aufpreis", m: 3 },
      { text: "Nur über Export und Import von Dateien", m: 2, signal: "Ihre Kernsysteme tauschen Daten nur per Dateiexport aus. KI-Anwendungen arbeiten damit immer mit veralteten Daten." },
      { text: "Ja, mit dokumentierter Programmierschnittstelle (API)", m: 4 },
      { text: "Das weiß ich nicht", m: 1, signal: "Ob Ihre Systeme Schnittstellen haben, ist unklar. Das ist die erste Frage vor jedem KI-Projekt." },
    ],
  },
];

export const massnahmen: Massnahme[] = [
  {
    id: "angebotsassistent",
    titel: "KI-Angebotsassistent",
    text: "Aus Anfrage, Stückliste oder Zeichnung entsteht in Minuten ein Angebotsentwurf, den Ihr Team nur noch prüft.",
    saeule: "ki",
    fragen: ["angebotsvolumen", "angebotserstellung", "unterlagen", "reaktionszeit"],
    schritte: [
      "Zehn typische Anfragen sammeln und den heutigen Ablauf mit Zeiten dokumentieren",
      "Assistenten für das Auslesen von Anfragen und Unterlagen einrichten und an Artikel und Preise anbinden",
      "Pilot mit einem Bearbeiter, Zeit je Angebot messen, dann im Team ausrollen",
    ],
  },
  {
    id: "nachfassen",
    titel: "Automatisches Nachfassen",
    text: "Jedes offene Angebot bekommt eine feste Wiedervorlage, Erinnerungen laufen automatisch.",
    saeule: "prozesse",
    fragen: ["nachfassen"],
    schritte: [
      "Nachfass-Regeln festlegen: wann, durch wen, mit welchem Text",
      "Wiedervorlagen im CRM oder ERP automatisch anlegen lassen",
      "Monatlich auswerten, welche Angebote nach dem Nachfassen gewonnen wurden",
    ],
  },
  {
    id: "mailassistent",
    titel: "Antwort-Assistent für Standardanfragen",
    text: "Wiederkehrende Fragen zu Lieferzeit, Status oder Unterlagen bereitet ein Assistent als Entwurf vor, mit Daten aus Ihrem System.",
    saeule: "ki",
    fragen: ["mailzeit", "standardanteil", "antworten"],
    schritte: [
      "Die zehn häufigsten Anfragetypen aus dem Postfach der letzten Wochen auswerten",
      "Assistenten mit Antwortvorlagen und Zugriff auf Auftragsdaten einrichten",
      "Entwürfe im Team prüfen lassen, Freigabequote und Zeitersparnis messen",
    ],
  },
  {
    id: "posteingang",
    titel: "Intelligenter Posteingang",
    text: "Neue Mails im zentralen Postfach werden automatisch eingeordnet und der richtigen Person zugewiesen.",
    saeule: "ki",
    fragen: ["posteingang"],
    schritte: [
      "Kategorien und Zuständigkeiten für das zentrale Postfach festlegen",
      "Automatische Klassifizierung einrichten und zwei Wochen parallel prüfen",
      "Auf automatische Zuweisung umstellen, Ausnahmen gesammelt nachschärfen",
    ],
  },
  {
    id: "protokolle",
    titel: "Protokolle per Transkription",
    text: "Besprechungen werden aufgezeichnet, transkribiert und als Protokoll mit Aufgaben zusammengefasst, nach Ihrer Freigabe.",
    saeule: "ki",
    fragen: ["protokolle"],
    schritte: [
      "Datenschutzkonformes Tool auswählen und Einwilligung der Teilnehmer regeln",
      "Protokollvorlage mit Beschlüssen, Aufgaben und Fristen festlegen",
      "In internen Runden starten, danach auf Kundentermine ausweiten",
    ],
  },
  {
    id: "belegerfassung",
    titel: "Belegerfassung mit KI",
    text: "Rechnungen und Lieferscheine werden automatisch ausgelesen, vorkontiert und übertragen. Ihr Büro prüft nur noch Abweichungen.",
    saeule: "ki",
    fragen: ["rechnungsvolumen", "belegeingang", "erechnung"],
    schritte: [
      "Belegwege und Formate erfassen, E-Rechnungsempfang mit dem Steuerberater abstimmen",
      "Belegerfassung mit Texterkennung einrichten und an Buchhaltung oder ERP anbinden",
      "Erkennungsquote nach vier Wochen prüfen und Regeln für Ausnahmen festlegen",
    ],
  },
  {
    id: "freigabe",
    titel: "Digitaler Freigabe-Workflow",
    text: "Rechnungen laufen automatisch zur richtigen Person, Zahlungen werden abgeglichen und Mahnläufe angestoßen.",
    saeule: "prozesse",
    fragen: ["freigabe", "mahnwesen"],
    schritte: [
      "Freigaberegeln nach Betrag, Kostenstelle und Vertretung definieren",
      "Workflow im Belegsystem oder ERP einrichten",
      "Kontoabgleich und Mahnlauf automatisieren, Ausnahmen wöchentlich klären",
    ],
  },
  {
    id: "wissensassistent",
    titel: "Interner Wissensassistent",
    text: "Ihr Team stellt Fragen im Klartext und bekommt Antworten aus freigegebenen Angeboten, Anleitungen und Dokumenten.",
    saeule: "ki",
    fragen: ["suchen", "ablage", "interneswissen"],
    schritte: [
      "Ablage vereinheitlichen und festlegen, welche Dokumente der Assistent nutzen darf",
      "Assistenten mit Rechtekonzept auf die freigegebenen Quellen aufsetzen",
      "Mit neuen Kollegen testen, häufige Fragen auswerten und Quellen ergänzen",
    ],
  },
  {
    id: "promptbibliothek",
    titel: "Prompt-Bibliothek für Standardtexte",
    text: "Geprüfte Vorlagen für wiederkehrende Texte, die jeder im Team mit KI nutzen kann.",
    saeule: "ki",
    fragen: ["texte"],
    schritte: [
      "Die zehn häufigsten Textarten im Unternehmen sammeln",
      "Je Textart einen geprüften Prompt mit Beispiel und Tonalität erstellen",
      "Bibliothek im Team einführen und quartalsweise ergänzen",
    ],
  },
  {
    id: "richtlinie",
    titel: "KI-Richtlinie und Schulung",
    text: "Freigegebene Tools, klare Datenregeln und eine dokumentierte Schulung nach Art. 4 AI Act.",
    saeule: "ki",
    fragen: ["kinutzung", "zugang", "aiact", "datenregel"],
    schritte: [
      "Bestandsaufnahme: Wer nutzt welche KI-Tools wofür, mit welchen Konten?",
      "KI-Richtlinie mit freigegebenen Tools, Lizenzen und Datenregeln erstellen",
      "Team-Schulung durchführen und dokumentieren",
    ],
  },
  {
    id: "roadmap",
    titel: "KI-Verantwortung und Roadmap",
    text: "Eine verantwortliche Person, geprüfte Schnittstellen und eine priorisierte Liste der nächsten Anwendungsfälle.",
    saeule: "ki",
    fragen: ["verantwortung", "schnittstellen"],
    schritte: [
      "KI-Verantwortung benennen und mit festem Zeitbudget ausstatten",
      "Schnittstellen von ERP, Buchhaltung und Ablage prüfen",
      "Anwendungsfälle nach Zeitpotenzial und Aufwand priorisieren",
    ],
  },
];

export const stufen: Stufe[] = [
  { bis: 25, label: "Gut vorbereitet", text: "Ihre Verwaltung ist in vielen Punkten bereit für KI. Jetzt geht es um die Anwendungsfälle mit dem größten Zeitgewinn." },
  { bis: 50, label: "Solide Basis, Potenzial offen", text: "Die Grundlagen stehen. Ein großer Teil der Routinearbeit läuft aber noch von Hand, obwohl KI sie heute zuverlässig vorbereiten könnte." },
  { bis: 75, label: "Viel Handarbeit, wenig System", text: "Ihr Büro arbeitet engagiert, aber mit viel manueller Routine. Genau hier spart KI am schnellsten spürbar Zeit." },
  { bis: 100, label: "Großes ungenutztes Potenzial", text: "KI spielt in Ihrer Verwaltung noch keine Rolle. Das ist kein Nachteil: Sie können mit klaren Regeln starten und gleich die größten Zeitfresser angehen." },
];

export const ki: CheckConfig = {
  id: "ki",
  name: "KI-Potenzial-Check",
  modus: "stunden",
  bereiche,
  fragen,
  massnahmen,
  stufen,
  multFrage: "verwaltung",
  annahmen: { stundensatz: 45, wochen: 46 },
  grundlage: {
    massnahme: "richtlinie",
    bereich: "governance",
    schwelle: 50,
    text: "Bevor KI im Büro Zeit spart, braucht es klare Regeln: welche Tools, welche Daten, wer geschult ist. Seit Februar 2025 verlangt das auch Art. 4 des EU AI Act. Diese Grundlage legen Sie in den ersten Wochen.",
  },
  texte: {
    profil: "KI-Profil Ihrer Verwaltung",
    report: "KI-Potenzial-Report",
    ergebnis: "KI-Handlungsbedarf",
    rechtshinweis: "Hinweise zu EU AI Act, Datenschutz und E-Rechnung ersetzen keine Rechts- oder Steuerberatung.",
  },
};
