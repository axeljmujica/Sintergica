import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CasosDeUsoContent } from "@/components/casos-de-uso/CasosDeUsoContent";

export const metadata: Metadata = {
  title: "Casos de Uso Reales | Sintérgica AI — IA Privada para México y LATAM",
  description:
    "Casos de uso reales de IA privada con Lattice, SalesHub y Nahui en energía, salud, logística, e-commerce y gobierno. Resultados documentados.",
  openGraph: {
    title: "Casos de Uso Reales | Sintérgica AI",
    description:
      "Cinco implementaciones documentadas de IA privada en sectores reales de México: energía solar, clínicas, aduanas, e-commerce y gobierno municipal.",
    url: "https://sintergica.ai/casos-de-uso",
    siteName: "Sintérgica AI",
    images: [{ url: "/og/casos-de-uso.png", width: 1200, height: 630 }],
    locale: "es_MX",
    type: "website",
  },
  alternates: { canonical: "https://sintergica.ai/casos-de-uso" },
  robots: { index: true, follow: true },
};

export default function CasosDeExitoPage() {
  return (
    <div className="min-h-screen bg-brand-surface dark:bg-brand-midnight">
      <Navbar />
      <main>
        <CasosDeUsoContent lang="es" />
      </main>
      <Footer />
    </div>
  );
}
