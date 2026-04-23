import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BrainCircuit, MapPin, TrendingUp, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTASection } from "@/components/shared/CTASection";
import { VideoBackground } from "@/components/ui/VideoBackground";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Soluciones — Plataforma de IA Privada | Sintérgica AI",
  description:
    "Lattice, Nahui y SalesHub: ecosistema de IA privada para empresas en México. Gobernanza verificable, datos on-premise y modelos especializados por industria.",
  openGraph: {
    title: "Soluciones — Plataforma de IA Privada | Sintérgica AI",
    description:
      "Lattice, Nahui y SalesHub: ecosistema de IA privada para empresas en México. Gobernanza verificable, datos on-premise y modelos especializados por industria.",
    url: "https://sintergica.ai/soluciones",
    siteName: "Sintérgica AI",
    images: [{ url: "/og/soluciones.png", width: 1200, height: 630 }],
    locale: "es_MX",
    type: "website",
  },
  alternates: { canonical: "https://sintergica.ai/soluciones" },
  robots: { index: true, follow: true },
};

const T = {
  es: {
    heroBadge: "Ecosistema Sintérgica AI",
    heroTitle1: "Deja de buscar herramientas.",
    heroTitle2: "Despliega soluciones.",
    heroSubtitle: "No entregamos demos ni APIs vacías. Implementamos plataformas que resuelven problemas de negocio reales, reducen costos operativos e incrementan el ROI desde el primer mes.",
    trustSignals: ["On-premise disponible", "Datos en tu infraestructura", "Gobernanza por diseño", "Contexto MX/LATAM"],
    platformTitle: "Todo el ecosistema funciona sobre Lattice",
    platformDesc: "Nahui y SalesHub son aplicaciones que corren sobre la infraestructura de Lattice. Una sola plataforma de gobierno, un solo modelo de seguridad, una sola fuente de verdad para toda la organización.",
    platformNote: "Sintérgica AI desarrolló el primer modelo de IA en México con 120 mil millones de parámetros. Lattice opera on-premise: los datos nunca salen de la infraestructura del cliente.",
    ctaTitle: "Descubre cuál solución se adapta a tu operación",
    ctaSubtitle: "Agenda un diagnóstico y te mostramos cómo Lattice, Nahui o SalesHub se integran a tus sistemas y flujos reales.",
    ctaLabel: "Solicitar Diagnóstico Inteligente",
    ctaTrust: ["Demo con datos reales", "Sin permanencia", "ROI estimado incluido"],
    soluciones: [
      {
        badge: "Plataforma Principal",
        headline: "Orquesta agentes autónomos en tu propia infraestructura",
        subheadline: "Despliega IA que entiende tu contexto normativo y reduce costos operativos sin enviar tus datos a la nube pública. Gobernanza y seguridad garantizada.",
        features: [
          "No más fuga de datos: Todo corre en tus servidores",
          "Modelos verticales: Entrenados en Legal, Gobierno, Logística, Salud",
          "Agentes autónomos: Automatiza flujos de trabajo completos 24/7",
          "Gobernanza real: Control de accesos y auditoría de cada decisión",
        ],
        ctaLabel: "Descubrir Lattice",
      },
      {
        badge: "Visibilidad Logística",
        headline: "Cierra la brecha entre lo planeado y lo ejecutado",
        subheadline: "Deja de perder dinero por desviaciones en campo. Nahui te da visibilidad en tiempo real y usa agentes IA para corregir problemas antes de que escalen.",
        features: [
          "Trazabilidad 100% digital de tu operación",
          "Detección de desviaciones de protocolo en tiempo real",
          "Escalamiento automático de incidencias críticas",
          "ROI inmediato por reducción de mermas y multas",
        ],
        ctaLabel: "Explorar Nahui",
      },
      {
        badge: "Vendedor IA 24/7",
        headline: "Califica leads y avanza tu pipeline mientras duermes",
        subheadline: "Un agente comercial que conoce tu producto a la perfección. Atiende prospectos, los califica y agenda reuniones automáticamente.",
        features: [
          "Atención inmediata 24/7 sin sumar personal",
          "Calificación profunda de leads usando tus criterios",
          "Agenda de reuniones directo en el calendario de tus vendedores",
          "Seguimiento automatizado para que no se enfríen las cuentas",
        ],
        ctaLabel: "Explorar SalesHub",
      },
    ],
  },
  en: {
    heroBadge: "Sintérgica AI Ecosystem",
    heroTitle1: "Stop searching for tools.",
    heroTitle2: "Deploy solutions.",
    heroSubtitle: "We don't deliver demos or empty APIs. We implement platforms that solve real business problems, reduce operational costs, and increase ROI from the first month.",
    trustSignals: ["On-premise available", "Data in your infrastructure", "Governance by design", "MX/LATAM context"],
    platformTitle: "The entire ecosystem runs on Lattice",
    platformDesc: "Nahui and SalesHub are applications that run on Lattice's infrastructure. One governance platform, one security model, one source of truth for the entire organization.",
    platformNote: "Sintérgica AI developed the first AI model in Mexico with 120 billion parameters. Lattice operates on-premise: data never leaves the client's infrastructure.",
    ctaTitle: "Discover which solution fits your operations",
    ctaSubtitle: "Book a diagnosis and we'll show you how Lattice, Nahui, or SalesHub integrate with your real systems and workflows.",
    ctaLabel: "Request Smart Diagnosis",
    ctaTrust: ["Demo with real data", "No lock-in", "Estimated ROI included"],
    soluciones: [
      {
        badge: "Core Platform",
        headline: "Orchestrate autonomous agents in your own infrastructure",
        subheadline: "Deploy AI that understands your regulatory context and reduces operational costs without sending your data to the public cloud. Governance and security guaranteed.",
        features: [
          "No more data leaks: Everything runs on your servers",
          "Vertical models: Trained in Legal, Government, Logistics, Healthcare",
          "Autonomous agents: Automate complete workflows 24/7",
          "Real governance: Access control and audit trail for every decision",
        ],
        ctaLabel: "Discover Lattice",
      },
      {
        badge: "Logistics Visibility",
        headline: "Close the gap between planned and executed",
        subheadline: "Stop losing money to field deviations. Nahui gives you real-time visibility and uses AI agents to fix problems before they escalate.",
        features: [
          "100% digital traceability of your operations",
          "Real-time protocol deviation detection",
          "Automatic escalation of critical incidents",
          "Immediate ROI from shrinkage and fine reduction",
        ],
        ctaLabel: "Explore Nahui",
      },
      {
        badge: "AI Salesperson 24/7",
        headline: "Qualify leads and advance your pipeline while you sleep",
        subheadline: "A sales agent that knows your product perfectly. It engages prospects, qualifies them, and books meetings automatically.",
        features: [
          "Immediate 24/7 service without adding headcount",
          "Deep lead qualification using your criteria",
          "Meeting scheduling straight to your sales team's calendar",
          "Automated follow-up so accounts don't go cold",
        ],
        ctaLabel: "Explore SalesHub",
      },
    ],
  },
  "pt-br": {
    heroBadge: "Ecossistema Sintérgica AI",
    heroTitle1: "Pare de buscar ferramentas.",
    heroTitle2: "Implante soluções.",
    heroSubtitle: "Não entregamos demos nem APIs vazias. Implementamos plataformas que resolvem problemas reais de negócios, reduzem custos operacionais e aumentam o ROI desde o primeiro mês.",
    trustSignals: ["On-premise disponível", "Dados na sua infraestrutura", "Governança por design", "Contexto MX/LATAM"],
    platformTitle: "Todo o ecossistema funciona sobre o Lattice",
    platformDesc: "Nahui e SalesHub são aplicações que rodam sobre a infraestrutura do Lattice. Uma única plataforma de governança, um único modelo de segurança, uma única fonte de verdade para toda a organização.",
    platformNote: "A Sintérgica AI desenvolveu o primeiro modelo de IA no México com 120 bilhões de parâmetros. O Lattice opera on-premise: os dados nunca saem da infraestrutura do cliente.",
    ctaTitle: "Descubra qual solução se adapta à sua operação",
    ctaSubtitle: "Agende um diagnóstico e mostraremos como o Lattice, Nahui ou SalesHub se integram aos seus sistemas e fluxos reais.",
    ctaLabel: "Solicitar Diagnóstico Inteligente",
    ctaTrust: ["Demo com dados reais", "Sem permanência", "ROI estimado incluído"],
    soluciones: [
      {
        badge: "Plataforma Principal",
        headline: "Orquestre agentes autônomos na sua própria infraestrutura",
        subheadline: "Implante IA que entende seu contexto regulatório e reduz custos operacionais sem enviar seus dados para a nuvem pública. Governança e segurança garantidas.",
        features: [
          "Sem vazamento de dados: Tudo roda nos seus servidores",
          "Modelos verticais: Treinados em Jurídico, Governo, Logística, Saúde",
          "Agentes autônomos: Automatize fluxos de trabalho completos 24/7",
          "Governança real: Controle de acessos e auditoria de cada decisão",
        ],
        ctaLabel: "Descobrir Lattice",
      },
      {
        badge: "Visibilidade Logística",
        headline: "Feche a brecha entre o planejado e o executado",
        subheadline: "Pare de perder dinheiro com desvios em campo. O Nahui oferece visibilidade em tempo real e usa agentes de IA para corrigir problemas antes que escalen.",
        features: [
          "Rastreabilidade 100% digital da sua operação",
          "Detecção de desvios de protocolo em tempo real",
          "Escalamento automático de incidentes críticos",
          "ROI imediato pela redução de perdas e multas",
        ],
        ctaLabel: "Explorar Nahui",
      },
      {
        badge: "Vendedor IA 24/7",
        headline: "Qualifique leads e avance seu pipeline enquanto dorme",
        subheadline: "Um agente comercial que conhece seu produto perfeitamente. Atende prospects, qualifica-os e agenda reuniões automaticamente.",
        features: [
          "Atendimento imediato 24/7 sem aumentar a equipe",
          "Qualificação profunda de leads usando seus critérios",
          "Agendamento de reuniões direto no calendário dos vendedores",
          "Follow-up automatizado para que as contas não esfriem",
        ],
        ctaLabel: "Explorar SalesHub",
      },
    ],
  },
} as const;

