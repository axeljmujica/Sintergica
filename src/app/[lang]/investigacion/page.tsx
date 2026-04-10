import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { InvestigacionContent } from "@/components/investigacion/InvestigacionContent";

export const metadata: Metadata = {
  title: "Investigación Aplicada en IA para LATAM | Sintérgica AI — IA Privada para México y LATAM",
  description:
    "Desarrollo, evaluación, especialización y mejora continua de modelos de IA. I+D con contexto latinoamericano para resolver problemas reales en entornos regulados.",
};

export default function InvestigacionPage() {
  return (
    <div className="min-h-screen bg-brand-surface dark:bg-brand-midnight">
      <Navbar />
      <main>
        <InvestigacionContent />
      </main>
      <Footer />
    </div>
  );
}
