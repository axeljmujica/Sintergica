"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { FileInput, Route, Radar, CheckCircle2, LineChart, type LucideIcon } from "lucide-react";

type Step = {
  n: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

const STEPS: Step[] = [
  {
    n: "01",
    icon: FileInput,
    title: "Orden recibida",
    description:
      "La orden entra automáticamente desde tu ERP, e-commerce o captura manual. Sin retrasos de transcripción.",
  },
  {
    n: "02",
    icon: Route,
    title: "Asignación y despacho",
    description:
      "Nahui asigna la unidad y el conductor óptimos, considera disponibilidad, capacidad y ventanas, genera la ruta eficiente y despacha.",
  },
  {
    n: "03",
    icon: Radar,
    title: "En ruta",
    description:
      "Monitoreo GPS en tiempo real. Si hay desviación, parada no programada o retraso, el sistema alerta antes de que alguien pregunte.",
  },
  {
    n: "04",
    icon: CheckCircle2,
    title: "Entrega",
    description:
      "Prueba de entrega digital: foto de la mercancía, firma del receptor, geolocalización exacta y timestamp. Evidencia asociada a la orden para siempre.",
  },
  {
    n: "05",
    icon: LineChart,
    title: "Análisis",
    description:
      "Dashboards, KPIs operativos y predicciones de Lattice. La operación aprende ciclo a ciclo — sin que tus datos salgan de tu infraestructura.",
  },
];

export function NahuiFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={ref}
        className="relative overflow-hidden bg-[#020c1b] py-24 lg:py-32"
        aria-label="Cómo funciona Nahui"
      >
        <div className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[780px] -translate-x-1/2 rounded-full bg-[#006EFA]/[0.07] blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-[720px] text-center"
          >
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/80">
              Cómo funciona
            </span>
            <h2 className="mt-5 font-proxima text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Del pedido a la prueba de entrega
            </h2>
            <p className="mt-5 text-lg text-white/70">
              Cinco pasos, una sola plataforma. Así se ve una orden desde que entra hasta
              que tu dirección de operaciones la ve reflejada en el dashboard.
            </p>
          </m.div>

          <div className="mx-auto mt-14 max-w-[1100px] relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-8 top-12 bottom-12 w-px bg-gradient-to-b from-[#006EFA]/50 via-white/10 to-transparent lg:hidden"
            />
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-5 lg:gap-4">
              {STEPS.map(({ n, icon: Icon, title, description }, i) => (
                <m.div
                  key={n}
                  initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
                  className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#006EFA]/15 text-[#5DB0F5] ring-1 ring-[#006EFA]/30">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-proxima text-[28px] font-bold leading-none text-white/15">
                      {n}
                    </span>
                  </div>
                  <h3 className="mt-5 font-proxima text-base font-semibold text-white">
                    {title}
                  </h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-white/65">
                    {description}
                  </p>
                </m.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
