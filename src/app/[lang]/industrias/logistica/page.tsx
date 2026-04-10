import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { IndustryPageContent } from "@/components/industrias/IndustryPageContent";
import { INDUSTRIAS_DATA } from "@/lib/industrias";

export const metadata: Metadata = {
  title: "IA para Logística y Comercio Exterior — Lattice Séeb | Sintérgica AI",
  description:
    "IA privada para logística y comercio exterior en México. Validación documental, clasificación arancelaria y trazabilidad de cadena con normativa SAT y Ley Aduanera.",
  openGraph: {
    title: "IA para Logística y Comercio Exterior — Lattice Séeb | Sintérgica AI",
    description:
      "IA privada para logística y comercio exterior en México. Validación documental, clasificación arancelaria y trazabilidad con normativa SAT.",
    url: "https://sintergica.ai/industrias/logistica",
    siteName: "Sintérgica AI",
    locale: "es_MX",
    type: "website",
  },
  alternates: { canonical: "https://sintergica.ai/industrias/logistica" },
  robots: { index: true, follow: true },
};

export default function IndustriaLogisticaPage() {
  return (
    <div className="min-h-screen bg-brand-surface dark:bg-brand-midnight">
      <Navbar />
      <main>
        <IndustryPageContent data={INDUSTRIAS_DATA.logistica} />
      </main>
      <Footer />
    </div>
  );
}
