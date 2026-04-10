import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CapacitacionContent } from "@/components/servicios/CapacitacionContent";

export const metadata: Metadata = {
  title: "Capacitación en IA Empresarial | Sintérgica AI — IA Privada para México y LATAM",
  description:
    "Formación especializada por audiencia y nivel de uso. Talleres, sesiones 1:1, documentación y certificación interna.",
};

export default function CapacitacionPage() {
  return (
    <div className="min-h-screen bg-brand-surface dark:bg-brand-midnight">
      <Navbar />
      <main>
        <CapacitacionContent />
      </main>
      <Footer />
    </div>
  );
}
