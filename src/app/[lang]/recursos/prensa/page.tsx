import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { PrensaContent } from "@/components/recursos/PrensaContent";

export const metadata: Metadata = {
  title: "Prensa | Sintérgica AI — IA Privada para México y LATAM",
  description:
    "Comunicados de prensa, kit de medios y menciones de Sintérgica AI en medios. Contacto de prensa: prensa@sintergica.ai.",
};

export default function PrensaPage() {
  return (
    <div className="min-h-screen bg-brand-surface dark:bg-brand-midnight">
      <Navbar />
      <main>
        <PrensaContent />
      </main>
      <Footer />
    </div>
  );
}
