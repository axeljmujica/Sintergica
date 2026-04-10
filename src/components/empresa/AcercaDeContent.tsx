"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import {
  FlaskConical,
  Briefcase,
  Code,
  Shield,
  Settings,
  Globe,
  Truck,
  Eye,
  Handshake,
} from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTASection } from "@/components/shared/CTASection";
import { useLocale } from "@/i18n/DictionaryProvider";

const T = {
  es: {
    hero: {
      badge: "EMPRESA",
      title: "Construyendo la Infraestructura de IA de América Latina",
      subtitle: "Sintérgica AI es un laboratorio mexicano de inteligencia artificial fundado con la misión de llevar IA privada, especializada y gobernable a organizaciones y gobiernos de México y LATAM.",
      bgImageAlt: "Equipo Sintérgica AI construyendo IA de México",
    },
    mission: {
      label: "Misión",
      text: "Impulsar la productividad, eficiencia y toma de decisiones en organizaciones y gobiernos de México y LATAM mediante IA privada, especializada y gobernable.",
    },
    vision: {
      label: "Visión",
      text: "Convertir a Lattice en la infraestructura cognitiva estratégica de México y Latinoamérica.",
    },
    roles: {
      badge: "QUIÉNES SOMOS",
      title: "Tres roles, una misión",
      items: [
        { title: "Laboratorio de investigación aplicada", description: "Desarrollo, evaluación y mejora continua de modelos de IA con contexto normativo de México y LATAM." },
        { title: "Consultora de IA y transformación digital", description: "Estrategia, diagnóstico, implementación guante blanco y acompañamiento continuo para organizaciones y gobiernos." },
        { title: "Constructora de software empresarial", description: "Plataformas propias (Lattice, Nahui, SalesHub) diseñadas para resolver problemas reales en sectores regulados." },
      ],
    },
    principles: {
      badge: "PRINCIPIOS",
      title: "Lo que nos guía",
      items: [
        { title: "Soberanía de datos", description: "Tus datos nunca salen de tu infraestructura. Control total." },
        { title: "Gobernanza por diseño", description: "Controles integrados desde la arquitectura, no como complemento." },
        { title: "Contexto primero", description: "IA entrenada para entender la normativa y cultura de LATAM." },
        { title: "Entrega real", description: "No vendemos demos. Entregamos sistemas operativos funcionando." },
        { title: "Responsabilidad", description: "Nos medimos por el impacto real en tu operación, no por features." },
        { title: "Transparencia operacional", description: "Cada decisión de la IA es trazable, explicable y auditable." },
      ],
    },
    cta: {
      title: "Hablemos",
      subtitle: "Descubre cómo Sintérgica AI puede transformar tu operación con IA privada, especializada y gobernable.",
      ctaLabel: "Contactar",
    },
  },
  en: {
    hero: {
      badge: "COMPANY",
      title: "Building Latin America's AI Infrastructure",
      subtitle: "Sintérgica AI is a Mexican artificial intelligence lab founded with the mission of bringing private, specialized, and governable AI to organizations and governments across Mexico and LATAM.",
      bgImageAlt: "Sintérgica AI team building Mexico's AI",
    },
    mission: {
      label: "Mission",
      text: "Drive productivity, efficiency, and decision-making in organizations and governments across Mexico and LATAM through private, specialized, and governable AI.",
    },
    vision: {
      label: "Vision",
      text: "Make Lattice the strategic cognitive infrastructure of Mexico and Latin America.",
    },
    roles: {
      badge: "WHO WE ARE",
      title: "Three roles, one mission",
      items: [
        { title: "Applied research lab", description: "Development, evaluation, and continuous improvement of AI models with regulatory context from Mexico and LATAM." },
        { title: "AI & digital transformation consultancy", description: "Strategy, diagnostics, white-glove implementation, and continuous support for organizations and governments." },
        { title: "Enterprise software builder", description: "Proprietary platforms (Lattice, Nahui, SalesHub) designed to solve real problems in regulated sectors." },
      ],
    },
    principles: {
      badge: "PRINCIPLES",
      title: "What guides us",
      items: [
        { title: "Data sovereignty", description: "Your data never leaves your infrastructure. Total control." },
        { title: "Governance by design", description: "Controls built into the architecture, not as an add-on." },
        { title: "Context first", description: "AI trained to understand LATAM regulations and culture." },
        { title: "Real delivery", description: "We don't sell demos. We deliver working operational systems." },
        { title: "Accountability", description: "We measure ourselves by real impact on your operations, not features." },
        { title: "Operational transparency", description: "Every AI decision is traceable, explainable, and auditable." },
      ],
    },
    cta: {
      title: "Let's talk",
      subtitle: "Discover how Sintérgica AI can transform your operations with private, specialized, and governable AI.",
      ctaLabel: "Contact us",
    },
  },
  "pt-br": {
    hero: {
      badge: "EMPRESA",
      title: "Construindo a Infraestrutura de IA da América Latina",
      subtitle: "A Sintérgica AI é um laboratório mexicano de inteligência artificial fundado com a missão de levar IA privada, especializada e governável a organizações e governos do México e da LATAM.",
      bgImageAlt: "Equipe Sintérgica AI construindo a IA do México",
    },
    mission: {
      label: "Missão",
      text: "Impulsionar a produtividade, eficiência e tomada de decisões em organizações e governos do México e LATAM por meio de IA privada, especializada e governável.",
    },
    vision: {
      label: "Visão",
      text: "Transformar o Lattice na infraestrutura cognitiva estratégica do México e da América Latina.",
    },
    roles: {
      badge: "QUEM SOMOS",
      title: "Três papéis, uma missão",
      items: [
        { title: "Laboratório de pesquisa aplicada", description: "Desenvolvimento, avaliação e melhoria contínua de modelos de IA com contexto regulatório do México e LATAM." },
        { title: "Consultoria de IA e transformação digital", description: "Estratégia, diagnóstico, implementação personalizada e acompanhamento contínuo para organizações e governos." },
        { title: "Construtora de software empresarial", description: "Plataformas próprias (Lattice, Nahui, SalesHub) projetadas para resolver problemas reais em setores regulados." },
      ],
    },
    principles: {
      badge: "PRINCÍPIOS",
      title: "O que nos guia",
      items: [
        { title: "Soberania de dados", description: "Seus dados nunca saem da sua infraestrutura. Controle total." },
        { title: "Governança por design", description: "Controles integrados desde a arquitetura, não como complemento." },
        { title: "Contexto primeiro", description: "IA treinada para entender a normativa e cultura da LATAM." },
        { title: "Entrega real", description: "Não vendemos demos. Entregamos sistemas operacionais funcionando." },
        { title: "Responsabilidade", description: "Nos medimos pelo impacto real na sua operação, não por features." },
        { title: "Transparência operacional", description: "Cada decisão da IA é rastreável, explicável e auditável." },
      ],
    },
    cta: {
      title: "Vamos conversar",
      subtitle: "Descubra como a Sintérgica AI pode transformar sua operação com IA privada, especializada e governável.",
      ctaLabel: "Entrar em contato",
    },
  },
} as const;

