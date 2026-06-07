import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Bot,
  BrainCircuit,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Code2,
  Compass,
  CreditCard,
  DatabaseZap,
  Globe2,
  Layers3,
  LineChart,
  Megaphone,
  MessageCircle,
  Palette,
  Rocket,
  Search,
  ServerCog,
  ShieldCheck,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Star,
  Users,
  WandSparkles,
  Zap
} from "lucide-react";

export type Locale = "pl" | "en" | "de" | "es" | "fr" | "it" | "uk" | "cs";

export const locales: Array<{ code: Locale; label: string; flag: string }> = [
  { code: "pl", label: "Polski", flag: "🇵🇱" },
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "uk", label: "Українська", flag: "🇺🇦" },
  { code: "cs", label: "Čeština", flag: "🇨🇿" }
];

export const localeCopy: Record<
  Locale,
  {
    consult: string;
    quote: string;
    portfolio: string;
    nav: string[];
    heroTitle: string;
    heroLead: string;
    rotating: string[];
    freeQuote: string;
    seeWork: string;
    selected: string;
    contactTitle: string;
    contactLead: string;
    send: string;
    call: string;
    whatsapp: string;
    valuation: string;
  }
> = {
  pl: {
    consult: "Umów bezpłatną konsultację",
    quote: "Zamów darmową wycenę",
    portfolio: "Zobacz przykładowe realizacje",
    nav: ["Start", "Usługi", "Realizacje", "Proces", "Cennik", "Opinie", "FAQ", "Kontakt"],
    heroTitle: "Tworzymy strony internetowe, które nie tylko wyglądają świetnie — one sprzedają.",
    heroLead:
      "Projektujemy nowoczesne strony www, landing page'e, sklepy internetowe i automatyzacje AI dla firm, które chcą wyglądać profesjonalnie, zdobywać klientów i rosnąć szybciej.",
    rotating: ["strony firmowe", "landing page'e", "sklepy online", "systemy rezerwacji", "automatyzacje AI", "lejki sprzedażowe", "aplikacje webowe"],
    freeQuote: "Darmowa wycena",
    seeWork: "Realizacje",
    selected: "Najczęściej wybierany",
    contactTitle: "Zbudujmy stronę, która zrobi profesjonalne pierwsze wrażenie i zacznie zdobywać klientów.",
    contactLead: "Opisz projekt w 60 sekund. Wrócimy z konkretną propozycją zakresu, technologii i najbliższych kroków.",
    send: "Wyślij zapytanie",
    call: "Zadzwoń",
    whatsapp: "WhatsApp",
    valuation: "Wycena"
  },
  en: {
    consult: "Book a free consultation",
    quote: "Request a free quote",
    portfolio: "View sample projects",
    nav: ["Home", "Services", "Work", "Process", "Pricing", "Reviews", "FAQ", "Contact"],
    heroTitle: "We build websites that do more than look great — they sell.",
    heroLead:
      "We design modern websites, landing pages, online stores and AI automations for companies that want to look credible, win clients and grow faster.",
    rotating: ["business websites", "landing pages", "online stores", "booking systems", "AI automations", "sales funnels", "web apps"],
    freeQuote: "Free quote",
    seeWork: "Case studies",
    selected: "Most popular",
    contactTitle: "Let’s build a website that creates a premium first impression and starts winning clients.",
    contactLead: "Describe the project in 60 seconds. We will reply with a clear scope, technology direction and next steps.",
    send: "Send inquiry",
    call: "Call",
    whatsapp: "WhatsApp",
    valuation: "Quote"
  },
  de: {
    consult: "Kostenlose Beratung buchen",
    quote: "Kostenloses Angebot anfordern",
    portfolio: "Beispielprojekte ansehen",
    nav: ["Start", "Leistungen", "Projekte", "Prozess", "Preise", "Bewertungen", "FAQ", "Kontakt"],
    heroTitle: "Wir erstellen Websites, die nicht nur gut aussehen — sie verkaufen.",
    heroLead:
      "Moderne Websites, Landingpages, Onlineshops und KI-Automatisierungen für Unternehmen, die professionell wirken und schneller wachsen wollen.",
    rotating: ["Firmenwebsites", "Landingpages", "Onlineshops", "Buchungssysteme", "KI-Automationen", "Sales Funnels", "Web Apps"],
    freeQuote: "Kostenloses Angebot",
    seeWork: "Projekte",
    selected: "Am häufigsten gewählt",
    contactTitle: "Bauen wir eine Website, die professionell wirkt und neue Kunden gewinnt.",
    contactLead: "Beschreiben Sie Ihr Projekt kurz. Wir antworten mit Umfang, Technologie und nächsten Schritten.",
    send: "Anfrage senden",
    call: "Anrufen",
    whatsapp: "WhatsApp",
    valuation: "Angebot"
  },
  es: {
    consult: "Reserva una consulta gratis",
    quote: "Solicita presupuesto gratis",
    portfolio: "Ver proyectos ejemplo",
    nav: ["Inicio", "Servicios", "Proyectos", "Proceso", "Precios", "Opiniones", "FAQ", "Contacto"],
    heroTitle: "Creamos sitios web que no solo se ven increíbles — también venden.",
    heroLead:
      "Diseñamos webs, landing pages, tiendas online y automatizaciones con IA para marcas que quieren crecer con una imagen premium.",
    rotating: ["webs corporativas", "landing pages", "tiendas online", "reservas", "automatizaciones IA", "embudos de venta", "apps web"],
    freeQuote: "Presupuesto gratis",
    seeWork: "Proyectos",
    selected: "Más elegido",
    contactTitle: "Construyamos una web que genere una primera impresión premium y atraiga clientes.",
    contactLead: "Describe tu proyecto. Te responderemos con alcance, tecnología y próximos pasos.",
    send: "Enviar consulta",
    call: "Llamar",
    whatsapp: "WhatsApp",
    valuation: "Presupuesto"
  },
  fr: {
    consult: "Réserver une consultation gratuite",
    quote: "Demander un devis gratuit",
    portfolio: "Voir des réalisations",
    nav: ["Accueil", "Services", "Réalisations", "Processus", "Tarifs", "Avis", "FAQ", "Contact"],
    heroTitle: "Nous créons des sites web qui ne sont pas seulement beaux — ils vendent.",
    heroLead:
      "Sites web, landing pages, boutiques en ligne et automatisations IA pour les entreprises qui veulent paraître premium et croître plus vite.",
    rotating: ["sites d'entreprise", "landing pages", "boutiques en ligne", "systèmes de réservation", "automatisations IA", "funnels", "apps web"],
    freeQuote: "Devis gratuit",
    seeWork: "Réalisations",
    selected: "Le plus choisi",
    contactTitle: "Créons un site qui inspire confiance dès la première seconde et attire des clients.",
    contactLead: "Décrivez votre projet. Nous répondrons avec un périmètre, une technologie et les prochaines étapes.",
    send: "Envoyer",
    call: "Appeler",
    whatsapp: "WhatsApp",
    valuation: "Devis"
  },
  it: {
    consult: "Prenota una consulenza gratuita",
    quote: "Richiedi un preventivo gratis",
    portfolio: "Guarda i progetti",
    nav: ["Home", "Servizi", "Portfolio", "Processo", "Prezzi", "Recensioni", "FAQ", "Contatti"],
    heroTitle: "Creiamo siti web che non sono solo belli — vendono.",
    heroLead:
      "Siti moderni, landing page, ecommerce e automazioni AI per aziende che vogliono apparire professionali e crescere più velocemente.",
    rotating: ["siti aziendali", "landing page", "negozi online", "sistemi di prenotazione", "automazioni AI", "funnel di vendita", "web app"],
    freeQuote: "Preventivo gratis",
    seeWork: "Portfolio",
    selected: "Più scelto",
    contactTitle: "Costruiamo un sito che crea una prima impressione premium e porta clienti.",
    contactLead: "Descrivi il progetto. Ti rispondiamo con ambito, tecnologia e prossimi passi.",
    send: "Invia richiesta",
    call: "Chiama",
    whatsapp: "WhatsApp",
    valuation: "Preventivo"
  },
  uk: {
    consult: "Записатися на безкоштовну консультацію",
    quote: "Отримати безкоштовну оцінку",
    portfolio: "Переглянути приклади",
    nav: ["Старт", "Послуги", "Портфоліо", "Процес", "Ціни", "Відгуки", "FAQ", "Контакт"],
    heroTitle: "Ми створюємо сайти, які не лише виглядають чудово — вони продають.",
    heroLead:
      "Сучасні сайти, landing page, інтернет-магазини та AI-автоматизації для бізнесу, який хоче виглядати професійно та швидше зростати.",
    rotating: ["сайти для бізнесу", "landing page", "інтернет-магазини", "системи бронювання", "AI-автоматизації", "воронки продажів", "web apps"],
    freeQuote: "Безкоштовна оцінка",
    seeWork: "Портфоліо",
    selected: "Найчастіше обирають",
    contactTitle: "Створімо сайт, який справляє преміальне перше враження і приводить клієнтів.",
    contactLead: "Опишіть проект. Ми повернемось із конкретним обсягом, технологіями та наступними кроками.",
    send: "Надіслати запит",
    call: "Подзвонити",
    whatsapp: "WhatsApp",
    valuation: "Оцінка"
  },
  cs: {
    consult: "Rezervovat bezplatnou konzultaci",
    quote: "Požádat o bezplatnou kalkulaci",
    portfolio: "Zobrazit ukázky",
    nav: ["Start", "Služby", "Realizace", "Proces", "Ceník", "Recenze", "FAQ", "Kontakt"],
    heroTitle: "Tvoříme weby, které nejen skvěle vypadají — prodávají.",
    heroLead:
      "Moderní weby, landing pages, e-shopy a AI automatizace pro firmy, které chtějí působit profesionálně a rychleji růst.",
    rotating: ["firemní weby", "landing pages", "e-shopy", "rezervační systémy", "AI automatizace", "prodejní funnely", "webové aplikace"],
    freeQuote: "Bezplatná kalkulace",
    seeWork: "Realizace",
    selected: "Nejčastější volba",
    contactTitle: "Vytvořme web, který udělá prémiový první dojem a začne získávat klienty.",
    contactLead: "Popište projekt. Ozveme se s rozsahem, technologií a dalšími kroky.",
    send: "Odeslat poptávku",
    call: "Volat",
    whatsapp: "WhatsApp",
    valuation: "Kalkulace"
  }
};

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const trustItems = [
  "Strony gotowe pod SEO",
  "Pełna responsywność",
  "Szybkie ładowanie",
  "Nowoczesny design",
  "Integracje AI",
  "Wsparcie po wdrożeniu"
];

