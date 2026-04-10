import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { IndustryPageContent } from "@/components/industrias/IndustryPageContent";
import { INDUSTRIAS_DATA } from "@/lib/industrias";

export const metadata: Metadata = {
  title: "IA para Ventas — Lattice + SalesHub | Sintérgica AI",
  description:
    "Automatiza tu fuerza de ventas con IA privada. Prospección inteligente, follow-up automático, scoring de leads y propuestas personalizadas con contexto de LATAM.",
  openGraph: {
    title: "IA para Ventas — Lattice + SalesHub | Sintérgica AI",
    description:
      "Automatiza tu fuerza de ventas con IA privada. Prospección inteligente, follow-up automático, scoring de leads y propuestas personalizadas con contexto de LATAM.",
    url: "https://sintergica.ai/industrias/ventas",
    siteName: "Sintérgica AI",
    locale: "es_MX",
    type: "website",
  },
  alternates: { canonical: "https://sintergica.ai/industrias/ventas" },
  robots: { index: true, follow: true },
};

export default function IndustriaVentasPage() {
  return (
    <div className="min-h-screen bg-brand-surface dark:bg-brand-midnight">
      <Navbar />
      <main>
        <IndustryPageContent data={INDUSTRIAS_DATA.ventas} />
      </main>
      <Footer />
    </div>
  );
}
