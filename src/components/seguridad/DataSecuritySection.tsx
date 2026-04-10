"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import {
  Database,
  Lock,
  ShieldCheck,
  Eye,
  UserCog,
  ServerOff,
  FileCheck,
  BadgeCheck,
} from "lucide-react";
import { useLocale } from "@/i18n/DictionaryProvider";

/* ── i18n translations ────────────────────────────────────────── */

const icons = [FileCheck, Eye, Lock, ShieldCheck, UserCog, ServerOff, BadgeCheck, Database];
const tagColors = [
  "brand-accent",
  "brand-accent",
  "success-600",
  "success-600",
  "sky-600",
  "warning-600",
  "purple-600",
  "purple-600",
];

const T = {
  es: {
    badge: "Seguridad de Datos",
    title: "Cumplimiento normativo\ndesde la arquitectura",
    subtitle:
      "Lattice opera sobre una base de seguridad multinivel que cumple con la regulación mexicana vigente y está preparada para auditorías internacionales.",
    features: [
      {
        title: "LFPDPPP",
        description:
          "Ley Federal de Protección de Datos Personales en Posesión de los Particulares. Tratamiento, consentimiento y derechos ARCO implementados por diseño.",
        tag: "México",
      },
      {
        title: "LGTAIP",
        description:
          "Ley General de Transparencia y Acceso a la Información Pública. Controles de acceso y trazabilidad de información pública alineados a la norma.",
        tag: "México",
      },
      {
        title: "AES-256 en reposo",
        description:
          "Todos los datos almacenados se cifran con AES-256-GCM. Las claves se gestionan con rotación automática y nunca se exponen en texto plano.",
        tag: "Cifrado",
      },
      {
        title: "TLS 1.3 en tránsito",
        description:
          "Toda comunicación entre servicios y clientes viaja cifrada con TLS 1.3. Perfect Forward Secrecy habilitado por defecto en todos los endpoints.",
        tag: "Cifrado",
      },
      {
        title: "RBAC granular",
        description:
          "Control de acceso basado en roles con políticas a nivel de recurso. Cada usuario accede solo a lo que necesita; mínimo privilegio por defecto.",
        tag: "Acceso",
      },
      {
        title: "Sin retención en Sintérgica AI",
        description:
          "Sintérgica AI no almacena, entrena ni procesa tus datos en sus servidores. Toda la computación ocurre en tu infraestructura.",
        tag: "Soberanía",
      },
      {
        title: "ISO 27001 ready",
        description:
          "Arquitectura y controles alineados al estándar ISO/IEC 27001 para sistemas de gestión de seguridad de la información.",
        tag: "Internacional",
      },
      {
        title: "SOC 2 ready",
        description:
          "Controles orientados a los criterios de Trust Services de AICPA: seguridad, disponibilidad, integridad de procesamiento y confidencialidad.",
        tag: "Internacional",
      },
    ],
  },
  en: {
    badge: "Data Security",
    title: "Regulatory compliance\nfrom the architecture up",
    subtitle:
      "Lattice operates on a multi-layer security foundation that meets current Mexican regulation and is ready for international audits.",
    features: [
      {
        title: "LFPDPPP",
        description:
          "Federal Law on Protection of Personal Data Held by Private Parties. Data handling, consent, and ARCO rights implemented by design.",
        tag: "Mexico",
      },
      {
        title: "LGTAIP",
        description:
          "General Law on Transparency and Access to Public Information. Access controls and traceability of public information aligned with the regulation.",
        tag: "Mexico",
      },
      {
        title: "AES-256 at rest",
        description:
          "All stored data is encrypted with AES-256-GCM. Keys are managed with automatic rotation and never exposed in plain text.",
        tag: "Encryption",
      },
      {
        title: "TLS 1.3 in transit",
        description:
          "All communication between services and clients is encrypted with TLS 1.3. Perfect Forward Secrecy enabled by default on all endpoints.",
        tag: "Encryption",
      },
      {
        title: "Granular RBAC",
        description:
          "Role-based access control with resource-level policies. Each user accesses only what they need; least privilege by default.",
        tag: "Access",
      },
      {
        title: "No retention at Sintérgica AI",
        description:
          "Sintérgica AI does not store, train on, or process your data on its servers. All computation happens on your infrastructure.",
        tag: "Sovereignty",
      },
      {
        title: "ISO 27001 ready",
        description:
          "Architecture and controls aligned with the ISO/IEC 27001 standard for information security management systems.",
        tag: "International",
      },
      {
        title: "SOC 2 ready",
        description:
          "Controls oriented to AICPA Trust Services criteria: security, availability, processing integrity, and confidentiality.",
        tag: "International",
      },
    ],
  },
  "pt-br": {
    badge: "Segurança de Dados",
    title: "Conformidade regulatória\ndesde a arquitetura",
    subtitle:
      "Lattice opera sobre uma base de segurança multinível que cumpre a regulamentação mexicana vigente e está preparada para auditorias internacionais.",
    features: [
      {
        title: "LFPDPPP",
        description:
          "Lei Federal de Proteção de Dados Pessoais em Posse de Particulares. Tratamento, consentimento e direitos ARCO implementados por design.",
        tag: "México",
      },
      {
        title: "LGTAIP",
        description:
          "Lei Geral de Transparência e Acesso à Informação Pública. Controles de acesso e rastreabilidade de informação pública alinhados à norma.",
        tag: "México",
      },
      {
        title: "AES-256 em repouso",
        description:
          "Todos os dados armazenados são criptografados com AES-256-GCM. As chaves são gerenciadas com rotação automática e nunca expostas em texto plano.",
        tag: "Criptografia",
      },
      {
        title: "TLS 1.3 em trânsito",
        description:
          "Toda comunicação entre serviços e clientes é criptografada com TLS 1.3. Perfect Forward Secrecy habilitado por padrão em todos os endpoints.",
        tag: "Criptografia",
      },
      {
        title: "RBAC granular",
        description:
          "Controle de acesso baseado em funções com políticas no nível de recurso. Cada usuário acessa apenas o que precisa; mínimo privilégio por padrão.",
        tag: "Acesso",
      },
      {
        title: "Sem retenção na Sintérgica AI",
        description:
          "Sintérgica AI não armazena, treina nem processa seus dados em seus servidores. Toda a computação ocorre na sua infraestrutura.",
        tag: "Soberania",
      },
      {
        title: "ISO 27001 ready",
        description:
          "Arquitetura e controles alinhados ao padrão ISO/IEC 27001 para sistemas de gestão de segurança da informação.",
        tag: "Internacional",
      },
      {
        title: "SOC 2 ready",
        description:
          "Controles orientados aos critérios de Trust Services da AICPA: segurança, disponibilidade, integridade de processamento e confidencialidade.",
        tag: "Internacional",
      },
    ],
  },
} as const;

