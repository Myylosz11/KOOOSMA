import {
  BadgeCheck,
  BarChart3,
  CalendarDays,
  Camera,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Diamond,
  HeartPulse,
  Leaf,
  LineChart,
  LockKeyhole,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Users
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type AureaLocale = "pl" | "en" | "de";

export const aureaLocales: Array<{ code: AureaLocale; label: string; flag: string }> = [
  { code: "pl", label: "Polski", flag: "PL" },
  { code: "en", label: "English", flag: "EN" },
  { code: "de", label: "Deutsch", flag: "DE" }
];

export const aureaCopy = {
  pl: {
    nav: ["Start", "Zabiegi", "Technologie", "Zespół", "Cennik", "Blog", "Kontakt"],
    heroEyebrow: "Business Premium demo dla klienta MiloWeb Studio",
    heroTitle: "Aurea Clinic — świadoma pielęgnacja skóry w standardzie premium.",
    heroLead:
      "Przykładowa strona klienta z pakietu Business Premium: unikalny UX/UI, podstrony, blog SEO, formularze, wielojęzyczność, analityka, CRM-ready i dopracowany mobile-first.",
    book: "Umów konsultację",
    explore: "Zobacz ofertę",
    proof: "Efekt pakietu Business Premium"
  },
  en: {
    nav: ["Home", "Treatments", "Technology", "Team", "Pricing", "Blog", "Contact"],
    heroEyebrow: "Business Premium client demo by MiloWeb Studio",
    heroTitle: "Aurea Clinic — conscious skin care in a premium standard.",
    heroLead:
      "A sample Business Premium client website: custom UX/UI, subpages, SEO blog, forms, multilingual UI, analytics, CRM-ready setup and refined mobile-first design.",
    book: "Book consultation",
    explore: "Explore offer",
    proof: "Business Premium package result"
  },
  de: {
    nav: ["Start", "Behandlungen", "Technologie", "Team", "Preise", "Blog", "Kontakt"],
    heroEyebrow: "Business Premium Kundendemo von MiloWeb Studio",
    heroTitle: "Aurea Clinic — bewusste Hautpflege im Premium-Standard.",
    heroLead:
      "Eine Beispielseite im Business Premium Paket: individuelles UX/UI, Unterseiten, SEO-Blog, Formulare, Mehrsprachigkeit, Analytics, CRM-ready und Mobile-first.",
    book: "Beratung buchen",
    explore: "Angebot ansehen",
    proof: "Ergebnis des Business Premium Pakets"
  }
} satisfies Record<AureaLocale, Record<string, string | string[]>>;

export type Treatment = {
  icon: LucideIcon;
  title: string;
  description: string;
  detail: string;
};

export const aureaTreatments: Treatment[] = [
  {
    icon: Sparkles,
    title: "Skin Quality Program",
    description: "Indywidualny plan poprawy jakości skóry, tekstury i blasku.",
    detail: "Konsultacja, analiza potrzeb, plan domowej pielęgnacji i zabiegi dobrane do rytmu klienta."
  },
  {
    icon: Leaf,
    title: "Facial Rituals",
    description: "Luksusowe rytuały twarzy łączące pielęgnację, relaks i technologię.",
    detail: "Idealne dla klientów, którzy chcą efektu świeżości bez agresywnego języka medycznego."
  },
  {
    icon: HeartPulse,
    title: "Longevity Care",
    description: "Programy profilaktyczne dla skóry, komfortu i długofalowej regularności.",
    detail: "Zaprojektowane jako abonament premium z wygodnym kontaktem i przypomnieniami."
  },
  {
    icon: Diamond,
    title: "Premium Consultation",
    description: "Spokojna konsultacja, podczas której klient dostaje jasny plan działania.",
    detail: "Strona prowadzi użytkownika do konsultacji zamiast chaotycznie sprzedawać wszystkie usługi naraz."
  }
];

export const aureaStats = [
  ["4.9/5", "średnia ocen klientów"],
  ["36h", "średni czas odpowiedzi"],
  ["3 języki", "gotowa komunikacja"],
  ["92%", "ruchu mobile obsłużonego wygodnie"]
];

export const premiumFeatures = [
  {
    icon: ShieldCheck,
    title: "Wizerunek premium",
    text: "Spójna identyfikacja, typografia, kolorystyka i ton komunikacji dopasowane do segmentu klienta."
  },
  {
    icon: BarChart3,
    title: "Analityka i SEO",
    text: "Struktura nagłówków, metadata, podstrony ofertowe, blog SEO i miejsca pod zdarzenia analityczne."
  },
  {
    icon: LockKeyhole,
    title: "CRM-ready",
    text: "Formularze przygotowane pod podpięcie CRM, maili automatycznych, webhooków lub Google Sheets."
  },
  {
    icon: ClipboardCheck,
    title: "CMS-ready",
    text: "Treści są rozdzielone logicznie, więc można je później przenieść do CMS albo panelu edycji."
  }
];

export const aureaProcess = [
  ["01", "Konsultacja", "Klient wybiera termin lub wysyła formularz. Strona zbiera potrzeby i budżet."],
  ["02", "Plan", "Aurea przygotowuje spokojną rekomendację, bez presji i chaotycznej listy zabiegów."],
  ["03", "Wizyta", "Użytkownik wie, czego się spodziewać, ile trwa proces i jak przygotować się do wizyty."],
  ["04", "Opieka", "Po wizycie klient dostaje plan, przypomnienia i może wrócić przez szybki kontakt."]
];

export const aureaPricing = [
  {
    name: "Consult",
    price: "od 250 zł",
    description: "Konsultacja i plan pielęgnacyjny.",
    features: ["analiza potrzeb", "plan domowy", "rekomendacja usług"]
  },
  {
    name: "Signature",
    price: "od 690 zł",
    description: "Rytuał twarzy i poprawa jakości skóry.",
    features: ["90 minut", "dobór technologii", "opieka po wizycie"],
    highlighted: true
  },
  {
    name: "Longevity",
    price: "od 1490 zł",
    description: "Program premium dla regularnej opieki.",
    features: ["3 wizyty", "priorytetowe terminy", "monitoring postępów"]
  }
];

export const aureaExperts = [
  ["Dr Anna Vey", "Konsultacje estetyczne", "Łączy spokojny język, precyzję i holistyczne podejście do skóry."],
  ["Marta Sol", "Kosmetologia premium", "Specjalizuje się w rytuałach twarzy i planach pielęgnacji domowej."],
  ["Nina Vale", "Client Experience", "Dba o pierwsze wrażenie, kontakt i komfort klienta po wizycie."]
];

export const aureaBlog = [
  ["Jak przygotować się do pierwszej konsultacji skóry?", "Poradnik dla klientów, którzy chcą przyjść spokojnie i świadomie."],
  ["Dlaczego regularność jest ważniejsza niż przypadkowe zabiegi?", "Artykuł SEO o programach pielęgnacyjnych i długofalowych efektach."],
  ["Strona premium kliniki: co buduje zaufanie klienta?", "Przykład treści blogowej, która wspiera wizerunek i pozycjonowanie."]
];

export const aureaSubpages = [
  {
    slug: "zabiegi",
    icon: Sparkles,
    title: "Zabiegi i programy",
    lead: "Podstrona ofertowa porządkuje usługi w czytelne programy, aby klient nie musiał dekodować technicznych nazw zabiegów.",
    bullets: ["Skin Quality Program", "Facial Rituals", "Longevity Care", "Premium Consultation"]
  },
  {
    slug: "technologie",
    icon: LineChart,
    title: "Technologie i standard pracy",
    lead: "Sekcja dla klientów, którzy chcą zrozumieć jakość procesu, bezpieczeństwo, analitykę i profesjonalne standardy obsługi.",
    bullets: ["proces konsultacyjny", "CRM-ready formularze", "analityka zachowań", "SEO i Core Web Vitals"]
  },
  {
    slug: "zespol",
    icon: Users,
    title: "Zespół",
    lead: "Podstrona budująca zaufanie przez eksperckość, zdjęcia, role, bio i spokojny język bez przesadnych obietnic.",
    bullets: ["profile ekspertów", "role i specjalizacje", "wartości marki", "client experience"]
  },
  {
    slug: "cennik",
    icon: BadgeCheck,
    title: "Cennik",
    lead: "Przejrzysty cennik premium pokazuje zakres, cenę wejściową i zachęca do konsultacji zamiast wymuszać natychmiastowy zakup.",
    bullets: ["Consult od 250 zł", "Signature od 690 zł", "Longevity od 1490 zł", "pakiety regularnej opieki"]
  },
  {
    slug: "blog",
    icon: Camera,
    title: "Blog",
    lead: "Blog SEO edukuje klienta, wzmacnia widoczność i daje marce głos ekspercki.",
    bullets: ["poradniki", "artykuły edukacyjne", "frazy lokalne", "treści wspierające sprzedaż"]
  },
  {
    slug: "kontakt",
    icon: MessageCircle,
    title: "Kontakt i rezerwacja",
    lead: "Formularz prowadzi klienta przez wybór usługi, preferowany termin i oczekiwany sposób kontaktu.",
    bullets: ["formularz leadowy", "telefon", "e-mail", "WhatsApp", "mapa i lokalizacja"]
  }
];

export const aureaContact = [
  { icon: Phone, label: "+48 000 111 222" },
  { icon: Mail, label: "hello@aureaclinic.pl" },
  { icon: CalendarDays, label: "Konsultacje pn-pt 9:00-18:00" },
  { icon: Clock, label: "Średnia odpowiedź do 36h" }
];

export const aureaTestimonials = [
  ["Katarzyna", "Klientka konsultacji", "Od pierwszego wejścia czuć spokój i standard premium. Strona bardzo dobrze tłumaczy, czego się spodziewać."],
  ["Michał", "Partner biznesowy", "To przykład strony, która sprzedaje jakością, nie krzykliwymi obietnicami."],
  ["Ola", "Stała klientka", "Najbardziej pomógł mi jasny proces i możliwość szybkiego kontaktu po konsultacji."]
];

export const aureaFaq = [
  ["Czy to jest prawdziwa strona klienta?", "To demo pakietu Business Premium stworzone jako przykład jakości, zakresu i struktury, którą można wdrożyć dla realnego klienta."],
  ["Czy formularz jest podpięty do CRM?", "W demo formularz waliduje dane i jest przygotowany technicznie pod CRM, webhook, e-mail lub Google Sheets."],
  ["Czy można dodać CMS?", "Tak. Struktura treści jest gotowa do przeniesienia do CMS, np. Sanity, Strapi, WordPress headless albo panelu custom."],
  ["Czy można zmienić branżę?", "Tak. Ten sam standard można przenieść na kancelarię, dewelopera, premium B2B, restaurację, salon beauty albo usługi lokalne."]
];

export const aureaQuality = [
  CheckCircle2,
  Star,
  ShieldCheck,
  Sparkles
];
