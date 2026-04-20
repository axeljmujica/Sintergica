"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { Languages, Scale, Shield, Users, Globe2, BrainCircuit } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { NAAT_DEFAULT } from "@/lib/lattice-naat-i18n";

const c = NAAT_DEFAULT.differentiators;

interface CardStyle {
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
  border: string;
  hoverBorder: string;
  hoverShadow: string;
  accent: string;
}

const CARD_STYLES: CardStyle[] = [
  {
    icon: Languages,
    iconBg: "bg-brand-accent/10",
    iconColor: "text-brand-accent",
    border: "border-brand-accent/15",
    hoverBorder: "hover:border-brand-accent/40",
    hoverShadow: "hover:shadow-brand-accent/10",
    accent: "text-brand-accent",
  },
  {
    icon: Scale,
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-600 dark:text-amber-400",
    border: "border-amber-200 dark:border-amber-800/30",
    hoverBorder: "hover:border-amber-400/50",
    hoverShadow: "hover:shadow-amber-500/10",
    accent: "text-amber-600 dark:text-amber-400",
  },
  {
    icon: Shield,
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    border: "border-emerald-200 dark:border-emerald-800/30",
    hoverBorder: "hover:border-emerald-400/50",
    hoverShadow: "hover:shadow-emerald-500/10",
    accent: "text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: Users,
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-600 dark:text-violet-400",
    border: "border-violet-200 dark:border-violet-800/30",
    hoverBorder: "hover:border-violet-400/50",
    hoverShadow: "hover:shadow-violet-500/10",
    accent: "text-violet-600 dark:text-violet-400",
  },
  {
    icon: Globe2,
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-600 dark:text-rose-400",
    border: "border-rose-200 dark:border-rose-800/30",
    hoverBorder: "hover:border-rose-400/50",
    hoverShadow: "hover:shadow-rose-500/10",
    accent: "text-rose-600 dark:text-rose-400",
  },
  {
    icon: BrainCircuit,
    iconBg: "bg-sky-500/10",
    iconColor: "text-sky-600 dark:text-sky-400",
    border: "border-sky-200 dark:border-sky-800/30",
    hoverBorder: "hover:border-sky-400/50",
    hoverShadow: "hover:shadow-sky-500/10",
    accent: "text-sky-600 dark:text-sky-400",
  },
];

export function LatticeNaatDifferentiators() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="diferenciadores"
        className="relative overflow-hidden bg-brand-surface dark:bg-brand-midnight py-24 px-6"
        aria-label={c.h2}
      >
        {/* Decorative glows */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-40 left-1/3 h-[400px] w-[400px] rounded-full bg-brand-accent/5 blur-3xl" />
          <div className="absolute -bottom-40 right-1/4 h-[400px] w-[400px] rounded-full bg-violet-500/5 blur-3xl" />
        </div>

        <div ref={ref} className="relative z-10 mx-auto max-w-7xl">
          {/* Header */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center rounded-full border border-brand-accent/20 bg-brand-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-accent">
              {c.badge}
            </span>
            <h2 className="mt-4 font-proxima font-bold text-brand-midnight dark:text-brand-white text-3xl md:text-4xl text-balance">
              {c.h2}
            </h2>
          </m.div>

          {/* Items grid */}
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {c.items.map((item, i) => {
              const style = CARD_STYLES[i] ?? CARD_STYLES[0];
              const Icon = style.icon;
              return (
                <m.div
                  key={item.title}
                  initial={shouldReduce ? false : { opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: shouldReduce ? 0 : 0.45, delay: i * 0.08 }}
                  className={`group rounded-2xl border bg-white dark:bg-brand-navy/50 p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg ${style.border} ${style.hoverBorder} ${style.hoverShadow}`}
                >
                  <div className={`flex h-11 w-11 items-center justify-center rounded-lg ${style.iconBg} transition-transform group-hover:scale-110`}>
                    <Icon className={`h-5 w-5 ${style.iconColor}`} />
                  </div>
                  <h3 className={`mt-5 font-proxima text-lg font-semibold ${style.accent}`}>
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-midnight/65 dark:text-brand-white/65">
                    {item.desc}
                  </p>
                </m.div>
              );
            })}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
