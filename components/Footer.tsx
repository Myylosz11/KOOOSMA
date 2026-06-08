import Link from "next/link";
import { Camera, CircleUserRound, Linkedin, Music2 } from "lucide-react";
import { services, subpages } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-12">
      <div className="section-wrap grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl font-black">Pracownia Stron</p>
          <p className="mt-4 max-w-sm leading-7 text-[var(--muted)]">
            Projektujemy strony www, landing page'e, sklepy internetowe i automatyzacje AI dla firm, które chcą wyglądać profesjonalnie i zdobywać więcej zapytań.
          </p>
        </div>
        <div>
          <p className="mb-4 font-bold">Szybkie linki</p>
          <div className="flex flex-col gap-2 text-sm text-[var(--muted)]">
            {subpages.slice(0, 6).map((item) => (
              <Link key={item.slug} href={`/${item.slug}`} className="hover:text-[var(--foreground)]">
                {item.title}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 font-bold">Usługi</p>
          <div className="flex flex-col gap-2 text-sm text-[var(--muted)]">
            {services.slice(0, 6).map((item) => (
              <span key={item.title}>{item.title}</span>
            ))}
          </div>
        </div>
        <div>
          <p className="mb-4 font-bold">Kontakt</p>
          <div className="flex flex-col gap-2 text-sm text-[var(--muted)]">
            <span>kontakt@pracowniastron.pl</span>
            <span>+48 000 000 000</span>
            <span>Polska / współpraca zdalna</span>
            <div className="mt-3 flex gap-2 text-[var(--foreground)]">
              <Camera size={18} />
              <CircleUserRound size={18} />
              <Linkedin size={18} />
              <Music2 size={18} />
            </div>
          </div>
        </div>
      </div>
      <div className="section-wrap mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-[var(--muted)] md:flex-row md:items-center md:justify-between">
        <p>© 2026 Pracownia Stron. Wszystkie prawa zastrzeżone.</p>
        <div className="flex gap-4">
          <Link href="/polityka-prywatnosci">Polityka prywatności</Link>
          <Link href="/regulamin">Regulamin</Link>
        </div>
      </div>
    </footer>
  );
}
