import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { NosotrosContent } from "@/components/empresa/NosotrosContent";

export const metadata: Metadata = {
  title: "Nosotros — Sintérgica AI | Construyendo la IA de América Latina",
  description:
    "Historia, misión, visión y modelo de negocio de Sintérgica AI. Laboratorio mexicano de IA fundado en 2016 con sedes en Boca del Río, CDMX y Xalapa.",
  openGraph: {
    title: "Nosotros — Sintérgica AI",
    description:
      "Historia, misión, visión y modelo de negocio de Sintérgica AI.",
    url: "https://sintergica.ai/empresa/nosotros",
    siteName: "Sintérgica AI",
    locale: "es_MX",
    type: "website",
  },
  alternates: { canonical: "https://sintergica.ai/empresa/nosotros" },
  robots: { index: true, follow: true },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Sintérgica AI",
  url: "https://sintergica.ai",
  foundingDate: "2016",
  foundingLocation: "Boca del Río, Veracruz, México",
  description:
    "Laboratorio de IA, consultora y constructora de software empresarial. IA privada para México y América Latina.",
  areaServed: ["MX", "CO", "CL", "AR", "PE"],
  numberOfEmployees: { "@type": "QuantitativeValue", value: 14 },
  location: [
    { "@type": "Place", name: "Sede principal — Boca del Río, Veracruz" },
    { "@type": "Place", name: "Oficina comercial — Ciudad de México" },
    { "@type": "Place", name: "Equipo de investigación — Xalapa, Veracruz" },
  ],
  knowsAbout: [
    "Inteligencia Artificial",
    "IA privada",
    "Soberanía de datos",
    "Modelos de lenguaje",
  ],
};

export default function NosotrosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <div className="min-h-screen bg-brand-surface dark:bg-brand-midnight">
        <Navbar />
        <main>
          <NosotrosContent />
        </main>
        <Footer />
      </div>
    </>
  );
}
