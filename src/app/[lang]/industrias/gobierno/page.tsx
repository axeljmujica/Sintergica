import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { IndustryPageContent } from "@/components/industrias/IndustryPageContent";
import { INDUSTRIAS_DATA } from "@/lib/industrias";

export const metadata: Metadata = {
  title: "IA para Gobierno — Lattice Séeb Gobierno | Sintérgica AI",
  description:
    "IA privada para instituciones públicas en México. Licitaciones, cumplimiento normativo y trazabilidad de procesos con soberanía digital total. Datos en infraestructura nacional.",
  openGraph: {
    title: "IA para Gobierno — Lattice Séeb Gobierno | Sintérgica AI",
    description:
      "IA privada para instituciones públicas en México. Licitaciones, cumplimiento normativo y trazabilidad de procesos con soberanía digital total.",
    url: "https://sintergica.ai/industrias/gobierno",
    siteName: "Sintérgica AI",
    locale: "es_MX",
    type: "website",
  },
  alternates: { canonical: "https://sintergica.ai/industrias/gobierno" },
  robots: { index: true, follow: true },
};

export default function IndustriaGobiernoPage() {
  return (
    <div className="min-h-screen bg-brand-surface dark:bg-brand-midnight">
      <Navbar />
      <main>
        <IndustryPageContent data={INDUSTRIAS_DATA.gobierno} />
      </main>
      <Footer />
    </div>
  );
}
