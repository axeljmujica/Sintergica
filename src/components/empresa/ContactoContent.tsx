"use client";

import { useRef, useState } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import {
  Mail, Phone, ArrowRight, MessageCircle,
  Building2, Linkedin, Github, Youtube, Send, CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { useLocale } from "@/i18n/DictionaryProvider";

const BOOKING_URL = "/diagnostico";

/* ────────────────────────────────────────────── */
/*  Inline i18n translations                      */
/* ────────────────────────────────────────────── */
const T = {
  es: {
    badge: "Contacto",
    heroTitle1: "El primer paso hacia la IA privada",
    heroTitle2: " de tu organizaci\u00f3n.",
    heroDesc:
      "Respondemos en menos de 24 horas h\u00e1biles. Equipo en M\u00e9xico, con conocimiento real del ecosistema institucional y empresarial de la regi\u00f3n.",
    // Intent paths
    intentEmpresaTitle: "Implementar IA en mi empresa",
    intentEmpresaDesc:
      "Diagn\u00f3stico de 90 min, casos de uso con ROI estimado y plan de implementaci\u00f3n. Sin permanencia.",
    intentEmpresaCta: "Agendar diagn\u00f3stico",
    intentAlianzaTitle: "Alianzas, inversi\u00f3n o academia",
    intentAlianzaDesc:
      "Partners tecnol\u00f3gicos, inversionistas, universidades e instituciones de investigaci\u00f3n.",
    intentAlianzaCta: "Escribirnos",
    intentPrensaTitle: "Prensa, medios o gobierno",
    intentPrensaDesc:
      "Notas de prensa, entrevistas, conferencias y colaboraci\u00f3n con instituciones p\u00fablicas.",
    intentPrensaCta: "Contactar",
    // Form
    formTitle: "Env\u00edanos un mensaje",
    formSubtitle:
      "Cu\u00e9ntanos sobre tu organizaci\u00f3n y te conectamos con el \u00e1rea correcta.",
    successTitle: "Mensaje recibido",
    successDesc:
      "Te responderemos en menos de 24 horas h\u00e1biles a trav\u00e9s del email indicado.",
    labelNombre: "Nombre *",
    placeholderNombre: "Tu nombre completo",
    labelEmpresa: "Empresa",
    placeholderEmpresa: "Nombre de tu organizaci\u00f3n",
    labelEmail: "Email *",
    placeholderEmail: "tu@empresa.com",
    labelTelefono: "Tel\u00e9fono / WhatsApp",
    placeholderTelefono: "+52 ...",
    labelTipoContacto: "Tipo de contacto",
    placeholderTipoContacto: "Selecciona una opci\u00f3n",
    labelIndustria: "Industria",
    placeholderIndustria: "Tu sector",
    labelMensaje: "Mensaje",
    placeholderMensaje: "Cu\u00e9ntanos sobre tu proyecto, necesidad o consulta...",
    submitBtn: "Enviar mensaje",
    // Sidebar
    whatsappLabel: "WhatsApp",
    whatsappNote: "Respuesta r\u00e1pida \u00b7 Lun\u2013Vie 9\u201318 CST",
    emailLabel: "Email",
    phoneLabel: "Tel\u00e9fono",
    officesTitle: "Sedes en M\u00e9xico",
    communityTitle: "Comunidad",
    // Offices
    officeCDMX: "Ciudad de M\u00e9xico",
    officeCDMXRole: "Sede principal",
    officeBoca: "Boca del R\u00edo, Veracruz",
    officeBocaRole: "Centro de operaciones",
    officeXalapa: "Xalapa, Veracruz",
    officeXalapaRole: "Investigaci\u00f3n & Labs",
    // Interest options
    interesCliente: "Cliente",
    interesInversionista: "Inversionista",
    interesUniversidad: "Universidad / Academia",
    interesGobierno: "Gobierno",
    interesPrensa: "Prensa",
    interesAlianza: "Alianza tecnol\u00f3gica",
    interesOtro: "Otro",
    // Industry options
    industriaLegal: "Legal",
    industriaGobierno: "Gobierno",
    industriaLogistica: "Log\u00edstica y Com. Ext.",
    industriaEnergia: "Energ\u00eda",
    industriaSalud: "Salud",
    industriaFinanciero: "Financiero",
    industriaRetail: "Retail / eCommerce",
    industriaOtro: "Otro",
    // Trust bar
    trustTitle: "Reconocimientos y membres\u00edas",
    trustCta: "Agendar diagn\u00f3stico gratuito",
    trustNote: "90 min \u00b7 Sin permanencia \u00b7 ROI estimado incluido",
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
    intentAlianzaCta: "Write to us",
    intentPrensaTitle: "Press, media or government",
    intentPrensaDesc:
      "Press releases, interviews, conferences and collaboration with public institutions.",
    intentPrensaCta: "Get in touch",
    formTitle: "Send us a message",
    formSubtitle:
      "Tell us about your organization and we\u2019ll connect you with the right team.",
    successTitle: "Message received",
    successDesc:
      "We\u2019ll respond within 24 business hours to the email you provided.",
    labelNombre: "Name *",
    placeholderNombre: "Your full name",
    labelEmpresa: "Company",
    placeholderEmpresa: "Your organization\u2019s name",
    labelEmail: "Email *",
    placeholderEmail: "you@company.com",
    labelTelefono: "Phone / WhatsApp",
    placeholderTelefono: "+1 ...",
    labelTipoContacto: "Contact type",
    placeholderTipoContacto: "Select an option",
    labelIndustria: "Industry",
    placeholderIndustria: "Your sector",
    labelMensaje: "Message",
    placeholderMensaje: "Tell us about your project, need or inquiry...",
    submitBtn: "Send message",
    whatsappLabel: "WhatsApp",
    whatsappNote: "Quick response \u00b7 Mon\u2013Fri 9\u201318 CST",
    emailLabel: "Email",
    phoneLabel: "Phone",
    officesTitle: "Offices in Mexico",
    communityTitle: "Community",
    officeCDMX: "Mexico City",
    officeCDMXRole: "Headquarters",
    officeBoca: "Boca del R\u00edo, Veracruz",
    officeBocaRole: "Operations center",
    officeXalapa: "Xalapa, Veracruz",
    officeXalapaRole: "Research & Labs",
    interesCliente: "Client",
    interesInversionista: "Investor",
    interesUniversidad: "University / Academia",
    interesGobierno: "Government",
    interesPrensa: "Press",
    interesAlianza: "Technology partnership",
    interesOtro: "Other",
    industriaLegal: "Legal",
    industriaGobierno: "Government",
    industriaLogistica: "Logistics & Foreign Trade",
    industriaEnergia: "Energy",
    industriaSalud: "Healthcare",
    industriaFinanciero: "Finance",
    industriaRetail: "Retail / eCommerce",
    industriaOtro: "Other",
    trustTitle: "Recognitions & memberships",
    trustCta: "Schedule free assessment",
    trustNote: "90 min \u00b7 No lock-in \u00b7 Estimated ROI included",
  },
  "pt-br": {
    badge: "Contato",
    heroTitle1: "O primeiro passo rumo \u00e0 IA privada",
    heroTitle2: " da sua organiza\u00e7\u00e3o.",
    heroDesc:
      "Respondemos em menos de 24 horas \u00fateis. Equipe no M\u00e9xico, com conhecimento real do ecossistema institucional e empresarial da regi\u00e3o.",
    intentEmpresaTitle: "Implementar IA na minha empresa",
    intentEmpresaDesc:
      "Diagn\u00f3stico de 90 min, casos de uso com ROI estimado e plano de implementa\u00e7\u00e3o. Sem fidelidade.",
    intentEmpresaCta: "Agendar diagn\u00f3stico",
    intentAlianzaTitle: "Parcerias, investimento ou academia",
    intentAlianzaDesc:
      "Parceiros tecnol\u00f3gicos, investidores, universidades e institui\u00e7\u00f5es de pesquisa.",
    intentAlianzaCta: "Escreva para n\u00f3s",
    intentPrensaTitle: "Imprensa, m\u00eddia ou governo",
    intentPrensaDesc:
      "Notas de imprensa, entrevistas, confer\u00eancias e colabora\u00e7\u00e3o com institui\u00e7\u00f5es p\u00fablicas.",
    intentPrensaCta: "Entrar em contato",
    formTitle: "Envie-nos uma mensagem",
    formSubtitle:
      "Conte-nos sobre sua organiza\u00e7\u00e3o e conectaremos voc\u00ea com a \u00e1rea correta.",
    successTitle: "Mensagem recebida",
    successDesc:
      "Responderemos em menos de 24 horas \u00fateis atrav\u00e9s do email informado.",
    labelNombre: "Nome *",
    placeholderNombre: "Seu nome completo",
    labelEmpresa: "Empresa",
    placeholderEmpresa: "Nome da sua organiza\u00e7\u00e3o",
    labelEmail: "Email *",
    placeholderEmail: "voce@empresa.com",
    labelTelefono: "Telefone / WhatsApp",
    placeholderTelefono: "+55 ...",
    labelTipoContacto: "Tipo de contato",
    placeholderTipoContacto: "Selecione uma op\u00e7\u00e3o",
    labelIndustria: "Ind\u00fastria",
    placeholderIndustria: "Seu setor",
    labelMensaje: "Mensagem",
    placeholderMensaje: "Conte-nos sobre seu projeto, necessidade ou consulta...",
    submitBtn: "Enviar mensagem",
    whatsappLabel: "WhatsApp",
    whatsappNote: "Resposta r\u00e1pida \u00b7 Seg\u2013Sex 9\u201318 CST",
    emailLabel: "Email",
    phoneLabel: "Telefone",
    officesTitle: "Escrit\u00f3rios no M\u00e9xico",
    communityTitle: "Comunidade",
    officeCDMX: "Cidade do M\u00e9xico",
    officeCDMXRole: "Sede principal",
    officeBoca: "Boca del R\u00edo, Veracruz",
    officeBocaRole: "Centro de opera\u00e7\u00f5es",
    officeXalapa: "Xalapa, Veracruz",
    officeXalapaRole: "Pesquisa & Labs",
    interesCliente: "Cliente",
    interesInversionista: "Investidor",
    interesUniversidad: "Universidade / Academia",
    interesGobierno: "Governo",
    interesPrensa: "Imprensa",
    interesAlianza: "Parceria tecnol\u00f3gica",
    interesOtro: "Outro",
    industriaLegal: "Jur\u00eddico",
    industriaGobierno: "Governo",
    industriaLogistica: "Log\u00edstica e Com. Ext.",
    industriaEnergia: "Energia",
    industriaSalud: "Sa\u00fade",
    industriaFinanciero: "Financeiro",
    industriaRetail: "Varejo / eCommerce",
    industriaOtro: "Outro",
    trustTitle: "Reconhecimentos e associa\u00e7\u00f5es",
    trustCta: "Agendar diagn\u00f3stico gratuito",
    trustNote: "90 min \u00b7 Sem fidelidade \u00b7 ROI estimado inclu\u00eddo",
  },
} as const;

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/sintergica", Icon: Linkedin },
  { label: "GitHub", href: "https://github.com/Sintergica-AI", Icon: Github },
  { label: "YouTube", href: "https://www.youtube.com/@Sintergica-ai", Icon: Youtube },
];