export const stats = [
  { value: "120+", label: "zrealizowanych projektów" },
  { value: "40+", label: "branż" },
  { value: "98%", label: "klientów poleca" },
  { value: "7 dni", label: "średni czas startu" }
];

export const services: Service[] = [
  {
    title: "Strony internetowe dla firm",
    description: "Profesjonalne strony wizytówki, które budują zaufanie i generują zapytania.",
    icon: Globe2
  },
  {
    title: "Landing page'e sprzedażowe",
    description: "Strony kampanijne zaprojektowane pod Meta Ads, Google Ads, TikTok Ads i wysoką konwersję.",
    icon: Megaphone
  },
  {
    title: "Sklepy internetowe",
    description: "E-commerce z płatnościami, koszykiem, automatyzacjami, analityką i integracjami.",
    icon: ShoppingCart
  },
  {
    title: "UX/UI Design",
    description: "Interfejsy estetyczne, czytelne i wygodne dla użytkownika, projektowane pod decyzję zakupową.",
    icon: Layers3
  },
  {
    title: "SEO techniczne",
    description: "Optymalizacja struktury, szybkości, nagłówków, metadanych i widoczności w Google.",
    icon: Search
  },
  {
    title: "Automatyzacje AI",
    description: "Chatboty, smart formularze, automatyczne odpowiedzi, lead generation i integracje z CRM.",
    icon: Bot
  },
  {
    title: "Branding",
    description: "Logo, identyfikacja wizualna, kolory, typografia i spójny język marki premium.",
    icon: Palette
  },
  {
    title: "Opieka nad stroną",
    description: "Aktualizacje, backupy, monitoring, zmiany treści i rozwój strony po publikacji.",
    icon: ShieldCheck
  }
];

