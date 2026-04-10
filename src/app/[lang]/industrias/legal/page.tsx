import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { IndustryPageContent } from "@/components/industrias/IndustryPageContent";
import { INDUSTRIAS_DATA } from "@/lib/industrias";

export const metadata: Metadata = {
  title: "IA para el Sector Legal — Lattice Séeb Legal | Sintérgica AI",
  description:
    "IA privada para despachos y áreas legales en México. Revisión contractual, monitoreo DOF y alertas regulatorias con contexto de derecho civil mexicano.",
  openGraph: {
    title: "IA para el Sector Legal — Lattice Séeb Legal | Sintérgica AI",
    description:
      "IA privada para despachos y áreas legales en México. Revisión contractual, monitoreo DOF y alertas regulatorias con contexto de derecho civil mexicano.",
    url: "https://sintergica.ai/industrias/legal",
    siteName: "Sintérgica AI",
    locale: "es_MX",
    type: "website",
  },
  alternates: { canonical: "https://sintergica.ai/industrias/legal" },
  robots: { index: true, follow: true },
};

export default function IndustriaLegalPage() {
  return (
    <div className="min-h-screen bg-brand-surface dark:bg-brand-midnight">
      <Navbar />
      <main>
        <IndustryPageContent data={INDUSTRIAS_DATA.legal} />
      </main>
      <Footer />
    </div>
  );
}
