import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Sparkles } from "lucide-react";
import { aureaSubpages } from "@/lib/aurea-content";

export function generateStaticParams() {
  return aureaSubpages.map((page) => ({ section: page.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ section: string }> }): Promise<Metadata> {
  const { section } = await params;
  const page = aureaSubpages.find((item) => item.slug === section);

  if (!page) {
    return {
      title: "Aurea Clinic — Business Premium"
    };
  }

  return {
    title: `${page.title} — Aurea Clinic Business Premium`,
    description: page.lead
  };
}

export default async function AureaSubpage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  const page = aureaSubpages.find((item) => item.slug === section);

  if (!page) {
    notFound();
  }

  const Icon = page.icon;

  return (
    <main className="min-h-screen bg-[#f7f2ea] text-[#211d18]">
      <section className="mx-auto w-[min(1050px,calc(100%-32px))] py-10 md:py-14">
        <Link href="/business-premium-demo" className="inline-flex items-center gap-2 rounded-full border border-[#211d18]/10 bg-white/70 px-4 py-2 text-sm font-black text-[#6d6257] transition hover:text-[#211d18]">
          <ArrowLeft size={16} /> Powrót do demo
        </Link>
        <div className="mt-8 overflow-hidden rounded-[2.5rem] border border-[#211d18]/10 bg-white/78 shadow-[0_30px_90px_rgba(55,43,28,0.1)]">
          <div className="bg-[#211d18] p-8 text-white md:p-12">
            <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[#d6b56d]">
              <Icon size={28} />
            </div>
            <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#d6b56d]">Business Premium / Aurea Clinic</p>
            <h1 className="font-display text-4xl font-black leading-tight md:text-6xl">{page.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/68">{page.lead}</p>
          </div>
          <div className="grid gap-4 p-5 md:grid-cols-2 md:p-8">
            {page.bullets.map((item) => (
              <div key={item} className="rounded-3xl border border-[#211d18]/10 bg-[#f7f2ea] p-5">
                <CheckCircle2 className="mb-4 text-[#9b7938]" size={22} />
                <p className="font-black">{item}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 rounded-[2rem] border border-[#211d18]/10 bg-white/65 p-6">
          <Sparkles className="mb-4 text-[#9b7938]" />
          <h2 className="font-display text-2xl font-black">Co ta podstrona pokazuje w pakiecie?</h2>
          <p className="mt-3 leading-7 text-[#6d6257]">
            To przykładowy widok, który można rozwinąć w pełną podstronę SEO z własnymi sekcjami, zdjęciami, formularzem, FAQ, metadanymi i treścią dopasowaną do branży klienta.
          </p>
        </div>
      </section>
    </main>
  );
}