export const targetGroups = [
  "Lokalne firmy usługowe",
  "Salony beauty",
  "Trenerzy i konsultanci",
  "Restauracje",
  "Kancelarie",
  "Firmy budowlane",
  "Gabinety medyczne",
  "Startupy",
  "E-commerce",
  "Agencje i freelancerzy",
  "Marki premium",
  "Firmy B2B"
];

export const offers = [
  {
    name: "Strona wizytówka Starter",
    audience: "Dla małych firm, które chcą profesjonalnie pokazać się w internecie.",
    price: "od 1499 zł netto",
    cta: "Wybieram Starter",
    features: ["1-5 podstron", "responsywny design", "formularz kontaktowy", "podstawowe SEO", "Google Maps", "podpięcie domeny", "podstawowe animacje", "wersja mobilna"]
  },
  {
    name: "Landing Page Pro",
    audience: "Dla firm, które prowadzą kampanie reklamowe i chcą pozyskiwać leady.",
    price: "od 2499 zł netto",
    cta: "Chcę landing page",
    features: ["długa strona sprzedażowa", "copywriting sekcji", "formularz leadowy", "opinie i FAQ", "Meta Pixel", "Google Analytics", "scroll animations", "mobile-first"]
  },
  {
    name: "Strona Premium Business",
    audience: "Dla firm, które chcą wyglądać lepiej niż konkurencja.",
    price: "od 4999 zł netto",
    cta: "Zamawiam Premium",
    popular: true,
    features: ["5-10 podstron", "indywidualny UX/UI", "blog", "wielojęzyczność", "SEO techniczne", "integracje CRM", "panel do edycji", "optymalizacja szybkości"]
  },
  {
    name: "Sklep internetowy E-commerce",
    audience: "Dla marek, które chcą sprzedawać online.",
    price: "od 6999 zł netto",
    cta: "Buduję sklep",
    features: ["projekt sklepu", "koszyk i płatności", "dostawy", "panel produktów", "automatyczne maile", "Facebook Pixel", "Google Merchant", "SEO produktów"]
  },
  {
    name: "Strona + AI Automation",
    audience: "Dla firm, które chcą połączyć stronę z automatyzacją obsługi klienta.",
    price: "od 8999 zł netto",
    cta: "Chcę AI na stronie",
    features: ["strona firmowa premium", "chatbot AI", "lead scoring", "formularz kwalifikacyjny", "CRM", "auto e-mail", "baza wiedzy", "panel leadów"]
  }
];

