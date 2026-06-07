"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight,
  CalendarDays,
  Check,
  ChevronDown,
  Menu,
  MessageCircle,
  Moon,
  Send,
  Sparkles,
  X
} from "lucide-react";
import {
  aureaBlog,
  aureaContact,
  aureaCopy,
  aureaExperts,
  aureaFaq,
  aureaLocales,
  aureaPricing,
  aureaProcess,
  aureaQuality,
  aureaStats,
  aureaSubpages,
  aureaTestimonials,
  aureaTreatments,
  premiumFeatures,
  type AureaLocale
} from "@/lib/aurea-content";

const contactSchema = z.object({
  name: z.string().min(2, "Wpisz imię i nazwisko"),
  phone: z.string().min(6, "Wpisz telefon"),
  email: z.string().email("Wpisz poprawny e-mail"),
  service: z.string().min(1, "Wybierz usługę"),
  message: z.string().min(10, "Napisz kilka zdań")
});

type ContactData = z.infer<typeof contactSchema>;

const links = [
  ["Start", "#start"],
  ["Zabiegi", "#zabiegi"],
  ["Technologie", "#technologie"],
  ["Zespół", "#zespol"],
  ["Cennik", "#cennik"],
  ["Blog", "#blog"],
  ["Kontakt", "#kontakt"]
];

export function BusinessPremiumDemo() {
  const [locale, setLocale] = useState<AureaLocale>("pl");
  const [menuOpen, setMenuOpen] = useState(false);
  const copy = aureaCopy[locale];

  return (
    <main className="min-h-screen bg-[#f7f2ea] text-[#211d18]">
      <AureaHeader locale={locale} setLocale={setLocale} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <AureaHero copy={copy} />
      <AureaTrust />
      <AureaTreatments />
      <PremiumFeatureGrid />
      <AureaProcess />
      <AureaPricing />
      <AureaTeam />
      <AureaSubpages />
      <AureaBlog />
      <AureaTestimonials />
      <AureaFaq />
      <AureaContact />
      <AureaFooter />
      <AureaMobileCta />
    </main>
  );
}

