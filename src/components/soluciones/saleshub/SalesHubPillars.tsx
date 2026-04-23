"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { Layers, Brain } from "lucide-react";

export function SalesHubPillars() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={ref}
        className="relative bg-white py-24 lg:py-32"
        aria-label="Todo tu motor comercial en un solo lugar"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-[820px] text-center"
          >
            <h2 className="font-proxima text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
              Todo tu motor comercial en un solo lugar
            </h2>
            <p className="mx-auto mt-5 max-w-[680px] text-[16px] leading-relaxed text-slate-600">
              Un lead entra por tu landing, se califica automáticamente, recibe una secuencia
              personalizada, agenda una cita cuando está listo y tu vendedor recibe una
              alerta con todo el contexto. Tú solo ves el dashboard — funcionando desde el
              primer día.
            </p>
          </m.div>

          <div className="mx-auto mt-14 grid max-w-[1120px] grid-cols-1 gap-6 md:grid-cols-2">
            <m.div
              initial={shouldReduce ? false : { opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#10B981]/10 text-[#047857] ring-1 ring-[#10B981]/20">
                <Layers className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-proxima text-[22px] font-semibold text-slate-900">
                Reemplaza 5 plataformas por una
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                SalesHub sustituye CRM, email marketing, landing pages, agenda de citas y
                reportes con un solo sistema donde todo se conecta, todo se mide y todo se
                automatiza. Un login. Una factura en MXN. Una curva de aprendizaje.
              </p>
            </m.div>

            <m.div
              initial={shouldReduce ? false : { opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#4F46E5]/10 text-[#4F46E5] ring-1 ring-[#4F46E5]/20">
                <Brain className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-proxima text-[22px] font-semibold text-slate-900">
                Conectado a Lattice — IA comercial con contexto mexicano
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                SalesHub se integra con Lattice, el ecosistema de IA de Sintérgica. Copilotos
                que califican leads, responden preguntas, agendan citas y detectan patrones
                de compra — entrenados en el contexto regulatorio y cultural de México, no
                en APIs genéricas.
              </p>
            </m.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
