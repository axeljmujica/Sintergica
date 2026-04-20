"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { ArrowRight, Sparkles, Globe, Shield } from "lucide-react";
import Link from "next/link";
import { NAAT_DEFAULT } from "@/lib/lattice-naat-i18n";

const c = NAAT_DEFAULT.hero;

const MICRO_ICONS = [Shield, Sparkles, Globe];

export function LatticeNaatHero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const shouldReduce = useReducedMotion();

  const anim = (delay: number) =>
    shouldReduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: isInView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.5, delay },
        };

  return (
    <LazyMotion features={domAnimation}>
      <section
        className="relative overflow-hidden bg-brand-midnight pt-32 pb-20 px-6"
        aria-label="Lattice Na'at Hero"
      >
        {/* Video background */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <video
            src="/images/naat/naat-hero.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-midnight/70 via-brand-midnight/50 to-brand-midnight" />
        </div>

        {/* Background glows */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-brand-accent/15 blur-3xl" />
          <div className="absolute -bottom-32 right-0 h-[500px] w-[500px] rounded-full bg-purple-600/10 blur-3xl" />
          <div className="absolute left-1/2 top-1/3 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-brand-accent-light/10 blur-3xl" />
        </div>

        <div ref={ref} className="relative z-10 mx-auto max-w-6xl">
          {/* Top content - centered */}
          <div className="text-center max-w-3xl mx-auto">
            {/* Badge */}
            <m.span
              {...anim(0)}
              className="inline-flex items-center gap-2 rounded-full border border-brand-accent/30 bg-brand-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-accent-light backdrop-blur-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-accent-light animate-pulse" />
              {c.badge}
            </m.span>

            {/* h1 */}
            <m.h1
              {...anim(0.1)}
              className="mt-6 font-proxima text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl text-balance"
            >
              {c.title}
            </m.h1>

            {/* Subtitle */}
            <m.p
              {...anim(0.2)}
              className="mx-auto mt-6 max-w-2xl text-lg text-white/75 text-balance"
            >
              {c.subtitle}
            </m.p>

            {/* Micro-features */}
            <m.div
              {...anim(0.3)}
              className="mt-8 flex flex-wrap justify-center gap-3"
            >
              {c.microFeatures.map((label, i) => {
                const Icon = MICRO_ICONS[i] ?? Sparkles;
                return (
                  <span
                    key={label}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-3 py-1.5 text-sm text-white/75"
                  >
                    <Icon className="h-4 w-4 text-brand-accent-light" />
                    {label}
                  </span>
                );
              })}
            </m.div>

            {/* CTAs */}
            <m.div
              {...anim(0.4)}
              className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <Link
                href="https://sales.sintergica.ai/widget/booking/vh6cQRURUU1nU5nslpu4"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-accent px-6 py-3 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-accent-light hover:shadow-lg hover:shadow-brand-accent/30"
              >
                {c.ctaPrimary}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#familia"
                className="inline-flex items-center justify-center rounded-lg border border-white/20 bg-white/5 backdrop-blur-md px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                {c.ctaSecondary}
              </a>
            </m.div>

            {/* Version info */}
            <m.div
              {...anim(0.5)}
              className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-white/50"
            >
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                {c.versionState}
              </span>
              <span className="hidden sm:inline text-brand-white/20">·</span>
              <span>{c.version}</span>
            </m.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