const ROLE_ICONS = [FlaskConical, Briefcase, Code] as const;
const PRINCIPLE_ICONS = [Shield, Settings, Globe, Truck, Handshake, Eye] as const;

export function AcercaDeContent() {
  const locale = useLocale();
  const t = T[locale] ?? T.es;

  const rolesRef = useRef<HTMLDivElement>(null);
  const rolesInView = useInView(rolesRef, { once: true, margin: "-60px" });
  const princRef = useRef<HTMLDivElement>(null);
  const princInView = useInView(princRef, { once: true, margin: "-60px" });
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
        />

      {/* Mission & Vision */}
      <section className="bg-brand-surface dark:bg-brand-midnight py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-accent mb-3">
              {t.mission.label}
            </p>
            <p className="text-brand-midnight/70 dark:text-brand-white/70 leading-relaxed">
              {t.mission.text}
            </p>
          </div>
          <div className="rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep p-8">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-accent mb-3">
              {t.vision.label}
            </p>
            <p className="text-brand-midnight/70 dark:text-brand-white/70 leading-relaxed">
              {t.vision.text}
            </p>
          </div>
        </div>
      </section>

      {/* 3 Roles */}
      <section className="bg-brand-surface dark:bg-brand-deep py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeader
            badge={t.roles.badge}
            title={t.roles.title}
            centered
          />
          <div ref={rolesRef} className="mt-12 grid gap-6 md:grid-cols-3">
            {t.roles.items.map((role, i) => {
              const Icon = ROLE_ICONS[i];
              return (
                <m.div
                  key={role.title}
                  initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                  animate={rolesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.1 + i * 0.1 }}
                  className="rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-midnight p-7 text-center"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/10">
                    <Icon className="h-6 w-6 text-brand-accent" />
                  </div>
                  <h3 className="mt-4 text-base font-proxima font-semibold text-brand-midnight dark:text-brand-white">
                    {role.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-midnight/55 dark:text-brand-white/55">
                    {role.description}
                  </p>
                </m.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-brand-surface dark:bg-brand-midnight py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            badge={t.principles.badge}
            title={t.principles.title}
            centered
          />
          <div ref={princRef} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {t.principles.items.map((p, i) => {
              const Icon = PRINCIPLE_ICONS[i];
              return (
                <m.div
                  key={p.title}
                  initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                  animate={princInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: shouldReduce ? 0 : 0.4, delay: 0.05 + i * 0.06 }}
                  className="flex gap-4 rounded-xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep p-5"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-accent/10">
                    <Icon className="h-5 w-5 text-brand-accent" />
                  </div>
                  <div>
                    <h3 className="text-sm font-proxima font-semibold text-brand-midnight dark:text-brand-white">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-brand-midnight/50 dark:text-brand-white/50">
                      {p.description}
                    </p>
                  </div>
                </m.div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title={t.cta.title}
        subtitle={t.cta.subtitle}
        ctaLabel={t.cta.ctaLabel}
        ctaHref="https://sales.sintergica.ai/widget/booking/vh6cQRURUU1nU5nslpu4"
      />
      </>
    </LazyMotion>
  );
}
