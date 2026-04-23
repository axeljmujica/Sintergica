"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import Link from "next/link";
import { Scale, Wrench, GraduationCap, GitBranch, ArrowRight, Sparkles } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { useLocale } from "@/i18n/DictionaryProvider";

const T = {
  es: {
    heroBadge: "SERVICIOS",
    heroTitle: "No entregamos un login. Entregamos un equipo que se integra a tu operación.",
    heroSubtitle: "Estrategia, implementación, capacitación y acompañamiento continuo. Desde el diagnóstico inicial hasta la operación autónoma.",
    heroBgImageAlt: "Equipo de expertos en IA trabajando",
    heroCtaLabel: "Solicitar Diagnóstico Inteligente",
    heroTrustStrategy: "Estrategia",
    heroTrustImplementation: "Implementación",
    heroTrustTraining: "Capacitación",
    heroTrustAccompaniment: "Acompañamiento",
    svc0Title: "Estrategia de IA y Transformación Digital",
    svc0Desc: "Diagnóstico, roadmap de IA, diseño de gobernanza, identificación de casos de uso con matriz impacto x riesgo x tiempo. Dirigido a C-level y directores de tecnología.",
    svc1Title: "Implementación Guante Blanco",
    svc1Desc: "Integración técnica con tus sistemas y flujos reales. Sprint estructurado con comunicación proactiva: el cliente nunca debe preguntar cómo va el proyecto.",
    svc2Title: "MaaS — Marketing as a Service",
    svc2Desc: "Gestión de campañas con IA, contenido orgánico, Meta + Google + LinkedIn + TikTok. La IA optimiza campañas en tiempo real.",
    svc3Title: "Formación Especializada por Audiencia",
    svc3Desc: "Talleres presenciales y virtuales, sesiones 1:1, documentación de usuario y certificación interna. Adaptados al nivel técnico de cada equipo.",
    svcCtaLabel: "Conocer más →",
    diagTitle: "Diagnóstico Inteligente",
    diagSubtitle: "El punto de entrada al ecosistema Sintérgica",
    diagItem0: "Demo funcional con tus datos reales",
    diagItem1: "Mapa de procesos críticos",
    diagItem2: "Propuesta de casos de uso con ROI estimado",
    diagItem3: "Sin permanencia",
    diagCtaLabel: "Solicitar Diagnóstico Inteligente",
    ctaTitle: "La IA ya trabaja en tu sector. ¿Tu operación está lista?",
    ctaSubtitle: "En 90 minutos identificamos los casos de uso con mayor retorno en tu organización, diseñamos el plan de implementación y calculamos el ROI real. Sin permanencia. Sin riesgo.",
    ctaCtaLabel: "Agendar mi diagnóstico",
    ctaTrust0: "Sin permanencia",
    ctaTrust1: "Demo con datos reales",
    ctaTrust2: "ROI estimado incluido",
  },
  en: {
    heroBadge: "SERVICES",
    heroTitle: "We don't deliver a login. We deliver a team that integrates into your operation.",
    heroSubtitle: "Strategy, implementation, training, and ongoing support. From the initial assessment to autonomous operation.",
    heroBgImageAlt: "Team of AI experts at work",
    heroCtaLabel: "Request an Intelligent Assessment",
    heroTrustStrategy: "Strategy",
    heroTrustImplementation: "Implementation",
    heroTrustTraining: "Training",
    heroTrustAccompaniment: "Ongoing Support",
    svc0Title: "AI Strategy & Digital Transformation",
    svc0Desc: "Assessment, AI roadmap, governance design, and use-case identification with an impact x risk x timeline matrix. For C-level executives and technology directors.",
    svc1Title: "White-Glove Implementation",
    svc1Desc: "Technical integration with your real systems and workflows. Structured sprints with proactive communication — the client should never have to ask how the project is going.",
    svc2Title: "MaaS — Marketing as a Service",
    svc2Desc: "AI-powered campaign management, organic content, Meta + Google + LinkedIn + TikTok. AI optimizes campaigns in real time.",
    svc3Title: "Specialized Training by Audience",
    svc3Desc: "In-person and virtual workshops, 1:1 sessions, user documentation, and internal certification. Adapted to each team's technical level.",
    svcCtaLabel: "Learn more →",
    diagTitle: "Intelligent Assessment",
    diagSubtitle: "The entry point to the Sintérgica ecosystem",
    diagItem0: "Functional demo with your real data",
    diagItem1: "Critical process mapping",
    diagItem2: "Use-case proposal with estimated ROI",
    diagItem3: "No lock-in",
    diagCtaLabel: "Request an Intelligent Assessment",
    ctaTitle: "AI is already working in your industry. Is your operation ready?",
    ctaSubtitle: "In 90 minutes we identify the highest-return use cases in your organization, design the implementation plan, and calculate the real ROI. No lock-in. No risk.",
    ctaCtaLabel: "Schedule my assessment",
    ctaTrust0: "No lock-in",
    ctaTrust1: "Demo with real data",
    ctaTrust2: "Estimated ROI included",
  },
  "pt-br": {
    heroBadge: "SERVIÇOS",
    heroTitle: "Não entregamos um login. Entregamos uma equipe que se integra à sua operação.",
    heroSubtitle: "Estratégia, implementação, capacitação e acompanhamento contínuo. Do diagnóstico inicial à operação autônoma.",
    heroBgImageAlt: "Equipe de especialistas em IA trabalhando",
    heroCtaLabel: "Solicitar Diagnóstico Inteligente",
    heroTrustStrategy: "Estratégia",
    heroTrustImplementation: "Implementação",
    heroTrustTraining: "Capacitação",
    heroTrustAccompaniment: "Acompanhamento",
    svc0Title: "Estratégia de IA e Transformação Digital",
    svc0Desc: "Diagnóstico, roadmap de IA, design de governança, identificação de casos de uso com matriz impacto x risco x tempo. Direcionado a C-level e diretores de tecnologia.",
    svc1Title: "Implementação White-Glove",
    svc1Desc: "Integração técnica com seus sistemas e fluxos reais. Sprint estruturado com comunicação proativa: o cliente nunca precisa perguntar como está o projeto.",
    svc2Title: "MaaS — Marketing as a Service",
    svc2Desc: "Gestão de campanhas com IA, conteúdo orgânico, Meta + Google + LinkedIn + TikTok. A IA otimiza campanhas em tempo real.",
    svc3Title: "Formação Especializada por Audiência",
    svc3Desc: "Workshops presenciais e virtuais, sessões 1:1, documentação de usuário e certificação interna. Adaptados ao nível técnico de cada equipe.",
    svcCtaLabel: "Saiba mais →",
    diagTitle: "Diagnóstico Inteligente",
    diagSubtitle: "O ponto de entrada para o ecossistema Sintérgica",
    diagItem0: "Demo funcional com seus dados reais",
    diagItem1: "Mapeamento de processos críticos",
    diagItem2: "Proposta de casos de uso com ROI estimado",
    diagItem3: "Sem fidelidade",
    diagCtaLabel: "Solicitar Diagnóstico Inteligente",
    ctaTitle: "A IA já trabalha no seu setor. Sua operação está pronta?",
    ctaSubtitle: "Em 90 minutos identificamos os casos de uso com maior retorno na sua organização, desenhamos o plano de implementação e calculamos o ROI real. Sem fidelidade. Sem risco.",
    ctaCtaLabel: "Agendar meu diagnóstico",
    ctaTrust0: "Sem fidelidade",
    ctaTrust1: "Demo com dados reais",
    ctaTrust2: "ROI estimado incluído",
  },
} as const;

