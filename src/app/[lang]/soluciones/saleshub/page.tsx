import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FloatingNav } from "@/components/ui/floating-nav";

const SALESHUB_NAV = [
  { label: "Capacidades", href: "#capacidades" },
  { label: "Pipeline", href: "#funnel" },
  { label: "Diferenciadores", href: "#diferenciadores" },
  { label: "Reemplaza", href: "#reemplaza" },
  { label: "Integraciones", href: "#integraciones" },
];
import { SalesHubHero } from "@/components/soluciones/saleshub/SalesHubHero";
import { SalesHubProblem } from "@/components/soluciones/saleshub/SalesHubProblem";
import { SalesHubCapabilities } from "@/components/soluciones/saleshub/SalesHubCapabilities";
import { SalesHubFunnel } from "@/components/soluciones/saleshub/SalesHubFunnel";
import { SalesHubDifferentiators } from "@/components/soluciones/saleshub/SalesHubDifferentiators";
import { SalesHubReplaces } from "@/components/soluciones/saleshub/SalesHubReplaces";
import { SalesHubIntegrations } from "@/components/soluciones/saleshub/SalesHubIntegrations";
import { SalesHubCTA } from "@/components/soluciones/saleshub/SalesHubCTA";

export const metadata: Metadata = {
  title: "SalesHub — Ventas y Marketing en una sola plataforma | Sintérgica AI",
  description:
    "CRM, email marketing, funnels, automatización de ventas y visibilidad comercial completa. Compatible con Lattice para inteligencia comercial con IA. Diseñado para México y LATAM.",
};

export default function SalesHubPage() {
  return (
    <div className="min-h-screen bg-brand-surface dark:bg-brand-midnight">
      <Navbar />
      <FloatingNav items={SALESHUB_NAV} />
      <main>
        <SalesHubHero />
        <SalesHubProblem />
        <section id="capacidades"><SalesHubCapabilities /></section>
        <section id="funnel"><SalesHubFunnel /></section>
        <section id="diferenciadores"><SalesHubDifferentiators /></section>
        <section id="reemplaza"><SalesHubReplaces /></section>
        <section id="integraciones"><SalesHubIntegrations /></section>
        <SalesHubCTA />
      </main>
      <Footer />
    </div>
  );
}
