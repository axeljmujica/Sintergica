"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { Github, Cpu, ExternalLink } from "lucide-react";
import { useLocale } from "@/i18n/DictionaryProvider";
import { LABS_I18N } from "@/lib/labs-i18n";

export function LabsLinks() {
  const locale = useLocale();
  const lang = locale === "pt-br" ? "pt" : locale;
  const c = (LABS_I18N[lang] ?? LABS_I18N.es).links;

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="links"
        className="relative overflow-hidden bg-brand-surface dark:bg-brand-midnight py-24 px-6"
        aria-label={c.h2}
      >
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-600/6 blur-3xl" />
        </div>

        <div ref={ref} className="relative mx-auto max-w-4xl">
          {/* Header */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6 }}
            className="text-center"
          >
            <span className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-400">
              {c.badge}
            </span>
            <h2 className="mt-4 font-proxima font-bold text-brand-midnight dark:text-brand-white text-3xl md:text-4xl">
              {c.h2}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-brand-midnight/60 dark:text-brand-white/60">
              {c.subtitle}
            </p>
          </m.div>

          {/* Link cards */}
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {/* GitHub */}
            <m.a
              href={`https://${c.github.url}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={shouldReduce ? false : { opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: shouldReduce ? 0 : 0.45, delay: 0.15 }}
              className="group flex flex-col rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface/60 dark:bg-brand-navy/60 p-7 transition-all duration-200 hover:border-brand-white/20 hover:bg-brand-navy/80"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-white dark:bg-brand-midnight/[0.06]">
                  <Github className="h-6 w-6 text-brand-midnight/80 dark:text-brand-white/80" />
                </div>
                <ExternalLink className="h-4 w-4 text-brand-midnight/30 dark:text-brand-white/30 transition-colors group-hover:text-brand-surface/60" />
              </div>
              <p className="mt-5 text-xl font-semibold text-brand-midnight dark:text-brand-white">
                {c.github.label}
              </p>
              <p className="mt-1 font-mono text-xs text-brand-midnight/40 dark:text-brand-white/40">
                {c.github.url}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">
                {c.github.desc}
              </p>
              <p className="mt-5 text-sm font-semibold text-brand-midnight/70 dark:text-brand-white/70 transition-colors group-hover:text-brand-accent dark:group-hover:text-brand-white">
                {c.github.cta}
              </p>
            </m.a>

            {/* HuggingFace */}
            <m.a
              href={`https://${c.huggingface.url}`}
              target="_blank"
              rel="noopener noreferrer"
              initial={shouldReduce ? false : { opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: shouldReduce ? 0 : 0.45, delay: 0.25 }}
              className="group flex flex-col rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.05] p-7 transition-all duration-200 hover:border-emerald-500/35 hover:bg-emerald-500/[0.09]"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10">
                  <Cpu className="h-6 w-6 text-emerald-400" />
                </div>
                <ExternalLink className="h-4 w-4 text-brand-midnight/30 dark:text-brand-white/30 transition-colors group-hover:text-emerald-400/60" />
              </div>
              <p className="mt-5 text-xl font-semibold text-brand-midnight dark:text-brand-white">
                {c.huggingface.label}
              </p>
              <p className="mt-1 font-mono text-xs text-brand-midnight/40 dark:text-brand-white/40">
                {c.huggingface.url}
              </p>
              <p className="mt-4 flex-1 text-sm leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">
                {c.huggingface.desc}
              </p>
              <p className="mt-5 text-sm font-semibold text-emerald-400 transition-colors group-hover:text-emerald-300">
                {c.huggingface.cta}
              </p>
            </m.a>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
