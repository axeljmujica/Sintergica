"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import {
  Target,
  Users,
  Mail,
  Handshake,
  BarChart3,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

type Capability = {
  icon: LucideIcon;
  title: string;
  description: string;
  accent: string;
  tint: string;
  ring: string;
};

const CAPABILITIES: Capability[] = [
  {
    icon: Target,
    title: "Captación de leads",
    description:
      "Landing pages, formularios inteligentes y funnels de conversión. Integración directa con Meta Ads y Google Ads. Cada lead entra al sistema automáticamente — sin captura manual, sin errores de transcripción, sin prospectos que se pierden entre la campaña y el CRM.",
    accent: "text-[#10B981]",
    tint: "bg-[#10B981]/10",
    ring: "ring-[#10B981]/20",
  },
  {
    icon: Users,
    title: "CRM integrado",
    description:
      "Contactos, historial completo de interacciones, pipeline visual y scoring de leads. El sistema sabe quién es tu prospecto, qué páginas visitó, qué emails abrió y cuándo es el mejor momento para contactarlo.",
    accent: "text-[#4F46E5]",
    tint: "bg-[#4F46E5]/10",
    ring: "ring-[#4F46E5]/20",
  },
  {
    icon: Mail,
    title: "Automatización de marketing",
    description:
      "Email marketing, workflows, secuencias de nurturing y segmentación avanzada. El prospecto recibe el mensaje correcto en el momento correcto — sin que nadie de tu equipo tenga que hacer clic.",
    accent: "text-[#0EA5E9]",
    tint: "bg-[#0EA5E9]/10",
    ring: "ring-[#0EA5E9]/20",
  },
  {
    icon: Handshake,
    title: "Gestión de ventas",
    description:
      "Seguimiento de oportunidades, tareas automatizadas, alertas de inactividad y reportes por vendedor. Tu equipo nunca pierde un deal por falta de seguimiento — el sistema se lo recuerda antes de que sea tarde.",
    accent: "text-[#F59E0B]",
    tint: "bg-[#F59E0B]/10",
    ring: "ring-[#F59E0B]/20",
  },
  {
    icon: BarChart3,
    title: "Analytics y reportes",
    description:
      "Dashboards de conversión, ROI por canal, métricas de equipo y visibilidad del funnel. Sabes qué campaña genera leads, qué vendedor cierra y qué etapa tiene fugas — en tiempo real, no en un Excel de la semana pasada.",
    accent: "text-[#0C6E8C]",
    tint: "bg-[#0C6E8C]/10",
    ring: "ring-[#0C6E8C]/20",
  },
  {
    icon: Sparkles,
    title: "IA comercial integrada",
    description:
      "Copilotos de Lattice que califican leads, generan contenido personalizado, responden preguntas frecuentes por chat, agendan citas y detectan patrones de compra. Un equipo de ventas que nunca duerme, nunca olvida y nunca pierde un lead.",
    accent: "text-[#DF4288]",
    tint: "bg-[#DF4288]/10",
    ring: "ring-[#DF4288]/20",
  },
];

export function SalesHubCapabilities() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={ref}
        className="relative bg-slate-50 py-24 lg:py-32"
        aria-label="Capacidades de SalesHub"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-[720px] text-center"
          >
            <span className="inline-block rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-600">
              Capacidades
            </span>
            <h2 className="mt-5 font-proxima text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
              Todo tu motor comercial — en una sola plataforma
            </h2>
          </m.div>

          <div className="mx-auto mt-14 grid max-w-[1180px] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map(({ icon: Icon, title, description, accent, tint, ring }, i) => (
              <m.div
                key={title}
                initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${tint} ${accent} ring-1 ${ring}`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-proxima text-lg font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {description}
                </p>
              </m.div>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
