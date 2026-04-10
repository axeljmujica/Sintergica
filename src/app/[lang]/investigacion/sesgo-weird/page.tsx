import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { SesgoWeirdContent } from "@/components/investigacion/SesgoWeirdContent";

export const metadata: Metadata = {
  title: "El Sesgo WEIRD en la IA: Por Qué México Necesita su Propio Modelo | Sintérgica AI",
  description:
    "Los modelos globales de IA fueron entrenados con datos de países WEIRD. Descubre por qué fallan en México y cómo Lattice Na'at resuelve este sesgo.",
};

export default function SesgoWeirdPage() {
  return (
    <div className="min-h-screen bg-brand-surface dark:bg-brand-midnight">
      <Navbar />
      <main>
        <SesgoWeirdContent />
      </main>
      <Footer />
    </div>
  );
}
