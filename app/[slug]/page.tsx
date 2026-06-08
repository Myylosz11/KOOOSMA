import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MobileCTA } from "@/components/MobileCTA";
import { subpages } from "@/lib/content";

export function generateStaticParams() {
  return subpages.map((page) => ({ slug: page.slug }));
}

export const dynamicParams = false;

export default async function Subpage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const page = subpages.find((item) => item.slug === slug);

  if (!page) {
    notFound();
  }

  const Icon = page.icon;

  return (
    <main className="page-shell mobile-cta-safe min-h-screen">
      <div className="orb-field" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <Header />
      <section className="section-wrap pt-36 md:pt-44 pb-20">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-[var(--muted)] transition hover:text-[var(--foreground)]">
          <ArrowLeft size={16} /> Powrót do strony głównej
        </Link>
        <div className="premium-border mt-8 rounded-[28px] p-6 md:p-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/12 text-cyan-200">
                <Icon size={24} />
              </div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200">Pracownia Stron</p>
              <h1 className="font-display text-4xl font-black leading-tight md:text-6xl">{page.title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted)]">{page.lead}</p>
            </div>
            <Link href="/#kontakt" className="cta-gradient inline-flex min-h-12 items-center justify-center rounded-full px-6 font-bold text-white shadow-glow">
              Zapytaj o projekt
            </Link>
          </div>
        </div>
      </section>
      <section className="section-wrap pb-24">
        <div className="grid gap-4 md:grid-cols-2">
          {page.bullets.map((item) => (
            <div key={item} className="glass card-hover rounded-2xl p-5">
              <CheckCircle2 className="mb-4 text-emerald-300" size={22} />
              <p className="text-lg font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
      <MobileCTA />
    </main>
  );
}
