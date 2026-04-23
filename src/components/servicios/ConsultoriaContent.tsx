"use client";

import { useRef, useState } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { Map, Target, Layers, Calendar, Sparkles, ArrowRight, Building2, TrendingUp, ShieldCheck, Users2, ChevronDown, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTASection } from "@/components/shared/CTASection";
import { useLocale } from "@/i18n/DictionaryProvider";

const T = {
  es: {
    hero: {
      badge: "CONSULTORÍA ESTRATÉGICA EN IA",
      title: "Diseñamos tu ruta de adopción hacia la Inteligencia Artificial",
      subtitle: "Evaluamos la situación actual de tu organización frente a la IA y diseñamos una estrategia de adopción con impacto medible y retorno de inversión claro. Especializados en el mercado mexicano y latinoamericano.",
      bgImageAlt: "Consultoría de IA para empresas en Latinoamérica",
      ctaLabel: "Agendar Diagnóstico Gratuito",
      trustSignals: ["Diagnóstico de 45 min sin costo", "Business Case con ROI", "Alineación a LFPDPPP"],
    },
    intro: {
      badge: "El primer paso",
      title: "Primero escuchamos, luego diseñamos.",
      p1: "El servicio de consultoría de Sintérgica es el punto de entrada indispensable antes de cualquier implementación tecnológica. No imponemos soluciones prefabricadas; realizamos un diagnóstico estructurado para entender la complejidad real de tu operación, tus cuellos de botella y tu cultura organizacional.",
      checklist: [
        "Benchmark sectorial de madurez de IA",
        "Definición de casos de uso priorizados",
        "Alineado al contexto normativo y empresarial de LatAm",
      ],
      imageAlt: "Equipo directivo analizando roadmap de Inteligencia Artificial",
    },
    entregables: {
      badge: "ENTREGABLES DE LA CONSULTORÍA",
      title: "Resultados accionables, no teoría",
      subtitle: "Nuestra consultoría profunda concluye con documentos operativos listos para ejecutar y presentar ante juntas directivas.",
      items: [
        { title: "Mapa de madurez y procesos críticos", description: "Evaluamos tu infraestructura actual e identificamos los cuellos de botella operativos con mayor potencial de ser resueltos con Inteligencia Artificial." },
        { title: "Business Case y ROI estimado", description: "Definición de casos de uso priorizados (impacto vs. viabilidad) acompañados de una proyección financiera formal y métricas de éxito." },
        { title: "Arquitectura técnica recomendada", description: "Diseño del núcleo de inteligencia: selección de modelos SLM/LLM, opciones de despliegue (nube privada u on-premise) y esquema de seguridad." },
        { title: "Roadmap de implementación", description: "Hoja de ruta detallada con fases, costos y tiempos. Desde la prueba de concepto inicial hasta la integración completa con tus sistemas legacy." },
      ],
    },
    diagnostic: {
      title: "Sesión de Diagnóstico Inteligente",
      tagline: "45 Minutos Sin Costo · Valor Inmediato",
      description: 'Analizamos tu operación, identificamos los 2 o 3 casos de uso con mayor potencial de impacto inmediato y trazamos un mapa preliminar con el ROI esperado. Además, contamos con una política de inversión garantizada:',
      highlight: "si decides avanzar con nosotros, el costo del proyecto de consultoría profunda se bonifica a favor de tu implementación final",
      ctaLabel: "Agendar mi sesión de 45 minutos",
    },
    audience: {
      badge: "AUDIENCIA",
      title: "Liderazgo para la Transformación",
      subtitle: "Nuestro servicio está diseñado para los tomadores de decisión que guían el rumbo tecnológico de la empresa.",
      items: [
        { title: "Directores Generales (C-Level)", desc: "Visión estratégica para convertir la IA de un centro de costos a una ventaja competitiva medible en su industria." },
        { title: "Directores de Operaciones (COO)", desc: "Identificación de ineficiencias y diseño de automatizaciones que impacten directamente en el margen operativo." },
        { title: "Directores de Tecnología (CTO/CIO)", desc: "Diseño de arquitecturas seguras que cumplan con normativas locales (LFPDPPP) sin comprometer datos sensibles." },
        { title: "Líderes de Innovación", desc: "Acompañamiento estructurado para escalar pilotos aislados a soluciones empresariales transversales." },
      ],
    },
    faq: {
      badge: "PREGUNTAS FRECUENTES",
      title: "Resolvamos tus dudas",
      items: [
        { q: "¿En qué consiste la Sesión de Diagnóstico Inteligente gratuita?", a: "Es una sesión de 45 minutos donde analizamos tu operación, identificamos 2-3 casos de uso con potencial inmediato y trazamos un mapa preliminar de implementación con ROI estimado." },
        { q: "¿Qué sucede después del diagnóstico gratuito?", a: "Si encontramos casos de uso viables, te propondremos un proyecto de consultoría profunda donde diseñaremos el Business Case, la arquitectura técnica detallada y el roadmap de implementación. Si decides avanzar con la implementación con nosotros, el costo del proyecto de consultoría se bonifica a favor de tu proyecto." },
        { q: "¿Tienen experiencia en el contexto empresarial latinoamericano?", a: "Totalmente. A diferencia de soluciones genéricas globales, entendemos la infraestructura, los retos de conectividad, la cultura laboral y las normativas de privacidad de datos específicas de México y Latinoamérica." },
        { q: "¿Cuánto tiempo toma el proceso de consultoría profunda?", a: "Dependiendo de la complejidad de la organización, un proceso de consultoría profunda suele tomar entre 2 a 4 semanas, desde el levantamiento de información hasta la entrega del Business Case y Roadmap." },
      ],
    },
    cta: {
      title: "Elimina el riesgo de tu inversión en Inteligencia Artificial",
      subtitle: "Agenda tu sesión de Diagnóstico Inteligente. Si decides avanzar con la implementación, el costo de la consultoría se abona a tu proyecto.",
      ctaLabel: "Agendar Diagnóstico",
      trustSignals: ["Política de inversión garantizada", "Datos y ROI claros", "Expertos en LatAm"],
    },
  },
  en: {
    hero: {
      badge: "STRATEGIC AI CONSULTING",
      title: "We design your AI adoption roadmap",
      subtitle: "We assess your organization's current AI readiness and design an adoption strategy with measurable impact and clear ROI. Specialized in the Mexican and Latin American market.",
      bgImageAlt: "AI consulting for enterprises in Latin America",
      ctaLabel: "Book Free Diagnosis",
      trustSignals: ["45-min diagnosis at no cost", "Business Case with ROI", "LFPDPPP compliance"],
    },
    intro: {
      badge: "The first step",
      title: "First we listen, then we design.",
      p1: "Sintérgica's consulting service is the essential entry point before any technology implementation. We don't impose off-the-shelf solutions; we conduct a structured diagnosis to understand the real complexity of your operations, your bottlenecks, and your organizational culture.",
      checklist: [
        "Industry benchmark for AI maturity",
        "Prioritized use case definition",
        "Aligned with LatAm regulatory and business context",
      ],
      imageAlt: "Executive team analyzing an AI roadmap",
    },
    entregables: {
      badge: "CONSULTING DELIVERABLES",
      title: "Actionable results, not theory",
      subtitle: "Our deep consulting engagement concludes with operational documents ready to execute and present to your board of directors.",
      items: [
        { title: "Maturity map and critical processes", description: "We assess your current infrastructure and identify the operational bottlenecks with the greatest potential to be resolved with Artificial Intelligence." },
        { title: "Business Case and estimated ROI", description: "Prioritized use case definition (impact vs. feasibility) accompanied by a formal financial projection and success metrics." },
        { title: "Recommended technical architecture", description: "Design of the intelligence core: SLM/LLM model selection, deployment options (private cloud or on-premise) and security framework." },
        { title: "Implementation roadmap", description: "Detailed roadmap with phases, costs, and timelines. From the initial proof of concept to full integration with your legacy systems." },
      ],
    },
    diagnostic: {
      title: "Smart Diagnosis Session",
      tagline: "45 Minutes at No Cost · Immediate Value",
      description: "We analyze your operations, identify the 2 or 3 use cases with the greatest potential for immediate impact, and outline a preliminary map with expected ROI. Plus, we have a guaranteed investment policy:",
      highlight: "if you decide to move forward with us, the cost of the deep consulting project is credited toward your final implementation",
      ctaLabel: "Book my 45-minute session",
    },
    audience: {
      badge: "AUDIENCE",
      title: "Leadership for Transformation",
      subtitle: "Our service is designed for the decision-makers who guide the technological direction of the company.",
      items: [
        { title: "General Directors (C-Level)", desc: "Strategic vision to turn AI from a cost center into a measurable competitive advantage in your industry." },
        { title: "Operations Directors (COO)", desc: "Identification of inefficiencies and design of automations that directly impact the operating margin." },
        { title: "Technology Directors (CTO/CIO)", desc: "Design of secure architectures that comply with local regulations (LFPDPPP) without compromising sensitive data." },
        { title: "Innovation Leaders", desc: "Structured support to scale isolated pilots into cross-functional enterprise solutions." },
      ],
    },
    faq: {
      badge: "FREQUENTLY ASKED QUESTIONS",
      title: "Let's address your questions",
      items: [
        { q: "What does the free Smart Diagnosis Session consist of?", a: "It's a 45-minute session where we analyze your operations, identify 2-3 use cases with immediate potential, and outline a preliminary implementation map with estimated ROI." },
        { q: "What happens after the free diagnosis?", a: "If we find viable use cases, we'll propose a deep consulting project where we'll design the Business Case, the detailed technical architecture, and the implementation roadmap. If you decide to proceed with us for the implementation, the consulting project cost is credited toward your project." },
        { q: "Do you have experience in the Latin American business context?", a: "Absolutely. Unlike generic global solutions, we understand the infrastructure, connectivity challenges, work culture, and data privacy regulations specific to Mexico and Latin America." },
        { q: "How long does the deep consulting process take?", a: "Depending on the organization's complexity, a deep consulting process typically takes 2 to 4 weeks, from information gathering to the delivery of the Business Case and Roadmap." },
      ],
    },
    cta: {
      title: "Eliminate the risk of your AI investment",
      subtitle: "Book your Smart Diagnosis session. If you decide to proceed with the implementation, the consulting cost is credited toward your project.",
      ctaLabel: "Book Diagnosis",
      trustSignals: ["Guaranteed investment policy", "Clear data and ROI", "LatAm experts"],
    },
  },
  "pt-br": {
    hero: {
      badge: "CONSULTORIA ESTRATÉGICA EM IA",
      title: "Projetamos sua rota de adoção rumo à Inteligência Artificial",
      subtitle: "Avaliamos a situação atual da sua organização frente à IA e projetamos uma estratégia de adoção com impacto mensurável e retorno de investimento claro. Especializados no mercado mexicano e latino-americano.",
      bgImageAlt: "Consultoria de IA para empresas na América Latina",
      ctaLabel: "Agendar Diagnóstico Gratuito",
      trustSignals: ["Diagnóstico de 45 min sem custo", "Business Case com ROI", "Conformidade com LFPDPPP"],
    },
    intro: {
      badge: "O primeiro passo",
      title: "Primeiro ouvimos, depois projetamos.",
      p1: "O serviço de consultoria da Sintérgica é o ponto de entrada indispensável antes de qualquer implementação tecnológica. Não impomos soluções pré-fabricadas; realizamos um diagnóstico estruturado para entender a complexidade real da sua operação, seus gargalos e sua cultura organizacional.",
      checklist: [
        "Benchmark setorial de maturidade de IA",
        "Definição de casos de uso priorizados",
        "Alinhado ao contexto normativo e empresarial da LatAm",
      ],
      imageAlt: "Equipe diretiva analisando roadmap de Inteligência Artificial",
    },
    entregables: {
      badge: "ENTREGÁVEIS DA CONSULTORIA",
      title: "Resultados acionáveis, não teoria",
      subtitle: "Nossa consultoria profunda conclui com documentos operacionais prontos para executar e apresentar às diretorias.",
      items: [
        { title: "Mapa de maturidade e processos críticos", description: "Avaliamos sua infraestrutura atual e identificamos os gargalos operacionais com maior potencial de serem resolvidos com Inteligência Artificial." },
        { title: "Business Case e ROI estimado", description: "Definição de casos de uso priorizados (impacto vs. viabilidade) acompanhados de uma projeção financeira formal e métricas de sucesso." },
        { title: "Arquitetura técnica recomendada", description: "Design do núcleo de inteligência: seleção de modelos SLM/LLM, opções de implantação (nuvem privada ou on-premise) e esquema de segurança." },
        { title: "Roadmap de implementação", description: "Roteiro detalhado com fases, custos e prazos. Da prova de conceito inicial até a integração completa com seus sistemas legados." },
      ],
    },
    diagnostic: {
      title: "Sessão de Diagnóstico Inteligente",
      tagline: "45 Minutos Sem Custo · Valor Imediato",
      description: "Analisamos sua operação, identificamos os 2 ou 3 casos de uso com maior potencial de impacto imediato e traçamos um mapa preliminar com o ROI esperado. Além disso, contamos com uma política de investimento garantido:",
      highlight: "se você decidir avançar conosco, o custo do projeto de consultoria profunda é bonificado a favor da sua implementação final",
      ctaLabel: "Agendar minha sessão de 45 minutos",
    },
    audience: {
      badge: "AUDIÊNCIA",
      title: "Liderança para a Transformação",
      subtitle: "Nosso serviço é projetado para os tomadores de decisão que guiam o rumo tecnológico da empresa.",
      items: [
        { title: "Diretores Gerais (C-Level)", desc: "Visão estratégica para transformar a IA de um centro de custos em uma vantagem competitiva mensurável na sua indústria." },
        { title: "Diretores de Operações (COO)", desc: "Identificação de ineficiências e design de automações que impactem diretamente na margem operacional." },
        { title: "Diretores de Tecnologia (CTO/CIO)", desc: "Design de arquiteturas seguras que cumpram com normativas locais (LFPDPPP) sem comprometer dados sensíveis." },
        { title: "Líderes de Inovação", desc: "Acompanhamento estruturado para escalar pilotos isolados em soluções empresariais transversais." },
      ],
    },
    faq: {
      badge: "PERGUNTAS FREQUENTES",
      title: "Vamos resolver suas dúvidas",
      items: [
        { q: "Em que consiste a Sessão de Diagnóstico Inteligente gratuita?", a: "É uma sessão de 45 minutos onde analisamos sua operação, identificamos 2-3 casos de uso com potencial imediato e traçamos um mapa preliminar de implementação com ROI estimado." },
        { q: "O que acontece depois do diagnóstico gratuito?", a: "Se encontrarmos casos de uso viáveis, proporemos um projeto de consultoria profunda onde projetaremos o Business Case, a arquitetura técnica detalhada e o roadmap de implementação. Se você decidir avançar com a implementação conosco, o custo do projeto de consultoria é bonificado a favor do seu projeto." },
        { q: "Vocês têm experiência no contexto empresarial latino-americano?", a: "Totalmente. Ao contrário de soluções genéricas globais, entendemos a infraestrutura, os desafios de conectividade, a cultura de trabalho e as normativas de privacidade de dados específicas do México e da América Latina." },
        { q: "Quanto tempo leva o processo de consultoria profunda?", a: "Dependendo da complexidade da organização, um processo de consultoria profunda geralmente leva de 2 a 4 semanas, desde o levantamento de informações até a entrega do Business Case e Roadmap." },
      ],
    },
    cta: {
      title: "Elimine o risco do seu investimento em Inteligência Artificial",
      subtitle: "Agende sua sessão de Diagnóstico Inteligente. Se decidir avançar com a implementação, o custo da consultoria é creditado ao seu projeto.",
      ctaLabel: "Agendar Diagnóstico",
      trustSignals: ["Política de investimento garantido", "Dados e ROI claros", "Especialistas em LatAm"],
    },
  },
} as const;

