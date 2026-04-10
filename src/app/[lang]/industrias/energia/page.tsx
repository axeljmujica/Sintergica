import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { IndustryPageContent } from "@/components/industrias/IndustryPageContent";
import { INDUSTRIAS_DATA } from "@/lib/industrias";

export const metadata: Metadata = {
  title: "IA para el Sector Energético — Lattice Séeb Energía | Sintérgica AI",
  description:
    "IA privada para el sector energético mexicano. Compliance CRE, reportes regulatorios y monitoreo de concesiones con IA especializada en la Ley de la Industria Eléctrica.",
  openGraph: {
    title: "IA para el Sector Energético — Lattice Séeb Energía | Sintérgica AI",
    description:
      "IA privada para el sector energético mexicano. Compliance CRE, reportes regulatorios y monitoreo de concesiones.",
    url: "https://sintergica.ai/industrias/energia",
    siteName: "Sintérgica AI",
    locale: "es_MX",
    type: "website",
  },
  alternates: { canonical: "https://sintergica.ai/industrias/energia" },
  robots: { index: true, follow: true },
};

export default function IndustriaEnergiaPage() {
  return (
    <div className="min-h-screen bg-brand-surface dark:bg-brand-midnight">
      <Navbar />
      <main>
        <IndustryPageContent data={INDUSTRIAS_DATA.energia} />
      </main>
      <Footer />
    </div>
  );
}