const inputCls = "w-full rounded-lg border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep px-4 py-3 text-sm text-brand-midnight dark:text-brand-white placeholder:text-brand-midnight/35 dark:text-brand-white/35 transition-colors focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent/30";
const labelCls = "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-brand-midnight/50 dark:text-brand-white/50";

export function ContactoContent() {
  const locale = useLocale();
  const t = T[locale] ?? T.es;

  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true, margin: "-60px" });
  const formInView = useInView(formRef, { once: true, margin: "-60px" });
  const shouldReduce = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);

  const anim = (delay = 0) => ({
    initial: shouldReduce ? false : { opacity: 0, y: 20 } as const,
    animate: heroInView ? { opacity: 1, y: 0 } : {},
    transition: { duration: shouldReduce ? 0 : 0.6, delay },
  });

  const INTENT_PATHS = [
    {
      id: "empresa",
      icon: "\ud83d\udcbc",
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
      icon: "\ud83e\udd1d",
      title: t.intentAlianzaTitle,
      desc: t.intentAlianzaDesc,
      cta: t.intentAlianzaCta,
      href: "#formulario",
      external: false,
      accent: "border-purple-500/30 hover:border-purple-500/60 hover:bg-purple-500/5",
      badge: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    },
    {
      id: "prensa",
      icon: "\ud83d\udcf0",
      title: t.intentPrensaTitle,
      desc: t.intentPrensaDesc,
      cta: t.intentPrensaCta,
      href: "#formulario",
      external: false,
      accent: "border-amber-500/30 hover:border-amber-500/60 hover:bg-amber-500/5",
      badge: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
  ];

  const OFFICES = [
    { city: t.officeCDMX, role: t.officeCDMXRole, flag: "\ud83c\udfe4\ufe0f" },
    { city: t.officeBoca, role: t.officeBocaRole, flag: "\ud83c\udf0a" },
    { city: t.officeXalapa, role: t.officeXalapaRole, flag: "\ud83d\udd2c" },
  ];

  const INTERES_OPTIONS = [
    t.interesCliente, t.interesInversionista, t.interesUniversidad,
    t.interesGobierno, t.interesPrensa, t.interesAlianza, t.interesOtro,
  ];

  const INDUSTRIA_OPTIONS = [
    t.industriaLegal, t.industriaGobierno, t.industriaLogistica,
    t.industriaEnergia, t.industriaSalud, t.industriaFinanciero,
    t.industriaRetail, t.industriaOtro,
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
          <m.div
            {...anim(0.3)}
            className="mt-10 grid gap-4 sm:grid-cols-3"
          >
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

      {/* ── MAIN CONTACT ── */}
      <section id="formulario" className="bg-brand-surface dark:bg-brand-deep py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-5">

            {/* ── FORM ── */}
            <div ref={formRef} className="lg:col-span-3">
              <m.div
                initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                animate={formInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: shouldReduce ? 0 : 0.6 }}
              >
                <h2 className="font-proxima text-2xl font-bold text-brand-midnight dark:text-brand-white">
                  {t.formTitle}
                </h2>
                <p className="mt-2 text-sm text-brand-midnight/50 dark:text-brand-white/50">
                  {t.formSubtitle}
                </p>

                {submitted ? (
                  <div className="mt-8 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-10 text-center">
                    <CheckCircle className="mx-auto h-10 w-10 text-emerald-400" />
                    <p className="mt-4 text-lg font-semibold text-brand-midnight dark:text-brand-white">{t.successTitle}</p>
                    <p className="mt-2 text-sm text-brand-midnight/55 dark:text-brand-white/55">
                      {t.successDesc}
                    </p>
                  </div>
                ) : (
                  <form
                    className="mt-8 space-y-5"
                    onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className={labelCls}>{t.labelNombre}</label>
                        <input type="text" name="nombre" placeholder={t.placeholderNombre} required className={inputCls} />
                      </div>
                      <div>
                        <label className={labelCls}>{t.labelEmpresa}</label>
                        <input type="text" name="empresa" placeholder={t.placeholderEmpresa} className={inputCls} />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className={labelCls}>{t.labelEmail}</label>
                        <input type="email" name="email" placeholder={t.placeholderEmail} required className={inputCls} />
                      </div>
                      <div>
                        <label className={labelCls}>{t.labelTelefono}</label>
                        <input type="tel" name="telefono" placeholder={t.placeholderTelefono} className={inputCls} />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className={labelCls}>{t.labelTipoContacto}</label>
                        <select name="interes" aria-label={t.labelTipoContacto} defaultValue="" className={inputCls}>
                          <option value="" disabled>{t.placeholderTipoContacto}</option>
                          {INTERES_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className={labelCls}>{t.labelIndustria}</label>
                        <select name="industria" aria-label={t.labelIndustria} defaultValue="" className={inputCls}>
                          <option value="" disabled>{t.placeholderIndustria}</option>
                          {INDUSTRIA_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className={labelCls}>{t.labelMensaje}</label>
                      <textarea name="mensaje" rows={4} placeholder={t.placeholderMensaje} className={inputCls} />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-accent/25 transition-all hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-brand-accent/40"
                    >
                      <Send className="h-4 w-4" />
                      {t.submitBtn}
                    </button>
                  </form>
                )}
              </m.div>
            </div>

            {/* ── SIDEBAR ── */}
            <div className="space-y-6 lg:col-span-2">

              {/* WhatsApp - featured */}
              <a
                href="https://wa.me/525659227340"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5 transition-all hover:border-emerald-500/40 hover:bg-emerald-500/10"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-emerald-500/20">
                  <MessageCircle className="h-6 w-6 text-emerald-400" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-wider text-emerald-400">{t.whatsappLabel}</p>
                  <p className="mt-0.5 text-sm font-bold text-brand-midnight dark:text-brand-white">+52 56 5922 7340</p>
                  <p className="mt-0.5 text-xs text-brand-midnight/45 dark:text-brand-white/45">{t.whatsappNote}</p>
                </div>
                <ArrowRight className="h-4 w-4 flex-shrink-0 text-emerald-400 transition-transform group-hover:translate-x-1" />
              </a>

              {/* Email + Phone */}
              <div className="space-y-3">
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
              </div>

              {/* Offices */}
              <div>
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
              </div>

              {/* Social */}
              <div>
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
              </div>
            </div>
          </div>
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
              "AMITI — Comit\u00e9 de IA",
              "CANACINTRA — Comisi\u00f3n TI",
              "Secretar\u00eda de Econom\u00eda",
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
