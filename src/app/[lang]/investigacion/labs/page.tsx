import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { LabsContent } from "@/components/investigacion/labs/LabsContent";
import { LABS_DEFAULT } from "@/lib/labs-i18n";

export const metadata: Metadata = {
  title: LABS_DEFAULT.meta.title,
  description: LABS_DEFAULT.meta.description,
  openGraph: {
    title: LABS_DEFAULT.meta.title,
    description: LABS_DEFAULT.meta.description,
    url: "https://sintergica.ai/investigacion/labs",
    siteName: "Sintérgica AI",
    images: [{ url: "/og/labs.png", width: 1200, height: 630 }],
    locale: "es_MX",
    type: "website",
  },
  alternates: { canonical: "https://sintergica.ai/investigacion/labs" },
  robots: { index: true, follow: true },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "ResearchOrganization",
  name: "Sintérgica Labs",
  description: LABS_DEFAULT.meta.description,
  url: "https://sintergica.ai/investigacion/labs",
  sameAs: [
    "https://github.com/Sintergica-AI",
    "https://huggingface.co/sintergica",
  ],
  parentOrganization: {
    "@type": "Organization",
    name: "Sintérgica AI",
    url: "https://sintergica.ai",
    foundingLocation: "México",
    areaServed: ["MX", "CO", "CL", "AR", "PE"],
    knowsAbout: ["Inteligencia Artificial", "IA privada", "Soberanía de datos"],
  },
};

const softwareJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Lattice Na\u2019at",
  applicationCategory: "BusinessApplication",
  description:
    "Primer modelo de IA desarrollado en México con 120 mil millones de parámetros.",
  creator: {
    "@type": "Organization",
    name: "Sintérgica AI",
    url: "https://sintergica.ai",
  },
};

export default function LabsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareJsonLd) }}
      />
      <div className="min-h-screen bg-brand-surface dark:bg-brand-midnight">
        <Navbar />
        <main>
          <LabsContent />
        </main>
        <Footer />
      </div>
    </>
  );
}
