"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import Image from "next/image";
import { Bot, Workflow, Shield, MessageCircle } from "lucide-react";

const MICRO_FEATURES = [
  { icon: MessageCircle, label: "Chat inteligente" },
  { icon: Bot, label: "Agentes autónomos" },
  { icon: Workflow, label: "Automatizaciones sin código" },
  { icon: Shield, label: "Datos en tu infraestructura" },
];

export function LatticeHero() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
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
    <LazyMotion features={domAnimation} strict>
      <section
        className="relative overflow-hidden bg-[#040615]"
        aria-label="Lattice Hero"
      >
        {/* Radial glow */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-[#006EFA]/[0.08] blur-[120px]" />
        </div>

        <div
          ref={ref}
          className="relative mx-auto w-full max-w-7xl px-6 py-24 pt-32 lg:px-8 text-center flex flex-col items-center"
        >
          {/* Copy */}
          <div className="max-w-4xl flex flex-col items-center">
            {/* Badge */}
            <m.span
              {...anim(0)}
              className="inline-flex items-center rounded-full border border-[#006EFA]/20 bg-[#006EFA]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#006EFA]"
            >
              Lattice Platform
            </m.span>

            {/* H1 */}
            <m.h1
              {...anim(0.1)}
              className="mt-6 font-gilroy text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl text-balance"
            >
              El sistema operativo de IA para tu organización.
            </m.h1>

            {/* Subtitle */}
            <m.p
              {...anim(0.2)}
              className="mt-6 max-w-2xl text-lg text-white/70 text-balance"
            >
              Chat inteligente, agentes autónomos, automatizaciones sin código y modelos
              entrenados en el contexto de México y LATAM — todo integrado.
              Con tus datos en tu infraestructura.
            </m.p>

            {/* Micro-features chips */}
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

            {/* CTAs */}
            <m.div
              {...anim(0.4)}
              className="mt-10 flex flex-col gap-4 sm:flex-row justify-center"
            >
              <a
                href="https://sales.sintergica.ai/widget/booking/vh6cQRURUU1nU5nslpu4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#006EFA] px-8 py-3.5 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0058CC] hover:shadow-lg hover:shadow-[#006EFA]/25"
              >
                Solicitar demo →
              </a>
              <a
                href="#capacidades"
                className="inline-flex items-center justify-center rounded-full border border-white/[0.12] px-8 py-3.5 font-semibold text-white transition-colors hover:bg-white/[0.05]"
              >
                Ver capacidades →
              </a>
            </m.div>
          </div>

          {/* Mockup — below copy, same as Nahui pattern */}
          <m.div
            className="mt-16 w-full max-w-[1100px] [mask-image:linear-gradient(to_bottom,black_80%,transparent_100%)]"
            {...(shouldReduce
              ? {}
              : {
                  initial: { opacity: 0, y: 32 },
                  animate: isInView ? { opacity: 1, y: 0 } : {},
                  transition: { duration: 0.7, delay: 0.5 },
                })}
          >
            <Image
                src="/images/mockup.png"
                alt="Lattice Platform — interfaz de chat, agentes y automatizaciones"
                width={1100}
                height={693}
                className="w-full rounded-2xl shadow-2xl"
                priority
              />
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
