import type { Pillar } from "./pillars";

export interface Thema {
  slug: string;
  name: string;
  pillar: Pillar["id"];
  /** Meta-Beschreibung, max. ca. 155 Zeichen */
  meta: string;
  headline: string;
  lead: string;
  ausgangslage: { titel: string; text: string }[];
  umsetzung: { titel: string; text: string }[];
  ergebnis: string[];
  mitbringen: string;
  grenze: string;
  hinweis?: string;
  faq: { q: string; a: string }[];
  verwandt: string[];
}

export const themen: Thema[] = [
  /* ---------------------------------------------------------------- Mitarbeiter */
  {
    slug: "employer-branding",
    name: "Employer Branding",
    pillar: "mitarbeiter",
    meta: "Employer Branding für Traditionsunternehmen: Zeigen Sie Bewerbern, warum Ihre Leute seit Jahren bleiben. Mit Ihrem Material, ohne Agentur-Hochglanz.",
    headline: "Zeigen Sie, warum Ihre Leute bleiben.",
    lead: "Ihre Mitarbeiter wissen, was Ihren Betrieb ausmacht. Bewerber wissen es nicht. Ich mache sichtbar, was Sie als Arbeitgeber heute schon bieten.",
    ausgangslage: [
      {
        titel: "Der gute Ruf endet am Ortsschild",
        text: "Im Umkreis kennt man Sie als fairen Arbeitgeber. Wer zwei Orte weiter wohnt oder neu in die Region zieht, erfährt davon nichts.",
      },
      {
        titel: "Die Karriereseite listet nur Stellen",
        text: "Dort steht, wen Sie suchen. Es fehlt, was Bewerber bei Ihnen erwartet: das Team, die Werkstatt, die Maschinen, die Entwicklung.",
      },
      {
        titel: "Sie wollen eigene Akzente setzen",
        text: "Sie haben übernommen und verändern Dinge im Betrieb. Nach außen wirkt das Unternehmen aber noch genauso wie vor zehn Jahren.",
      },
    ],
    umsetzung: [
      {
        titel: "Zuhören im eigenen Team",
        text: "Ich spreche mit einigen Mitarbeitenden aus Büro, Werkstatt und Ausbildung. Die Frage: Warum sind Sie hier, und warum bleiben Sie?",
      },
      {
        titel: "Ihr Arbeitgeberprofil",
        text: "Daraus entstehen fünf bis sechs Kernaussagen, die stimmen und sich belegen lassen. In Ihrer Sprache, ohne Werbefloskeln.",
      },
      {
        titel: "Karriereseite und Profile",
        text: "Ich überarbeite Ihre Karriereseite, Ihr Google-Unternehmensprofil und Ihre Einträge auf Bewertungsportalen für Arbeitgeber.",
      },
      {
        titel: "Einblicke aus dem Alltag",
        text: "Aus Fotos und kurzen Handyvideos, die Sie liefern, bereite ich Beiträge und Seiteninhalte auf. Sie geben alles frei.",
      },
    ],
    ergebnis: [
      "Ein Arbeitgeberprofil mit Aussagen, hinter denen Ihr Team steht",
      "Eine Karriereseite, die zeigt, wie bei Ihnen gearbeitet wird",
      "Gepflegte Profile dort, wo Bewerber nach Ihnen suchen",
      "Ein Vorrat an Einblicken für Stellenanzeigen und Social Media",
    ],
    mitbringen: "Etwas Zeit für die Gespräche im Team, Fotos und Videos aus dem Betriebsalltag und Ihre Freigabe vor jeder Veröffentlichung.",
    grenze: "Ich produziere keine Imagefilme und drehe nicht vor Ort. Gezeigt werden nur echte Mitarbeitende, und nur mit deren Einverständnis.",
    faq: [
      {
        q: "Muss ich Mitarbeiter vor die Kamera stellen?",
        a: "Nein. Wer mitmachen möchte, macht mit. Viele Einblicke funktionieren auch über Hände, Werkstücke und Räume, ganz ohne Gesichter.",
      },
      {
        q: "Lohnt sich das, wenn gerade keine Stelle offen ist?",
        a: "Ja. Ein Arbeitgeberprofil wirkt vor. Wenn Sie suchen, ist der Boden bereitet, und Initiativbewerbungen kommen schon vorher.",
      },
      {
        q: "Was ist mit schlechten Bewertungen im Netz?",
        a: "Die nehmen wir ernst und beantworten sie sachlich. Bewertungen kaufen oder schönen gehört nicht zu meiner Arbeit.",
      },
    ],
    verwandt: ["recruiting", "gen-z", "linkedin"],
  },
  {
    slug: "recruiting",
    name: "Recruiting",
    pillar: "mitarbeiter",
    meta: "Recruiting für Industrie und Handwerk: Stellenanzeigen, die gefunden werden, und eine Bewerbung, die per Handy in wenigen Minuten geht.",
    headline: "Stellen besetzen, wo Fachkräfte wirklich suchen.",
    lead: "Eine gute Stelle hilft wenig, wenn sie niemand findet oder die Bewerbung zu umständlich ist. Ich baue mit Ihnen einen Weg, der vom Klick bis zum Vertrag trägt.",
    ausgangslage: [
      {
        titel: "Die Anzeige erreicht die Falschen",
        text: "Sie schalten in der Zeitung und auf der eigenen Website. Junge Industriemechaniker oder Elektroniker suchen dort selten.",
      },
      {
        titel: "Die Bewerbung ist eine Hürde",
        text: "Anschreiben, Lebenslauf und Zeugnisse als PDF per E-Mail. Wer abends auf dem Handy sucht, bricht an dieser Stelle ab.",
      },
      {
        titel: "Die Antwort dauert zu lange",
        text: "Bewerbungen liegen eine Woche im Postfach. In der Zeit hat der Kandidat schon beim Wettbewerber zugesagt.",
      },
    ],
    umsetzung: [
      {
        titel: "Stellenprofile, die überzeugen",
        text: "Wir schreiben Ihre Anzeigen neu: konkrete Aufgaben, das Team, Arbeitszeiten und, wo Sie möchten, eine Gehaltsspanne.",
      },
      {
        titel: "Die richtigen Kanäle",
        text: "Ich wähle die passenden Jobbörsen und Plattformen für Ihre Berufe aus. Dazu gehört auch die Auffindbarkeit über die Google-Jobsuche.",
      },
      {
        titel: "Kurzbewerbung per Handy",
        text: "Name, Telefonnummer, ein paar Fragen. Den Rest klären Sie im ersten Gespräch. So bewirbt sich auch, wer keinen Lebenslauf parat hat.",
      },
      {
        titel: "Ein Ablauf mit festen Fristen",
        text: "Eingangsbestätigung, Antwortvorlagen und eine einfache Bewerberübersicht. Jede Bewerbung bekommt eine schnelle, ehrliche Rückmeldung.",
      },
    ],
    ergebnis: [
      "Überarbeitete Anzeigen für Ihre wichtigsten Stellen",
      "Ein Kanalplan, wo welche Stelle erscheint",
      "Eine Kurzbewerbung, die auf dem Handy funktioniert",
      "Einen Bewerbungsablauf, den Ihr Team ohne mich weiterführen kann",
    ],
    mitbringen: "Klarheit, wen Sie suchen, eine Ansprechperson für Bewerbungen und die Bereitschaft, innerhalb weniger Tage zurückzurufen.",
    grenze: "Ich bin keine Personalvermittlung und garantiere keine Einstellungen. Gebühren für Jobbörsen und Anzeigenbudget sind nicht im Paket enthalten.",
    hinweis: "Zu Themen wie Gehaltsangaben oder Gleichbehandlung in Anzeigen gebe ich Orientierung, keine Rechtsberatung.",
    faq: [
      {
        q: "Was kosten die Jobbörsen zusätzlich?",
        a: "Das hängt von Plattform und Laufzeit ab. Ich nenne Ihnen die Kosten vor jeder Schaltung, und Sie entscheiden. Das Budget zahlen Sie direkt an den Anbieter.",
      },
      {
        q: "Hilft das auch bei Auszubildenden?",
        a: "Ja. Für Azubis kommen andere Kanäle dazu, etwa Ausbildungsportale, Schulen und Social Media. Mehr dazu auf der Seite zur Gen Z.",
      },
      {
        q: "Brauchen wir dafür eine Bewerbersoftware?",
        a: "Für den Anfang meist nicht. Oft reicht eine saubere Übersicht im vorhandenen System. Eine Software lohnt sich erst bei vielen Stellen gleichzeitig.",
      },
    ],
    verwandt: ["employer-branding", "gen-z", "einarbeitung"],
  },
  {
    slug: "gen-z",
    name: "Gen Z",
    pillar: "mitarbeiter",
    meta: "Gen Z gewinnen: Wie Traditionsunternehmen Auszubildende und junge Fachkräfte erreichen, mit dem, was der Betrieb heute schon bietet.",
    headline: "Die nächste Generation für Ihren Betrieb gewinnen.",
    lead: "Junge Bewerber entscheiden anders, als Ihr Betrieb bisher eingestellt hat. Vieles, was sie suchen, haben Sie längst. Es muss nur bei ihnen ankommen.",
    ausgangslage: [
      {
        titel: "Die Azubi-Plätze bleiben leer",
        text: "Früher kamen die Bewerbungen über Familie, Verein und Nachbarschaft. Heute bleibt mancher Ausbildungsplatz trotz guter Bedingungen offen.",
      },
      {
        titel: "Andere Kanäle, andere Sprache",
        text: "Schülerinnen und Schüler informieren sich über Instagram, TikTok und WhatsApp. Ihr Betrieb kommt dort bisher nicht vor.",
      },
      {
        titel: "Die Stärken bleiben unsichtbar",
        text: "Übernahme nach der Ausbildung, moderne Maschinen, kurze Wege zur Chefin. Das sind echte Argumente. Nach außen erzählt sie niemand.",
      },
    ],
    umsetzung: [
      {
        titel: "Ihre Argumente sammeln",
        text: "Ich frage Ihre aktuellen Azubis und jungen Mitarbeitenden, warum sie sich für Sie entschieden haben. Ihre Antworten sind die beste Vorlage.",
      },
      {
        titel: "Kanäle für Schüler und Eltern",
        text: "Wir legen fest, wo Sie präsent sind. Eltern entscheiden oft mit, also denken wir auch an sie.",
      },
      {
        titel: "Formate, die passen",
        text: "Kurze Einblicke von Azubis für Azubis, Schnuppertage und ein Praktikum, das sich einfach anfragen lässt. Aus Ihrem Material, von Ihnen freigegeben.",
      },
      {
        titel: "Erste Rückmeldung am selben Tag",
        text: "Junge Bewerber erwarten eine schnelle Reaktion. Wir richten einen Ablauf ein, der das im Alltag leistbar macht.",
      },
    ],
    ergebnis: [
      "Eine Liste Ihrer Arbeitgeber-Stärken aus Sicht junger Mitarbeitender",
      "Einen Kanalplan für Ausbildungsplätze und Berufseinsteiger",
      "Einfache Wege zu Praktikum und Schnuppertag",
      "Einen Rückmelde-Ablauf, der zur Erwartung junger Bewerber passt",
    ],
    mitbringen: "Azubis oder junge Mitarbeitende, die bereit sind, von ihrem Alltag zu erzählen, und eine Person, die Anfragen schnell beantwortet.",
    grenze: "Ich betreibe keine Social-Media-Kanäle rund um die Uhr und drehe keine Videos vor Ort. Die Einblicke entstehen mit Ihrem Team.",
    faq: [
      {
        q: "Müssen wir jetzt auf TikTok tanzen?",
        a: "Nein. Es geht um ehrliche Einblicke in Ausbildung und Arbeit. Welche Kanäle und Formate zu Ihrem Betrieb passen, entscheiden wir gemeinsam.",
      },
      {
        q: "Wer pflegt die Kanäle später?",
        a: "Während der Partnerschaft bereite ich Beiträge vor und plane sie ein. Parallel lernt jemand aus Ihrem Team, das selbst zu übernehmen.",
      },
      {
        q: "Was ist mit Datenschutz bei Minderjährigen?",
        a: "Bei minderjährigen Azubis holen wir die Einwilligung der Eltern ein, bevor jemand gezeigt wird. Das ist Orientierung, keine Rechtsberatung.",
      },
    ],
    verwandt: ["recruiting", "employer-branding", "einarbeitung"],
  },
  {
    slug: "einarbeitung",
    name: "Einarbeitung",
    pillar: "mitarbeiter",
    meta: "Einarbeitung mit Plan: Wissen sichern, bevor erfahrene Mitarbeiter in Rente gehen, und neue Kollegen schneller produktiv machen.",
    headline: "Wissen sichern, bevor es in Rente geht.",
    lead: "In vielen Traditionsbetrieben steckt das wichtigste Wissen in wenigen Köpfen. Ich helfe Ihnen, es festzuhalten und neuen Mitarbeitenden einen klaren Start zu geben.",
    ausgangslage: [
      {
        titel: "Lernen durch Zuschauen",
        text: "Neue Kollegen laufen mit und schauen zu. Ob sie das Richtige lernen, hängt davon ab, wer gerade Zeit hat.",
      },
      {
        titel: "Erfahrene Kräfte gehen bald",
        text: "Ihr Meister kennt jede Maschine und jeden Sonderfall. In ein paar Jahren geht er in Rente. Aufgeschrieben ist davon wenig.",
      },
      {
        titel: "Der erste Tag ist improvisiert",
        text: "Kein Spind, kein Zugang zum Rechner, keine feste Ansprechperson. Der erste Eindruck entscheidet mit, ob jemand bleibt.",
      },
    ],
    umsetzung: [
      {
        titel: "Ein Plan pro Rolle",
        text: "Wir legen fest, was vor dem ersten Tag, in der ersten Woche und in den ersten drei Monaten passiert. Als Checkliste, die jeder abhaken kann.",
      },
      {
        titel: "Wissen festhalten",
        text: "Erfahrene Mitarbeitende erklären Abläufe am Handy. Ich mache daraus kurze Anleitungen, KI-gestützt und von den Fachleuten geprüft.",
      },
      {
        titel: "Alles an einem Ort",
        text: "Anleitungen, Ansprechpartner und Checklisten liegen digital an einer Stelle, auch auf dem Tablet in der Halle.",
      },
      {
        titel: "Feste Gespräche",
        text: "Nach 30, 60 und 90 Tagen fragen Sie nach: Was läuft gut, was fehlt? So merken Sie früh, wenn jemand zu gehen droht.",
      },
    ],
    ergebnis: [
      "Einarbeitungspläne für Ihre wichtigsten Rollen",
      "Die ersten gesicherten Anleitungen von Ihren erfahrenen Kräften",
      "Eine zentrale Ablage, die Ihr Team selbst weiter füllt",
      "Einen Gesprächsrhythmus für die Probezeit",
    ],
    mitbringen: "Erfahrene Mitarbeitende, die ihr Wissen teilen wollen, und Zeit, um Anleitungen fachlich zu prüfen.",
    grenze: "Die fachliche Ausbildung an Maschine und Werkstück bleibt bei Ihnen. Arbeitsschutz-Unterweisungen ersetze ich nicht.",
    hinweis: "Zu Arbeitsschutz und Pflichtunterweisungen gebe ich Orientierung, keine Rechtsberatung. Verbindlich ist Ihre Fachkraft für Arbeitssicherheit.",
    faq: [
      {
        q: "Wie bekomme ich erfahrene Kollegen dazu mitzumachen?",
        a: "Indem es sie wenig Zeit kostet und ihre Erfahrung wertschätzt. Ein paar Minuten Erklären am Handy reichen, das Aufbereiten übernehme ich.",
      },
      {
        q: "Brauchen wir dafür eine eigene Software?",
        a: "Meist nicht. Oft genügen vorhandene Werkzeuge wie Microsoft 365 oder ein einfaches Wiki. Wir prüfen, was Sie schon haben.",
      },
      {
        q: "Gilt das auch für das Büro?",
        a: "Ja. Auftragsannahme, Buchhaltung oder Einkauf hängen oft genauso an einzelnen Personen wie die Fertigung.",
      },
    ],
    verwandt: ["recruiting", "digitalisierung", "assistenten"],
  },

  /* ---------------------------------------------------------------- Kunden */
  {
    slug: "sichtbarkeit",
    name: "Sichtbarkeit",
    pillar: "kunden",
    meta: "Online-Sichtbarkeit für Traditionsunternehmen: bei Google, in Branchenportalen und in KI-Suchen gefunden werden, wenn Kunden nach Ihrer Leistung suchen.",
    headline: "Gefunden werden, wenn Kunden suchen.",
    lead: "Neue Kunden suchen erst online, bevor sie anrufen. Ich sorge dafür, dass Ihr Betrieb dabei auftaucht, mit den richtigen Angaben.",
    ausgangslage: [
      {
        titel: "Google zeigt die Wettbewerber",
        text: "Wer nach Ihrer Leistung und Ihrer Region sucht, findet andere Betriebe. Dabei machen Sie das vielleicht seit Jahrzehnten besser.",
      },
      {
        titel: "Alte Angaben im Netz",
        text: "Im Google-Profil stehen alte Öffnungszeiten, in Branchenportalen eine frühere Telefonnummer. Das kostet Vertrauen und Anfragen.",
      },
      {
        titel: "KI-Suchen kennen Sie nicht",
        text: "Manche Einkäufer fragen inzwischen ChatGPT und ähnliche Dienste nach Anbietern. Was dort über Sie steht, hat bisher niemand geprüft.",
      },
    ],
    umsetzung: [
      {
        titel: "Sichtbarkeitsanalyse",
        text: "Ich prüfe, wie Kunden nach Ihrer Leistung suchen, wo Sie erscheinen und wo Ihre Wettbewerber stehen.",
      },
      {
        titel: "Einträge aufräumen",
        text: "Google-Unternehmensprofil, Branchenportale und Verzeichnisse bekommen einheitliche, aktuelle Angaben.",
      },
      {
        titel: "Seiten für Ihre Leistungen",
        text: "Jede wichtige Leistung bekommt eine eigene, klare Seite. Mit den Begriffen, die Ihre Kunden tatsächlich verwenden.",
      },
      {
        titel: "Fakten für KI-Suchen",
        text: "Ich bereite Ihre Angaben so auf, dass Suchmaschinen und KI-Dienste sie leicht und richtig erfassen.",
      },
    ],
    ergebnis: [
      "Eine Übersicht, für welche Suchen Sie heute gefunden werden",
      "Bereinigte Einträge in Google und den wichtigsten Portalen",
      "Klare Seiten für Ihre wichtigsten Leistungen",
      "Einen Plan für die nächsten Schritte, nach Wirkung sortiert",
    ],
    mitbringen: "Zugang zu Ihrem Google-Konto und Ihrer Website sowie Ihr Wissen darüber, welche Aufträge Sie mehr wollen.",
    grenze: "Platzierungen bei Google kann niemand garantieren, ich auch nicht. Werbebudget für bezahlte Anzeigen ist nicht im Paket enthalten.",
    faq: [
      {
        q: "Wie schnell sehe ich Ergebnisse?",
        a: "Korrigierte Einträge wirken oft schon nach Tagen. Bessere Platzierungen in der Suche brauchen meist Wochen bis Monate.",
      },
      {
        q: "Schalten Sie auch Google-Anzeigen?",
        a: "Ja, wenn es sinnvoll ist. Die Einrichtung und Betreuung gehören zur Säule Kunden. Das Werbebudget zahlen Sie direkt an Google.",
      },
      {
        q: "Was ist mit Messen und Fachzeitschriften?",
        a: "Die bleiben wichtig. Ich sorge dafür, dass Messekontakte online wiederfinden, was sie am Stand gesehen haben.",
      },
    ],
    verwandt: ["website", "linkedin", "vertrieb"],
  },
  {
    slug: "website",
    name: "Website",
    pillar: "kunden",
    meta: "Website für Traditionsunternehmen: klar sagen, was Sie machen, auf dem Handy funktionieren und aus Besuchern Anfragen machen.",
    headline: "Eine Website, die sagt, was Sie können.",
    lead: "Ihre Website ist oft der erste Kontakt mit neuen Kunden und Bewerbern. Ich mache daraus eine Seite, die in wenigen Sekunden klar macht, was Ihr Betrieb leistet.",
    ausgangslage: [
      {
        titel: "Auf dem Handy kaum lesbar",
        text: "Die Seite wurde für große Bildschirme gebaut. Wer sie auf dem Smartphone öffnet, zoomt, scrollt und gibt auf.",
      },
      {
        titel: "Produkte statt Antworten",
        text: "Es gibt lange Listen mit Maschinen und Normen. Unklar bleibt: Für wen ist das, und was löst es?",
      },
      {
        titel: "Nur eine Person kann sie ändern",
        text: "Inhalte pflegt die Agentur von damals oder ein Mitarbeiter nebenbei. Jede Änderung dauert Wochen.",
      },
    ],
    umsetzung: [
      {
        titel: "Bestandsaufnahme",
        text: "Ich prüfe Inhalte, Technik, Ladezeit und die Wege zur Anfrage. Sie bekommen eine klare Liste: behalten, verbessern, ersetzen.",
      },
      {
        titel: "Klare Struktur",
        text: "Wer Sie sind, was Sie machen, für wen. Dazu Referenzen, sofern Ihre Kunden zustimmen, und ein einfacher Weg zur Anfrage.",
      },
      {
        titel: "Verbessern oder neu bauen",
        text: "Oft reicht es, die bestehende Seite gezielt zu überarbeiten. Ist ein Neubau nötig, biete ich ihn als Festpreisprojekt an.",
      },
      {
        titel: "Laufende Pflege",
        text: "Neue Inhalte, Stellen und Projekte stelle ich laufend ein. Und ich beobachte, wie viele Anfragen über die Seite kommen.",
      },
    ],
    ergebnis: [
      "Eine Bewertung Ihrer heutigen Website mit konkreten Prioritäten",
      "Eine Seitenstruktur, die Kunden und Bewerbern Antworten gibt",
      "Eine Website, die auf dem Handy gut funktioniert",
      "Ein Anfrageweg, der Ihnen zeigt, was die Seite bringt",
    ],
    mitbringen: "Zugänge zu Website und Domain, Fotos aus dem Betrieb und Ihre Freigabe für Texte und Referenzen.",
    grenze: "Ein kompletter Relaunch ist ein großes Einzelprojekt. Er ist nicht im Monatspaket enthalten und wird separat zum Festpreis angeboten.",
    hinweis: "Zu Impressum, Datenschutzerklärung und Cookie-Hinweisen gebe ich Orientierung, keine Rechtsberatung.",
    faq: [
      {
        q: "Was kostet ein Relaunch?",
        a: "Das hängt vom Umfang ab. Nach einem gemeinsamen Briefing bekommen Sie einen Festpreis. So wissen Sie vorher, worauf Sie sich einlassen.",
      },
      {
        q: "Können wir unsere Domain und E-Mail behalten?",
        a: "Ja. Domain und E-Mail-Adressen bleiben, wie sie sind. Gute Inhalte der alten Seite übernehme ich.",
      },
      {
        q: "Kann ich die Seite danach selbst pflegen?",
        a: "Ja. Ich richte die Seite so ein, dass Sie oder Ihr Team einfache Änderungen selbst machen können. Die Einweisung gehört dazu.",
      },
    ],
    verwandt: ["sichtbarkeit", "vertrieb", "employer-branding"],
  },
  {
    slug: "linkedin",
    name: "LinkedIn",
    pillar: "kunden",
    meta: "LinkedIn für Nachfolger: Unternehmensseite und persönliches Profil aufbauen, regelmäßig sichtbar sein, mit Beiträgen aus Ihrem Betriebsalltag.",
    headline: "Auf LinkedIn sichtbar als neue Generation.",
    lead: "Ihre Kunden haben neue Einkäufer, Ihre Partner neue Ansprechpartner. Auf LinkedIn lernen sie Sie kennen, bevor Sie sich treffen.",
    ausgangslage: [
      {
        titel: "Die Unternehmensseite ist leer",
        text: "Es gibt eine Seite mit Logo und wenigen Followern. Der letzte Beitrag ist Jahre alt, oder es gab nie einen.",
      },
      {
        titel: "Ihr Profil zeigt die alte Rolle",
        text: "Seit der Übernahme hat sich Ihre Verantwortung verändert. Auf LinkedIn steht noch Ihre frühere Position.",
      },
      {
        titel: "Keine Zeit zum Schreiben",
        text: "Sie wissen, dass Beiträge helfen würden. Zwischen Kunden, Team und Werkstatt bleibt dafür einfach keine Zeit.",
      },
    ],
    umsetzung: [
      {
        titel: "Profile aufsetzen",
        text: "Ich überarbeite Ihr persönliches Profil und die Unternehmensseite. Klar, aktuell, mit Ihrer Rolle als Nachfolger.",
      },
      {
        titel: "Themenplan",
        text: "Wir legen fest, worüber Sie sprechen: Projekte, Team, Ausbildung, Ihre Sicht auf die Branche. Passend zu Ihren Zielen.",
      },
      {
        titel: "Beiträge in Ihrer Stimme",
        text: "Sie schicken ein Foto und ein paar Stichworte. Ich schreibe daraus einen Entwurf, KI-gestützt. Sie geben ihn frei.",
      },
      {
        titel: "Gezielt vernetzen",
        text: "Wir bauen Ihr Netzwerk bei Kunden, Partnern, Verbänden und Bewerbern auf. Ohne Massennachrichten.",
      },
    ],
    ergebnis: [
      "Ein aktuelles Profil und eine gepflegte Unternehmensseite",
      "Einen Themenplan für die nächsten Monate",
      "Regelmäßige Beiträge, die Sie nur noch freigeben",
      "Ein wachsendes Netzwerk bei den Menschen, die für Sie zählen",
    ],
    mitbringen: "Fotos und Stichworte aus Ihrem Alltag, regelmäßig ein paar Minuten für Freigaben und die Bereitschaft, als Person sichtbar zu werden.",
    grenze: "Ich produziere keine Videos vor Ort und betreibe keine automatisierten Massenkontakte. Was in Ihrem Namen erscheint, geben Sie frei.",
    faq: [
      {
        q: "Schreiben Sie in meinem Namen?",
        a: "Ich bereite Entwürfe vor, Sie geben sie frei. Nichts erscheint ohne Ihr OK. Die Gedanken kommen von Ihnen, ich bringe sie in Form.",
      },
      {
        q: "Ist LinkedIn für Industrie und Handwerk überhaupt relevant?",
        a: "Für Geschäftskunden, Einkäufer und Fachkräfte oft schon. Ob es für Ihren Betrieb der richtige Kanal ist, klären wir in der Bestandsaufnahme.",
      },
      {
        q: "Werden KI-Bilder gekennzeichnet?",
        a: "Ja. KI-generierte Bilder tragen einen Hinweis. Am besten wirken ohnehin echte Fotos aus Ihrem Betrieb.",
      },
    ],
    verwandt: ["sichtbarkeit", "vertrieb", "employer-branding"],
  },
  {
    slug: "vertrieb",
    name: "Vertrieb",
    pillar: "kunden",
    meta: "Vertrieb für Traditionsunternehmen: Anfragen zuverlässig in Angebote und Aufträge verwandeln und Bestandskunden aktiv pflegen.",
    headline: "Aus Anfragen zuverlässig Aufträge machen.",
    lead: "Viele Betriebe leben von Stammkunden und Empfehlungen. Ich helfe Ihnen, einen Vertrieb aufzubauen, der auch dann trägt, wenn die alten Kontakte in Rente gehen.",
    ausgangslage: [
      {
        titel: "Anfragen versanden",
        text: "Sie kommen per Telefon, E-Mail und Formular und landen bei verschiedenen Personen. Manche werden nie beantwortet.",
      },
      {
        titel: "Angebote ohne Nachfassen",
        text: "Das Angebot geht raus, dann passiert nichts mehr. Ob der Kunde noch überlegt oder längst woanders bestellt hat, weiß niemand.",
      },
      {
        titel: "Stammkunden ändern sich",
        text: "Der langjährige Einkäufer geht in Rente. Seine Nachfolgerin kennt Ihren Betrieb nicht und vergleicht neu.",
      },
    ],
    umsetzung: [
      {
        titel: "Vertriebsweg aufnehmen",
        text: "Ich zeichne mit Ihnen den Weg von der Anfrage bis zum Auftrag auf. So sehen wir, wo Anfragen verloren gehen.",
      },
      {
        titel: "Schneller zum Angebot",
        text: "Vorlagen, Textbausteine und klare Zuständigkeiten verkürzen die Zeit bis zum Angebot.",
      },
      {
        titel: "Nachfassen mit System",
        text: "Jedes offene Angebot bekommt eine Wiedervorlage. Das System erinnert, Ihr Team ruft an.",
      },
      {
        titel: "Bestandskunden pflegen",
        text: "Wir legen fest, welche Kunden wann kontaktiert werden. Neue Ansprechpartner bei Ihren Kunden lernen Sie aktiv kennen.",
      },
    ],
    ergebnis: [
      "Ein aufgezeichneter Vertriebsweg mit den größten Lücken",
      "Angebotsvorlagen und feste Zuständigkeiten",
      "Eine Wiedervorlage für jedes offene Angebot",
      "Einen Pflegeplan für Ihre wichtigsten Bestandskunden",
    ],
    mitbringen: "Einblick in Ihre Anfragen und Angebote der letzten Monate und die Bereitschaft Ihres Teams, neue Abläufe auszuprobieren.",
    grenze: "Ich verkaufe nicht für Sie und ersetze keinen Außendienst. Werbe-E-Mails versenden wir nur an Empfänger, die eingewilligt haben.",
    faq: [
      {
        q: "Machen Sie auch Kaltakquise?",
        a: "Nicht per E-Mail. Werbe-E-Mails an Unternehmen in Deutschland ohne Einwilligung sind nicht zulässig. Wir setzen auf Sichtbarkeit, Empfehlungen und Ihr bestehendes Netzwerk.",
      },
      {
        q: "Brauche ich dafür ein CRM?",
        a: "Ab einer gewissen Zahl an Anfragen hilft es sehr. Wie wir das passend für Ihren Betrieb einrichten, steht auf der Seite zum CRM.",
      },
      {
        q: "Hilft das auch bei öffentlichen Ausschreibungen?",
        a: "Bei der Organisation ja, etwa mit Vorlagen und Fristen. Die fachliche Kalkulation bleibt bei Ihnen.",
      },
    ],
    verwandt: ["crm", "website", "automationen"],
  },

  /* ---------------------------------------------------------------- Prozesse */
  {
    slug: "digitalisierung",
    name: "Digitalisierung",
    pillar: "prozesse",
    meta: "Digitalisierung im Mittelstand: erst die Abläufe verstehen, dann passende Werkzeuge einführen. Herstellerneutral und mit Ihrem Team.",
    headline: "Erst Ordnung, dann Technik.",
    lead: "Digitalisierung heißt nicht, möglichst viel Software zu kaufen. Ich finde mit Ihnen die Abläufe, die am meisten Zeit kosten, und mache sie einfacher.",
    ausgangslage: [
      {
        titel: "Zettel, Excel und Zuruf",
        text: "Aufträge laufen über Laufzettel, Listen und kurze Absprachen in der Halle. Das klappt, solange alle da sind.",
      },
      {
        titel: "Viele Programme, kein Zusammenhang",
        text: "Warenwirtschaft, Outlook, Excel und ein altes Branchenprogramm. Jedes für sich in Ordnung, gemeinsam ein Flickenteppich.",
      },
      {
        titel: "Angst vor dem großen Projekt",
        text: "Sie haben von teuren Einführungen gehört, die nie fertig wurden. Deshalb bleibt lieber alles, wie es ist.",
      },
    ],
    umsetzung: [
      {
        titel: "Abläufe aufnehmen",
        text: "Ich schaue mir mit Ihrem Team die drei bis fünf Abläufe an, die am meisten Zeit und Nerven kosten.",
      },
      {
        titel: "Nach Nutzen sortieren",
        text: "Jeder Ablauf bekommt eine Einschätzung: Wie viel Aufwand, wie viel Nutzen? Wir starten dort, wo es sich schnell lohnt.",
      },
      {
        titel: "Passende Werkzeuge",
        text: "Ich empfehle herstellerneutral. Oft lässt sich vorhandene Software besser nutzen, bevor neue dazukommt.",
      },
      {
        titel: "Einführung mit dem Team",
        text: "Testphase, kurze Anleitungen und Schulung. Erst wenn es im Alltag läuft, kommt der nächste Ablauf dran.",
      },
    ],
    ergebnis: [
      "Eine Übersicht Ihrer zeitintensivsten Abläufe",
      "Eine Prioritätenliste mit Aufwand und Nutzen",
      "Die ersten vereinfachten Abläufe im täglichen Einsatz",
      "Kurze Anleitungen, mit denen Ihr Team selbstständig arbeitet",
    ],
    mitbringen: "Mitarbeitende, die ihre Abläufe zeigen, und die Bereitschaft, eingefahrene Wege zu hinterfragen.",
    grenze: "ERP-Einführungen und Individualentwicklung begleite ich über spezialisierte Partner. IT-Sicherheit biete ich nicht selbst an. Lizenzen zahlen Sie direkt.",
    hinweis: "Für Digitalisierungsvorhaben gibt es teilweise Förderprogramme. Ich informiere darüber, eine Förderung zusagen kann ich nicht.",
    faq: [
      {
        q: "Müssen wir unsere Warenwirtschaft ersetzen?",
        a: "Meistens nicht. In vielen Fällen nutzen wir sie besser oder verbinden sie mit anderen Werkzeugen. Ein Wechsel ist die letzte Option.",
      },
      {
        q: "Wie viel Zeit kostet das mein Team?",
        a: "Am Anfang einige Gespräche und Vorführungen. Danach wird es weniger, weil die Abläufe einfacher werden. Wir planen das so, dass der Betrieb weiterläuft.",
      },
      {
        q: "Was, wenn Mitarbeiter nicht mitziehen?",
        a: "Deshalb beginnen wir mit Abläufen, die Ihr Team selbst als lästig empfindet. Wer merkt, dass es ihm Arbeit abnimmt, zieht mit.",
      },
    ],
    verwandt: ["crm", "automationen", "potenzialanalyse"],
  },
  {
    slug: "crm",
    name: "CRM",
    pillar: "prozesse",
    meta: "CRM für Traditionsunternehmen: alle Kunden, Angebote und Gespräche an einem Ort. Passend gewählt, sauber eingeführt, vom Team genutzt.",
    headline: "Alle Kunden an einem Ort.",
    lead: "Wer hat mit welchem Kunden zuletzt gesprochen, und was wurde angeboten? Mit einem CRM weiß das Ihr ganzes Team, nicht nur einzelne Personen.",
    ausgangslage: [
      {
        titel: "Kontakte überall verstreut",
        text: "In Outlook, auf Diensthandys, in Excel und auf Visitenkarten. Wenn jemand das Unternehmen verlässt, gehen seine Kontakte mit.",
      },
      {
        titel: "Kundenwissen im Kopf",
        text: "Ihr Vorgänger kannte jeden Kunden persönlich. Bei der Übergabe ist davon nur ein Teil angekommen.",
      },
      {
        titel: "Keiner sieht das Ganze",
        text: "Wie viele Angebote sind offen? Welche Kunden haben lange nicht bestellt? Für die Antwort muss jemand Listen zusammentragen.",
      },
    ],
    umsetzung: [
      {
        titel: "Anforderungen klären",
        text: "Was soll das CRM können? Wir starten bewusst schlank: Kontakte, Angebote, Wiedervorlagen.",
      },
      {
        titel: "Passendes System wählen",
        text: "Ich empfehle herstellerneutral ein System, das zu Größe und Software Ihres Betriebs passt. Die Lizenzkosten nenne ich vorher.",
      },
      {
        titel: "Daten übernehmen",
        text: "Ich bereinige Ihre Kontakte aus Excel, Outlook und Altsystemen und übernehme sie. Doppelte Einträge fliegen raus.",
      },
      {
        titel: "Im Alltag verankern",
        text: "Kurze Schulung, wenige Pflichtfelder, klare Regeln. Ein CRM hilft nur, wenn es jeden Tag genutzt wird.",
      },
    ],
    ergebnis: [
      "Ein eingerichtetes CRM mit Ihren bereinigten Kundendaten",
      "Eine Übersicht aller offenen Angebote auf einen Blick",
      "Wiedervorlagen, die an Nachfassen und Kundenpflege erinnern",
      "Ein Team, das weiß, wie und wofür es das System nutzt",
    ],
    mitbringen: "Ihre bestehenden Kundendaten, eine Person, die das CRM intern verantwortet, und die Lizenzkosten für das gewählte System.",
    grenze: "Ich programmiere keine eigenen Systeme. Tiefe Anbindungen an ERP oder Warenwirtschaft setze ich bei Bedarf mit Partnern um.",
    hinweis: "Zu Datenschutz und Auftragsverarbeitung mit dem CRM-Anbieter gebe ich Orientierung, keine Rechtsberatung.",
    faq: [
      {
        q: "Welches CRM empfehlen Sie?",
        a: "Das hängt von Ihrem Betrieb ab. Ich arbeite herstellerneutral und vergleiche mit Ihnen zwei bis drei Systeme, bevor Sie sich festlegen.",
      },
      {
        q: "Ist ein CRM für uns nicht zu groß?",
        a: "Moderne Systeme lassen sich klein starten. Für viele Betriebe reichen anfangs Kontakte, Angebote und Erinnerungen.",
      },
      {
        q: "Was passiert mit unseren Daten, wenn wir kündigen?",
        a: "Das System und die Daten gehören Ihnen. Sie laufen auf Ihrem Konto weiter, auch ohne mich.",
      },
    ],
    verwandt: ["vertrieb", "automationen", "digitalisierung"],
  },
  {
    slug: "automationen",
    name: "Automationen",
    pillar: "prozesse",
    meta: "Automationen für Industrie und Handwerk: wiederkehrende Aufgaben laufen von selbst, Ihr Team entscheidet. Konkret, getestet, dokumentiert.",
    headline: "Routine läuft von selbst. Ihr Team entscheidet.",
    lead: "Abtippen, Weiterleiten, Erinnern. Viele Handgriffe im Büro wiederholen sich jeden Tag. Ich automatisiere die, bei denen es sich lohnt.",
    ausgangslage: [
      {
        titel: "Dieselben Daten, mehrfach getippt",
        text: "Eine Serviceanfrage kommt per E-Mail, wird in Excel übertragen und für den Monteur noch einmal ausgedruckt.",
      },
      {
        titel: "Erinnerungen per Klebezettel",
        text: "Wartungstermine, Nachfassen bei Angeboten, Prüffristen. Ob daran gedacht wird, hängt vom Gedächtnis Einzelner ab.",
      },
      {
        titel: "Bestätigungen von Hand",
        text: "Jede Terminbestätigung, jede Eingangsbestätigung wird einzeln geschrieben. Das kostet täglich Zeit.",
      },
    ],
    umsetzung: [
      {
        titel: "Wiederholungen sammeln",
        text: "Wir listen die Aufgaben, die regelmäßig gleich ablaufen. Mit einer groben Schätzung, wie viel Zeit sie kosten.",
      },
      {
        titel: "Die ersten Automationen",
        text: "Wir starten mit zwei oder drei Fällen. Etwa: Anfrage über die Website landet im CRM, der Kunde bekommt eine Bestätigung.",
      },
      {
        titel: "Bauen und testen",
        text: "Ich richte die Abläufe ein und teste sie mit echten Fällen. Bei wichtigen Entscheidungen bleibt immer ein Mensch dazwischen.",
      },
      {
        titel: "Dokumentieren",
        text: "Sie bekommen eine einfache Übersicht: Was läuft automatisch, wer wird bei einem Fehler informiert, wie schaltet man es ab.",
      },
    ],
    ergebnis: [
      "Eine Liste Ihrer Wiederholaufgaben mit geschätztem Zeitaufwand",
      "Die ersten Automationen im laufenden Betrieb",
      "Eine Dokumentation, die Ihr Team versteht",
      "Einen Plan, welche Abläufe sich als Nächstes lohnen",
    ],
    mitbringen: "Zugänge zu den beteiligten Programmen und eine Person, die Fälle aus dem Alltag beschreibt und Tests begleitet.",
    grenze: "Eingriffe in Maschinensteuerung oder Produktions-IT gehören nicht dazu. Lizenzen für Automationswerkzeuge zahlen Sie direkt.",
    faq: [
      {
        q: "Wie viel Zeit spart das?",
        a: "Das hängt von Ihren Abläufen ab. Ich schätze es vorher pro Aufgabe ein und kennzeichne die Annahmen. Danach prüfen wir, ob die Schätzung stimmt.",
      },
      {
        q: "Was, wenn eine Automation einen Fehler macht?",
        a: "Jede Automation meldet Fehler an eine feste Person. Bei heiklen Schritten wie Angeboten oder Rechnungen gibt ein Mensch frei.",
      },
      {
        q: "Funktioniert das mit unserer alten Software?",
        a: "Oft ja, über Schnittstellen, Exporte oder E-Mail. Wo es nicht geht, sage ich das ehrlich.",
      },
    ],
    verwandt: ["crm", "assistenten", "digitalisierung"],
  },

  /* ---------------------------------------------------------------- KI */
  {
    slug: "potenzialanalyse",
    name: "Potenzialanalyse",
    pillar: "ki",
    meta: "KI-Potenzialanalyse für Traditionsunternehmen: herausfinden, wo KI Ihrem Betrieb wirklich Zeit zurückgibt, bevor Sie Geld ausgeben.",
    headline: "Wissen, wo KI sich lohnt. Bevor Sie Geld ausgeben.",
    lead: "Jeder spricht über KI, und viele Anbieter versprechen viel. Ich schaue mit Ihnen nüchtern hin: Wo hilft KI in Ihrem Betrieb, und wo nicht?",
    ausgangslage: [
      {
        titel: "Viel Lärm, wenig Klarheit",
        text: "Täglich kommen neue Tools und Angebote. Was davon in einem Betrieb mit 80 Mitarbeitern wirklich nützt, sagt Ihnen niemand.",
      },
      {
        titel: "Sorge vor der Fehlinvestition",
        text: "Sie wollen nicht in ein Projekt investieren, das nach einem halben Jahr in der Schublade liegt.",
      },
      {
        titel: "Erwartung von allen Seiten",
        text: "Kunden, Mitarbeitende und Ihr Umfeld fragen, was Sie mit KI machen. Sie möchten eine ehrliche Antwort haben.",
      },
    ],
    umsetzung: [
      {
        titel: "Aufgaben-Inventur",
        text: "Mit Büro, Vertrieb und Technik sammle ich, wo die Zeit hingeht. Angebote, E-Mails, Dokumentation, Recherche.",
      },
      {
        titel: "Jede Aufgabe bewerten",
        text: "Wie viel Nutzen, wie viel Aufwand, welche Risiken bei den Daten? Daraus entsteht eine Rangliste.",
      },
      {
        titel: "Drei Pilotfälle",
        text: "Sie bekommen drei Anwendungen, mit denen Sie starten können. Mit einer Zeitschätzung, die ihre Annahmen offenlegt.",
      },
      {
        titel: "Gemeinsam entscheiden",
        text: "Wir besprechen, welcher Fall zuerst kommt. Manchmal lautet die ehrliche Antwort: Hier lohnt sich KI noch nicht.",
      },
    ],
    ergebnis: [
      "Eine Übersicht, wo in Ihrem Betrieb Zeit verloren geht",
      "Eine Rangliste möglicher KI-Anwendungen mit Nutzen und Risiko",
      "Drei konkrete Pilotfälle mit gekennzeichneter Zeitschätzung",
      "Eine Entscheidungsgrundlage ohne Verkaufsdruck",
    ],
    mitbringen: "Gesprächspartner aus mehreren Bereichen und die Offenheit, auch Abläufe zu zeigen, die nicht perfekt laufen.",
    grenze: "Ich verkaufe keine eigene KI-Software. Die Analyse ist herstellerneutral, Lizenzkosten für spätere Tools zahlen Sie direkt.",
    faq: [
      {
        q: "Was ist der Unterschied zum KI-Potenzial-Check?",
        a: "Der Check ist ein kostenloser Selbsttest für eine erste Einschätzung. Die Potenzialanalyse geht in Ihre echten Abläufe und endet mit konkreten Pilotfällen.",
      },
      {
        q: "Wie genau sind die Zeitschätzungen?",
        a: "Es sind Schätzungen, und sie sind als solche gekennzeichnet, mit allen Annahmen. Nach dem Pilot messen wir, was tatsächlich herauskommt.",
      },
      {
        q: "Brauchen wir dafür eigene IT-Leute?",
        a: "Nein. Die meisten Anwendungen laufen mit gängigen Werkzeugen. Wo es technisch tiefer wird, hole ich Partner dazu.",
      },
    ],
    verwandt: ["assistenten", "regeln", "automationen"],
  },
  {
    slug: "assistenten",
    name: "Assistenten",
    pillar: "ki",
    meta: "KI-Assistenten für den Mittelstand: Angebote, E-Mails und Rückfragen schneller bearbeiten, mit Ihrem Wissen und klaren Regeln.",
    headline: "KI-Assistenten, die Ihr Wissen kennen.",
    lead: "Ein guter Assistent kennt Ihre Produkte, Ihre Textbausteine und Ihren Ton. Ich richte KI-Assistenten für konkrete Aufgaben ein und teste sie mit echten Fällen.",
    ausgangslage: [
      {
        titel: "Dieselben Fragen, jeden Tag",
        text: "Lieferzeiten, technische Daten, Ersatzteile. Ihr Innendienst beantwortet die gleichen Fragen immer wieder von Hand.",
      },
      {
        titel: "Angebotstexte kosten Stunden",
        text: "Für jedes Angebot werden Beschreibungen zusammengesucht und angepasst. Dabei ist vieles schon irgendwo formuliert.",
      },
      {
        titel: "Wissen in Ordnern",
        text: "Datenblätter, Handbücher und Prüfberichte liegen auf dem Server. Wer etwas sucht, braucht lange oder fragt einen Kollegen.",
      },
    ],
    umsetzung: [
      {
        titel: "Einen Einsatzfall wählen",
        text: "Wir starten mit einer Aufgabe, die häufig vorkommt und klar abgegrenzt ist. Zum Beispiel Entwürfe für Kundenantworten.",
      },
      {
        titel: "Mit Ihrem Wissen füttern",
        text: "Der Assistent arbeitet mit Ihren freigegebenen Unterlagen: Datenblätter, Textbausteine, Preislisten, Handbücher.",
      },
      {
        titel: "Ton und Regeln festlegen",
        text: "Wie spricht der Assistent, was darf er, was nie? Sensible Daten bleiben draußen.",
      },
      {
        titel: "Testen und einführen",
        text: "Ihr Team testet mit echten Fällen, ein Mensch prüft jedes Ergebnis. Erst wenn es zuverlässig läuft, geht es in den Alltag.",
      },
    ],
    ergebnis: [
      "Einen eingerichteten Assistenten für eine konkrete Aufgabe",
      "Eine aufbereitete Wissensbasis aus Ihren Unterlagen",
      "Schriftliche Regeln für Ton, Daten und Prüfung",
      "Ein Team, das den Assistenten sicher bedient",
    ],
    mitbringen: "Unterlagen, die der Assistent nutzen darf, Testfälle aus dem Alltag und Mitarbeitende, die Ergebnisse fachlich prüfen.",
    grenze: "Assistenten treffen keine Entscheidungen über Menschen und steuern keine Maschinen. Lizenzkosten für KI-Dienste zahlen Sie direkt.",
    hinweis: "Chatbots, die mit Kunden sprechen, tragen einen KI-Hinweis (Art. 50 EU-KI-Verordnung). Zu Datenschutz gebe ich Orientierung, keine Rechtsberatung.",
    faq: [
      {
        q: "Landen unsere Daten bei ChatGPT?",
        a: "Nur wenn Sie das wollen und es vertraglich sauber geregelt ist. Wir wählen Dienste und Einstellungen, bei denen Ihre Daten nicht zum Training genutzt werden.",
      },
      {
        q: "Können Assistenten direkt mit Kunden sprechen?",
        a: "Ja, etwa als Chat auf der Website. Dann ist klar gekennzeichnet, dass es eine KI ist, und es gibt immer einen Weg zu einem Menschen.",
      },
      {
        q: "Was, wenn der Assistent etwas Falsches sagt?",
        a: "Deshalb prüft am Anfang ein Mensch jedes Ergebnis. Erst wenn die Qualität stimmt, entscheiden Sie, wo das gelockert werden kann.",
      },
    ],
    verwandt: ["potenzialanalyse", "regeln", "automationen"],
  },
  {
    slug: "regeln",
    name: "Regeln",
    pillar: "ki",
    meta: "KI-Regeln für Unternehmen: eine verständliche KI-Richtlinie, klare Datenregeln und Verantwortlichkeiten. Orientierung zum EU AI Act.",
    headline: "Klare Spielregeln für KI im Betrieb.",
    lead: "Ihre Mitarbeitenden nutzen KI ohnehin, oft auf eigene Faust. Mit klaren Regeln wird daraus ein sicherer Vorteil für Ihren Betrieb.",
    ausgangslage: [
      {
        titel: "KI läuft schon, unbemerkt",
        text: "Einzelne Kolleginnen schreiben E-Mails mit ChatGPT, andere übersetzen Datenblätter mit kostenlosen Tools. Niemand hat es geregelt.",
      },
      {
        titel: "Unklar, welche Daten hineingehen",
        text: "Kundennamen, Preise, Zeichnungen. Was in einem öffentlichen KI-Dienst landet, lässt sich nicht zurückholen.",
      },
      {
        titel: "Neue Pflichten, wenig Überblick",
        text: "Der EU AI Act ist in Kraft. Was er für einen Betrieb Ihrer Größe konkret bedeutet, ist oft unklar.",
      },
    ],
    umsetzung: [
      {
        titel: "Bestandsaufnahme",
        text: "Welche KI-Werkzeuge werden heute genutzt, von wem und wofür? Ohne Vorwürfe, nur zur Übersicht.",
      },
      {
        titel: "Datenregeln",
        text: "Wir legen fest, welche Daten in welche Werkzeuge dürfen. Und welche nie, etwa Personaldaten oder vertrauliche Zeichnungen.",
      },
      {
        titel: "Eine verständliche Richtlinie",
        text: "Ein kurzes Dokument in einfacher Sprache: erlaubte Tools, Prüfpflicht, Kennzeichnung, Ansprechpartner.",
      },
      {
        titel: "Verantwortung festlegen",
        text: "Eine Person im Betrieb ist für KI-Fragen zuständig. Ich unterstütze sie, bis sie sicher im Thema ist.",
      },
    ],
    ergebnis: [
      "Eine Übersicht, welche KI-Werkzeuge in Ihrem Betrieb genutzt werden",
      "Klare Regeln, welche Daten wohin dürfen",
      "Eine KI-Richtlinie, die Ihr Team versteht und unterschreiben kann",
      "Eine zuständige Person mit klarem Auftrag",
    ],
    mitbringen: "Offenheit im Team über die bisherige Nutzung und, falls vorhanden, die Einbindung von Betriebsrat und Datenschutzbeauftragtem.",
    grenze: "Ich ersetze keine Rechtsberatung und keinen Datenschutzbeauftragten. Betriebsvereinbarungen stimmen Sie mit Ihrem Anwalt ab.",
    hinweis: "Der EU AI Act verlangt von Betrieben, die KI einsetzen, ausreichende KI-Kompetenz ihres Personals (Art. 4). Alles hier ist Orientierung, keine Rechtsberatung.",
    faq: [
      {
        q: "Sollten wir KI nicht einfach verbieten?",
        a: "Ein Verbot verhindert die Nutzung selten, es macht sie nur unsichtbar. Klare Regeln schützen Ihre Daten besser.",
      },
      {
        q: "Wie lang ist so eine Richtlinie?",
        a: "So kurz wie möglich. Wenige Seiten, die jeder im Team versteht, wirken mehr als ein dickes Handbuch, das niemand liest.",
      },
      {
        q: "Muss ich mein Team schulen?",
        a: "Der EU AI Act verlangt ausreichende KI-Kompetenz bei Mitarbeitenden, die KI nutzen. Wie Sie das umsetzen, steht auf der Seite zur Schulung.",
      },
    ],
    verwandt: ["schulung", "assistenten", "potenzialanalyse"],
  },
  {
    slug: "schulung",
    name: "Schulung",
    pillar: "ki",
    meta: "KI-Schulung für Teams im Mittelstand: Live-Online-Workshops mit Aufgaben aus Ihrem eigenen Betrieb, für Büro, Vertrieb und Technik.",
    headline: "Ihr Team lernt KI an den eigenen Aufgaben.",
    lead: "Allgemeine KI-Vorträge vergisst man schnell. In meinen Workshops arbeitet Ihr Team an Aufgaben aus dem eigenen Alltag und nimmt sie direkt mit.",
    ausgangslage: [
      {
        titel: "Zwischen Skepsis und Begeisterung",
        text: "Manche im Team probieren alles aus, andere lehnen KI grundsätzlich ab. Ein gemeinsames Verständnis fehlt.",
      },
      {
        titel: "Wissen hängt an Einzelnen",
        text: "Ein Kollege kennt sich gut aus, alle anderen fragen ihn. Fällt er aus, steht das Thema still.",
      },
      {
        titel: "Schulungen ohne Bezug",
        text: "Externe Kurse zeigen Beispiele aus Marketingagenturen. Mit Ihrer Auftragsabwicklung oder Ihren Datenblättern hat das wenig zu tun.",
      },
    ],
    umsetzung: [
      {
        titel: "Gruppen nach Aufgaben",
        text: "Büro, Vertrieb, Technik und Führung lernen getrennt. Jede Gruppe übt an dem, was sie täglich macht.",
      },
      {
        titel: "Live-Online-Workshops",
        text: "Kurze, praktische Einheiten per Video. Jeder arbeitet mit, an eigenen Beispielen, unter den Regeln Ihres Betriebs.",
      },
      {
        titel: "Kurzanleitungen",
        text: "Zu jedem Workshop gibt es eine Kurzanleitung mit Ihren Beispielen. Zum Nachschlagen und für neue Kollegen.",
      },
      {
        titel: "Fragen im Alltag",
        text: "Nach dem Workshop kommen die echten Fragen. Die klären wir in festen Terminen, damit das Gelernte bleibt.",
      },
    ],
    ergebnis: [
      "Ein Team mit gemeinsamem Grundverständnis von KI",
      "Übungen und Vorlagen aus Ihrem eigenen Betrieb",
      "Kurzanleitungen zum Nachschlagen, auch für neue Kollegen",
      "Einen Nachweis, welche Mitarbeitenden geschult wurden",
    ],
    mitbringen: "Zeit für die Workshops, echte Beispielaufgaben aus den Abteilungen und Zugang zu den freigegebenen KI-Werkzeugen.",
    grenze: "Schulungen finden online statt. Vor-Ort-Termine sind möglich, aber nicht im Paket enthalten und werden mit Reisekosten und Tagessatz abgerechnet.",
    hinweis: "Für Weiterbildung gibt es teilweise Förderprogramme. Ich informiere darüber, ob Ihr Vorhaben förderfähig ist, entscheidet die jeweilige Stelle.",
    faq: [
      {
        q: "Brauchen meine Mitarbeitenden Vorkenntnisse?",
        a: "Nein. Wir beginnen dort, wo Ihr Team steht. Wer schon weiter ist, bekommt anspruchsvollere Aufgaben.",
      },
      {
        q: "Erfüllt das die Schulungspflicht aus dem EU AI Act?",
        a: "Die Workshops helfen Ihnen, die geforderte KI-Kompetenz aufzubauen und zu dokumentieren. Ob das in Ihrem Fall ausreicht, ist eine rechtliche Frage. Hier gebe ich Orientierung, keine Rechtsberatung.",
      },
      {
        q: "Warum online statt vor Ort?",
        a: "Weil kurze Einheiten besser in den Arbeitsalltag passen und niemand anreisen muss. Wir arbeiten so, wie Ihr Unternehmen künftig arbeiten soll.",
      },
    ],
    verwandt: ["regeln", "assistenten", "einarbeitung"],
  },
];

export function themenFuer(pillarId: Pillar["id"]): Thema[] {
  return themen.filter((t) => t.pillar === pillarId);
}

export function getThema(slug: string): Thema | undefined {
  return themen.find((t) => t.slug === slug);
}
