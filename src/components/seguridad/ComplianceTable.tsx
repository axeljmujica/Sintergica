"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { CheckCircle2, Clock, Globe } from "lucide-react";
import { useLocale } from "@/i18n/DictionaryProvider";

/* ── i18n translations ────────────────────────────────────────── */

type Status = "cumple" | "preparado" | "compatible";

interface Framework {
  name: string;
  scope: string;
  region: string;
  status: Status;
  description: string;
}

const T = {
  es: {
    badge: "Cumplimiento Normativo",
    title: "Preparados para los marcos\nregulatorios más exigentes",
    subtitle:
      "Lattice implementa IA privada para sectores regulados en México y Latinoamérica. La arquitectura zero-trust cubre las exigencias de los principales estándares globales.",
    statusLabel: {
      cumple: "Cumple",
      preparado: "Listo para auditoría",
      compatible: "Arquitectura compatible",
    } as Record<Status, string>,
    tableHeaders: {
      framework: "Framework",
      scope: "Ámbito",
      region: "Región",
      status: "Estado",
      description: "Descripción",
    },
    frameworks: [
      {
        name: "LFPDPPP",
        scope: "Datos personales",
        region: "México",
        status: "cumple" as Status,
        description:
          "Ley Federal de Protección de Datos Personales en Posesión de los Particulares. Derechos ARCO, consentimiento explícito y transferencias controladas implementados por diseño.",
      },
      {
        name: "LGTAIP",
        scope: "Transparencia pública",
        region: "México",
        status: "cumple" as Status,
        description:
          "Ley General de Transparencia y Acceso a la Información Pública. Trazabilidad de acceso a información gubernamental y controles de clasificación.",
      },
      {
        name: "ISO 27001",
        scope: "Seguridad de la información",
        region: "Internacional",
        status: "preparado" as Status,
        description:
          "Sistema de Gestión de Seguridad de la Información (SGSI). Controles A.5–A.18 implementados; arquitectura lista para proceso de certificación.",
      },
      {
        name: "SOC 2 Type II",
        scope: "Controles de servicio",
        region: "EE.UU. / Global",
        status: "preparado" as Status,
        description:
          "Trust Services Criteria de AICPA: seguridad, disponibilidad, integridad de procesamiento y confidencialidad. Logs y controles listos para auditoría de terceros.",
      },
      {
        name: "HIPAA",
        scope: "Datos de salud",
        region: "EE.UU.",
        status: "preparado" as Status,
        description:
          "Health Insurance Portability and Accountability Act. Cifrado, controles de acceso y auditoría de PHI (Protected Health Information) preparados para el módulo de salud.",
      },
      {
        name: "GDPR",
        scope: "Datos personales",
        region: "Unión Europea",
        status: "compatible" as Status,
        description:
          "General Data Protection Regulation. Arquitectura de datos on-premise y controles de soberanía compatibles con los requisitos de residencia y transferencia de datos del GDPR.",
      },
    ] as Framework[],
  },
  en: {
    badge: "Regulatory Compliance",
    title: "Ready for the most\ndemanding regulatory frameworks",
    subtitle:
      "Lattice deploys private AI for regulated sectors in Mexico and Latin America. The zero-trust architecture meets the requirements of the leading global standards.",
    statusLabel: {
      cumple: "Compliant",
      preparado: "Audit-ready",
      compatible: "Architecture compatible",
    } as Record<Status, string>,
    tableHeaders: {
      framework: "Framework",
      scope: "Scope",
      region: "Region",
      status: "Status",
      description: "Description",
    },
    frameworks: [
      {
        name: "LFPDPPP",
        scope: "Personal data",
        region: "Mexico",
        status: "cumple" as Status,
        description:
          "Federal Law on Protection of Personal Data Held by Private Parties. ARCO rights, explicit consent, and controlled transfers implemented by design.",
      },
      {
        name: "LGTAIP",
        scope: "Public transparency",
        region: "Mexico",
        status: "cumple" as Status,
        description:
          "General Law on Transparency and Access to Public Information. Traceability of access to government information and classification controls.",
      },
      {
        name: "ISO 27001",
        scope: "Information security",
        region: "International",
        status: "preparado" as Status,
        description:
          "Information Security Management System (ISMS). Controls A.5–A.18 implemented; architecture ready for certification process.",
      },
      {
        name: "SOC 2 Type II",
        scope: "Service controls",
        region: "U.S. / Global",
        status: "preparado" as Status,
        description:
          "AICPA Trust Services Criteria: security, availability, processing integrity, and confidentiality. Logs and controls ready for third-party audit.",
      },
      {
        name: "HIPAA",
        scope: "Health data",
        region: "U.S.",
        status: "preparado" as Status,
        description:
          "Health Insurance Portability and Accountability Act. Encryption, access controls, and PHI (Protected Health Information) audit prepared for the health module.",
      },
      {
        name: "GDPR",
        scope: "Personal data",
        region: "European Union",
        status: "compatible" as Status,
        description:
          "General Data Protection Regulation. On-premise data architecture and sovereignty controls compatible with GDPR data residency and transfer requirements.",
      },
    ] as Framework[],
  },
  "pt-br": {
    badge: "Conformidade Regulatória",
    title: "Preparados para os marcos\nregulatórios mais exigentes",
    subtitle:
      "Lattice implementa IA privada para setores regulados no México e América Latina. A arquitetura zero-trust cobre as exigências dos principais padrões globais.",
    statusLabel: {
      cumple: "Em conformidade",
      preparado: "Pronto para auditoria",
      compatible: "Arquitetura compatível",
    } as Record<Status, string>,
    tableHeaders: {
      framework: "Framework",
      scope: "Âmbito",
      region: "Região",
      status: "Status",
      description: "Descrição",
    },
    frameworks: [
      {
        name: "LFPDPPP",
        scope: "Dados pessoais",
        region: "México",
        status: "cumple" as Status,
        description:
          "Lei Federal de Proteção de Dados Pessoais em Posse de Particulares. Direitos ARCO, consentimento explícito e transferências controladas implementados por design.",
      },
      {
        name: "LGTAIP",
        scope: "Transparência pública",
        region: "México",
        status: "cumple" as Status,
        description:
          "Lei Geral de Transparência e Acesso à Informação Pública. Rastreabilidade de acesso a informação governamental e controles de classificação.",
      },
      {
        name: "ISO 27001",
        scope: "Segurança da informação",
        region: "Internacional",
        status: "preparado" as Status,
        description:
          "Sistema de Gestão de Segurança da Informação (SGSI). Controles A.5–A.18 implementados; arquitetura pronta para processo de certificação.",
      },
      {
        name: "SOC 2 Type II",
        scope: "Controles de serviço",
        region: "EUA / Global",
        status: "preparado" as Status,
        description:
          "Critérios de Trust Services da AICPA: segurança, disponibilidade, integridade de processamento e confidencialidade. Logs e controles prontos para auditoria de terceiros.",
      },
      {
        name: "HIPAA",
        scope: "Dados de saúde",
        region: "EUA",
        status: "preparado" as Status,
        description:
          "Health Insurance Portability and Accountability Act. Criptografia, controles de acesso e auditoria de PHI (Protected Health Information) preparados para o módulo de saúde.",
      },
      {
        name: "GDPR",
        scope: "Dados pessoais",
        region: "União Europeia",
        status: "compatible" as Status,
        description:
          "General Data Protection Regulation. Arquitetura de dados on-premise e controles de soberania compatíveis com os requisitos de residência e transferência de dados do GDPR.",
      },
    ] as Framework[],
  },
} as const;

