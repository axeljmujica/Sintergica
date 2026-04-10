import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { IndustryPageContent } from "@/components/industrias/IndustryPageContent";
import { INDUSTRIAS_DATA } from "@/lib/industrias";

export const metadata: Metadata = {
  title: "IA para el Sector Salud — Lattice Séeb Salud | Sintérgica AI",
  description:
    "IA privada para hospitales y clínicas en México. Documentación clínica, compliance COFEPRIS y protocolos institucionales con contexto de normativa NOM mexicana.",
  openGraph: {
    title: "IA para el Sector Salud — Lattice Séeb Salud | Sintérgica AI",
    description:
      "IA privada para el sector salud en México. Documentación clínica, compliance COFEPRIS y protocolos institucionales con normativa NOM.",
    url: "https://sintergica.ai/industrias/salud",
    siteName: "Sintérgica AI",
    locale: "es_MX",
    type: "website",
  },
  alternates: { canonical: "https://sintergica.ai/industrias/salud" },
  robots: { index: true, follow: true },
};

export default function IndustriaSaludPage() {
  return (
    <div className="min-h-screen bg-brand-surface dark:bg-brand-midnight">
      <Navbar />
      <main>
        <IndustryPageContent data={INDUSTRIAS_DATA.salud} />
      </main>
      <Footer />
    </div>
  );
}
