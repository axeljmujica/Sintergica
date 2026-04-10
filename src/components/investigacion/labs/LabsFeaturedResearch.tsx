"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { ArrowRight, FileText, Database, Box, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useLocale } from "@/i18n/DictionaryProvider";
import { LABS_I18N } from "@/lib/labs-i18n";

const T = {
  es: {
    viewAll: "Ver todas las publicaciones",
    featuredDesc: "Conoce el primer modelo de IA de frontera desarrollado en México. 120 mil millones de parámetros entrenados con un corpus normativo, cultural y lingüístico de LATAM.",
  },
  en: {
    viewAll: "View all publications",
    featuredDesc: "Discover the first frontier AI model developed in Mexico. 120 billion parameters trained on a regulatory, cultural, and linguistic corpus from LATAM.",
  },
  "pt-br": {
    viewAll: "Ver todas as publicações",
    featuredDesc: "Conheça o primeiro modelo de IA de fronteira desenvolvido no México. 120 bilhões de parâmetros treinados com um corpus regulatório, cultural e linguístico da LATAM.",
  },
} as const;

export function LabsFeaturedResearch() {
  const locale = useLocale();
  const t = T[locale] ?? T.es;
  const lang = locale === "pt-br" ? "pt" : locale;
  const c = (LABS_I18N[lang] ?? LABS_I18N.es).featuredResearch;

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  const getTagIcon = (tag: string) => {
    if (tag.includes("Modelo") || tag.includes("Model")) return <Box className="w-3.5 h-3.5" />;
    if (tag.includes("Dataset")) return <Database className="w-3.5 h-3.5" />;
    return <FileText className="w-3.5 h-3.5" />;
  };

  const getTagColor = (tag: string) => {
    if (tag.includes("Modelo") || tag.includes("Model")) return "text-emerald-400 bg-emerald-500/10 border-emerald-500/20";
    if (tag.includes("Dataset")) return "text-violet-400 bg-violet-500/10 border-violet-500/20";
    if (tag.includes("Nuevo") || tag.includes("New") || tag.includes("Novo")) return "text-amber-400 bg-amber-500/10 border-amber-500/20";
    return "text-sky-400 bg-sky-500/10 border-sky-500/20";
  };

  return (
    <LazyMotion features={domAnimation}>
      <section className="bg-brand-surface dark:bg-brand-midnight py-24 px-6 relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[100px] pointer-events-none" />

        <div ref={ref} className="mx-auto max-w-7xl relative z-10">
          {/* Header */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6 }}
            className="mb-16"
          >
            <span className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-400">
              {c.badge}
            </span>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-4">
              <h2 className="font-proxima font-bold text-brand-midnight dark:text-brand-white text-3xl md:text-4xl lg:text-5xl max-w-2xl">
                {c.h2}
              </h2>
              <Link
                href="/investigacion"
                className="inline-flex items-center gap-2 text-brand-midnight/60 dark:text-brand-white/60 hover:text-brand-accent dark:hover:text-brand-white transition-colors"
              >
                {t.viewAll} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </m.div>

          {/* Grid de publicaciones */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {c.papers.map((item, i) => (
              <m.div
                key={i}
                initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: shouldReduce ? 0 : 0.5, delay: i * 0.1 }}
                className={`group relative flex flex-col rounded-2xl border transition-all duration-300 overflow-hidden ${
                  item.featured
                    ? "col-span-1 md:col-span-2 lg:col-span-3 bg-gradient-to-br from-brand-navy/80 to-brand-navy/40 border-brand-accent/30 hover:border-brand-accent/50 flex-col lg:flex-row"
                    : "bg-brand-surface/20 dark:bg-brand-navy/20 border-brand-midnight/10 dark:border-brand-white/10 hover:bg-brand-navy/40 hover:border-brand-white/20 p-6"
                }`}
              >
                {item.url !== "#" ? (
                  <Link href={item.url} className="absolute inset-0 z-10" aria-label={`Ver ${item.title}`} />
                ) : null}

                {/* Si es featured, agregar un área de imagen (placeholder) */}
                {item.featured && (
                  <div className="lg:w-1/2 relative bg-brand-surface dark:bg-brand-midnight/50 p-8 flex items-center justify-center min-h-[300px] border-b lg:border-b-0 lg:border-r border-brand-midnight/10 dark:border-brand-white/10">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent opacity-50" />
                    <div className="relative flex flex-col items-center">
                      <Box className="w-24 h-24 text-emerald-400/80 mb-4 drop-shadow-[0_0_15px_rgba(16,185,129,0.3)]" />
                      <span className="font-proxima font-bold text-3xl text-brand-midnight/90 dark:text-brand-white/90">Lattice Na&apos;at</span>
                    </div>
                  </div>
                )}

                <div className={`flex flex-col flex-1 ${item.featured ? 'p-8 lg:p-12 justify-center' : ''}`}>
                  <div className="flex items-start justify-between mb-8">
                    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium ${getTagColor(item.tag)}`}>
                      {getTagIcon(item.tag)}
                      {item.tag}
                    </span>

                    {item.url !== "#" && (
                      <ExternalLink className={`w-5 h-5 ${item.featured ? 'text-brand-accent/50' : 'text-brand-midnight/30 dark:text-brand-white/30'} group-hover:text-brand-accent dark:group-hover:text-brand-white transition-colors`} />
                    )}
                  </div>

                  <div className="mt-auto">
                    <h3 className={`font-proxima font-semibold text-brand-midnight dark:text-brand-white mb-4 ${item.featured ? 'text-3xl md:text-4xl leading-tight' : 'text-xl'}`}>
                      {item.title}
                    </h3>

                    {item.featured && (
                      <p className="text-brand-midnight/70 dark:text-brand-white/70 text-lg mb-8 leading-relaxed max-w-xl">
                        {t.featuredDesc}
                      </p>
                    )}

                    {item.date && (
                      <div className="flex items-center gap-2 text-sm text-brand-midnight/50 dark:text-brand-white/50 font-medium">
                        <span>{item.date}</span>
                      </div>
                    )}
                  </div>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
