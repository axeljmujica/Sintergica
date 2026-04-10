"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import {
  Vote, Shield, Globe,
  GitPullRequest, Database, FileText, Bug,
  RefreshCw, FileSearch, AlertTriangle, CheckCircle2,
  Scale, Github, ExternalLink,
} from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTASection } from "@/components/shared/CTASection";
import { useLocale } from "@/i18n/DictionaryProvider";

/* ─────────────────── i18n ─────────────────── */

const T = {
  es: {
    hero: {
      badge: "GOBERNANZA DEL MODELO",
      title: "Las decisiones sobre el modelo son de la comunidad — no de una empresa",
      subtitle: "Lattice Na'at es un proyecto de código abierto. La gobernanza define quién toma las decisiones, cómo se toman y cómo se rinde cuentas por ellas. Ninguna decisión técnica puede ignorar este marco.",
      bgImageAlt: "Gobernanza del modelo Lattice Na'at — Sintérgica AI",
      trustSignals: ["Open Source", "CC0 1.0", "Versión 1.0 — Marzo 2026"],
    },
    stats: [
      { value: "4", label: "Órganos de gobernanza", sub: "Coordinación, Consejo, Panel, Comunidad" },
      { value: "2/3", label: "Mayoría calificada", sub: "Para cambios sustantivos" },
      { value: "30 días", label: "Debate público mínimo", sub: "Antes de cualquier enmienda" },
      { value: "CC0 1.0", label: "Licencia", sub: "Creative Commons — sin restricciones" },
    ],
    organos: {
      badge: "ESTRUCTURA",
      title: "Los cuatro órganos de gobernanza",
      subtitle: "Sintérgica AI puede proponer, pero la comunidad aprueba. Los cambios sustantivos al modelo requieren proceso participativo.",
    },
    organosItems: [
      { nombre: "Coordinación Central", composicion: "Equipo de Sintérgica AI (Sintérgica Labs)", funcion: "Desarrollo técnico, mantenimiento, coordinación operativa del proyecto, publicación de versiones.", frecuencia: "Continua" },
      { nombre: "Consejo de la Comunidad", composicion: "Contribuidores activos, investigadores independientes y organizaciones colaboradoras.", funcion: "Revisión y aprobación de cambios sustantivos a la Constitución y a políticas de gobernanza. Voto en decisiones de alto impacto.", frecuencia: "Trimestral o según convocatoria" },
      { nombre: "Panel de Evaluación Independiente", composicion: "Investigadores externos no afiliados a Sintérgica AI, con expertise en IA, ética, lingüística o derecho.", funcion: "Auditoría independiente del comportamiento del modelo. Evaluaciones de sesgo WEIRD. Publicación de hallazgos.", frecuencia: "Semestral" },
      { nombre: "Comunidad Abierta", composicion: "Cualquier persona o entidad que contribuya código, datos, evaluaciones o retroalimentación.", funcion: "Reporte de incidentes, propuestas de mejora, evaluaciones, uso y adaptación del modelo.", frecuencia: "Permanente" },
    ],
    decisiones: {
      badge: "DECISIONES",
      title: "¿Quién decide qué?",
      subtitle: "Cada tipo de decisión tiene un proceso claro. No hay ambigüedad sobre quién aprueba qué.",
      thTipo: "Tipo de decisión",
      thQuien: "Quién decide",
      thProceso: "Proceso requerido",
    },
    decisionesItems: [
      { tipo: "Correcciones de bugs sin impacto en valores", quien: "Coordinación Central", proceso: "Pull request + revisión interna" },
      { tipo: "Nuevas capacidades o funcionalidades", quien: "Coordinación Central + revisión pública", proceso: "RFC abierto por 14 días" },
      { tipo: "Cambios a datasets de entrenamiento", quien: "Coordinación Central + revisión pública", proceso: "RFC abierto por 21 días + documentación" },
      { tipo: "Cambios a la Constitución del Modelo", quien: "Consejo de la Comunidad", proceso: "Propuesta + debate público + votación" },
      { tipo: "Cambios a este documento de Gobernanza", quien: "Consejo de la Comunidad", proceso: "Propuesta + debate público + votación" },
      { tipo: "Decisiones de licenciamiento", quien: "Coordinación Central + Consejo", proceso: "Votación con mayoría calificada (2/3)" },
      { tipo: "Respuesta a incidentes críticos", quien: "Coordinación Central", proceso: "Acción inmediata + reporte público posterior" },
    ],
    contribucion: {
      badge: "CONTRIBUCIÓN",
      title: "Cualquier persona puede contribuir",
      subtitle: "No se requiere afiliación con Sintérgica AI ni aprobación previa. Lo que sí se requiere es adherencia al Código de Conducta y alineación con la Constitución del Modelo.",
      imgAlt: "Desarrollador contribuyendo a Lattice Na'at",
    },
    contribucionItems: [
      { tipo: "Código y arquitectura", ejemplos: "Mejoras al motor de inferencia, optimizaciones, nuevas integraciones.", canal: "GitHub — Pull Request" },
      { tipo: "Datos y corpus", ejemplos: "Datasets en español mexicano, lenguas originarias, normativa, jurisprudencia.", canal: "GitHub + formulario de donación" },
      { tipo: "Evaluaciones y benchmarks", ejemplos: "Pruebas de sesgo WEIRD, evaluaciones de rendimiento en contextos mexicanos, red teaming.", canal: "GitHub — Issues o repositorio de evaluaciones" },
      { tipo: "Documentación", ejemplos: "Traducciones, guías de uso, casos de aplicación, correcciones.", canal: "GitHub — Pull Request" },
      { tipo: "Reporte de incidentes", ejemplos: "Comportamientos inapropiados, sesgos detectados, fallas de seguridad.", canal: "Canal dedicado de reporte (Sección V)" },
    ],
    versionado: {
      badge: "VERSIONADO",
      title: "Esquema MAYOR.MENOR.PARCHE",
      subtitle: "Lattice Na'at usa versionado semántico adaptado. Cada componente indica el nivel de cambio y el proceso de aprobación requerido.",
    },
    versionesItems: [
      { componente: "MAYOR", ejemplo: "2.x.x", indica: "Cambio sustantivo en arquitectura base, cambio de escala de parámetros, o cambio de valores fundamentales aprobado por el Consejo." },
      { componente: "MENOR", ejemplo: "x.2.x", indica: "Nuevo ciclo de fine-tuning con datos adicionales, nuevas capacidades documentadas, ampliación a nuevas lenguas." },
      { componente: "PARCHE", ejemplo: "x.x.3", indica: "Correcciones de comportamiento, ajustes de alineación, fixes de seguridad sin cambio de capacidades." },
    ],
    incidentes: {
      badge: "INCIDENTES",
      title: "Reporte y gestión de incidentes",
      subtitle: "Un incidente es cualquier comportamiento del modelo que cause daño, viole la Constitución, represente un riesgo de seguridad o muestre sesgo discriminatorio sistemático.",
      canalPrincipal: "Canal principal",
      asunto: "Asunto: \"INCIDENTE — Lattice Na'at\"",
      canalTecnico: "Canal técnico",
      canalTecnicoDesc: "GitHub Issues etiqueta \"incident\" o \"security\"",
      nota: "Cualquier persona puede reportar. Los reportes anónimos son aceptados.",
      acuseLabel: "Acuse",
      resolucionLabel: "Resolución",
    },
    incidentesItems: [
      { severidad: "Crítica", descripcion: "Riesgo inmediato de daño grave, violación de restricciones absolutas, falla de seguridad explotable.", acuse: "4 horas", resolucion: "72 horas (acción mitigatoria)" },
      { severidad: "Alta", descripcion: "Comportamiento inapropiado sistemático, sesgo discriminatorio documentado, uso malicioso confirmado.", acuse: "24 horas", resolucion: "14 días" },
      { severidad: "Media", descripcion: "Comportamientos que violan la Constitución sin daño inmediato, respuestas culturalmente incorrectas sistemáticas.", acuse: "72 horas", resolucion: "30 días" },
      { severidad: "Baja", descripcion: "Imprecisiones, comportamientos subóptimos, sugerencias de mejora.", acuse: "7 días", resolucion: "Siguiente ciclo de versión" },
    ],
    auditoria: {
      badge: "AUDITORÍA",
      title: "Panel de Evaluación Independiente",
      subtitle: "Los miembros son propuestos por la comunidad, tienen mandatos fijos de dos años no renovables y no pueden tener relación contractual activa con Sintérgica AI.",
      body: "Los informes del Panel son públicos y se publican en los canales oficiales dentro de los",
      bodyDays: "30 días",
      bodyEnd: "siguientes a su entrega. El equipo de Coordinación Central puede incluir respuestas técnicas, pero",
      bodyBold: "no puede modificar los hallazgos del Panel",
      bodyFinal: ".",
    },
    auditoriaAreas: [
      { titulo: "Sesgo WEIRD", desc: "Evaluación sistemática del grado en que el modelo reproduce sesgos occidentales en respuestas a contextos mexicanos y latinoamericanos." },
      { titulo: "Equidad entre comunidades", desc: "Análisis de diferencias de calidad en respuestas a usuarios de distintos orígenes, lenguas, niveles educativos y regiones." },
      { titulo: "Robustez frente a uso adversarial", desc: "Red teaming para detectar formas de eludir las restricciones de la Constitución." },
      { titulo: "Precisión en dominio mexicano", desc: "Evaluación de conocimiento legal, normativo, cultural y lingüístico específico de México." },
      { titulo: "Comportamiento agéntico", desc: "Evaluación de la aplicación de los principios de cautela cuando el modelo opera de forma autónoma." },
    ],
    licencias: {
      badge: "LICENCIAS",
      title: "Condiciones de uso",
      subtitle: "Lattice Na'at se publica bajo una licencia de código abierto permisiva. El uso libre viene con compromisos claros.",
    },
    licenciasItems: [
      { titulo: "Atribución", desc: "Cualquier uso público o comercial debe reconocer el origen del modelo: Sintérgica AI / Lattice Na'at." },
      { titulo: "No contra la Constitución", desc: "Los usuarios se comprometen a no utilizar el modelo para los comportamientos prohibidos descritos en la Constitución del Modelo." },
      { titulo: "Publicar modificaciones", desc: "Quien publique una versión modificada debe documentar claramente qué cambió y bajo qué términos." },
    ],
    prohibidos: {
      title: "Usos explícitamente prohibidos bajo cualquier licencia",
      items: [
        "Cualquier uso que viole las restricciones absolutas de la Constitución",
        "Entrenamiento de sistemas para vigilancia masiva no consentida",
        "Generación de desinformación para manipulación política",
        "Uso en sistemas autónomos de armamento",
        "Eliminar o suprimir atribuciones de origen del modelo",
      ],
    },
    links: "Canales oficiales",
    cta: {
      badge: "GOBERNANZA ABIERTA",
      title: "Un modelo auditable, mejorable y confiable",
      subtitle: "La gobernanza de un modelo de IA es tan importante como su arquitectura técnica. Un modelo con valores correctos pero sin mecanismos de rendición de cuentas es tan riesgoso como uno sin valores.",
      ctaLabel: "Lee la Constitución del Modelo",
      trustSignals: ["Open Source", "Comunidad abierta", "Auditoría independiente"],
    },
  },
  en: {
    hero: {
      badge: "MODEL GOVERNANCE",
      title: "Decisions about the model belong to the community — not a company",
      subtitle: "Lattice Na'at is an open source project. Governance defines who makes the decisions, how they are made, and how accountability is ensured. No technical decision can bypass this framework.",
      bgImageAlt: "Lattice Na'at model governance — Sintérgica AI",
      trustSignals: ["Open Source", "CC0 1.0", "Version 1.0 — March 2026"],
    },
    stats: [
      { value: "4", label: "Governance bodies", sub: "Coordination, Council, Panel, Community" },
      { value: "2/3", label: "Qualified majority", sub: "For substantive changes" },
      { value: "30 days", label: "Minimum public debate", sub: "Before any amendment" },
      { value: "CC0 1.0", label: "License", sub: "Creative Commons — no restrictions" },
    ],
    organos: {
      badge: "STRUCTURE",
      title: "The four governance bodies",
      subtitle: "Sintérgica AI can propose, but the community approves. Substantive changes to the model require a participatory process.",
    },
    organosItems: [
      { nombre: "Central Coordination", composicion: "Sintérgica AI team (Sintérgica Labs)", funcion: "Technical development, maintenance, project operational coordination, version releases.", frecuencia: "Ongoing" },
      { nombre: "Community Council", composicion: "Active contributors, independent researchers, and collaborating organizations.", funcion: "Review and approval of substantive changes to the Constitution and governance policies. Voting on high-impact decisions.", frecuencia: "Quarterly or as convened" },
      { nombre: "Independent Evaluation Panel", composicion: "External researchers unaffiliated with Sintérgica AI, with expertise in AI, ethics, linguistics, or law.", funcion: "Independent audit of model behavior. WEIRD bias evaluations. Publication of findings.", frecuencia: "Biannual" },
      { nombre: "Open Community", composicion: "Any person or entity that contributes code, data, evaluations, or feedback.", funcion: "Incident reporting, improvement proposals, evaluations, model use and adaptation.", frecuencia: "Permanent" },
    ],
    decisiones: {
      badge: "DECISIONS",
      title: "Who decides what?",
      subtitle: "Each type of decision has a clear process. There is no ambiguity about who approves what.",
      thTipo: "Decision type",
      thQuien: "Who decides",
      thProceso: "Required process",
    },
    decisionesItems: [
      { tipo: "Bug fixes with no impact on values", quien: "Central Coordination", proceso: "Pull request + internal review" },
      { tipo: "New capabilities or features", quien: "Central Coordination + public review", proceso: "Open RFC for 14 days" },
      { tipo: "Changes to training datasets", quien: "Central Coordination + public review", proceso: "Open RFC for 21 days + documentation" },
      { tipo: "Changes to the Model Constitution", quien: "Community Council", proceso: "Proposal + public debate + vote" },
      { tipo: "Changes to this Governance document", quien: "Community Council", proceso: "Proposal + public debate + vote" },
      { tipo: "Licensing decisions", quien: "Central Coordination + Council", proceso: "Vote with qualified majority (2/3)" },
      { tipo: "Response to critical incidents", quien: "Central Coordination", proceso: "Immediate action + subsequent public report" },
    ],
    contribucion: {
      badge: "CONTRIBUTION",
      title: "Anyone can contribute",
      subtitle: "No affiliation with Sintérgica AI or prior approval is required. What is required is adherence to the Code of Conduct and alignment with the Model Constitution.",
      imgAlt: "Developer contributing to Lattice Na'at",
    },
    contribucionItems: [
      { tipo: "Code and architecture", ejemplos: "Inference engine improvements, optimizations, new integrations.", canal: "GitHub — Pull Request" },
      { tipo: "Data and corpus", ejemplos: "Mexican Spanish datasets, indigenous languages, regulations, case law.", canal: "GitHub + donation form" },
      { tipo: "Evaluations and benchmarks", ejemplos: "WEIRD bias tests, performance evaluations in Mexican contexts, red teaming.", canal: "GitHub — Issues or evaluations repository" },
      { tipo: "Documentation", ejemplos: "Translations, usage guides, application cases, corrections.", canal: "GitHub — Pull Request" },
      { tipo: "Incident reporting", ejemplos: "Inappropriate behaviors, detected biases, security failures.", canal: "Dedicated reporting channel (Section V)" },
    ],
    versionado: {
      badge: "VERSIONING",
      title: "MAJOR.MINOR.PATCH scheme",
      subtitle: "Lattice Na'at uses adapted semantic versioning. Each component indicates the level of change and the required approval process.",
    },
    versionesItems: [
      { componente: "MAJOR", ejemplo: "2.x.x", indica: "Substantive change in base architecture, parameter scale change, or fundamental value change approved by the Council." },
      { componente: "MINOR", ejemplo: "x.2.x", indica: "New fine-tuning cycle with additional data, new documented capabilities, expansion to new languages." },
      { componente: "PATCH", ejemplo: "x.x.3", indica: "Behavior corrections, alignment adjustments, security fixes with no capability changes." },
    ],
    incidentes: {
      badge: "INCIDENTS",
      title: "Incident reporting and management",
      subtitle: "An incident is any model behavior that causes harm, violates the Constitution, represents a security risk, or exhibits systematic discriminatory bias.",
      canalPrincipal: "Primary channel",
      asunto: "Subject: \"INCIDENT — Lattice Na'at\"",
      canalTecnico: "Technical channel",
      canalTecnicoDesc: "GitHub Issues labeled \"incident\" or \"security\"",
      nota: "Anyone can report. Anonymous reports are accepted.",
      acuseLabel: "Acknowledgment",
      resolucionLabel: "Resolution",
    },
    incidentesItems: [
      { severidad: "Critical", descripcion: "Immediate risk of serious harm, violation of absolute restrictions, exploitable security flaw.", acuse: "4 hours", resolucion: "72 hours (mitigating action)" },
      { severidad: "High", descripcion: "Systematic inappropriate behavior, documented discriminatory bias, confirmed malicious use.", acuse: "24 hours", resolucion: "14 days" },
      { severidad: "Medium", descripcion: "Behaviors violating the Constitution without immediate harm, systematically culturally incorrect responses.", acuse: "72 hours", resolucion: "30 days" },
      { severidad: "Low", descripcion: "Inaccuracies, suboptimal behaviors, improvement suggestions.", acuse: "7 days", resolucion: "Next version cycle" },
    ],
    auditoria: {
      badge: "AUDIT",
      title: "Independent Evaluation Panel",
      subtitle: "Members are proposed by the community, have fixed two-year non-renewable terms, and cannot have an active contractual relationship with Sintérgica AI.",
      body: "The Panel's reports are public and published on official channels within",
      bodyDays: "30 days",
      bodyEnd: "of delivery. The Central Coordination team may include technical responses, but",
      bodyBold: "cannot modify the Panel's findings",
      bodyFinal: ".",
    },
    auditoriaAreas: [
      { titulo: "WEIRD bias", desc: "Systematic evaluation of the degree to which the model reproduces Western biases in responses to Mexican and Latin American contexts." },
      { titulo: "Equity across communities", desc: "Analysis of quality differences in responses to users of different origins, languages, educational levels, and regions." },
      { titulo: "Robustness against adversarial use", desc: "Red teaming to detect ways to circumvent the Constitution's restrictions." },
      { titulo: "Accuracy in Mexican domain", desc: "Evaluation of legal, regulatory, cultural, and linguistic knowledge specific to Mexico." },
      { titulo: "Agentic behavior", desc: "Evaluation of the application of caution principles when the model operates autonomously." },
    ],
    licencias: {
      badge: "LICENSES",
      title: "Terms of use",
      subtitle: "Lattice Na'at is published under a permissive open source license. Free use comes with clear commitments.",
    },
    licenciasItems: [
      { titulo: "Attribution", desc: "Any public or commercial use must acknowledge the model's origin: Sintérgica AI / Lattice Na'at." },
      { titulo: "Not against the Constitution", desc: "Users commit to not using the model for the prohibited behaviors described in the Model Constitution." },
      { titulo: "Publish modifications", desc: "Anyone who publishes a modified version must clearly document what changed and under what terms." },
    ],
    prohibidos: {
      title: "Uses explicitly prohibited under any license",
      items: [
        "Any use that violates the absolute restrictions of the Constitution",
        "Training systems for non-consensual mass surveillance",
        "Generating disinformation for political manipulation",
        "Use in autonomous weapons systems",
        "Removing or suppressing model origin attributions",
      ],
    },
    links: "Official channels",
    cta: {
      badge: "OPEN GOVERNANCE",
      title: "An auditable, improvable, and trustworthy model",
      subtitle: "The governance of an AI model is as important as its technical architecture. A model with the right values but no accountability mechanisms is as risky as one without values.",
      ctaLabel: "Read the Model Constitution",
      trustSignals: ["Open Source", "Open community", "Independent audit"],
    },
  },
  "pt-br": {
    hero: {
      badge: "GOVERNANÇA DO MODELO",
      title: "As decisões sobre o modelo pertencem à comunidade — não a uma empresa",
      subtitle: "Lattice Na'at é um projeto de código aberto. A governança define quem toma as decisões, como são tomadas e como se presta contas por elas. Nenhuma decisão técnica pode ignorar este marco.",
      bgImageAlt: "Governança do modelo Lattice Na'at — Sintérgica AI",
      trustSignals: ["Open Source", "CC0 1.0", "Versão 1.0 — Março 2026"],
    },
    stats: [
      { value: "4", label: "Órgãos de governança", sub: "Coordenação, Conselho, Painel, Comunidade" },
      { value: "2/3", label: "Maioria qualificada", sub: "Para mudanças substantivas" },
      { value: "30 dias", label: "Debate público mínimo", sub: "Antes de qualquer emenda" },
      { value: "CC0 1.0", label: "Licença", sub: "Creative Commons — sem restrições" },
    ],
    organos: {
      badge: "ESTRUTURA",
      title: "Os quatro órgãos de governança",
      subtitle: "A Sintérgica AI pode propor, mas a comunidade aprova. Mudanças substantivas no modelo requerem processo participativo.",
    },
    organosItems: [
      { nombre: "Coordenação Central", composicion: "Equipe da Sintérgica AI (Sintérgica Labs)", funcion: "Desenvolvimento técnico, manutenção, coordenação operacional do projeto, publicação de versões.", frecuencia: "Contínua" },
      { nombre: "Conselho da Comunidade", composicion: "Contribuidores ativos, pesquisadores independentes e organizações colaboradoras.", funcion: "Revisão e aprovação de mudanças substantivas na Constituição e nas políticas de governança. Votação em decisões de alto impacto.", frecuencia: "Trimestral ou por convocação" },
      { nombre: "Painel de Avaliação Independente", composicion: "Pesquisadores externos não afiliados à Sintérgica AI, com expertise em IA, ética, linguística ou direito.", funcion: "Auditoria independente do comportamento do modelo. Avaliações de viés WEIRD. Publicação de achados.", frecuencia: "Semestral" },
      { nombre: "Comunidade Aberta", composicion: "Qualquer pessoa ou entidade que contribua com código, dados, avaliações ou feedback.", funcion: "Relato de incidentes, propostas de melhoria, avaliações, uso e adaptação do modelo.", frecuencia: "Permanente" },
    ],
    decisiones: {
      badge: "DECISÕES",
      title: "Quem decide o quê?",
      subtitle: "Cada tipo de decisão tem um processo claro. Não há ambiguidade sobre quem aprova o quê.",
      thTipo: "Tipo de decisão",
      thQuien: "Quem decide",
      thProceso: "Processo requerido",
    },
    decisionesItems: [
      { tipo: "Correções de bugs sem impacto nos valores", quien: "Coordenação Central", proceso: "Pull request + revisão interna" },
      { tipo: "Novas capacidades ou funcionalidades", quien: "Coordenação Central + revisão pública", proceso: "RFC aberto por 14 dias" },
      { tipo: "Mudanças em datasets de treinamento", quien: "Coordenação Central + revisão pública", proceso: "RFC aberto por 21 dias + documentação" },
      { tipo: "Mudanças na Constituição do Modelo", quien: "Conselho da Comunidade", proceso: "Proposta + debate público + votação" },
      { tipo: "Mudanças neste documento de Governança", quien: "Conselho da Comunidade", proceso: "Proposta + debate público + votação" },
      { tipo: "Decisões de licenciamento", quien: "Coordenação Central + Conselho", proceso: "Votação com maioria qualificada (2/3)" },
      { tipo: "Resposta a incidentes críticos", quien: "Coordenação Central", proceso: "Ação imediata + relatório público posterior" },
    ],
    contribucion: {
      badge: "CONTRIBUIÇÃO",
      title: "Qualquer pessoa pode contribuir",
      subtitle: "Não é necessária afiliação com a Sintérgica AI nem aprovação prévia. O que é necessário é aderência ao Código de Conduta e alinhamento com a Constituição do Modelo.",
      imgAlt: "Desenvolvedor contribuindo com o Lattice Na'at",
    },
    contribucionItems: [
      { tipo: "Código e arquitetura", ejemplos: "Melhorias no motor de inferência, otimizações, novas integrações.", canal: "GitHub — Pull Request" },
      { tipo: "Dados e corpus", ejemplos: "Datasets em espanhol mexicano, línguas originárias, normativa, jurisprudência.", canal: "GitHub + formulário de doação" },
      { tipo: "Avaliações e benchmarks", ejemplos: "Testes de viés WEIRD, avaliações de desempenho em contextos mexicanos, red teaming.", canal: "GitHub — Issues ou repositório de avaliações" },
      { tipo: "Documentação", ejemplos: "Traduções, guias de uso, casos de aplicação, correções.", canal: "GitHub — Pull Request" },
      { tipo: "Relato de incidentes", ejemplos: "Comportamentos inapropriados, vieses detectados, falhas de segurança.", canal: "Canal dedicado de relato (Seção V)" },
    ],
    versionado: {
      badge: "VERSIONAMENTO",
      title: "Esquema MAIOR.MENOR.CORREÇÃO",
      subtitle: "O Lattice Na'at usa versionamento semântico adaptado. Cada componente indica o nível da mudança e o processo de aprovação requerido.",
    },
    versionesItems: [
      { componente: "MAIOR", ejemplo: "2.x.x", indica: "Mudança substantiva na arquitetura base, mudança de escala de parâmetros ou mudança de valores fundamentais aprovada pelo Conselho." },
      { componente: "MENOR", ejemplo: "x.2.x", indica: "Novo ciclo de fine-tuning com dados adicionais, novas capacidades documentadas, expansão para novas línguas." },
      { componente: "CORREÇÃO", ejemplo: "x.x.3", indica: "Correções de comportamento, ajustes de alinhamento, fixes de segurança sem mudança de capacidades." },
    ],
    incidentes: {
      badge: "INCIDENTES",
      title: "Relato e gestão de incidentes",
      subtitle: "Um incidente é qualquer comportamento do modelo que cause dano, viole a Constituição, represente um risco de segurança ou mostre viés discriminatório sistemático.",
      canalPrincipal: "Canal principal",
      asunto: "Assunto: \"INCIDENTE — Lattice Na'at\"",
      canalTecnico: "Canal técnico",
      canalTecnicoDesc: "GitHub Issues com etiqueta \"incident\" ou \"security\"",
      nota: "Qualquer pessoa pode relatar. Relatos anônimos são aceitos.",
      acuseLabel: "Confirmação",
      resolucionLabel: "Resolução",
    },
    incidentesItems: [
      { severidad: "Crítica", descripcion: "Risco imediato de dano grave, violação de restrições absolutas, falha de segurança explorável.", acuse: "4 horas", resolucion: "72 horas (ação mitigatória)" },
      { severidad: "Alta", descripcion: "Comportamento inapropriado sistemático, viés discriminatório documentado, uso malicioso confirmado.", acuse: "24 horas", resolucion: "14 dias" },
      { severidad: "Média", descripcion: "Comportamentos que violam a Constituição sem dano imediato, respostas culturalmente incorretas sistemáticas.", acuse: "72 horas", resolucion: "30 dias" },
      { severidad: "Baixa", descripcion: "Imprecisões, comportamentos subótimos, sugestões de melhoria.", acuse: "7 dias", resolucion: "Próximo ciclo de versão" },
    ],
    auditoria: {
      badge: "AUDITORIA",
      title: "Painel de Avaliação Independente",
      subtitle: "Os membros são propostos pela comunidade, têm mandatos fixos de dois anos não renováveis e não podem ter relação contratual ativa com a Sintérgica AI.",
      body: "Os relatórios do Painel são públicos e publicados nos canais oficiais dentro de",
      bodyDays: "30 dias",
      bodyEnd: "após a entrega. A equipe de Coordenação Central pode incluir respostas técnicas, mas",
      bodyBold: "não pode modificar os achados do Painel",
      bodyFinal: ".",
    },
    auditoriaAreas: [
      { titulo: "Viés WEIRD", desc: "Avaliação sistemática do grau em que o modelo reproduz vieses ocidentais em respostas a contextos mexicanos e latino-americanos." },
      { titulo: "Equidade entre comunidades", desc: "Análise de diferenças de qualidade nas respostas a usuários de diferentes origens, línguas, níveis educacionais e regiões." },
      { titulo: "Robustez contra uso adversarial", desc: "Red teaming para detectar formas de burlar as restrições da Constituição." },
      { titulo: "Precisão no domínio mexicano", desc: "Avaliação de conhecimento legal, regulatório, cultural e linguístico específico do México." },
      { titulo: "Comportamento agêntico", desc: "Avaliação da aplicação dos princípios de cautela quando o modelo opera de forma autônoma." },
    ],
    licencias: {
      badge: "LICENÇAS",
      title: "Condições de uso",
      subtitle: "O Lattice Na'at é publicado sob uma licença de código aberto permissiva. O uso livre vem com compromissos claros.",
    },
    licenciasItems: [
      { titulo: "Atribuição", desc: "Qualquer uso público ou comercial deve reconhecer a origem do modelo: Sintérgica AI / Lattice Na'at." },
      { titulo: "Não contra a Constituição", desc: "Os usuários se comprometem a não utilizar o modelo para os comportamentos proibidos descritos na Constituição do Modelo." },
      { titulo: "Publicar modificações", desc: "Quem publicar uma versão modificada deve documentar claramente o que mudou e sob quais termos." },
    ],
    prohibidos: {
      title: "Usos explicitamente proibidos sob qualquer licença",
      items: [
        "Qualquer uso que viole as restrições absolutas da Constituição",
        "Treinamento de sistemas para vigilância massiva não consentida",
        "Geração de desinformação para manipulação política",
        "Uso em sistemas autônomos de armamento",
        "Remover ou suprimir atribuições de origem do modelo",
      ],
    },
    links: "Canais oficiais",
    cta: {
      badge: "GOVERNANÇA ABERTA",
      title: "Um modelo auditável, aprimorável e confiável",
      subtitle: "A governança de um modelo de IA é tão importante quanto sua arquitetura técnica. Um modelo com valores corretos, mas sem mecanismos de prestação de contas, é tão arriscado quanto um sem valores.",
      ctaLabel: "Leia a Constituição do Modelo",
      trustSignals: ["Open Source", "Comunidade aberta", "Auditoria independente"],
    },
  },
} as const;

