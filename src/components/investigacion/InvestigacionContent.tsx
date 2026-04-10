"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { Network, Shield, AlertTriangle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import { useLocale } from "@/i18n/DictionaryProvider";

const T = {
  es: {
    heroBadge: "INVESTIGACIÓN",
    heroTitle: "Laboratorio Sintérgica: Investigación Aplicada en IA para LATAM",
    heroSubtitle: "Desarrollo, evaluación, especialización y mejora continua de modelos de IA. I+D con contexto latinoamericano para resolver problemas reales en entornos regulados.",
    heroBgImageAlt: "Laboratorio de IA Sintérgica",
    area0Title: "Lattice Na'at",
    area0Desc: "Modelo de IA de mayor escala desarrollado en LATAM con 1 billón de parámetros. Diseñado para contexto normativo de México y LATAM.",
    area0Stat: "1T",
    area0StatLabel: "parámetros",
    area1Title: "Gobernanza de IA",
    area1Desc: "Marco de gobernanza integrado desde la arquitectura. Acceso mínimo necesario, trazabilidad completa y validación humana.",
    area1Stat: "5",
    area1StatLabel: "principios de diseño",
    area2Title: "Sesgo WEIRD en IA",
    area2Desc: "Investigación sobre cómo los modelos de IA globales fallan en contextos no occidentales y por qué México necesita su propio modelo.",
    area2Stat: "96%",
    area2StatLabel: "datos de entrenamiento globales son WEIRD",
    learnMore: "Conocer más",
    blogTitle: "Blog",
    blogDesc: "Artículos sobre IA, regulación y transformación digital",
    pressTitle: "Prensa",
    pressDesc: "Comunicados, kit de prensa y menciones en medios",
    ctaBadge: "INVESTIGACIÓN",
    ctaTitle: "Construyendo la IA del futuro para LATAM",
    ctaSubtitle: "Agenda una conversación con nuestro equipo de investigación para conocer nuestros avances y oportunidades de colaboración.",
    ctaCtaLabel: "Agendar conversación",
  },
  en: {
    heroBadge: "RESEARCH",
    heroTitle: "Sintérgica Lab: Applied AI Research for LATAM",
    heroSubtitle: "Development, evaluation, specialization, and continuous improvement of AI models. R&D with Latin American context to solve real problems in regulated environments.",
    heroBgImageAlt: "Sintérgica AI Laboratory",
    area0Title: "Lattice Na'at",
    area0Desc: "The largest-scale AI model developed in LATAM with 1 trillion parameters. Designed for the regulatory context of Mexico and LATAM.",
    area0Stat: "1T",
    area0StatLabel: "parameters",
    area1Title: "AI Governance",
    area1Desc: "Governance framework integrated from the architecture level. Least-privilege access, full traceability, and human-in-the-loop validation.",
    area1Stat: "5",
    area1StatLabel: "design principles",
    area2Title: "WEIRD Bias in AI",
    area2Desc: "Research on how global AI models fail in non-Western contexts and why Mexico needs its own model.",
    area2Stat: "96%",
    area2StatLabel: "of global training data is WEIRD",
    learnMore: "Learn more",
    blogTitle: "Blog",
    blogDesc: "Articles on AI, regulation, and digital transformation",
    pressTitle: "Press",
    pressDesc: "Press releases, media kit, and media mentions",
    ctaBadge: "RESEARCH",
    ctaTitle: "Building the AI of the future for LATAM",
    ctaSubtitle: "Schedule a conversation with our research team to learn about our progress and collaboration opportunities.",
    ctaCtaLabel: "Schedule a conversation",
  },
  "pt-br": {
    heroBadge: "PESQUISA",
    heroTitle: "Laboratório Sintérgica: Pesquisa Aplicada em IA para LATAM",
    heroSubtitle: "Desenvolvimento, avaliação, especialização e melhoria contínua de modelos de IA. P&D com contexto latino-americano para resolver problemas reais em ambientes regulados.",
    heroBgImageAlt: "Laboratório de IA Sintérgica",
    area0Title: "Lattice Na'at",
    area0Desc: "O modelo de IA de maior escala desenvolvido na LATAM com 1 trilhão de parâmetros. Projetado para o contexto regulatório do México e LATAM.",
    area0Stat: "1T",
    area0StatLabel: "parâmetros",
    area1Title: "Governança de IA",
    area1Desc: "Framework de governança integrado desde a arquitetura. Acesso mínimo necessário, rastreabilidade completa e validação humana.",
    area1Stat: "5",
    area1StatLabel: "princípios de design",
    area2Title: "Viés WEIRD em IA",
    area2Desc: "Pesquisa sobre como os modelos de IA globais falham em contextos não ocidentais e por que o México precisa de seu próprio modelo.",
    area2Stat: "96%",
    area2StatLabel: "dos dados de treinamento globais são WEIRD",
    learnMore: "Saiba mais",
    blogTitle: "Blog",
    blogDesc: "Artigos sobre IA, regulação e transformação digital",
    pressTitle: "Imprensa",
    pressDesc: "Comunicados, kit de imprensa e menções na mídia",
    ctaBadge: "PESQUISA",
    ctaTitle: "Construindo a IA do futuro para a LATAM",
    ctaSubtitle: "Agende uma conversa com nossa equipe de pesquisa para conhecer nossos avanços e oportunidades de colaboração.",
    ctaCtaLabel: "Agendar conversa",
  },
} as const;

