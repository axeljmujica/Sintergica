import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { ServiciosContent } from "@/components/servicios/ServiciosContent";

export const metadata: Metadata = {
  title: "Servicios de IA y Transformación Digital | Sintérgica AI — IA Privada para México y LATAM",
  description:
    "Consultoría, implementación guante blanco, capacitación y metodología. No entregamos un login: entregamos un equipo que se integra a tu operación.",
};

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-brand-surface dark:bg-brand-midnight">
      <Navbar />
      <main>
        <ServiciosContent />
      </main>
      <Footer />
    </div>
  );
}
