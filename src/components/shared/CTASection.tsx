"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { ArrowRight, CheckCircle } from "lucide-react";
import Image from "next/image";

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
      <section className="relative overflow-hidden bg-black py-28 sm:py-36">
        {/* Background image */}
        <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
          <Image
            src="/images/121725.jpg"
            alt=""
            fill
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <m.div
            ref={ref}
            initial={shouldReduce ? false : { opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.7 }}
          >
            <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[0.75rem] font-semibold uppercase tracking-wider text-white">
              {badge}
            </span>
            <h2 className="font-proxima text-balance text-[1.75rem] font-bold leading-[1.15] tracking-tight text-white sm:text-[2.25rem] lg:text-[2.75rem]">
              {title}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-[1.8] text-white/80 sm:text-lg">
              {subtitle}
            </p>
          </m.div>

          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6, delay: 0.2 }}
            className="mt-10"
          >
            <a
              href={ctaHref}
              className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-brand-accent px-10 text-[1rem] font-bold text-white shadow-xl shadow-brand-accent/25 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-brand-accent/40"
            >
              {ctaLabel}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {trustSignals && trustSignals.length > 0 && (
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                {trustSignals.map((signal) => (
                  <span
                    key={signal}
                    className="flex items-center gap-1.5 text-xs text-white/70"
                  >
                    <CheckCircle className="h-3.5 w-3.5 text-brand-accent-light" />
                    {signal}
                  </span>
                ))}
              </div>
            )}

            {footnote && (
              <p className="mt-6 text-xs text-white/50">{footnote}</p>
            )}
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
