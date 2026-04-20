"use client";

import { m, LazyMotion, domAnimation } from "motion/react";
import { ArrowRight, Code2, Server, Workflow, Lock, Database, Cloud } from "lucide-react";
import Link from "next/link";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { CTASection } from "@/components/shared/CTASection";
import { useLocale } from "@/i18n/DictionaryProvider";

const T = {
  es: {
    heroBadge: "Desarrollo de Software Moderno",
    heroTitle: "Software Construido para la ",
    heroTitleHighlight: "Era de la IA",
    heroDesc: "Desarrollamos soluciones a medida, robustas y escalables, diseñadas desde el primer día para integrarse con inteligencia artificial agéntica. Potenciadas por el ecosistema Lattice, agnósticas de nube y de modelo.",
    ctaPrimary: "Agendar Diagnóstico",
    ctaSecondary: "Nuestra Metodología",
    featuresTitle: "Diseño de Software Preparado para el Futuro",
    featuresDesc: "No construimos simple software; diseñamos infraestructuras digitales preparadas para interactuar con agentes de inteligencia artificial, asegurando que tu inversión tecnológica no quede obsoleta.",
    features: [
      { title: "Arquitectura Lista para IA", desc: "Desarrollamos con APIs limpias, webhooks y arquitecturas de microservicios que facilitan la integración nativa con agentes IA y LLMs." },
      { title: "Agnósticos de Nube", desc: "Tu código, tus reglas. Diseñamos sistemas contenedorizados (Docker/Kubernetes) que corren en AWS, Azure, GCP o infraestructura on-premise sin vendor lock-in." },
      { title: "Agnósticos de Modelo", desc: "Estructuras modulares que permiten intercambiar modelos (OpenAI, Anthropic, Meta, o SLMs locales de Lattice) según las necesidades de cada tarea." },
      { title: "Potenciado por Lattice", desc: "Integramos de forma nativa el ecosistema Lattice, brindando capacidades agénticas avanzadas, memoria persistente y orquestación a tus aplicativos." },
      { title: "Seguridad y Gobernanza", desc: "Implementamos trazabilidad, control de acceso basado en roles (RBAC) y cumplimiento normativo (LFPDPPP) desde el diseño inicial." },
      { title: "Código Moderno", desc: "Utilizamos stacks modernos (React/Next.js, Python, Rust, Go) asegurando rendimiento, escalabilidad y facilidad de mantenimiento." },
    ],
    ctaTitle: "Construyamos el software que impulsará tu IA",
    ctaDesc: "Hablemos sobre tu proyecto y descubramos cómo podemos crear una arquitectura resiliente, escalable y completamente lista para la era de los agentes autónomos.",
    ctaButton: "Iniciar Proyecto",
  },
  en: {
    heroBadge: "Modern Software Development",
    heroTitle: "Software Built for the ",
    heroTitleHighlight: "AI Era",
    heroDesc: "We develop custom, robust, and scalable solutions designed from day one to integrate with agentic artificial intelligence. Powered by the Lattice ecosystem, cloud-agnostic and model-agnostic.",
    ctaPrimary: "Schedule Diagnosis",
    ctaSecondary: "Our Methodology",
    featuresTitle: "Future-Ready Software Design",
    featuresDesc: "We don't build simple software; we design digital infrastructures prepared to interact with artificial intelligence agents, ensuring your technology investment doesn't become obsolete.",
    features: [
      { title: "AI-Ready Architecture", desc: "We develop with clean APIs, webhooks, and microservices architectures that facilitate native integration with AI agents and LLMs." },
      { title: "Cloud Agnostic", desc: "Your code, your rules. We design containerized systems (Docker/Kubernetes) that run on AWS, Azure, GCP, or on-premise infrastructure without vendor lock-in." },
      { title: "Model Agnostic", desc: "Modular structures that allow swapping models (OpenAI, Anthropic, Meta, or local Lattice SLMs) according to each task's needs." },
      { title: "Powered by Lattice", desc: "We natively integrate the Lattice ecosystem, providing advanced agentic capabilities, persistent memory, and orchestration to your applications." },
      { title: "Security & Governance", desc: "We implement traceability, role-based access control (RBAC), and regulatory compliance (LFPDPPP) from the initial design." },
      { title: "Modern Code", desc: "We use modern stacks (React/Next.js, Python, Rust, Go) ensuring performance, scalability, and ease of maintenance." },
    ],
    ctaTitle: "Let's build the software that will power your AI",
    ctaDesc: "Let's talk about your project and discover how we can create a resilient, scalable architecture fully ready for the era of autonomous agents.",
    ctaButton: "Start Project",
  },
  "pt-br": {
    heroBadge: "Desenvolvimento de Software Moderno",
    heroTitle: "Software Construído para a ",
    heroTitleHighlight: "Era da IA",
    heroDesc: "Desenvolvemos soluções sob medida, robustas e escaláveis, projetadas desde o primeiro dia para se integrar com inteligência artificial agêntica. Potencializadas pelo ecossistema Lattice, agnósticas de nuvem e de modelo.",
    ctaPrimary: "Agendar Diagnóstico",
    ctaSecondary: "Nossa Metodologia",
    featuresTitle: "Design de Software Preparado para o Futuro",
    featuresDesc: "Não construímos software simples; projetamos infraestruturas digitais preparadas para interagir com agentes de inteligência artificial, garantindo que seu investimento tecnológico não fique obsoleto.",
    features: [
      { title: "Arquitetura Pronta para IA", desc: "Desenvolvemos com APIs limpas, webhooks e arquiteturas de microsserviços que facilitam a integração nativa com agentes IA e LLMs." },
      { title: "Agnósticos de Nuvem", desc: "Seu código, suas regras. Projetamos sistemas conteinerizados (Docker/Kubernetes) que rodam em AWS, Azure, GCP ou infraestrutura on-premise sem vendor lock-in." },
      { title: "Agnósticos de Modelo", desc: "Estruturas modulares que permitem trocar modelos (OpenAI, Anthropic, Meta ou SLMs locais do Lattice) conforme as necessidades de cada tarefa." },
      { title: "Potencializado pelo Lattice", desc: "Integramos nativamente o ecossistema Lattice, proporcionando capacidades agênticas avançadas, memória persistente e orquestração aos seus aplicativos." },
      { title: "Segurança e Governança", desc: "Implementamos rastreabilidade, controle de acesso baseado em papéis (RBAC) e conformidade regulatória (LFPDPPP) desde o design inicial." },
      { title: "Código Moderno", desc: "Utilizamos stacks modernos (React/Next.js, Python, Rust, Go) garantindo desempenho, escalabilidade e facilidade de manutenção." },
    ],
    ctaTitle: "Vamos construir o software que impulsionará sua IA",
    ctaDesc: "Vamos conversar sobre seu projeto e descobrir como podemos criar uma arquitetura resiliente, escalável e completamente pronta para a era dos agentes autônomos.",
    ctaButton: "Iniciar Projeto",
  },
} as const;

