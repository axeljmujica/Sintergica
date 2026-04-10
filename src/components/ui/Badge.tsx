"use client";

import { LazyMotion, domAnimation, m } from "motion/react";

interface BadgeProps {
  text: string;
  className?: string;
}

export function Badge({ text, className = "" }: BadgeProps) {
  return (
    <LazyMotion features={domAnimation}>
    <m.span
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`inline-flex items-center gap-1.5 rounded-full border border-brand-accent/20 bg-brand-accent/10 px-4 py-1.5 text-sm font-medium text-brand-accent dark:border-brand-accent-light/20 dark:bg-brand-accent/15 dark:text-brand-accent-light ${className}`}
    >
      {text}
    </m.span>
    </LazyMotion>
  );
}