export const comparisonRows = [
  { label: "Liczba podstron", values: ["1-5", "1", "5-10", "sklep", "5-10 + AI"] },
  { label: "Projekt indywidualny", values: ["częściowo", "tak", "tak", "tak", "tak"] },
  { label: "Wersja mobilna", values: ["tak", "tak", "tak", "tak", "tak"] },
  { label: "Formularz kontaktowy", values: ["tak", "leadowy", "tak", "kontakt + zakup", "smart formularz"] },
  { label: "SEO", values: ["podstawowe", "kampanijne", "techniczne", "produktowe", "techniczne"] },
  { label: "Analityka", values: ["opcja", "tak", "tak", "tak", "tak"] },
  { label: "Integracje", values: ["podstawowe", "ads", "CRM", "płatności", "CRM + AI"] },
  { label: "Animacje", values: ["lekkie", "scroll", "premium", "premium", "premium"] },
  { label: "Wielojęzyczność", values: ["opcja", "opcja", "tak", "opcja", "tak"] },
  { label: "Chatbot AI", values: ["opcja", "opcja", "opcja", "opcja", "tak"] },
  { label: "Panel CMS", values: ["opcja", "opcja", "tak", "tak", "tak"] },
  { label: "Wsparcie techniczne", values: ["14 dni", "14 dni", "30 dni", "30 dni", "60 dni"] },
  { label: "Czas realizacji", values: ["7-14 dni", "7-14 dni", "14-30 dni", "21-45 dni", "21-45 dni"] }
];

export const processSteps = [
  ["Konsultacja", "Poznajemy Twoją firmę, cele, ofertę i konkurencję."],
  ["Strategia", "Ustalamy strukturę strony, język komunikacji, styl wizualny i cel biznesowy."],
  ["Projekt UX/UI", "Tworzymy wygląd strony dopasowany do marki i użytkowników."],
  ["Wdrożenie", "Kodujemy stronę, dodajemy animacje, formularze, integracje i wersję mobilną."],
  ["Testy", "Sprawdzamy szybkość, responsywność, formularze, SEO i poprawność działania."],
  ["Publikacja", "Podpinamy domenę, hosting, analitykę i publikujemy stronę."],
  ["Rozwój", "Pomagamy rozwijać stronę, dodawać sekcje, automatyzacje i kampanie."]
];

