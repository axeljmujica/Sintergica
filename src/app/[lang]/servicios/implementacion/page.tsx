import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ImplementacionContent } from "@/components/servicios/ImplementacionContent";

export const metadata: Metadata = {
  title: "Implementación Guante Blanco | Sintérgica AI — IA Privada para México y LATAM",
  description:
    "Integración técnica con tus sistemas y flujos reales en 3 semanas. Sprint estructurado con comunicación proactiva.",
};

export default function ImplementacionPage() {
  return (
    <div className="min-h-screen bg-brand-surface dark:bg-brand-midnight">
      <Navbar />
      <main>
        <ImplementacionContent />
      </main>
      <Footer />
    </div>
  );
}
