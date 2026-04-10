import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FloatingNav } from "@/components/ui/floating-nav";

const NAHUI_NAV = [
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Industrias", href: "#industrias" },
  { label: "Flujo", href: "#flujo" },
  { label: "Diferenciadores", href: "#diferenciadores" },
  { label: "Integraciones", href: "#integraciones" },
];
import { NahuiHero } from "@/components/soluciones/nahui/NahuiHero";
import { NahuiStats } from "@/components/soluciones/nahui/NahuiStats";
import { NahuiCapabilities } from "@/components/soluciones/nahui/NahuiCapabilities";
import { NahuiIndustries } from "@/components/soluciones/nahui/NahuiIndustries";
import { NahuiFlow } from "@/components/soluciones/nahui/NahuiFlow";
import { NahuiDifferentiators } from "@/components/soluciones/nahui/NahuiDifferentiators";
import { NahuiIntegrations } from "@/components/soluciones/nahui/NahuiIntegrations";
import { NahuiCTA } from "@/components/soluciones/nahui/NahuiCTA";

export const metadata: Metadata = {
  title: "Nahui — Gestión Logística Inteligente | Sintérgica AI",
  description:
    "Trazabilidad operativa, control en campo, optimización de rutas y visibilidad en tiempo real. Compatible con Lattice para habilitar IA en logística. Diseñado para México y LATAM.",
};

export default function NahuiPage() {
  return (
    <div className="min-h-screen bg-brand-surface dark:bg-brand-midnight">
      <Navbar />
      <FloatingNav items={NAHUI_NAV} />
      <main>
        <NahuiHero />
        <NahuiStats />
        <section id="funcionalidades"><NahuiCapabilities /></section>
        <section id="industrias"><NahuiIndustries /></section>
        <section id="flujo"><NahuiFlow /></section>
        <section id="diferenciadores"><NahuiDifferentiators /></section>
        <section id="integraciones"><NahuiIntegrations /></section>
        <NahuiCTA />
      </main>
      <Footer />
    </div>
  );
}