export const projects = [
  ["Nova Beauty Clinic", "Beauty", "Strona premium dla salonu beauty", "+180% zapytań z formularza"],
  ["UrbanEstate", "Developer", "Landing page dla dewelopera", "320 leadów z kampanii"],
  ["FitCoach Pro", "Fitness", "Strona dla trenera personalnego", "Pełny kalendarz konsultacji w 21 dni"],
  ["LegalPoint", "Legal", "Strona dla kancelarii", "Nowy wizerunek premium i większe zaufanie"],
  ["Shoply", "E-commerce", "Sklep internetowy dla marki odzieżowej", "Sprzedaż online od pierwszego tygodnia"],
  ["AutoDetailing X", "Automotive", "Strona dla studia detailingowego", "+240% wejść z Google"]
];

export const whyUs = [
  "Nie robimy szablonowych stron.",
  "Projektujemy pod sprzedaż i zapytania.",
  "Myślimy strategicznie o ofercie i ścieżce użytkownika.",
  "Dbamy o szybkość, SEO i Core Web Vitals.",
  "Tworzymy responsywne projekty mobile-first.",
  "Wdrażamy automatyzacje AI i integracje.",
  "Pomagamy po publikacji, nie znikamy po wdrożeniu.",
  "Dajemy przejrzysty proces i jasne etapy.",
  "Piszemy treści, które przekonują.",
  "Projektujemy estetykę, która wygląda nowocześnie przez lata."
];

export const aiFeatures = [
  "chatbot AI",
  "automatyczne odpowiedzi",
  "formularze kwalifikujące klientów",
  "integracja z CRM",
  "integracja z Google Sheets",
  "powiadomienia e-mail",
  "automatyczne umawianie konsultacji",
  "analiza zapytań klientów",
  "baza wiedzy firmy",
  "lead scoring"
];

export const testimonials = [
  ["Anna", "właścicielka salonu beauty", "Strona wygląda lepiej niż u naszej konkurencji, a liczba zapytań wzrosła już w pierwszym miesiącu."],
  ["Michał", "firma usługowa", "Największa różnica to nie tylko wygląd, ale fakt, że strona realnie zaczęła sprzedawać."],
  ["Karolina", "e-commerce", "Dostaliśmy stronę, landing page i automatyzację kontaktu z klientami. Wszystko działa świetnie."],
  ["Tomasz", "deweloper", "Landing był gotowy pod kampanię, mierzenie i szybkie skalowanie. Bardzo konkretny proces."],
  ["Ola", "marka osobista", "W końcu mam stronę, która wygląda premium i tłumaczy klientom dokładnie, dlaczego warto ze mną pracować."],
  ["Daniel", "B2B services", "Automatyzacja formularzy odciążyła zespół sprzedaży i poprawiła jakość leadów."]
];

export const faqs = [
  ["Ile trwa stworzenie strony?", "Zwykle od 7 do 30 dni roboczych, zależnie od zakresu projektu."],
  ["Czy pomagacie z domeną i hostingiem?", "Tak, możemy pomóc w wyborze, konfiguracji i podpięciu domeny oraz hostingu."],
  ["Czy strona będzie działała na telefonie?", "Tak, każda strona jest projektowana mobile-first i działa na telefonach, tabletach oraz komputerach."],
  ["Czy mogę samodzielnie edytować treści?", "Tak, możemy wdrożyć CMS lub prosty panel do edycji treści."],
  ["Czy tworzycie treści na stronę?", "Tak, możemy przygotować strukturę, teksty sprzedażowe i treści SEO."],
  ["Czy robicie sklepy internetowe?", "Tak, tworzymy sklepy z płatnościami, koszykiem, produktami i automatyzacjami."],
  ["Czy możecie dodać języki obce?", "Tak, strona może mieć wiele wersji językowych i wygodny selektor języka."],
  ["Czy wdrażacie AI?", "Tak, możemy dodać chatboty, automatyczne odpowiedzi, formularze AI i integracje."],
  ["Czy oferujecie opiekę po wdrożeniu?", "Tak, mamy pakiety opieki technicznej i rozwoju strony."]
];

