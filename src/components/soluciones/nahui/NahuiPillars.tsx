"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { Navigation, Brain } from "lucide-react";

export function NahuiPillars() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={ref}
        className="relative bg-white py-24 lg:py-32"
        aria-label="El sistema que tu operación necesita hoy"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-[780px] text-center"
          >
            <h2 className="font-proxima text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
              El sistema que tu operación necesita hoy
            </h2>
          </m.div>

          <div className="mx-auto mt-14 grid max-w-[1120px] grid-cols-1 gap-6 md:grid-cols-2">
            <m.div
              initial={shouldReduce ? false : { opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#006EFA]/10 text-[#006EFA] ring-1 ring-[#006EFA]/20">
                <Navigation className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-proxima text-[22px] font-semibold text-slate-900">
                Todo lo que un director de operaciones necesita — en un solo lugar
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                Nahui combina en una sola plataforma dónde está cada unidad, qué lleva,
                quién la conduce, cuándo llega y qué pasó si algo salió mal — con prueba
                digital verificable de cada entrega.
              </p>
            </m.div>

            <m.div
              initial={shouldReduce ? false : { opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: 0.2 }}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#9333EA]/10 text-[#9333EA] ring-1 ring-[#9333EA]/20">
                <Brain className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-proxima text-[22px] font-semibold text-slate-900">
                Conectado a Lattice — tu copiloto de IA privada
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-slate-600">
                Nahui está conectado a Lattice, el ecosistema de IA de Sintérgica. Tu
                plataforma logística tiene copilotos que analizan patrones, detectan
                anomalías, predicen retrasos y optimizan rutas — todo dentro de tu propia
                infraestructura, sin enviar tus datos a servidores de terceros.
              </p>
            </m.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
