import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteProvider } from "@/components/site-provider";

export const metadata: Metadata = {
  title: "Pracownia Stron — profesjonalne strony internetowe, landing page'e i automatyzacje AI",
  description:
    "Pracownia Stron tworzy nowoczesne strony internetowe, landing page'e, sklepy online i automatyzacje AI dla firm. Projekt premium, szybkie ładowanie, SEO i pełna responsywność.",
  keywords: [
    "Pracownia Stron",
    "strony internetowe",
    "tworzenie stron www",
    "landing page",
    "strony dla firm",
    "sklepy internetowe",
    "strony premium",
    "web design",
    "projektowanie stron",
    "automatyzacje AI",
    "chatbot AI",
    "SEO techniczne",
    "responsywne strony internetowe"
  ],
  authors: [{ name: "Pracownia Stron" }],
  openGraph: {
    title: "Pracownia Stron — strony www, landing page'e i AI",
    description: "Premium web design, szybkie wdrożenia, SEO, e-commerce i automatyzacje AI.",
    type: "website",
    locale: "pl_PL"
  }
};

export const viewport: Viewport = {
  themeColor: "#05070d",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body>
        <SiteProvider>{children}</SiteProvider>
      </body>
    </html>
  );
}
