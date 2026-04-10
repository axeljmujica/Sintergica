import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ContactoContent } from "@/components/empresa/ContactoContent";

export const metadata: Metadata = {
  title: "Contacto | Sintérgica AI — IA Privada para México y LATAM",
  description:
    "Contáctanos para conocer cómo Sintérgica AI puede transformar tu operación con IA privada. Solicita un Diagnóstico Inteligente con datos reales.",
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-brand-surface dark:bg-brand-midnight">
      <Navbar />
      <main>
        <ContactoContent />
      </main>
      <Footer />
    </div>
  );
}
