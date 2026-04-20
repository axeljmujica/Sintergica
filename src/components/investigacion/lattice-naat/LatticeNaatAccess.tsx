"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { Download, Cloud, FlaskConical, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { NAAT_DEFAULT } from "@/lib/lattice-naat-i18n";

const c = NAAT_DEFAULT.access;

const ICONS: LucideIcon[] = [Download, Cloud, FlaskConical];

export function LatticeNaatAccess() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="acceso"
        className="bg-brand-surface/30 dark:bg-brand-navy/30 py-24 px-6"
        aria-label={c.h2}
      >
        <div ref={ref} className="mx-auto max-w-7xl">
          {/* Header */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="inline-flex items-center rounded-full border border-brand-accent/20 bg-brand-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-accent">
              {c.badge}
            </span>
            <h2 className="mt-4 font-proxima font-bold text-brand-midnight dark:text-brand-white text-3xl md:text-4xl text-balance">
              {c.h2}
            </h2>
          </m.div>

          {/* Items */}
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {c.items.map((item, i) => {
              const Icon = ICONS[i] ?? Download;
              return (
                <m.div
                  key={item.title}
                  initial={shouldReduce ? false : { opacity: 0, y: 24 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: shouldReduce ? 0 : 0.5, delay: i * 0.1 }}
                  className="flex flex-col rounded-2xl border border-brand-midnight/8 dark:border-brand-white/10 bg-brand-white dark:bg-brand-navy/50 p-6 transition-all hover:-translate-y-1 hover:border-brand-accent/40 hover:shadow-lg"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-accent/10">
                    <Icon className="h-5 w-5 text-brand-accent" />
                  </div>
                  <h3 className="mt-5 font-proxima text-lg font-semibold text-brand-midnight dark:text-brand-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-midnight/65 dark:text-brand-white/65">
                    {item.body}
                  </p>
                  <Link
                    href={item.link.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent hover:text-brand-accent-light transition-colors"
                  >
                    {item.link.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </m.div>
              );
            })}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