const FEATURES_BASE = [
  { icon: Workflow },
  { icon: Cloud },
  { icon: Database },
  { icon: Server },
  { icon: Lock },
  { icon: Code2 },
];

export function DesarrolloMedidaContent() {
  const locale = useLocale();
  const t = T[locale] ?? T.es;

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32 bg-brand-surface dark:bg-brand-midnight">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] rounded-full bg-brand-accent/5 dark:bg-brand-accent/10 blur-[120px] mix-blend-multiply dark:mix-blend-screen opacity-70 animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-indigo-500/5 dark:bg-indigo-500/10 blur-[100px] mix-blend-multiply dark:mix-blend-screen opacity-50 animate-float" style={{ animationDelay: "2s" }} />
          <div className="absolute inset-0 dot-grid opacity-30 dark:opacity-20" />
          <BackgroundBeams className="opacity-20 dark:opacity-40" />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full border border-brand-midnight/10 bg-brand-white/50 px-3 py-1 text-sm font-medium text-brand-midnight backdrop-blur-md dark:border-brand-white/10 dark:bg-brand-white/5 dark:text-brand-white"
              >
                <Code2 className="h-4 w-4 text-brand-accent" />
                <span>{t.heroBadge}</span>
              </m.div>

              <m.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-6 font-proxima text-5xl font-extrabold tracking-tight text-brand-midnight dark:text-brand-white sm:text-6xl lg:text-7xl"
              >
                {t.heroTitle}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-indigo-600 dark:from-brand-accent dark:to-indigo-400">
                  {t.heroTitleHighlight}
                </span>
              </m.h1>

              <m.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-lg leading-relaxed text-brand-midnight/70 dark:text-brand-white/70"
              >
                {t.heroDesc}
              </m.p>

              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Link
                  href="https://sales.sintergica.ai/widget/booking/vh6cQRURUU1nU5nslpu4"
                  className="btn-glow inline-flex items-center gap-2 rounded-full bg-brand-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-brand-accent/90"
                >
                  {t.ctaPrimary} <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="#metodologia"
                  className="inline-flex items-center gap-2 rounded-full border border-brand-midnight/10 bg-brand-white/50 px-6 py-3 text-sm font-semibold text-brand-midnight backdrop-blur-md transition-all hover:bg-brand-midnight/5 dark:border-brand-white/10 dark:bg-brand-white/5 dark:text-brand-white dark:hover:bg-brand-white/10"
                >
                  {t.ctaSecondary}
                </Link>
              </m.div>
            </div>

            {/* Right Graphic/Illustration */}
            <m.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative lg:ml-auto w-full max-w-lg"
            >
              <div className="relative aspect-square w-full rounded-2xl overflow-hidden glass dark:glass p-8 flex flex-col justify-between">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/10 to-indigo-600/10 mix-blend-overlay"></div>

                <div className="relative z-10 flex justify-between items-start">
                  <div className="bg-brand-white dark:bg-brand-midnight rounded-xl p-4 shadow-lg border border-brand-midnight/10 dark:border-brand-white/10">
                    <Database className="h-8 w-8 text-brand-accent" />
                  </div>
                  <div className="bg-brand-white dark:bg-brand-midnight rounded-xl p-4 shadow-lg border border-brand-midnight/10 dark:border-brand-white/10">
                    <Cloud className="h-8 w-8 text-indigo-500" />
                  </div>
                </div>

                <div className="relative z-10 self-center">
                  <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-brand-accent to-indigo-600 shadow-2xl shadow-brand-accent/30 animate-float">
                    <div className="absolute inset-1 rounded-full bg-brand-surface dark:bg-brand-midnight m-[2px]" />
                    <Workflow className="relative h-12 w-12 text-brand-accent dark:text-brand-white" />

                    {/* Orbiting particles */}
                    <div className="absolute inset-0 animate-[spin_8s_linear_infinite]">
                      <div className="absolute -top-2 left-1/2 h-4 w-4 -translate-x-1/2 rounded-full bg-brand-accent shadow-[0_0_15px_rgba(54,101,245,0.8)]" />
                    </div>
                  </div>
                </div>

                <div className="relative z-10 flex justify-between items-end">
                  <div className="bg-brand-white dark:bg-brand-midnight rounded-xl p-4 shadow-lg border border-brand-midnight/10 dark:border-brand-white/10">
                    <Server className="h-8 w-8 text-emerald-500" />
                  </div>
                  <div className="bg-brand-white dark:bg-brand-midnight rounded-xl p-4 shadow-lg border border-brand-midnight/10 dark:border-brand-white/10">
                    <Lock className="h-8 w-8 text-rose-500" />
                  </div>
                </div>

                {/* Connecting lines SVG */}
                <svg className="absolute inset-0 h-full w-full opacity-30 dark:opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 60 60 Q 200 60 200 200" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="4 4" className="text-brand-midnight dark:text-brand-white" />
                  <path d="M 440 60 Q 200 60 200 200" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="4 4" className="text-brand-midnight dark:text-brand-white" />
                  <path d="M 60 440 Q 200 440 200 200" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="4 4" className="text-brand-midnight dark:text-brand-white" />
                  <path d="M 440 440 Q 200 440 200 200" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="4 4" className="text-brand-midnight dark:text-brand-white" />
                </svg>
              </div>
            </m.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-24 bg-brand-white dark:bg-brand-deep relative">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
          <div className="mb-16 max-w-3xl">
            <h2 className="font-proxima text-3xl font-bold text-brand-midnight dark:text-brand-white sm:text-4xl">
              {t.featuresTitle}
            </h2>
            <p className="mt-4 text-lg text-brand-midnight/70 dark:text-brand-white/70">
              {t.featuresDesc}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {FEATURES_BASE.map((base, i) => (
              <m.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative rounded-2xl border border-brand-midnight/10 bg-brand-surface/50 p-8 transition-all hover:bg-brand-surface dark:border-brand-white/10 dark:bg-brand-midnight/50 dark:hover:bg-brand-midnight"
              >
                <div className="mb-6 inline-flex rounded-xl bg-brand-accent/10 p-3 text-brand-accent dark:bg-brand-accent/20">
                  <base.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 font-proxima font-semibold text-lg text-brand-midnight dark:text-brand-white">
                  {t.features[i].title}
                </h3>
                <p className="text-sm leading-relaxed text-brand-midnight/70 dark:text-brand-white/70">
                  {t.features[i].desc}
                </p>
              </m.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        badge="Siguiente paso"
        title={t.ctaTitle}
        subtitle={t.ctaDesc}
        ctaLabel={t.ctaButton}
        ctaHref="https://sales.sintergica.ai/widget/booking/vh6cQRURUU1nU5nslpu4"
      />
    </LazyMotion>
  );
}
