import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { DesarrolloMedidaContent } from "@/components/servicios/DesarrolloMedidaContent";

export const metadata: Metadata = {
  title: "Desarrollo a Medida Preparado para IA | Sintérgica AI",
  description:
    "Construimos software moderno y escalable listo para integrarse con IA agéntica. Potenciado por Lattice, agnóstico de nube y de modelo. Desarrollo de software preparado para el futuro.",
};

export default function DesarrolloMedidaPage() {
  return (
    <div className="min-h-screen bg-brand-surface dark:bg-brand-midnight">
      <Navbar />
      <main>
        <DesarrolloMedidaContent />
      </main>
      <Footer />
    </div>
  );
}
