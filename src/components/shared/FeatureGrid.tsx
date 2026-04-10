"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
  href?: string;
  ctaLabel?: string;
}

interface FeatureGridProps {
  items: FeatureItem[];
  columns?: 2 | 3 | 4;
}

export function FeatureGrid({ items, columns = 2 }: FeatureGridProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduce = useReducedMotion();

  const colsClass =
    columns === 3
      ? "lg:grid-cols-3"
      : columns === 4
      ? "md:grid-cols-2 lg:grid-cols-4"
      : "md:grid-cols-2";

  return (
    <LazyMotion features={domAnimation}>
    <div ref={ref} className={`grid gap-6 ${colsClass}`}>
      {items.map((item, i) => {
        const Icon = item.icon;
        return (
          <m.div
            key={item.title}
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: shouldReduce ? 0 : 0.5,
              delay: 0.1 + i * 0.1,
            }}
            className="flex flex-col rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep p-7 transition-shadow duration-300 hover:shadow-xl hover:shadow-brand-accent/5"
          >
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-accent/10">
              <Icon className="h-5 w-5 text-brand-accent" />
            </div>
            <h3 className="text-base font-proxima font-semibold text-brand-midnight dark:text-brand-white">
              {item.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-midnight/55 dark:text-brand-white/55">
              {item.description}
            </p>
            {item.href && item.ctaLabel && (
              <Link
                href={item.href}
                className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-accent transition-colors hover:text-brand-accent-light"
              >
                {item.ctaLabel}
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            )}
          </m.div>
        );
      })}
    </div>
    </LazyMotion>
  );
}