const tagColorMap: Record<string, string> = {
  "brand-accent": "border-brand-accent/20 bg-brand-accent/10 text-brand-accent",
  "success-600": "border-success-600/20 bg-success-600/10 text-success-600",
  "warning-600": "border-yellow-500/20 bg-yellow-500/10 text-yellow-400",
  "sky-600": "border-sky-500/20 bg-sky-500/10 text-sky-400",
  "purple-600": "border-purple-500/20 bg-purple-500/10 text-purple-400",
};

export function DataSecuritySection() {
  const locale = useLocale();
  const t = T[locale] ?? T.es;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section className="bg-brand-surface dark:bg-brand-deep py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
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

          {/* Feature grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {t.features.map((feature, i) => {
              const Icon = icons[i];
              const tagClasses =
                tagColorMap[tagColors[i]] ?? tagColorMap["brand-accent"];
              return (
                <m.div
                  key={feature.title}
                  initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: shouldReduce ? 0 : 0.5,
                    delay: 0.1 + i * 0.07,
                  }}
                  className="group flex flex-col rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-navy p-6 transition-all duration-300 hover:border-brand-accent/20 hover:shadow-xl hover:shadow-brand-accent/5"
                >
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent/10">
                      <Icon className="h-5 w-5 text-brand-accent" />
                    </div>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide ${tagClasses}`}
                    >
                      {feature.tag}
                    </span>
                  </div>
                  <h3 className="text-sm font-proxima font-semibold text-brand-midnight dark:text-brand-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-midnight/55 dark:text-brand-white/55">
                    {feature.description}
                  </p>
                </m.div>
              );
            })}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
