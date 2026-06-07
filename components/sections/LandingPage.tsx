"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  ChevronDown,
  MessageCircle,
  MousePointerClick,
  Send,
  Sparkles,
  Star,
  Zap
} from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCTA } from "@/components/MobileCTA";
import { useSite } from "@/components/site-provider";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  aiFeatures,
  comparisonRows,
  faqs,
  iconSet,
  offers,
  processSteps,
  projects,
  services,
  stats,
  targetGroups,
  testimonials,
  trustItems,
  whyUs
} from "@/lib/content";

const formSchema = z.object({
  name: z.string().min(2, "Wpisz imię i nazwisko"),
  company: z.string().min(2, "Wpisz nazwę firmy"),
  email: z.string().email("Wpisz poprawny e-mail"),
  phone: z.string().min(6, "Wpisz numer telefonu"),
  projectType: z.string().min(1, "Wybierz typ projektu"),
  budget: z.string().min(1, "Wybierz budżet"),
  message: z.string().min(10, "Opisz krótko projekt")
});

type ContactForm = z.infer<typeof formSchema>;

const packages = ["Starter", "Landing Pro", "Business Premium", "E-commerce", "AI Automation"];

export function LandingPage() {
  return (
    <main className="page-shell mobile-cta-safe">
      <div className="orb-field" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <Header />
      <Hero />
      <TrustBar />
      <ServicesBento />
      <TargetGroups />
      <Offers />
      <PricingComparison />
      <ProcessTimeline />
      <Portfolio />
      <WhyUs />
      <AIAutomation />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <MobileCTA />
    </main>
  );
}

