"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import {
  Megaphone,
  Filter,
  Mail,
  BellRing,
  Trophy,
  type LucideIcon,
} from "lucide-react";

type Step = {
  n: string;
  icon: LucideIcon;
  title: string;
  description: string;
  leads: string;
};

const STEPS: Step[] = [
  {
    n: "01",
    icon: Megaphone,
    title: "Entra el lead",
    description:
      "Tu campaña en Meta Ads genera leads que llegan directo al CRM. Sin formularios de Google. Sin copiar y pegar. Sin bandejas de entrada olvidadas.",
    leads: "1,200",
  },
  {
    n: "02",
    icon: Filter,
    title: "Se califica solo",
    description:
      "El sistema analiza comportamiento — qué páginas visitó, qué emails abrió, cuántas veces regresó — y filtra automáticamente a los que muestran interés real.",
    leads: "840",
  },
  {
    n: "03",
    icon: Mail,
    title: "Se nutre automáticamente",
    description:
      "Secuencias de email y WhatsApp que educan, muestran casos y acercan a la decisión. Todo automatizado. El prospecto avanza sin que nadie mueva un dedo.",
    leads: "380",
  },
  {
    n: "04",
    icon: BellRing,
    title: "Alerta al vendedor",
    description:
      "Cuando un lead está listo — abrió el último email, visitó precios, respondió un mensaje — el sistema notifica al vendedor con nombre, empresa, historial y score.",
    leads: "95",
  },
  {
    n: "05",
    icon: Trophy,
    title: "Cierre y revenue",
    description:
      "El deal se cierra, el revenue se registra y el ROI por canal se calcula automáticamente. Sabes exactamente cuánto te costó cada cliente — por fuente.",
    leads: "28",
  },
];

export function SalesHubFunnel() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={ref}
        className="relative overflow-hidden bg-[#020c1b] py-24 lg:py-32"
        aria-label="El journey del cliente en SalesHub"
      >
        <div className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[780px] -translate-x-1/2 rounded-full bg-[#10B981]/[0.08] blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-[760px] text-center"
          >
            <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/80">
              El journey del cliente
            </span>
            <h2 className="mt-5 font-proxima text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              De 1,200 leads a 28 clientes — sin que tu equipo pierda uno solo
            </h2>
            <p className="mt-5 text-lg text-white/70">
              Así funciona el motor comercial de SalesHub en una operación real. Cinco
              etapas, un solo sistema, cero leads perdidos entre plataformas.
            </p>
          </m.div>

          {/* Funnel numbers bar */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mx-auto mt-12 flex max-w-[1000px] flex-wrap items-center justify-center gap-3 text-[13px] font-semibold text-white/80"
          >
            {["1,200", "840", "380", "95", "28"].map((n, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="rounded-full border border-[#10B981]/30 bg-[#10B981]/10 px-4 py-1.5 font-proxima text-[#34D399]">
                  {n} leads
                </span>
                {i < 4 && <span className="text-white/30">→</span>}
              </div>
            ))}
          </m.div>

          {/* Steps grid */}
          <div className="mx-auto mt-14 max-w-[1200px] relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-8 top-12 bottom-12 w-px bg-gradient-to-b from-[#10B981]/50 via-white/10 to-transparent lg:hidden"
            />
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-5 lg:gap-4">
              {STEPS.map(({ n, icon: Icon, title, description, leads }, i) => (
                <m.div
                  key={n}
                  initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
                  className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
                >
                  <div className="flex items-center justify-between">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#10B981]/15 text-[#34D399] ring-1 ring-[#10B981]/30">
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
                  <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#10B981]/10 px-2.5 py-1 text-[11px] font-bold text-[#34D399] ring-1 ring-[#10B981]/20">
                    {leads} leads
                  </div>
                </m.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
