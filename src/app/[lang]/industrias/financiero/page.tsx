import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { IndustryPageContent } from "@/components/industrias/IndustryPageContent";
import { INDUSTRIAS_DATA } from "@/lib/industrias";

export const metadata: Metadata = {
  title: "IA para el Sector Financiero — Lattice Séeb Financiero | Sintérgica AI",
  description:
    "IA privada para instituciones financieras en México. PLD, reportes CNBV/UIF, KYC automatizado y detección de transacciones atípicas con normativa mexicana.",
  openGraph: {
    title: "IA para el Sector Financiero — Lattice Séeb Financiero | Sintérgica AI",
    description:
      "IA privada para el sector financiero en México. PLD, reportes CNBV/UIF, KYC automatizado y detección de transacciones atípicas.",
    url: "https://sintergica.ai/industrias/financiero",
    siteName: "Sintérgica AI",
    locale: "es_MX",
    type: "website",
  },
  alternates: { canonical: "https://sintergica.ai/industrias/financiero" },
  robots: { index: true, follow: true },
};

export default function IndustriaFinancieroPage() {
  return (
    <div className="min-h-screen bg-brand-surface dark:bg-brand-midnight">
      <Navbar />
      <main>
        <IndustryPageContent data={INDUSTRIAS_DATA.financiero} />
      </main>
      <Footer />
    </div>
  );
}
