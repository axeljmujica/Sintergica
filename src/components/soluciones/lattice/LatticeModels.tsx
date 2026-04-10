"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { Globe, Layers, Lock, Sparkles, ArrowUpRight } from "lucide-react";

const MODELS = [
  {
    icon: Globe,
    name: "Na'at",
    badge: "Open Source",
    badgeColor: "bg-emerald-500/10 text-emerald-400",
    description:
      "Modelo especializado para México y LATAM. Entrenado sobre un corpus de normativa mexicana, español regional y contexto regulatorio latinoamericano. Tres variantes según escala y costo: Na'at 4B, Na'at 9B y Na'at Full.",
    note: "Open source con atribución obligatoria.",
    link: "https://huggingface.co/sintergica",
  },
  {
    icon: Layers,
    name: "Seeb",
    badge: "Especializado",
    badgeColor: "bg-[#006EFA]/10 text-[#006EFA]",
    description:
      "Familia de Small Language Models especializados por vertical: Legal, Gobierno, Logística, Energía, Salud y Financiero. Cada modelo conoce la terminología, los procesos y la regulación específica de su industria.",
    note: "Disponible en dos variantes: Seeb (estándar) y Seeb Pro.",
    link: null,
  },
  {
    icon: Lock,
    name: "Fine-tuning privado",
    badge: "Enterprise",
    badgeColor: "bg-amber-500/10 text-amber-400",
    description:
      "Ajusta un modelo Seeb con los datos exclusivos de tu organización. El modelo resultante opera exclusivamente dentro de Lattice para tu empresa — nadie más lo usa, nadie más accede a tus datos de entrenamiento.",
    note: null,
    link: null,
  },
  {
    icon: Sparkles,
    name: "Modelos globales",
    badge: "Integrado",
    badgeColor: "bg-purple-500/10 text-purple-400",
    description:
      "Lattice también integra los principales modelos de última generación del mercado. Tu equipo elige el modelo por canal o por sesión, con control de costos visible antes de cada ejecución.",
    note: "GPT-4, Claude, Gemini, Llama y más.",
    link: null,
  },
];

export function LatticeModels() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={ref}
        className="relative bg-[#0d101e] py-24 lg:py-32"
        aria-label="Modelos de Lattice"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-[640px] text-center"
          >
            <h2 className="font-gilroy text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Los modelos que entienden México
            </h2>
            <p className="mt-5 text-lg text-white/65">
              Lattice no depende de un solo proveedor de IA. Integra modelos globales de frontera y modelos propios especializados para el contexto local.
            </p>
          </m.div>

          {/* 4-column grid */}
          <div className="mx-auto mt-14 grid max-w-[1120px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {MODELS.map(({ icon: Icon, name, badge, badgeColor, description, note, link }, i) => (
              <m.div
                key={name}
                initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
                className="group flex flex-col rounded-2xl border border-white/[0.06] bg-[#040615] p-7 transition-all duration-200 hover:border-white/[0.12] hover:shadow-[0_8px_24px_rgba(0,106,250,0.06)]"
              >
                {/* Icon glyph */}
                <Icon className="mb-5 h-7 w-7 text-[#006EFA]" />

                {/* Name + badge */}
                <div className="mb-4 flex items-center gap-2.5">
                  <h3 className="text-lg font-semibold text-white">{name}</h3>
                  {link && (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver ${name}`}
                      className="text-white/30 transition-colors hover:text-[#006EFA]"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>

                <span className={`mb-4 inline-block w-fit rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider ${badgeColor}`}>
                  {badge}
                </span>

                {/* Description */}
                <p className="flex-1 text-[14px] leading-relaxed text-white/55">
                  {description}
                </p>

                {/* Note */}
                {note && (
                  <p className="mt-4 text-[12px] italic text-white/35">
                    {note}
                  </p>
                )}
              </m.div>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