export const subpages = [
  {
    slug: "strony-internetowe",
    icon: Code2,
    title: "Strony internetowe dla firm",
    lead: "Kompletna oferta tworzenia stron firmowych, które budują zaufanie, skracają drogę do kontaktu i pomagają sprzedawać usługi.",
    bullets: ["analiza oferty i konkurencji", "indywidualny projekt UX/UI", "copywriting sekcji", "SEO techniczne", "formularze i analityka"]
  },
  {
    slug: "landing-page",
    icon: Rocket,
    title: "Landing page'e sprzedażowe",
    lead: "Strony kampanijne projektowane pod reklamę, pomiar konwersji i szybkie pozyskiwanie leadów.",
    bullets: ["sekcje sprzedażowe", "formularz leadowy", "opinie i FAQ", "Meta Pixel i Google Analytics", "animacje scroll-triggered"]
  },
  {
    slug: "sklepy-internetowe",
    icon: CreditCard,
    title: "Sklepy internetowe",
    lead: "E-commerce z wygodnym koszykiem, płatnościami, dostawami, produktami i podstawową automatyzacją sprzedaży.",
    bullets: ["projekt sklepu", "koszyk i płatności", "panel produktów", "maile automatyczne", "SEO produktów"]
  },
  {
    slug: "automatyzacje-ai",
    icon: BrainCircuit,
    title: "Automatyzacje AI",
    lead: "Chatboty, inteligentne formularze i procesy, które pomagają obsługiwać klientów i kwalifikować zapytania 24/7.",
    bullets: ["chatbot AI", "formularze kwalifikujące", "CRM", "Google Sheets", "lead scoring"]
  },
  {
    slug: "portfolio",
    icon: BriefcaseBusiness,
    title: "Portfolio",
    lead: "Przykładowe realizacje i kierunki stylistyczne dla firm premium, usług, e-commerce i kampanii lead generation.",
    bullets: ["mockupy projektów", "zakres prac", "efekty biznesowe", "style branżowe", "case study"]
  },
  {
    slug: "cennik",
    icon: LineChart,
    title: "Cennik",
    lead: "Przejrzyste pakiety od strony wizytówki po sklep internetowy i stronę połączoną z automatyzacją AI.",
    bullets: ["Starter od 1499 zł", "Landing Pro od 2499 zł", "Business Premium od 4999 zł", "E-commerce od 6999 zł", "AI Automation od 8999 zł"]
  },
  {
    slug: "kontakt",
    icon: MessageCircle,
    title: "Kontakt",
    lead: "Napisz, czego potrzebujesz. Przygotujemy konkretną propozycję, zakres i rekomendowany plan wdrożenia.",
    bullets: ["kontakt@milowebstudio.pl", "+48 000 000 000", "Polska / zdalnie", "WhatsApp", "bezpłatna konsultacja"]
  },
  {
    slug: "blog",
    icon: Sparkles,
    title: "Blog SEO",
    lead: "Przykładowa struktura bloga pod widoczność w Google i edukowanie klientów przed kontaktem.",
    bullets: [
      "Ile kosztuje profesjonalna strona internetowa w 2026?",
      "Landing page czy strona firmowa — co wybrać?",
      "Jak strona internetowa może zdobywać klientów?",
      "Dlaczego responsywność strony jest tak ważna?",
      "Jak AI może automatyzować obsługę klienta?"
    ]
  },
  {
    slug: "polityka-prywatnosci",
    icon: ShieldCheck,
    title: "Polityka prywatności",
    lead: "Przykładowa podstrona informacyjna do uzupełnienia o docelowe dane administratora i narzędzia analityczne.",
    bullets: ["administrator danych", "zakres przetwarzania", "formularz kontaktowy", "analityka", "prawa użytkownika"]
  },
  {
    slug: "regulamin",
    icon: BadgeCheck,
    title: "Regulamin",
    lead: "Przykładowa podstrona regulaminowa do dopasowania przed produkcyjnym wdrożeniem.",
    bullets: ["zakres usług", "kontakt", "odpowiedzialność", "prawa autorskie", "postanowienia końcowe"]
  }
];

export const iconSet = {
  BadgeCheck,
  CheckCircle2,
  Compass,
  DatabaseZap,
  Building2,
  ServerCog,
  Smartphone,
  Star,
  Users,
  WandSparkles,
  Zap
};