const statusConfig: Record<Status, { classes: string; dotClass: string }> = {
  cumple: {
    classes: "border-success-600/20 bg-success-600/10 text-success-600",
    dotClass: "bg-success-600",
  },
  preparado: {
    classes: "border-brand-accent/20 bg-brand-accent/10 text-brand-accent",
    dotClass: "bg-brand-accent",
  },
  compatible: {
    classes: "border-yellow-500/20 bg-yellow-500/10 text-yellow-400",
    dotClass: "bg-yellow-400",
  },
};

const statusIcon: Record<Status, typeof CheckCircle2> = {
  cumple: CheckCircle2,
  preparado: Clock,
  compatible: Globe,
};

export function ComplianceTable() {
  const locale = useLocale();
  const t = T[locale] ?? T.es;
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section id="cumplimiento" className="bg-brand-surface dark:bg-brand-midnight py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <m.div
            ref={ref}
            initial={shouldReduce ? false : { opacity: 0, y: 24 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6 }}
            className="mx-auto max-w-3xl text-center mb-14"
          >
            <span className="mb-4 inline-block rounded-full border border-success-600/20 bg-success-600/10 px-4 py-1.5 text-[0.75rem] font-semibold uppercase tracking-wider text-success-600">
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

          {/* Status legend */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.2 }}
            className="mb-6 flex flex-wrap justify-center gap-4"
          >
            {(Object.entries(t.statusLabel) as [Status, string][]).map(
              ([status, label]) => {
                const { dotClass } = statusConfig[status];
                return (
                  <span
                    key={status}
                    className="flex items-center gap-2 text-xs text-brand-midnight/55 dark:text-brand-white/55"
                  >
                    <span className={`h-2 w-2 rounded-full ${dotClass}`} />
                    {label}
                  </span>
                );
              }
            )}
          </m.div>

          {/* Desktop table */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6, delay: 0.3 }}
            className="hidden overflow-hidden rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 md:block"
          >
            <table className="w-full">
              <thead>
                <tr className="border-b border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-navy">
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-brand-midnight/45 dark:text-brand-white/45">
                    {t.tableHeaders.framework}
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-brand-midnight/45 dark:text-brand-white/45">
                    {t.tableHeaders.scope}
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-brand-midnight/45 dark:text-brand-white/45">
                    {t.tableHeaders.region}
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-brand-midnight/45 dark:text-brand-white/45">
                    {t.tableHeaders.status}
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-brand-midnight/45 dark:text-brand-white/45">
                    {t.tableHeaders.description}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-white/5 bg-brand-surface dark:bg-brand-deep">
                {t.frameworks.map((fw, i) => {
                  const { classes } = statusConfig[fw.status];
                  const StatusIcon = statusIcon[fw.status];
                  return (
                    <m.tr
                      key={fw.name}
                      initial={shouldReduce ? false : { opacity: 0, x: -12 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: shouldReduce ? 0 : 0.4,
                        delay: 0.4 + i * 0.07,
                      }}
                      className="transition-colors hover:bg-brand-navy/50"
                    >
                      <td className="px-6 py-4">
                        <span className="text-sm font-bold text-brand-midnight dark:text-brand-white">
                          {fw.name}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-brand-midnight/65 dark:text-brand-white/65">
                          {fw.scope}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-sm text-brand-midnight/65 dark:text-brand-white/65">
                          {fw.region}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[0.7rem] font-semibold ${classes}`}
                        >
                          <StatusIcon className="h-3 w-3" />
                          {t.statusLabel[fw.status]}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <p className="max-w-sm text-sm leading-relaxed text-brand-midnight/50 dark:text-brand-white/50">
                          {fw.description}
                        </p>
                      </td>
                    </m.tr>
                  );
                })}
              </tbody>
            </table>
          </m.div>

          {/* Mobile cards */}
          <div className="grid gap-4 md:hidden">
            {t.frameworks.map((fw, i) => {
              const { classes } = statusConfig[fw.status];
              const StatusIcon = statusIcon[fw.status];
              return (
                <m.div
                  key={fw.name}
                  initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: shouldReduce ? 0 : 0.4,
                    delay: 0.3 + i * 0.07,
                  }}
                  className="rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-navy p-5"
                >
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base font-proxima font-semibold text-brand-midnight dark:text-brand-white">
                        {fw.name}
                      </h3>
                      <p className="text-xs text-brand-midnight/45 dark:text-brand-white/45">
                        {fw.scope} · {fw.region}
                      </p>
                    </div>
                    <span
                      className={`inline-flex flex-shrink-0 items-center gap-1.5 rounded-full border px-3 py-1 text-[0.7rem] font-semibold ${classes}`}
                    >
                      <StatusIcon className="h-3 w-3" />
                      {t.statusLabel[fw.status]}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-brand-midnight/55 dark:text-brand-white/55">
                    {fw.description}
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
