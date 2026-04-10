import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { AcercaDeContent } from "@/components/empresa/AcercaDeContent";

export const metadata: Metadata = {
  title: "Acerca de Sintérgica AI — Construyendo la IA de América Latina",
  description:
    "Laboratorio de investigación aplicada, consultora de IA y constructora de software empresarial. Impulsando la productividad en México y LATAM con IA privada.",
};

export default function AcercaDePage() {
  return (
    <div className="min-h-screen bg-brand-surface dark:bg-brand-midnight">
      <Navbar />
      <main>
        <AcercaDeContent />
      </main>
      <Footer />
    </div>
  );
}
