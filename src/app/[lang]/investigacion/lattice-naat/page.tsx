import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { FloatingNav } from "@/components/ui/floating-nav";
import { LatticeNaatHero } from "@/components/investigacion/lattice-naat/LatticeNaatHero";
import { LatticeNaatWhy } from "@/components/investigacion/lattice-naat/LatticeNaatWhy";
import { LatticeNaatFamily } from "@/components/investigacion/lattice-naat/LatticeNaatFamily";
import { LatticeNaatDifferentiators } from "@/components/investigacion/lattice-naat/LatticeNaatDifferentiators";
import { LatticeNaatEcosystem } from "@/components/investigacion/lattice-naat/LatticeNaatEcosystem";
import { LatticeNaatRoadmap } from "@/components/investigacion/lattice-naat/LatticeNaatRoadmap";
import { LatticeNaatAccess } from "@/components/investigacion/lattice-naat/LatticeNaatAccess";
import { LatticeNaatFAQ } from "@/components/investigacion/lattice-naat/LatticeNaatFAQ";
import { LatticeNaatCTA } from "@/components/investigacion/lattice-naat/LatticeNaatCTA";
import { NAAT_DEFAULT } from "@/lib/lattice-naat-i18n";

const NAAT_NAV = [
  { label: "Por qué", href: "#por-que" },
  { label: "Familia", href: "#familia" },
  { label: "Diferenciadores", href: "#diferenciadores" },
  { label: "Ecosistema", href: "#ecosistema" },
  { label: "Hoja de ruta", href: "#hoja-de-ruta" },
  { label: "FAQ", href: "#faq" },
];

export const metadata: Metadata = {
  title: NAAT_DEFAULT.meta.title,
  description: NAAT_DEFAULT.meta.description,
  openGraph: {
    title: NAAT_DEFAULT.meta.title,
    description: NAAT_DEFAULT.meta.description,
    url: "https://sintergica.ai/investigacion/lattice-naat",
    siteName: "Sintérgica AI",
    images: [{ url: "/og/lattice-naat.png", width: 1200, height: 630 }],
    locale: "es_MX",
    type: "website",
  },
  alternates: { canonical: "https://sintergica.ai/investigacion/lattice-naat" },
  robots: { index: true, follow: true },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: NAAT_DEFAULT.faq.questions.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Lattice Na'at",
  applicationCategory: "BusinessApplication",
  operatingSystem: "SaaS, On-premise, Linux",
  description: NAAT_DEFAULT.meta.description,
  offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
  creator: {
    "@type": "Organization",
    name: "Sintérgica AI",
    url: "https://sintergica.ai",
    foundingLocation: "México",
    areaServed: ["MX", "CO", "CL", "AR", "PE"],
    knowsAbout: ["Modelo fundacional", "IA soberana", "Español mexicano", "LATAM"],
  },
};

export default function LatticeNaatPage() {
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
        <FloatingNav items={NAAT_NAV} />
        <main>
          <LatticeNaatHero />
          <LatticeNaatWhy />
          <LatticeNaatFamily />
          <LatticeNaatDifferentiators />
          <LatticeNaatEcosystem />
          <LatticeNaatRoadmap />
          <LatticeNaatAccess />
          <LatticeNaatFAQ />
          <LatticeNaatCTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
