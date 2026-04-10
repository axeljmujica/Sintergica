import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FloatingNav } from "@/components/ui/floating-nav";

const SEEB_NAV = [
  { label: "Por qué SLMs", href: "#por-que" },
  { label: "Modelos", href: "#modelos" },
  { label: "Destilación", href: "#destilacion" },
  { label: "FAQ", href: "#faq" },
];
import { LatticeSeebHero } from "@/components/soluciones/lattice-seeb/LatticeSeebHero";
import { LatticeSeebWhySLMs } from "@/components/soluciones/lattice-seeb/LatticeSeebWhySLMs";
import { LatticeSeebModelsTable } from "@/components/soluciones/lattice-seeb/LatticeSeebModelsTable";
import { LatticeSeebDistillation } from "@/components/soluciones/lattice-seeb/LatticeSeebDistillation";
import { LatticeSeebFAQ } from "@/components/soluciones/lattice-seeb/LatticeSeebFAQ";
import { LatticeSeebCTA } from "@/components/soluciones/lattice-seeb/LatticeSeebCTA";
import { SEEB_DEFAULT } from "@/lib/lattice-seeb-i18n";

export const metadata: Metadata = {
  title: SEEB_DEFAULT.meta.title,
  description: SEEB_DEFAULT.meta.description,
  openGraph: {
    title: SEEB_DEFAULT.meta.title,
    description: SEEB_DEFAULT.meta.description,
    url: "https://sintergica.ai/soluciones/lattice-seeb",
    siteName: "Sintérgica AI",
    images: [{ url: "/og/lattice-seeb.png", width: 1200, height: 630 }],
    locale: "es_MX",
    type: "website",
  },
  alternates: { canonical: "https://sintergica.ai/soluciones/lattice-seeb" },
  robots: { index: true, follow: true },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: SEEB_DEFAULT.faq.questions.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Lattice Séeb",
  applicationCategory: "BusinessApplication",
  operatingSystem: "On-premise, Linux, Windows Server",
  description: SEEB_DEFAULT.meta.description,
  offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
  creator: {
    "@type": "Organization",
    name: "Sintérgica AI",
    url: "https://sintergica.ai",
    foundingLocation: "México",
    areaServed: ["MX", "CO", "CL", "AR", "PE"],
    knowsAbout: ["Inteligencia Artificial", "IA privada", "Soberanía de datos"],
  },
};

export default function LatticeSeebPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <div className="min-h-screen bg-brand-surface dark:bg-brand-midnight">
        <Navbar />
        <FloatingNav items={SEEB_NAV} />
        <main>
          <LatticeSeebHero />
          <section id="por-que"><LatticeSeebWhySLMs /></section>
          <section id="modelos"><LatticeSeebModelsTable /></section>
          <section id="destilacion"><LatticeSeebDistillation /></section>
          <section id="faq"><LatticeSeebFAQ /></section>
          <LatticeSeebCTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
