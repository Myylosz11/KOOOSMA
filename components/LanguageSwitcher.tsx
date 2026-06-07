"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { locales } from "@/lib/content";
import { useSite } from "@/components/site-provider";

export function LanguageSwitcher() {
  const { locale, setLocale } = useSite();
  const [open, setOpen] = useState(false);
  const active = locales.find((item) => item.code === locale) ?? locales[0];

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="glass inline-flex h-11 items-center gap-2 rounded-full px-3 text-sm font-semibold transition hover:bg-white/12"
        aria-label="Wybierz język"
        aria-expanded={open}
      >
        <span aria-hidden="true">{active.flag}</span>
        <span className="hidden sm:inline">{active.code.toUpperCase()}</span>
        <ChevronDown size={15} className={`transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open ? (
        <div className="premium-border absolute right-0 top-[3.25rem] z-50 w-52 rounded-2xl p-2 shadow-2xl">
          {locales.map((item) => (
            <button
              type="button"
              key={item.code}
              onClick={() => {
                setLocale(item.code);
                setOpen(false);
              }}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left text-sm transition hover:bg-white/10"
            >
              <span aria-hidden="true">{item.flag}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
