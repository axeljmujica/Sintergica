"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useLocale } from "@/i18n/DictionaryProvider";
import { LABS_I18N } from "@/lib/labs-i18n";

const T = {
  es: { learnMore: "Saber más" },
  en: { learnMore: "Learn more" },
  "pt-br": { learnMore: "Saiba mais" },
} as const;

export function LabsImpact() {
  const locale = useLocale();
  const t = T[locale] ?? T.es;
  const lang = locale === "pt-br" ? "pt" : locale;
  const c = (LABS_I18N[lang] ?? LABS_I18N.es).impact;

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section className="bg-brand-surface/30 dark:bg-brand-navy/30 py-24 px-6 border-t border-brand-midnight/5 dark:border-brand-white/10">
        <div ref={ref} className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">

            {/* Left side - Title */}
            <m.div
              className="sticky top-32"
              initial={shouldReduce ? false : { opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: shouldReduce ? 0 : 0.6 }}
            >
              <h2 className="font-proxima font-bold text-4xl md:text-5xl lg:text-6xl text-brand-midnight dark:text-brand-white leading-[1.1] mb-8">
                {c.title}
              </h2>

              {/* Stats - moved under title for desktop */}
              <div className="flex flex-col gap-6 mt-12 hidden lg:flex">
                {c.stats.map((stat, i) => (
                  <div key={`desktop-stat-${i}`} className="flex flex-col border-t border-brand-midnight/10 dark:border-brand-white/10 pt-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-brand-midnight dark:text-brand-white font-bold text-5xl tracking-tight">{stat.value}</span>
                      <span className="text-emerald-400 text-3xl font-extrabold">+</span>
                    </div>
                    <span className="text-brand-midnight/60 dark:text-brand-white/60 text-sm uppercase tracking-wider mt-2 font-medium">{stat.label}</span>
                  </div>
                ))}
              </div>
            </m.div>

            {/* Right side - Features & Mobile Stats */}
            <div className="flex flex-col gap-16">
              {/* Mobile Stats */}
              <m.div
                className="grid grid-cols-2 gap-8 lg:hidden"
                initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: shouldReduce ? 0 : 0.6, delay: 0.1 }}
              >
                {c.stats.map((stat, i) => (
                  <div key={`mobile-stat-${i}`} className="flex flex-col border-t border-brand-midnight/10 dark:border-brand-white/10 pt-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-brand-midnight dark:text-brand-white font-bold text-4xl tracking-tight">{stat.value}</span>
                      <span className="text-emerald-400 text-2xl font-extrabold">+</span>
                    </div>
                    <span className="text-brand-midnight/60 dark:text-brand-white/60 text-xs uppercase tracking-wider mt-2 font-medium">{stat.label}</span>
                  </div>
                ))}
              </m.div>

              {/* Features List */}
              <div className="flex flex-col gap-12">
                {c.features.map((feature, i) => (
                  <m.div
                    key={`feature-${i}`}
                    className="group relative flex flex-col sm:flex-row gap-6 sm:gap-10 border-t border-brand-midnight/10 dark:border-brand-white/10 pt-10"
                    initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: shouldReduce ? 0 : 0.6, delay: 0.2 + (i * 0.1) }}
                  >
                    <div className="sm:w-1/3">
                      <h3 className="text-2xl font-proxima font-semibold text-brand-midnight dark:text-brand-white leading-tight">{feature.title}</h3>
                    </div>
                    <div className="sm:w-2/3 flex flex-col gap-6">
                      <p className="text-lg text-brand-midnight/70 dark:text-brand-white/70 leading-relaxed">{feature.desc}</p>

                      {feature.url && (
                        <Link
                          href={feature.url}
                          className="inline-flex items-center gap-2 text-emerald-400 font-semibold hover:text-emerald-300 transition-colors w-fit"
                        >
                          {t.learnMore}
                          <span className="p-1 rounded-full bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors">
                            <ChevronRight className="w-4 h-4" />
                          </span>
                        </Link>
                      )}
                    </div>
                  </m.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
