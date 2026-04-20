"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { ShieldCheck, FileText, Eye, Lock, Scale, Server } from "lucide-react";

const PILLARS = [
  {
    icon: Lock,
    title: "Privado por diseño",
    desc: "Tus datos nunca salen de tu infraestructura. Sin telemetría. Sin retención en Sintérgica. Sin APIs de terceros procesando tu información.",
    accent: "text-brand-accent",
    bg: "bg-brand-accent/10",
    border: "border-brand-accent/20",
    glow: "bg-brand-accent/5",
  },
  {
    icon: ShieldCheck,
    title: "Seguro en la arquitectura",
    desc: "Zero-trust, RBAC granular, encriptación AES-256-GCM en reposo y TLS 1.3 en tránsito. Construido en Rust — sin clases enteras de vulnerabilidades por diseño.",
    accent: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
    glow: "bg-emerald-500/5",
  },
  {
    icon: Eye,
    title: "Auditable de punta a punta",
    desc: "Merkle Audit Trail inmutable. Cada acción del agente queda registrada con hash verificable. Cumple LGTAIP, ISO 27001 y es compatible con SOC 2.",
    accent: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
    glow: "bg-violet-500/5",
  },
  {
    icon: FileText,
    title: "Compliance listo para producción",
    desc: "LFPDPPP, LGTAIP, normativa CNBV y CRE. Documentación de controles exportable para auditorías. No es un checklist de marketing — es infraestructura verificable.",
    accent: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/20",
    glow: "bg-amber-500/5",
  },
  {
    icon: Scale,
    title: "Legal y jurídico cubierto",
    desc: "Contratos de procesamiento de datos en español. Jurisdicción mexicana. Cláusulas de responsabilidad claras. Tu equipo legal sabrá exactamente qué firmar.",
    accent: "text-sky-600 dark:text-sky-400",
    bg: "bg-sky-500/10",
    border: "border-sky-500/20",
    glow: "bg-sky-500/5",
  },
  {
    icon: Server,
    title: "Despliegue en tu infraestructura",
    desc: "AWS Querétaro, nube privada, on-premise o air-gapped. Tú decides dónde viven los datos. Nosotros garantizamos que el modelo funcione igual en todos los entornos.",
    accent: "text-rose-600 dark:text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
    glow: "bg-rose-500/5",
  },
];

export function LatticeEnterpriseReady() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section
        ref={ref}
        className="relative overflow-hidden bg-brand-midnight py-24 lg:py-32"
        aria-label="Enterprise-ready"
      >
        {/* Subtle background glows */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-brand-accent/8 blur-3xl" />
          <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-violet-600/8 blur-3xl" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/60">
              Enterprise-ready. De verdad.
            </span>

            <h2 className="mt-5 font-proxima text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              Privado. Seguro. Auditable.
            </h2>

            <p className="mt-5 max-w-xl text-lg text-white/65">
              Todo lo que tu equipo de seguridad, legal y compliance exige — resuelto en la arquitectura, no en un checklist de marketing.
            </p>
          </m.div>

          {/* Pillars grid */}
          <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <m.div
                  key={pillar.title}
                  initial={shouldReduce ? false : { opacity: 0, y: 28 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                  className={`group relative overflow-hidden rounded-2xl border ${pillar.border} bg-white/[0.04] p-6 transition-all hover:-translate-y-1 hover:bg-white/[0.07]`}
                >
                  {/* Glow blob */}
                  <div className={`pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full ${pillar.glow} blur-2xl`} aria-hidden />

                  <div className={`flex h-11 w-11 items-center justify-center rounded-lg ${pillar.bg}`}>
                    <Icon className={`h-5 w-5 ${pillar.accent}`} />
                  </div>

                  <h3 className={`mt-4 font-proxima text-lg font-semibold ${pillar.accent}`}>
                    {pillar.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {pillar.desc}
                  </p>
                </m.div>
              );
            })}
          </div>

          {/* Bottom note */}
          <m.p
            initial={shouldReduce ? false : { opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-10 text-xs text-white/35 max-w-xl"
          >
            Documentación de controles disponible bajo NDA para equipos de seguridad y compliance. Solicítala en tu diagnóstico.
          </m.p>
        </div>
      </section>
    </LazyMotion>
  );
}
