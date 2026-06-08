"use client";

import { MessageCircle, Phone, Send } from "lucide-react";
import { useSite } from "@/components/site-provider";

export function MobileCTA() {
  const { copy } = useSite();

  return (
    <div className="fixed bottom-3 left-3 right-3 z-40 grid grid-cols-3 gap-2 rounded-2xl border border-white/15 bg-[color-mix(in_srgb,var(--background)_76%,transparent)] p-2 backdrop-blur-2xl md:hidden">
      <a href="tel:+48000000000" className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-xl bg-white/8 text-xs font-bold">
        <Phone size={17} /> {copy.call}
      </a>
      <a href="https://wa.me/48000000000" className="flex min-h-12 flex-col items-center justify-center gap-1 rounded-xl bg-emerald-500/18 text-xs font-bold">
        <MessageCircle size={17} /> {copy.whatsapp}
      </a>
      <a href="/#kontakt" className="cta-gradient flex min-h-12 flex-col items-center justify-center gap-1 rounded-xl text-xs font-bold text-white">
        <Send size={17} /> {copy.valuation}
      </a>
    </div>
  );
}