const SOLUCIONES_BASE = [
  {
    slug: "lattice",
    name: "Lattice",
    imageUrl: "/images/Industrial-Logistica/factory-workshop-interior-machines-glass-production-background.jpg",
    icon: BrainCircuit,
    accentColor: "brand-accent",
    featured: true,
  },
  {
    slug: "nahui",
    name: "Nahui",
    imageUrl: "/images/Industrial-Logistica/shipping-container-stack-yard-night-light-trails-industrial-crane-motion-blur.jpg",
    icon: MapPin,
    accentColor: "emerald",
    featured: false,
  },
  {
    slug: "saleshub",
    name: "SalesHub",
    imageUrl: "/images/Negocios-Oficina/modern-office-corporate-building-low-angle-view-skyscrapers-city-singapore-panoramic-perspective-view-business-concept-success-industry-tech-architecture.jpg",
    icon: TrendingUp,
    accentColor: "purple",
    featured: false,
  },
];

export default async function SolucionesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = lang as Locale;
  const t = T[locale] ?? T.es;

  return (
    <div className="flex flex-col min-h-screen bg-brand-surface text-brand-midnight dark:bg-brand-midnight dark:text-brand-white">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-brand-surface dark:bg-brand-midnight pt-32 pb-20 px-6">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-brand-surface/70 to-brand-surface/40 dark:from-brand-midnight dark:via-brand-midnight/70 dark:to-brand-midnight/40" />
          </div>
          <div className="relative mx-auto max-w-4xl text-center">
            <span className="inline-flex items-center rounded-full border border-brand-accent/20 bg-brand-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-accent">
              {t.heroBadge}
            </span>
            <h1 className="mt-6 font-proxima text-4xl font-extrabold leading-tight text-brand-midnight dark:text-brand-white md:text-5xl">
              {t.heroTitle1}<br />{t.heroTitle2}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-brand-midnight/70 dark:text-brand-white/70">
              {t.heroSubtitle}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-brand-midnight/50 dark:text-brand-white/45">
              {t.trustSignals.map((s) => (
                <span key={s} className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-brand-accent" />
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="bg-brand-white dark:bg-brand-midnight py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl space-y-6">
            {SOLUCIONES_BASE.map((sol, idx) => {
              const Icon = sol.icon;
              const content = t.soluciones[idx];
              return (
                <div
                  key={sol.slug}
                  className={`group relative overflow-hidden rounded-3xl border bg-brand-surface dark:bg-brand-navy transition-all duration-300 hover:shadow-xl ${
                    sol.featured
                      ? "border-brand-accent/25 hover:shadow-brand-accent/10"
                      : "border-brand-midnight/10 dark:border-brand-white/10 hover:border-brand-midnight/20 dark:hover:border-brand-white/20"
                  }`}
                >
                  <div className="grid lg:grid-cols-2">
                    {/* Image */}
                    <div className="relative h-64 lg:h-auto lg:min-h-[320px]">
                      <Image
                        src={sol.imageUrl}
                        alt={sol.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-brand-midnight/90 lg:block hidden" />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight/80 to-transparent lg:hidden" />
                    </div>

                    {/* Content */}
                    <div className="relative flex flex-col justify-center p-8 lg:p-10">
                      <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent/10">
                          <Icon className="h-5 w-5 text-brand-accent" />
                        </div>
                        <span className="text-xs font-semibold uppercase tracking-widest text-brand-accent">
                          {content.badge}
                        </span>
                      </div>

                      <h2 className="font-proxima text-2xl font-bold text-brand-midnight dark:text-brand-white sm:text-3xl">
                        {content.headline}
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-brand-midnight/70 dark:text-brand-white/60">
                        {content.subheadline}
                      </p>

                      <ul className="mt-5 space-y-2">
                        {content.features.map((f) => (
                          <li key={f} className="flex items-start gap-2.5">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-accent/70" />
                            <span className="text-sm text-brand-midnight/70 dark:text-brand-white/65">{f}</span>
                          </li>
                        ))}
                      </ul>

                      <Link
                        href={`/soluciones/${sol.slug}`}
                        className={`mt-7 inline-flex w-fit items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold transition-all hover:-translate-y-0.5 ${
                          sol.featured
                            ? "bg-brand-accent text-brand-midnight dark:text-brand-white shadow-lg shadow-brand-accent/25 hover:bg-brand-accent/90"
                            : "border border-brand-midnight/20 dark:border-brand-white/15 text-brand-midnight dark:text-brand-white hover:bg-brand-midnight/5 dark:hover:bg-brand-white/5"
                        }`}
                      >
                        {content.ctaLabel}
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Platform statement */}
        <section className="bg-brand-surface dark:bg-brand-midnight py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-proxima text-2xl font-bold text-brand-midnight dark:text-brand-white sm:text-3xl">
              {t.platformTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-brand-midnight/70 dark:text-brand-white/60">
              {t.platformDesc}
            </p>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-brand-midnight/50 dark:text-brand-white/40">
              {t.platformNote}
            </p>
          </div>
        </section>

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