export function ServiciosContent() {
  const locale = useLocale();
  const t = T[locale] ?? T.es;

  const svcRef = useRef<HTMLDivElement>(null);
  const svcInView = useInView(svcRef, { once: true, margin: "-60px" });
  const diagRef = useRef<HTMLDivElement>(null);
  const diagInView = useInView(diagRef, { once: true, margin: "-60px" });
  const shouldReduce = useReducedMotion();

  const SERVICIOS = [
    {
      icon: Scale,
      title: t.svc0Title,
      description: t.svc0Desc,
      href: "/servicios/consultoria",
      ctaLabel: t.svcCtaLabel,
    },
    {
      icon: Wrench,
      title: t.svc1Title,
      description: t.svc1Desc,
      href: "/servicios/implementacion",
      ctaLabel: t.svcCtaLabel,
    },
    {
      icon: GitBranch,
      title: t.svc2Title,
      description: t.svc2Desc,
      href: "/servicios/maas",
      ctaLabel: t.svcCtaLabel,
    },
    {
      icon: GraduationCap,
      title: t.svc3Title,
      description: t.svc3Desc,
      href: "/servicios/capacitacion",
      ctaLabel: t.svcCtaLabel,
    },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <>
        <PageHero
          badge={t.heroBadge}
          title={t.heroTitle}
          subtitle={t.heroSubtitle}
          
          bgImage="/images/Negocios-Oficina/modern-office-corporate-building-low-angle-view-skyscrapers-city-singapore-panoramic-perspective-view-business-concept-success-industry-tech-architecture.jpg"
          bgImageAlt={t.heroBgImageAlt}
          ctaLabel={t.heroCtaLabel}
          ctaHref="/diagnostico"
          trustSignals={[t.heroTrustStrategy, t.heroTrustImplementation, t.heroTrustTraining, t.heroTrustAccompaniment]}
        />

        {/* Services Grid */}
        <section className="bg-brand-surface dark:bg-brand-midnight py-24 px-4 sm:px-6 lg:px-8">
          <div ref={svcRef} className="mx-auto max-w-6xl grid gap-5 sm:grid-cols-2">
            {SERVICIOS.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <m.div
                  key={svc.title}
                  initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                  animate={svcInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: shouldReduce ? 0 : 0.5, delay: shouldReduce ? 0 : i * 0.1 }}
                  className="group flex flex-col rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep p-8 transition-all hover:border-brand-accent/30 hover:shadow-xl hover:shadow-brand-accent/5"
                >
                  <m.div
                    whileHover={shouldReduce ? {} : { scale: 1.1, rotate: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/10 will-change-transform"
                  >
                    <Icon className="h-6 w-6 text-brand-accent" />
                  </m.div>
                  <h3 className="text-base font-proxima font-semibold text-brand-midnight dark:text-brand-white">{svc.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-midnight/55 dark:text-brand-white/55">{svc.description}</p>
                  {svc.href && (
                    <Link
                      href={svc.href}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent transition-colors hover:text-brand-accent-light"
                    >
                      {svc.ctaLabel ?? t.svcCtaLabel}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </m.div>
              );
            })}
          </div>
        </section>

      {/* Diagnostic Highlight */}
        <section className="bg-brand-surface dark:bg-brand-midnight py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <m.div
              ref={diagRef}
              initial={shouldReduce ? false : { opacity: 0, y: 20 }}
              animate={diagInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: shouldReduce ? 0 : 0.6 }}
              className="rounded-2xl border border-brand-accent/30 bg-brand-accent/[0.07] p-8 sm:p-10"
            >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-brand-accent/15">
                <Sparkles className="h-6 w-6 text-brand-accent" />
              </div>
              <div className="flex-1">
                <h3 className="font-proxima text-xl font-semibold text-brand-midnight dark:text-brand-white sm:text-2xl">
                  {t.diagTitle}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand-accent">
                  {t.diagSubtitle}
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                t.diagItem0,
                t.diagItem1,
                t.diagItem2,
                t.diagItem3,
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 text-sm text-brand-midnight/70 dark:text-brand-white/70"
                >
                  <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-accent" />
                  {item}
                </div>
              ))}
            </div>

            <Link
                href="/diagnostico"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-accent px-7 py-3 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-accent/25"
              >
                {t.diagCtaLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </m.div>
          </div>
        </section>

        <CTASection
          title={t.ctaTitle}
          subtitle={t.ctaSubtitle}
          ctaLabel={t.ctaCtaLabel}
          ctaHref="/diagnostico"
          trustSignals={[
            t.ctaTrust0,
            t.ctaTrust1,
            t.ctaTrust2,
          ]}
        />
      </>
    </LazyMotion>
  );
}
