"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge?: string;
  badgeColor?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export function SectionHeader({
  badge,
  badgeColor = "brand-accent",
  title,
  subtitle,
  centered = false,
}: SectionHeaderProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  const badgeColorMap: Record<string, string> = {
    "brand-accent": "border-brand-accent/20 bg-brand-accent/10 text-brand-accent",
    "success-600": "border-success-600/20 bg-success-600/10 text-success-600",
    "warning-600": "border-warning-600/20 bg-warning-600/10 text-warning-600",
    "sky-600": "border-sky-500/20 bg-sky-500/10 text-sky-400",
  };

  const badgeClasses = badgeColorMap[badgeColor] ?? badgeColorMap["brand-accent"];

  return (
    <LazyMotion features={domAnimation}>
    <m.div
      ref={ref}
      initial={shouldReduce ? false : { opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: shouldReduce ? 0 : 0.7 }}
      className={cn("max-w-3xl", centered && "mx-auto text-center")}
    >
      {badge && (
        <span
          className={cn(
            "mb-4 inline-block rounded-full border px-4 py-1.5 text-[0.75rem] font-mulish font-medium uppercase tracking-wider",
            badgeClasses
          )}
        >
          {badge}
        </span>
      )}
      <h2 className="font-proxima text-balance text-[1.75rem] font-bold leading-[1.2] tracking-tight text-brand-midnight dark:text-brand-white sm:text-[2.25rem] lg:text-[2.75rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-brand-midnight/60 dark:text-brand-white/60 sm:text-lg">
          {subtitle}
        </p>
      )}
    </m.div>
    </LazyMotion>
  );
}
