"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import {
  Mail, Phone, ArrowRight,
  Building2, Linkedin, Github, Youtube,
} from "lucide-react";
import Link from "next/link";
import { useLocale } from "@/i18n/DictionaryProvider";

const BOOKING_URL = "/diagnostico";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.261 5.632 5.903-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

/* ────────────────────────────────────────────── */
/*  Inline i18n translations                      */
/* ────────────────────────────────────────────── */
const T = {
  es: {
    badge: "Contacto",
    heroTitle1: "El primer paso hacia la IA privada",
    heroTitle2: " de tu organización.",
    heroDesc:
      "Respondemos en menos de 24 horas hábiles. Equipo en México, con conocimiento real del ecosistema institucional y empresarial de la región.",
    intentEmpresaTitle: "Implementar IA en mi empresa",
    intentEmpresaDesc:
      "Diagnóstico de 90 min, casos de uso con ROI estimado y plan de implementación. Sin permanencia.",
    intentEmpresaCta: "Agendar diagnóstico",
    intentAlianzaTitle: "Alianzas, inversión o academia",
    intentAlianzaDesc:
      "Partners tecnológicos, inversionistas, universidades e instituciones de investigación.",
    intentAlianzaCta: "Escribirnos por WhatsApp",
    intentPrensaTitle: "Prensa, medios o gobierno",
    intentPrensaDesc:
      "Notas de prensa, entrevistas, conferencias y colaboración con instituciones públicas.",
    intentPrensaCta: "Enviar email",
    whatsappLabel: "WhatsApp",
    whatsappNote: "Respuesta rápida · Lun–Vie 9–18 CST",
    emailLabel: "Email",
    phoneLabel: "Teléfono",
    officesTitle: "Sedes en México",
    communityTitle: "Nuestras redes",
    officeCDMX: "Ciudad de México",
    officeCDMXRole: "Sede principal",
    officeBoca: "Boca del Río, Veracruz",
    officeBocaRole: "Centro de operaciones",
    officeXalapa: "Xalapa, Veracruz",
    officeXalapaRole: "Investigación & Labs",
    trustTitle: "Reconocimientos y membresías",
    trustCta: "Agendar diagnóstico gratuito",
    trustNote: "90 min · Sin permanencia · ROI estimado incluido",
  },
  en: {
    badge: "Contact",
    heroTitle1: "The first step towards private AI",
    heroTitle2: " for your organization.",
    heroDesc:
      "We respond within 24 business hours. Team based in Mexico, with real knowledge of the regional institutional and business ecosystem.",
    intentEmpresaTitle: "Implement AI in my company",
    intentEmpresaDesc:
      "90-minute assessment, use cases with estimated ROI and implementation plan. No lock-in.",
    intentEmpresaCta: "Schedule assessment",
    intentAlianzaTitle: "Partnerships, investment or academia",
    intentAlianzaDesc:
      "Technology partners, investors, universities and research institutions.",
    intentAlianzaCta: "Write us on WhatsApp",
    intentPrensaTitle: "Press, media or government",
    intentPrensaDesc:
      "Press releases, interviews, conferences and collaboration with public institutions.",
    intentPrensaCta: "Send email",
    whatsappLabel: "WhatsApp",
    whatsappNote: "Quick response · Mon–Fri 9–18 CST",
    emailLabel: "Email",
    phoneLabel: "Phone",
    officesTitle: "Offices in Mexico",
    communityTitle: "Our networks",
    officeCDMX: "Mexico City",
    officeCDMXRole: "Headquarters",
    officeBoca: "Boca del Río, Veracruz",
    officeBocaRole: "Operations center",
    officeXalapa: "Xalapa, Veracruz",
    officeXalapaRole: "Research & Labs",
    trustTitle: "Recognitions & memberships",
    trustCta: "Schedule free assessment",
    trustNote: "90 min · No lock-in · Estimated ROI included",
  },
  "pt-br": {
    badge: "Contato",
    heroTitle1: "O primeiro passo rumo à IA privada",
    heroTitle2: " da sua organização.",
    heroDesc:
      "Respondemos em menos de 24 horas úteis. Equipe no México, com conhecimento real do ecossistema institucional e empresarial da região.",
    intentEmpresaTitle: "Implementar IA na minha empresa",
    intentEmpresaDesc:
      "Diagnóstico de 90 min, casos de uso com ROI estimado e plano de implementação. Sem fidelidade.",
    intentEmpresaCta: "Agendar diagnóstico",
    intentAlianzaTitle: "Parcerias, investimento ou academia",
    intentAlianzaDesc:
      "Parceiros tecnológicos, investidores, universidades e instituições de pesquisa.",
    intentAlianzaCta: "Escreva pelo WhatsApp",
    intentPrensaTitle: "Imprensa, mídia ou governo",
    intentPrensaDesc:
      "Notas de imprensa, entrevistas, conferências e colaboração com instituições públicas.",
    intentPrensaCta: "Enviar email",
    whatsappLabel: "WhatsApp",
    whatsappNote: "Resposta rápida · Seg–Sex 9–18 CST",
    emailLabel: "Email",
    phoneLabel: "Telefone",
    officesTitle: "Escritórios no México",
    communityTitle: "Nossas redes",
    officeCDMX: "Cidade do México",
    officeCDMXRole: "Sede principal",
    officeBoca: "Boca del Río, Veracruz",
    officeBocaRole: "Centro de operações",
    officeXalapa: "Xalapa, Veracruz",
    officeXalapaRole: "Pesquisa & Labs",
    trustTitle: "Reconhecimentos e associações",
    trustCta: "Agendar diagnóstico gratuito",
    trustNote: "90 min · Sem fidelidade · ROI estimado incluído",
  },
} as const;

