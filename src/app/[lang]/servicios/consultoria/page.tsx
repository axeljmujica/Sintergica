import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ConsultoriaContent } from "@/components/servicios/ConsultoriaContent";

export const metadata: Metadata = {
  title: "Consultoría en IA y Transformación Digital | Sintérgica AI — IA Privada para México y LATAM",
  description:
    "Diagnóstico, roadmap de IA, diseño de gobernanza e identificación de casos de uso con ROI estimado. Dirigido a C-level y directores de tecnología.",
};

export default function ConsultoriaPage() {
  return (
    <div className="min-h-screen bg-brand-surface dark:bg-brand-midnight">
      <Navbar />
      <main>
        <ConsultoriaContent />
      </main>
      <Footer />
    </div>
  );
}
