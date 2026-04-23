"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { Image as ImageIcon, Rocket, Building2, Crown, CheckCircle2, type LucideIcon } from "lucide-react";
import Image from "next/image";

type Plan = {
  icon: LucideIcon;
  name: string;
  subtitle: string;
  bestFor: string;
  highlights: string[];
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    icon: Rocket,
    name: "Starter",
    subtitle: "Para arrancar tu motor comercial",
    bestFor: "Equipos de 1–5 personas que salen del Excel, WhatsApp personal y la bandeja de Gmail.",
    highlights: [
      "CRM + pipeline visual",
      "Landing pages y formularios",
      "Email marketing básico",
      "Agenda de citas con recordatorios",
      "Integración WhatsApp Business",
      "Soporte en español",
    ],
  },
  {
    icon: Building2,
    name: "Growth",
    subtitle: "Cuando el pipeline te pasa a ti",
    bestFor: "Equipos comerciales que ya tienen volumen y necesitan automatizar nurturing, workflows y alertas.",
    highlights: [
      "Todo lo de Starter",
      "Automatizaciones ilimitadas",
      "Email masivo y segmentación avanzada",
      "Reportes por vendedor y canal",
      "Integración con Meta Ads / Google Ads",
      "IA comercial básica (calificación)",
    ],
    featured: true,
  },
  {
    icon: Crown,
    name: "Scale",
    subtitle: "Para cuando escala toma forma",
    bestFor: "Operaciones multi-marca, multi-equipo o con necesidades regulatorias y de IA avanzada.",
    highlights: [
      "Todo lo de Growth",
      "Copilotos IA avanzados (voz + chat)",
      "Agent Studio y workflows premium",
      "Integración Lattice Platform",
      "Multi-usuario + roles avanzados",
      "Equipo de implementación dedicado",
    ],
  },
];

const CONSUMPTION = [
  "Números de teléfono locales",
  "SMS y MMS (por segmento entregado)",
  "WhatsApp Business (templates marketing, utility, auth)",
  "Llamadas de voz (entrantes y salientes)",
  "Voice AI — agentes que atienden solos",
  "Conversation AI — chat y mensajería con IA",
  "Email masivo sobre el límite incluido",
  "Automatizaciones premium (IA en workflows)",
];

export function SalesHubPricing() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={ref}
        className="relative overflow-hidden bg-black py-24 lg:py-32"
        aria-label="Planes y consumos de SalesHub"
      >
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
          <Image
            src="/images/2152031809.jpg"
            alt=""
            fill
            className="object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-black/80" />
        </div>
        <div className="pointer-events-none absolute left-1/2 top-0 z-[1] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#10B981]/[0.07] blur-[130px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-[720px] text-center"
          >
            <span className="inline-block rounded-full border border-[#10B981]/30 bg-[#10B981]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#34D399]">
              Planes y precios
            </span>
            <h2 className="mt-5 font-proxima text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Un plan para cada etapa — todo en pesos, todo con CFDI
            </h2>
            <p className="mt-5 text-lg text-white/70">
              La licencia mensual cubre la plataforma. Los consumos de WhatsApp, SMS,
              llamadas e IA se facturan por uso — todo junto, en MXN, con CFDI 4.0.
            </p>
          </m.div>

          {/* Plans */}
          <div className="mx-auto mt-14 grid max-w-[1160px] grid-cols-1 gap-5 md:grid-cols-3">
            {PLANS.map(({ icon: Icon, name, subtitle, bestFor, highlights, featured }, i) => (
              <m.div
                key={name}
                initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className={`relative overflow-hidden rounded-2xl border p-7 backdrop-blur-sm transition-all duration-300 ${
                  featured
                    ? "border-[#10B981]/40 bg-[#10B981]/[0.06] shadow-[0_8px_32px_rgba(16,185,129,0.15)]"
                    : "border-white/[0.08] bg-white/[0.03] hover:border-[#10B981]/25"
                }`}
              >
                {featured && (
                  <span className="absolute right-5 top-5 rounded-full bg-[#10B981] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#052e1c]">
                    Recomendado
                  </span>
                )}
                <div
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ring-1 ${
                    featured
                      ? "bg-[#10B981]/20 text-[#34D399] ring-[#10B981]/40"
                      : "bg-[#10B981]/10 text-[#34D399] ring-[#10B981]/20"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-proxima text-[22px] font-bold text-white">
                  {name}
                </h3>
                <p className="mt-1 text-sm font-medium text-[#34D399]">{subtitle}</p>
                <p className="mt-3 text-[13px] leading-relaxed text-white/60">{bestFor}</p>
                <ul className="mt-5 space-y-2">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-[13px] text-white/75">
                      <CheckCircle2 className="mt-[2px] h-3.5 w-3.5 shrink-0 text-[#34D399]" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </m.div>
            ))}
          </div>

          {/* Consumption + CTA */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.55 }}
            className="mx-auto mt-12 max-w-[1160px] rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8 backdrop-blur-sm"
          >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-[#34D399]">
                  <ImageIcon className="h-3.5 w-3.5" />
                  Consumos adicionales
                </div>
                <p className="mt-3 font-proxima text-[20px] font-semibold text-white">
                  Se facturan por uso real — sin sorpresas ni conversiones
                </p>
                <p className="mt-3 text-[14px] leading-relaxed text-white/65">
                  Los planes cubren la plataforma. Comunicación, telefonía, WhatsApp e IA
                  se cobran por consumo real y se facturan al cierre de cada período junto
                  con la mensualidad. Se emite CFDI 4.0 en MXN por todo.
                </p>
                <ul className="mt-5 grid grid-cols-1 gap-1.5 text-[13px] text-white/70 sm:grid-cols-2">
                  {CONSUMPTION.map((c) => (
                    <li key={c} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#34D399]" />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="/diagnostico"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#10B981] px-7 text-sm font-semibold text-[#052e1c] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#34D399] hover:shadow-lg hover:shadow-[#10B981]/25"
              >
                Cotiza tu plan en 45 min →
              </a>
            </div>
          </m.div>

          <p className="mx-auto mt-6 max-w-[780px] text-center text-[12px] leading-relaxed text-white/45">
            SalesHub opera como revendedor autorizado — el precio final incluye margen
            operativo e integración. Meta Business Partner. CFDI 4.0 emitido en MXN por
            plataforma y consumos. Rate card vigente disponible en el portal de cliente.
          </p>
        </div>
      </section>
    </LazyMotion>
  );
}
