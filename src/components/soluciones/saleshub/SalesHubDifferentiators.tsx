"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { LayoutGrid, Sparkles, Globe } from "lucide-react";

const DIFFERENTIATORS = [
  {
    icon: LayoutGrid,
    title: "No necesitas 5 herramientas distintas",
    description:
      "CRM, email marketing, funnels, agenda de citas y reportes en una sola plataforma. Un login, una factura, una curva de aprendizaje. Tu equipo opera en minutos, no en meses.",
  },
  {
    icon: Sparkles,
    title: "El único CRM con IA privada integrada",
    description:
      "Habilita copilotos de IA para calificar leads automáticamente, generar contenido personalizado, analizar a la competencia y detectar oportunidades que tu equipo no ve. Inteligencia comercial con contexto mexicano.",
  },
  {
    icon: Globe,
    title: "Interfaz en español. Soporte local.",
    description:
      "Integraciones con plataformas de pago y comunicación locales: Mercado Pago, OXXO Pay, WhatsApp Business, Conekta. Soporte en tu idioma, en tu zona horaria, con gente que entiende tu mercado.",
  },
];

export function SalesHubDifferentiators() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduce = useReducedMotion();

  const anim = (delay: number) =>
    shouldReduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: isInView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.5, delay },
        };

  return (
    <LazyMotion features={domAnimation}>
    <section
      className="bg-brand-surface dark:bg-brand-midnight py-24 px-6"
      aria-label="Diferenciadores de SalesHub"
    >
      <div ref={ref} className="mx-auto max-w-7xl">
        {/* Header */}
        <m.div {...anim(0)} className="text-center">
          <span className="inline-block rounded-full border border-success-600/20 bg-success-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-success-600">
            ¿Por qué SalesHub?
          </span>
          <h2 className="mx-auto mt-5 max-w-3xl font-proxima text-3xl font-bold leading-tight text-brand-midnight dark:text-brand-white md:text-4xl">
            No es otro CRM. Es tu motor comercial completo.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-brand-midnight/60 dark:text-brand-white/60">
            La diferencia entre SalesHub y las demás herramientas: todo está
            conectado, en español, con soporte local y con IA disponible.
          </p>
        </m.div>

        {/* 3 cards */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {DIFFERENTIATORS.map((diff, i) => {
            const Icon = diff.icon;
            return (
              <m.div
                key={diff.title}
                {...anim(0.1 + i * 0.15)}
                className="rounded-2xl border border-brand-midnight/5 dark:border-brand-white/10 bg-brand-surface/60 dark:bg-brand-navy/60 p-10 text-center transition-all duration-300 hover:border-success-600/20"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-success-600/10 text-success-600">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="mb-4 text-xl font-proxima font-semibold text-brand-midnight dark:text-brand-white">
                  {diff.title}
                </h3>
                <p className="text-base leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">
                  {diff.description}
                </p>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
    </LazyMotion>
  );
}
