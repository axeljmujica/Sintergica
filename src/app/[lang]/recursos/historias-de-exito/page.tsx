import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { HistoriasContent } from "@/components/recursos/HistoriasContent";

export const metadata: Metadata = {
  title: "Historias de Éxito | Sintérgica AI — IA Privada para México y LATAM",
  description:
    "Casos de éxito y resultados proyectados de implementaciones de IA privada con Lattice en sectores regulados de México.",
};

export default function HistoriasDeExitoPage() {
  return (
    <div className="min-h-screen bg-brand-surface dark:bg-brand-midnight">
      <Navbar />
      <main>
        <HistoriasContent />
      </main>
      <Footer />
    </div>
  );
}
