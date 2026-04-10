"use client";

import type { LucideIcon } from "lucide-react";

interface FunnelStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  count: string;
  barWidth: string;
  barBg: string;
}

export function FunnelStep({
  icon: Icon,
  title,
  description,
  count,
  barWidth,
  barBg,
}: FunnelStepProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex w-full flex-col items-center rounded-xl border border-brand-midnight/5 dark:border-brand-white/10 bg-brand-surface/30 dark:bg-brand-navy/30 p-6 text-center">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success-600/10 text-success-600">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="mt-4 text-sm font-proxima font-semibold text-brand-midnight dark:text-brand-white">{title}</h3>
        <p className="mt-2 text-xs text-brand-midnight/50 dark:text-brand-white/50">{description}</p>
        <span className="mt-3 text-lg font-bold text-success-600">{count}</span>
      </div>
      {/* Volume bar */}
      <div
        className={`mt-2 h-2 rounded-full ${barBg}`}
        style={{ width: barWidth }}
      />
    </div>
  );
}
