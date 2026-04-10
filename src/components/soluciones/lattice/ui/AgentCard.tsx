"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export interface AgentData {
  name: string;
  initials: string;
  role: string;
  colorBg: string;
  colorBorder: string;
  colorText: string;
  hoverBorder: string;
  capabilities: string[];
  output: string;
}

interface AgentCardProps {
  agent: AgentData;
  index: number;
  isInView: boolean;
}

export function AgentCard({ agent, index, isInView }: AgentCardProps) {
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
    <m.div
      initial={shouldReduce ? false : { opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.1 + index * 0.1 }}
      whileHover={shouldReduce ? {} : { scale: 1.02 }}
      className={`group flex flex-col rounded-xl border border-brand-midnight/5 dark:border-brand-white/10 bg-brand-surface/60 dark:bg-brand-navy/60 p-6 transition-all duration-300 ${agent.hoverBorder} hover:shadow-lg`}
    >
      {/* Avatar */}
      <div
        className={`flex h-14 w-14 items-center justify-center rounded-full ${agent.colorBg} border-2 ${agent.colorBorder} text-xl font-bold ${agent.colorText}`}
      >
        {agent.initials}
      </div>

      {/* Name & role */}
      <p className="mt-4 text-lg font-semibold text-brand-midnight dark:text-brand-white">{agent.name}</p>
      <p className={`text-sm font-medium ${agent.colorText}`}>{agent.role}</p>

      {/* Separator */}
      <div className={`my-4 h-0.5 w-8 ${agent.colorBg} opacity-30`} />

      {/* Capabilities */}
      <ul className="space-y-2">
        {agent.capabilities.map((cap) => (
          <li key={cap} className="flex items-start gap-2 text-sm text-brand-midnight/60 dark:text-brand-white/60">
            <CheckCircle2 className={`mt-0.5 h-3 w-3 shrink-0 ${agent.colorText}`} />
            {cap}
          </li>
        ))}
      </ul>

      {/* Output example */}
      <div className="mt-auto pt-4">
        <div className={`rounded-lg border ${agent.colorBorder} ${agent.colorBg} p-3`}>
          <p className={`mb-1 text-[10px] font-semibold uppercase tracking-wider ${agent.colorText}`}>
            Último output
          </p>
          <p className="font-mono text-xs leading-relaxed text-brand-midnight/80 dark:text-brand-white/80">
            {agent.output}
          </p>
        </div>
      </div>
    </m.div>
    </LazyMotion>
  );
}
