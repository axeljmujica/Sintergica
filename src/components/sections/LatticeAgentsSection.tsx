"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { ArrowRight, Scale, TrendingUp, ShieldCheck, BarChart3, Megaphone, Sparkles } from "lucide-react";
import { useDictionary } from "@/i18n/DictionaryProvider";
import { GlareCard } from "@/components/ui/glare-card";

// Agent configuration with unified color system
const AGENTS_CONFIG = [
  {
    id: "ana",
    name: "Ana",
    role: "Analista Legal",
    initials: "A",
    icon: Scale,
    accent: "purple",
    light: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      badge: "bg-purple-100 text-purple-700",
      avatar: "bg-purple-600 text-white",
      output: "bg-purple-100/50",
    },
    dark: {
      bg: "dark:bg-purple-950/20",
      border: "dark:border-purple-800/30",
      badge: "dark:bg-purple-900/30 dark:text-purple-300",
      avatar: "dark:bg-purple-600 dark:text-white",
      output: "dark:bg-purple-900/20",
    },
    capabilities: ["Revisión contractual", "Monitoreo DOF", "Alertas regulatorias"],
    output: "Cláusula 14.2 tiene riesgo de nulidad bajo Art. 1796 CC Federal",
    outputIcon: "⚡",
  },
  {
    id: "carlos",
    name: "Carlos",
    role: "Inteligencia Comercial",
    initials: "C",
    icon: TrendingUp,
    accent: "sky",
    light: {
      bg: "bg-sky-50",
      border: "border-sky-200",
      badge: "bg-sky-100 text-sky-700",
      avatar: "bg-sky-600 text-white",
      output: "bg-sky-100/50",
    },
    dark: {
      bg: "dark:bg-sky-950/20",
      border: "dark:border-sky-800/30",
      badge: "dark:bg-sky-900/30 dark:text-sky-300",
      avatar: "dark:bg-sky-600 dark:text-white",
      output: "dark:bg-sky-900/20",
    },
    capabilities: ["Monitoreo competencia", "Rastreo licitaciones", "Briefings ejecutivos"],
    output: "Competidor X publicó licitación LA-009000999-E3-2025 por $4.2M MXN",
    outputIcon: "📊",
  },
  {
    id: "sofia",
    name: "Sofía",
    role: "Compliance",
    initials: "S",
    icon: ShieldCheck,
    accent: "amber",
    light: {
      bg: "bg-amber-50",
      border: "border-amber-200",
      badge: "bg-amber-100 text-amber-700",
      avatar: "bg-amber-600 text-white",
      output: "bg-amber-100/50",
    },
    dark: {
      bg: "dark:bg-amber-950/20",
      border: "dark:border-amber-800/30",
      badge: "dark:bg-amber-900/30 dark:text-amber-300",
      avatar: "dark:bg-amber-600 dark:text-white",
      output: "dark:bg-amber-900/20",
    },
    capabilities: ["Reportes CNBV/UIF", "Auditoría transacciones", "PLD"],
    output: "3 transacciones requieren reporte a UIF antes del cierre mensual",
    outputIcon: "🔍",
  },
  {
    id: "marco",
    name: "Marco",
    role: "Analista Interno",
    initials: "M",
    icon: BarChart3,
    accent: "brand",
    light: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      badge: "bg-blue-100 text-blue-700",
      avatar: "bg-brand-accent text-white",
      output: "bg-blue-100/50",
    },
    dark: {
      bg: "dark:bg-blue-950/20",
      border: "dark:border-blue-800/30",
      badge: "dark:bg-blue-900/30 dark:text-blue-300",
      avatar: "dark:bg-brand-accent dark:text-white",
      output: "dark:bg-blue-900/20",
    },
    capabilities: ["Dashboards KPI", "Cruces de información", "Reportes automáticos"],
    output: "Tiempo de respuesta legal bajó 47% vs. mes anterior",
    outputIcon: "📈",
  },
  {
    id: "luna",
    name: "Luna",
    role: "Comunicación",
    initials: "L",
    icon: Megaphone,
    accent: "lime",
    light: {
      bg: "bg-lime-50",
      border: "border-lime-200",
      badge: "bg-lime-100 text-lime-700",
      avatar: "bg-lime-600 text-white",
      output: "bg-lime-100/50",
    },
    dark: {
      bg: "dark:bg-lime-950/20",
      border: "dark:border-lime-800/30",
      badge: "dark:bg-lime-900/30 dark:text-lime-300",
      avatar: "dark:bg-lime-600 dark:text-white",
      output: "dark:bg-lime-900/20",
    },
    capabilities: ["Contenido para redes", "Newsletters", "Comunicación interna"],
    output: "Newsletter semanal lista: 3 artículos, 1 caso de éxito, 2 datos de industria",
    outputIcon: "✍️",
  },
];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getAgents = (dictionary: any) => {
  const dictAgents = dictionary.latticeAgents?.agents || {};
  return AGENTS_CONFIG.map((agent) => ({
    ...agent,
    role: dictAgents[agent.id]?.role || agent.role,
    capabilities: dictAgents[agent.id]?.capabilities || agent.capabilities,
    output: dictAgents[agent.id]?.output || agent.output,
  }));
};

