"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import {
  Rocket,
  MapPinned,
  ShieldCheck,
  Plug,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

type Reason = {
  n: string;
  icon: LucideIcon;
  title: string;
  description: string;
};

const REASONS: Reason[] = [
  {
    n: "01",
    icon: Rocket,
    title: "Operativo en semanas, no en meses",
    description:
      "El plan Starter está listo en 2 a 3 semanas. Los planes más complejos tienen timeline personalizado, pero siempre con equipo dedicado de implementación.",
  },
  {
    n: "02",
    icon: MapPinned,
    title: "Diseñado para México y LATAM",
    description:
      "No es software global traducido. Entiende casetas, aduanas internas, zonas de riesgo, normatividad SAT y las realidades del territorio. Eso no se resuelve con un parche de localización.",
  },
  {
    n: "03",
    icon: ShieldCheck,
    title: "IA privada real — no una API que filtra tus datos",
    description:
      "Lattice procesa dentro de tu infraestructura. Tus rutas, tus clientes, tus volúmenes y tus márgenes quedan en tu control. Nada se envía a un servidor en Virginia.",
  },
  {
    n: "04",
    icon: Plug,
    title: "Se conecta con lo que ya usas",
    description:
      "ERP, WMS, e-commerce, facturación SAT. Sin migración forzada. Sin cambiar tu stack. Nahui se adapta a tu operación, no al revés.",
  },
  {
    n: "05",
    icon: TrendingUp,
    title: "Creces sin cambiar de plataforma",
    description:
      "Del piloto con una ruta a miles de unidades multi-cliente: misma plataforma, mismo modelo de datos. Control total de tu proyecto desde el primer día.",
  },
];

export function NahuiComparison() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={ref}
        className="relative bg-white py-24 lg:py-32"
        aria-label="Por qué Nahui"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-[720px] text-center"
          >
            <span className="inline-block rounded-full border border-slate-200 bg-slate-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-600">
              Por qué Nahui
            </span>
            <h2 className="mt-5 font-proxima text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
              Cinco razones por las que tu operación lo elige
            </h2>
          </m.div>

          <div className="mx-auto mt-14 max-w-[1100px] grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {REASONS.map(({ n, icon: Icon, title, description }, i) => (
              <m.div
                key={n}
                initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="relative rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#006EFA]/10 text-[#006EFA] ring-1 ring-[#006EFA]/20">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-proxima text-[28px] font-bold leading-none text-slate-200">
                    {n}
                  </span>
                </div>
                <h3 className="mt-5 font-proxima text-lg font-semibold text-slate-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
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
