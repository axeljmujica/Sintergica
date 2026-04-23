"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  LazyMotion,
  domAnimation,
  m,
  useInView,
  useReducedMotion,
  AnimatePresence,
} from "motion/react";
import {
  ArrowRight,
  CheckCircle,
  ChevronDown,
  Clock,
  FileText,
  Sparkles,
  Target,
  Gauge,
  Layers,
  ShieldCheck,
} from "lucide-react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { useLocale } from "@/i18n/DictionaryProvider";

const CALENDAR_BG = "#040616";

const T = {
  es: {
    // Hero
    heroBadge: "Sesión sin costo · 45 minutos",
    heroTitle: "Diagnóstico Inteligente para tu organización",
    heroSubtitle:
      "Una sesión estructurada con un consultor senior para identificar qué procesos de tu empresa son candidatos reales a automatizarse con IA — y cuáles no.",
    ctaPrimary: "Elegir horario",
    ctaSecondary: "Ver qué incluye",
    trustSignals: [
      "Conducida por un consultor, no un vendedor",
      "Reporte ejecutivo en menos de 24 h",
      "Confidencialidad bajo NDA mutuo",
      "Sin compromiso de compra",
    ],
    statusLine: "Agenda abierta · Respuesta el mismo día",
    // Calendar
    calendarEyebrow: "Agendar una sesión",
    calendarTitle: "Elige el horario que te funcione",
    calendarSubtitle:
      "Disponibilidad en tiempo real. Recibirás la confirmación y el enlace de videollamada por correo y WhatsApp.",
    // Session structure
    sessionEyebrow: "Cómo es la sesión",
    sessionTitle: "45 minutos estructurados, sin relleno",
    sessionDesc:
      "Tres bloques de preguntas dirigidas y un cierre con recomendaciones concretas. Sin pitch comercial.",
    blocks: [
      {
        time: "10 min",
        title: "Contexto de tu organización",
        desc: "Modelo de negocio, equipo, sector y el evento que disparó la búsqueda de una solución de IA hoy.",
      },
      {
        time: "15 min",
        title: "Dolor operativo real",
        desc: "Procesos que consumen tiempo, conocimiento disperso, cuellos de botella en ventas, compliance y operaciones.",
      },
      {
        time: "10 min",
        title: "Madurez tecnológica",
        desc: "Sistemas actuales, equipo de TI, ubicación de los datos y restricciones regulatorias.",
      },
      {
        time: "10 min",
        title: "Cierre con recomendaciones",
        desc: "Priorizamos oportunidades, mapeamos el camino más corto al impacto y definimos próximos pasos.",
      },
    ],
    // Report deliverable
    reportEyebrow: "Qué recibes después",
    reportTitle: "Reporte ejecutivo en menos de 24 horas",
    reportDesc:
      "Un documento de consultoría formal — no un resumen automatizado. Firmado por el consultor que condujo tu sesión.",
    reportItems: [
      {
        icon: "target",
        title: "Resumen ejecutivo",
        desc: "Quiénes son, dónde están hoy y cuál es la oportunidad más clara de impacto.",
      },
      {
        icon: "gauge",
        title: "Nivel de madurez digital",
        desc: "Evaluación honesta: Inicial, En desarrollo o Maduro — con implicaciones concretas.",
      },
      {
        icon: "sparkles",
        title: "Hasta 3 casos de uso prioritarios",
        desc: "Priorizados por impacto vs. facilidad de implementación, con métricas estimadas y tiempos.",
      },
      {
        icon: "layers",
        title: "Arquitectura recomendada",
        desc: "Qué componentes del ecosistema Lattice aplican a tu operación y por qué.",
      },
      {
        icon: "file",
        title: "Roadmap y próximos pasos",
        desc: "Ruta de implementación con hitos claros: piloto rápido, consultoría profunda o plan SaaS.",
      },
      {
        icon: "shield",
        title: "ROI estimado",
        desc: "Proyección conservadora basada en benchmarks de clientes en tu industria.",
      },
    ],
    // For whom
    forWhoEyebrow: "Para quién es esto",
    forWhoTitle: "Esta sesión tiene sentido si…",
    forWhoItems: [
      "Tu equipo dedica horas semanales a tareas manuales repetitivas",
      "Operas en un sector regulado (Legal, Gobierno, Salud, Finanzas, Energía)",
      "Tus datos no pueden salir de México o de tu infraestructura",
      "Necesitas elegibilidad para licitación pública (CFDI 4.0, RFC, LGTAIP)",
      "Tu organización tiene más de 20 personas y procesos documentados",
      "Ya intentaste adoptar IA genérica y los resultados no fueron los esperados",
    ],
    // FAQ
    faqBadge: "Preguntas frecuentes",
    faqTitle: "Resuelve tus dudas antes de agendar",
    faqs: [
      {
        q: "¿Quién conduce la sesión?",
        a: "Un consultor senior de Sintérgica con experiencia en tu industria. No son vendedores — son consultores técnicos con responsabilidad sobre el reporte final.",
      },
      {
        q: "¿Hay algún compromiso de compra?",
        a: "Ninguno. El diagnóstico es gratuito y sin compromiso. Al final recibes tu reporte y decides si quieres avanzar con una propuesta formal.",
      },
      {
        q: "¿Qué necesito preparar?",
        a: "Nada formal. Ayuda tener en mente los 2 o 3 procesos que más tiempo consumen hoy. Si es posible, que esté el tomador de decisión de tecnología.",
      },
      {
        q: "¿Firman NDA antes de la sesión?",
        a: "Sí. Si trabajas en un sector regulado o manejas información sensible, firmamos un NDA mutuo antes de la primera reunión. Solo solicítalo al agendar.",
      },
      {
        q: "¿El reporte incluye una propuesta con inversión?",
        a: "Incluye rangos de inversión honestos y un ROI estimado conservador. La propuesta formal con precios finales se envía por separado si decides avanzar.",
      },
      {
        q: "¿Qué pasa si después quiero contratar?",
        a: "Si decides implementar en los siguientes 90 días, el costo de una consultoría profunda posterior se descuenta íntegramente del proyecto.",
      },
    ],
    // Final CTA
    finalBadge: "Siguiente paso",
    finalTitle: "Tráete tus procesos. Nos llevamos las preguntas correctas.",
    finalSubtitle:
      "45 minutos con un consultor senior. Un reporte ejecutivo formal. Cero pitch, cero compromiso. Así empiezan los proyectos que sí llegan a producción.",
    finalCtaPrimary: "Elegir horario",
    finalCtaSecondary: "Ver ecosistema Lattice",
    finalTrust: [
      "Reporte firmado en menos de 24 h",
      "NDA mutuo disponible",
      "Descuento íntegro si implementas en 90 días",
    ],
  },
  en: {
    heroBadge: "Free session · 45 minutes",
    heroTitle: "Intelligent Diagnosis for your organization",
    heroSubtitle:
      "A structured session with a senior consultant to identify which processes in your company are real candidates for AI automation — and which ones aren't.",
    ctaPrimary: "Pick a time",
    ctaSecondary: "See what's included",
    trustSignals: [
      "Led by a consultant, not a salesperson",
      "Executive report in under 24 h",
      "Confidentiality under mutual NDA",
      "No purchase commitment",
    ],
    statusLine: "Calendar open · Same-day response",
    calendarEyebrow: "Book a session",
    calendarTitle: "Choose the time that works for you",
    calendarSubtitle:
      "Real-time availability. You'll receive the confirmation and video call link by email and WhatsApp.",
    sessionEyebrow: "What the session looks like",
    sessionTitle: "45 structured minutes, no filler",
    sessionDesc:
      "Three blocks of targeted questions and a close with concrete recommendations. No sales pitch.",
    blocks: [
      {
        time: "10 min",
        title: "Organizational context",
        desc: "Business model, team, sector, and the trigger that brought you to look for an AI solution today.",
      },
      {
        time: "15 min",
        title: "Real operational pain",
        desc: "Time-consuming processes, scattered knowledge, bottlenecks in sales, compliance, and operations.",
      },
      {
        time: "10 min",
        title: "Technological maturity",
        desc: "Current systems, IT team, data location, and regulatory restrictions.",
      },
      {
        time: "10 min",
        title: "Close with recommendations",
        desc: "We prioritize opportunities, map the shortest path to impact, and define next steps.",
      },
    ],
    reportEyebrow: "What you get afterwards",
    reportTitle: "Executive report in under 24 hours",
    reportDesc:
      "A formal consulting document — not an automated summary. Signed by the consultant who led your session.",
    reportItems: [
      {
        icon: "target",
        title: "Executive summary",
        desc: "Who you are, where you stand today, and the clearest opportunity for measurable impact.",
      },
      {
        icon: "gauge",
        title: "Digital maturity level",
        desc: "Honest assessment: Initial, Developing, or Mature — with concrete implications.",
      },
      {
        icon: "sparkles",
        title: "Up to 3 priority use cases",
        desc: "Prioritized by impact vs. ease of implementation, with estimated metrics and timelines.",
      },
      {
        icon: "layers",
        title: "Recommended architecture",
        desc: "Which components of the Lattice ecosystem apply to your operation and why.",
      },
      {
        icon: "file",
        title: "Roadmap and next steps",
        desc: "Implementation path with clear milestones: rapid pilot, deep consulting, or SaaS plan.",
      },
      {
        icon: "shield",
        title: "Estimated ROI",
        desc: "Conservative projection based on benchmarks from clients in your industry.",
      },
    ],
    forWhoEyebrow: "Who this is for",
    forWhoTitle: "This session makes sense if…",
    forWhoItems: [
      "Your team spends weekly hours on manual repetitive tasks",
      "You operate in a regulated sector (Legal, Government, Health, Finance, Energy)",
      "Your data cannot leave Mexico or your own infrastructure",
      "You need eligibility for public procurement (CFDI 4.0, RFC, LGTAIP)",
      "Your organization has more than 20 people and documented processes",
      "You already tried generic AI and the results weren't what you expected",
    ],
    faqBadge: "Frequently asked questions",
    faqTitle: "Clear your doubts before booking",
    faqs: [
      {
        q: "Who leads the session?",
        a: "A senior Sintérgica consultant with experience in your industry. They aren't salespeople — they are technical consultants accountable for the final report.",
      },
      {
        q: "Is there any purchase commitment?",
        a: "None. The diagnosis is free with no commitment. At the end you receive your report and decide whether you want to move forward with a formal proposal.",
      },
      {
        q: "What do I need to prepare?",
        a: "Nothing formal. It helps to have in mind the 2 or 3 processes that consume the most time today. If possible, bring the technology decision-maker.",
      },
      {
        q: "Do you sign an NDA before the session?",
        a: "Yes. If you work in a regulated sector or handle sensitive information, we sign a mutual NDA before the first meeting. Just request it when booking.",
      },
      {
        q: "Does the report include a proposal with pricing?",
        a: "It includes honest investment ranges and a conservative ROI estimate. The formal proposal with final pricing is sent separately if you decide to move forward.",
      },
      {
        q: "What if I want to hire you afterwards?",
        a: "If you decide to implement in the following 90 days, the cost of a deep follow-up consultancy is fully discounted from the project.",
      },
    ],
    finalBadge: "Next step",
    finalTitle: "Bring your processes. We'll bring the right questions.",
    finalSubtitle:
      "45 minutes with a senior consultant. A formal executive report. Zero pitch, zero commitment. This is how projects that actually reach production begin.",
    finalCtaPrimary: "Pick a time",
    finalCtaSecondary: "Explore the Lattice ecosystem",
    finalTrust: [
      "Signed report in under 24 h",
      "Mutual NDA available",
      "Full discount if you implement in 90 days",
    ],
  },
  "pt-br": {
    heroBadge: "Sessão gratuita · 45 minutos",
    heroTitle: "Diagnóstico Inteligente para sua organização",
    heroSubtitle:
      "Uma sessão estruturada com um consultor sênior para identificar quais processos da sua empresa são candidatos reais à automação com IA — e quais não são.",
    ctaPrimary: "Escolher horário",
    ctaSecondary: "Ver o que inclui",
    trustSignals: [
      "Conduzida por um consultor, não um vendedor",
      "Relatório executivo em menos de 24 h",
      "Confidencialidade sob NDA mútuo",
      "Sem compromisso de compra",
    ],
    statusLine: "Agenda aberta · Resposta no mesmo dia",
    calendarEyebrow: "Agendar uma sessão",
    calendarTitle: "Escolha o horário que funciona para você",
    calendarSubtitle:
      "Disponibilidade em tempo real. Você receberá a confirmação e o link da videochamada por e-mail e WhatsApp.",
    sessionEyebrow: "Como é a sessão",
    sessionTitle: "45 minutos estruturados, sem enrolação",
    sessionDesc:
      "Três blocos de perguntas direcionadas e um fechamento com recomendações concretas. Sem pitch comercial.",
    blocks: [
      {
        time: "10 min",
        title: "Contexto da organização",
        desc: "Modelo de negócio, equipe, setor e o evento que disparou a busca por uma solução de IA hoje.",
      },
      {
        time: "15 min",
        title: "Dor operacional real",
        desc: "Processos que consomem tempo, conhecimento disperso, gargalos em vendas, compliance e operações.",
      },
      {
        time: "10 min",
        title: "Maturidade tecnológica",
        desc: "Sistemas atuais, equipe de TI, localização dos dados e restrições regulatórias.",
      },
      {
        time: "10 min",
        title: "Fechamento com recomendações",
        desc: "Priorizamos oportunidades, mapeamos o caminho mais curto ao impacto e definimos os próximos passos.",
      },
    ],
    reportEyebrow: "O que você recebe depois",
    reportTitle: "Relatório executivo em menos de 24 horas",
    reportDesc:
      "Um documento de consultoria formal — não um resumo automatizado. Assinado pelo consultor que conduziu sua sessão.",
    reportItems: [
      {
        icon: "target",
        title: "Resumo executivo",
        desc: "Quem vocês são, onde estão hoje e qual é a oportunidade mais clara de impacto.",
      },
      {
        icon: "gauge",
        title: "Nível de maturidade digital",
        desc: "Avaliação honesta: Inicial, Em desenvolvimento ou Maduro — com implicações concretas.",
      },
      {
        icon: "sparkles",
        title: "Até 3 casos de uso prioritários",
        desc: "Priorizados por impacto vs. facilidade de implementação, com métricas estimadas e prazos.",
      },
      {
        icon: "layers",
        title: "Arquitetura recomendada",
        desc: "Quais componentes do ecossistema Lattice se aplicam à sua operação e por quê.",
      },
      {
        icon: "file",
        title: "Roadmap e próximos passos",
        desc: "Caminho de implementação com marcos claros: piloto rápido, consultoria profunda ou plano SaaS.",
      },
      {
        icon: "shield",
        title: "ROI estimado",
        desc: "Projeção conservadora baseada em benchmarks de clientes na sua indústria.",
      },
    ],
    forWhoEyebrow: "Para quem é isso",
    forWhoTitle: "Esta sessão faz sentido se…",
    forWhoItems: [
      "Sua equipe dedica horas semanais a tarefas manuais repetitivas",
      "Você opera em setor regulado (Jurídico, Governo, Saúde, Finanças, Energia)",
      "Seus dados não podem sair do país ou da sua infraestrutura",
      "Você precisa de elegibilidade para licitação pública",
      "Sua organização tem mais de 20 pessoas e processos documentados",
      "Você já tentou adotar IA genérica e os resultados não foram os esperados",
    ],
    faqBadge: "Perguntas frequentes",
    faqTitle: "Tire suas dúvidas antes de agendar",
    faqs: [
      {
        q: "Quem conduz a sessão?",
        a: "Um consultor sênior da Sintérgica com experiência na sua indústria. Não são vendedores — são consultores técnicos responsáveis pelo relatório final.",
      },
      {
        q: "Há algum compromisso de compra?",
        a: "Nenhum. O diagnóstico é gratuito e sem compromisso. No final você recebe seu relatório e decide se quer avançar com uma proposta formal.",
      },
      {
        q: "O que preciso preparar?",
        a: "Nada formal. Ajuda ter em mente os 2 ou 3 processos que mais consomem tempo hoje. Se possível, que o tomador de decisão de tecnologia esteja presente.",
      },
      {
        q: "Vocês assinam NDA antes da sessão?",
        a: "Sim. Se você trabalha em setor regulado ou lida com informação sensível, assinamos um NDA mútuo antes da primeira reunião. Basta solicitar ao agendar.",
      },
      {
        q: "O relatório inclui uma proposta com investimento?",
        a: "Inclui faixas de investimento honestas e um ROI estimado conservador. A proposta formal com preços finais é enviada separadamente se você decidir avançar.",
      },
      {
        q: "E se eu quiser contratar depois?",
        a: "Se você decidir implementar nos próximos 90 dias, o custo de uma consultoria profunda posterior é totalmente descontado do projeto.",
      },
    ],
    finalBadge: "Próximo passo",
    finalTitle: "Traga seus processos. A gente traz as perguntas certas.",
    finalSubtitle:
      "45 minutos com um consultor sênior. Um relatório executivo formal. Zero pitch, zero compromisso. É assim que começam os projetos que realmente chegam à produção.",
    finalCtaPrimary: "Escolher horário",
    finalCtaSecondary: "Ver ecossistema Lattice",
    finalTrust: [
      "Relatório assinado em menos de 24 h",
      "NDA mútuo disponível",
      "Desconto integral se implementar em 90 dias",
    ],
  },
} as const;

