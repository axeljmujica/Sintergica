"use client";

import type { LucideIcon } from "lucide-react";

interface ReplacesChipProps {
  icon: LucideIcon;
  label: string;
}

export function ReplacesChip({ icon: Icon, label }: ReplacesChipProps) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-brand-midnight/5 dark:border-brand-white/10 bg-brand-surface/50 dark:bg-brand-navy/50 px-5 py-4 transition-all duration-300 hover:border-success-600/20 hover:bg-brand-navy/80">
      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-success-600/10 text-success-600">
        <Icon className="h-4 w-4" />
      </div>
      <span className="text-sm font-medium text-brand-midnight dark:text-brand-white">{label}</span>
    </div>
  );
}
