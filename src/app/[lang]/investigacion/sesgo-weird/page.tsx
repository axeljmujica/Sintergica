import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { SesgoWeirdContent } from "@/components/investigacion/SesgoWeirdContent";

export const metadata: Metadata = {
  title: "El sesgo WEIRD en la IA | La evidencia científica detrás de Lattice Na'at | Sintérgica AI",
  description:
    "Los modelos globales fueron entrenados con datos del 15% de la humanidad. Harvard (2023) lo confirmó con r = −0.70. Así cerramos la brecha desde México.",
  openGraph: {
    title: "El sesgo WEIRD que tu IA no te cuenta",
    description:
      "Evidencia científica del sesgo cultural en modelos de lenguaje y cómo Lattice Na'at lo mitiga para México y LATAM.",
    url: "https://sintergica.ai/investigacion/sesgo-weird",
    siteName: "Sintérgica AI",
    locale: "es_MX",
    type: "article",
  },
  alternates: { canonical: "https://sintergica.ai/investigacion/sesgo-weird" },
  robots: { index: true, follow: true },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "El sesgo WEIRD en la inteligencia artificial",
  description:
    "Evidencia científica (Henrich 2010, Atari Harvard 2023) del sesgo cultural en LLMs y la respuesta de Sintérgica AI con Lattice Na'at.",
  author: {
    "@type": "Organization",
    name: "Sintérgica AI",
    url: "https://sintergica.ai",
  },
  publisher: {
    "@type": "Organization",
    name: "Sintérgica AI",
    url: "https://sintergica.ai",
  },
  mainEntityOfPage: "https://sintergica.ai/investigacion/sesgo-weird",
  citation: [
    "Henrich, J., Heine, S. J., & Norenzayan, A. (2010). The weirdest people in the world? Behavioral and Brain Sciences, 33(2-3), 61-83.",
    "Atari, M. et al. (2023). Which Humans? Harvard University.",
  ],
};

export default function SesgoWeirdPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="min-h-screen bg-brand-surface dark:bg-brand-midnight">
        <Navbar />
        <main>
          <SesgoWeirdContent />
        </main>
        <Footer />
      </div>
    </>
  );
}
