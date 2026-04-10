"use client";

import type { LucideIcon } from "lucide-react";

interface IndustryCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  examples: string;
}

export function IndustryCard({
  icon: Icon,
  title,
  description,
  examples,
}: IndustryCardProps) {
  return (
    <div className="group overflow-hidden rounded-xl border border-brand-midnight/5 dark:border-brand-white/10 bg-brand-surface/60 dark:bg-brand-navy/60 transition-all duration-300 hover:border-brand-accent-light/20">
      {/* Header visual */}
      <div className="relative flex h-40 items-center justify-center bg-gradient-to-br from-brand-accent-light/10 to-brand-navy">
        <div className="absolute inset-0 bg-brand-surface dark:bg-brand-midnight/40" />
        <Icon className="relative h-16 w-16 text-brand-accent-light/20 transition-colors duration-300 group-hover:text-brand-accent-light/30" />
      </div>
      {/* Body */}
      <div className="p-6">
        <h3 className="text-xl font-proxima font-semibold text-brand-midnight dark:text-brand-white">{title}</h3>
        <p className="mt-2 text-sm text-brand-midnight/60 dark:text-brand-white/60">{description}</p>
        <p className="mt-4 text-xs italic text-brand-midnight/40 dark:text-brand-white/40">{examples}</p>
      </div>
    </div>
  );
}
