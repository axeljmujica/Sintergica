import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Scale, Landmark, Ship, Zap, HeartPulse, Building2, TrendingUp } from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { CTASection } from "@/components/shared/CTASection";
import { VideoBackground } from "@/components/ui/VideoBackground";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Industrias — IA Privada por Sector | Sintérgica AI",
  description:
    "Lattice Séeb: modelos de IA privada especializados para los sectores legal, gobierno, logística, energía, salud y financiero en México. Contexto normativo mexicano incluido.",
  openGraph: {
    title: "Industrias — IA Privada por Sector | Sintérgica AI",
    description:
      "Lattice Séeb: modelos de IA privada especializados para los sectores legal, gobierno, logística, energía, salud y financiero en México.",
    url: "https://sintergica.ai/industrias",
    siteName: "Sintérgica AI",
    images: [{ url: "/og/industrias.png", width: 1200, height: 630 }],
    locale: "es_MX",
    type: "website",
  },
  alternates: { canonical: "https://sintergica.ai/industrias" },
  robots: { index: true, follow: true },
};

const T = {
  es: {
    heroBadge: "Lattice Séeb por Industria",
    heroTitle: "IA privada entrenada para tu sector",
    heroSubtitle: "Lattice Séeb no es un modelo genérico. Cada vertical fue calibrado con la normativa, lenguaje y procesos operativos de su industria en México.",
    heroSignals: ["On-premise", "Contexto MX/LATAM", "Gobernanza por diseño", "Sin sesgo WEIRD"],
    viewSolution: "Ver solución",
    diffTitle: "Por qué Lattice Séeb es diferente",
    diffDesc: "Los modelos globales están entrenados con lógica WEIRD. Lattice Séeb fue calibrado con la normativa, el lenguaje y los procesos operativos de México y Latinoamérica. No interpreta tu industria con sesgo extranjero.",
    diffStats: [
      { stat: "1T", label: "parámetros en el modelo base", desc: "El LLM latinoamericano de mayor escala" },
      { stat: "6", label: "verticales especializados", desc: "Legal, Gobierno, Logística y Com. Ext., Energía, Salud, Financiero" },
      { stat: "100%", label: "on-premise disponible", desc: "Los datos nunca salen de tu infraestructura" },
    ],
    ctaTitle: "¿Tu industria no está en la lista?",
    ctaSubtitle: "Desarrollamos verticales Lattice Séeb a la medida. Si operas en un sector regulado en México, podemos construir el contexto normativo que necesitas.",
    ctaLabel: "Hablar con el equipo",
    ctaTrust: ["On-premise disponible", "Contexto MX/LATAM", "Gobernanza por diseño"],
    industrias: [
      {
        badge: "Sector Legal",
        headline: "La IA que entiende el derecho mexicano",
        subheadline: "Revisión contractual, monitoreo del DOF y due diligence con normativa civil y fiscal de México.",
        metrics: ["96% precisión en riesgos", "DOF en tiempo real", "60% menos tiempo de revisión"],
      },
      {
        badge: "Sector Público",
        headline: "Soberanía digital para instituciones",
        subheadline: "Procesamiento de licitaciones CompraNet, reportes institucionales y monitoreo de normativa federal sin que tus datos salgan de la infraestructura del gobierno.",
        metrics: ["100% datos en infraestructura nacional", "3x más licitaciones analizadas", "Trazabilidad total"],
      },
      {
        badge: "Logística y Comercio Exterior",
        headline: "Despacho más rápido, cadena sin fricciones",
        subheadline: "Validación de CFDI Carta Porte, clasificación arancelaria y automatización del despacho aduanero con contexto de la Ley Aduanera mexicana.",
        metrics: ["40% menos tiempo de despacho", "95% precisión arancelaria", "Visibilidad en tiempo real"],
      },
      {
        badge: "Sector Energético",
        headline: "Compliance energético sin fricción",
        subheadline: "Automatización de reportes CRE, monitoreo de concesiones y cumplimiento de la Ley de la Industria Eléctrica.",
        metrics: ["100% cobertura reportes CRE", "80% reducción en compliance", "Alertas de vencimiento"],
      },
      {
        badge: "Sector Salud",
        headline: "Precisión clínica, compliance COFEPRIS",
        subheadline: "Gestión de expedientes con NOM-004-SSA3, compliance COFEPRIS y NOM-024 para hospitales y clínicas en México.",
        metrics: ["35% menos errores documentales", "50% menos tiempo en auditorías", "Trazabilidad de expedientes"],
      },
      {
        badge: "Sector Financiero",
        headline: "Compliance financiero con contexto mexicano",
        subheadline: "Detección de transacciones atípicas, reportes PLD, KYC automatizado y cumplimiento CNBV/UIF.",
        metrics: ["90% reducción en reportes PLD", "100% cobertura CNBV/UIF", "KYC automatizado"],
      },
    ],
  },
  en: {
    heroBadge: "Lattice Séeb by Industry",
    heroTitle: "Private AI trained for your sector",
    heroSubtitle: "Lattice Séeb is not a generic model. Each vertical was calibrated with the regulations, language, and operational processes of its industry in Mexico.",
    heroSignals: ["On-premise", "MX/LATAM context", "Governance by design", "No WEIRD bias"],
    viewSolution: "View solution",
    diffTitle: "Why Lattice Séeb is different",
    diffDesc: "Global models are trained with WEIRD logic. Lattice Séeb was calibrated with the regulations, language, and operational processes of Mexico and Latin America. It doesn't interpret your industry with foreign bias.",
    diffStats: [
      { stat: "1T", label: "parameters in the base model", desc: "The largest Latin American LLM" },
      { stat: "6", label: "specialized verticals", desc: "Legal, Government, Logistics & Foreign Trade, Energy, Healthcare, Financial" },
      { stat: "100%", label: "on-premise available", desc: "Data never leaves your infrastructure" },
    ],
    ctaTitle: "Your industry not on the list?",
    ctaSubtitle: "We develop custom Lattice Séeb verticals. If you operate in a regulated sector in Mexico, we can build the regulatory context you need.",
    ctaLabel: "Talk to the team",
    ctaTrust: ["On-premise available", "MX/LATAM context", "Governance by design"],
    industrias: [
      {
        badge: "Legal Sector",
        headline: "AI that understands Mexican law",
        subheadline: "Contract review, DOF monitoring, and due diligence with Mexican civil and tax regulations.",
        metrics: ["96% risk accuracy", "Real-time DOF", "60% less review time"],
      },
      {
        badge: "Public Sector",
        headline: "Digital sovereignty for institutions",
        subheadline: "CompraNet bid processing, institutional reports, and federal regulation monitoring without data leaving government infrastructure.",
        metrics: ["100% data in national infrastructure", "3x more bids analyzed", "Full traceability"],
      },
      {
        badge: "Logistics & Foreign Trade",
        headline: "Faster clearance, frictionless supply chain",
        subheadline: "CFDI Carta Porte validation, tariff classification, and customs clearance automation with Mexican Customs Law context.",
        metrics: ["40% less clearance time", "95% tariff accuracy", "Real-time visibility"],
      },
      {
        badge: "Energy Sector",
        headline: "Energy compliance without friction",
        subheadline: "CRE report automation, concession monitoring, and compliance with the Electric Industry Law.",
        metrics: ["100% CRE report coverage", "80% compliance reduction", "Expiration alerts"],
      },
      {
        badge: "Healthcare Sector",
        headline: "Clinical precision, COFEPRIS compliance",
        subheadline: "Medical records management with NOM-004-SSA3, COFEPRIS compliance, and NOM-024 for hospitals and clinics in Mexico.",
        metrics: ["35% fewer document errors", "50% less audit time", "Record traceability"],
      },
      {
        badge: "Financial Sector",
        headline: "Financial compliance with Mexican context",
        subheadline: "Atypical transaction detection, AML reports, automated KYC, and CNBV/UIF compliance.",
        metrics: ["90% reduction in AML reports", "100% CNBV/UIF coverage", "Automated KYC"],
      },
    ],
  },
  "pt-br": {
    heroBadge: "Lattice Séeb por Indústria",
    heroTitle: "IA privada treinada para o seu setor",
    heroSubtitle: "O Lattice Séeb não é um modelo genérico. Cada vertical foi calibrado com a regulamentação, linguagem e processos operacionais da sua indústria no México.",
    heroSignals: ["On-premise", "Contexto MX/LATAM", "Governança por design", "Sem viés WEIRD"],
    viewSolution: "Ver solução",
    diffTitle: "Por que o Lattice Séeb é diferente",
    diffDesc: "Os modelos globais são treinados com lógica WEIRD. O Lattice Séeb foi calibrado com a regulamentação, a linguagem e os processos operacionais do México e da América Latina. Não interpreta sua indústria com viés estrangeiro.",
    diffStats: [
      { stat: "1T", label: "parâmetros no modelo base", desc: "O maior LLM latino-americano" },
      { stat: "6", label: "verticais especializados", desc: "Jurídico, Governo, Logística e Com. Ext., Energia, Saúde, Financeiro" },
      { stat: "100%", label: "on-premise disponível", desc: "Os dados nunca saem da sua infraestrutura" },
    ],
    ctaTitle: "Sua indústria não está na lista?",
    ctaSubtitle: "Desenvolvemos verticais Lattice Séeb sob medida. Se você opera em um setor regulado no México, podemos construir o contexto regulatório que você precisa.",
    ctaLabel: "Falar com a equipe",
    ctaTrust: ["On-premise disponível", "Contexto MX/LATAM", "Governança por design"],
    industrias: [
      {
        badge: "Setor Jurídico",
        headline: "A IA que entende o direito mexicano",
        subheadline: "Revisão contratual, monitoramento do DOF e due diligence com regulamentação civil e fiscal do México.",
        metrics: ["96% precisão em riscos", "DOF em tempo real", "60% menos tempo de revisão"],
      },
      {
        badge: "Setor Público",
        headline: "Soberania digital para instituições",
        subheadline: "Processamento de licitações CompraNet, relatórios institucionais e monitoramento de regulamentação federal sem que os dados saiam da infraestrutura do governo.",
        metrics: ["100% dados em infraestrutura nacional", "3x mais licitações analisadas", "Rastreabilidade total"],
      },
      {
        badge: "Logística e Comércio Exterior",
        headline: "Despacho mais rápido, cadeia sem atritos",
        subheadline: "Validação de CFDI Carta Porte, classificação tarifária e automação do despacho aduaneiro com contexto da Lei Aduaneira mexicana.",
        metrics: ["40% menos tempo de despacho", "95% precisão tarifária", "Visibilidade em tempo real"],
      },
      {
        badge: "Setor Energético",
        headline: "Compliance energético sem atrito",
        subheadline: "Automação de relatórios CRE, monitoramento de concessões e cumprimento da Lei da Indústria Elétrica.",
        metrics: ["100% cobertura relatórios CRE", "80% redução em compliance", "Alertas de vencimento"],
      },
      {
        badge: "Setor Saúde",
        headline: "Precisão clínica, compliance COFEPRIS",
        subheadline: "Gestão de prontuários com NOM-004-SSA3, compliance COFEPRIS e NOM-024 para hospitais e clínicas no México.",
        metrics: ["35% menos erros documentais", "50% menos tempo em auditorias", "Rastreabilidade de prontuários"],
      },
      {
        badge: "Setor Financeiro",
        headline: "Compliance financeiro com contexto mexicano",
        subheadline: "Detecção de transações atípicas, relatórios PLD, KYC automatizado e cumprimento CNBV/UIF.",
        metrics: ["90% redução em relatórios PLD", "100% cobertura CNBV/UIF", "KYC automatizado"],
      },
    ],
  },
} as const;

