import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FloatingNav } from "@/components/ui/floating-nav";
import { NahuiHero } from "@/components/soluciones/nahui/NahuiHero";
import { NahuiTrustBar } from "@/components/soluciones/nahui/NahuiTrustBar";
import { NahuiPillars } from "@/components/soluciones/nahui/NahuiPillars";
import { NahuiCapabilities } from "@/components/soluciones/nahui/NahuiCapabilities";
import { NahuiUseCases } from "@/components/soluciones/nahui/NahuiUseCases";
import { NahuiFlow } from "@/components/soluciones/nahui/NahuiFlow";
import { NahuiSecurity } from "@/components/soluciones/nahui/NahuiSecurity";
import { NahuiComparison } from "@/components/soluciones/nahui/NahuiComparison";
import { NahuiCTA } from "@/components/soluciones/nahui/NahuiCTA";

const NAHUI_NAV = [
  { label: "Capacidades", href: "#capacidades" },
  { label: "Industrias", href: "#industrias" },
  { label: "Flujo", href: "#flujo" },
  { label: "Despliegue", href: "#despliegue" },
  { label: "Por qué Nahui", href: "#por-que" },
];

export const metadata: Metadata = {
  title: "Nahui — Gestión Logística Inteligente | Sintérgica AI",
  description:
    "Plataforma de gestión logística de Sintérgica AI. Trazabilidad completa, control operativo y agentes de IA que analizan tu operación sin que tus datos salgan de tu infraestructura. Diseñada para México y LATAM.",
};

export default function NahuiPage() {
  return (
    <div className="min-h-screen bg-brand-surface dark:bg-brand-midnight">
      <Navbar />
      <FloatingNav items={NAHUI_NAV} />
      <main>
        <NahuiHero />
        <NahuiTrustBar />
        <section id="descripcion"><NahuiPillars /></section>
        <section id="capacidades"><NahuiCapabilities /></section>
        <section id="industrias"><NahuiUseCases /></section>
        <section id="flujo"><NahuiFlow /></section>
        <section id="despliegue"><NahuiSecurity /></section>
        <section id="por-que"><NahuiComparison /></section>
        <NahuiCTA />
      </main>
      <Footer />
    </div>
  );
}
