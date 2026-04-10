import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { EquipoContent } from "@/components/empresa/EquipoContent";

export const metadata: Metadata = {
  title: "El Equipo | Sintérgica AI — IA Privada para México y LATAM",
  description:
    "Conoce al equipo que está construyendo la infraestructura de IA de referencia para América Latina desde México.",
};

export default function EquipoPage() {
  return (
    <div className="min-h-screen bg-brand-surface dark:bg-brand-midnight">
      <Navbar />
      <main>
        <EquipoContent />
      </main>
      <Footer />
    </div>
  );
}
