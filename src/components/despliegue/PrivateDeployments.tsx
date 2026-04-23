"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import {
  Globe, Cloud, Server, Network, Shield, CheckCircle2,
  ArrowRight, Lock, AlertTriangle, Zap, Settings,
  Building2, HeartPulse, Scale, Landmark, Bolt,
} from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTASection } from "@/components/shared/CTASection";
import { useLocale } from "@/i18n/DictionaryProvider";

const BOOKING_URL = "/diagnostico";

/* ── Non-translatable base data ──────────────────────────────── */
const RISK_BASE = [
  { icon: AlertTriangle, color: "text-red-400", border: "border-red-500/20", bg: "bg-red-500/[0.07]" },
  { icon: Lock, color: "text-amber-400", border: "border-amber-500/20", bg: "bg-amber-500/[0.07]" },
  { icon: Zap, color: "text-orange-400", border: "border-orange-500/20", bg: "bg-orange-500/[0.07]" },
];

const DEPLOYMENT_ICONS = [Globe, Cloud, Server, Network] as const;

type FeatureKey = "setup" | "dataControl" | "compliance" | "maintenance" | "customModel" | "airgap" | "hybrid";

const DEPLOYMENT_BASE = [
  {
    id: "saas",
    highlight: false,
    features: { setup: "< 24 horas", dataControl: "Alta (tenant aislado)", compliance: "LFPDPPP compatible", maintenance: "Incluido", customModel: "Sí", airgap: "No", hybrid: "No" } as Record<FeatureKey, string>,
    providers: [] as string[],
  },
  {
    id: "vpc",
    highlight: true,
    features: { setup: "< 24 horas", dataControl: "Total (tu VPC)", compliance: "LFPDPPP + normativas cloud", maintenance: "Tu equipo + soporte Sintérgica", customModel: "Sí", airgap: "Opcional", hybrid: "Sí" } as Record<FeatureKey, string>,
    providers: ["AWS", "Azure", "GCP", "Oracle", "Digital Ocean"],
  },
  {
    id: "onpremise",
    highlight: false,
    features: { setup: "1–3 días hábiles", dataControl: "Absoluto (air-gapped)", compliance: "Máximo nivel regulatorio", maintenance: "Tu equipo de TI", customModel: "Sí", airgap: "Sí", hybrid: "Configurable" } as Record<FeatureKey, string>,
    providers: [] as string[],
  },
  {
    id: "hybrid",
    highlight: false,
    features: { setup: "2–5 días hábiles", dataControl: "Configurable por carga", compliance: "Adaptado a requerimiento", maintenance: "Compartido", customModel: "Sí", airgap: "Parcial", hybrid: "Sí (nativo)" } as Record<FeatureKey, string>,
    providers: [] as string[],
  },
];

const INDUSTRY_ICONS = [Building2, Landmark, HeartPulse, Scale, Bolt, Settings] as const;

