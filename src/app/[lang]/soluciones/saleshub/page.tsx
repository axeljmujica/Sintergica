import type { Metadata } from "next";
import { LatticeNavbar as Navbar } from "@/components/soluciones/lattice/LatticeNavbar";
import { Footer } from "@/components/sections/Footer";
import { FloatingNav } from "@/components/ui/floating-nav";
import { SalesHubHero } from "@/components/soluciones/saleshub/SalesHubHero";
import { SalesHubTrustBar } from "@/components/soluciones/saleshub/SalesHubTrustBar";
import { SalesHubPillars } from "@/components/soluciones/saleshub/SalesHubPillars";
import { SalesHubCapabilities } from "@/components/soluciones/saleshub/SalesHubCapabilities";
import { SalesHubFunnel } from "@/components/soluciones/saleshub/SalesHubFunnel";
import { SalesHubReplaces } from "@/components/soluciones/saleshub/SalesHubReplaces";
import { SalesHubDifferentiators } from "@/components/soluciones/saleshub/SalesHubDifferentiators";
import { SalesHubCTA } from "@/components/soluciones/saleshub/SalesHubCTA";

const SALESHUB_NAV = [
  { label: "Capacidades", href: "#capacidades" },
  { label: "Journey", href: "#journey" },
  { label: "Reemplaza", href: "#reemplaza" },
  { label: "Por qué", href: "#por-que" },
];

export const metadata: Metadata = {
  title: "SalesHub — Motor Comercial Completo con IA | Sintérgica AI",
  description:
    "CRM, email marketing, funnels, agenda, WhatsApp, reportes e IA en una sola plataforma. En español. Con soporte local. Con factura en pesos. Diseñado para México y LATAM.",
};

export default function SalesHubPage() {
  return (
    <div className="min-h-screen bg-brand-surface dark:bg-brand-midnight">
      <Navbar />
      <FloatingNav items={SALESHUB_NAV} />
      <main>
        <SalesHubHero />
        <SalesHubTrustBar />
        <section id="descripcion"><SalesHubPillars /></section>
        <section id="capacidades"><SalesHubCapabilities /></section>
        <section id="journey"><SalesHubFunnel /></section>
        <section id="reemplaza"><SalesHubReplaces /></section>
        <section id="por-que"><SalesHubDifferentiators /></section>
        <SalesHubCTA />
      </main>
      <Footer />
    </div>
  );
}
