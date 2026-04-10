"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion, AnimatePresence } from "motion/react";
import {
  Zap,
  HeartPulse,
  Ship,
  ShoppingBag,
  Landmark,
  AlertCircle,
  Lightbulb,
  TrendingUp,
  Info,
  Tag,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";
import {
  CASOS_DE_USO_I18N,
  type LangCode,
  type IndustriaId,
  type ProductoId,
} from "@/lib/casos-de-uso-i18n";

interface CasosDeUsoContentProps {
  lang?: LangCode;
}

const INDUSTRIA_IMAGES: Record<IndustriaId, string> = {
  energia: "/img/finance-tech.jpg",
  salud: "/img/healthcare-ai.jpg",
  logistica: "/img/logistics-tech.jpg",
  ecommerce: "/img/retail-tech.jpg",
  gobierno: "/img/cybersecurity.jpg",
};

const INDUSTRIA_ICONS: Record<IndustriaId, React.ElementType> = {
  energia: Zap,
  salud: HeartPulse,
  logistica: Ship,
  ecommerce: ShoppingBag,
  gobierno: Landmark,
};

const INDUSTRIA_COLORS: Record<IndustriaId, { accent: string; bg: string; border: string; text: string }> = {
  energia: {
    accent: "text-yellow-400",
    bg: "bg-yellow-400/10",
    border: "border-yellow-400/20",
    text: "text-yellow-400",
  },
  salud: {
    accent: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/20",
    text: "text-emerald-400",
  },
  logistica: {
    accent: "text-sky-400",
    bg: "bg-sky-400/10",
    border: "border-sky-400/20",
    text: "text-sky-400",
  },
  ecommerce: {
    accent: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/20",
    text: "text-purple-400",
  },
  gobierno: {
    accent: "text-brand-accent",
    bg: "bg-brand-accent/10",
    border: "border-brand-accent/20",
    text: "text-brand-accent",
  },
};

const PRODUCTO_COLORS: Record<ProductoId, string> = {
  saleshub: "border-purple-500/30 bg-purple-500/10 text-purple-300",
  lattice: "border-brand-accent/30 bg-brand-accent/10 text-brand-accent",
  "lattice-seeb-salud": "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
  "lattice-seeb-logistica": "border-sky-500/30 bg-sky-500/10 text-sky-300",
  nahui: "border-orange-500/30 bg-orange-500/10 text-orange-300",
};

export function CasosDeUsoContent({ lang = "es" }: CasosDeUsoContentProps) {
  const t = CASOS_DE_USO_I18N[lang];
  const [activeFilter, setActiveFilter] = useState<IndustriaId | "all">("all");

  const filterRef = useRef<HTMLDivElement>(null);
  const filterInView = useInView(filterRef, { once: true, margin: "-40px" });
  const shouldReduce = useReducedMotion();

  const filteredCasos =
    activeFilter === "all"
      ? t.casos
      : t.casos.filter((c) => c.industria === activeFilter);

  const filterOptions: Array<{ id: IndustriaId | "all"; label: string }> = [
    { id: "all", label: t.filter.all },
    ...Object.entries(t.filter.industrias).map(([id, label]) => ({
      id: id as IndustriaId,
      label,
    })),
  ];

  return (
    <LazyMotion features={domAnimation}>
      <>
        <PageHero
          badge={t.hero.badge}
          title={t.hero.h1}
          subtitle={t.hero.subtitle}
          ctaLabel="Solicitar Diagnóstico"
          ctaHref="https://sales.sintergica.ai/widget/booking/vh6cQRURUU1nU5nslpu4"
          trustSignals={t.hero.trustSignals}
        />

        {/* Disclaimer */}
        <section className="bg-brand-surface dark:bg-brand-midnight px-4 pb-2 pt-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <div className="flex items-start gap-3 rounded-xl border border-brand-accent/15 bg-brand-accent/[0.04] p-4">
              <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-accent/60" />
              <p className="text-xs leading-relaxed text-brand-midnight/50 dark:text-brand-white/50">
                {t.disclaimer}
              </p>
            </div>
          </div>
        </section>

        {/* Filter bar */}
        <section className="sticky top-16 z-20 bg-brand-surface dark:bg-brand-midnight/95 px-4 py-5 backdrop-blur-sm sm:px-6 lg:px-8">
          <m.div
            ref={filterRef}
            initial={shouldReduce ? false : { opacity: 0, y: -8 }}
            animate={filterInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.4 }}
            className="mx-auto flex max-w-5xl flex-wrap items-center gap-2"
          >
            {filterOptions.map((opt) => {
              const isActive = activeFilter === opt.id;
              const color =
                opt.id !== "all"
                  ? INDUSTRIA_COLORS[opt.id as IndustriaId]
                  : null;

              return (
                <button
                  key={opt.id}
                  onClick={() => setActiveFilter(opt.id)}
                  className={cn(
                    "rounded-full border px-4 py-1.5 text-xs font-semibold transition-all",
                    isActive
                      ? color
                        ? cn(color.bg, color.border, color.text)
                        : "border-brand-accent/40 bg-brand-accent/20 text-brand-accent"
                      : "border-brand-midnight/10 dark:border-brand-white/10 bg-transparent text-brand-midnight/50 dark:text-brand-white/50 hover:border-brand-white/25 hover:text-brand-surface/80"
                  )}
                >
                  {opt.label}
                </button>
              );
            })}
          </m.div>
        </section>

        {/* Cases grid */}
        <section className="bg-brand-surface dark:bg-brand-midnight px-4 pb-24 pt-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <AnimatePresence mode="popLayout">
              <div className="grid gap-6 lg:grid-cols-1">
                {filteredCasos.map((caso, i) => {
                  const colors = INDUSTRIA_COLORS[caso.industria];
                  const Icon = INDUSTRIA_ICONS[caso.industria];

                  return (
                    <m.article
                      key={caso.id}
                      layout
                      initial={shouldReduce ? false : { opacity: 0, y: 24 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={shouldReduce ? undefined : { opacity: 0, y: -12, scale: 0.98 }}
                      transition={{
                        duration: shouldReduce ? 0 : 0.45,
                        delay: shouldReduce ? 0 : i * 0.08,
                      }}
                      className="group overflow-hidden rounded-2xl border border-brand-midnight/8 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep transition-shadow hover:shadow-xl hover:shadow-brand-accent/5"
                    >
                      {/* Image banner */}
                      <div className="relative h-52 w-full overflow-hidden sm:h-60">
                        <Image
                          src={INDUSTRIA_IMAGES[caso.industria]}
                          alt={caso.empresa}
                          fill
                          className="object-cover object-center transition-transform duration-700 group-hover:scale-105 will-change-transform"
                          sizes="(max-width: 768px) 100vw, 896px"
                        />
                        {/* Gradient to card bg */}
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/40 to-transparent" />
                        {/* Overlay: industry badge + metric */}
                        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between px-6 pb-5">
                          <span
                            className={cn(
                              "rounded-full border px-3 py-1 text-[0.65rem] font-bold uppercase tracking-wider backdrop-blur-sm",
                              colors.bg,
                              colors.border,
                              colors.text
                            )}
                          >
                            {t.filter.industrias[caso.industria]}
                          </span>
                          <div className="text-right">
                            <p className={cn("text-3xl font-extrabold leading-none drop-shadow-lg", colors.accent)}>
                              {caso.metrica.value}
                            </p>
                            <p className="mt-0.5 text-[0.65rem] text-brand-midnight/55 dark:text-brand-white/55">{caso.metrica.label}</p>
                          </div>
                        </div>
                      </div>

                      {/* Card header */}
                      <div className={cn("flex items-start justify-between gap-4 border-b border-brand-midnight/8 dark:border-brand-white/10 p-6 pb-5")}>
                        <div className="flex items-center gap-4">
                          <div
                            className={cn(
                              "flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl",
                              colors.bg,
                              colors.border,
                              "border"
                            )}
                          >
                            <Icon className={cn("h-5 w-5", colors.accent)} />
                          </div>
                          <div>
                            <p
                              className={cn(
                                "text-[0.65rem] font-semibold uppercase tracking-wider",
                                colors.text
                              )}
                            >
                              {t.labels.industria} · {t.filter.industrias[caso.industria]}
                            </p>
                            <h3 className="text-lg font-proxima font-semibold text-brand-midnight dark:text-brand-white">
                              {caso.empresa}
                            </h3>
                          </div>
                        </div>

                        {/* Key metric — hidden since it's now on the image banner */}
                        <div className="hidden" aria-hidden="true" />
                      </div>

                      {/* Product tags */}
                      <div className="flex flex-wrap items-center gap-2 border-b border-brand-midnight/8 dark:border-brand-white/10 px-6 py-3">
                        <Tag className="h-3 w-3 flex-shrink-0 text-brand-midnight/30 dark:text-brand-white/30" />
                        {caso.productos.map((pid) => (
                          <span
                            key={pid}
                            className={cn(
                              "rounded-full border px-2.5 py-0.5 text-[0.65rem] font-semibold",
                              PRODUCTO_COLORS[pid as ProductoId]
                            )}
                          >
                            {t.productos[pid as ProductoId]}
                          </span>
                        ))}
                      </div>

                      {/* PSR grid */}
                      <div className="grid gap-0 divide-y divide-brand-white/5 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
                        {/* Problema */}
                        <div className="p-6">
                          <div className="mb-3 flex items-center gap-2">
                            <AlertCircle className="h-3.5 w-3.5 text-warning-600" />
                            <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-warning-600">
                              {t.labels.problema}
                            </p>
                          </div>
                          <p className="text-sm leading-relaxed text-brand-midnight/55 dark:text-brand-white/55">
                            {caso.problema}
                          </p>
                        </div>

                        {/* Solución */}
                        <div className="p-6">
                          <div className="mb-3 flex items-center gap-2">
                            <Lightbulb className="h-3.5 w-3.5 text-brand-accent" />
                            <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-brand-accent">
                              {t.labels.solucion}
                            </p>
                          </div>
                          <p className="text-sm leading-relaxed text-brand-midnight/55 dark:text-brand-white/55">
                            {caso.solucion}
                          </p>
                        </div>

                        {/* Resultado */}
                        <div className="p-6">
                          <div className="mb-3 flex items-center gap-2">
                            <TrendingUp className="h-3.5 w-3.5 text-success-600" />
                            <p className="text-[0.65rem] font-semibold uppercase tracking-wider text-success-600">
                              {t.labels.resultado}
                            </p>
                          </div>
                          <p className="text-sm leading-relaxed text-brand-midnight/55 dark:text-brand-white/55">
                            {caso.resultado}
                          </p>

                          {/* Mobile metric */}
                          <div className="mt-4 flex items-center gap-2 sm:hidden">
                            <p
                              className={cn(
                                "text-xl font-extrabold leading-none",
                                colors.accent
                              )}
                            >
                              {caso.metrica.value}
                            </p>
                            <p className="text-[0.65rem] text-brand-midnight/45 dark:text-brand-white/45">
                              {caso.metrica.label}
                            </p>
                          </div>
                        </div>
                      </div>
                    </m.article>
                  );
                })}
              </div>
            </AnimatePresence>

            {filteredCasos.length === 0 && (
              <p className="py-16 text-center text-sm text-brand-midnight/40 dark:text-brand-white/40">
                No hay casos para esta industria todavía.
              </p>
            )}
          </div>
        </section>

        <CTASection
          title={t.cta.title}
          subtitle={t.cta.subtitle}
          ctaLabel={t.cta.label}
          ctaHref={t.cta.href}
          trustSignals={t.cta.trustSignals}
        />
      </>
    </LazyMotion>
  );
}
