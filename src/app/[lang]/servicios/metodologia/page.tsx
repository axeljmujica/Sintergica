import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { MetodologiaContent } from "@/components/servicios/MetodologiaContent";

export const metadata: Metadata = {
  title: "Metodología de 5 Fases para IA Responsable | Sintérgica AI — IA Privada para México y LATAM",
  description:
    "Proceso estructurado y replicable que asegura implementaciones exitosas con gobernanza desde el día uno.",
};

export default function MetodologiaPage() {
  return (
    <div className="min-h-screen bg-brand-surface dark:bg-brand-midnight">
      <Navbar />
      <main>
        <MetodologiaContent />
      </main>
      <Footer />
    </div>
  );
}
