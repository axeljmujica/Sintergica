import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTASection } from "@/components/shared/CTASection";
import { ApiHero } from "@/components/api/ApiHero";
import { ApiFeatures } from "@/components/api/ApiFeatures";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "API y MCP | Sintérgica AI",
  description:
    "Integra la inteligencia de Lattice, Na'at y Séeb en tus aplicaciones. Soporte para Model Context Protocol (MCP) y consumo por tokens.",
  openGraph: {
    title: "API y MCP | Sintérgica AI",
    description:
      "Integra la inteligencia de Lattice, Na'at y Séeb en tus aplicaciones. Soporte para Model Context Protocol (MCP) y consumo por tokens.",
    url: "https://sintergica.ai/api",
    siteName: "Sintérgica AI",
    locale: "es_MX",
    type: "website",
  },
  alternates: { canonical: "https://sintergica.ai/api" },
  robots: { index: true, follow: true },
};

const T = {
  es: {
    ctaTitle: "¿Listo para construir sobre Lattice?",
    ctaSubtitle: "Accede a la documentación técnica o agenda una llamada con un ingeniero de soluciones para discutir tu caso de uso.",
    ctaLabel: "Solicitar acceso a API",
    ctaTrust: ["Documentación completa", "Soporte técnico directo", "Ejemplos en Python y TypeScript"],
  },
  en: {
    ctaTitle: "Ready to build on Lattice?",
    ctaSubtitle: "Access technical documentation or schedule a call with a solutions engineer to discuss your use case.",
    ctaLabel: "Request API access",
    ctaTrust: ["Complete documentation", "Direct technical support", "Examples in Python and TypeScript"],
  },
  "pt-br": {
    ctaTitle: "Pronto para construir sobre o Lattice?",
    ctaSubtitle: "Acesse a documentação técnica ou agende uma chamada com um engenheiro de soluções para discutir seu caso de uso.",
    ctaLabel: "Solicitar acesso à API",
    ctaTrust: ["Documentação completa", "Suporte técnico direto", "Exemplos em Python e TypeScript"],
  },
} as const;

export default async function ApiPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = (["es", "en", "pt-br"].includes(lang) ? lang : "es") as keyof typeof T;
  const t = T[locale];

  return (
    <div className="min-h-screen bg-brand-surface dark:bg-brand-midnight">
      <Navbar />
      <main>
        <ApiHero />
        <ApiFeatures />
        <CTASection
          title={t.ctaTitle}
          subtitle={t.ctaSubtitle}
          ctaLabel={t.ctaLabel}
          ctaHref="/diagnostico"
          trustSignals={[...t.ctaTrust]}
        />
      </main>
      <Footer />
    </div>
  );
}
