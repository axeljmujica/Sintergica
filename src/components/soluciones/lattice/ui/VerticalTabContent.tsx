"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";
import type { LucideIcon } from "lucide-react";

export interface VerticalData {
  id: string;
  label: string;
  title: string;
  description: string;
  useCases: string[];
  agentName: string;
  agentRole: string;
  agentInitial: string;
  agentColor: string;
  agentBg: string;
  agentBorder: string;
  sources: string;
  roi: string;
  roiLabel: string;
  cta: string;
  icon: LucideIcon;
}

interface VerticalTabContentProps {
  vertical: VerticalData;
}

export function VerticalTabContent({ vertical }: VerticalTabContentProps) {
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
    <m.div
      key={vertical.id}
      initial={shouldReduce ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: shouldReduce ? 0 : 0.25 }}
      className="mt-8 rounded-2xl border border-brand-midnight/5 dark:border-brand-white/10 bg-brand-surface/30 dark:bg-brand-navy/30 p-8"
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
        {/* Left — 3 cols */}
        <div className="lg:col-span-3">
          <h3 className="text-xl font-semibold text-brand-midnight dark:text-brand-white">
            {vertical.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">
            {vertical.description}
          </p>

          {/* Use cases as pills */}
          <div className="mt-6 flex flex-wrap gap-2">
            {vertical.useCases.map((uc) => (
              <span
                key={uc}
                className="rounded-full border border-brand-accent/20 bg-brand-accent/10 px-3 py-1 text-xs text-brand-accent-light"
              >
                {uc}
              </span>
            ))}
          </div>

          {/* Sources */}
          <div className="mt-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-brand-midnight/40 dark:text-brand-white/40">
              Fuentes de contexto
            </p>
            <p className="mt-1 text-sm text-brand-midnight/50 dark:text-brand-white/50">
              {vertical.sources}
            </p>
          </div>
        </div>

        {/* Right — 2 cols */}
        <div className="flex flex-col gap-6 lg:col-span-2">
          {/* Agent card */}
          <div className="rounded-xl border border-brand-midnight/5 dark:border-brand-white/10 bg-brand-surface/50 dark:bg-brand-navy/50 p-5">
            <div className="flex items-center gap-3">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${vertical.agentBorder} ${vertical.agentBg} text-sm font-bold ${vertical.agentColor}`}
              >
                {vertical.agentInitial}
              </div>
              <div>
                <p className="text-sm font-semibold text-brand-midnight dark:text-brand-white">
                  {vertical.agentName}
                </p>
                <p className={`text-xs ${vertical.agentColor}`}>
                  {vertical.agentRole}
                </p>
              </div>
            </div>
          </div>

          {/* ROI stat */}
          <div className="rounded-xl border border-brand-accent/10 bg-brand-accent/5 p-5 text-center">
            <p className="text-3xl font-extrabold text-brand-accent">
              {vertical.roi}
            </p>
            <p className="mt-1 text-sm text-brand-midnight/60 dark:text-brand-white/60">
              {vertical.roiLabel}
            </p>
          </div>

          {/* CTA */}
          <a
            href="#contacto"
            className="inline-flex items-center justify-center rounded-full bg-brand-accent px-7 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-accent/25"
          >
            {vertical.cta}
          </a>
        </div>
      </div>
    </m.div>
    </LazyMotion>
  );
}
