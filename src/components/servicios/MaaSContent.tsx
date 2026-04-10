"use client";

import { m, LazyMotion, domAnimation } from "motion/react";
import { ArrowRight, Megaphone, Target, PenTool, BarChart3, Users, Sparkles } from "lucide-react";
import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { useLocale } from "@/i18n/DictionaryProvider";

const T = {
  es: {
    heroBadge: "Marketing As A Service (MaaS)",
    heroTitle: "Marketing Impulsado por ",
    heroTitleHighlight: "Inteligencia Agéntica",
    heroDesc: "Transformamos tu estrategia comercial con agentes de IA autónomos. Desde la gestión hiper-personalizada de campañas y captación de leads con SalesHub, hasta la generación de diseño gráfico a escala.",
    ctaPrimary: "Impulsar mi Marketing",
    ctaSecondary: "Conocer SalesHub",
    featuresTitle: "El Ecosistema Completo de Marketing y Ventas",
    featuresDesc: "Desplegamos infraestructura de IA de extremo a extremo para acelerar tu crecimiento, optimizar la conversión y escalar la creación de contenido.",
    features: [
      { title: "SalesHub Inteligente", desc: "Plataforma core para la captación, cualificación y automatización de seguimiento de leads 24/7 mediante agentes conversacionales avanzados." },
      { title: "Agentes de Campañas", desc: "Sistemas autónomos que optimizan el presupuesto publicitario, ajustan el copy en tiempo real y segmentan audiencias con precisión microscópica." },
      { title: "Diseño Gráfico Generativo", desc: "Generación de activos visuales on-brand a escala. Variaciones instantáneas para A/B testing adaptadas a cada canal y segmento." },
      { title: "Personalización Masiva", desc: "Comunicación outbound adaptada al contexto individual de cada prospecto, incrementando radicalmente las tasas de respuesta." },
      { title: "Analítica Predictiva", desc: "Modelos que anticipan la propensión de compra y el Life Time Value (LTV), sugiriendo la mejor siguiente acción para tu equipo de ventas." },
      { title: "Contenido SEO Automatizado", desc: "Redacción técnica y blogs optimizados creados por IA ajustada a la voz de tu marca, posicionando a tu empresa como líder del sector." },
    ],
    ctaTitle: "Acelera tu crecimiento con agentes de marketing",
    ctaDesc: "Integra ventas, creatividad y analítica en un solo flujo impulsado por inteligencia artificial agéntica.",
    ctaButton: "Consultar sobre MaaS",
  },
  en: {
    heroBadge: "Marketing As A Service (MaaS)",
    heroTitle: "Marketing Powered by ",
    heroTitleHighlight: "Agentic Intelligence",
    heroDesc: "We transform your commercial strategy with autonomous AI agents. From hyper-personalized campaign management and lead capture with SalesHub, to graphic design generation at scale.",
    ctaPrimary: "Boost my Marketing",
    ctaSecondary: "Discover SalesHub",
    featuresTitle: "The Complete Marketing & Sales Ecosystem",
    featuresDesc: "We deploy end-to-end AI infrastructure to accelerate your growth, optimize conversion, and scale content creation.",
    features: [
      { title: "Intelligent SalesHub", desc: "Core platform for 24/7 lead capture, qualification, and follow-up automation through advanced conversational agents." },
      { title: "Campaign Agents", desc: "Autonomous systems that optimize ad spend, adjust copy in real time, and segment audiences with microscopic precision." },
      { title: "Generative Graphic Design", desc: "On-brand visual asset generation at scale. Instant variations for A/B testing adapted to each channel and segment." },
      { title: "Mass Personalization", desc: "Outbound communication adapted to the individual context of each prospect, radically increasing response rates." },
      { title: "Predictive Analytics", desc: "Models that anticipate purchase propensity and Life Time Value (LTV), suggesting the best next action for your sales team." },
      { title: "Automated SEO Content", desc: "Technical writing and optimized blogs created by AI tuned to your brand voice, positioning your company as an industry leader." },
    ],
    ctaTitle: "Accelerate your growth with marketing agents",
    ctaDesc: "Integrate sales, creativity, and analytics into a single flow powered by agentic artificial intelligence.",
    ctaButton: "Inquire about MaaS",
  },
  "pt-br": {
    heroBadge: "Marketing As A Service (MaaS)",
    heroTitle: "Marketing Impulsionado por ",
    heroTitleHighlight: "Inteligência Agêntica",
    heroDesc: "Transformamos sua estratégia comercial com agentes de IA autônomos. Desde a gestão hiperpersonalizada de campanhas e captação de leads com SalesHub, até a geração de design gráfico em escala.",
    ctaPrimary: "Impulsionar meu Marketing",
    ctaSecondary: "Conhecer SalesHub",
    featuresTitle: "O Ecossistema Completo de Marketing e Vendas",
    featuresDesc: "Implantamos infraestrutura de IA de ponta a ponta para acelerar seu crescimento, otimizar a conversão e escalar a criação de conteúdo.",
    features: [
      { title: "SalesHub Inteligente", desc: "Plataforma central para captação, qualificação e automação de acompanhamento de leads 24/7 por meio de agentes conversacionais avançados." },
      { title: "Agentes de Campanhas", desc: "Sistemas autônomos que otimizam o orçamento publicitário, ajustam o copy em tempo real e segmentam audiências com precisão microscópica." },
      { title: "Design Gráfico Generativo", desc: "Geração de ativos visuais on-brand em escala. Variações instantâneas para testes A/B adaptadas a cada canal e segmento." },
      { title: "Personalização Massiva", desc: "Comunicação outbound adaptada ao contexto individual de cada prospecto, aumentando radicalmente as taxas de resposta." },
      { title: "Analítica Preditiva", desc: "Modelos que antecipam a propensão de compra e o Life Time Value (LTV), sugerindo a melhor próxima ação para sua equipe de vendas." },
      { title: "Conteúdo SEO Automatizado", desc: "Redação técnica e blogs otimizados criados por IA ajustada à voz da sua marca, posicionando sua empresa como líder do setor." },
    ],
    ctaTitle: "Acelere seu crescimento com agentes de marketing",
    ctaDesc: "Integre vendas, criatividade e analítica em um único fluxo impulsionado por inteligência artificial agêntica.",
    ctaButton: "Consultar sobre MaaS",
  },
} as const;

