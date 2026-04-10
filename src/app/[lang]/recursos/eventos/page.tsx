import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { EventosContent } from "@/components/recursos/EventosContent";

export const metadata: Metadata = {
  title: "Eventos | Sintérgica AI — IA Privada para México y LATAM",
  description:
    "Próximos eventos, webinars y conferencias de Sintérgica AI sobre IA empresarial, transformación digital y soberanía tecnológica.",
};

export default function EventosPage() {
  return (
    <div className="min-h-screen bg-brand-surface dark:bg-brand-midnight">
      <Navbar />
      <main>
        <EventosContent />
      </main>
      <Footer />
    </div>
  );
}