/* ── Translatable text ───────────────────────────────────────── */
const T = {
  es: {
    hero: {
      badge: "DESPLIEGUE PRIVADO",
      title: "Tu IA. Tu infraestructura. Cero acceso externo.",
      subtitle: "Tres modalidades de despliegue privado para que Lattice opere exactamente donde tus datos deben estar: dentro de tu perímetro, bajo tus reglas, cumpliendo tus normativas.",
      ctaLabel: "Evaluar opciones de despliegue",
      ctaSecondaryLabel: "Ver modalidades",
      trustSignals: ["Zero-retention certificado", "On-premise disponible", "LFPDPPP compliance", "Configuración < 24 h"],
    },
    risk: {
      badge: "EL PROBLEMA",
      title: "La IA en la nube pública no fue diseñada para tu empresa",
      subtitle: "Cada vez que consultas un LLM en la nube, tus datos cruzan fronteras que no controlas. Para industrias reguladas, eso no es una opción.",
      items: [
        { title: "Tus datos viajan a servidores que no controlas", description: "Los LLMs en la nube pública procesan tus prompts en infraestructura compartida con miles de clientes. Cada consulta es un vector de exposición de información confidencial." },
        { title: "Incumplimiento regulatorio por defecto", description: "LFPDPPP, CNBV, COFEPRIS y normativas sectoriales exigen residencia de datos en territorio nacional o bajo control documentado. La nube pública rara vez cumple estos requisitos." },
        { title: "Sin control sobre actualizaciones del modelo", description: "Los proveedores de IA en la nube actualizan sus modelos sin previo aviso. Lo que funcionaba hoy puede comportarse diferente mañana sin que tu equipo lo sepa." },
      ],
    },
    deployments: {
      badge: "MODALIDADES",
      title: "Cuatro formas de desplegar. Un solo estándar de privacidad.",
      subtitle: "Elige la arquitectura que se adapta a tu madurez tecnológica, normativa y capacidad operativa.",
      items: [
        { tag: "Menor fricción operativa", title: "SaaS", subtitle: "Instancia dedicada o multi-tenant, gestionada por Sintérgica", description: "Tu organización obtiene una instancia cloud (con opciones single-tenant aisladas o multi-tenant compartidas). Sintérgica gestiona operaciones, actualizaciones y mantenimiento. Ideal si no quieres administrar servidores.", ideal: "Startups y medianas empresas que priorizan velocidad de adopción." },
        { tag: "Recomendado", title: "Nube Privada Virtual (VPC)", subtitle: "Tu cloud, tu red, tu control", description: "Desplegamos Lattice directamente dentro de tu entorno cloud existente (AWS, Azure, Google Cloud, Oracle Cloud, Digital Ocean). Tú controlas redes, permisos, cifrado y acceso. Nosotros entregamos los contenedores y configuramos.", ideal: "Empresas con equipo de TI establecido y proveedor cloud existente." },
        { tag: "Máxima soberanía", title: "On-Premise (Zero-cloud)", subtitle: "Air-gapped, detrás de tu firewall", description: "Despliegue completamente aislado de internet. Los modelos, agentes y datos viven en tus servidores físicos, detrás de tu firewall corporativo. Cero tráfico hacia el exterior. Cumplimiento absoluto con las regulaciones más estrictas.", ideal: "Banca, gobierno, salud e industrias con requisitos de aislamiento total." },
        { tag: "Flexibilidad máxima", title: "Despliegue Híbrido", subtitle: "Cloud para carga general, on-premise para datos críticos", description: "Combina lo mejor de VPC y on-premise. Los agentes de baja criticidad operan en nube privada para mayor agilidad; los modelos especializados y bases de datos sensibles permanecen en infraestructura local.", ideal: "Corporativos con diversidad de cargas de trabajo y políticas de seguridad mixtas." },
      ],
    },
    idealFor: "Ideal para:",
    featureRows: [
      { key: "setup" as FeatureKey, label: "Tiempo de configuración" },
      { key: "dataControl" as FeatureKey, label: "Control de datos" },
      { key: "compliance" as FeatureKey, label: "Cumplimiento normativo" },
      { key: "maintenance" as FeatureKey, label: "Mantenimiento" },
      { key: "customModel" as FeatureKey, label: "Modelo Séeb personalizado" },
      { key: "airgap" as FeatureKey, label: "Air-gap disponible" },
      { key: "hybrid" as FeatureKey, label: "Arquitectura híbrida" },
    ],
    matrix: {
      badge: "COMPARATIVA",
      title: "Todas las modalidades. Un solo estándar.",
      subtitle: "Independientemente de la opción elegida, ningún dato tuyo pasa por infraestructura compartida.",
      featureHeader: "Característica",
    },
    included: {
      badge: "INCLUIDO EN TODA MODALIDAD",
      title: "Todo lo que necesitas para operar el día uno",
      items: [
        "Contenedores Docker firmados y verificados",
        "Modelos Lattice Séeb especializados por industria",
        "API REST + SDK para integración con tus sistemas",
        "Panel de administración y monitoreo",
        "RBAC (control de acceso basado en roles)",
        "Documentación técnica completa",
        "Soporte de arquitectura durante el despliegue",
        "Certificado zero-retention al cierre del proyecto",
      ],
    },
    industries: {
      badge: "SECTORES",
      title: "Despliegues en industrias reguladas",
      items: [
        { name: "Finanzas", note: "CNBV, SOFOM, banca" },
        { name: "Gobierno", note: "DOF, trámites, IMSS" },
        { name: "Salud", note: "COFEPRIS, clínicas, IMSS" },
        { name: "Legal", note: "SCJN, despachos, compliance" },
        { name: "Energía", note: "CRE, CFE, NOMs" },
        { name: "Manufactura", note: "Líneas industriales, OEE" },
      ],
    },
    security: {
      title: "Zero-retention garantizado",
      description: "Sintérgica no retiene, no almacena ni accede a tus datos de operación en ninguna modalidad de despliegue. Emitimos certificado de zero-retention al cierre de cada proyecto.",
    },
    cta: {
      title: "Arquitectura que tu equipo de seguridad puede aprobar",
      subtitle: "Agenda una evaluación técnica gratuita. Analizamos tu infraestructura actual y te recomendamos la modalidad de despliegue óptima para tu nivel de criticidad.",
      ctaLabel: "Agendar evaluación técnica",
      trustSignals: ["Sin compromiso", "Evaluación de infraestructura", "Respuesta en 24 h"],
    },
  },
  en: {
    hero: {
      badge: "PRIVATE DEPLOYMENT",
      title: "Your AI. Your infrastructure. Zero external access.",
      subtitle: "Three private deployment modes so Lattice operates exactly where your data needs to be: within your perimeter, under your rules, complying with your regulations.",
      ctaLabel: "Evaluate deployment options",
      ctaSecondaryLabel: "See options",
      trustSignals: ["Certified zero-retention", "On-premise available", "LFPDPPP compliance", "Setup < 24 h"],
    },
    risk: {
      badge: "THE PROBLEM",
      title: "Public cloud AI was not designed for your company",
      subtitle: "Every time you query a cloud LLM, your data crosses borders you don't control. For regulated industries, that's not an option.",
      items: [
        { title: "Your data travels to servers you don't control", description: "Public cloud LLMs process your prompts on shared infrastructure with thousands of clients. Every query is a vector for confidential information exposure." },
        { title: "Regulatory non-compliance by default", description: "LFPDPPP, CNBV, COFEPRIS, and sector regulations require data residency on national territory or under documented control. The public cloud rarely meets these requirements." },
        { title: "No control over model updates", description: "Cloud AI providers update their models without notice. What worked today may behave differently tomorrow without your team knowing." },
      ],
    },
    deployments: {
      badge: "OPTIONS",
      title: "Four ways to deploy. One privacy standard.",
      subtitle: "Choose the architecture that fits your technology maturity, regulations, and operational capacity.",
      items: [
        { tag: "Least operational friction", title: "SaaS", subtitle: "Dedicated or multi-tenant instance, managed by Sintérgica", description: "Your organization gets a cloud instance (with isolated single-tenant or shared multi-tenant options). Sintérgica manages operations, updates, and maintenance. Ideal if you don't want to manage servers.", ideal: "Startups and mid-size companies that prioritize adoption speed." },
        { tag: "Recommended", title: "Virtual Private Cloud (VPC)", subtitle: "Your cloud, your network, your control", description: "We deploy Lattice directly within your existing cloud environment (AWS, Azure, Google Cloud, Oracle Cloud, Digital Ocean). You control networks, permissions, encryption, and access. We deliver the containers and configure.", ideal: "Companies with an established IT team and existing cloud provider." },
        { tag: "Maximum sovereignty", title: "On-Premise (Zero-cloud)", subtitle: "Air-gapped, behind your firewall", description: "Completely internet-isolated deployment. Models, agents, and data live on your physical servers, behind your corporate firewall. Zero outbound traffic. Absolute compliance with the strictest regulations.", ideal: "Banking, government, healthcare, and industries with total isolation requirements." },
        { tag: "Maximum flexibility", title: "Hybrid Deployment", subtitle: "Cloud for general workloads, on-premise for critical data", description: "Combines the best of VPC and on-premise. Low-criticality agents operate in private cloud for agility; specialized models and sensitive databases remain in local infrastructure.", ideal: "Enterprises with diverse workloads and mixed security policies." },
      ],
    },
    idealFor: "Ideal for:",
    featureRows: [
      { key: "setup" as FeatureKey, label: "Setup time" },
      { key: "dataControl" as FeatureKey, label: "Data control" },
      { key: "compliance" as FeatureKey, label: "Regulatory compliance" },
      { key: "maintenance" as FeatureKey, label: "Maintenance" },
      { key: "customModel" as FeatureKey, label: "Custom Séeb model" },
      { key: "airgap" as FeatureKey, label: "Air-gap available" },
      { key: "hybrid" as FeatureKey, label: "Hybrid architecture" },
    ],
    matrix: {
      badge: "COMPARISON",
      title: "All options. One standard.",
      subtitle: "Regardless of the option you choose, none of your data passes through shared infrastructure.",
      featureHeader: "Feature",
    },
    included: {
      badge: "INCLUDED IN EVERY OPTION",
      title: "Everything you need to operate on day one",
      items: [
        "Signed and verified Docker containers",
        "Industry-specialized Lattice Séeb models",
        "REST API + SDK for integration with your systems",
        "Administration and monitoring dashboard",
        "RBAC (role-based access control)",
        "Complete technical documentation",
        "Architecture support during deployment",
        "Zero-retention certificate at project close",
      ],
    },
    industries: {
      badge: "SECTORS",
      title: "Deployments in regulated industries",
      items: [
        { name: "Finance", note: "CNBV, SOFOM, banking" },
        { name: "Government", note: "DOF, filings, IMSS" },
        { name: "Healthcare", note: "COFEPRIS, clinics, IMSS" },
        { name: "Legal", note: "SCJN, law firms, compliance" },
        { name: "Energy", note: "CRE, CFE, NOMs" },
        { name: "Manufacturing", note: "Industrial lines, OEE" },
      ],
    },
    security: {
      title: "Guaranteed zero-retention",
      description: "Sintérgica does not retain, store, or access your operational data in any deployment mode. We issue a zero-retention certificate at the close of every project.",
    },
    cta: {
      title: "Architecture your security team can approve",
      subtitle: "Schedule a free technical evaluation. We analyze your current infrastructure and recommend the optimal deployment mode for your criticality level.",
      ctaLabel: "Schedule technical evaluation",
      trustSignals: ["No commitment", "Infrastructure evaluation", "Response in 24 h"],
    },
  },
  "pt-br": {
    hero: {
      badge: "IMPLANTAÇÃO PRIVADA",
      title: "Sua IA. Sua infraestrutura. Zero acesso externo.",
      subtitle: "Três modalidades de implantação privada para que o Lattice opere exatamente onde seus dados devem estar: dentro do seu perímetro, sob suas regras, cumprindo suas normativas.",
      ctaLabel: "Avaliar opções de implantação",
      ctaSecondaryLabel: "Ver modalidades",
      trustSignals: ["Zero-retention certificado", "On-premise disponível", "Conformidade LFPDPPP", "Configuração < 24 h"],
    },
    risk: {
      badge: "O PROBLEMA",
      title: "A IA na nuvem pública não foi projetada para sua empresa",
      subtitle: "Cada vez que você consulta um LLM na nuvem, seus dados cruzam fronteiras que você não controla. Para indústrias reguladas, isso não é uma opção.",
      items: [
        { title: "Seus dados viajam para servidores que você não controla", description: "Os LLMs na nuvem pública processam seus prompts em infraestrutura compartilhada com milhares de clientes. Cada consulta é um vetor de exposição de informações confidenciais." },
        { title: "Descumprimento regulatório por padrão", description: "LFPDPPP, CNBV, COFEPRIS e normativas setoriais exigem residência de dados em território nacional ou sob controle documentado. A nuvem pública raramente cumpre esses requisitos." },
        { title: "Sem controle sobre atualizações do modelo", description: "Os provedores de IA na nuvem atualizam seus modelos sem aviso prévio. O que funcionava hoje pode se comportar de forma diferente amanhã sem que sua equipe saiba." },
      ],
    },
    deployments: {
      badge: "MODALIDADES",
      title: "Quatro formas de implantar. Um único padrão de privacidade.",
      subtitle: "Escolha a arquitetura que se adapta à sua maturidade tecnológica, normativa e capacidade operacional.",
      items: [
        { tag: "Menor atrito operacional", title: "SaaS", subtitle: "Instância dedicada ou multi-tenant, gerenciada pela Sintérgica", description: "Sua organização obtém uma instância cloud (com opções single-tenant isoladas ou multi-tenant compartilhadas). A Sintérgica gerencia operações, atualizações e manutenção. Ideal se você não quer administrar servidores.", ideal: "Startups e médias empresas que priorizam velocidade de adoção." },
        { tag: "Recomendado", title: "Nuvem Privada Virtual (VPC)", subtitle: "Sua cloud, sua rede, seu controle", description: "Implantamos o Lattice diretamente dentro do seu ambiente cloud existente (AWS, Azure, Google Cloud, Oracle Cloud, Digital Ocean). Você controla redes, permissões, criptografia e acesso. Nós entregamos os containers e configuramos.", ideal: "Empresas com equipe de TI estabelecida e provedor cloud existente." },
        { tag: "Máxima soberania", title: "On-Premise (Zero-cloud)", subtitle: "Air-gapped, atrás do seu firewall", description: "Implantação completamente isolada da internet. Os modelos, agentes e dados ficam nos seus servidores físicos, atrás do seu firewall corporativo. Zero tráfego para o exterior. Conformidade absoluta com as regulamentações mais rígidas.", ideal: "Bancos, governo, saúde e indústrias com requisitos de isolamento total." },
        { tag: "Flexibilidade máxima", title: "Implantação Híbrida", subtitle: "Cloud para carga geral, on-premise para dados críticos", description: "Combina o melhor de VPC e on-premise. Os agentes de baixa criticidade operam em nuvem privada para maior agilidade; os modelos especializados e bases de dados sensíveis permanecem em infraestrutura local.", ideal: "Corporações com diversidade de cargas de trabalho e políticas de segurança mistas." },
      ],
    },
    idealFor: "Ideal para:",
    featureRows: [
      { key: "setup" as FeatureKey, label: "Tempo de configuração" },
      { key: "dataControl" as FeatureKey, label: "Controle de dados" },
      { key: "compliance" as FeatureKey, label: "Conformidade regulatória" },
      { key: "maintenance" as FeatureKey, label: "Manutenção" },
      { key: "customModel" as FeatureKey, label: "Modelo Séeb personalizado" },
      { key: "airgap" as FeatureKey, label: "Air-gap disponível" },
      { key: "hybrid" as FeatureKey, label: "Arquitetura híbrida" },
    ],
    matrix: {
      badge: "COMPARATIVO",
      title: "Todas as modalidades. Um único padrão.",
      subtitle: "Independentemente da opção escolhida, nenhum dado seu passa por infraestrutura compartilhada.",
      featureHeader: "Característica",
    },
    included: {
      badge: "INCLUÍDO EM TODA MODALIDADE",
      title: "Tudo o que você precisa para operar no dia um",
      items: [
        "Containers Docker assinados e verificados",
        "Modelos Lattice Séeb especializados por indústria",
        "API REST + SDK para integração com seus sistemas",
        "Painel de administração e monitoramento",
        "RBAC (controle de acesso baseado em funções)",
        "Documentação técnica completa",
        "Suporte de arquitetura durante a implantação",
        "Certificado zero-retention no encerramento do projeto",
      ],
    },
    industries: {
      badge: "SETORES",
      title: "Implantações em indústrias reguladas",
      items: [
        { name: "Finanças", note: "CNBV, SOFOM, bancos" },
        { name: "Governo", note: "DOF, trâmites, IMSS" },
        { name: "Saúde", note: "COFEPRIS, clínicas, IMSS" },
        { name: "Jurídico", note: "SCJN, escritórios, compliance" },
        { name: "Energia", note: "CRE, CFE, NOMs" },
        { name: "Manufatura", note: "Linhas industriais, OEE" },
      ],
    },
    security: {
      title: "Zero-retention garantido",
      description: "A Sintérgica não retém, não armazena nem acessa seus dados operacionais em nenhuma modalidade de implantação. Emitimos certificado de zero-retention no encerramento de cada projeto.",
    },
    cta: {
      title: "Arquitetura que sua equipe de segurança pode aprovar",
      subtitle: "Agende uma avaliação técnica gratuita. Analisamos sua infraestrutura atual e recomendamos a modalidade de implantação ideal para seu nível de criticidade.",
      ctaLabel: "Agendar avaliação técnica",
      trustSignals: ["Sem compromisso", "Avaliação de infraestrutura", "Resposta em 24 h"],
    },
  },
} as const;

