"use client";

import { useRef } from "react";
import Link from "next/link";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { useLocale } from "@/i18n/DictionaryProvider";

/* ── i18n translations ────────────────────────────────────────── */

const T = {
  es: {
    badge: "Seguridad & Privacidad",
    title: "Seguridad por diseño,\nprivacidad por defecto",
    subtitle:
      "Lattice opera bajo arquitectura zero-trust. Tus datos nunca salen de tu infraestructura y cada acción queda registrada en una auditoría inmutable.",
    cta: "Solicitar evaluación de seguridad",
    ctaHref: "/empresa/contacto",
    secondary: "Ver cumplimiento normativo",
    secondaryHref: "#cumplimiento",
    trustSignals: [
      "AES-256 en reposo",
      "TLS 1.3 en tránsito",
      "RBAC granular",
      "Sin retención en Sintérgica AI",
      "ISO 27001 ready",
    ],
  },
  en: {
    badge: "Security & Privacy",
    title: "Secure by design,\nprivate by default",
    subtitle:
      "Lattice operates on a zero-trust architecture. Your data never leaves your infrastructure and every action is recorded in an immutable audit log.",
    cta: "Request security assessment",
    ctaHref: "/empresa/contacto",
    secondary: "View regulatory compliance",
    secondaryHref: "#cumplimiento",
    trustSignals: [
      "AES-256 at rest",
      "TLS 1.3 in transit",
      "Granular RBAC",
      "No retention at Sintérgica AI",
      "ISO 27001 ready",
    ],
  },
  "pt-br": {
    badge: "Segurança & Privacidade",
    title: "Segurança por design,\nprivacidade por padrão",
    subtitle:
      "Lattice opera sob arquitetura zero-trust. Seus dados nunca saem da sua infraestrutura e cada ação é registrada em uma auditoria imutável.",
    cta: "Solicitar avaliação de segurança",
    ctaHref: "/empresa/contacto",
    secondary: "Ver conformidade regulatória",
    secondaryHref: "#cumplimiento",
    trustSignals: [
      "AES-256 em repouso",
      "TLS 1.3 em trânsito",
      "RBAC granular",
      "Sem retenção na Sintérgica AI",
      "ISO 27001 ready",
    ],
  },
} as const;

export function SecurityHero() {
  const locale = useLocale();
  const t = T[locale] ?? T.es;
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
    <LazyMotion features={domAnimation}>
      <section className="relative overflow-hidden bg-brand-surface dark:bg-brand-midnight pt-32 pb-24 px-6">
        {/* Background image */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Image
            src="/images/Foto Premium gestión de documentos.jpg"
            alt=""
            fill
            className="object-cover opacity-[0.12]"
            sizes="100vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-surface/85 via-brand-surface/75 to-brand-surface dark:from-brand-midnight/85 dark:via-brand-midnight/75 dark:to-brand-midnight" />
        </div>

        {/* Background glows */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -left-40 -top-40 h-[600px] w-[600px] rounded-full bg-brand-accent/5 blur-3xl" />
          <div className="absolute -bottom-20 -right-40 h-[400px] w-[400px] rounded-full bg-brand-accent-light/5 blur-3xl" />
          {/* Shield grid pattern */}
          <div className="dot-grid absolute inset-0 opacity-30" />
        </div>

        <div ref={ref} className="relative mx-auto max-w-4xl text-center">
          {/* Shield icon */}
          <m.div
            {...anim(0)}
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-brand-accent/20 bg-brand-accent/10"
          >
            <ShieldCheck className="h-8 w-8 text-brand-accent" />
          </m.div>

          <m.span
            {...anim(0.05)}
            className="inline-flex items-center rounded-full border border-brand-accent/20 bg-brand-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-accent"
          >
            {t.badge}
          </m.span>

          <m.h1
            {...anim(0.1)}
            className="mt-6 font-proxima text-4xl font-extrabold leading-tight text-brand-midnight dark:text-brand-white md:text-5xl lg:text-6xl"
          >
            {t.title.split("\n").map((line, i) => (
              <span key={i} className={i === 1 ? "text-brand-accent" : ""}>
                {line}
                {i === 0 && <br />}
              </span>
            ))}
          </m.h1>

          <m.p
            {...anim(0.2)}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-brand-midnight/70 dark:text-brand-white/70"
          >
            {t.subtitle}
          </m.p>

          <m.div
            {...anim(0.3)}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href={t.ctaHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-accent px-8 py-3.5 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-accent/25"
            >
              {t.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={t.secondaryHref}
              className="inline-flex items-center justify-center rounded-full border border-brand-midnight/15 dark:border-brand-white/15 px-8 py-3.5 font-semibold text-brand-midnight dark:text-brand-white transition-colors hover:bg-brand-midnight/[0.03] dark:hover:bg-brand-white/[0.05]"
            >
              {t.secondary}
            </a>
          </m.div>

          <m.div
            {...anim(0.4)}
            className="mt-8 flex flex-wrap justify-center gap-4"
          >
            {t.trustSignals.map((s) => (
              <span
                key={s}
                className="flex items-center gap-1.5 text-xs text-brand-midnight/45 dark:text-brand-white/45"
              >
                <span className="h-1 w-1 rounded-full bg-brand-accent" />
                {s}
              </span>
            ))}
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
