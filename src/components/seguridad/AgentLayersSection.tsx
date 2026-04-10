"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import {
  Network,
  KeyRound,
  UserCog,
  FilterX,
  ShieldAlert,
  MemoryStick,
  Container,
  Gauge,
  ScrollText,
  Lock,
  ArrowLeftRight,
  Vault,
  ScanSearch,
  Activity,
  BrainCircuit,
  Siren,
} from "lucide-react";
import { useLocale } from "@/i18n/DictionaryProvider";

/* ── i18n translations ────────────────────────────────────────── */

const highlightIcons = [MemoryStick, Container, UserCog, ScrollText];
const layerIcons = [
  Network, KeyRound, UserCog, FilterX, ShieldAlert, MemoryStick,
  Container, Gauge, ScrollText, Lock, ArrowLeftRight, Vault,
  ScanSearch, Activity, BrainCircuit, Siren,
];

const T = {
  es: {
    badge: "Motor de Agentes",
    title: "16 capas de seguridad\nindependientes",
    subtitle:
      "Cada agente de Lattice opera dentro de un sandbox con 16 barreras de seguridad autónomas. Un fallo en una capa no compromete las demás.",
    active: "activo",
    highlights: [
      {
        title: "Construido en Rust",
        description:
          "El runtime del motor de agentes está escrito en Rust, eliminando clases enteras de vulnerabilidades por errores de memoria (buffer overflow, use-after-free, data races).",
      },
      {
        title: "Aislamiento por proceso",
        description:
          "Cada agente corre en su propio proceso aislado con espacio de memoria dedicado. Un agente comprometido no puede leer ni modificar el contexto de otros.",
      },
      {
        title: "Permisos granulares",
        description:
          "Control atómico de qué datos, herramientas y APIs puede invocar cada agente. Permisos declarados explícitamente; denegación implícita por defecto.",
      },
      {
        title: "Auditoría inmutable",
        description:
          "Cada acción del agente — lectura, escritura, invocación de herramienta — queda registrada en un log append-only firmado criptográficamente.",
      },
    ],
    layers: [
      "Aislamiento de red",
      "Autenticación JWT/OAuth",
      "Autorización RBAC",
      "Validación de entrada",
      "Sanitización de salida",
      "Seguridad de memoria (Rust)",
      "Aislamiento de proceso",
      "Rate limiting",
      "Auditoría inmutable",
      "Cifrado AES-256",
      "TLS 1.3 en tránsito",
      "Gestión de secretos",
      "Análisis de dependencias",
      "Monitoreo en runtime",
      "Detección de anomalías",
      "Respuesta a incidentes",
    ],
  },
  en: {
    badge: "Agent Engine",
    title: "16 independent\nsecurity layers",
    subtitle:
      "Each Lattice agent operates inside a sandbox with 16 autonomous security barriers. A failure in one layer does not compromise the others.",
    active: "active",
    highlights: [
      {
        title: "Built in Rust",
        description:
          "The agent engine runtime is written in Rust, eliminating entire classes of memory-safety vulnerabilities (buffer overflow, use-after-free, data races).",
      },
      {
        title: "Process isolation",
        description:
          "Each agent runs in its own isolated process with dedicated memory space. A compromised agent cannot read or modify the context of others.",
      },
      {
        title: "Granular permissions",
        description:
          "Atomic control over which data, tools, and APIs each agent can invoke. Permissions declared explicitly; implicit deny by default.",
      },
      {
        title: "Immutable audit log",
        description:
          "Every agent action — read, write, tool invocation — is recorded in a cryptographically signed append-only log.",
      },
    ],
    layers: [
      "Network isolation",
      "JWT/OAuth authentication",
      "RBAC authorization",
      "Input validation",
      "Output sanitization",
      "Memory safety (Rust)",
      "Process isolation",
      "Rate limiting",
      "Immutable audit log",
      "AES-256 encryption",
      "TLS 1.3 in transit",
      "Secrets management",
      "Dependency analysis",
      "Runtime monitoring",
      "Anomaly detection",
      "Incident response",
    ],
  },
  "pt-br": {
    badge: "Motor de Agentes",
    title: "16 camadas de segurança\nindependentes",
    subtitle:
      "Cada agente do Lattice opera dentro de um sandbox com 16 barreiras de segurança autônomas. Uma falha em uma camada não compromete as demais.",
    active: "ativo",
    highlights: [
      {
        title: "Construído em Rust",
        description:
          "O runtime do motor de agentes é escrito em Rust, eliminando classes inteiras de vulnerabilidades por erros de memória (buffer overflow, use-after-free, data races).",
      },
      {
        title: "Isolamento por processo",
        description:
          "Cada agente roda em seu próprio processo isolado com espaço de memória dedicado. Um agente comprometido não pode ler nem modificar o contexto de outros.",
      },
      {
        title: "Permissões granulares",
        description:
          "Controle atômico sobre quais dados, ferramentas e APIs cada agente pode invocar. Permissões declaradas explicitamente; negação implícita por padrão.",
      },
      {
        title: "Auditoria imutável",
        description:
          "Cada ação do agente — leitura, escrita, invocação de ferramenta — é registrada em um log append-only assinado criptograficamente.",
      },
    ],
    layers: [
      "Isolamento de rede",
      "Autenticação JWT/OAuth",
      "Autorização RBAC",
      "Validação de entrada",
      "Sanitização de saída",
      "Segurança de memória (Rust)",
      "Isolamento de processo",
      "Rate limiting",
      "Auditoria imutável",
      "Criptografia AES-256",
      "TLS 1.3 em trânsito",
      "Gestão de segredos",
      "Análise de dependências",
      "Monitoramento em runtime",
      "Detecção de anomalias",
      "Resposta a incidentes",
    ],
  },
} as const;