export function InvestigacionContent() {
  const locale = useLocale();
  const t = T[locale] ?? T.es;

  const areasRef = useRef<HTMLDivElement>(null);
  const areasInView = useInView(areasRef, { once: true, margin: "-60px" });
  const shouldReduce = useReducedMotion();

  const AREAS = [
    {
      icon: Network,
      title: t.area0Title,
      description: t.area0Desc,
      href: "/investigacion/lattice-naat",
      stat: t.area0Stat,
      statLabel: t.area0StatLabel,
    },
    {
      icon: Shield,
      title: t.area1Title,
      description: t.area1Desc,
      href: "/investigacion/gobernanza",
      stat: t.area1Stat,
      statLabel: t.area1StatLabel,
    },
    {
      icon: AlertTriangle,
      title: t.area2Title,
      description: t.area2Desc,
      href: "/investigacion/sesgo-weird",
      stat: t.area2Stat,
      statLabel: t.area2StatLabel,
    },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <>
        <PageHero
          badge={t.heroBadge}
          badgeColor="success-600"
          title={t.heroTitle}
          subtitle={t.heroSubtitle}
          
          bgImage="/images/Industrial-Logistica/factory-workshop-interior-machines-glass-production-background.jpg"
          bgImageAlt={t.heroBgImageAlt}
        />

        {/* Areas Grid */}
        <section className="bg-brand-surface dark:bg-brand-midnight py-20 px-4 sm:px-6 lg:px-8">
          <div ref={areasRef} className="mx-auto max-w-5xl grid gap-6 md:grid-cols-3">
            {AREAS.map((area, i) => {
              const Icon = area.icon;
              return (
                <m.div
                  key={area.title}
                  initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                  animate={areasInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.1 + i * 0.12 }}
                  className="group flex flex-col rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep p-7 transition-all hover:-translate-y-1 hover:border-brand-accent/25 hover:shadow-lg hover:shadow-brand-accent/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/10">
                    <Icon className="h-6 w-6 text-brand-accent" />
                  </div>
                  <div className="mt-4 flex items-baseline gap-2">
                    <span className="font-proxima text-2xl font-extrabold text-brand-accent">{area.stat}</span>
                    <span className="text-xs text-brand-midnight/40 dark:text-brand-white/40">{area.statLabel}</span>
                  </div>
                  <h3 className="mt-2 text-base font-proxima font-semibold text-brand-midnight dark:text-brand-white">{area.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-midnight/55 dark:text-brand-white/55">
                    {area.description}
                  </p>
                  <Link
                    href={area.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent transition-colors group-hover:text-brand-accent-light"
                  >
                    {t.learnMore}
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </m.div>
              );
            })}
          </div>
        </section>

        {/* Blog + Prensa links */}
        <section className="bg-brand-surface dark:bg-brand-deep py-16 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/recursos/blog"
              className="rounded-xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-midnight px-6 py-4 text-center transition-all hover:border-brand-accent/30 hover:-translate-y-0.5"
            >
              <p className="text-sm font-bold text-brand-midnight dark:text-brand-white">{t.blogTitle}</p>
              <p className="mt-1 text-xs text-brand-midnight/50 dark:text-brand-white/50">
                {t.blogDesc}
              </p>
            </Link>
            <Link
              href="/recursos/prensa"
              className="rounded-xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-midnight px-6 py-4 text-center transition-all hover:border-brand-accent/30 hover:-translate-y-0.5"
            >
              <p className="text-sm font-bold text-brand-midnight dark:text-brand-white">{t.pressTitle}</p>
              <p className="mt-1 text-xs text-brand-midnight/50 dark:text-brand-white/50">
                {t.pressDesc}
              </p>
            </Link>
          </div>
        </section>

        <CTASection
          badge={t.ctaBadge}
          title={t.ctaTitle}
          subtitle={t.ctaSubtitle}
          ctaLabel={t.ctaCtaLabel}
          ctaHref="https://sales.sintergica.ai/widget/booking/vh6cQRURUU1nU5nslpu4"
        />
      </>
    </LazyMotion>
  );
}