const ENTREGABLES_BASE = [
  { icon: Map },
  { icon: Target },
  { icon: Layers },
  { icon: Calendar },
];

const PARA_QUIEN_BASE = [
  { icon: Building2 },
  { icon: TrendingUp },
  { icon: ShieldCheck },
  { icon: Users2 },
];

export function ConsultoriaContent() {
  const locale = useLocale();
  const t = T[locale] ?? T.es;

  const entregRef = useRef<HTMLDivElement>(null);
  const entregInView = useInView(entregRef, { once: true, margin: "-60px" });
  const paraQuienRef = useRef<HTMLDivElement>(null);
  const paraQuienInView = useInView(paraQuienRef, { once: true, margin: "-60px" });
  const diagRef = useRef<HTMLDivElement>(null);
  const diagInView = useInView(diagRef, { once: true, margin: "-60px" });
  const shouldReduce = useReducedMotion();

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <LazyMotion features={domAnimation}>
      <>
        <PageHero
          badge={t.hero.badge}
          title={t.hero.title}
          subtitle={t.hero.subtitle}
          bgImage="/img/corporate-team.jpg"
          bgImageAlt={t.hero.bgImageAlt}
          ctaLabel={t.hero.ctaLabel}
          ctaHref="/diagnostico"
          trustSignals={[...t.hero.trustSignals]}
        />

        {/* Intro con Imagen */}
        <section className="bg-brand-surface dark:bg-brand-midnight py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-brand-accent font-bold text-sm tracking-wider uppercase mb-2 block">{t.intro.badge}</span>
                <h2 className="text-3xl font-proxima font-bold text-brand-midnight dark:text-brand-white mb-6">{t.intro.title}</h2>
                <p className="text-brand-midnight/70 dark:text-brand-white/70 leading-relaxed mb-6">
                  {t.intro.p1}
                </p>
                <ul className="flex flex-col gap-4">
                  {t.intro.checklist.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-brand-accent shrink-0" />
                      <span className="text-brand-midnight/90 dark:text-brand-white/90 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden border border-brand-midnight/10 dark:border-brand-white/10 shadow-2xl group">
                <div className="absolute inset-0 bg-brand-midnight/10 dark:bg-brand-midnight/30 mix-blend-multiply z-10 transition-colors duration-500 group-hover:bg-transparent"></div>
                <Image
                  src="/images/1238.jpg"
                  alt={t.intro.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Entregables */}
        <section className="bg-brand-surface dark:bg-brand-deep py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Decorative glow */}
          <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center opacity-10">
            <div className="h-[500px] w-[500px] rounded-full bg-brand-accent blur-[150px]" />
          </div>

          <div className="mx-auto max-w-6xl relative z-10">
            <SectionHeader
              badge={t.entregables.badge}
              title={t.entregables.title}
              subtitle={t.entregables.subtitle}
              centered
            />
            <div
              ref={entregRef}
              className="mt-16 grid gap-6 sm:grid-cols-2"
            >
              {ENTREGABLES_BASE.map((e, i) => {
                const Icon = e.icon;
                const item = t.entregables.items[i];
                return (
                  <m.div
                    key={item.title}
                    initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                    animate={entregInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: shouldReduce ? 0 : 0.5, delay: shouldReduce ? 0 : i * 0.1 }}
                    className="group flex flex-col sm:flex-row gap-5 rounded-2xl border border-brand-midnight/5 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep/80 backdrop-blur-sm p-8 transition-all hover:border-brand-accent/30 hover:bg-brand-white dark:hover:bg-brand-midnight"
                  >
                    <m.div
                      whileHover={shouldReduce ? {} : { scale: 1.1, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-brand-accent/10 will-change-transform"
                    >
                      <Icon className="h-6 w-6 text-brand-accent" />
                    </m.div>
                    <div>
                      <h3 className="text-[18px] font-proxima font-semibold text-brand-midnight dark:text-brand-white mb-2">{item.title}</h3>
                      <p className="text-[14px] leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">{item.description}</p>
                    </div>
                  </m.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Diagnostic Highlight */}
        <section className="bg-brand-surface dark:bg-brand-midnight py-20 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <m.div
              ref={diagRef}
              initial={shouldReduce ? false : { opacity: 0, y: 20 }}
              animate={diagInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: shouldReduce ? 0 : 0.6 }}
              className="relative overflow-hidden rounded-3xl border border-brand-accent/30 bg-brand-surface dark:bg-brand-deep p-10 text-center sm:p-16 shadow-[0_0_50px_-12px_rgba(0,110,250,0.15)]"
            >
              <div className="pointer-events-none absolute right-0 top-0 opacity-20">
                <div className="h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-accent blur-[80px]" />
              </div>

              <m.div
                whileHover={shouldReduce ? {} : { scale: 1.1, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-brand-accent/10 will-change-transform"
              >
                <Sparkles className="h-10 w-10 text-brand-accent" />
              </m.div>
              <h2 className="font-proxima text-3xl font-bold text-brand-midnight dark:text-brand-white sm:text-4xl">
                {t.diagnostic.title}
              </h2>
              <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-brand-accent">
                {t.diagnostic.tagline}
              </p>
              <p className="mx-auto mt-6 max-w-2xl text-[16px] leading-relaxed text-brand-midnight/70 dark:text-brand-white/70">
                {t.diagnostic.description} <strong className="text-brand-midnight dark:text-brand-white">{t.diagnostic.highlight}</strong>.
              </p>
              <Link
                href="/diagnostico"
                className="mt-10 inline-flex h-14 items-center gap-3 rounded-xl bg-brand-accent px-8 text-[15px] font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-brand-accent/90 hover:shadow-brand-accent/25"
              >
                {t.diagnostic.ctaLabel}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </m.div>
          </div>
        </section>

        {/* Para quién */}
        <section className="bg-brand-surface dark:bg-brand-deep py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              badge={t.audience.badge}
              title={t.audience.title}
              subtitle={t.audience.subtitle}
              centered
            />
            <div
              ref={paraQuienRef}
              className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
            >
              {PARA_QUIEN_BASE.map((pq, i) => {
                const Icon = pq.icon;
                const item = t.audience.items[i];
                return (
                  <m.div
                    key={item.title}
                    initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                    animate={paraQuienInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: shouldReduce ? 0 : 0.5, delay: shouldReduce ? 0 : i * 0.08 }}
                    className="rounded-2xl border border-brand-midnight/5 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-midnight p-8 text-center transition-colors hover:bg-brand-white dark:hover:bg-brand-deep"
                  >
                    <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-white dark:bg-brand-midnight/5">
                      <Icon className="h-6 w-6 text-brand-midnight/80 dark:text-brand-white/80" />
                    </div>
                    <h3 className="text-[16px] font-proxima font-semibold text-brand-midnight dark:text-brand-white mb-3">{item.title}</h3>
                    <p className="text-[13px] leading-relaxed text-brand-midnight/50 dark:text-brand-white/50">{item.desc}</p>
                  </m.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-brand-surface dark:bg-brand-midnight py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <SectionHeader
              badge={t.faq.badge}
              title={t.faq.title}
              centered
            />
            <div className="mt-12 flex flex-col gap-4">
              {t.faq.items.map((faq, i) => (
                <div
                  key={i}
                  className={`border ${openFaq === i ? 'border-brand-accent/30 bg-brand-accent/5' : 'border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep'} rounded-2xl overflow-hidden transition-colors`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between p-6 text-left"
                  >
                    <span className="font-bold text-brand-midnight dark:text-brand-white text-[16px] pr-4">{faq.q}</span>
                    <ChevronDown className={`h-5 w-5 shrink-0 text-brand-midnight/50 dark:text-brand-white/50 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-brand-accent' : ''}`} />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                  >
                    <p className="p-6 pt-0 text-[14px] leading-relaxed text-brand-midnight/70 dark:text-brand-white/70">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title={t.cta.title}
          subtitle={t.cta.subtitle}
          ctaLabel={t.cta.ctaLabel}
          ctaHref="/diagnostico"
          trustSignals={[...t.cta.trustSignals]}
        />
      </>
    </LazyMotion>
  );
}