/* ─── Non-translatable base data ─── */

const ORGANOS_BASE = [
  { icon: Shield, color: "brand-accent" },
  { icon: Vote, color: "success-600" },
  { icon: FileSearch, color: "sky-600" },
  { icon: Globe, color: "warning-600" },
];

const CONTRIBUCIONES_BASE = [
  { icon: GitPullRequest },
  { icon: Database },
  { icon: FileSearch },
  { icon: FileText },
  { icon: Bug },
];

const VERSIONES_BASE = [
  { status: "alto" },
  { status: "medio" },
  { status: "bajo" },
];

const INCIDENTES_BASE = [
  { color: "text-red-400", border: "border-red-500/30 bg-red-500/5" },
  { color: "text-orange-400", border: "border-orange-500/30 bg-orange-500/5" },
  { color: "text-yellow-400", border: "border-yellow-500/30 bg-yellow-500/5" },
  { color: "text-green-400", border: "border-green-500/30 bg-green-500/5" },
];

const LICENCIAS_BASE = [Scale, AlertTriangle, FileText];

export function GobernanzaContent() {
  const locale = useLocale();
  const t = T[locale] ?? T.es;

  const orgRef = useRef<HTMLDivElement>(null);
  const orgInView = useInView(orgRef, { once: true, margin: "-60px" });
  const contribRef = useRef<HTMLDivElement>(null);
  const contribInView = useInView(contribRef, { once: true, margin: "-60px" });
  const incRef = useRef<HTMLDivElement>(null);
  const incInView = useInView(incRef, { once: true, margin: "-60px" });
  const auditRef = useRef<HTMLDivElement>(null);
  const auditInView = useInView(auditRef, { once: true, margin: "-60px" });
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <>
        <PageHero
          badge={t.hero.badge}
          badgeColor="success-600"
          title={t.hero.title}
          subtitle={t.hero.subtitle}
          bgImage="/images/Negocios-Oficina/modern-office-corporate-building-low-angle-view-skyscrapers-city-singapore-panoramic-perspective-view-business-concept-success-industry-tech-architecture.jpg"
          bgImageAlt={t.hero.bgImageAlt}
          trustSignals={[...t.hero.trustSignals]}
        />

        {/* Governance Overview Stats */}
        <section className="bg-brand-surface dark:bg-brand-deep py-16 px-4 sm:px-6 lg:px-8 border-b border-brand-midnight/5 dark:border-brand-white/10">
          <div className="mx-auto max-w-5xl">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {t.stats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-midnight p-5 text-center">
                  <p className="font-proxima text-3xl font-extrabold text-brand-accent">{stat.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-brand-midnight dark:text-brand-white">{stat.label}</p>
                  <p className="mt-1 text-xs text-brand-midnight/50 dark:text-brand-white/50">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Los cuatro órganos */}
        <section className="bg-brand-surface dark:bg-brand-midnight py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              badge={t.organos.badge}
              title={t.organos.title}
              subtitle={t.organos.subtitle}
              centered
            />
            <div ref={orgRef} className="mt-16 grid gap-6 md:grid-cols-2">
              {ORGANOS_BASE.map((o, i) => {
                const Icon = o.icon;
                const item = t.organosItems[i];
                const colorMap: Record<string, string> = {
                  "brand-accent": "bg-brand-accent/10 text-brand-accent border-brand-accent/20",
                  "success-600": "bg-success-600/10 text-success-600 border-success-600/20",
                  "sky-600": "bg-sky-500/10 text-sky-400 border-sky-500/20",
                  "warning-600": "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
                };
                const iconColor = colorMap[o.color] ?? colorMap["brand-accent"];
                return (
                  <m.div
                    key={item.nombre}
                    initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                    animate={orgInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: shouldReduce ? 0 : 0.5, delay: 0.1 + i * 0.1 }}
                    className="rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep p-8 flex flex-col gap-4"
                  >
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl border ${iconColor}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-proxima font-semibold text-brand-midnight dark:text-brand-white">{item.nombre}</h3>
                      <p className="mt-1 text-xs text-brand-midnight/50 dark:text-brand-white/50 italic">{item.composicion}</p>
                    </div>
                    <p className="text-sm leading-relaxed text-brand-midnight/70 dark:text-brand-white/70">{item.funcion}</p>
                    <div className="mt-auto pt-3 border-t border-brand-midnight/5 dark:border-brand-white/10 flex items-center gap-2">
                      <RefreshCw className="h-3.5 w-3.5 text-brand-midnight/40 dark:text-brand-white/40" />
                      <span className="text-xs text-brand-midnight/40 dark:text-brand-white/40">{item.frecuencia}</span>
                    </div>
                  </m.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Quién decide qué */}
        <section className="bg-brand-surface dark:bg-brand-deep py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[url('/images/Negocios-Oficina/modern-office-corporate-building-low-angle-view-skyscrapers-city-singapore-panoramic-perspective-view-business-concept-success-industry-tech-architecture.jpg')] bg-cover bg-center opacity-[0.04]" aria-hidden="true" />
          <div className="mx-auto max-w-5xl relative z-10">
            <SectionHeader
              badge={t.decisiones.badge}
              title={t.decisiones.title}
              subtitle={t.decisiones.subtitle}
              centered
            />
            <div className="mt-12 overflow-hidden rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-midnight">
              <table className="min-w-full divide-y divide-brand-white/10">
                <thead className="bg-brand-surface dark:bg-brand-deep/50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-brand-midnight dark:text-brand-white">{t.decisiones.thTipo}</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-brand-midnight dark:text-brand-white hidden md:table-cell">{t.decisiones.thQuien}</th>
                    <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-brand-midnight dark:text-brand-white hidden lg:table-cell">{t.decisiones.thProceso}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-brand-white/5">
                  {t.decisionesItems.map((d) => (
                    <tr key={d.tipo} className="hover:bg-brand-deep/40 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-brand-midnight dark:text-brand-white">{d.tipo}</td>
                      <td className="px-6 py-4 text-sm text-brand-accent hidden md:table-cell">{d.quien}</td>
                      <td className="px-6 py-4 text-sm text-brand-midnight/60 dark:text-brand-white/60 hidden lg:table-cell">{d.proceso}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Proceso de Contribución */}
        <section className="bg-brand-surface dark:bg-brand-midnight py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-16 lg:grid-cols-12 items-start">
              <div className="lg:col-span-5">
                <SectionHeader
                  badge={t.contribucion.badge}
                  title={t.contribucion.title}
                  subtitle={t.contribucion.subtitle}
                />
                <div className="mt-8 rounded-2xl overflow-hidden border border-brand-midnight/10 dark:border-brand-white/10">
                  <Image
                    src="/images/Industrial-Logistica/factory-workshop-interior-machines-glass-production-background.jpg"
                    alt={t.contribucion.imgAlt}
                    width={600}
                    height={400}
                    className="w-full object-cover opacity-70"
                  />
                </div>
              </div>
              <div className="lg:col-span-7" ref={contribRef}>
                <div className="space-y-4">
                  {CONTRIBUCIONES_BASE.map((c, i) => {
                    const Icon = c.icon;
                    const item = t.contribucionItems[i];
                    return (
                      <m.div
                        key={item.tipo}
                        initial={shouldReduce ? false : { opacity: 0, x: 20 }}
                        animate={contribInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: shouldReduce ? 0 : 0.5, delay: i * 0.1 }}
                        className="flex gap-4 rounded-xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep p-5"
                      >
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-brand-accent/10">
                          <Icon className="h-5 w-5 text-brand-accent" />
                        </div>
                        <div>
                          <h3 className="text-sm font-proxima font-semibold text-brand-midnight dark:text-brand-white">{item.tipo}</h3>
                          <p className="mt-1 text-xs text-brand-midnight/60 dark:text-brand-white/60 leading-relaxed">{item.ejemplos}</p>
                          <p className="mt-2 text-xs font-medium text-brand-accent/70">{item.canal}</p>
                        </div>
                      </m.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Versionado */}
        <section className="bg-brand-surface dark:bg-brand-deep py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <SectionHeader
              badge={t.versionado.badge}
              title={t.versionado.title}
              subtitle={t.versionado.subtitle}
              centered
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {VERSIONES_BASE.map((v, i) => {
                const item = t.versionesItems[i];
                const colorMap: Record<string, string> = {
                  alto: "border-red-500/20 bg-red-500/5 text-red-400",
                  medio: "border-yellow-500/20 bg-yellow-500/5 text-yellow-400",
                  bajo: "border-green-500/20 bg-green-500/5 text-green-400",
                };
                return (
                  <div key={item.componente} className="rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-midnight p-7">
                    <div className={`inline-block rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wider ${colorMap[v.status]}`}>
                      {item.componente}
                    </div>
                    <p className="mt-3 font-proxima text-3xl font-extrabold text-brand-midnight dark:text-brand-white">{item.ejemplo}</p>
                    <p className="mt-3 text-sm leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">{item.indica}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Reporte de Incidentes */}
        <section className="bg-brand-surface dark:bg-brand-midnight py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-16 lg:grid-cols-12 items-start">
              <div className="lg:col-span-5">
                <SectionHeader
                  badge={t.incidentes.badge}
                  title={t.incidentes.title}
                  subtitle={t.incidentes.subtitle}
                />
                <div className="mt-8 space-y-3">
                  <div className="rounded-xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-midnight/50 dark:text-brand-white/50 mb-2">{t.incidentes.canalPrincipal}</p>
                    <p className="text-sm text-brand-midnight dark:text-brand-white font-mono">hola@sintergica.ai</p>
                    <p className="text-xs text-brand-midnight/40 dark:text-brand-white/40 mt-1">{t.incidentes.asunto}</p>
                  </div>
                  <div className="rounded-xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-midnight/50 dark:text-brand-white/50 mb-2">{t.incidentes.canalTecnico}</p>
                    <p className="text-sm text-brand-midnight dark:text-brand-white">{t.incidentes.canalTecnicoDesc}</p>
                  </div>
                  <p className="text-xs text-brand-midnight/40 dark:text-brand-white/40 pl-1">{t.incidentes.nota}</p>
                </div>
              </div>
              <div className="lg:col-span-7" ref={incRef}>
                <div className="space-y-4">
                  {INCIDENTES_BASE.map((inc, i) => {
                    const item = t.incidentesItems[i];
                    return (
                      <m.div
                        key={item.severidad}
                        initial={shouldReduce ? false : { opacity: 0, x: 20 }}
                        animate={incInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: shouldReduce ? 0 : 0.5, delay: i * 0.1 }}
                        className={`rounded-xl border p-5 ${inc.border}`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className={`text-sm font-bold ${inc.color}`}>{item.severidad}</span>
                          <div className="flex gap-4 text-xs text-brand-midnight/50 dark:text-brand-white/50">
                            <span>{t.incidentes.acuseLabel}: <strong className="text-brand-midnight dark:text-brand-white">{item.acuse}</strong></span>
                            <span>{t.incidentes.resolucionLabel}: <strong className="text-brand-midnight dark:text-brand-white">{item.resolucion}</strong></span>
                          </div>
                        </div>
                        <p className="text-sm leading-relaxed text-brand-midnight/70 dark:text-brand-white/70">{item.descripcion}</p>
                      </m.div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Auditoría Independiente */}
        <section className="bg-brand-surface dark:bg-brand-deep py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="mx-auto max-w-6xl relative z-10">
            <div className="grid gap-16 lg:grid-cols-2 items-center">
              <div>
                <SectionHeader
                  badge={t.auditoria.badge}
                  title={t.auditoria.title}
                  subtitle={t.auditoria.subtitle}
                />
                <p className="mt-6 text-sm text-brand-midnight/60 dark:text-brand-white/60 leading-relaxed">
                  {t.auditoria.body} <strong className="text-brand-midnight dark:text-brand-white">{t.auditoria.bodyDays}</strong> {t.auditoria.bodyEnd} <strong className="text-brand-midnight dark:text-brand-white">{t.auditoria.bodyBold}</strong>{t.auditoria.bodyFinal}
                </p>
              </div>
              <div ref={auditRef} className="space-y-3">
                {t.auditoriaAreas.map((area, i) => (
                  <m.div
                    key={area.titulo}
                    initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                    animate={auditInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: shouldReduce ? 0 : 0.4, delay: i * 0.08 }}
                    className="flex gap-3 rounded-xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-midnight p-4"
                  >
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-success-600 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-brand-midnight dark:text-brand-white">{area.titulo}</p>
                      <p className="text-xs leading-relaxed text-brand-midnight/55 dark:text-brand-white/55 mt-0.5">{area.desc}</p>
                    </div>
                  </m.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Licencias */}
        <section className="bg-brand-surface dark:bg-brand-midnight py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <SectionHeader
              badge={t.licencias.badge}
              title={t.licencias.title}
              subtitle={t.licencias.subtitle}
              centered
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {t.licenciasItems.map((item, i) => {
                const Icon = LICENCIAS_BASE[i];
                return (
                  <div key={item.titulo} className="rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep p-7">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-accent/10 mb-4">
                      <Icon className="h-5 w-5 text-brand-accent" />
                    </div>
                    <h3 className="text-base font-proxima font-semibold text-brand-midnight dark:text-brand-white">{item.titulo}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">{item.desc}</p>
                  </div>
                );
              })}
            </div>
            <div className="mt-10 rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
              <p className="text-sm font-semibold text-red-400 mb-3">{t.prohibidos.title}</p>
              <ul className="grid gap-2 sm:grid-cols-2 text-sm text-brand-midnight/70 dark:text-brand-white/70">
                {t.prohibidos.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-red-400 flex-shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Links */}
        <section className="bg-brand-surface dark:bg-brand-deep py-16 px-4 sm:px-6 lg:px-8 border-t border-brand-midnight/5 dark:border-brand-white/10">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-brand-midnight/40 dark:text-brand-white/40 mb-6">{t.links}</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="https://github.com/Sintergica-AI" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-surface dark:bg-brand-midnight border border-brand-midnight/10 dark:border-brand-white/10 px-5 py-2.5 text-sm font-semibold text-brand-midnight dark:text-brand-white hover:border-brand-accent/50 hover:text-brand-accent transition-colors">
                <Github className="w-4 h-4" />github.com/Sintergica-AI
              </Link>
              <Link href="https://huggingface.co/sintergica" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-brand-surface dark:bg-brand-midnight border border-brand-midnight/10 dark:border-brand-white/10 px-5 py-2.5 text-sm font-semibold text-brand-midnight dark:text-brand-white hover:border-brand-accent/50 hover:text-brand-accent transition-colors">
                <ExternalLink className="w-4 h-4" />huggingface.co/sintergica
              </Link>
            </div>
          </div>
        </section>

        <CTASection
          badge={t.cta.badge}
          title={t.cta.title}
          subtitle={t.cta.subtitle}
          ctaLabel={t.cta.ctaLabel}
          ctaHref="/investigacion/constitucion"
          trustSignals={[...t.cta.trustSignals]}
        />
      </>
    </LazyMotion>
  );
}
