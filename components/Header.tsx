"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { useSite } from "@/components/site-provider";

const anchors = ["#start", "#uslugi", "#realizacje", "#proces", "#cennik", "#opinie", "#faq", "#kontakt"];

export function Header() {
  const [open, setOpen] = useState(false);
  const { copy } = useSite();

  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/10 bg-[color-mix(in_srgb,var(--background)_72%,transparent)] backdrop-blur-2xl">
      <nav className="section-wrap flex min-h-20 items-center justify-between gap-4">
        <Link href="/#start" className="flex items-center gap-3 font-display text-lg font-black">
          <span className="cta-gradient inline-flex h-10 w-10 items-center justify-center rounded-2xl text-white">
            <Sparkles size={20} />
          </span>
          <span>MiloWeb Studio</span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {copy.nav.map((item, index) => (
            <Link key={item} href={anchors[index]} className="rounded-full px-3 py-2 text-sm font-semibold text-[var(--muted)] transition hover:bg-white/10 hover:text-[var(--foreground)]">
              {item}
            </Link>
          ))}
        </div>
        <div className="hidden items-center gap-2 lg:flex">
          <LanguageSwitcher />
          <ThemeToggle />
          <Button href="#kontakt">{copy.consult}</Button>
        </div>
        <button
          className="glass inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden"
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Otwórz menu"
        >
          <Menu />
        </button>
      </nav>
      {open ? (
        <div className="fixed inset-0 z-50 min-h-screen bg-[var(--background)] px-5 py-6 lg:hidden">
          <div className="flex items-center justify-between">
            <Link href="/" className="font-display text-xl font-black">
              MiloWeb Studio
            </Link>
            <button className="glass inline-flex h-11 w-11 items-center justify-center rounded-full" type="button" onClick={() => setOpen(false)} aria-label="Zamknij menu">
              <X />
            </button>
          </div>
          <div className="mt-10 flex flex-col gap-3">
            {copy.nav.map((item, index) => (
              <Link key={item} href={anchors[index]} onClick={() => setOpen(false)} className="premium-border rounded-2xl px-5 py-4 text-xl font-bold">
                {item}
              </Link>
            ))}
          </div>
          <div className="mt-8 flex items-center gap-3">
            <LanguageSwitcher />
            <ThemeToggle />
          </div>
          <Button href="#kontakt" className="mt-8 w-full" onClick={() => setOpen(false)}>
            {copy.consult}
          </Button>
        </div>
      ) : null}
    </header>
  );
}
