"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import {
  Rocket,
  Languages,
  CreditCard,
  Brain,
  BadgeCheck,
  FileText,
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
    title: "Un login, una factura, una curva de aprendizaje",
    description:
      "Tu equipo opera en minutos, no en meses. Sin pasar de una herramienta a otra. Sin copiar datos entre sistemas. Sin perder contexto en cada salto.",
  },
  {
    n: "02",
    icon: Languages,
    title: "Soporte local en español — tu zona horaria",
    description:
      "No tickets en inglés. No respuestas automáticas con jetlag. Gente que entiende tu mercado, responde rápido y acompaña la implementación hasta el go-live.",
  },
  {
    n: "03",
    icon: CreditCard,
    title: "Integraciones de pago y comunicación locales",
    description:
      "Mercado Pago, OXXO Pay, WhatsApp Business, Stripe, PayPal. Tus clientes pagan como quieren pagar — y tu equipo cobra desde donde ya trabaja.",
  },
  {
    n: "04",
    icon: Brain,
    title: "IA privada integrada — conectada a Lattice",
    description:
      "Copilotos que califican leads mientras tu equipo duerme, responden preguntas mientras tu equipo come, y agendan citas mientras tu equipo cierra. Contexto del mercado mexicano, no APIs genéricas.",
  },
  {
    n: "05",
    icon: BadgeCheck,
    title: "Meta Business Partner — integración oficial",
    description:
      "Integración oficial y verificada con el ecosistema de Meta Ads. Campañas que generan leads directo al CRM — sin webhooks frágiles ni exportaciones manuales.",
  },
  {
    n: "06",
    icon: FileText,
    title: "Todo en una factura, en MXN, con CFDI 4.0",
    description:
      "Plataforma, consumos de WhatsApp, SMS, llamadas e IA — todo facturado en pesos. Sin conversiones de moneda. Sin facturas de cinco proveedores distintos. Sin sorpresas en dólares.",
  },
];

export function SalesHubDifferentiators() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={ref}
        className="relative bg-slate-50 py-24 lg:py-32"
        aria-label="Por qué SalesHub"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-[720px] text-center"
          >
            <span className="inline-block rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-slate-600">
              Por qué SalesHub
            </span>
            <h2 className="mt-5 font-proxima text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl">
              Seis razones por las que los equipos comerciales lo eligen
            </h2>
          </m.div>

          <div className="mx-auto mt-14 max-w-[1160px] grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {REASONS.map(({ n, icon: Icon, title, description }, i) => (
              <m.div
                key={n}
                initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="relative rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#10B981]/10 text-[#047857] ring-1 ring-[#10B981]/20">
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
