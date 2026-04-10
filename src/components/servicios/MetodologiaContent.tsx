"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { ShieldCheck, Microscope, Layers, BarChart3, Users2 } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { TimelineSteps, type TimelineStep } from "@/components/shared/TimelineSteps";
import { CTASection } from "@/components/shared/CTASection";
import { useLocale } from "@/i18n/DictionaryProvider";

const T = {
  es: {
    hero: {
      badge: "METODOLOGÍA",
      title: "Metodología de 5 Fases para IA Responsable",
      subtitle: "Proceso estructurado y replicable que asegura implementaciones exitosas con gobernanza desde el día uno.",
      bgImageAlt: "Visualización de metodología de implementación de IA",
      trustSignals: ["Entregables concretos", "Gobernanza por diseño", "ROI medible"],
    },
    principles: {
      badge: "PRINCIPIOS",
      title: "IA que funciona porque está bien construida",
      subtitle: "Cinco principios no negociables que guían cada implementación de Sintérgica AI.",
      items: [
        { title: "Gobernanza antes que código", description: "Definimos roles, permisos y políticas de uso antes de escribir una sola línea de integración. La IA sin gobernanza es riesgo sin control." },
        { title: "Diagnóstico basado en evidencia", description: "No asumimos qué procesos automatizar. Mapeamos, medimos y priorizamos con base en datos reales de tu operación." },
        { title: "Especialización vertical", description: "Cada implementación incluye calibración de Lattice Séeb para tu industria. El modelo aprende tu dominio, no el nuestro." },
        { title: "ROI medible desde el día uno", description: "Definimos KPIs concretos en la Fase 1. No entregamos IA — entregamos resultados. Con métricas de impacto documentadas." },
        { title: "Adopción como entregable", description: "La capacitación no es opcional ni un afterthought. Es una fase del proceso con objetivos, formatos y métricas propias." },
      ],
    },
    phases: {
      badge: "PROCESO",
      title: "De diagnóstico a operación",
      subtitle: "Cada fase tiene entregables concretos, métricas de éxito y puntos de validación con el cliente.",
      steps: [
        { label: "Fase 1", title: "Diagnóstico y priorización", description: "Mapa de procesos, fuentes de datos, matriz impacto x riesgo x tiempo. Identificamos los casos de uso con mayor potencial de ROI." },
        { label: "Fase 2", title: "Diseño de gobernanza", description: "Roles, permisos, políticas de uso, estándares de calidad. La gobernanza se define antes de la implementación, no después." },
        { label: "Fase 3", title: "Integración y habilitación", description: "Conectores a sistemas existentes, carga documental, configuración de Agents con conocimiento específico del dominio." },
        { label: "Fase 4", title: "Especialización Lattice Séeb", description: "Ajuste al dominio específico de tu industria. Calibración con datos reales, pruebas con casos de producción y validación de resultados." },
        { label: "Fase 5", title: "Adopción y operación", description: "Capacitación por audiencia, definición de KPIs, monitoreo de métricas, mejora continua y plan de expansión a nuevas áreas." },
      ],
    },
    cta: {
      title: "Descubre cómo aplicamos esta metodología en tu industria",
      subtitle: "Agenda una conversación para conocer las 5 fases y cómo se aplican a tu contexto operativo.",
      ctaLabel: "Agendar conversación",
      trustSignals: ["Gobernanza desde el día uno", "Proceso replicable", "Entregables concretos"],
    },
  },
  en: {
    hero: {
      badge: "METHODOLOGY",
      title: "5-Phase Methodology for Responsible AI",
      subtitle: "A structured and replicable process that ensures successful implementations with governance from day one.",
      bgImageAlt: "AI implementation methodology visualization",
      trustSignals: ["Concrete deliverables", "Governance by design", "Measurable ROI"],
    },
    principles: {
      badge: "PRINCIPLES",
      title: "AI that works because it's well built",
      subtitle: "Five non-negotiable principles that guide every Sintérgica AI implementation.",
      items: [
        { title: "Governance before code", description: "We define roles, permissions, and usage policies before writing a single line of integration. AI without governance is risk without control." },
        { title: "Evidence-based diagnosis", description: "We don't assume which processes to automate. We map, measure, and prioritize based on real data from your operations." },
        { title: "Vertical specialization", description: "Every implementation includes Lattice Séeb calibration for your industry. The model learns your domain, not ours." },
        { title: "Measurable ROI from day one", description: "We define concrete KPIs in Phase 1. We don't deliver AI — we deliver results. With documented impact metrics." },
        { title: "Adoption as a deliverable", description: "Training is not optional or an afterthought. It's a process phase with its own objectives, formats, and metrics." },
      ],
    },
    phases: {
      badge: "PROCESS",
      title: "From diagnosis to operation",
      subtitle: "Each phase has concrete deliverables, success metrics, and client validation checkpoints.",
      steps: [
        { label: "Phase 1", title: "Diagnosis and prioritization", description: "Process mapping, data sources, impact x risk x time matrix. We identify the use cases with the highest ROI potential." },
        { label: "Phase 2", title: "Governance design", description: "Roles, permissions, usage policies, quality standards. Governance is defined before implementation, not after." },
        { label: "Phase 3", title: "Integration and enablement", description: "Connectors to existing systems, document loading, Agent configuration with domain-specific knowledge." },
        { label: "Phase 4", title: "Lattice Séeb specialization", description: "Tuning to your industry's specific domain. Calibration with real data, production case testing, and results validation." },
        { label: "Phase 5", title: "Adoption and operation", description: "Audience-specific training, KPI definition, metrics monitoring, continuous improvement, and expansion plan to new areas." },
      ],
    },
    cta: {
      title: "Discover how we apply this methodology in your industry",
      subtitle: "Schedule a conversation to learn about the 5 phases and how they apply to your operational context.",
      ctaLabel: "Schedule conversation",
      trustSignals: ["Governance from day one", "Replicable process", "Concrete deliverables"],
    },
  },
  "pt-br": {
    hero: {
      badge: "METODOLOGIA",
      title: "Metodologia de 5 Fases para IA Responsável",
      subtitle: "Processo estruturado e replicável que garante implementações bem-sucedidas com governança desde o primeiro dia.",
      bgImageAlt: "Visualização da metodologia de implementação de IA",
      trustSignals: ["Entregáveis concretos", "Governança por design", "ROI mensurável"],
    },
    principles: {
      badge: "PRINCÍPIOS",
      title: "IA que funciona porque é bem construída",
      subtitle: "Cinco princípios inegociáveis que guiam cada implementação da Sintérgica AI.",
      items: [
        { title: "Governança antes do código", description: "Definimos papéis, permissões e políticas de uso antes de escrever uma única linha de integração. IA sem governança é risco sem controle." },
        { title: "Diagnóstico baseado em evidências", description: "Não assumimos quais processos automatizar. Mapeamos, medimos e priorizamos com base em dados reais da sua operação." },
        { title: "Especialização vertical", description: "Cada implementação inclui calibração do Lattice Séeb para sua indústria. O modelo aprende seu domínio, não o nosso." },
        { title: "ROI mensurável desde o primeiro dia", description: "Definimos KPIs concretos na Fase 1. Não entregamos IA — entregamos resultados. Com métricas de impacto documentadas." },
        { title: "Adoção como entregável", description: "A capacitação não é opcional nem um afterthought. É uma fase do processo com objetivos, formatos e métricas próprias." },
      ],
    },
    phases: {
      badge: "PROCESSO",
      title: "Do diagnóstico à operação",
      subtitle: "Cada fase tem entregáveis concretos, métricas de sucesso e pontos de validação com o cliente.",
      steps: [
        { label: "Fase 1", title: "Diagnóstico e priorização", description: "Mapa de processos, fontes de dados, matriz impacto x risco x tempo. Identificamos os casos de uso com maior potencial de ROI." },
        { label: "Fase 2", title: "Design de governança", description: "Papéis, permissões, políticas de uso, padrões de qualidade. A governança é definida antes da implementação, não depois." },
        { label: "Fase 3", title: "Integração e habilitação", description: "Conectores a sistemas existentes, carga documental, configuração de Agents com conhecimento específico do domínio." },
        { label: "Fase 4", title: "Especialização Lattice Séeb", description: "Ajuste ao domínio específico da sua indústria. Calibração com dados reais, testes com casos de produção e validação de resultados." },
        { label: "Fase 5", title: "Adoção e operação", description: "Capacitação por audiência, definição de KPIs, monitoramento de métricas, melhoria contínua e plano de expansão para novas áreas." },
      ],
    },
    cta: {
      title: "Descubra como aplicamos esta metodologia na sua indústria",
      subtitle: "Agende uma conversa para conhecer as 5 fases e como se aplicam ao seu contexto operacional.",
      ctaLabel: "Agendar conversa",
      trustSignals: ["Governança desde o primeiro dia", "Processo replicável", "Entregáveis concretos"],
    },
  },
} as const;

