import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { GobernanzaContent } from "@/components/investigacion/GobernanzaContent";

export const metadata: Metadata = {
  title: "Gobernanza del Modelo — Lattice Na'at v1.0 | Sintérgica AI",
  description:
    "Cómo se toman las decisiones sobre el modelo, quién puede contribuir y cómo se rinde cuentas. Estructura de gobernanza abierta y distribuida de Lattice Na'at.",
};

export default function GobernanzaPage() {
  return (
    <div className="min-h-screen bg-brand-surface dark:bg-brand-midnight">
      <Navbar />
      <main>
        <GobernanzaContent />
      </main>
      <Footer />
    </div>
  );
}