export function PrivateDeployments() {
  const locale = useLocale();
  const t = T[locale] ?? T.es;

  const matrixRef = useRef<HTMLDivElement>(null);
  const matrixInView = useInView(matrixRef, { once: true, margin: "-60px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <>
        <PageHero
          badge={t.hero.badge}
          badgeColor="brand-accent"
          title={t.hero.title}
          subtitle={t.hero.subtitle}
          ctaLabel={t.hero.ctaLabel}
          ctaHref={BOOKING_URL}
          ctaSecondaryLabel={t.hero.ctaSecondaryLabel}
          ctaSecondaryHref="#modalidades"
          trustSignals={[...t.hero.trustSignals]}
        />

        {/* Risk section */}
        <section className="bg-brand-surface dark:bg-brand-deep py-20 md:py-28 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              badge={t.risk.badge}
              title={t.risk.title}
              subtitle={t.risk.subtitle}
              centered
            />
            <div className="mt-14 grid gap-6 sm:grid-cols-3">
              {t.risk.items.map((r, i) => {
                const base = RISK_BASE[i];
                const Icon = base.icon;
                return (
                  <m.div
                    key={r.title}
                    initial={shouldReduce ? false : { opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: shouldReduce ? 0 : 0.5, delay: i * 0.1 }}
                    className={`rounded-2xl border ${base.border} ${base.bg} p-7`}
                  >
                    <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-surface dark:bg-brand-midnight/40">
                      <Icon className={`h-5 w-5 ${base.color}`} />
                    </div>
                    <h3 className="mb-2 font-proxima font-semibold text-brand-midnight dark:text-brand-white">{r.title}</h3>
                    <p className="text-sm leading-relaxed text-brand-midnight/55 dark:text-brand-white/55">{r.description}</p>
                  </m.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Deployment options */}
        <section id="modalidades" className="bg-brand-surface dark:bg-brand-midnight py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              badge={t.deployments.badge}
              title={t.deployments.title}
              subtitle={t.deployments.subtitle}
              centered
            />
            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              {t.deployments.items.map((opt, i) => {
                const base = DEPLOYMENT_BASE[i];
                const Icon = DEPLOYMENT_ICONS[i];
                return (
                  <m.div
                    key={base.id}
                    initial={shouldReduce ? false : { opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: shouldReduce ? 0 : 0.5, delay: i * 0.1 }}
                    className={`group relative flex flex-col rounded-3xl border p-8 transition-all ${
                      base.highlight
                        ? "border-brand-accent/40 bg-brand-accent/[0.06] shadow-lg shadow-brand-accent/10"
                        : "border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep/50 hover:border-brand-white/20 hover:bg-brand-deep/70"
                    }`}
                  >
                    {base.highlight && (
                      <span className="absolute -top-3 left-8 rounded-full bg-brand-accent px-3 py-1 text-[0.65rem] font-bold uppercase tracking-widest text-white shadow">
                        {opt.tag}
                      </span>
                    )}
                    {!base.highlight && (
                      <span className="mb-4 inline-block self-start rounded-full border border-brand-midnight/15 dark:border-brand-white/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-widest text-brand-midnight/40 dark:text-brand-white/40">
                        {opt.tag}
                      </span>
                    )}
                    {base.highlight && <div className="mb-4" />}
                    <div className="flex items-center gap-3">
                      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${base.highlight ? "bg-brand-accent/20" : "bg-brand-white dark:bg-brand-midnight/5"}`}>
                        <Icon className={`h-5 w-5 ${base.highlight ? "text-brand-accent" : "text-brand-midnight/60 dark:text-brand-white/60"}`} />
                      </div>
                      <div>
                        <h3 className="font-proxima font-semibold text-brand-midnight dark:text-brand-white">{opt.title}</h3>
                        <p className="text-xs text-brand-midnight/45 dark:text-brand-white/45">{opt.subtitle}</p>
                      </div>
                    </div>

                    <p className="mt-5 text-sm leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">{opt.description}</p>

                    {base.providers.length > 0 && (
                      <div className="mt-5 flex flex-wrap gap-2">
                        {base.providers.map((p) => (
                          <span key={p} className="rounded-md border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-white dark:bg-brand-midnight/5 px-2 py-1 text-xs text-brand-midnight/50 dark:text-brand-white/50">
                            {p}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="mt-6 rounded-xl border border-brand-white/[0.07] bg-brand-surface dark:bg-brand-midnight/40 px-4 py-3">
                      <p className="text-xs text-brand-midnight/40 dark:text-brand-white/40">
                        <strong className="text-brand-midnight/60 dark:text-brand-white/60">{t.idealFor}</strong> {opt.ideal}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-col gap-2">
                      {(["setup", "dataControl", "airgap"] as FeatureKey[]).map((k) => {
                        const row = t.featureRows.find((r) => r.key === k)!;
                        return (
                          <div key={k} className="flex items-center justify-between gap-4">
                            <span className="text-xs text-brand-midnight/40 dark:text-brand-white/40">{row.label}</span>
                            <span className={`text-xs font-semibold ${base.highlight ? "text-brand-accent" : "text-brand-midnight/70 dark:text-brand-white/70"}`}>
                              {base.features[k]}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </m.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Feature matrix */}
        <section className="bg-brand-surface dark:bg-brand-deep py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              badge={t.matrix.badge}
              title={t.matrix.title}
              subtitle={t.matrix.subtitle}
              centered
            />

            <div ref={matrixRef} className="mt-14 overflow-x-auto rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10">
              {/* Header row */}
              <div className="grid min-w-[700px] grid-cols-5 bg-brand-surface dark:bg-brand-midnight/80 px-6 py-4">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-midnight/40 dark:text-brand-white/40">{t.matrix.featureHeader}</span>
                {t.deployments.items.map((opt, i) => (
                  <span key={DEPLOYMENT_BASE[i].id} className={`text-center text-xs font-bold uppercase tracking-wider ${DEPLOYMENT_BASE[i].highlight ? "text-brand-accent" : "text-brand-midnight/50 dark:text-brand-white/50"}`}>
                    {opt.title.split(" (")[0].split(" Virtual")[0]}
                  </span>
                ))}
              </div>
              {t.featureRows.map((row, i) => (
                <m.div
                  key={row.key}
                  initial={shouldReduce ? false : { opacity: 0 }}
                  animate={matrixInView ? { opacity: 1 } : {}}
                  transition={{ duration: shouldReduce ? 0 : 0.3, delay: i * 0.06 }}
                  className={`grid min-w-[700px] grid-cols-5 items-center gap-3 px-6 py-4 ${i % 2 === 0 ? "bg-brand-surface dark:bg-brand-deep/60" : "bg-brand-surface dark:bg-brand-midnight/40"}`}
                >
                  <span className="text-sm text-brand-midnight/60 dark:text-brand-white/60">{row.label}</span>
                  {DEPLOYMENT_BASE.map((base) => (
                    <span key={base.id} className={`text-center text-xs font-medium ${base.highlight ? "text-brand-accent" : "text-brand-midnight/55 dark:text-brand-white/55"}`}>
                      {base.features[row.key]}
                    </span>
                  ))}
                </m.div>
              ))}
            </div>
          </div>
        </section>

        {/* What's included + Industries */}
        <section className="bg-brand-surface dark:bg-brand-midnight py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
              {/* Included */}
              <m.div
                initial={shouldReduce ? false : { opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: shouldReduce ? 0 : 0.7 }}
              >
                <SectionHeader
                  badge={t.included.badge}
                  title={t.included.title}
                />
                <ul className="mt-8 flex flex-col gap-4">
                  {t.included.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                      <span className="text-sm leading-relaxed text-brand-midnight/70 dark:text-brand-white/70">{item}</span>
                    </li>
                  ))}
                </ul>
              </m.div>

              {/* Industries + Security note */}
              <div className="flex flex-col gap-8">
                <m.div
                  initial={shouldReduce ? false : { opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: shouldReduce ? 0 : 0.7, delay: 0.1 }}
                >
                  <SectionHeader
                    badge={t.industries.badge}
                    title={t.industries.title}
                  />
                  <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
                    {t.industries.items.map((ind, i) => {
                      const Icon = INDUSTRY_ICONS[i];
                      return (
                        <m.div
                          key={ind.name}
                          initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-40px" }}
                          transition={{ duration: shouldReduce ? 0 : 0.4, delay: i * 0.07 }}
                          className="group rounded-xl border border-brand-midnight/8 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep/50 p-4 transition-all hover:border-brand-accent/20 hover:bg-brand-deep/80"
                        >
                          <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-lg bg-brand-accent/10">
                            <Icon className="h-4 w-4 text-brand-accent" />
                          </div>
                          <p className="text-sm font-bold text-brand-midnight dark:text-brand-white">{ind.name}</p>
                          <p className="mt-0.5 text-[0.7rem] text-brand-midnight/40 dark:text-brand-white/40">{ind.note}</p>
                        </m.div>
                      );
                    })}
                  </div>
                </m.div>

                {/* Security badge */}
                <m.div
                  initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.2 }}
                  className="rounded-2xl border border-brand-accent/20 bg-brand-accent/[0.06] p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent/15">
                      <Shield className="h-5 w-5 text-brand-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-brand-midnight dark:text-brand-white">{t.security.title}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">
                        {t.security.description}
                      </p>
                    </div>
                  </div>
                </m.div>
              </div>
            </div>
          </div>
        </section>

        <CTASection
          title={t.cta.title}
          subtitle={t.cta.subtitle}
          ctaLabel={t.cta.ctaLabel}
          ctaHref={BOOKING_URL}
          trustSignals={[...t.cta.trustSignals]}
        />
      </>
    </LazyMotion>
  );
}