const PRINCIPIOS_BASE = [
  { icon: ShieldCheck },
  { icon: Microscope },
  { icon: Layers },
  { icon: BarChart3 },
  { icon: Users2 },
];

export function MetodologiaContent() {
  const locale = useLocale();
  const t = T[locale] ?? T.es;

  const principiosRef = useRef<HTMLDivElement>(null);
  const principiosInView = useInView(principiosRef, { once: true, margin: "-60px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <>
        <PageHero
          badge={t.hero.badge}
          title={t.hero.title}
          subtitle={t.hero.subtitle}
          bgImage="/images/Industrial-Logistica/factory-workshop-interior-machines-glass-production-background.jpg"
          bgImageAlt={t.hero.bgImageAlt}
          trustSignals={[...t.hero.trustSignals]}
        />

        {/* Principles */}
        <section className="bg-brand-surface dark:bg-brand-deep py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              badge={t.principles.badge}
              title={t.principles.title}
              subtitle={t.principles.subtitle}
              centered
            />
            <div
              ref={principiosRef}
              className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {PRINCIPIOS_BASE.map((p, i) => {
                const Icon = p.icon;
                const item = t.principles.items[i];
                return (
                  <m.div
                    key={item.title}
                    initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                    animate={principiosInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: shouldReduce ? 0 : 0.5, delay: shouldReduce ? 0 : i * 0.08 }}
                    className="group rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-midnight p-7 transition-all hover:border-brand-accent/25"
                  >
                    <m.div
                      whileHover={shouldReduce ? {} : { scale: 1.1, rotate: -5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-accent/10 will-change-transform"
                    >
                      <Icon className="h-5 w-5 text-brand-accent" />
                    </m.div>
                    <h3 className="text-base font-proxima font-semibold text-brand-midnight dark:text-brand-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-midnight/55 dark:text-brand-white/55">
                      {item.description}
                    </p>
                  </m.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5 Phases Timeline */}
        <section className="bg-brand-surface dark:bg-brand-midnight py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <SectionHeader
              badge={t.phases.badge}
              title={t.phases.title}
              subtitle={t.phases.subtitle}
              centered
            />
            <div className="mt-14">
              <TimelineSteps steps={t.phases.steps as unknown as TimelineStep[]} />
            </div>
          </div>
        </section>

        <CTASection
          title={t.cta.title}
          subtitle={t.cta.subtitle}
          ctaLabel={t.cta.ctaLabel}
          ctaHref="https://sales.sintergica.ai/widget/booking/vh6cQRURUU1nU5nslpu4"
          trustSignals={[...t.cta.trustSignals]}
        />
      </>
    </LazyMotion>
  );
}
