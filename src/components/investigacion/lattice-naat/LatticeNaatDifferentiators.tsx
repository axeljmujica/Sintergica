"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { Languages, Scale, Shield, Users, Globe2, BrainCircuit } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { NAAT_DEFAULT } from "@/lib/lattice-naat-i18n";

const c = NAAT_DEFAULT.differentiators;

interface CardStyle {
  icon: LucideIcon;
  glow: string;
  iconBg: string;
  iconRing: string;
  iconColor: string;
  accent: string;
}

const CARD_STYLES: CardStyle[] = [
  {
    icon: Languages,
    glow: "from-brand-accent/20",
    iconBg: "bg-brand-accent/15",
    iconRing: "ring-brand-accent/30",
    iconColor: "text-brand-accent-light",
    accent: "text-brand-accent-light",
  },
  {
    icon: Scale,
    glow: "from-amber-500/20",
    iconBg: "bg-amber-500/15",
    iconRing: "ring-amber-400/30",
    iconColor: "text-amber-300",
    accent: "text-amber-300",
  },
  {
    icon: Shield,
    glow: "from-emerald-500/20",
    iconBg: "bg-emerald-500/15",
    iconRing: "ring-emerald-400/30",
    iconColor: "text-emerald-300",
    accent: "text-emerald-300",
  },
  {
    icon: Users,
    glow: "from-violet-500/20",
    iconBg: "bg-violet-500/15",
    iconRing: "ring-violet-400/30",
    iconColor: "text-violet-300",
    accent: "text-violet-300",
  },
  {
    icon: Globe2,
    glow: "from-rose-500/20",
    iconBg: "bg-rose-500/15",
    iconRing: "ring-rose-400/30",
    iconColor: "text-rose-300",
    accent: "text-rose-300",
  },
  {
    icon: BrainCircuit,
    glow: "from-sky-500/20",
    iconBg: "bg-sky-500/15",
    iconRing: "ring-sky-400/30",
    iconColor: "text-sky-300",
    accent: "text-sky-300",
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
        className="relative overflow-hidden bg-[#0A0F1C] py-24 lg:py-28 px-6"
        aria-label={c.h2}
      >
        {/* Background image */}
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: "url('/images/naat/85.jpg')" }}
          aria-hidden="true"
        />
        {/* Dark overlay on image */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0A0F1C]/85 via-[#0A0F1C]/75 to-[#0A0F1C]/95" aria-hidden="true" />
        {/* Ambient glows */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute top-1/4 left-0 w-full md:w-1/2 h-1/2 rounded-full bg-brand-accent/15 blur-[150px]" />
          <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-blue-600/8 blur-[150px]" />
          <div className="absolute top-0 right-1/4 h-[400px] w-[400px] rounded-full bg-violet-600/8 blur-[150px]" />
        </div>

        <div ref={ref} className="relative z-10 mx-auto max-w-[1400px]">
          {/* Header */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6 }}
            className="mb-14 md:mb-16 max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-accent-light animate-pulse" />
              {c.badge}
            </span>
            <h2 className="mt-5 font-proxima text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance leading-[1.1]">
              Entrenado para el contexto que{" "}
              <br className="hidden md:block" />
              <span className="text-brand-accent">los modelos globales ignoran.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/65">
              Na&apos;at no es un LLM genérico adaptado al español. Es un modelo fundacional construido desde cero con los datos, la cultura y el marco normativo de México y LATAM.
            </p>
          </m.div>

          {/* Items grid */}
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {c.items.map((item, i) => {
              const style = CARD_STYLES[i] ?? CARD_STYLES[0];
              const Icon = style.icon;
              return (
                <m.div
                  key={item.title}
                  initial={shouldReduce ? false : { opacity: 0, y: 28 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: shouldReduce ? 0 : 0.55, delay: i * 0.08 }}
                  className="group relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/[0.035] backdrop-blur-xl p-7 lg:p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.06] hover:border-white/20"
                >
                  {/* Inner glow */}
                  <div
                    className={`pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-radial ${style.glow} to-transparent opacity-50 blur-2xl transition-opacity duration-500 group-hover:opacity-100`}
                    aria-hidden
                  />
                  {/* Top highlight line */}
                  <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden />

                  {/* Icon */}
                  <div className={`relative flex h-12 w-12 items-center justify-center rounded-xl ${style.iconBg} ring-1 ${style.iconRing} transition-transform duration-500 group-hover:scale-110`}>
                    <Icon className={`h-5.5 w-5.5 ${style.iconColor}`} strokeWidth={1.75} />
                  </div>

                  {/* Number */}
                  <p className="mt-6 font-proxima text-xs font-semibold uppercase tracking-[0.2em] text-white">
                    {String(i + 1).padStart(2, "0")} · {c.badge.split(" ").slice(-1)[0]}
                  </p>

                  {/* Title */}
                  <h3 className={`mt-2 font-proxima text-xl md:text-[1.375rem] font-bold leading-tight ${style.accent}`}>
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-white/65">
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