export function LatticeAgentsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduce = useReducedMotion();
  const dictionary = useDictionary();
  const AGENTS = getAgents(dictionary);

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="agentes"
        className="relative overflow-hidden bg-brand-surface py-16 dark:bg-brand-midnight md:py-24"
        aria-label="Lattice Agents"
      >
        {/* Subtle background decoration */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-brand-accent/[0.02] to-transparent dark:via-brand-accent/[0.03]" />

        <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-accent/20 bg-brand-accent/5 px-4 py-2 dark:border-brand-accent/20 dark:bg-brand-accent/10">
              <Sparkles className="h-4 w-4 text-brand-accent" />
              <span className="text-xs font-semibold uppercase tracking-wider text-brand-accent">
                {dictionary.latticeAgents?.badge || "Lattice Agents"}
              </span>
            </div>
            
            <h2 className="font-proxima text-4xl font-bold leading-tight tracking-tight text-brand-midnight dark:text-brand-white sm:text-5xl">
              {dictionary.latticeAgents?.title || "Tu equipo de IA especializado"}
            </h2>
            
            <p className="mt-4 text-lg leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">
              {dictionary.latticeAgents?.subtitle || "Cinco agentes autónomos que trabajan 24/7. Cada uno con nombre, rol específico y capacidades definidas para tu operación."}
            </p>
          </m.div>

          {/* Agent cards - horizontal scroll on mobile, grid on desktop */}
          <div className="mt-14">
            {/* Mobile: Horizontal scroll */}
            <div className="flex gap-4 overflow-x-auto pb-4 sm:hidden -mx-4 px-4 scrollbar-hide">
              {AGENTS.map((agent, i) => {
                const Icon = agent.icon;
                return (
                  <m.div
                    key={agent.name}
                    initial={shouldReduce ? false : { opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.1 + i * 0.1 }}
                    className={`flex w-[280px] shrink-0 flex-col rounded-2xl border ${agent.light.border} ${agent.dark.border} ${agent.light.bg} ${agent.dark.bg} p-5 shadow-sm`}
                  >
                    {/* Header */}
                    <div className="flex items-start gap-3">
                      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${agent.light.avatar} ${agent.dark.avatar}`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-base font-proxima font-semibold text-brand-midnight dark:text-brand-white">
                          {agent.name}
                        </h3>
                        <p className="text-xs text-brand-midnight/60 dark:text-brand-white/60">
                          {agent.role}
                        </p>
                      </div>
                    </div>

                    {/* Capabilities */}
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {agent.capabilities.map((cap: string) => (
                        <span
                          key={cap}
                          className={`inline-flex items-center rounded-md px-2 py-1 text-[0.7rem] font-medium ${agent.light.badge} ${agent.dark.badge}`}
                        >
                          {cap}
                        </span>
                      ))}
                    </div>

                    {/* Output */}
                    <div className={`mt-auto rounded-lg ${agent.light.output} ${agent.dark.output} p-3`}>
                      <p className="text-xs leading-relaxed text-brand-midnight/80 dark:text-brand-white/80">
                        <span className="mr-1">{agent.outputIcon}</span>
                        {agent.output}
                      </p>
                    </div>
                  </m.div>
                );
              })}
            </div>

            {/* Desktop: Grid */}
            <div className="hidden sm:block">
              {/* SVG connector line between cards */}
              <div className="relative mb-[-1px] h-8 overflow-hidden lg:block hidden">
                <svg viewBox="0 0 1000 30" className="w-full" preserveAspectRatio="none" aria-hidden="true">
                  <m.path
                    d="M 0 15 Q 125 5 250 15 Q 375 25 500 15 Q 625 5 750 15 Q 875 25 1000 15"
                    stroke="url(#connector-grad)"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ duration: shouldReduce ? 0 : 1.2, delay: 0.4, ease: "easeInOut" }}
                  />
                  <defs>
                    <linearGradient id="connector-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3665f5" stopOpacity="0" />
                      <stop offset="30%" stopColor="#3665f5" stopOpacity="0.5" />
                      <stop offset="70%" stopColor="#53abe6" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#53abe6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
                {AGENTS.map((agent, i) => {
                  const Icon = agent.icon;
                  return (
                    <m.div
                      key={agent.name}
                      initial={shouldReduce ? false : { opacity: 0, y: 30 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.1 + i * 0.08 }}
                    >
                      <GlareCard className={`group flex h-full flex-col rounded-2xl border ${agent.light.border} ${agent.dark.border} ${agent.light.bg} ${agent.dark.bg} p-5 shadow-sm transition-all duration-300 hover:shadow-lg`}>
                        {/* Live pulse indicator */}
                        <div className="mb-3 flex items-center gap-1.5">
                          <span className="relative flex h-2 w-2">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                            <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                          </span>
                          <span className="text-[0.6rem] font-semibold uppercase tracking-widest text-green-600 dark:text-green-400">Live</span>
                        </div>

                        {/* Avatar & Role */}
                        <div className="flex items-center gap-3">
                          <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${agent.light.avatar} ${agent.dark.avatar} transition-transform duration-300 group-hover:scale-105`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <div>
                            <h3 className="text-base font-proxima font-semibold text-brand-midnight dark:text-brand-white">
                              {agent.name}
                            </h3>
                            <p className="text-xs text-brand-midnight/60 dark:text-brand-white/60">
                              {agent.role}
                            </p>
                          </div>
                        </div>

                        {/* Capabilities as badges */}
                        <div className="mt-5 flex flex-wrap gap-1.5">
                          {agent.capabilities.map((cap: string) => (
                            <span
                              key={cap}
                              className={`inline-flex items-center rounded-md px-2 py-1 text-[0.7rem] font-medium ${agent.light.badge} ${agent.dark.badge}`}
                            >
                              {cap}
                            </span>
                          ))}
                        </div>

                        {/* Divider */}
                        <div className="my-4 h-px bg-gradient-to-r from-transparent via-brand-midnight/10 to-transparent dark:via-brand-white/10" />

                        {/* Output */}
                        <div className={`mt-auto rounded-xl ${agent.light.output} ${agent.dark.output} p-3.5`}>
                          <p className="text-xs leading-relaxed text-brand-midnight/80 dark:text-brand-white/80">
                            <span className="mr-1.5 inline-block">{agent.outputIcon}</span>
                            {agent.output}
                          </p>
                        </div>
                      </GlareCard>
                    </m.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CTA */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.6 }}
            className="mt-12 text-center"
          >
            <a
              href="/diagnostico"
              className="group inline-flex items-center gap-2 rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-accent/25 transition-all duration-300 hover:bg-brand-accent/90 hover:shadow-brand-accent/40"
            >
              Contrata tu primer agente
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <p className="mt-3 text-xs text-brand-midnight/40 dark:text-brand-white/40">
              Sin permanencia · Configuración en 48 hrs · Demo con tus datos
            </p>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