const ICON_MAP = {
  target: Target,
  gauge: Gauge,
  sparkles: Sparkles,
  layers: Layers,
  file: FileText,
  shield: ShieldCheck,
} as const;

export default function DiagnosticoPage() {
  const locale = useLocale();
  const t = T[locale] ?? T.es;

  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });
  const faqHeaderRef = useRef<HTMLDivElement>(null);
  const faqInView = useInView(faqHeaderRef, { once: true, margin: "-80px" });
  const ctaRef = useRef<HTMLDivElement>(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const heroAnim = (delay: number) =>
    shouldReduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: heroInView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.55, delay },
        };

  const ctaAnim = (delay: number) =>
    shouldReduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: ctaInView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.6, delay },
        };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sales.sintergica.ai/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <div className="flex flex-col min-h-screen bg-brand-surface text-brand-midnight dark:bg-brand-midnight dark:text-brand-white">
        <Navbar />

        <main>
          {/* ─── HERO (Lattice Na'at pattern) ──────────────── */}
          <section
            className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0A0F1C] px-6 pb-16 pt-28"
            aria-label={t.heroTitle}
          >
            {/* Background image */}
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              <Image
                src="/images/50395.jpg"
                alt=""
                fill
                priority
                className="object-cover opacity-60"
                sizes="100vw"
              />
              {/* Gradient overlays for contrast */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C]/70 via-[#0A0F1C]/55 to-[#0A0F1C]/85" />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/40 via-transparent to-brand-navy/40" />
            </div>

            {/* Blue glow */}
            <div className="pointer-events-none absolute inset-0" aria-hidden="true">
              <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-accent/10 blur-[120px]" />
            </div>

            {/* Subtle grid texture */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.12]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                backgroundSize: "64px 64px",
                maskImage:
                  "radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 75%)",
              }}
            />

            {/* Content */}
            <div
              ref={heroRef}
              className="relative z-10 mx-auto w-full max-w-4xl text-center"
            >
              {/* Badge */}
              <m.div {...heroAnim(0)}>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-5 py-2 text-[0.75rem] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-md">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-accent-light animate-pulse" />
                  {t.heroBadge}
                </span>
              </m.div>

              {/* H1 */}
              <m.h1
                {...heroAnim(0.1)}
                className="mt-7 font-proxima text-5xl font-extrabold leading-[1.08] tracking-tight text-white md:text-6xl lg:text-7xl text-balance"
              >
                {t.heroTitle}
              </m.h1>

              {/* Subtitle */}
              <m.p
                {...heroAnim(0.2)}
                className="mx-auto mt-6 max-w-3xl lg:max-w-4xl text-base leading-relaxed text-white/70 text-pretty md:text-lg"
              >
                {t.heroSubtitle}
              </m.p>

              {/* CTAs */}
              <m.div
                {...heroAnim(0.3)}
                className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
              >
                <a
                  href="#calendar"
                  className="inline-flex h-14 items-center gap-2 rounded-full bg-brand-accent px-9 text-[1rem] font-bold text-white shadow-lg shadow-brand-accent/30 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 hover:bg-brand-accent-light hover:shadow-brand-accent/40"
                >
                  {t.ctaPrimary}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#sesion"
                  className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 bg-white/8 px-8 text-[1rem] font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/15"
                >
                  {t.ctaSecondary}
                </a>
              </m.div>

              {/* Trust signals */}
              <m.div
                {...heroAnim(0.4)}
                className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
              >
                {t.trustSignals.map((s) => (
                  <span
                    key={s}
                    className="flex items-center gap-1.5 text-sm text-white/60"
                  >
                    <CheckCircle className="h-3.5 w-3.5 text-brand-accent-light shrink-0" />
                    {s}
                  </span>
                ))}
              </m.div>

              {/* Status pill */}
              <m.div
                {...heroAnim(0.5)}
                className="mt-8 flex items-center justify-center gap-2 text-xs text-white/40"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {t.statusLine}
              </m.div>
            </div>
          </section>

          {/* ─── FULL-WIDTH CALENDAR ───────────────────────── */}
          <section
            id="calendar"
            className="relative w-full py-16 md:py-20 scroll-mt-20"
            style={{ backgroundColor: CALENDAR_BG }}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                background:
                  "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(56,189,248,0.12), transparent 70%)",
              }}
            />

            <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-10 md:mb-12">
                <span className="inline-flex items-center rounded-full border border-brand-accent/30 bg-brand-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-accent-light mb-4">
                  {t.calendarEyebrow}
                </span>
                <h2 className="font-proxima font-bold text-3xl md:text-4xl lg:text-5xl text-white mt-4 mb-4">
                  {t.calendarTitle}
                </h2>
                <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto">
                  {t.calendarSubtitle}
                </p>
              </div>

              <div
                className="rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl"
                style={{ backgroundColor: CALENDAR_BG }}
              >
                <iframe
                  src="https://sales.sintergica.ai/widget/booking/vh6cQRURUU1nU5nslpu4"
                  className="w-full border-0 block"
                  style={{ minHeight: "780px" }}
                  scrolling="no"
                  id="UoWffsid9YlEl4fD40BX_1776865074656"
                  title={t.calendarTitle}
                />
              </div>
            </div>
          </section>

          {/* ─── SESSION STRUCTURE ─────────────────────────── */}
          <section id="sesion" className="py-20 md:py-24 scroll-mt-20">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-14">
                <span className="inline-flex items-center rounded-full border border-brand-accent/20 bg-brand-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-accent-dark dark:text-brand-accent">
                  {t.sessionEyebrow}
                </span>
                <h2 className="mt-4 font-proxima font-bold text-3xl md:text-4xl lg:text-5xl text-brand-midnight dark:text-brand-white">
                  {t.sessionTitle}
                </h2>
                <p className="mt-4 text-base md:text-lg text-brand-midnight/70 dark:text-brand-white/70 max-w-2xl mx-auto">
                  {t.sessionDesc}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                {t.blocks.map((b, i) => (
                  <div
                    key={i}
                    className="relative rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-white dark:bg-brand-white/5 p-6 transition-all duration-300 hover:border-brand-accent/40 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="flex items-center justify-between mb-5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-midnight text-brand-white dark:bg-brand-accent text-xs font-bold">
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="inline-flex items-center gap-1.5 rounded-full bg-brand-accent/10 px-3 py-1 text-xs font-semibold text-brand-accent-dark dark:text-brand-accent">
                        <Clock className="h-3 w-3" />
                        {b.time}
                      </div>
                    </div>
                    <h3 className="font-proxima font-bold text-lg text-brand-midnight dark:text-brand-white mb-2">
                      {b.title}
                    </h3>
                    <p className="text-sm text-brand-midnight/70 dark:text-brand-white/60 leading-relaxed">
                      {b.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ─── DELIVERABLE / REPORT ──────────────────────── */}
          <section className="py-20 md:py-24 bg-white dark:bg-brand-navy/40 border-y border-brand-midnight/5 dark:border-brand-white/5">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-14">
                <span className="inline-flex items-center rounded-full border border-brand-accent/20 bg-brand-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-accent-dark dark:text-brand-accent">
                  {t.reportEyebrow}
                </span>
                <h2 className="mt-4 font-proxima font-bold text-3xl md:text-4xl lg:text-5xl text-brand-midnight dark:text-brand-white">
                  {t.reportTitle}
                </h2>
                <p className="mt-4 text-base md:text-lg text-brand-midnight/70 dark:text-brand-white/70 max-w-2xl mx-auto">
                  {t.reportDesc}
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {t.reportItems.map((item, i) => {
                  const Icon = ICON_MAP[item.icon as keyof typeof ICON_MAP];
                  return (
                    <div
                      key={i}
                      className="rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-white/5 p-6 transition-all hover:-translate-y-1 hover:shadow-md"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-accent/10 mb-4">
                        <Icon className="h-5 w-5 text-brand-accent-dark dark:text-brand-accent" />
                      </div>
                      <h3 className="font-proxima font-bold text-base text-brand-midnight dark:text-brand-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-brand-midnight/70 dark:text-brand-white/60 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ─── FOR WHOM ──────────────────────────────────── */}
          <section className="py-20 md:py-24">
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <span className="inline-flex items-center rounded-full border border-brand-accent/20 bg-brand-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-accent-dark dark:text-brand-accent">
                  {t.forWhoEyebrow}
                </span>
                <h2 className="mt-4 font-proxima font-bold text-3xl md:text-4xl text-brand-midnight dark:text-brand-white">
                  {t.forWhoTitle}
                </h2>
              </div>

              <ul className="grid md:grid-cols-2 gap-4">
                {t.forWhoItems.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 rounded-xl bg-white dark:bg-brand-white/5 border border-brand-midnight/5 dark:border-brand-white/10 p-5"
                  >
                    <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm md:text-base text-brand-midnight/80 dark:text-brand-white/80 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* ─── FAQ (approved pattern — single-open accordion) ─── */}
          <section
            id="faq"
            className="bg-brand-surface dark:bg-brand-midnight py-24 px-6 border-t border-brand-midnight/5 dark:border-brand-white/5"
            aria-label={t.faqTitle}
          >
            <div ref={faqHeaderRef} className="mx-auto max-w-3xl">
              <m.div
                initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                animate={faqInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: shouldReduce ? 0 : 0.6 }}
                className="text-center"
              >
                <span className="inline-flex items-center rounded-full border border-brand-accent/20 bg-brand-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-accent">
                  {t.faqBadge}
                </span>
                <h2 className="mt-4 font-proxima font-bold text-brand-midnight dark:text-brand-white text-3xl md:text-4xl">
                  {t.faqTitle}
                </h2>
              </m.div>

              <div className="mt-10 space-y-3">
                {t.faqs.map((item, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <m.div
                      key={i}
                      initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                      animate={faqInView ? { opacity: 1, y: 0 } : {}}
                      transition={{
                        duration: shouldReduce ? 0 : 0.4,
                        delay: i * 0.06,
                      }}
                      className={`overflow-hidden rounded-xl border transition-colors duration-200 ${
                        isOpen
                          ? "border-brand-accent/30 bg-brand-accent/[0.06]"
                          : "border-brand-midnight/8 dark:border-brand-white/10 bg-brand-white dark:bg-brand-navy/40"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                        aria-expanded={isOpen ? "true" : "false"}
                        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                      >
                        <span className="text-base font-semibold text-brand-midnight dark:text-brand-white">
                          {item.q}
                        </span>
                        <ChevronDown
                          className={`h-5 w-5 shrink-0 text-brand-midnight/50 dark:text-brand-white/50 transition-transform duration-200 ${
                            isOpen ? "rotate-180 text-brand-accent" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <m.div
                            key="answer"
                            initial={
                              shouldReduce ? false : { opacity: 0, height: 0 }
                            }
                            animate={{ opacity: 1, height: "auto" }}
                            exit={
                              shouldReduce ? {} : { opacity: 0, height: 0 }
                            }
                            transition={{ duration: shouldReduce ? 0 : 0.25 }}
                            className="overflow-hidden"
                          >
                            <p className="px-6 pb-5 text-sm leading-relaxed text-brand-midnight/70 dark:text-brand-white/70">
                              {item.a}
                            </p>
                          </m.div>
                        )}
                      </AnimatePresence>
                    </m.div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ─── FINAL CTA (Lattice Na'at pattern) ─────────── */}
          <section
            ref={ctaRef}
            id="final-cta"
            className="relative overflow-hidden bg-black py-28 sm:py-36"
            aria-label={t.finalTitle}
          >
            {/* Background image + overlay */}
            <div
              className="absolute inset-0 z-0 pointer-events-none"
              aria-hidden="true"
            >
              <Image
                src="/images/121725.jpg"
                alt=""
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
            </div>

            <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
              <m.div {...ctaAnim(0)}>
                <span className="mb-4 inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[0.75rem] font-semibold uppercase tracking-wider text-white">
                  {t.finalBadge}
                </span>
              </m.div>

              <m.h2
                {...ctaAnim(0.1)}
                className="font-proxima text-balance text-[1.75rem] font-bold leading-[1.15] tracking-tight text-white sm:text-[2.25rem] lg:text-[2.75rem]"
              >
                {t.finalTitle}
              </m.h2>

              <m.p
                {...ctaAnim(0.2)}
                className="mx-auto mt-6 max-w-2xl text-base leading-[1.8] text-white/80 sm:text-lg"
              >
                {t.finalSubtitle}
              </m.p>

              <m.div
                {...ctaAnim(0.3)}
                className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
              >
                <a
                  href="#calendar"
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-brand-accent px-10 text-[1rem] font-bold text-white shadow-xl shadow-brand-accent/25 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 hover:bg-brand-accent-light hover:shadow-brand-accent/40"
                >
                  {t.finalCtaPrimary}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/soluciones/lattice"
                  className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 text-[1rem] font-semibold text-white transition-colors hover:bg-white/10"
                >
                  {t.finalCtaSecondary}
                </Link>
              </m.div>

              <m.div
                {...ctaAnim(0.4)}
                className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3"
              >
                {t.finalTrust.map((signal) => (
                  <span
                    key={signal}
                    className="flex items-center gap-1.5 text-xs text-white/70"
                  >
                    <CheckCircle className="h-3.5 w-3.5 text-brand-accent-light" />
                    {signal}
                  </span>
                ))}
              </m.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </LazyMotion>
  );
}