const WA_URL = "https://wa.me/525659227340";

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/sintergica", Icon: Linkedin },
  { label: "GitHub", href: "https://github.com/Sintergica-AI", Icon: Github },
  { label: "YouTube", href: "https://www.youtube.com/@Sintergica-ai", Icon: Youtube },
  { label: "X", href: "https://x.com/sintergica_ai", Icon: XIcon },
  { label: "Facebook", href: "https://www.facebook.com/sintergica", Icon: FacebookIcon },
  { label: "Instagram", href: "https://www.instagram.com/sintergica.ai/", Icon: InstagramIcon },
];

export function ContactoContent() {
  const locale = useLocale();
  const t = T[locale] ?? T.es;

  const heroRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-60px" });
  const contactInView = useInView(contactRef, { once: true, margin: "-60px" });
  const shouldReduce = useReducedMotion();

  const anim = (delay = 0) => ({
    initial: shouldReduce ? false : { opacity: 0, y: 20 } as const,
    animate: heroInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: shouldReduce ? 0 : 0.6, delay },
  });

  const contactAnim = (delay = 0) => ({
    initial: shouldReduce ? false : { opacity: 0, y: 20 } as const,
    animate: contactInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: shouldReduce ? 0 : 0.6, delay },
  });

  const INTENT_PATHS = [
    {
      id: "empresa",
      icon: "💼",
      title: t.intentEmpresaTitle,
      desc: t.intentEmpresaDesc,
      cta: t.intentEmpresaCta,
      href: BOOKING_URL,
      external: true,
      accent: "border-brand-accent/30 hover:border-brand-accent/60 hover:bg-brand-accent/5",
      badge: "text-brand-accent bg-brand-accent/10 border-brand-accent/20",
    },
    {
      id: "alianza",
      icon: "🤝",
      title: t.intentAlianzaTitle,
      desc: t.intentAlianzaDesc,
      cta: t.intentAlianzaCta,
      href: WA_URL,
      external: true,
      accent: "border-purple-500/30 hover:border-purple-500/60 hover:bg-purple-500/5",
      badge: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    },
    {
      id: "prensa",
      icon: "📰",
      title: t.intentPrensaTitle,
      desc: t.intentPrensaDesc,
      cta: t.intentPrensaCta,
      href: "mailto:hola@sintergica.ai",
      external: false,
      accent: "border-amber-500/30 hover:border-amber-500/60 hover:bg-amber-500/5",
      badge: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
  ];

  const OFFICES = [
    { city: t.officeCDMX, role: t.officeCDMXRole, flag: "🏤️" },
    { city: t.officeBoca, role: t.officeBocaRole, flag: "🌊" },
    { city: t.officeXalapa, role: t.officeXalapaRole, flag: "🔬" },
  ];

  return (
    <LazyMotion features={domAnimation}>
      <>
        {/* ── HERO ── */}
        <section className="relative overflow-hidden bg-brand-surface dark:bg-brand-midnight pt-32 pb-16 md:pt-40 md:pb-20 px-4 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute -left-60 top-0 h-[500px] w-[500px] rounded-full bg-brand-accent/5 blur-[120px]" />
            <div className="absolute right-0 bottom-0 h-[400px] w-[400px] rounded-full bg-purple-600/5 blur-[100px]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:80px_80px]" />
          </div>

          <div ref={heroRef} className="relative mx-auto max-w-5xl">
            <m.div {...anim(0)} className="mb-2">
              <span className="inline-flex items-center rounded-full border border-brand-accent/20 bg-brand-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-accent">
                {t.badge}
              </span>
            </m.div>

            <m.h1 {...anim(0.1)} className="mt-5 max-w-3xl font-proxima text-4xl font-extrabold leading-tight tracking-tight text-brand-midnight dark:text-brand-white sm:text-5xl lg:text-6xl">
              {t.heroTitle1}<br className="hidden sm:block" />
              <span className="text-brand-accent">{t.heroTitle2}</span>
            </m.h1>

            <m.p {...anim(0.2)} className="mt-5 max-w-xl text-lg leading-relaxed text-brand-midnight/55 dark:text-brand-white/55">
              {t.heroDesc}
            </m.p>

            {/* Intent paths */}
            <m.div {...anim(0.3)} className="mt-10 grid gap-4 sm:grid-cols-3">
              {INTENT_PATHS.map((path) => (
                <a
                  key={path.id}
                  href={path.href}
                  target={path.external ? "_blank" : undefined}
                  rel={path.external ? "noopener noreferrer" : undefined}
                  className={`group flex flex-col rounded-2xl border bg-brand-white dark:bg-brand-midnight/[0.03] p-6 transition-all duration-200 ${path.accent}`}
                >
                  <span className="text-2xl">{path.icon}</span>
                  <p className="mt-3 text-sm font-bold text-brand-midnight dark:text-brand-white">{path.title}</p>
                  <p className="mt-1.5 flex-1 text-xs leading-relaxed text-brand-midnight/50 dark:text-brand-white/50">{path.desc}</p>
                  <span className={`mt-4 inline-flex items-center gap-1 self-start rounded-full border px-3 py-1 text-xs font-semibold ${path.badge}`}>
                    {path.cta}
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </a>
              ))}
            </m.div>
          </div>
        </section>

        {/* ── CONTACT DETAILS ── */}
        <section className="bg-brand-surface dark:bg-brand-deep py-20 px-4 sm:px-6 lg:px-8">
          <div ref={contactRef} className="mx-auto max-w-2xl space-y-6">

            {/* WhatsApp — featured */}
            <m.a
              {...contactAnim(0)}
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5 transition-all hover:border-emerald-500/40 hover:bg-emerald-500/10"
            >
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-500/20">
                <WhatsAppIcon className="h-6 w-6 text-emerald-400" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">{t.whatsappLabel}</p>
                <p className="mt-0.5 text-sm font-bold text-brand-midnight dark:text-brand-white">+52 56 5922 7340</p>
                <p className="mt-0.5 text-xs text-brand-midnight/45 dark:text-brand-white/45">{t.whatsappNote}</p>
              </div>
              <ArrowRight className="h-4 w-4 flex-shrink-0 text-emerald-400 transition-transform group-hover:translate-x-1" />
            </m.a>

            {/* Email + Phone */}
            <m.div {...contactAnim(0.08)} className="space-y-3">
              <a
                href="mailto:hola@sintergica.ai"
                className="flex items-center gap-4 rounded-xl border border-brand-midnight/5 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-midnight/50 p-4 transition-all hover:border-brand-accent/20 hover:bg-brand-accent/5"
              >
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand-accent/10">
                  <Mail className="h-4 w-4 text-brand-accent" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-brand-midnight/40 dark:text-brand-white/40">{t.emailLabel}</p>
                  <p className="mt-0.5 text-sm font-medium text-brand-midnight dark:text-brand-white">hola@sintergica.ai</p>
                </div>
              </a>

              <a
                href="tel:+522295911901"
                className="flex items-center gap-4 rounded-xl border border-brand-midnight/5 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-midnight/50 p-4 transition-all hover:border-brand-accent/20 hover:bg-brand-accent/5"
              >
                <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand-accent/10">
                  <Phone className="h-4 w-4 text-brand-accent" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-brand-midnight/40 dark:text-brand-white/40">{t.phoneLabel}</p>
                  <p className="mt-0.5 text-sm font-medium text-brand-midnight dark:text-brand-white">229 591 1901</p>
                </div>
              </a>
            </m.div>

            {/* Offices */}
            <m.div {...contactAnim(0.16)}>
              <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-midnight/40 dark:text-brand-white/40">
                <Building2 className="h-3.5 w-3.5" />
                {t.officesTitle}
              </p>
              <div className="space-y-2">
                {OFFICES.map((o) => (
                  <div key={o.city} className="flex items-center gap-3 rounded-lg border border-brand-midnight/5 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-midnight/30 px-4 py-3">
                    <span className="text-lg">{o.flag}</span>
                    <div>
                      <p className="text-sm font-medium text-brand-midnight dark:text-brand-white">{o.city}</p>
                      <p className="text-xs text-brand-midnight/40 dark:text-brand-white/40">{o.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </m.div>

            {/* Social */}
            <m.div {...contactAnim(0.22)}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-brand-midnight/40 dark:text-brand-white/40">{t.communityTitle}</p>
              <div className="flex flex-wrap gap-2">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-midnight/40 px-3.5 py-2 text-xs font-medium text-brand-midnight/60 dark:text-brand-white/60 transition-all hover:border-brand-accent/30 hover:text-brand-accent"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {label}
                  </a>
                ))}
                <a
                  href="https://huggingface.co/sintergica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-midnight/40 px-3.5 py-2 text-xs font-medium text-brand-midnight/60 dark:text-brand-white/60 transition-all hover:border-brand-accent/30 hover:text-brand-accent"
                >
                  🤗 HuggingFace
                </a>
              </div>
            </m.div>
          </div>
        </section>

        {/* ── TRUST BAR ── */}
        <section className="border-t border-brand-midnight/5 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-midnight py-12 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-brand-midnight/30 dark:text-brand-white/30">
              {t.trustTitle}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {[
                "NVIDIA Inception",
                "AWS Startups",
                "Google for Startups",
                "Meta Business Partner",
                "AMITI — Comité de IA",
                "CANACINTRA — Comisión TI",
                "Secretaría de Economía",
              ].map((item) => (
                <span key={item} className="text-xs font-medium text-brand-midnight/35 dark:text-brand-white/35">
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center gap-3 text-center sm:flex-row sm:justify-center">
              <Link
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-accent/20 transition-all hover:-translate-y-0.5 hover:bg-brand-accent/90"
              >
                {t.trustCta}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="text-xs text-brand-midnight/35 dark:text-brand-white/35">{t.trustNote}</p>
            </div>
          </div>
        </section>
      </>
    </LazyMotion>
  );
}