const INDUSTRIAS_BASE = [
  { slug: "legal", name: "Legal", imageUrl: "/images/industries/seeb-legal.jpg", icon: Scale, accentColor: "from-blue-600/20 to-transparent" },
  { slug: "gobierno", name: "Gobierno", imageUrl: "/images/industries/seeb-gob.jpg", icon: Landmark, accentColor: "from-indigo-600/20 to-transparent" },
  { slug: "logistica", name: "Logística y Com. Ext.", imageUrl: "/images/industries/seeb-logistica.jpg", icon: Ship, accentColor: "from-amber-600/20 to-transparent" },
  { slug: "energia", name: "Energía", imageUrl: "/images/industries/seeb-energia.jpg", icon: Zap, accentColor: "from-yellow-600/20 to-transparent" },
  { slug: "salud", name: "Salud", imageUrl: "/images/industries/seeb-salud.jpg", icon: HeartPulse, accentColor: "from-emerald-600/20 to-transparent" },
  { slug: "financiero", name: "Financiero", imageUrl: "/images/industries/seeb-finanzas.jpg", icon: Building2, accentColor: "from-purple-600/20 to-transparent" },
];

export default async function IndustriasPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = lang as Locale;
  const t = T[locale] ?? T.es;

  return (
    <div className="min-h-screen bg-brand-surface dark:bg-brand-midnight">
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
              {t.heroTitle}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-brand-midnight/70 dark:text-brand-white/70">
              {t.heroSubtitle}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs text-brand-midnight/45 dark:text-brand-white/45">
              {t.heroSignals.map((s) => (
                <span key={s} className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-brand-accent" />
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Grid */}
        <section className="bg-brand-surface dark:bg-brand-deep py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {INDUSTRIAS_BASE.map((ind, idx) => {
                const Icon = ind.icon;
                const content = t.industrias[idx];
                return (
                  <Link
                    key={ind.slug}
                    href={`/industrias/${ind.slug}`}
                    className="group relative flex flex-col overflow-hidden rounded-3xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-midnight transition-all duration-300 hover:-translate-y-1 hover:border-brand-accent/25 hover:shadow-xl hover:shadow-brand-accent/10"
                  >
                    {/* Image */}
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={ind.imageUrl}
                        alt={ind.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${ind.accentColor} via-brand-midnight/30 to-transparent opacity-80`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight/90 via-brand-midnight/20 to-transparent" />
                      {/* Badge */}
                      <div className="absolute left-4 top-4">
                        <span className="inline-flex items-center rounded-full border border-brand-midnight/20 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-midnight/60 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-brand-midnight/80 dark:text-brand-white/10 backdrop-blur-sm">
                          {content.badge}
                        </span>
                      </div>
                      {/* Icon */}
                      <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent/20 backdrop-blur-sm">
                        <Icon className="h-5 w-5 text-brand-accent" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-1 flex-col p-6">
                      <h2 className="font-proxima text-lg font-bold text-brand-midnight dark:text-brand-white">{content.headline}</h2>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-midnight/55 dark:text-brand-white/55">
                        {content.subheadline}
                      </p>

                      {/* Metrics */}
                      <ul className="mt-4 space-y-1.5">
                        {content.metrics.map((m) => (
                          <li key={m} className="flex items-center gap-2 text-xs text-brand-midnight/50 dark:text-brand-white/50">
                            <span className="h-1 w-1 rounded-full bg-brand-accent/60" />
                            {m}
                          </li>
                        ))}
                      </ul>

                      {/* CTA */}
                      <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-brand-accent transition-colors group-hover:text-brand-accent-light">
                        {t.viewSolution}
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Differentiator strip */}
        <section className="bg-brand-surface dark:bg-brand-midnight py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="font-proxima text-2xl font-bold text-brand-midnight dark:text-brand-white sm:text-3xl">
              {t.diffTitle}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">
              {t.diffDesc}
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-3">
              {t.diffStats.map((item) => (
                <div key={item.stat} className="rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep p-6 text-center">
                  <span className="font-proxima text-3xl font-extrabold text-brand-accent">{item.stat}</span>
                  <p className="mt-1 text-xs font-semibold text-brand-midnight dark:text-brand-white">{item.label}</p>
                  <p className="mt-1 text-xs text-brand-midnight/45 dark:text-brand-white/45">{item.desc}</p>
                </div>
              ))}
            </div>
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
