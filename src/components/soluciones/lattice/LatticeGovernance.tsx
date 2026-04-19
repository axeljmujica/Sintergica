"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { Shield, Settings, Plug, Server, ArrowRight } from "lucide-react";

const FEATURES = [
  {
    icon: Shield,
    title: "Seguridad por arquitectura",
    description:
      "Arquitectura zero-trust con 16 capas de seguridad independientes. Motor construido en Rust — un lenguaje que elimina por diseño clases enteras de vulnerabilidades. Encriptación AES-256-GCM en reposo, TLS 1.3 en tránsito. Los secretos se eliminan de memoria inmediatamente después de usarse.",
    cta: "Ver las 16 capas",
    href: "#seguridad-capas",
  },
  {
    icon: Settings,
    title: "Completamente personalizable",
    description:
      "Cada canal tiene su propio modelo asignado, base de conocimiento y reglas de acceso. Crea agentes especializados con herramientas específicas, ajusta modelos con tus datos mediante fine-tuning de Seeb, y despliega flujos de automatización adaptados a tus procesos.",
    cta: null,
    href: null,
  },
  {
    icon: Plug,
    title: "Interoperable por diseño",
    description:
      "Más de 40 adaptadores de canal: WhatsApp, Telegram, Slack, Teams, correo electrónico y más. APIs flexibles para conectar ERP, CRM, bases de datos y sistemas legacy. Compatible con los principales estándares de integración.",
    cta: null,
    href: null,
  },
  {
    icon: Server,
    title: "Desplegable en tu infraestructura",
    description:
      "Cuatro modalidades: SaaS gestionado, nube privada (VPC), on-premise completo o híbrido. Funciona desde AWS Querétaro hasta un servidor air-gapped sin conexión a internet. Tú decides dónde viven tus datos.",
    cta: "Conocer más",
    href: "#comparativa",
  },
];

export function LatticeGovernance() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={ref}
        className="relative overflow-hidden bg-[#0a1628] py-24 lg:py-32"
        aria-label="Seguridad y gobernanza"
      >
        {/* Decorative glows */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-[#006EFA]/[0.08] blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-32 right-1/4 h-[400px] w-[400px] rounded-full bg-[#9333EA]/[0.06] blur-[100px]" />

        {/* Grid pattern overlay */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 h-full w-full text-white/[0.02]"
        >
          <defs>
            <pattern
              id="governance-grid"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 48 0 L 0 0 0 48"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#governance-grid)" />
        </svg>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-[680px] text-center"
          >
            <span className="inline-block rounded-full border border-[#006EFA]/30 bg-[#006EFA]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#5DB0F5]">
              Privado. Seguro. Auditable.
            </span>
            <h2 className="mt-5 font-proxima text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Enterprise-ready. De verdad.
            </h2>
            <p className="mt-5 text-lg text-white/70">
              Todo lo que tu equipo de seguridad, legal y compliance exige — resuelto en la
              arquitectura, no en un checklist de marketing.
            </p>
          </m.div>

          {/* 2×2 Grid */}
          <div className="mx-auto mt-14 grid max-w-[1120px] grid-cols-1 gap-6 md:grid-cols-2">
            {FEATURES.map(({ icon: Icon, title, description, cta, href }, i) => (
              <m.div
                key={title}
                initial={shouldReduce ? false : { opacity: 0, scale: 0.97 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
                className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-10 backdrop-blur-sm transition-all duration-300 hover:border-[#006EFA]/30 hover:shadow-[0_8px_32px_rgba(0,106,250,0.12)]"
              >
                {/* Icon container */}
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#006EFA]/15 text-[#5DB0F5] ring-1 ring-[#006EFA]/25">
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="font-proxima text-[22px] font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-white/65">
                  {description}
                </p>

                {cta && href && (
                  <a
                    href={href}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#5DB0F5] transition-all duration-200 group-hover:gap-2.5"
                  >
                    {cta} <ArrowRight className="h-4 w-4" />
                  </a>
                )}
              </m.div>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
