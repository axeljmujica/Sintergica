import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { LatticeNaatContent } from "@/components/investigacion/LatticeNaatContent";

export const metadata: Metadata = {
  title: "Lattice Na'at — El Cerebro Digital de México | Sintérgica AI",
  description:
    "Proyecto de investigación enfocado en curar el dataset normativo y cultural más grande de México, base de la próxima generación de IA en LATAM.",
};

export default function LatticeNaatPage() {
  return (
    <div className="min-h-screen bg-brand-surface dark:bg-brand-midnight">
      <Navbar />
      <main>
        <LatticeNaatContent />
      </main>
      <Footer />
    </div>
  );
}
