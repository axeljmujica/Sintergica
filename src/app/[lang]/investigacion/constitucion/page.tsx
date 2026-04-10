import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ConstitucionContent } from "@/components/investigacion/ConstitucionContent";

export const metadata: Metadata = {
  title: "Constitución del Modelo — Lattice Na'at v2.0 | Sintérgica AI",
  description:
    "Los valores, principios y comportamiento esperado del primer modelo de IA de código abierto desarrollado desde México. Seguro, honesto, útil y culturalmente representativo.",
};

export default function ConstitucionPage() {
  return (
    <div className="min-h-screen bg-brand-surface dark:bg-brand-midnight">
      <Navbar />
      <main>
        <ConstitucionContent />
      </main>
      <Footer />
    </div>
  );
}
