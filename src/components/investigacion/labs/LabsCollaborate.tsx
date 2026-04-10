"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { GraduationCap, Users, Code2, Building2, ArrowRight, CheckCircle2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { useLocale } from "@/i18n/DictionaryProvider";
import { LABS_I18N } from "@/lib/labs-i18n";

const AUDIENCE_META: Record<string, { icon: LucideIcon; border: string; iconBg: string; iconColor: string; hoverBorder: string }> = {
  investigadores: {
    icon: GraduationCap,
    border: "border-violet-500/20",
    iconBg: "bg-violet-500/10",
    iconColor: "text-violet-400",
    hoverBorder: "hover:border-violet-500/40",
  },
  universidades: {
    icon: Building2,
    border: "border-sky-500/20",
    iconBg: "bg-sky-500/10",
    iconColor: "text-sky-400",
    hoverBorder: "hover:border-sky-500/40",
  },
  desarrolladores: {
    icon: Code2,
    border: "border-emerald-500/20",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-400",
    hoverBorder: "hover:border-emerald-500/40",
  },
  organizaciones: {
    icon: Users,
    border: "border-amber-500/20",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-400",
    hoverBorder: "hover:border-amber-500/40",
  },
};

export function LabsCollaborate() {
  const locale = useLocale();
  const lang = locale === "pt-br" ? "pt" : locale;
  const c = (LABS_I18N[lang] ?? LABS_I18N.es).collaborate;

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="colaborar"
        className="bg-brand-surface/30 dark:bg-brand-navy/30 py-24 px-6"
        aria-label={c.h2}
      >
        <div ref={ref} className="mx-auto max-w-7xl">
          {/* Header */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-400">
              {c.badge}
            </span>
            <h2 className="mt-6 font-proxima font-bold text-brand-midnight dark:text-brand-white text-4xl md:text-5xl lg:text-6xl">
              {c.h2}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-brand-midnight/60 dark:text-brand-white/60 leading-relaxed font-medium">
              {c.subtitle}
            </p>
          </m.div>

          {/* Audience cards grid */}
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {c.audiences.map((audience, i) => {
              const meta = AUDIENCE_META[audience.id];
              const Icon = meta.icon;

              return (
                <m.div
                  key={audience.id}
                  initial={shouldReduce ? false : { opacity: 0, y: 28 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: shouldReduce ? 0 : 0.45, delay: i * 0.1 }}
                  className={`flex flex-col rounded-2xl border bg-brand-surface/50 dark:bg-brand-navy/50 p-6 transition-colors duration-200 ${meta.border} ${meta.hoverBorder}`}
                >
                  {/* Icon */}
                  <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${meta.iconBg}`}>
                    <Icon className={`h-5 w-5 ${meta.iconColor}`} />
                  </div>

                  {/* Title */}
                  <p className="mt-4 text-base font-semibold text-brand-midnight dark:text-brand-white">
                    {audience.title}
                  </p>
                  <p className={`text-xs font-medium ${meta.iconColor}`}>
                    {audience.subtitle}
                  </p>

                  {/* Items */}
                  <ul className="mt-4 flex-1 space-y-2.5">
                    {audience.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${meta.iconColor} opacity-70`} />
                        <span className="text-sm text-brand-midnight/65 dark:text-brand-white/65">{item}</span>
                      </li>
                    ))}
                  </ul>
                </m.div>
              );
            })}
          </div>

          {/* CTA */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.55 }}
            className="mt-10 text-center"
          >
            <Link
              href="https://sales.sintergica.ai/widget/booking/vh6cQRURUU1nU5nslpu4"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-7 py-3.5 font-semibold text-brand-midnight dark:text-brand-white transition-all hover:-translate-y-0.5 hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-600/25"
            >
              {c.ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
