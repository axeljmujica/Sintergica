"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { Scale, Landmark, Ship, Zap, HeartPulse, Building2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { SEEB_DEFAULT } from "@/lib/lattice-seeb-i18n";

const c = SEEB_DEFAULT.models;

interface ModelStyle {
  icon: LucideIcon;
  border: string;
  topBar: string;
  iconBg: string;
  iconColor: string;
  badgeBg: string;
  badgeText: string;
  numColor: string;
  image: string;
  imageAlt: string;
}

const MODEL_STYLES: Record<string, ModelStyle> = {
  legal: {
    icon: Scale,
    border: "border-violet-500/25",
    topBar: "bg-violet-500",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-600 dark:text-violet-400",
    badgeBg: "bg-violet-500/10",
    badgeText: "text-violet-700 dark:text-violet-300",
    numColor: "text-violet-600 dark:text-violet-400",
    image: "/images/Negocios-Oficina/hourglass-dark-color-background.jpg",
    imageAlt: "Oficina legal profesional con ambiente corporativo",
  },
  gobierno: {
    icon: Landmark,
    border: "border-sky-500/25",
    topBar: "bg-sky-500",
    iconBg: "bg-sky-500/10",
    iconColor: "text-sky-600 dark:text-sky-400",
    badgeBg: "bg-sky-500/10",
    badgeText: "text-sky-700 dark:text-sky-300",
    numColor: "text-sky-600 dark:text-sky-400",
    image: "/images/Negocios-Oficina/modern-office-corporate-building-low-angle-view-skyscrapers-city-singapore-panoramic-perspective-view-business-concept-success-industry-tech-architecture.jpg",
    imageAlt: "Edificio gubernamental institucional",
  },
  logistica: {
    icon: Ship,
    border: "border-amber-500/25",
    topBar: "bg-amber-500",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-600 dark:text-amber-400",
    badgeBg: "bg-amber-500/10",
    badgeText: "text-amber-700 dark:text-amber-300",
    numColor: "text-amber-600 dark:text-amber-400",
    image: "/images/Industrial-Logistica/shipping-container-stack-yard-night-light-trails-industrial-crane-motion-blur.jpg",
    imageAlt: "Operaciones logísticas y cadena de suministro",
  },
  energia: {
    icon: Zap,
    border: "border-yellow-500/25",
    topBar: "bg-yellow-500",
    iconBg: "bg-yellow-500/10",
    iconColor: "text-yellow-600 dark:text-yellow-400",
    badgeBg: "bg-yellow-500/10",
    badgeText: "text-yellow-700 dark:text-yellow-300",
    numColor: "text-yellow-600 dark:text-yellow-400",
    image: "/images/Naturaleza-Energia/beautiful-milky-way-night-sky.jpg",
    imageAlt: "Infraestructura energética y sector eléctrico",
  },
  salud: {
    icon: HeartPulse,
    border: "border-emerald-500/25",
    topBar: "bg-emerald-500",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    badgeBg: "bg-emerald-500/10",
    badgeText: "text-emerald-700 dark:text-emerald-300",
    numColor: "text-emerald-600 dark:text-emerald-400",
    image: "/images/Tecnologia-IA/glowing-synapse-multi-colored-neural-communication-abstract-design-generated-by-ai.jpg",
    imageAlt: "Entorno médico y sector salud",
  },
  financiero: {
    icon: Building2,
    border: "border-blue-500/25",
    topBar: "bg-blue-500",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-600 dark:text-blue-400",
    badgeBg: "bg-blue-500/10",
    badgeText: "text-blue-700 dark:text-blue-300",
    numColor: "text-blue-600 dark:text-blue-400",
    image: "/images/Negocios-Oficina/modern-office-corporate-building-low-angle-view-skyscrapers-city-singapore-panoramic-perspective-view-business-concept-success-industry-tech-architecture.jpg",
    imageAlt: "Distrito financiero y sector bancario",
  },
};

export function LatticeSeebModelsTable() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="modelos"
        className="bg-brand-surface/30 dark:bg-brand-navy/30 py-24 px-6"
        aria-label={c.h2}
      >
        <div ref={ref} className="mx-auto max-w-7xl">
          {/* Header */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6 }}
            className="text-center"
          >
            <span className="inline-flex items-center rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-400">
              {c.badge}
            </span>
            <h2 className="mt-4 font-proxima font-bold text-brand-midnight dark:text-brand-white text-3xl md:text-4xl">
              {c.h2}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-brand-midnight/60 dark:text-brand-white/60">
              {c.subtitle}
            </p>
          </m.div>

          {/* Model cards grid */}
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {c.models.map((model, i) => {
              const style = MODEL_STYLES[model.id];
              const Icon = style.icon;

              return (
                <m.div
                  key={model.id}
                  initial={shouldReduce ? false : { opacity: 0, y: 28 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: shouldReduce ? 0 : 0.45,
                    delay: i * 0.08,
                  }}
                  className={`flex flex-col overflow-hidden rounded-2xl border bg-brand-surface/50 dark:bg-brand-navy/50 ${style.border}`}
                >
                  {/* Colored top bar */}
                  <div className={`h-1 w-full ${style.topBar}`} />

                  {/* Atmospheric industry image */}
                  <div className="relative h-32 overflow-hidden">
                    <Image
                      src={style.image}
                      alt={style.imageAlt}
                      fill
                      className="object-cover opacity-80 dark:opacity-60"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-surface/80 dark:from-brand-navy/80 to-transparent" />
                  </div>

                  <div className="flex flex-1 flex-col p-6 pt-4">
                    {/* Icon + name */}
                    <div className="flex items-start gap-3">
                      <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${style.iconBg}`}>
                        <Icon className={`h-4.5 w-4.5 ${style.iconColor}`} />
                      </div>
                      <div>
                        <p className="text-base font-semibold leading-tight text-brand-midnight dark:text-brand-white">
                          {model.name}
                        </p>
                        <p className={`text-xs font-medium ${style.numColor}`}>
                          4B y 9B parámetros
                        </p>
                      </div>
                    </div>

                    {/* Corpus */}
                    <div className="mt-5">
                      <p className="mb-2 text-[0.6875rem] font-semibold uppercase tracking-widest text-brand-midnight/40 dark:text-brand-white/40">
                        Corpus
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {model.corpus.map((src) => (
                          <span
                            key={src}
                            className={`rounded px-1.5 py-0.5 text-xs font-medium ${style.badgeBg} ${style.badgeText}`}
                          >
                            {src}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Use cases */}
                    <div className="mt-5 flex-1">
                      <p className="mb-2 text-[0.6875rem] font-semibold uppercase tracking-widest text-brand-midnight/40 dark:text-brand-white/40">
                        Casos de uso
                      </p>
                      <ul className="space-y-1.5">
                        {model.useCases.map((uc) => (
                          <li
                            key={uc}
                            className="flex items-center gap-2 text-sm text-brand-midnight/65 dark:text-brand-white/65"
                          >
                            <span className={`h-1 w-1 shrink-0 rounded-full ${style.topBar}`} />
                            {uc}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="mt-6 border-t border-brand-midnight/5 dark:border-brand-white/10 pt-4">
                      <a
                        href="https://sales.sintergica.ai/widget/booking/vh6cQRURUU1nU5nslpu4"
                        className={`text-xs font-semibold transition-opacity hover:opacity-80 ${style.numColor}`}
                      >
                        Agenda diagnóstico →
                      </a>
                    </div>
                  </div>
                </m.div>
              );
            })}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
