import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTASection } from "@/components/shared/CTASection";
import { SecurityHero } from "@/components/seguridad/SecurityHero";
import { DataSecuritySection } from "@/components/seguridad/DataSecuritySection";
import { AgentLayersSection } from "@/components/seguridad/AgentLayersSection";
import { ConversationalSection } from "@/components/seguridad/ConversationalSection";
import { ComplianceTable } from "@/components/seguridad/ComplianceTable";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Seguridad y Privacidad | Sintérgica AI — IA Privada para México",
  description:
    "Lattice opera con AES-256, TLS 1.3, RBAC y 16 capas de seguridad en Rust. LFPDPPP, LGTAIP, ISO 27001 y SOC 2 ready. Sin retención de datos en Sintérgica AI.",
  openGraph: {
    title: "Seguridad y Privacidad | Sintérgica AI — IA Privada para México",
    description:
      "Lattice opera con AES-256, TLS 1.3, RBAC y 16 capas de seguridad en Rust. LFPDPPP, LGTAIP, ISO 27001 y SOC 2 ready. Sin retención de datos en Sintérgica AI.",
    url: "https://sintergica.ai/seguridad",
    siteName: "Sintérgica AI",
    images: [{ url: "/og/seguridad.png", width: 1200, height: 630 }],
    locale: "es_MX",
    type: "website",
  },
  alternates: { canonical: "https://sintergica.ai/seguridad" },
  robots: { index: true, follow: true },
};

const T = {
  es: {
    ctaTitle: "¿Tu industria tiene requerimientos regulatorios específicos?",
    ctaSubtitle:
      "Sintérgica AI implementa IA privada para sectores regulados en México y Latinoamérica. Agenda una evaluación de seguridad con nuestro equipo.",
    ctaLabel: "Solicitar evaluación de seguridad",
    ctaTrust: [
      "Sin compromiso",
      "Evaluación confidencial",
      "Equipo especializado en regulación MX",
    ],
  },
  en: {
    ctaTitle: "Does your industry have specific regulatory requirements?",
    ctaSubtitle:
      "Sintérgica AI deploys private AI for regulated sectors in Mexico and Latin America. Schedule a security assessment with our team.",
    ctaLabel: "Request security assessment",
    ctaTrust: [
      "No commitment",
      "Confidential assessment",
      "Team specialized in MX regulation",
    ],
  },
  "pt-br": {
    ctaTitle: "Sua indústria tem requisitos regulatórios específicos?",
    ctaSubtitle:
      "Sintérgica AI implementa IA privada para setores regulados no México e América Latina. Agende uma avaliação de segurança com nossa equipe.",
    ctaLabel: "Solicitar avaliação de segurança",
    ctaTrust: [
      "Sem compromisso",
      "Avaliação confidencial",
      "Equipe especializada em regulação MX",
    ],
  },
} as const;

export default async function SeguridadPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const locale: Locale = (["es", "en", "pt-br"].includes(lang) ? lang : "es") as Locale;
  const t = T[locale] ?? T.es;

  return (
    <div className="min-h-screen bg-brand-surface dark:bg-brand-midnight">
      <Navbar />
      <main>
        <SecurityHero />
        <DataSecuritySection />
        <AgentLayersSection />
        <ConversationalSection />
        <ComplianceTable />
        <CTASection
          title={t.ctaTitle}
          subtitle={t.ctaSubtitle}
          ctaLabel={t.ctaLabel}
          ctaHref="https://sales.sintergica.ai/widget/booking/vh6cQRURUU1nU5nslpu4"
          trustSignals={[...t.ctaTrust]}
        />
      </main>
      <Footer />
    </div>
  );
}
