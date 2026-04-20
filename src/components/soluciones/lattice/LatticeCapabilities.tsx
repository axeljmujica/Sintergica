"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { MessageSquare, Terminal, Bot, Workflow, type LucideIcon } from "lucide-react";
import { LatticeChatMockup } from "./ui/LatticeChatMockup";
import { LatticeAgentsMockup } from "./ui/LatticeAgentsMockup";
import { LatticeFlowsMockup } from "./ui/LatticeFlowsMockup";
import { LatticeCodeMockup } from "./ui/LatticeCodeMockup";
import type { ComponentType } from "react";

type Capability = {
  category: string;
  title: string;
  body: string;
  icon: LucideIcon;
  mockupLabel: string;
  accent: string;
  tint: string;
  proximamente?: boolean;
  Mockup?: ComponentType;
};

const CAPABILITIES: Capability[] = [
  {
    category: "LATTICE CHAT",
    title: "Conversa",
    body: "Chat con IA fundamentado en tus knowledge bases. Organiza la comunicación de tu equipo en canales por proyecto y consulta información mediante nuestros modelos Na'at y Seeb. Obtén respuestas verificables con dependencias y referencias exactas a tus documentos.",
    icon: MessageSquare,
    mockupLabel: "Interfaz de chat con canales por proyecto y citación",
    accent: "text-[#006EFA]",
    tint: "from-[#EEF4FF] to-[#F0F9FF]",
    Mockup: LatticeChatMockup,
  },
  {
    category: "LATTICE AGENTS",
    title: "Ejecuta",
    body: "Despliega agentes autónomos que trabajan en segundo plano. Delégales tareas de prospección de leads, investigación de mercado, monitoreo regulatorio o extracción de datos. Ejecutan flujos 24/7 y reportan los resultados de forma estructurada.",
    icon: Bot,
    mockupLabel: "Dashboard de tareas y agentes en segundo plano",
    accent: "text-[#9333EA]",
    tint: "from-[#F5F0FF] to-[#FAF5FF]",
    Mockup: LatticeAgentsMockup,
  },
  {
    category: "LATTICE FLOWS",
    title: "Automatiza",
    body: "Flujos visuales que conectan tus aplicaciones sin escribir código. Conecta APIs, dispara agentes autónomos y mueve datos de un sistema a otro desde un entorno visual auditable y estructurado.",
    icon: Workflow,
    mockupLabel: "Builder visual de automatización con nodos",
    accent: "text-[#0EA5E9]",
    tint: "from-[#ECFEFF] to-[#F0F9FF]",
    Mockup: LatticeFlowsMockup,
  },
  {
    category: "LATTICE CODE",
    title: "Construye",
    body: "Un agente de código que entiende la arquitectura de tus proyectos. Lee, edita y refactoriza tu repositorio actual a partir de instrucciones en lenguaje natural.",
    icon: Terminal,
    mockupLabel: "Agente de código editando en el repositorio",
    accent: "text-[#16A34A]",
    tint: "from-[#F0FDF4] to-[#ECFDF5]",
    proximamente: true,
    Mockup: LatticeCodeMockup,
  },
];

export function LatticeCapabilities() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={ref}
        className="bg-slate-50 px-6 py-24 lg:py-32"
        aria-label="Capacidades principales de Lattice"
      >
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-[640px]"
          >
            <span className="inline-block rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-500 shadow-sm">
              Capacidades
            </span>
            <h2 className="mt-5 font-proxima text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
              De la conversación a la ejecución
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Lattice no es un chat con IA. Es un sistema operativo inteligente que busca, crea,
              automatiza y actúa — integrado con tus herramientas, gobernado por tus reglas.
            </p>
          </m.div>

          {/* Zigzag blocks */}
          <div className="mt-20 flex flex-col gap-24">
            {CAPABILITIES.map(({ category, title, body, icon: Icon, mockupLabel, accent, tint, proximamente, Mockup }, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={title}
                  className={`flex flex-col items-center gap-12 lg:flex-row ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Text side */}
                  <m.div
                    initial={shouldReduce ? false : { opacity: 0, x: isEven ? -24 : 24 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="w-full lg:w-1/2"
                  >
                    <span className={`text-xs font-semibold uppercase tracking-[0.12em] ${accent}`}>
                      {category}
                    </span>
                    <h3 className="mt-3 flex flex-wrap items-center gap-3 font-proxima text-3xl font-bold text-slate-900 md:text-4xl">
                      {title}
                      {proximamente && (
                        <span className="inline-flex items-center rounded-full border border-slate-300 bg-white px-2.5 py-0.5 text-xs font-bold uppercase tracking-widest text-slate-500">
                          Próximamente
                        </span>
                      )}
                    </h3>
                    <p className="mt-4 max-w-[500px] text-base leading-relaxed text-slate-600">
                      {body}
                    </p>
                  </m.div>

                  {/* Mockup side */}
                  <m.div
                    initial={shouldReduce ? false : { opacity: 0, x: isEven ? 24 : -24 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="w-full lg:w-1/2"
                  >
                    {Mockup ? (
                      <Mockup />
                    ) : (
                    <div
                      className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gradient-to-br ${tint} shadow-[0_20px_40px_-16px_rgba(15,23,42,0.15)] ring-1 ring-slate-200/80`}
                    >
                      {/* Dot pattern */}
                      <svg
                        aria-hidden="true"
                        className="absolute inset-0 h-full w-full text-slate-900/[0.035]"
                      >
                        <defs>
                          <pattern
                            id={`dots-${i}`}
                            width="20"
                            height="20"
                            patternUnits="userSpaceOnUse"
                          >
                            <circle cx="2" cy="2" r="1" fill="currentColor" />
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill={`url(#dots-${i})`} />
                      </svg>

                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-md ring-1 ring-slate-200">
                          <Icon className={`h-6 w-6 ${accent}`} />
                        </div>
                        <span className="max-w-[260px] text-center text-sm font-medium text-slate-500">
                          {mockupLabel}
                        </span>
                      </div>
                    </div>
                    )}
                  </m.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
