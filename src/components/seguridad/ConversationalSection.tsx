"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import {
  Timer,
  Users,
  ServerOff,
  KeySquare,
  CheckCircle2,
} from "lucide-react";
import { useLocale } from "@/i18n/DictionaryProvider";

/* ── i18n translations ────────────────────────────────────────── */

const featureIcons = [Timer, Users, ServerOff, KeySquare];

const T = {
  es: {
    badge: "Interfaz Conversacional",
    title: "Sesiones seguras,\nsin rastros en nuestros servidores",
    subtitle:
      "La interfaz conversacional de Lattice fue diseñada para entornos de alta regulación. Control total del administrador sobre cada sesión y credencial.",
    features: [
      {
        title: "Sesiones con expiración configurable",
        description:
          "Cada sesión de usuario tiene un TTL (time-to-live) definido por el administrador. Las sesiones inactivas se invalidan automáticamente según la política de tu organización.",
        points: [
          "TTL configurable por rol o usuario",
          "Cierre automático por inactividad",
          "Revocación instantánea desde panel admin",
        ],
      },
      {
        title: "Control de acceso por usuario/rol",
        description:
          "Políticas de acceso a nivel de conversación, agente y herramienta. Segmentación por departamento, proyecto o nivel de clasificación de datos.",
        points: [
          "Políticas de acceso a nivel de agente",
          "Segmentación por departamento y proyecto",
          "Herencia y sobreescritura de permisos",
        ],
      },
      {
        title: "Sin almacenamiento en servidores Sintérgica AI",
        description:
          "El historial de conversaciones, documentos adjuntos y contexto de sesión residen exclusivamente en la infraestructura del cliente. Sintérgica AI no tiene acceso.",
        points: [
          "Historial en tu infraestructura únicamente",
          "Sintérgica AI no tiene acceso a conversaciones",
          "Soberanía total de datos por diseño",
        ],
      },
      {
        title: "SSO / LDAP",
        description:
          "Integración nativa con tu directorio corporativo. Un solo punto de control para altas, bajas y cambios de acceso al sistema.",
        points: [
          "SAML 2.0 y OpenID Connect (OIDC)",
          "Active Directory y LDAP",
          "MFA obligatorio configurable",
        ],
      },
    ],
  },
  en: {
    badge: "Conversational Interface",
    title: "Secure sessions,\nno traces on our servers",
    subtitle:
      "Lattice's conversational interface was designed for highly regulated environments. Full administrator control over every session and credential.",
    features: [
      {
        title: "Sessions with configurable expiration",
        description:
          "Each user session has a TTL (time-to-live) defined by the administrator. Inactive sessions are automatically invalidated according to your organization's policy.",
        points: [
          "Configurable TTL per role or user",
          "Automatic closure on inactivity",
          "Instant revocation from admin panel",
        ],
      },
      {
        title: "User/role-based access control",
        description:
          "Access policies at the conversation, agent, and tool level. Segmentation by department, project, or data classification level.",
        points: [
          "Agent-level access policies",
          "Segmentation by department and project",
          "Permission inheritance and override",
        ],
      },
      {
        title: "No storage on Sintérgica AI servers",
        description:
          "Conversation history, attached documents, and session context reside exclusively on the client's infrastructure. Sintérgica AI has no access.",
        points: [
          "History on your infrastructure only",
          "Sintérgica AI has no access to conversations",
          "Full data sovereignty by design",
        ],
      },
      {
        title: "SSO / LDAP",
        description:
          "Native integration with your corporate directory. A single control point for onboarding, offboarding, and access changes.",
        points: [
          "SAML 2.0 and OpenID Connect (OIDC)",
          "Active Directory and LDAP",
          "Configurable mandatory MFA",
        ],
      },
    ],
  },
  "pt-br": {
    badge: "Interface Conversacional",
    title: "Sessões seguras,\nsem rastros nos nossos servidores",
    subtitle:
      "A interface conversacional do Lattice foi projetada para ambientes de alta regulamentação. Controle total do administrador sobre cada sessão e credencial.",
    features: [
      {
        title: "Sessões com expiração configurável",
        description:
          "Cada sessão de usuário tem um TTL (time-to-live) definido pelo administrador. Sessões inativas são invalidadas automaticamente conforme a política da sua organização.",
        points: [
          "TTL configurável por função ou usuário",
          "Encerramento automático por inatividade",
          "Revogação instantânea pelo painel admin",
        ],
      },
      {
        title: "Controle de acesso por usuário/função",
        description:
          "Políticas de acesso no nível de conversa, agente e ferramenta. Segmentação por departamento, projeto ou nível de classificação de dados.",
        points: [
          "Políticas de acesso no nível de agente",
          "Segmentação por departamento e projeto",
          "Herança e substituição de permissões",
        ],
      },
      {
        title: "Sem armazenamento nos servidores Sintérgica AI",
        description:
          "O histórico de conversas, documentos anexados e contexto de sessão residem exclusivamente na infraestrutura do cliente. Sintérgica AI não tem acesso.",
        points: [
          "Histórico apenas na sua infraestrutura",
          "Sintérgica AI não tem acesso a conversas",
          "Soberania total de dados por design",
        ],
      },
      {
        title: "SSO / LDAP",
        description:
          "Integração nativa com seu diretório corporativo. Um único ponto de controle para admissões, desligamentos e alterações de acesso.",
        points: [
          "SAML 2.0 e OpenID Connect (OIDC)",
          "Active Directory e LDAP",
          "MFA obrigatório configurável",
        ],
      },
    ],
  },
} as const;

export function ConversationalSection() {
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
            <span className="mb-4 inline-block rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-1.5 text-[0.75rem] font-semibold uppercase tracking-wider text-sky-400">
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

          {/* Feature cards — 2-col grid */}
          <div className="grid gap-6 sm:grid-cols-2">
            {t.features.map((feature, i) => {
              const Icon = featureIcons[i];
              return (
                <m.div
                  key={feature.title}
                  initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: shouldReduce ? 0 : 0.5,
                    delay: 0.1 + i * 0.1,
                  }}
                  className="group rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-navy p-7 transition-all duration-300 hover:border-sky-500/20 hover:shadow-xl hover:shadow-sky-500/5"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10">
                    <Icon className="h-5 w-5 text-sky-400" />
                  </div>
                  <h3 className="text-base font-proxima font-semibold text-brand-midnight dark:text-brand-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-midnight/55 dark:text-brand-white/55">
                    {feature.description}
                  </p>
                  <ul className="mt-5 space-y-2">
                    {feature.points.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-400/70" />
                        <span className="text-sm text-brand-midnight/65 dark:text-brand-white/65">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </m.div>
              );
            })}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
