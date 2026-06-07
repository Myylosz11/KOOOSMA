"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { localeCopy, type Locale } from "@/lib/content";

type Theme = "dark" | "light";

type SiteContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  copy: (typeof localeCopy)[Locale];
  theme: Theme;
  toggleTheme: () => void;
};

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pl");
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const savedLocale = window.localStorage.getItem("miloweb-locale") as Locale | null;
    const savedTheme = window.localStorage.getItem("miloweb-theme") as Theme | null;
    if (savedLocale && localeCopy[savedLocale]) setLocaleState(savedLocale);
    if (savedTheme === "dark" || savedTheme === "light") setTheme(savedTheme);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem("miloweb-theme", theme);
  }, [theme]);

  const value = useMemo<SiteContextValue>(
    () => ({
      locale,
      setLocale: (nextLocale) => {
        setLocaleState(nextLocale);
        window.localStorage.setItem("miloweb-locale", nextLocale);
      },
      copy: localeCopy[locale],
      theme,
      toggleTheme: () => setTheme((current) => (current === "dark" ? "light" : "dark"))
    }),
    [locale, theme]
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const context = useContext(SiteContext);
  if (!context) {
    throw new Error("useSite must be used inside SiteProvider");
  }
  return context;
}
