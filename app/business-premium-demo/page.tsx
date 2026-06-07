import type { Metadata } from "next";
import { BusinessPremiumDemo } from "@/components/sections/BusinessPremiumDemo";

export const metadata: Metadata = {
  title: "Aurea Clinic — Demo pakietu Business Premium | MiloWeb Studio",
  description:
    "Przykładowa strona klienta wykonana w standardzie Business Premium: indywidualny UX/UI, podstrony, blog SEO, formularze, wielojęzyczność i CRM-ready.",
  keywords: [
    "Business Premium",
    "strona premium",
    "strona kliniki beauty",
    "UX UI premium",
    "blog SEO",
    "formularz CRM",
    "MiloWeb Studio"
  ],
  openGraph: {
    title: "Aurea Clinic — demo Business Premium",
    description: "Pełne demo strony klienta w pakiecie Business Premium od MiloWeb Studio.",
    type: "website"
  }
};

export default function BusinessPremiumDemoPage() {
  return <BusinessPremiumDemo />;
}