function AureaHeader({
  locale,
  setLocale,
  menuOpen,
  setMenuOpen
}: {
  locale: AureaLocale;
  setLocale: (locale: AureaLocale) => void;
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#211d18]/10 bg-[#f7f2ea]/82 backdrop-blur-2xl">
      <nav className="mx-auto flex min-h-20 w-[min(1180px,calc(100%-32px))] items-center justify-between gap-4">
        <Link href="/business-premium-demo" className="flex items-center gap-3 font-display text-lg font-black">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#211d18] text-[#f7f2ea]">
            <Sparkles size={19} />
          </span>
          <span>Aurea Clinic</span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="rounded-full px-3 py-2 text-sm font-bold text-[#6d6257] transition hover:bg-[#211d18]/7 hover:text-[#211d18]">
              {label}
            </a>
          ))}
        </div>
        <div className="hidden items-center gap-2 lg:flex">
          <div className="flex rounded-full border border-[#211d18]/10 bg-white/60 p-1">
            {aureaLocales.map((item) => (
              <button
                type="button"
                key={item.code}
                onClick={() => setLocale(item.code)}
                className={`rounded-full px-3 py-2 text-xs font-black transition ${locale === item.code ? "bg-[#211d18] text-white" : "text-[#6d6257]"}`}
              >
                {item.flag}
              </button>
            ))}
          </div>
          <a href="#kontakt" className="rounded-full bg-[#211d18] px-5 py-3 text-sm font-black text-white shadow-[0_18px_45px_rgba(33,29,24,0.18)]">
            Rezerwacja
          </a>
        </div>
        <button type="button" onClick={() => setMenuOpen(true)} className="flex h-11 w-11 items-center justify-center rounded-full border border-[#211d18]/10 lg:hidden" aria-label="Otwórz menu">
          <Menu />
        </button>
      </nav>
      {menuOpen ? (
        <div className="fixed inset-0 z-50 min-h-screen bg-[#f7f2ea] p-5 lg:hidden">
          <div className="flex items-center justify-between">
            <p className="font-display text-xl font-black">Aurea Clinic</p>
            <button type="button" onClick={() => setMenuOpen(false)} className="flex h-11 w-11 items-center justify-center rounded-full border border-[#211d18]/10" aria-label="Zamknij menu">
              <X />
            </button>
          </div>
          <div className="mt-8 grid gap-3">
            {links.map(([label, href]) => (
              <a key={label} href={href} onClick={() => setMenuOpen(false)} className="rounded-3xl border border-[#211d18]/10 bg-white/65 px-5 py-4 text-xl font-black">
                {label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}

function AureaHero({ copy }: { copy: (typeof aureaCopy)[AureaLocale] }) {
  return (
    <section id="start" className="relative overflow-hidden pt-24">
      <div className="absolute inset-x-0 top-0 h-[36rem] bg-[radial-gradient(circle_at_15%_20%,rgba(202,169,103,0.34),transparent_34%),radial-gradient(circle_at_80%_0%,rgba(65,96,77,0.22),transparent_32%)]" />
      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] w-[min(1180px,calc(100%-32px))] items-center gap-10 py-12 lg:grid-cols-[0.9fr_1.1fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <p className="mb-5 inline-flex rounded-full border border-[#211d18]/10 bg-white/70 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#836a35]">
            {copy.heroEyebrow}
          </p>
          <h1 className="font-display text-5xl font-black leading-[0.98] tracking-normal md:text-7xl">{copy.heroTitle}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6d6257]">{copy.heroLead}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#kontakt" className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full bg-[#211d18] px-6 font-black text-white shadow-[0_18px_45px_rgba(33,29,24,0.18)]">
              {copy.book} <CalendarDays size={18} />
            </a>
            <a href="#zabiegi" className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full border border-[#211d18]/12 bg-white/60 px-6 font-black text-[#211d18]">
              {copy.explore} <ArrowRight size={18} />
            </a>
          </div>
          <div className="mt-8 grid max-w-xl grid-cols-2 gap-3">
            {aureaStats.map(([value, label]) => (
              <div key={label} className="rounded-3xl border border-[#211d18]/10 bg-white/70 p-4">
                <p className="font-display text-2xl font-black">{value}</p>
                <p className="mt-1 text-sm text-[#6d6257]">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.75, delay: 0.08 }} className="relative">
          <div className="overflow-hidden rounded-[2.5rem] border border-white/70 bg-white p-3 shadow-[0_30px_80px_rgba(55,43,28,0.24)]">
            <Image
              src="/assets/aurea-clinic-hero.png"
              alt="Premium recepcja Aurea Clinic"
              width={1792}
              height={1024}
              priority
              className="aspect-[4/3] w-full rounded-[2rem] object-cover lg:aspect-[1.05/1]"
            />
          </div>
          <div className="absolute -bottom-5 left-5 right-5 rounded-3xl border border-white/70 bg-white/82 p-4 shadow-2xl backdrop-blur-xl sm:left-auto sm:right-8 sm:w-72">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#836a35]">{copy.proof}</p>
            <p className="mt-2 text-sm leading-6 text-[#6d6257]">5-10 podstron, blog, formularz, wielojęzyczność, SEO, CRM-ready, dopracowany mobile UX.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AureaTrust() {
  return (
    <section className="mx-auto w-[min(1180px,calc(100%-32px))] py-10">
      <div className="grid gap-3 md:grid-cols-4">
        {["SEO i metadata", "Mobile-first", "Blog pod widoczność", "Formularze CRM-ready"].map((item, index) => {
          const Icon = aureaQuality[index];
          return (
            <div key={item} className="rounded-3xl border border-[#211d18]/10 bg-white/65 p-5">
              <Icon className="mb-4 text-[#9b7938]" size={22} />
              <p className="font-black">{item}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function AureaTreatments() {
  return (
    <section id="zabiegi" className="mx-auto w-[min(1180px,calc(100%-32px))] py-16">
      <AureaHeading eyebrow="Oferta klienta" title="Usługi opisane językiem korzyści, nie technicznym chaosem" lead="Business Premium porządkuje ofertę tak, żeby klient szybko zrozumiał, co wybrać i dlaczego warto umówić konsultację." />
      <div className="grid gap-4 md:grid-cols-2">
        {aureaTreatments.map((item) => {
          const Icon = item.icon;
          return (
            <motion.article key={item.title} whileHover={{ y: -6 }} className="rounded-[2rem] border border-[#211d18]/10 bg-white/72 p-6 shadow-[0_18px_55px_rgba(55,43,28,0.08)]">
              <div className="mb-5 flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-2xl bg-[#eadcc2] text-[#836a35]">
                <Icon size={24} />
              </div>
              <h3 className="font-display text-2xl font-black">{item.title}</h3>
              <p className="mt-3 text-[#6d6257]">{item.description}</p>
              <p className="mt-4 rounded-2xl bg-[#f2eadf] p-4 text-sm leading-6 text-[#6d6257]">{item.detail}</p>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

function PremiumFeatureGrid() {
  return (
    <section id="technologie" className="bg-[#211d18] py-[4.5rem] text-white">
      <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
        <AureaHeading eyebrow="Funkcje Business Premium" title="To nie jest tylko layout. To gotowy system strony premium." lead="Ten pakiet zawiera elementy, które realnie pomagają firmie wyglądać dojrzale, mierzyć ruch i wygodnie obsługiwać zapytania." invert />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {premiumFeatures.map((item) => {
            const Icon = item.icon;
            return (
              <article key={item.title} className="rounded-[2rem] border border-white/12 bg-white/7 p-6">
                <Icon className="mb-5 text-[#d6b56d]" size={26} />
                <h3 className="font-display text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/68">{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AureaProcess() {
  return (
    <section className="mx-auto w-[min(1180px,calc(100%-32px))] py-16">
      <AureaHeading eyebrow="Proces klienta" title="Strona prowadzi użytkownika od ciekawości do rezerwacji" />
      <div className="grid gap-4 lg:grid-cols-4">
        {aureaProcess.map(([number, title, text]) => (
          <article key={number} className="rounded-[2rem] border border-[#211d18]/10 bg-white/68 p-6">
            <p className="font-display text-4xl font-black text-[#c4a15d]">{number}</p>
            <h3 className="mt-6 font-display text-xl font-black">{title}</h3>
            <p className="mt-3 text-sm leading-6 text-[#6d6257]">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function AureaPricing() {
  return (
    <section id="cennik" className="mx-auto w-[min(1180px,calc(100%-32px))] py-16">
      <AureaHeading eyebrow="Cennik" title="Pakiety jasne dla klienta i wygodne do aktualizacji" />
      <div className="grid gap-4 lg:grid-cols-3">
        {aureaPricing.map((item) => (
          <article key={item.name} className={`rounded-[2rem] p-6 ${item.highlighted ? "bg-[#211d18] text-white shadow-[0_24px_70px_rgba(33,29,24,0.24)]" : "border border-[#211d18]/10 bg-white/72"}`}>
            {item.highlighted ? <span className="rounded-full bg-[#d6b56d]/18 px-3 py-1 text-xs font-black text-[#f3dca2]">Najczęściej wybierane</span> : null}
            <h3 className="mt-5 font-display text-3xl font-black">{item.name}</h3>
            <p className={`mt-3 ${item.highlighted ? "text-white/68" : "text-[#6d6257]"}`}>{item.description}</p>
            <p className="mt-6 font-display text-4xl font-black">{item.price}</p>
            <ul className="mt-6 space-y-3">
              {item.features.map((feature) => (
                <li key={feature} className={`flex gap-2 text-sm ${item.highlighted ? "text-white/76" : "text-[#6d6257]"}`}>
                  <Check className="mt-0.5 shrink-0 text-[#c4a15d]" size={16} /> {feature}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

function AureaTeam() {
  return (
    <section id="zespol" className="mx-auto w-[min(1180px,calc(100%-32px))] py-16">
      <AureaHeading eyebrow="Zespół" title="Eksperckość pokazana spokojnie, bez przesady" />
      <div className="grid gap-4 md:grid-cols-3">
        {aureaExperts.map(([name, role, bio], index) => (
          <article key={name} className="rounded-[2rem] border border-[#211d18]/10 bg-white/72 p-6">
            <div className="mb-5 flex aspect-square items-center justify-center rounded-[1.5rem] bg-[linear-gradient(135deg,#eadcc2,#ffffff)]">
              <span className="font-display text-5xl font-black text-[#836a35]">{index + 1}</span>
            </div>
            <h3 className="font-display text-2xl font-black">{name}</h3>
            <p className="mt-1 font-bold text-[#836a35]">{role}</p>
            <p className="mt-4 text-sm leading-6 text-[#6d6257]">{bio}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function AureaSubpages() {
  return (
    <section className="bg-[#eee4d6] py-16">
      <div className="mx-auto w-[min(1180px,calc(100%-32px))]">
        <AureaHeading eyebrow="Podstrony pakietu" title="Business Premium to kompletna struktura, nie jedna długa plansza" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {aureaSubpages.map((page) => {
            const Icon = page.icon;
            return (
              <Link key={page.slug} href={`/business-premium-demo/${page.slug}`} className="group rounded-[2rem] border border-[#211d18]/10 bg-white/68 p-6 transition hover:-translate-y-1 hover:bg-white">
                <Icon className="mb-5 text-[#9b7938]" size={25} />
                <h3 className="font-display text-xl font-black">{page.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#6d6257]">{page.lead}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#836a35]">
                  Otwórz podstronę <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function AureaBlog() {
  return (
    <section id="blog" className="mx-auto w-[min(1180px,calc(100%-32px))] py-16">
      <AureaHeading eyebrow="Blog SEO" title="Treści, które edukują klienta i wspierają widoczność" />
      <div className="grid gap-4 md:grid-cols-3">
        {aureaBlog.map(([title, text]) => (
          <article key={title} className="rounded-[2rem] border border-[#211d18]/10 bg-white/72 p-6">
            <p className="mb-10 text-xs font-black uppercase tracking-[0.2em] text-[#9b7938]">Aurea Journal</p>
            <h3 className="font-display text-xl font-black">{title}</h3>
            <p className="mt-4 text-sm leading-6 text-[#6d6257]">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function AureaTestimonials() {
  return (
    <section className="mx-auto w-[min(1180px,calc(100%-32px))] py-16">
      <AureaHeading eyebrow="Opinie" title="Przykładowy moduł zaufania pod markę premium" />
      <div className="grid gap-4 md:grid-cols-3">
        {aureaTestimonials.map(([name, role, quote]) => (
          <article key={name} className="rounded-[2rem] border border-[#211d18]/10 bg-white/72 p-6">
            <p className="text-[#c4a15d]">★★★★★</p>
            <p className="mt-5 leading-7 text-[#4e463e]">"{quote}"</p>
            <p className="mt-6 font-black">{name}</p>
            <p className="text-sm text-[#6d6257]">{role}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function AureaFaq() {
  return (
    <section className="mx-auto w-[min(900px,calc(100%-32px))] py-16">
      <AureaHeading eyebrow="FAQ demo" title="Pytania, które klient zada przed decyzją" />
      <div className="space-y-3">
        {aureaFaq.map(([question, answer]) => (
          <details key={question} className="group rounded-3xl border border-[#211d18]/10 bg-white/72 p-5">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-black">
              {question}
              <ChevronDown className="shrink-0 transition group-open:rotate-180" size={18} />
            </summary>
            <p className="mt-4 leading-7 text-[#6d6257]">{answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function AureaContact() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ContactData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { service: "" }
  });

  function onSubmit(data: ContactData) {
    console.info("Aurea premium lead", data);
    setSent(true);
  }

  const inputClass = "min-h-[3.25rem] w-full rounded-2xl border border-[#211d18]/10 bg-white/78 px-4 outline-none transition focus:border-[#9b7938] focus:ring-4 focus:ring-[#c4a15d]/18";

  return (
    <section id="kontakt" className="bg-[#211d18] py-[4.5rem] text-white">
      <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] gap-10 lg:grid-cols-[0.88fr_1.12fr]">
        <div>
          <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#d6b56d]">Kontakt</p>
          <h2 className="font-display text-4xl font-black leading-tight md:text-6xl">Umów konsultację i sprawdź, jak działa premium ścieżka klienta.</h2>
          <p className="mt-5 leading-8 text-white/68">
            Formularz jest przygotowany pod CRM, webhook, Google Sheets albo mail automatyczny. W demo pokazuje walidację i strukturę danych.
          </p>
          <div className="mt-8 grid gap-3">
            {aureaContact.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/7 p-4">
                  <Icon className="text-[#d6b56d]" size={19} />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="rounded-[2rem] bg-[#f7f2ea] p-5 text-[#211d18] md:p-7">
          <div className="grid gap-4 md:grid-cols-2">
            <AureaField error={errors.name?.message}>
              <input className={inputClass} placeholder="Imię i nazwisko" {...register("name")} />
            </AureaField>
            <AureaField error={errors.phone?.message}>
              <input className={inputClass} placeholder="Telefon" {...register("phone")} />
            </AureaField>
            <AureaField error={errors.email?.message}>
              <input className={inputClass} type="email" placeholder="E-mail" {...register("email")} />
            </AureaField>
            <AureaField error={errors.service?.message}>
              <select className={inputClass} {...register("service")}>
                <option value="">Wybierz usługę</option>
                <option>Premium Consultation</option>
                <option>Skin Quality Program</option>
                <option>Facial Rituals</option>
                <option>Longevity Care</option>
              </select>
            </AureaField>
          </div>
          <AureaField error={errors.message?.message} className="mt-4">
            <textarea className={`${inputClass} min-h-36 py-4`} placeholder="Napisz, czego potrzebujesz" {...register("message")} />
          </AureaField>
          <button type="submit" className="mt-5 inline-flex min-h-[3.25rem] w-full items-center justify-center gap-2 rounded-full bg-[#211d18] px-6 font-black text-white">
            Wyślij zapytanie <Send size={18} />
          </button>
          {sent ? <p className="mt-4 rounded-2xl bg-[#e8dcc9] p-4 text-sm font-bold text-[#5a4a32]">Zapytanie zostało przygotowane. W produkcji podpinamy tu CRM lub automatyzację.</p> : null}
        </form>
      </div>
    </section>
  );
}

function AureaFooter() {
  return (
    <footer className="bg-[#15120f] py-10 text-white">
      <div className="mx-auto flex w-[min(1180px,calc(100%-32px))] flex-col gap-4 text-sm text-white/62 md:flex-row md:items-center md:justify-between">
        <p className="font-display text-xl font-black text-white">Aurea Clinic</p>
        <p>Demo Business Premium by MiloWeb Studio. © 2026</p>
        <Link href="/" className="font-bold text-[#d6b56d]">Powrót do MiloWeb Studio</Link>
      </div>
    </footer>
  );
}

function AureaMobileCta() {
  return (
    <div className="fixed bottom-3 left-3 right-3 z-40 grid grid-cols-2 gap-2 rounded-2xl border border-white/40 bg-[#f7f2ea]/88 p-2 shadow-2xl backdrop-blur-xl md:hidden">
      <a href="tel:+48000111222" className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white text-sm font-black text-[#211d18]">
        <MessageCircle size={17} /> Telefon
      </a>
      <a href="#kontakt" className="flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#211d18] text-sm font-black text-white">
        <CalendarDays size={17} /> Rezerwacja
      </a>
    </div>
  );
}

function AureaHeading({ eyebrow, title, lead, invert = false }: { eyebrow: string; title: string; lead?: string; invert?: boolean }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className={`mb-4 text-xs font-black uppercase tracking-[0.22em] ${invert ? "text-[#d6b56d]" : "text-[#9b7938]"}`}>{eyebrow}</p>
      <h2 className={`font-display text-3xl font-black leading-tight md:text-5xl ${invert ? "text-white" : "text-[#211d18]"}`}>{title}</h2>
      {lead ? <p className={`mx-auto mt-5 max-w-2xl leading-8 ${invert ? "text-white/62" : "text-[#6d6257]"}`}>{lead}</p> : null}
    </div>
  );
}

function AureaField({ children, error, className = "" }: { children: React.ReactNode; error?: string; className?: string }) {
  return (
    <label className={`block ${className}`}>
      {children}
      {error ? <span className="mt-1 block text-xs font-bold text-red-700">{error}</span> : null}
    </label>
  );
}
