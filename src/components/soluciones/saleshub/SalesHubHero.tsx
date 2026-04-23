"use client";

import { useRef, useState, useEffect } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { Target, TrendingUp, Repeat } from "lucide-react";
import { SalesHubDashboardMockup } from "./ui/SalesHubDashboardMockup";

const MICRO_FEATURES = [
  { icon: Target, label: "Captación automatizada" },
  { icon: TrendingUp, label: "Pipeline con IA" },
  { icon: Repeat, label: "Seguimiento que no falla" },
];

export function SalesHubHero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const shouldReduce = useReducedMotion();
  const [mockupVisible, setMockupVisible] = useState(false);

  useEffect(() => {
    if (!isInView) return;
    const id = setTimeout(() => setMockupVisible(true), 800);
    return () => clearTimeout(id);
  }, [isInView]);

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
        ref={ref}
        className="relative overflow-hidden bg-[#030716]"
        aria-label="SalesHub Hero"
      >
        {/* Glow */}
        <div className="pointer-events-none absolute left-1/2 top-32 -translate-x-1/2 h-[520px] w-[820px] rounded-full bg-[#10B981]/[0.09] blur-[130px]" aria-hidden />
        <div className="pointer-events-none absolute right-1/4 top-[480px] h-[360px] w-[360px] rounded-full bg-[#0EA5E9]/[0.06] blur-[100px]" aria-hidden />

        <div className="relative mx-auto w-full max-w-7xl px-6 py-24 pt-32 lg:px-8 text-center flex flex-col items-center">
          <div className="max-w-4xl flex flex-col items-center">
            <m.span
              {...anim(0)}
              className="inline-flex items-center rounded-full border border-[#10B981]/30 bg-[#10B981]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#34D399]"
            >
              SalesHub · CRM Comercial Inteligente
            </m.span>

            <m.h1
              {...anim(0.1)}
              className="mt-6 font-proxima text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl text-balance"
            >
              Motor comercial completo, con IA, en español.
            </m.h1>

            <m.p
              {...anim(0.2)}
              className="mt-6 max-w-2xl text-lg text-white/70 text-balance"
            >
              CRM, email marketing, funnels, agenda, WhatsApp, reportes e IA en una
              sola plataforma. Con soporte local. Con factura en pesos. Todo en un
              solo login.
            </m.p>

            <m.div {...anim(0.3)} className="mt-8 flex flex-wrap justify-center gap-3">
              {MICRO_FEATURES.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.04] px-3 py-1.5 text-sm text-white/60"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </span>
              ))}
            </m.div>

            <m.div
              {...anim(0.4)}
              className="mt-10 flex flex-col gap-4 sm:flex-row justify-center"
            >
              <a
                href="/diagnostico"
                className="inline-flex items-center justify-center rounded-full bg-[#10B981] px-8 py-3.5 font-semibold text-[#052e1c] transition-all hover:-translate-y-0.5 hover:bg-[#34D399] hover:shadow-lg hover:shadow-[#10B981]/25"
              >
                Solicitar demo de SalesHub →
              </a>
              <a
                href="#capacidades"
                className="inline-flex items-center justify-center rounded-full border border-white/[0.12] px-8 py-3.5 font-semibold text-white transition-colors hover:bg-white/[0.05]"
              >
                Ver capacidades →
              </a>
            </m.div>
          </div>

          <m.div
            className="mt-16 w-full max-w-[1100px] [mask-image:linear-gradient(to_bottom,black_85%,transparent_100%)]"
            {...(shouldReduce
              ? {}
              : {
                  initial: { opacity: 0, y: 32 },
                  animate: isInView ? { opacity: 1, y: 0 } : {},
                  transition: { duration: 0.7, delay: 0.5 },
                })}
          >
            <SalesHubDashboardMockup startAnimation={mockupVisible} />
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
