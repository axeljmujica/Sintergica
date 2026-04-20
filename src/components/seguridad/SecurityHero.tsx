"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  LazyMotion,
  domAnimation,
  m,
  useInView,
  useReducedMotion,
} from "motion/react";
import { ArrowRight, CheckCircle, ShieldCheck } from "lucide-react";
import { useLocale } from "@/i18n/DictionaryProvider";

/* ── i18n ─────────────────────────────────────────────────────── */

const T = {
  es: {
    badge: "Seguridad & Privacidad",
    title: "Seguridad por diseño,\nprivacidad por defecto.",
    subtitle:
      "Lattice opera bajo arquitectura zero-trust. Tus datos nunca salen de tu infraestructura y cada acción queda registrada en una auditoría inmutable.",
    cta: "Solicitar evaluación de seguridad",
    ctaHref: "https://sales.sintergica.ai/widget/booking/vh6cQRURUU1nU5nslpu4",
    secondary: "Ver cumplimiento normativo",
    secondaryHref: "#cumplimiento",
    trust: [
      "AES-256 en reposo",
      "TLS 1.3 en tránsito",
      "RBAC granular",
      "Sin retención en Sintérgica AI",
    ],
    statusLabel: "Producción",
    statusHint: "Arquitectura vigente · auditable",
  },
  en: {
    badge: "Security & Privacy",
    title: "Secure by design,\nprivate by default.",
    subtitle:
      "Lattice operates on a zero-trust architecture. Your data never leaves your infrastructure and every action is recorded in an immutable audit log.",
    cta: "Request security assessment",
    ctaHref: "https://sales.sintergica.ai/widget/booking/vh6cQRURUU1nU5nslpu4",
    secondary: "View regulatory compliance",
    secondaryHref: "#cumplimiento",
    trust: [
      "AES-256 at rest",
      "TLS 1.3 in transit",
      "Granular RBAC",
      "No retention at Sintérgica AI",
    ],
    statusLabel: "Production",
    statusHint: "Live architecture · auditable",
  },
  "pt-br": {
    badge: "Segurança & Privacidade",
    title: "Segurança por design,\nprivacidade por padrão.",
    subtitle:
      "Lattice opera sob arquitetura zero-trust. Seus dados nunca saem da sua infraestrutura e cada ação é registrada em uma auditoria imutável.",
    cta: "Solicitar avaliação de segurança",
    ctaHref: "https://sales.sintergica.ai/widget/booking/vh6cQRURUU1nU5nslpu4",
    secondary: "Ver conformidade regulatória",
    secondaryHref: "#cumplimiento",
    trust: [
      "AES-256 em repouso",
      "TLS 1.3 em trânsito",
      "RBAC granular",
      "Sem retenção na Sintérgica AI",
    ],
    statusLabel: "Produção",
    statusHint: "Arquitetura vigente · auditável",
  },
} as const;

const STATS = [
  { value: "16", label: "Capas de seguridad", color: "text-brand-accent-light" },
  { value: "AES-256", label: "Cifrado en reposo", color: "text-emerald-300" },
  { value: "TLS 1.3", label: "Cifrado en tránsito", color: "text-sky-300" },
  { value: "0", label: "Retención en Sintérgica", color: "text-purple-300" },
];

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
          initial: { opacity: 0, y: 24 },
          animate: isInView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.6, delay },
        };

  return (
    <LazyMotion features={domAnimation}>
      <section
        className="relative flex min-h-screen flex-col overflow-hidden bg-[#050914]"
        aria-label="Seguridad y privacidad de Lattice"
      >
        {/* Background image */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Image
            src="/images/seguridad-implementacion.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-60"
          />
          {/* Overlays: deep vignette + side gradient for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-[#050914]/65 to-[#050914]/25" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050914]/70 via-transparent to-[#050914]/30" />
          {/* Brand glow */}
          <div className="absolute -top-40 left-1/2 h-[560px] w-[760px] -translate-x-1/2 rounded-full bg-brand-accent/15 blur-[120px]" />
          <div className="absolute bottom-0 right-0 h-[420px] w-[420px] translate-x-1/3 rounded-full bg-emerald-500/10 blur-[100px]" />
          {/* Subtle grid */}
          <div className="dot-grid absolute inset-0 opacity-20" />
        </div>

        <div
          ref={ref}
          className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-6 pt-32 pb-0 text-center"
        >
          {/* Shield mark */}
          <m.div {...anim(0)} className="flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-accent/30 bg-brand-accent/15 backdrop-blur-md">
              <ShieldCheck className="h-7 w-7 text-brand-accent-light" />
            </div>
          </m.div>

          {/* Badge */}
          <m.div {...anim(0.05)} className="mt-6 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-5 py-2 text-[0.75rem] font-mulish font-medium uppercase tracking-widest text-white/80 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-accent-light animate-pulse" />
              {t.badge}
            </span>
          </m.div>

          {/* H1 */}
          <m.h1
            {...anim(0.1)}
            className="mt-7 font-proxima text-4xl font-extrabold leading-[1.08] tracking-tight text-white text-balance sm:text-5xl md:text-6xl lg:text-[4rem]"
          >
            {t.title.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </m.h1>

          {/* Subtitle */}
          <m.p
            {...anim(0.2)}
            className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/75 text-pretty md:text-lg"
          >
            {t.subtitle}
          </m.p>

          {/* CTAs */}
          <m.div
            {...anim(0.3)}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              href={t.ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-14 items-center gap-2 rounded-full bg-brand-accent px-9 text-[1rem] font-mulish font-medium text-white shadow-xl shadow-brand-accent/30 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-brand-accent-light hover:shadow-brand-accent/40"
            >
              {t.cta}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <a
              href={t.secondaryHref}
              className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 bg-white/8 px-8 text-[1rem] font-mulish font-medium text-white backdrop-blur-md transition-colors hover:bg-white/15"
            >
              {t.secondary}
            </a>
          </m.div>

          {/* Trust signals */}
          <m.div
            {...anim(0.4)}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          >
            {t.trust.map((signal) => (
              <span
                key={signal}
                className="flex items-center gap-1.5 text-sm text-white/65"
              >
                <CheckCircle className="h-3.5 w-3.5 shrink-0 text-brand-accent-light" />
                {signal}
              </span>
            ))}
          </m.div>

          {/* Status pill */}
          <m.div
            {...anim(0.5)}
            className="mt-8 flex items-center justify-center gap-2 text-xs text-white/45"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            {t.statusLabel} · {t.statusHint}
          </m.div>

          {/* Stats strip */}
          <m.div
            {...anim(0.6)}
            className="mt-14 grid grid-cols-2 border-t border-white/10 md:grid-cols-4"
          >
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`px-6 py-8 text-center ${
                  i < STATS.length - 1 ? "md:border-r md:border-white/10" : ""
                } ${i % 2 === 0 ? "border-r border-white/10 md:border-r" : ""}`}
              >
                <p className={`font-proxima text-3xl font-bold ${s.color}`}>
                  {s.value}
                </p>
                <p className="mt-2 text-sm text-white/55">{s.label}</p>
              </div>
            ))}
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
