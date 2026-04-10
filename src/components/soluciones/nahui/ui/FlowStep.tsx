"use client";

import type { LucideIcon } from "lucide-react";

interface FlowStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  dotColor: string;
  pulse?: boolean;
}

export function FlowStep({
  icon: Icon,
  title,
  description,
  dotColor,
}: FlowStepProps) {
  return (
    <div className="flex w-full flex-col items-center rounded-xl border border-brand-midnight/5 dark:border-brand-white/10 bg-brand-surface/30 dark:bg-brand-navy/30 p-6 text-center lg:w-[200px]">
      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-accent-light/10 text-brand-accent-light">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 text-sm font-proxima font-semibold text-brand-midnight dark:text-brand-white">{title}</h3>
      <p className="mt-2 text-xs text-brand-midnight/50 dark:text-brand-white/50">{description}</p>
      {/* Status dot */}
      <span className={`mt-3 inline-block h-2.5 w-2.5 rounded-full ${dotColor}`} />
    </div>
  );
}
