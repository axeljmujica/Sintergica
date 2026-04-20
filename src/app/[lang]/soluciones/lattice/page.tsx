import type { Metadata } from "next";
import { LatticeNavbar } from "@/components/soluciones/lattice/LatticeNavbar";
import { Footer } from "@/components/sections/Footer";
import { FloatingNav } from "@/components/ui/floating-nav";
import { LatticeHero } from "@/components/soluciones/lattice/LatticeHero";
import { LatticeTrustBar } from "@/components/soluciones/lattice/LatticeTrustBar";
import { LatticeArchitecture } from "@/components/soluciones/lattice/LatticeArchitecture";
import { LatticeCapabilities } from "@/components/soluciones/lattice/LatticeCapabilities";
import { LatticeProVerticals } from "@/components/soluciones/lattice/LatticeProVerticals";
import { LatticeGovernance } from "@/components/soluciones/lattice/LatticeGovernance";
import { LatticeComparison } from "@/components/soluciones/lattice/LatticeComparison";
import { LatticeSecurity16 } from "@/components/soluciones/lattice/LatticeSecurity16";
import { LatticeEnterpriseReady } from "@/components/soluciones/lattice/LatticeEnterpriseReady";
import { LatticeModels } from "@/components/soluciones/lattice/LatticeModels";
import { LatticeCTA } from "@/components/soluciones/lattice/LatticeCTA";

const LATTICE_NAV = [
  { label: "Pilares", href: "#pilares" },
  { label: "Capacidades", href: "#capacidades" },
  { label: "Verticales", href: "#verticales" },
  { label: "Seguridad", href: "#seguridad" },
  { label: "Comparativa", href: "#comparativa" },
  { label: "Modelos", href: "#modelos" },
];

export const metadata: Metadata = {
  title: "Lattice — El sistema operativo de IA para tu organización | Sintérgica AI",
  description:
    "Chat inteligente, agentes autónomos, automatizaciones sin código y modelos entrenados en el contexto de México y LATAM. Con tus datos en tu infraestructura.",
  openGraph: {
    title: "Lattice — El sistema operativo de IA para tu organización | Sintérgica AI",
    description:
      "Chat inteligente, agentes autónomos, automatizaciones sin código y modelos entrenados en el contexto de México y LATAM. Con tus datos en tu infraestructura.",
    url: "https://sintergica.ai/soluciones/lattice",
    siteName: "Sintérgica AI",
    locale: "es_MX",
    type: "website",
  },
  alternates: { canonical: "https://sintergica.ai/soluciones/lattice" },
  robots: { index: true, follow: true },
};

const latticeSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Lattice",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, API",
  url: "https://sintergica.ai/es/soluciones/lattice",
  creator: {
    "@type": "Organization",
    name: "Sintérgica AI",
    url: "https://sintergica.ai",
  },
  description:
    "Chat inteligente, agentes autónomos, automatizaciones sin código y modelos entrenados en el contexto de México y LATAM. Con tus datos en tu infraestructura.",
  featureList: [
    "Chat inteligente con RAG y búsqueda semántica",
    "Agentes autónomos 24/7",
    "Automatizaciones sin código (Lattice Flows)",
    "Modelos especializados por industria (Seeb)",
    "Despliegue en infraestructura propia",
    "Contexto normativo México y LATAM",
    "Arquitectura zero-trust con 16 capas de seguridad",
  ],
  audience: {
    "@type": "Audience",
    audienceType: "Empresas en sectores regulados de México y LATAM",
  },
};

export default function LatticePage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(latticeSchema) }}
      />
      <LatticeNavbar />
      <FloatingNav items={LATTICE_NAV} />
      <main>
        <LatticeHero />
        <LatticeTrustBar />
        <div id="pilares"><LatticeArchitecture /></div>
        <div id="capacidades"><LatticeCapabilities /></div>
        <div id="verticales"><LatticeProVerticals /></div>
        <div id="seguridad"><LatticeGovernance /></div>
        <div id="seguridad-capas"><LatticeSecurity16 /></div>
        <LatticeEnterpriseReady />
        <div id="comparativa"><LatticeComparison /></div>
        <div id="modelos"><LatticeModels /></div>
        <LatticeCTA />
      </main>
      <Footer />
    </div>
  );
}
