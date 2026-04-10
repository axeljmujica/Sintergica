"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { ArrowRight, CheckCircle, Sparkles } from "lucide-react";

interface CTASectionProps {
  badge?: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  trustSignals?: string[];
  footnote?: string;
}

export function CTASection({
  badge = "SIGUIENTE PASO",
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  trustSignals,
  footnote,
}: CTASectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section className="relative overflow-hidden bg-brand-surface dark:bg-brand-midnight py-20 md:py-28">
        {/* Gradient background */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/[0.08] via-transparent to-brand-accent-light/[0.05]" />
          <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand-accent/10 blur-[100px]" />
          <div className="absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-brand-accent-light/10 blur-[100px]" />
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <m.div
            ref={ref}
            initial={shouldReduce ? false : { opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-white dark:bg-brand-midnight/5 px-4 py-2 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-brand-accent" />
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-midnight/70 dark:text-brand-white/70">
                {badge}
              </span>
            </div>

            {/* Title */}
            <h2 className="font-proxima text-4xl font-bold leading-tight tracking-tight text-brand-midnight dark:text-brand-white sm:text-5xl">
              {title}
            </h2>

            {/* Subtitle */}
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-brand-midnight/70 dark:text-brand-white/60">
              {subtitle}
            </p>
          </m.div>

          {/* CTA Button */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6, delay: 0.2 }}
            className="mt-10"
          >
            <a
              href={ctaHref}
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-brand-accent px-8 py-4 text-sm font-bold text-white shadow-xl shadow-brand-accent/25 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-brand-accent/40"
            >
              {ctaLabel}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Trust signals */}
            {trustSignals && trustSignals.length > 0 && (
              <div className="mt-8 flex items-center justify-center gap-6 flex-wrap">
                {trustSignals.map((signal) => (
                  <span
                    key={signal}
                    className="flex items-center gap-2 text-sm text-brand-midnight/60 dark:text-brand-white/50"
                  >
                    <CheckCircle className="h-4 w-4 text-brand-accent" />
                    {signal}
                  </span>
                ))}
              </div>
            )}

            {/* Footnote */}
            {footnote && (
              <p className="mt-6 text-xs text-brand-midnight/40 dark:text-brand-white/30">
                {footnote}
              </p>
            )}
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