const FEATURES_BASE = [
  { icon: Target },
  { icon: Megaphone },
  { icon: PenTool },
  { icon: Users },
  { icon: BarChart3 },
  { icon: Sparkles },
];

export function MaaSContent() {
  const locale = useLocale();
  const t = T[locale] ?? T.es;

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32 bg-brand-surface dark:bg-brand-midnight">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] rounded-full bg-brand-accent/5 dark:bg-brand-accent/10 blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-70 animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-rose-500/5 dark:bg-rose-500/10 blur-[100px] mix-blend-multiply dark:mix-blend-screen opacity-50 animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute inset-0 dot-grid opacity-30 dark:opacity-20" />
          <BackgroundBeams className="opacity-20 dark:opacity-40" />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full border border-brand-midnight/10 bg-brand-white/50 px-3 py-1 text-sm font-medium text-brand-midnight backdrop-blur-md dark:border-brand-white/10 dark:bg-brand-white/5 dark:text-brand-white"
              >
                <Megaphone className="h-4 w-4 text-brand-accent" />
                <span>{t.heroBadge}</span>
              </m.div>

              <m.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-6 font-proxima text-5xl font-extrabold tracking-tight text-brand-midnight dark:text-brand-white sm:text-6xl lg:text-7xl"
              >
                {t.heroTitle}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-rose-500 dark:from-brand-accent dark:to-rose-400">
                  {t.heroTitleHighlight}
                </span>
              </m.h1>

              <m.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-lg leading-relaxed text-brand-midnight/70 dark:text-brand-white/70"
              >
                {t.heroDesc}
              </m.p>

              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Link
                  href="https://sales.sintergica.ai/widget/booking/vh6cQRURUU1nU5nslpu4"
                  className="btn-glow inline-flex items-center gap-2 rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-accent/90"
                >
                  {t.ctaPrimary} <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/soluciones/saleshub"
                  className="inline-flex items-center gap-2 rounded-full border border-brand-midnight/10 bg-brand-white/50 px-6 py-3 text-sm font-semibold text-brand-midnight backdrop-blur-md transition-all hover:bg-brand-midnight/5 dark:border-brand-white/10 dark:bg-brand-white/5 dark:text-brand-white dark:hover:bg-brand-white/10"
                >
                  {t.ctaSecondary}
                </Link>
              </m.div>
            </div>

            {/* Right Graphic/Illustration */}
            <m.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:ml-auto w-full max-w-lg"
            >
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden glass dark:glass p-8 flex flex-col justify-between">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 to-rose-500/10 mix-blend-overlay"></div>

                <div className="relative z-10 flex justify-between items-start">
                  <div className="bg-brand-white dark:bg-brand-midnight rounded-xl p-4 shadow-lg border border-brand-midnight/10 dark:border-brand-white/10">
                    <Target className="h-8 w-8 text-brand-accent" />
                  </div>
                  <div className="bg-brand-white dark:bg-brand-midnight rounded-xl p-4 shadow-lg border border-brand-midnight/10 dark:border-brand-white/10">
                    <PenTool className="h-8 w-8 text-rose-500" />
                  </div>
                </div>

                <div className="relative z-10 self-center">
                  <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-brand-accent to-rose-500 shadow-2xl shadow-brand-accent/30 animate-float">
                    <div className="absolute inset-1 rounded-full bg-brand-surface dark:bg-brand-midnight m-[2px]" />
                    <Sparkles className="relative h-12 w-12 text-brand-accent dark:text-brand-white" />

                    {/* Orbiting particles */}
                    <div className="absolute inset-0 animate-[spin_8s_linear_infinite]">
                      <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-brand-accent shadow-[0_0_15px_rgba(54,101,245,0.8)]" />
                    </div>
                  </div>
                </div>

                <div className="relative z-10 flex justify-between items-end">
                  <div className="bg-brand-white dark:bg-brand-midnight rounded-xl p-4 shadow-lg border border-brand-midnight/10 dark:border-brand-white/10">
                    <Users className="h-8 w-8 text-emerald-500" />
                  </div>
                  <div className="bg-brand-white dark:bg-brand-midnight rounded-xl p-4 shadow-lg border border-brand-midnight/10 dark:border-brand-white/10">
                    <BarChart3 className="h-8 w-8 text-violet-500" />
                  </div>
                </div>

                {/* Connecting lines SVG */}
                <svg className="absolute inset-0 h-full w-full opacity-30 dark:opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 60 60 Q 200 60 200 200" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="4 4" className="text-brand-midnight dark:text-brand-white" />
                  <path d="M 440 60 Q 200 60 200 200" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="4 4" className="text-brand-midnight dark:text-brand-white" />
                  <path d="M 60 440 Q 200 440 200 200" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="4 4" className="text-brand-midnight dark:text-brand-white" />
                  <path d="M 440 440 Q 200 440 200 200" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="4 4" className="text-brand-midnight dark:text-brand-white" />
                </svg>
              </div>
            </m.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-24 bg-brand-white dark:bg-brand-deep relative">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="mb-16 max-w-3xl">
            <h2 className="font-proxima text-3xl font-bold text-brand-midnight dark:text-brand-white sm:text-4xl">
              {t.featuresTitle}
            </h2>
            <p className="mt-4 text-lg text-brand-midnight/70 dark:text-brand-white/70">
              {t.featuresDesc}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES_BASE.map((base, i) => (
              <m.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl border border-brand-midnight/10 bg-brand-surface/50 p-8 transition-all hover:bg-brand-surface dark:border-brand-white/10 dark:bg-brand-midnight/50 dark:hover:bg-brand-midnight"
              >
                <div className="mb-6 inline-flex rounded-xl bg-brand-accent/10 p-3 text-brand-accent dark:bg-brand-accent/20">
                  <base.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 font-proxima font-semibold text-lg text-brand-midnight dark:text-brand-white">
                  {t.features[i].title}
                </h3>
                <p className="text-sm leading-relaxed text-brand-midnight/70 dark:text-brand-white/70">
                  {t.features[i].desc}
                </p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-24 bg-brand-midnight dark:bg-brand-navy">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 to-transparent mix-blend-overlay"></div>
        <div className="absolute inset-0 dot-grid opacity-20 dark:opacity-10"></div>

        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="font-proxima text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            {t.ctaTitle}
          </h2>
          <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto">
            {t.ctaDesc}
          </p>
          <div className="mt-10">
            <Link
              href="https://sales.sintergica.ai/widget/booking/vh6cQRURUU1nU5nslpu4"
              className="btn-glow inline-flex items-center gap-2 rounded-full bg-brand-accent px-8 py-4 text-base font-semibold text-white transition-all hover:bg-brand-accent/90"
            >
              {t.ctaButton} <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