function Hero() {
  const { copy } = useSite();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => setIndex((value) => (value + 1) % copy.rotating.length), 2100);
    return () => window.clearInterval(interval);
  }, [copy.rotating.length]);

  return (
    <section id="start" className="section-wrap grid min-h-screen items-center gap-12 pt-28 lg:grid-cols-[1.05fr_0.95fr] lg:pt-24">
      <Reveal>
        <div>
          <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-cyan-100">
            <Sparkles size={16} /> Premium web design + AI automation
          </div>
          <h1 className="font-display text-4xl font-black leading-[1.03] md:text-6xl xl:text-7xl">{copy.heroTitle}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">{copy.heroLead}</p>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-lg font-bold">
            <span>Projektujemy:</span>
            <motion.span
              key={copy.rotating[index]}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="gradient-text font-display text-2xl"
            >
              {copy.rotating[index]}
            </motion.span>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="#kontakt">
              {copy.quote} <ArrowRight size={18} />
            </Button>
            <Button href="#realizacje" variant="glass">
              {copy.portfolio}
            </Button>
          </div>
          <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 text-sm sm:grid-cols-4">
            {["SEO Ready", "98/100 PageSpeed", "Mobile First", "AI Automation"].map((item) => (
              <div key={item} className="glass rounded-2xl px-4 py-3 text-center font-semibold">
                {item}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.12}>
        <div className="relative">
          <div className="premium-border overflow-hidden rounded-[32px] p-3 shadow-glow">
            <Image
              src="/assets/hero-dashboard.png"
              width={1300}
              height={900}
              priority
              alt="Futurystyczny mockup dashboardu i strony internetowej MiloWeb Studio"
              className="h-auto w-full rounded-[24px] object-cover"
            />
          </div>
          {["+247% więcej zapytań", "SEO Ready", "Mobile First"].map((item, itemIndex) => (
            <motion.div
              key={item}
              className={`glass absolute hidden rounded-2xl px-4 py-3 text-sm font-bold shadow-xl sm:block ${
                itemIndex === 0 ? "-left-5 top-12" : itemIndex === 1 ? "right-2 top-6" : "bottom-8 left-8"
              }`}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4 + itemIndex, repeat: Infinity, ease: "easeInOut" }}
            >
              {item}
            </motion.div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="section-wrap py-12">
      <Reveal>
        <div className="premium-border rounded-[28px] p-5">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-2 rounded-2xl bg-white/7 px-3 py-3 text-sm font-semibold">
                <Check className="text-emerald-300" size={17} /> {item}
              </div>
            ))}
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 p-5 text-center">
                <p className="font-display text-3xl font-black gradient-text">{item.value}</p>
                <p className="mt-1 text-sm text-[var(--muted)]">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function ServicesBento() {
  return (
    <section id="uslugi" className="section-wrap py-16">
      <SectionHeading
        eyebrow="Usługi"
        title="Kompletny system obecności online, nie tylko ładna strona"
        lead="Łączymy strategię, projekt, technologię, SEO i automatyzację, żeby strona od pierwszego dnia wspierała sprzedaż."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Reveal key={service.title} delay={index * 0.03} className={index === 0 || index === 5 ? "lg:col-span-2" : ""}>
              <article className="premium-border card-hover h-full rounded-[24px] p-6">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/12 text-cyan-200">
                  <Icon size={24} />
                </div>
                <h3 className="font-display text-xl font-bold">{service.title}</h3>
                <p className="mt-3 min-h-20 leading-7 text-[var(--muted)]">{service.description}</p>
                <Link href="#kontakt" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-200">
                  Dowiedz się więcej <ArrowRight size={16} />
                </Link>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function TargetGroups() {
  return (
    <section className="section-wrap py-16">
      <SectionHeading eyebrow="Dla kogo" title="Tworzymy strony dla marek, które muszą wyglądać wiarygodnie" />
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
        {targetGroups.map((item, index) => (
          <Reveal key={item} delay={index * 0.02}>
            <div className="glass card-hover rounded-2xl px-4 py-5 text-center text-sm font-bold md:text-base">{item}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Offers() {
  const { copy } = useSite();

  return (
    <section id="cennik" className="section-wrap py-16">
      <SectionHeading
        eyebrow="Oferty"
        title="Pakiety startowe z jasnym zakresem i przestrzenią na rozwój"
        lead="Każdy projekt dopasowujemy do branży, celu biznesowego i realnego procesu sprzedaży."
      />
      <div className="grid gap-4 lg:grid-cols-5">
        {offers.map((offer, index) => (
          <Reveal key={offer.name} delay={index * 0.04}>
            <article className={`relative flex h-full flex-col rounded-[24px] p-5 ${offer.popular ? "premium-border shadow-glow" : "glass card-hover"}`}>
              {offer.popular ? <span className="mb-4 inline-flex w-fit rounded-full bg-cyan-300/15 px-3 py-1 text-xs font-bold text-cyan-100">{copy.selected}</span> : null}
              <h3 className="font-display text-xl font-black">{offer.name}</h3>
              <p className="mt-3 min-h-20 text-sm leading-6 text-[var(--muted)]">{offer.audience}</p>
              <p className="mt-4 font-display text-2xl font-black gradient-text">{offer.price}</p>
              <ul className="my-5 flex flex-1 flex-col gap-2 text-sm">
                {offer.features.map((feature) => (
                  <li key={feature} className="flex gap-2 text-[var(--muted)]">
                    <Check className="mt-0.5 shrink-0 text-emerald-300" size={15} /> {feature}
                  </li>
                ))}
              </ul>
              <Button href="#kontakt" variant={offer.popular ? "primary" : "glass"} className="w-full">
                {offer.cta}
              </Button>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function PricingComparison() {
  const { copy } = useSite();

  return (
    <section className="section-wrap py-16">
      <SectionHeading eyebrow="Porównanie" title="Szybko zobacz, który pakiet pasuje do Twojego celu" />
      <Reveal>
        <div className="glass overflow-x-auto rounded-[24px] p-3">
          <table className="w-full min-w-[860px] border-separate border-spacing-0 text-sm">
            <thead>
              <tr>
                <th className="p-4 text-left text-[var(--muted)]">Funkcja</th>
                {packages.map((item) => (
                  <th key={item} className="p-4 text-left">
                    <span className={`inline-flex rounded-full px-3 py-1 ${item === "Business Premium" ? "cta-gradient text-white" : "bg-white/8"}`}>
                      {item}
                    </span>
                    {item === "Business Premium" ? <p className="mt-2 text-xs text-cyan-200">{copy.selected}</p> : null}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label}>
                  <td className="border-t border-white/10 p-4 font-semibold">{row.label}</td>
                  {row.values.map((value, index) => (
                    <td key={`${row.label}-${packages[index]}`} className="border-t border-white/10 p-4 text-[var(--muted)]">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </section>
  );
}

function ProcessTimeline() {
  return (
    <section id="proces" className="section-wrap py-16">
      <SectionHeading
        eyebrow="Proces"
        title="Jak wygląda współpraca?"
        lead="Przejrzysty plan daje kontrolę nad terminami, zakresem i efektem końcowym."
      />
      <div className="relative grid gap-4 lg:grid-cols-7">
        {processSteps.map(([title, description], index) => (
          <Reveal key={title} delay={index * 0.04}>
            <article className="glass card-hover h-full rounded-2xl p-5">
              <span className="cta-gradient mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-black text-white">{index + 1}</span>
              <h3 className="font-display text-lg font-black">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{description}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function Portfolio() {
  const icons = [BarChart3, Sparkles, Zap, Star, MousePointerClick, iconSet.DatabaseZap];

  return (
    <section id="realizacje" className="section-wrap py-16">
      <SectionHeading
        eyebrow="Portfolio"
        title="Przykładowe realizacje jako premium mockupy"
        lead="Każdy projekt pokazuje nie tylko wygląd, ale też efekt biznesowy, który ma znaczenie dla klienta."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(([name, industry, scope, result], index) => {
          const Icon = icons[index];
          return (
            <Reveal key={name} delay={index * 0.04}>
              <article className="glass card-hover overflow-hidden rounded-[24px]">
                <div className="relative h-52 overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_30%_20%,rgba(82,242,255,0.28),transparent_38%),radial-gradient(circle_at_82%_64%,rgba(139,92,246,0.3),transparent_35%),linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.03))] p-5">
                  <div className="absolute inset-x-5 top-5 h-8 rounded-t-2xl bg-black/40" />
                  <div className="absolute bottom-5 left-5 right-5 top-14 rounded-2xl border border-white/15 bg-black/35 p-4 backdrop-blur">
                    <Icon className="mb-4 text-cyan-200" size={28} />
                    <div className="space-y-2">
                      <span className="block h-3 w-4/5 rounded-full bg-white/35" />
                      <span className="block h-3 w-2/3 rounded-full bg-cyan-200/45" />
                      <span className="block h-20 rounded-xl bg-white/10" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">{industry}</p>
                  <h3 className="mt-2 font-display text-xl font-black">{name}</h3>
                  <p className="mt-3 text-sm text-[var(--muted)]">{scope}</p>
                  <p className="mt-4 font-bold text-emerald-300">{result}</p>
                  <Link href="#kontakt" className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-200">
                    Zobacz case study <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="section-wrap py-16">
      <Reveal>
        <div className="premium-border rounded-[32px] p-6 md:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-cyan-200">Dlaczego my?</p>
              <h2 className="font-display text-3xl font-black leading-tight md:text-5xl">Nie dostajesz tylko strony. Dostajesz cyfrowe narzędzie do zdobywania klientów.</h2>
              <p className="mt-5 leading-8 text-[var(--muted)]">
                Projektujemy każdy etap od pierwszego wrażenia po formularz kontaktowy, żeby użytkownik szybciej rozumiał wartość i częściej zostawiał zapytanie.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {whyUs.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/7 p-4 text-sm font-semibold">
                  <Check className="mb-3 text-emerald-300" size={18} /> {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function AIAutomation() {
  return (
    <section className="section-wrap py-16">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-cyan-200">AI / automatyzacje</p>
            <h2 className="font-display text-3xl font-black leading-tight md:text-5xl">Twoja strona może pracować za Ciebie 24/7</h2>
            <p className="mt-5 leading-8 text-[var(--muted)]">
              Wdrażamy inteligentne rozwiązania AI, które pomagają obsługiwać klientów, kwalifikować leady, odpowiadać na pytania i automatyzować powtarzalne procesy.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {aiFeatures.map((item) => (
                <span key={item} className="glass rounded-full px-4 py-3 text-sm font-bold">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="premium-border rounded-[32px] p-5">
            <div className="rounded-[24px] bg-black/35 p-5">
              <div className="mb-5 flex items-center gap-3">
                <span className="cta-gradient inline-flex h-11 w-11 items-center justify-center rounded-2xl text-white">
                  <Bot />
                </span>
                <div>
                  <p className="font-bold">Milo AI Assistant</p>
                  <p className="text-sm text-emerald-300">online · kwalifikuje leady</p>
                </div>
              </div>
              {[
                ["Klient", "Potrzebuję strony dla salonu beauty i rezerwacji online."],
                ["AI", "Jasne. Czy chcesz także automatyczne przypomnienia SMS i formularz kwalifikacyjny?"],
                ["Klient", "Tak, najlepiej połączone z kalendarzem."],
                ["AI", "Świetnie. Oznaczam lead jako premium i wysyłam brief do zespołu."]
              ].map(([speaker, text], index) => (
                <div key={`${speaker}-${text}`} className={`mb-3 flex ${index % 2 ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-6 ${index % 2 ? "bg-cyan-300/18" : "bg-white/10"}`}>
                    <strong>{speaker}: </strong>
                    {text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Testimonials() {
  const loop = useMemo(() => [...testimonials, ...testimonials], []);

  return (
    <section id="opinie" className="section-wrap overflow-hidden py-16">
      <SectionHeading eyebrow="Opinie" title="Klienci widzą różnicę w wyglądzie, procesie i liczbie zapytań" />
      <div className="relative">
        <motion.div className="flex gap-4" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
          {loop.map(([name, role, quote], index) => (
            <article key={`${name}-${index}`} className="glass min-w-[310px] rounded-[24px] p-6 md:min-w-[390px]">
              <div className="mb-4 flex text-amber-300">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <Star key={starIndex} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="leading-7 text-[var(--foreground)]">"{quote}"</p>
              <p className="mt-5 font-bold">{name}</p>
              <p className="text-sm text-[var(--muted)]">{role}</p>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FAQ() {
  return (
    <section id="faq" className="section-wrap py-16">
      <SectionHeading eyebrow="FAQ" title="Najczęstsze pytania przed rozpoczęciem projektu" />
      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map(([question, answer]) => (
          <details key={question} className="glass group rounded-2xl p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold">
              {question}
              <ChevronDown className="shrink-0 transition group-open:rotate-180" size={18} />
            </summary>
            <p className="mt-4 leading-7 text-[var(--muted)]">{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const { copy } = useSite();
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ContactForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectType: "",
      budget: ""
    }
  });

  function onSubmit(data: ContactForm) {
    console.info("MiloWeb contact lead", data);
    setSubmitted(true);
  }

  const fieldClass =
    "min-h-12 w-full rounded-2xl border border-white/10 bg-white/8 px-4 text-[var(--foreground)] outline-none transition placeholder:text-[var(--muted)] focus:border-cyan-300/70 focus:ring-2 focus:ring-cyan-300/20";

  return (
    <section id="kontakt" className="section-wrap py-20">
      <div className="premium-border rounded-[32px] p-6 md:p-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.24em] text-cyan-200">Kontakt</p>
            <h2 className="font-display text-3xl font-black leading-tight md:text-5xl">{copy.contactTitle}</h2>
            <p className="mt-5 leading-8 text-[var(--muted)]">{copy.contactLead}</p>
            <div className="mt-8 space-y-4 text-[var(--muted)]">
              <p>
                <strong className="text-[var(--foreground)]">E-mail:</strong> kontakt@milowebstudio.pl
              </p>
              <p>
                <strong className="text-[var(--foreground)]">Telefon:</strong> +48 000 000 000
              </p>
              <p>
                <strong className="text-[var(--foreground)]">Lokalizacja:</strong> Polska / współpraca zdalna
              </p>
            </div>
            <Button href="https://wa.me/48000000000" className="mt-8">
              <MessageCircle size={18} /> Napisz na WhatsApp
            </Button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Field error={errors.name?.message}>
                <input className={fieldClass} placeholder="Imię i nazwisko" {...register("name")} />
              </Field>
              <Field error={errors.company?.message}>
                <input className={fieldClass} placeholder="Nazwa firmy" {...register("company")} />
              </Field>
              <Field error={errors.email?.message}>
                <input className={fieldClass} type="email" placeholder="E-mail" {...register("email")} />
              </Field>
              <Field error={errors.phone?.message}>
                <input className={fieldClass} placeholder="Telefon" {...register("phone")} />
              </Field>
              <Field error={errors.projectType?.message}>
                <select className={fieldClass} {...register("projectType")}>
                  <option value="">Typ projektu</option>
                  <option>strona wizytówka</option>
                  <option>landing page</option>
                  <option>sklep internetowy</option>
                  <option>redesign strony</option>
                  <option>automatyzacja AI</option>
                  <option>nie wiem — potrzebuję konsultacji</option>
                </select>
              </Field>
              <Field error={errors.budget?.message}>
                <select className={fieldClass} {...register("budget")}>
                  <option value="">Budżet</option>
                  <option>do 2000 zł</option>
                  <option>2000-5000 zł</option>
                  <option>5000-10000 zł</option>
                  <option>10000+ zł</option>
                </select>
              </Field>
            </div>
            <Field error={errors.message?.message}>
              <textarea className={`${fieldClass} min-h-36 py-4`} placeholder="Wiadomość" {...register("message")} />
            </Field>
            <button type="submit" className="cta-gradient inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full px-6 font-bold text-white shadow-glow">
              <Send size={18} /> {copy.send}
            </button>
            {submitted ? <p className="rounded-2xl bg-emerald-500/14 p-4 text-sm font-semibold text-emerald-200">Zapytanie zostało przygotowane. W prawdziwym wdrożeniu podepnij tu API, CRM lub e-mail.</p> : null}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ children, error }: { children: React.ReactNode; error?: string }) {
  return (
    <label className="block">
      {children}
      {error ? <span className="mt-1 block text-xs font-semibold text-rose-300">{error}</span> : null}
    </label>
  );
}
