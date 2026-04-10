"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { Shield, Settings, Plug, Server } from "lucide-react";

const FEATURES = [
  {
    icon: Shield,
    title: "Seguridad por arquitectura",
    description:
      "Arquitectura zero-trust con 16 capas de seguridad independientes. Motor construido en Rust — un lenguaje que elimina por diseño clases enteras de vulnerabilidades. Encriptación AES-256-GCM en reposo, TLS 1.3 en tránsito. Los secretos se eliminan de memoria inmediatamente después de usarse.",
    cta: "Conocer más →",
    href: "#comparativa",
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
    cta: "Conocer más →",
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
        className="relative overflow-hidden bg-[#0d101e] py-24 lg:py-32"
        aria-label="Seguridad y gobernanza"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-[560px] text-center"
          >
            <h2 className="font-gilroy text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Privado. Seguro. Auditable.
            </h2>
            <p className="mt-5 text-lg text-white/65">
              Esto es lo que &quot;enterprise-ready&quot; significa en serio.
            </p>
          </m.div>

          {/* 2×2 Grid */}
          <div className="mx-auto mt-14 grid max-w-[1080px] grid-cols-1 gap-6 md:grid-cols-2">
            {FEATURES.map(({ icon: Icon, title, description, cta, href }, i) => (
              <m.div
                key={title}
                initial={shouldReduce ? false : { opacity: 0, scale: 0.97 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.15 }}
                className="group relative overflow-hidden rounded-[20px] border border-white/[0.06] bg-[#040615] p-10 transition-all duration-250 hover:border-white/[0.1] hover:shadow-[0_8px_24px_rgba(0,106,250,0.06)]"
              >
                {/* Decorative SVG pattern for first card */}
                {i === 0 && (
                  <div className="pointer-events-none absolute inset-0" aria-hidden="true">
                    <svg className="absolute -bottom-8 -right-8 h-48 w-48 text-[#006EFA]/[0.08]" viewBox="0 0 100 100" fill="none">
                      <path d="M10 90L50 10L90 90" stroke="currentColor" strokeWidth="0.5" />
                      <path d="M20 90L50 20L80 90" stroke="currentColor" strokeWidth="0.5" />
                      <path d="M30 90L50 30L70 90" stroke="currentColor" strokeWidth="0.5" />
                    </svg>
                  </div>
                )}

                {/* Decorative modules SVG for second card */}
                {i === 1 && (
                  <div className="pointer-events-none absolute -bottom-4 -right-4" aria-hidden="true">
                    <svg className="h-32 w-32 text-[#006EFA]/[0.15]" viewBox="0 0 80 80" fill="none">
                      <rect x="10" y="10" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="0.5" />
                      <rect x="40" y="10" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="0.5" />
                      <rect x="25" y="40" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="0.5" />
                      <line x1="20" y1="30" x2="35" y2="40" stroke="currentColor" strokeWidth="0.5" />
                      <line x1="50" y1="30" x2="45" y2="40" stroke="currentColor" strokeWidth="0.5" />
                    </svg>
                  </div>
                )}

                <Icon className="mb-6 h-6 w-6 text-[#006EFA]" />
                <h3 className="text-[22px] font-semibold text-white">
                  {title}
                </h3>
                <p className="mt-4 text-[15px] leading-relaxed text-white/60">
                  {description}
                </p>

                {cta && href && (
                  <a
                    href={href}
                    className="mt-6 inline-block text-sm font-medium text-[#006EFA] transition-all duration-200 hover:underline"
                  >
                    {cta}
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
