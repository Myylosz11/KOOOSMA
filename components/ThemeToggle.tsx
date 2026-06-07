"use client";

import { Moon, Sun } from "lucide-react";
import { useSite } from "@/components/site-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useSite();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="glass inline-flex h-11 w-11 items-center justify-center rounded-full transition hover:bg-white/12"
      aria-label="Przełącz motyw"
    >
      {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
