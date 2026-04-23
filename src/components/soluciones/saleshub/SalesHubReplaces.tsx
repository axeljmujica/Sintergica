"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import {
  Users,
  Mail,
  MousePointerClick,
  Calendar,
  BarChart3,
  MessageSquare,
  type LucideIcon,
} from "lucide-react";

type Category = {
  icon: LucideIcon;
  label: string;
  examples: string;
};

const CATEGORIES: Category[] = [
  { icon: Users,             label: "CRM",                    examples: "Gestión de contactos, pipeline y scoring" },
  { icon: Mail,              label: "Email marketing",        examples: "Campañas, secuencias y segmentación" },
  { icon: MousePointerClick, label: "Landing pages & funnels",examples: "Constructor visual, forms y A/B testing" },
  { icon: Calendar,          label: "Agenda de citas",        examples: "Booking, recordatorios y calendarios" },
  { icon: BarChart3,         label: "Reportes comerciales",   examples: "Dashboards de conversión y ROI por canal" },
  { icon: MessageSquare,     label: "Centro de conversaciones",examples: "WhatsApp, SMS, email y chat web en uno" },
];

export function SalesHubReplaces() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={ref}
        className="relative bg-white py-24 lg:py-32"
        aria-label="Qué reemplaza SalesHub"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-[760px] text-center"
          >
            <span className="inline-block rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-600">
              Qué reemplaza
            </span>
            <h2 className="mt-5 font-proxima text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
              6 plataformas, una sola factura
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-slate-600">
              El costo total es comparable o menor que sumar tus herramientas actuales —
              pero con visibilidad unificada, soporte local en español e IA integrada.
              Un login, una curva de aprendizaje, una factura en MXN.
            </p>
          </m.div>

          <div className="mx-auto mt-14 grid max-w-[1120px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map(({ icon: Icon, label, examples }, i) => (
              <m.div
                key={label}
                initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#10B981]/10 text-[#047857] ring-1 ring-[#10B981]/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-proxima text-[16px] font-semibold text-slate-900">
                      {label}
                    </h3>
                    <p className="mt-1 text-[13px] leading-relaxed text-slate-600">
                      {examples}
                    </p>
                  </div>
                </div>
              </m.div>
            ))}
          </div>

          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.5 }}
            className="mx-auto mt-12 max-w-[860px] rounded-2xl border border-[#10B981]/25 bg-[#10B981]/[0.05] p-6 text-center"
          >
            <p className="text-[14px] leading-relaxed text-slate-700">
              <span className="font-semibold text-slate-900">El ahorro real no está en el precio —</span>{" "}
              está en no perder leads entre herramientas, no esperar 3 días para que el
              equipo técnico conecte una integración y no facturar en 5 monedas distintas.
            </p>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