export function AgentLayersSection() {
  const locale = useLocale();
  const t = T[locale] ?? T.es;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section className="relative overflow-hidden bg-brand-surface dark:bg-brand-midnight py-20 px-4 sm:px-6 lg:px-8">
        {/* Glow */}
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-brand-accent/4 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          {/* Header */}
          <m.div
            ref={ref}
            initial={shouldReduce ? false : { opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6 }}
            className="mx-auto max-w-3xl text-center mb-14"
          >
            <span className="mb-4 inline-block rounded-full border border-brand-accent/20 bg-brand-accent/10 px-4 py-1.5 text-[0.75rem] font-semibold uppercase tracking-wider text-brand-accent">
              {t.badge}
            </span>
            <h2 className="font-proxima text-[1.75rem] font-bold leading-[1.2] tracking-tight text-brand-midnight dark:text-brand-white sm:text-[2.25rem] lg:text-[2.75rem]">
              {t.title.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-midnight/60 dark:text-brand-white/60 sm:text-lg">
              {t.subtitle}
            </p>
          </m.div>

          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* Layers stack — visual */}
            <m.div
              initial={shouldReduce ? false : { opacity: 0, x: -24 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: shouldReduce ? 0 : 0.7, delay: 0.2 }}
              className="order-2 lg:order-1"
            >
              <div className="overflow-hidden rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-navy">
                {/* Header bar */}
                <div className="flex items-center gap-2 border-b border-brand-midnight/8 dark:border-brand-white/10 px-5 py-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-danger-600/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-warning-600/60" />
                  <div className="h-2.5 w-2.5 rounded-full bg-success-600/60" />
                  <span className="ml-3 text-xs text-brand-midnight/35 dark:text-brand-white/35">
                    lattice-agent — security stack
                  </span>
                </div>
                <div className="divide-y divide-brand-white/5">
                  {t.layers.map((label, i) => {
                    const Icon = layerIcons[i];
                    return (
                      <m.div
                        key={label}
                        initial={shouldReduce ? false : { opacity: 0, x: -12 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: shouldReduce ? 0 : 0.3,
                          delay: 0.3 + i * 0.045,
                        }}
                        className="group flex items-center gap-3 px-5 py-2.5 transition-colors hover:bg-brand-accent/5"
                      >
                        <span className="w-5 text-right text-[0.65rem] font-mono text-brand-midnight/25 dark:text-brand-white/25">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-brand-accent/10">
                          <Icon className="h-3.5 w-3.5 text-brand-accent" />
                        </div>
                        <span className="text-sm text-brand-midnight/70 dark:text-brand-white/70 group-hover:text-brand-surface/90 transition-colors">
                          {label}
                        </span>
                        <span className="ml-auto text-[0.65rem] font-mono text-success-600/70">
                          ✓ {t.active}
                        </span>
                      </m.div>
                    );
                  })}
                </div>
              </div>
            </m.div>

            {/* Highlight cards */}
            <div className="order-1 flex flex-col gap-5 lg:order-2">
              {t.highlights.map((h, i) => {
                const Icon = highlightIcons[i];
                return (
                  <m.div
                    key={h.title}
                    initial={shouldReduce ? false : { opacity: 0, x: 24 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: shouldReduce ? 0 : 0.5,
                      delay: 0.2 + i * 0.12,
                    }}
                    className="flex gap-4 rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-navy p-6 transition-all hover:border-brand-accent/20 hover:shadow-lg hover:shadow-brand-accent/5"
                  >
                    <div className="mt-0.5 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-brand-accent/10">
                      <Icon className="h-5 w-5 text-brand-accent" />
                    </div>
                    <div>
                      <h3 className="text-sm font-proxima font-semibold text-brand-midnight dark:text-brand-white">
                        {h.title}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-brand-midnight/55 dark:text-brand-white/55">
                        {h.description}
                      </p>
                    </div>
                  </m.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
