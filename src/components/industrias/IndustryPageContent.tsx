"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  CheckCircle2,
  Scale,
  Landmark,
  Truck,
  Ship,
  Zap,
  HeartPulse,
  Building2,
  FileText,
  Search,
  Shield,
  BarChart3,
  Package,
  AlertTriangle,
  ClipboardList,
  Globe,
  FileSearch,
  CreditCard,
  TrendingUp,
  Mail,
  Target,
  Users,
  Lock,
  Server,
  ChevronRight,
  ChevronDown,
  Download,
  Activity,
  Paperclip,
  XCircle,
  Rocket,
  Compass,
  Wrench,
  PlayCircle,
  type LucideIcon,
} from "lucide-react";
import type { IndustriaData } from "@/lib/industrias";
import { getIndustriaData } from "@/lib/industrias";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { CTASection } from "@/components/shared/CTASection";
import { useLocale } from "@/i18n/DictionaryProvider";

const ICON_MAP: Record<string, LucideIcon> = {
  Scale, Landmark, Truck, Ship, Zap, HeartPulse, Building2,
  FileText, Search, Shield, BarChart3, Package,
  AlertTriangle, ClipboardList, Globe, FileSearch,
  CreditCard, TrendingUp, Mail, Target, Users,
};

const BOOKING_URL = "/diagnostico";

/* ── UI strings (component-level, not data-level) ────────────── */
const T = {
  es: {
    breadcrumb: "Industrias",
    requestDiagnosis: "Solicitar Diagnóstico",
    seeCapabilities: "Ver capacidades",
    trustSignals: ["On-premise disponible", "Datos en tu infraestructura", "Normativa México y LATAM"],
    useCasesBadge: "Casos de uso",
    useCasesTitle: (name: string) => `Optimiza la operación ${name.toLowerCase()} con Lattice Séeb ${name}`,
    seeMore: "Ver más",
    online: "En línea",
    processedInYourInfra: "Datos procesados en tu infraestructura · Zero-retention activo",
    latticeProcessing: (name: string) => `Lattice Séeb ${name} · Procesando en tu infraestructura`,
    generatedInYourInfra: "Generado en tu infraestructura",
    writeInstruction: "Escribe una instrucción o consulta…",
    agentBadge: "Lattice Agent",
    meetAgent: (name: string) => `Conoce a ${name}`,
    activeStatus: "Activo 24/7 · On-premise",
    autonomousAgentBadge: "Agente Autónomo · 24/7",
    autonomousDesc: (name: string) =>
      `${name} no solo responde consultas — opera de forma autónoma. Monitorea sistemas, genera reportes programados y detecta eventos críticos sin que lo solicites.`,
    autonomousTags: ["Ejecución 24/7", "Reportes automáticos", "Monitoreo proactivo", "Integra con tus sistemas"],
    capabilities: "Capacidades",
    requestDemo: (name: string) => `Solicitar demo con ${name}`,
    impactBadge: "Impacto medible",
    impactTitle: "Resultados que se miden",
    impactSubtitle: "Basado en pilotos internos y proyectos con organizaciones del sector.",
    impactDisclaimer: "Los resultados individuales pueden variar según el contexto operativo.",
    securityBadge: "Seguridad y cumplimiento",
    securityTitle: "Privado, seguro y listo para producción",
    securityDescGov: "Lattice Séeb Gobierno opera completamente dentro de la infraestructura institucional. Ningún dato sensible del gobierno cruza fronteras digitales.",
    securityDescDefault: (name: string) => `Lattice Séeb ${name} fue diseñado para industrias reguladas. Cumplimiento normativo no es una característica adicional — es parte del diseño base.`,
    securityPoints: [
      "Datos procesados en tu propia infraestructura — sin servidores externos",
      "Cumplimiento LFPDPPP y normativa sectorial mexicana aplicable",
      "Trazabilidad completa de cada consulta, decisión y acción del agente",
      "On-premise, VPS o nube privada — tú eliges dónde corre el modelo",
    ],
    talkToArchitect: "Hablar con un arquitecto de soluciones",
    securityFeatures: [
      { title: "Datos que nunca salen", desc: "Todo el procesamiento ocurre dentro de tu infraestructura. Zero-retention certificado al cierre." },
      { title: "On-premise o VPC privada", desc: "Compatible con AWS, Azure, GCP, Oracle Cloud y despliegue físico en tus servidores." },
      { title: "Cumplimiento LFPDPPP", desc: "Diseñado para industrias reguladas. Trazabilidad completa de consultas y decisiones." },
    ],
    zeroRetentionTitle: "Zero-retention certificado",
    zeroRetentionDesc: "Emitimos certificado formal de zero-retention al cierre de cada proyecto. Sintérgica no retiene ni accede a tus datos de operación.",
    ctaTitle: (name: string) => `Transforma tu operación ${name.toLowerCase()} con IA privada`,
    ctaSubtitle: (name: string, agentName: string) => `Solicita un Diagnóstico Inteligente y ve cómo ${agentName} puede operar en tu organización con tus datos reales, en tu infraestructura.`,
    ctaLabel: "Solicitar Diagnóstico Inteligente",
    ctaTrust: ["Demo con datos reales", "Sin permanencia", "Datos en tu infraestructura"],
    problemVsGeneric: "vs. IA genérica",
    genericAiLabel: "ChatGPT · Claude · Gemini",
    latticeSeebLabel: (name: string) => `Lattice Séeb ${name}`,
    workflowBadge: "Cómo funciona",
    workflowTitle: "Del kickoff a producción en semanas, no en trimestres.",
    workflowSubtitle: "Proceso estructurado. Cero sorpresas. El costo del diagnóstico se bonifica a la implementación final.",
    workflowSteps: [
      { number: "01", title: "Diagnóstico Inteligente", desc: "Sesión de 45 minutos con tu equipo. Identificamos 2 o 3 casos de uso con mayor ROI inmediato y la arquitectura recomendada.", time: "Semana 0 · sin costo" },
      { number: "02", title: "Despliegue y ajuste", desc: "Infraestructura en tu VPC o on-premise. Afinamos el modelo con tus datos, tu voz institucional y tus guidelines internas.", time: "Semanas 1–3" },
      { number: "03", title: "Piloto con datos reales", desc: "Operación controlada con casos reales. Ajustes iterativos basados en feedback del equipo y métricas medibles.", time: "Semanas 3–6" },
      { number: "04", title: "Producción 24/7", desc: "Agente en operación continua. Reportes de impacto mensuales, soporte y mejora iterativa del modelo.", time: "Semana 6 en adelante" },
    ],
    faqBadge: "Preguntas frecuentes",
    faqTitle: "Lo que los CTOs y compliance officers preguntan primero",
    faqs: [
      { q: "¿Los datos salen de mi infraestructura?", a: "Nunca. Lattice Séeb opera on-premise o en tu VPC privada — compatible con AWS, Azure, GCP y Oracle Cloud. Sintérgica no accede ni retiene datos de operación. Emitimos certificado formal de zero-retention al cierre de cada proyecto." },
      { q: "¿Cuánto tarda la implementación?", a: "De 4 a 8 semanas del kickoff a producción según complejidad. Incluye diagnóstico, despliegue, ajuste fino del agente con tus datos y piloto controlado antes de liberar a operación continua." },
      { q: "¿Cómo se actualiza cuando cambia la normativa?", a: "El agente monitorea el DOF y los órganos regulatorios del sector de forma continua. Cuando se publica una modificación relevante actualiza su base de conocimiento y emite alertas por impacto operativo." },
      { q: "¿Funciona con nuestros sistemas actuales?", a: "Sí. Integramos con ERPs, CRMs, sistemas institucionales (CompraNet, SIPOT, SAT, CNBV) y APIs internas. El agente se conecta a tus datos — no obligas a tu operación a mudarse." },
      { q: "¿Qué modelo de contratación manejan?", a: "Sin permanencia. Cobramos por despliegue inicial más mantenimiento mensual. Si el piloto no cumple expectativas no avanzamos — y el costo del Diagnóstico Inteligente se bonifica a la implementación final." },
    ],
    faqMore: "¿Otra pregunta?",
    faqMoreCta: "Agenda 45 min con un arquitecto",
    conversations: {
      legal: {
        userMsg: "Ana, analiza el contrato de arrendamiento y señala las cláusulas de riesgo",
        agentMsg: "Identifiqué 3 cláusulas de alto riesgo: la cláusula 14.2 establece penalización del 15% por rescisión — excesiva según Art. 2478 CCF. La 8.1 no especifica plazo de gracia para mora. Generé el análisis completo.",
        artifactName: "Análisis_Riesgo_Contrato.pdf",
        autonomousTask: "Monitoreo DOF activo · alertas configuradas para cambios en normativa vigente",
      },
      gobierno: {
        userMsg: "Carlos, prepara el boletín de prensa de la sesión de cabildo de hoy. Tono institucional, máximo 400 palabras.",
        agentMsg: "Listo. Tomé el acta preliminar y los 4 acuerdos aprobados (presupuesto participativo, programa de pavimentación, convenio con DIF y terna de regidor suplente). Boletín redactado en tono institucional y validado contra el manual de identidad municipal.",
        artifactName: "Boletin_Cabildo_27abr2026.docx",
        autonomousTask: "Monitoreando 3 sesiones de cabildo y 8 publicaciones en periódico oficial este mes",
      },
      logistica: {
        userMsg: "Carlos, el pedimento 1234-2025 tiene un error. ¿Qué necesitamos corregir antes del despacho?",
        agentMsg: "La fracción 8542.31.01 es correcta bajo TIGIE 2024, pero falta el certificado NOM-001-SCFI-2018. Sin ese documento el despacho se retiene en aduana. Generé la carta de corrección y el checklist.",
        artifactName: "Corrección_Pedimento_1234-2025.pdf",
        autonomousTask: "Monitoreando 12 embarques activos · alertas de desviación configuradas",
      },
      energia: {
        userMsg: "Sofía, ¿cuándo vence el reporte trimestral de la CRE y qué tan listos estamos?",
        agentMsg: "El reporte Q4 vence el 15 de enero. Los formatos R-01 y R-02 ya tienen los datos de operación capturados de tus sistemas. Te envío el borrador para revisión antes del plazo.",
        artifactName: "Reporte_CRE_Q4-2025_Borrador.xlsx",
        autonomousTask: "Monitoreo CRE activo · 3 resoluciones recientes pendientes de análisis",
      },
      salud: {
        userMsg: "Marco, la auditoría de la SSA es la próxima semana. ¿Están los expedientes en orden?",
        agentMsg: "Revisé 1,847 expedientes activos. 23 tienen inconsistencias con NOM-004-SSA3: campos incompletos y firmas faltantes. Preparé el reporte de hallazgos con plan de corrección priorizado.",
        artifactName: "Auditoría_Expedientes_Hallazgos.xlsx",
        autonomousTask: "Verificación continua activa · alertas de vencimiento de permisos configuradas",
      },
      financiero: {
        userMsg: "Sofía, necesito el reporte de operaciones inusuales del mes para la UIF",
        agentMsg: "Procesé 284,000 transacciones del periodo. Identifiqué 7 operaciones que superan los umbrales UIF por monto y patrones atípicos. El ROU está listo en formato oficial. Plazo regulatorio: 3 días.",
        artifactName: "Reporte_ROU_UIF_Feb2025.xml",
        autonomousTask: "Monitoreo transaccional 24/7 · 284K transacciones analizadas este mes",
      },
      ventas: {
        userMsg: "Laura, ¿cómo está el pipeline de Q1 y qué deals necesitan atención urgente?",
        agentMsg: "Q1 proyecta $4.2M en cierres (74% de meta). 3 deals en riesgo por inactividad >15 días. Preparé las secuencias de reactivación personalizadas para cada uno y el reporte ejecutivo del pipeline.",
        artifactName: "Pipeline_Q1_Reporte_Ejecutivo.pdf",
        autonomousTask: "Seguimiento activo de 47 prospectos · 3 emails de reactivación enviados hoy",
      },
    } as Record<string, { userMsg: string; agentMsg: string; artifactName: string; autonomousTask: string }>,
  },
  en: {
    breadcrumb: "Industries",
    requestDiagnosis: "Request Diagnosis",
    seeCapabilities: "See capabilities",
    trustSignals: ["On-premise available", "Data in your infrastructure", "Mexico & LATAM regulations"],
    useCasesBadge: "Use cases",
    useCasesTitle: (name: string) => `Optimize ${name.toLowerCase()} operations with Lattice Séeb ${name}`,
    seeMore: "See more",
    online: "Online",
    processedInYourInfra: "Data processed in your infrastructure · Zero-retention active",
    latticeProcessing: (name: string) => `Lattice Séeb ${name} · Processing in your infrastructure`,
    generatedInYourInfra: "Generated in your infrastructure",
    writeInstruction: "Write an instruction or query…",
    agentBadge: "Lattice Agent",
    meetAgent: (name: string) => `Meet ${name}`,
    activeStatus: "Active 24/7 · On-premise",
    autonomousAgentBadge: "Autonomous Agent · 24/7",
    autonomousDesc: (name: string) =>
      `${name} doesn't just answer queries — it operates autonomously. It monitors systems, generates scheduled reports, and detects critical events without being asked.`,
    autonomousTags: ["24/7 execution", "Automatic reports", "Proactive monitoring", "Integrates with your systems"],
    capabilities: "Capabilities",
    requestDemo: (name: string) => `Request demo with ${name}`,
    impactBadge: "Measurable impact",
    impactTitle: "Results that are measured",
    impactSubtitle: "Based on internal pilots and projects with sector organizations.",
    impactDisclaimer: "Individual results may vary depending on the operational context.",
    securityBadge: "Security & compliance",
    securityTitle: "Private, secure, and production-ready",
    securityDescGov: "Lattice Séeb Government operates entirely within institutional infrastructure. No sensitive government data crosses digital borders.",
    securityDescDefault: (name: string) => `Lattice Séeb ${name} was designed for regulated industries. Regulatory compliance is not an add-on — it's part of the core design.`,
    securityPoints: [
      "Data processed in your own infrastructure — no external servers",
      "LFPDPPP compliance and applicable Mexican sector regulations",
      "Full traceability of every query, decision, and agent action",
      "On-premise, VPS, or private cloud — you choose where the model runs",
    ],
    talkToArchitect: "Talk to a solutions architect",
    securityFeatures: [
      { title: "Data that never leaves", desc: "All processing happens within your infrastructure. Certified zero-retention at project close." },
      { title: "On-premise or private VPC", desc: "Compatible with AWS, Azure, GCP, Oracle Cloud, and physical deployment on your servers." },
      { title: "LFPDPPP compliance", desc: "Designed for regulated industries. Full traceability of queries and decisions." },
    ],
    zeroRetentionTitle: "Certified zero-retention",
    zeroRetentionDesc: "We issue a formal zero-retention certificate at the close of every project. Sintérgica does not retain or access your operational data.",
    ctaTitle: (name: string) => `Transform your ${name.toLowerCase()} operations with private AI`,
    ctaSubtitle: (name: string, agentName: string) => `Request a Smart Diagnosis and see how ${agentName} can operate in your organization with your real data, in your infrastructure.`,
    ctaLabel: "Request Smart Diagnosis",
    ctaTrust: ["Demo with real data", "No lock-in", "Data in your infrastructure"],
    problemVsGeneric: "vs. generic AI",
    genericAiLabel: "ChatGPT · Claude · Gemini",
    latticeSeebLabel: (name: string) => `Lattice Séeb ${name}`,
    workflowBadge: "How it works",
    workflowTitle: "From kickoff to production in weeks, not quarters.",
    workflowSubtitle: "Structured process. Zero surprises. The diagnosis cost is credited toward the final implementation.",
    workflowSteps: [
      { number: "01", title: "Smart Diagnosis", desc: "45-minute session with your team. We identify 2–3 use cases with the fastest ROI and recommend the architecture.", time: "Week 0 · no cost" },
      { number: "02", title: "Deployment & tuning", desc: "Infrastructure in your VPC or on-premise. We fine-tune the model with your data, your institutional voice, and your internal guidelines.", time: "Weeks 1–3" },
      { number: "03", title: "Pilot with real data", desc: "Controlled operation with real cases. Iterative adjustments based on team feedback and measurable metrics.", time: "Weeks 3–6" },
      { number: "04", title: "24/7 production", desc: "Agent in continuous operation. Monthly impact reports, support, and iterative model improvement.", time: "Week 6 onward" },
    ],
    faqBadge: "Frequently asked questions",
    faqTitle: "What CTOs and compliance officers ask first",
    faqs: [
      { q: "Does data leave my infrastructure?", a: "Never. Lattice Séeb runs on-premise or in your private VPC — compatible with AWS, Azure, GCP, and Oracle Cloud. Sintérgica neither accesses nor retains operational data. We issue a formal zero-retention certificate at the close of each project." },
      { q: "How long does implementation take?", a: "4 to 8 weeks from kickoff to production depending on complexity. Includes diagnosis, deployment, agent fine-tuning with your data, and a controlled pilot before going live 24/7." },
      { q: "How does it update when regulations change?", a: "The agent continuously monitors the Official Gazette and sector regulatory bodies. When a relevant modification is published, it updates its knowledge base and issues alerts by operational impact." },
      { q: "Does it work with our current systems?", a: "Yes. We integrate with ERPs, CRMs, institutional systems (CompraNet, SIPOT, SAT, CNBV), and internal APIs. The agent connects to your data — you don't force your operation to migrate." },
      { q: "What's the contract model?", a: "No lock-in. We charge initial deployment plus monthly maintenance. If the pilot doesn't meet expectations, we don't proceed — and the Smart Diagnosis cost is credited toward final implementation." },
    ],
    faqMore: "Another question?",
    faqMoreCta: "Book 45 min with an architect",
    conversations: {
      legal: {
        userMsg: "Ana, analyze the lease agreement and flag the risk clauses",
        agentMsg: "I identified 3 high-risk clauses: clause 14.2 establishes a 15% penalty for termination — excessive under Art. 2478 CCF. Clause 8.1 doesn't specify a grace period for default. I generated the full analysis.",
        artifactName: "Risk_Analysis_Contract.pdf",
        autonomousTask: "Active DOF monitoring · alerts configured for changes in current regulations",
      },
      gobierno: {
        userMsg: "Carlos, draft the press release for today's city council session. Institutional tone, max 400 words.",
        agentMsg: "Done. I pulled the preliminary minutes and the 4 approved resolutions (participatory budget, paving program, DIF agreement, alternate council member shortlist). Drafted in institutional tone and validated against the municipal style manual.",
        artifactName: "Council_Briefing_27apr2026.docx",
        autonomousTask: "Monitoring 3 council sessions and 8 official gazette publications this month",
      },
      logistica: {
        userMsg: "Carlos, customs entry 1234-2025 has an error. What do we need to fix before clearance?",
        agentMsg: "Tariff code 8542.31.01 is correct under TIGIE 2024, but the NOM-001-SCFI-2018 certificate is missing. Without it, clearance will be held at customs. I generated the correction letter and checklist.",
        artifactName: "Correction_Entry_1234-2025.pdf",
        autonomousTask: "Monitoring 12 active shipments · deviation alerts configured",
      },
      energia: {
        userMsg: "Sofía, when is the CRE quarterly report due and how ready are we?",
        agentMsg: "The Q4 report is due January 15. R-01 and R-02 forms already have operations data captured from your systems. I'm sending you the draft for review before the deadline.",
        artifactName: "CRE_Report_Q4-2025_Draft.xlsx",
        autonomousTask: "Active CRE monitoring · 3 recent resolutions pending analysis",
      },
      salud: {
        userMsg: "Marco, the SSA audit is next week. Are the records in order?",
        agentMsg: "I reviewed 1,847 active records. 23 have inconsistencies with NOM-004-SSA3: incomplete fields and missing signatures. I prepared the findings report with a prioritized correction plan.",
        artifactName: "Audit_Records_Findings.xlsx",
        autonomousTask: "Continuous verification active · permit expiration alerts configured",
      },
      financiero: {
        userMsg: "Sofía, I need this month's unusual operations report for the UIF",
        agentMsg: "I processed 284,000 transactions for the period. I identified 7 operations exceeding UIF thresholds by amount and atypical patterns. The ROU is ready in official format. Regulatory deadline: 3 days.",
        artifactName: "Report_ROU_UIF_Feb2025.xml",
        autonomousTask: "24/7 transaction monitoring · 284K transactions analyzed this month",
      },
      ventas: {
        userMsg: "Laura, how's the Q1 pipeline and which deals need urgent attention?",
        agentMsg: "Q1 projects $4.2M in closes (74% of target). 3 deals at risk due to >15 days inactivity. I prepared personalized reactivation sequences for each one and the executive pipeline report.",
        artifactName: "Pipeline_Q1_Executive_Report.pdf",
        autonomousTask: "Active tracking of 47 prospects · 3 reactivation emails sent today",
      },
    } as Record<string, { userMsg: string; agentMsg: string; artifactName: string; autonomousTask: string }>,
  },
  "pt-br": {
    breadcrumb: "Indústrias",
    requestDiagnosis: "Solicitar Diagnóstico",
    seeCapabilities: "Ver capacidades",
    trustSignals: ["On-premise disponível", "Dados na sua infraestrutura", "Normativa México e LATAM"],
    useCasesBadge: "Casos de uso",
    useCasesTitle: (name: string) => `Otimize a operação ${name.toLowerCase()} com Lattice Séeb ${name}`,
    seeMore: "Ver mais",
    online: "Online",
    processedInYourInfra: "Dados processados na sua infraestrutura · Zero-retention ativo",
    latticeProcessing: (name: string) => `Lattice Séeb ${name} · Processando na sua infraestrutura`,
    generatedInYourInfra: "Gerado na sua infraestrutura",
    writeInstruction: "Escreva uma instrução ou consulta…",
    agentBadge: "Lattice Agent",
    meetAgent: (name: string) => `Conheça ${name}`,
    activeStatus: "Ativo 24/7 · On-premise",
    autonomousAgentBadge: "Agente Autônomo · 24/7",
    autonomousDesc: (name: string) =>
      `${name} não apenas responde consultas — opera de forma autônoma. Monitora sistemas, gera relatórios programados e detecta eventos críticos sem que você solicite.`,
    autonomousTags: ["Execução 24/7", "Relatórios automáticos", "Monitoramento proativo", "Integra com seus sistemas"],
    capabilities: "Capacidades",
    requestDemo: (name: string) => `Solicitar demo com ${name}`,
    impactBadge: "Impacto mensurável",
    impactTitle: "Resultados que se medem",
    impactSubtitle: "Baseado em pilotos internos e projetos com organizações do setor.",
    impactDisclaimer: "Os resultados individuais podem variar conforme o contexto operacional.",
    securityBadge: "Segurança e conformidade",
    securityTitle: "Privado, seguro e pronto para produção",
    securityDescGov: "O Lattice Séeb Governo opera completamente dentro da infraestrutura institucional. Nenhum dado sensível do governo cruza fronteiras digitais.",
    securityDescDefault: (name: string) => `O Lattice Séeb ${name} foi projetado para indústrias reguladas. Conformidade regulatória não é um recurso adicional — faz parte do design base.`,
    securityPoints: [
      "Dados processados na sua própria infraestrutura — sem servidores externos",
      "Conformidade LFPDPPP e normativa setorial mexicana aplicável",
      "Rastreabilidade completa de cada consulta, decisão e ação do agente",
      "On-premise, VPS ou nuvem privada — você escolhe onde o modelo roda",
    ],
    talkToArchitect: "Falar com um arquiteto de soluções",
    securityFeatures: [
      { title: "Dados que nunca saem", desc: "Todo o processamento ocorre dentro da sua infraestrutura. Zero-retention certificado no encerramento." },
      { title: "On-premise ou VPC privada", desc: "Compatível com AWS, Azure, GCP, Oracle Cloud e implantação física nos seus servidores." },
      { title: "Conformidade LFPDPPP", desc: "Projetado para indústrias reguladas. Rastreabilidade completa de consultas e decisões." },
    ],
    zeroRetentionTitle: "Zero-retention certificado",
    zeroRetentionDesc: "Emitimos certificado formal de zero-retention no encerramento de cada projeto. A Sintérgica não retém nem acessa seus dados operacionais.",
    ctaTitle: (name: string) => `Transforme sua operação ${name.toLowerCase()} com IA privada`,
    ctaSubtitle: (name: string, agentName: string) => `Solicite um Diagnóstico Inteligente e veja como ${agentName} pode operar na sua organização com seus dados reais, na sua infraestrutura.`,
    ctaLabel: "Solicitar Diagnóstico Inteligente",
    ctaTrust: ["Demo com dados reais", "Sem permanência", "Dados na sua infraestrutura"],
    problemVsGeneric: "vs. IA genérica",
    genericAiLabel: "ChatGPT · Claude · Gemini",
    latticeSeebLabel: (name: string) => `Lattice Séeb ${name}`,
    workflowBadge: "Como funciona",
    workflowTitle: "Do kickoff à produção em semanas, não em trimestres.",
    workflowSubtitle: "Processo estruturado. Zero surpresas. O custo do diagnóstico é creditado à implementação final.",
    workflowSteps: [
      { number: "01", title: "Diagnóstico Inteligente", desc: "Sessão de 45 minutos com sua equipe. Identificamos 2–3 casos de uso com maior ROI imediato e a arquitetura recomendada.", time: "Semana 0 · sem custo" },
      { number: "02", title: "Implantação e ajuste", desc: "Infraestrutura na sua VPC ou on-premise. Afinamos o modelo com seus dados, sua voz institucional e seus guidelines internos.", time: "Semanas 1–3" },
      { number: "03", title: "Piloto com dados reais", desc: "Operação controlada com casos reais. Ajustes iterativos baseados em feedback da equipe e métricas mensuráveis.", time: "Semanas 3–6" },
      { number: "04", title: "Produção 24/7", desc: "Agente em operação contínua. Relatórios de impacto mensais, suporte e melhoria iterativa do modelo.", time: "Semana 6 em diante" },
    ],
    faqBadge: "Perguntas frequentes",
    faqTitle: "O que CTOs e compliance officers perguntam primeiro",
    faqs: [
      { q: "Os dados saem da minha infraestrutura?", a: "Nunca. O Lattice Séeb opera on-premise ou na sua VPC privada — compatível com AWS, Azure, GCP e Oracle Cloud. A Sintérgica não acessa nem retém dados de operação. Emitimos certificado formal de zero-retention no encerramento de cada projeto." },
      { q: "Quanto tempo leva a implementação?", a: "De 4 a 8 semanas do kickoff à produção, dependendo da complexidade. Inclui diagnóstico, implantação, ajuste fino do agente com seus dados e piloto controlado antes da operação contínua." },
      { q: "Como se atualiza quando a normativa muda?", a: "O agente monitora o DOF e os órgãos regulatórios do setor de forma contínua. Quando uma modificação relevante é publicada, atualiza sua base de conhecimento e emite alertas por impacto operacional." },
      { q: "Funciona com nossos sistemas atuais?", a: "Sim. Integramos com ERPs, CRMs, sistemas institucionais (CompraNet, SIPOT, SAT, CNBV) e APIs internas. O agente se conecta aos seus dados — você não força sua operação a migrar." },
      { q: "Qual o modelo de contratação?", a: "Sem permanência. Cobramos implantação inicial mais manutenção mensal. Se o piloto não atender às expectativas, não avançamos — e o custo do Diagnóstico Inteligente é creditado à implementação final." },
    ],
    faqMore: "Outra pergunta?",
    faqMoreCta: "Agende 45 min com um arquiteto",
    conversations: {
      legal: {
        userMsg: "Ana, analise o contrato de locação e sinalize as cláusulas de risco",
        agentMsg: "Identifiquei 3 cláusulas de alto risco: a cláusula 14.2 estabelece penalização de 15% por rescisão — excessiva conforme Art. 2478 CCF. A 8.1 não especifica prazo de carência para mora. Gerei a análise completa.",
        artifactName: "Análise_Risco_Contrato.pdf",
        autonomousTask: "Monitoramento DOF ativo · alertas configurados para mudanças na normativa vigente",
      },
      gobierno: {
        userMsg: "Carlos, prepare o boletim de imprensa da sessão da câmara de hoje. Tom institucional, máximo 400 palavras.",
        agentMsg: "Pronto. Peguei a ata preliminar e as 4 resoluções aprovadas (orçamento participativo, programa de pavimentação, convênio com o DIF e lista tríplice de vereador suplente). Boletim redigido em tom institucional e validado com o manual de identidade municipal.",
        artifactName: "Boletim_Camara_27abr2026.docx",
        autonomousTask: "Monitorando 3 sessões da câmara e 8 publicações no diário oficial este mês",
      },
      logistica: {
        userMsg: "Carlos, o despacho 1234-2025 tem um erro. O que precisamos corrigir antes da liberação?",
        agentMsg: "A fração 8542.31.01 está correta sob TIGIE 2024, mas falta o certificado NOM-001-SCFI-2018. Sem esse documento o despacho fica retido na alfândega. Gerei a carta de correção e o checklist.",
        artifactName: "Correção_Despacho_1234-2025.pdf",
        autonomousTask: "Monitorando 12 embarques ativos · alertas de desvio configurados",
      },
      energia: {
        userMsg: "Sofía, quando vence o relatório trimestral da CRE e quão prontos estamos?",
        agentMsg: "O relatório Q4 vence em 15 de janeiro. Os formatos R-01 e R-02 já têm os dados de operação capturados dos seus sistemas. Envio o rascunho para revisão antes do prazo.",
        artifactName: "Relatório_CRE_Q4-2025_Rascunho.xlsx",
        autonomousTask: "Monitoramento CRE ativo · 3 resoluções recentes pendentes de análise",
      },
      salud: {
        userMsg: "Marco, a auditoria da SSA é na próxima semana. Os prontuários estão em ordem?",
        agentMsg: "Revisei 1.847 prontuários ativos. 23 têm inconsistências com NOM-004-SSA3: campos incompletos e assinaturas faltantes. Preparei o relatório de achados com plano de correção priorizado.",
        artifactName: "Auditoria_Prontuários_Achados.xlsx",
        autonomousTask: "Verificação contínua ativa · alertas de vencimento de licenças configurados",
      },
      financiero: {
        userMsg: "Sofía, preciso do relatório de operações incomuns do mês para a UIF",
        agentMsg: "Processei 284.000 transações do período. Identifiquei 7 operações que superam os limites UIF por valor e padrões atípicos. O ROU está pronto em formato oficial. Prazo regulatório: 3 dias.",
        artifactName: "Relatório_ROU_UIF_Fev2025.xml",
        autonomousTask: "Monitoramento transacional 24/7 · 284K transações analisadas este mês",
      },
      ventas: {
        userMsg: "Laura, como está o pipeline do Q1 e quais deals precisam de atenção urgente?",
        agentMsg: "Q1 projeta $4.2M em fechamentos (74% da meta). 3 deals em risco por inatividade >15 dias. Preparei as sequências de reativação personalizadas para cada um e o relatório executivo do pipeline.",
        artifactName: "Pipeline_Q1_Relatório_Executivo.pdf",
        autonomousTask: "Acompanhamento ativo de 47 prospectos · 3 e-mails de reativação enviados hoje",
      },
    } as Record<string, { userMsg: string; agentMsg: string; artifactName: string; autonomousTask: string }>,
  },
} as const;

const SECURITY_ICONS = [Lock, Server, Shield] as const;

interface IndustryPageContentProps {
  data: IndustriaData;
}

export function IndustryPageContent({ data: dataProp }: IndustryPageContentProps) {
  const locale = useLocale();
  const t = T[locale] ?? T.es;

  // Resolve locale-aware industry data from slug
  const data = (() => {
    try {
      return getIndustriaData(dataProp.slug, locale);
    } catch {
      return dataProp;
    }
  })();

  const shouldReduce = useReducedMotion();
  const AgentIcon = ICON_MAP[data.agentIcon] ?? Scale;

  const problemRef = useRef<HTMLDivElement>(null);
  const useCasesRef = useRef<HTMLDivElement>(null);
  const showcaseRef = useRef<HTMLDivElement>(null);
  const workflowRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const securityRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const problemInView = useInView(problemRef, { once: true, margin: "-80px" });
  const useCasesInView = useInView(useCasesRef, { once: true, margin: "-80px" });
  const showcaseInView = useInView(showcaseRef, { once: true, margin: "-80px" });
  const workflowInView = useInView(workflowRef, { once: true, margin: "-80px" });
  const metricsInView = useInView(metricsRef, { once: true, margin: "-80px" });
  const securityInView = useInView(securityRef, { once: true, margin: "-80px" });
  const faqInView = useInView(faqRef, { once: true, margin: "-80px" });

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const conv = t.conversations[data.slug] ?? t.conversations.legal;
  const artifactType = conv.artifactName.split(".").pop()?.toUpperCase() ?? "PDF";

  return (
    <LazyMotion features={domAnimation}>

      {/* ── 1. HERO — EDITORIAL SPLIT ─────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-surface dark:bg-brand-midnight pt-20 md:pt-24">
        {/* Mobile: photo as full background */}
        <div className="absolute inset-0 lg:hidden">
          <Image
            src={data.imageUrl}
            alt={data.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-25 dark:opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-surface/60 via-brand-surface/80 to-brand-surface dark:from-brand-midnight/70 dark:via-brand-midnight/85 dark:to-brand-midnight" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:min-h-[92vh] lg:grid-cols-12 lg:gap-12">

            {/* Left: Text content (7 cols on desktop) */}
            <m.div
              initial={shouldReduce ? false : { opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: shouldReduce ? 0 : 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="py-12 lg:col-span-7 lg:py-20"
            >
              {/* Breadcrumb */}
              <nav className="mb-6 flex items-center gap-2 text-sm font-medium text-brand-midnight/55 dark:text-brand-white/55">
                <span>{t.breadcrumb}</span>
                <ChevronRight className="h-3.5 w-3.5" />
                <span className="text-brand-accent">{data.name}</span>
              </nav>

              <h1 className="font-proxima text-balance text-[2.5rem] font-extrabold leading-[1.05] tracking-tight text-brand-midnight dark:text-brand-white sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]">
                {data.headline}
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-brand-midnight/70 dark:text-brand-white/70 sm:text-[1.2rem]">
                {data.subheadline}
              </p>

              {/* CTAs */}
              <div className="mt-9 flex flex-wrap items-center gap-5">
                <Link
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 rounded-full bg-brand-accent px-8 py-4 text-base font-bold text-white shadow-lg shadow-brand-accent/25 transition-all hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-brand-accent/35"
                >
                  {t.requestDiagnosis}
                  <ArrowRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <a
                  href="#agente"
                  className="inline-flex items-center gap-1.5 text-base font-semibold text-brand-midnight/70 dark:text-brand-white/65 transition-colors hover:text-brand-accent dark:hover:text-brand-white"
                >
                  {t.seeCapabilities}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              {/* Metric cards — bigger, more prominent */}
              <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {data.heroMetrics.map((metric, i) => {
                  const accentClasses = [
                    "from-brand-accent/15 to-transparent border-brand-accent/25",
                    "from-emerald-500/12 to-transparent border-emerald-500/25",
                    "from-amber-500/12 to-transparent border-amber-500/25",
                  ];
                  const textAccents = ["text-brand-accent", "text-emerald-500 dark:text-emerald-400", "text-amber-600 dark:text-amber-400"];
                  return (
                    <div
                      key={metric.label}
                      className={`relative overflow-hidden rounded-2xl border bg-gradient-to-br px-5 py-4 backdrop-blur-sm dark:bg-brand-deep/30 ${accentClasses[i % 3]}`}
                    >
                      <span className={`font-proxima block text-2xl font-extrabold leading-none ${textAccents[i % 3]}`}>
                        {metric.value}
                      </span>
                      <span className="mt-2 block text-sm leading-snug text-brand-midnight/70 dark:text-brand-white/70">
                        {metric.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Trust signals */}
              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2.5">
                {t.trustSignals.map((s) => (
                  <span key={s} className="flex items-center gap-2 text-[13px] font-medium text-brand-midnight/55 dark:text-brand-white/55">
                    <CheckCircle2 className="h-3.5 w-3.5 text-brand-accent" />
                    {s}
                  </span>
                ))}
              </div>
            </m.div>

            {/* Right: Editorial photo panel (5 cols, full-bleed vertical on desktop only) */}
            <m.div
              initial={shouldReduce ? false : { opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: shouldReduce ? 0 : 0.8, delay: shouldReduce ? 0 : 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative hidden lg:col-span-5 lg:flex lg:h-[min(760px,calc(100vh-8rem))] lg:items-stretch"
            >
              <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-2xl shadow-black/20 dark:shadow-black/60">
                <Image
                  src={data.imageUrl}
                  alt={data.imageAlt}
                  fill
                  priority
                  placeholder="blur"
                  blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iOSIgZmlsbD0iIzA0MDYxNSIvPjwvc3ZnPg=="
                  className="object-cover object-center"
                  sizes="(max-width: 1280px) 42vw, 560px"
                />
                {/* Subtle overlay for readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                {/* Top badge */}
                <div className="absolute left-6 top-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md ring-1 ring-white/20">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  {data.badge}
                </div>

                {/* Bottom editorial card — agent identity */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-xl ring-1 ring-white/20">
                    <div className="flex items-start gap-4">
                      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-accent shadow-lg shadow-brand-accent/40">
                        <AgentIcon className="h-6 w-6 text-white" />
                        <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full border-2 border-white bg-emerald-400" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-proxima text-base font-bold text-white">
                          {data.agentName}
                        </p>
                        <p className="mt-0.5 text-sm leading-tight text-white/75">
                          {data.agentRole}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </m.div>
          </div>
        </div>
      </section>


      {/* ── 2. PROBLEM — GENERIC AI vs LATTICE SÉEB ──────────── */}
      <section className="relative bg-brand-surface dark:bg-brand-deep py-24 px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-brand-accent/5 blur-[140px]" />
        <div ref={problemRef} className="relative mx-auto max-w-6xl">
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={problemInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-[0.7rem] font-semibold uppercase tracking-widest text-brand-accent">
              {data.problemBadge}
            </span>
            <h2 className="font-proxima mt-3 text-balance text-3xl font-bold text-brand-midnight dark:text-brand-white sm:text-4xl">
              {data.problemTitle}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-brand-midnight/55 dark:text-brand-white/55">
              {data.problemBody}
            </p>
          </m.div>

          {/* Comparison: Generic AI vs Lattice Séeb */}
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 24 }}
            animate={problemInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.7, delay: shouldReduce ? 0 : 0.2 }}
            className="mt-12 grid gap-5 md:grid-cols-2"
          >
            {/* Generic AI — red/muted */}
            <div className="relative overflow-hidden rounded-2xl border border-brand-midnight/10 dark:border-brand-white/8 bg-brand-white/60 dark:bg-brand-midnight/40 p-7">
              <div className="flex items-center gap-3 border-b border-brand-midnight/8 dark:border-brand-white/8 pb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-500/10">
                  <XCircle className="h-4 w-4 text-red-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-red-500 dark:text-red-400">{t.problemVsGeneric}</p>
                  <p className="text-xs text-brand-midnight/45 dark:text-brand-white/45">{t.genericAiLabel}</p>
                </div>
              </div>
              <ul className="mt-5 flex flex-col gap-3.5">
                {data.problemPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-brand-midnight/55 dark:text-brand-white/45">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-400/60" />
                    <span className="line-through decoration-red-400/30">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lattice Séeb — brand green/accent */}
            <div className="relative overflow-hidden rounded-2xl border border-brand-accent/25 bg-gradient-to-br from-brand-accent/5 to-transparent p-7 shadow-lg shadow-brand-accent/5">
              <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 -translate-y-1/2 translate-x-1/2 rounded-full bg-brand-accent/15 blur-3xl" />
              <div className="relative flex items-center gap-3 border-b border-brand-accent/15 pb-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-accent/15">
                  <CheckCircle2 className="h-4 w-4 text-brand-accent" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-brand-accent">Lattice Séeb</p>
                  <p className="text-xs text-brand-midnight/55 dark:text-brand-white/55">{t.latticeSeebLabel(data.name)}</p>
                </div>
              </div>
              <ul className="relative mt-5 flex flex-col gap-3.5">
                {data.agentCapabilities.slice(0, 4).map((cap) => (
                  <li key={cap} className="flex items-start gap-3 text-sm leading-relaxed text-brand-midnight/75 dark:text-brand-white/75">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </m.div>
        </div>
      </section>

      {/* ── 3. USE CASES GRID ───────────────────────────────── */}
      <section className="bg-brand-surface dark:bg-brand-midnight py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <m.div
            ref={useCasesRef}
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={useCasesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6 }}
          >
            <span className="text-[0.7rem] font-semibold uppercase tracking-widest text-brand-accent">
              {t.useCasesBadge}
            </span>
            <h2 className="font-proxima mt-3 max-w-3xl text-balance text-3xl font-bold text-brand-midnight dark:text-brand-white sm:text-4xl">
              {t.useCasesTitle(data.name)}
            </h2>
          </m.div>

          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-brand-midnight/8 dark:border-brand-white/10 bg-brand-white dark:bg-brand-midnight/8 sm:grid-cols-2">
            {data.useCases.map((uc, i) => {
              const UcIcon = ICON_MAP[uc.icon] ?? FileText;
              return (
                <m.div
                  key={uc.title}
                  initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                  animate={useCasesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: shouldReduce ? 0 : 0.5, delay: shouldReduce ? 0 : 0.08 + i * 0.08 }}
                  className="group bg-brand-surface dark:bg-brand-midnight p-8 transition-colors hover:bg-brand-deep/80"
                >
                  <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-accent/10 transition-colors group-hover:bg-brand-accent/20">
                    <UcIcon className="h-5 w-5 text-brand-accent" />
                  </div>
                  <h3 className="text-base font-proxima font-semibold text-brand-midnight dark:text-brand-white">{uc.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-midnight/45 dark:text-brand-white/45">{uc.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-brand-accent/70 transition-colors group-hover:text-brand-accent">
                    {t.seeMore} <ChevronRight className="h-3 w-3" />
                  </span>
                </m.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. AGENT SHOWCASE — DARK ────────────────────────── */}
      <section id="agente" className="relative overflow-hidden bg-brand-surface dark:bg-brand-deep py-24 px-4 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-brand-accent/5 blur-[120px]" />
        <div className="relative mx-auto max-w-7xl">
          <div ref={showcaseRef} className="grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* Left: Lattice Chat mockup */}
            <m.div
              initial={shouldReduce ? false : { opacity: 0, x: -24 }}
              animate={showcaseInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: shouldReduce ? 0 : 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="order-2 lg:order-1"
            >
              <div className="overflow-hidden rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-navy shadow-2xl shadow-black/40">
                {/* Chat header */}
                <div className="flex items-center justify-between border-b border-brand-midnight/8 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep px-5 py-3.5">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-accent/20">
                      <AgentIcon className="h-4 w-4 text-brand-accent" />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-brand-midnight dark:text-brand-white">{data.agentName}</span>
                      <span className="ml-2 rounded-full bg-brand-accent/15 px-2 py-0.5 text-xs font-semibold text-brand-accent">Séeb {data.name}</span>
                    </div>
                  </div>
                  <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-500 dark:text-emerald-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {t.online}
                  </span>
                </div>
                {/* Messages */}
                <div className="flex flex-col gap-4 p-5">
                  <div className="text-center">
                    <span className="rounded-full bg-brand-white dark:bg-brand-midnight/5 px-3 py-1 text-xs font-medium text-brand-midnight/55 dark:text-brand-white/50">
                      {t.processedInYourInfra}
                    </span>
                  </div>
                  {/* User message */}
                  <div className="flex justify-end">
                    <div className="max-w-[82%] rounded-2xl rounded-tr-sm bg-brand-accent/20 px-4 py-2.5 text-xs leading-relaxed text-brand-midnight/80 dark:text-brand-white/80">
                      {conv.userMsg}
                    </div>
                  </div>
                  {/* Agent response */}
                  <div className="flex gap-2.5">
                    <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent/20">
                      <AgentIcon className="h-3 w-3 text-brand-accent" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="rounded-2xl rounded-tl-sm bg-brand-surface dark:bg-brand-midnight/80 px-4 py-2.5 text-xs leading-relaxed text-brand-midnight/65 dark:text-brand-white/65">
                        {conv.agentMsg}
                      </div>
                      <div className="mt-2 flex items-center gap-2.5 rounded-xl border border-brand-midnight/8 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep px-3 py-2.5">
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-accent/15">
                          <FileText className="h-3.5 w-3.5 text-brand-accent" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-semibold text-brand-midnight/85 dark:text-brand-white/85">{conv.artifactName}</p>
                          <p className="text-xs text-brand-midnight/55 dark:text-brand-white/55">{artifactType} · {t.generatedInYourInfra}</p>
                        </div>
                        <Download className="h-3.5 w-3.5 shrink-0 text-brand-accent/50" />
                      </div>
                    </div>
                  </div>
                  {/* Autonomous task */}
                  <div className="flex items-center gap-2 rounded-lg border border-emerald-500/10 bg-emerald-500/5 px-3 py-2">
                    <Activity className="h-3.5 w-3.5 shrink-0 text-emerald-400/70" />
                    <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">{conv.autonomousTask}</span>
                  </div>
                </div>
                {/* Input bar */}
                <div className="border-t border-brand-midnight/5 dark:border-brand-white/10 px-5 py-3.5">
                  <div className="flex items-center gap-2 rounded-xl border border-brand-midnight/8 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-midnight/50 px-3.5 py-2">
                    <span className="flex-1 text-xs text-brand-midnight/20 dark:text-brand-white/20">{t.writeInstruction}</span>
                    <Paperclip className="h-3.5 w-3.5 text-brand-midnight/20 dark:text-brand-white/20" />
                    <div className="flex h-6 w-6 items-center justify-center rounded-md bg-brand-accent/25">
                      <ArrowRight className="h-3 w-3 text-brand-accent/70" />
                    </div>
                  </div>
                </div>
              </div>
            </m.div>

            {/* Right: Agent info + capabilities */}
            <m.div
              initial={shouldReduce ? false : { opacity: 0, x: 24 }}
              animate={showcaseInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: shouldReduce ? 0 : 0.7, delay: shouldReduce ? 0 : 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="order-1 lg:order-2"
            >
              <span className="text-[0.7rem] font-semibold uppercase tracking-widest text-brand-accent">
                {t.agentBadge}
              </span>
              <h2 className="font-proxima mt-3 text-balance text-3xl font-bold text-brand-midnight dark:text-brand-white sm:text-4xl">
                {t.meetAgent(data.agentName)}
              </h2>

              {/* Agent badge */}
              <div className="mt-5 flex items-center gap-3">
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-brand-accent/25 bg-brand-accent/10">
                  <AgentIcon className="h-6 w-6 text-brand-accent" />
                  <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-brand-surface dark:bg-brand-deep">
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-midnight dark:text-brand-white">{data.agentRole}</p>
                  <p className="text-xs text-brand-midnight/35 dark:text-brand-white/35">{t.activeStatus}</p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-brand-midnight/50 dark:text-brand-white/50">{data.agentBio}</p>

              {/* Autonomous Agent callout */}
              <div className="mt-6 rounded-2xl border border-brand-accent/15 bg-brand-accent/[0.05] p-5">
                <div className="mb-3 flex items-center gap-2">
                  <Activity className="h-4 w-4 text-brand-accent" />
                  <p className="text-xs font-bold uppercase tracking-wider text-brand-accent">{t.autonomousAgentBadge}</p>
                </div>
                <p className="text-sm leading-relaxed text-brand-midnight/50 dark:text-brand-white/50">
                  {t.autonomousDesc(data.agentName)}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {t.autonomousTags.map((tag) => (
                    <span key={tag} className="rounded-full border border-brand-accent/20 bg-brand-accent/10 px-3 py-1 text-xs font-medium text-brand-accent">{tag}</span>
                  ))}
                </div>
              </div>

              <div className="mt-7">
                <p className="mb-4 text-xs font-bold uppercase tracking-widest text-brand-accent">
                  {t.capabilities}
                </p>
                <ul className="flex flex-col gap-3">
                  {data.agentCapabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <span className="text-sm text-brand-midnight/65 dark:text-brand-white/65">{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-brand-accent px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-accent/20 transition-all hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-brand-accent/30"
              >
                {t.requestDemo(data.agentName)}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </m.div>
          </div>
        </div>
      </section>

      {/* ── 4.5 WORKFLOW — FROM KICKOFF TO PRODUCTION ────────── */}
      <section className="relative bg-brand-surface dark:bg-brand-midnight py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <m.div
            ref={workflowRef}
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={workflowInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-[0.7rem] font-semibold uppercase tracking-widest text-brand-accent">
              {t.workflowBadge}
            </span>
            <h2 className="font-proxima mt-3 text-balance text-3xl font-bold text-brand-midnight dark:text-brand-white sm:text-4xl">
              {t.workflowTitle}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-brand-midnight/55 dark:text-brand-white/55">
              {t.workflowSubtitle}
            </p>
          </m.div>

          <div className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {/* Connecting line for desktop */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-0 right-0 top-7 hidden lg:block"
            >
              <div className="mx-auto h-px w-11/12 bg-gradient-to-r from-transparent via-brand-accent/25 to-transparent" />
            </div>

            {t.workflowSteps.map((step, i) => {
              const StepIcon = [Compass, Wrench, PlayCircle, Rocket][i] ?? Rocket;
              return (
                <m.div
                  key={step.number}
                  initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                  animate={workflowInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: shouldReduce ? 0 : 0.5, delay: shouldReduce ? 0 : i * 0.12 }}
                  className="relative flex flex-col"
                >
                  {/* Numbered node */}
                  <div className="relative z-10 flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-accent/30 bg-brand-surface dark:bg-brand-deep shadow-md shadow-brand-accent/5">
                      <StepIcon className="h-6 w-6 text-brand-accent" />
                    </div>
                    <span className="font-proxima text-3xl font-extrabold tracking-tight text-brand-midnight/15 dark:text-brand-white/15">
                      {step.number}
                    </span>
                  </div>

                  <div className="mt-5 flex-1 rounded-2xl border border-brand-midnight/8 dark:border-brand-white/10 bg-brand-white dark:bg-brand-deep/60 p-6">
                    <p className="text-xs font-semibold uppercase tracking-wider text-brand-accent">
                      {step.time}
                    </p>
                    <h3 className="font-proxima mt-2 text-lg font-bold text-brand-midnight dark:text-brand-white">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-midnight/55 dark:text-brand-white/55">
                      {step.desc}
                    </p>
                  </div>
                </m.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 5. IMPACT METRICS ───────────────────────────────── */}
      <section className="bg-brand-surface dark:bg-brand-midnight py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <m.div
            ref={metricsRef}
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={metricsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6 }}
            className="text-center"
          >
            <span className="text-[0.7rem] font-semibold uppercase tracking-widest text-brand-accent">
              {t.impactBadge}
            </span>
            <h2 className="font-proxima mt-3 text-3xl font-bold text-brand-midnight dark:text-brand-white sm:text-4xl">
              {t.impactTitle}
            </h2>
            <p className="mt-3 text-sm text-brand-midnight/35 dark:text-brand-white/35">
              {t.impactSubtitle}
            </p>
          </m.div>

          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 24 }}
            animate={metricsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.7, delay: shouldReduce ? 0 : 0.2 }}
            className="mt-12 grid gap-0 overflow-hidden rounded-2xl border border-brand-midnight/8 dark:border-brand-white/10 sm:grid-cols-2 lg:grid-cols-4"
          >
            {data.impactMetrics.map((metric, i) => (
              <div
                key={metric.label}
                className="flex flex-col items-center border-r border-b border-brand-midnight/8 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep/50 p-8 text-center last:border-r-0 [&:nth-child(2)]:sm:border-r-0 lg:[&:nth-child(2)]:border-r lg:[&:nth-child(4)]:border-r-0"
              >
                <p className="text-4xl font-extrabold text-brand-accent">
                  {metricsInView ? (
                    <AnimatedCounter
                      to={metric.value}
                      suffix={metric.suffix}
                      prefix={metric.prefix}
                      duration={1600 + i * 150}
                    />
                  ) : (
                    <span>0{metric.suffix}</span>
                  )}
                </p>
                <p className="mt-3 text-sm font-medium leading-snug text-brand-midnight/65 dark:text-brand-white/65">{metric.label}</p>
              </div>
            ))}
          </m.div>
          <p className="mt-6 text-center text-xs text-brand-midnight/45 dark:text-brand-white/40">
            {t.impactDisclaimer}
          </p>
        </div>
      </section>

      {/* ── 6. EDITORIAL PULL-QUOTE — SECONDARY IMAGE ─────────── */}
      <section className="relative min-h-[520px] overflow-hidden bg-brand-midnight lg:min-h-[620px]">
        <Image
          src={data.secondaryImageUrl || data.atmosphericImageUrl || data.imageUrl}
          alt={data.imageAlt}
          fill
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iOSIgZmlsbD0iIzA0MDYxNSIvPjwvc3ZnPg=="
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlay — darker on left for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-midnight/95 via-brand-midnight/70 to-brand-midnight/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight/60 to-transparent lg:bg-none" />

        <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center px-5 py-16 sm:px-8 lg:min-h-[620px] lg:py-24">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md ring-1 ring-white/20">
              {data.badge}
            </span>
            <blockquote className="font-proxima mt-6 text-balance text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[2.75rem]">
              <span className="text-brand-accent">"</span>
              {data.problemTitle}
              <span className="text-brand-accent">"</span>
            </blockquote>
            <div className="mt-8 flex items-center gap-4">
              <div className="h-px w-12 bg-brand-accent" />
              <p className="text-sm font-semibold uppercase tracking-wider text-white/80">
                Lattice Séeb {data.name} · Sintérgica AI
              </p>
            </div>
            <div className="mt-8">
              <Link
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-brand-midnight shadow-xl shadow-black/30 transition-all hover:-translate-y-0.5 hover:bg-brand-accent hover:text-white"
              >
                {t.requestDiagnosis}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. SECURITY / COMPLIANCE SECTION ────────────────── */}
      <section className="bg-brand-surface dark:bg-brand-deep py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div ref={securityRef} className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-start">

            {/* Left: Text */}
            <m.div
              initial={shouldReduce ? false : { opacity: 0, x: -20 }}
              animate={securityInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: shouldReduce ? 0 : 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="text-[0.7rem] font-semibold uppercase tracking-widest text-brand-accent">
                {t.securityBadge}
              </span>
              <h2 className="font-proxima mt-4 text-balance text-3xl font-bold text-brand-midnight dark:text-brand-white sm:text-4xl">
                {t.securityTitle}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-brand-midnight/50 dark:text-brand-white/50">
                {data.slug === "gobierno"
                  ? t.securityDescGov
                  : t.securityDescDefault(data.name)}
              </p>

              <ul className="mt-8 flex flex-col gap-5">
                {t.securityPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-accent/15">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
                    </div>
                    <span className="text-sm leading-relaxed text-brand-midnight/55 dark:text-brand-white/55">{point}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-10 inline-flex items-center gap-2 text-sm font-semibold text-brand-accent transition-colors hover:text-brand-accent/80"
              >
                {t.talkToArchitect}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </m.div>

            {/* Right: Security feature cards */}
            <m.div
              initial={shouldReduce ? false : { opacity: 0, x: 20 }}
              animate={securityInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: shouldReduce ? 0 : 0.7, delay: shouldReduce ? 0 : 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-4"
            >
              {t.securityFeatures.map((feat, idx) => {
                const FeatIcon = SECURITY_ICONS[idx];
                return (
                  <div key={feat.title} className="flex gap-4 rounded-2xl border border-brand-midnight/8 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-midnight p-6">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent/10">
                      <FeatIcon className="h-5 w-5 text-brand-accent" />
                    </div>
                    <div>
                      <p className="font-bold text-brand-midnight dark:text-brand-white">{feat.title}</p>
                      <p className="mt-1 text-sm leading-relaxed text-brand-midnight/45 dark:text-brand-white/45">{feat.desc}</p>
                    </div>
                  </div>
                );
              })}

              {/* Zero-retention badge */}
              <div className="rounded-2xl border border-brand-accent/20 bg-brand-accent/[0.05] p-5">
                <div className="flex items-start gap-3">
                  <Shield className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" />
                  <div>
                    <p className="text-sm font-bold text-brand-midnight dark:text-brand-white">{t.zeroRetentionTitle}</p>
                    <p className="mt-1 text-xs leading-relaxed text-brand-midnight/45 dark:text-brand-white/45">
                      {t.zeroRetentionDesc}
                    </p>
                  </div>
                </div>
              </div>
            </m.div>
          </div>
        </div>
      </section>

      {/* ── 7.5 FAQ — OBJECTION HANDLING ─────────────────────── */}
      <section className="bg-brand-surface dark:bg-brand-midnight py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <m.div
            ref={faqRef}
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: shouldReduce ? 0 : 0.6 }}
            className="text-center"
          >
            <span className="text-[0.7rem] font-semibold uppercase tracking-widest text-brand-accent">
              {t.faqBadge}
            </span>
            <h2 className="font-proxima mt-3 text-balance text-3xl font-bold text-brand-midnight dark:text-brand-white sm:text-4xl">
              {t.faqTitle}
            </h2>
          </m.div>

          <div className="mt-12 flex flex-col gap-3">
            {t.faqs.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <m.div
                  key={item.q}
                  initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                  animate={faqInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: shouldReduce ? 0 : 0.4, delay: shouldReduce ? 0 : i * 0.06 }}
                  className={`overflow-hidden rounded-2xl border transition-colors ${
                    isOpen
                      ? "border-brand-accent/30 bg-brand-accent/[0.04]"
                      : "border-brand-midnight/10 dark:border-brand-white/10 bg-brand-white dark:bg-brand-deep/60"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className={`font-proxima text-[15px] font-semibold ${
                      isOpen ? "text-brand-accent" : "text-brand-midnight dark:text-brand-white"
                    }`}>
                      {item.q}
                    </span>
                    <ChevronDown className={`h-5 w-5 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-brand-accent" : "text-brand-midnight/40 dark:text-brand-white/40"
                    }`} />
                  </button>
                  <div className={`grid overflow-hidden transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}>
                    <div className="min-h-0 overflow-hidden">
                      <p className="px-6 pb-6 text-sm leading-relaxed text-brand-midnight/65 dark:text-brand-white/65">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </m.div>
              );
            })}
          </div>

          {/* Trailing nudge */}
          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <span className="text-sm text-brand-midnight/50 dark:text-brand-white/50">{t.faqMore}</span>
            <Link
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-accent transition-colors hover:text-brand-accent/80"
            >
              {t.faqMoreCta}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 8. CTA ──────────────────────────────────────────── */}
      <CTASection
        title={t.ctaTitle(data.name)}
        subtitle={t.ctaSubtitle(data.name, data.agentName)}
        ctaLabel={t.ctaLabel}
        ctaHref={BOOKING_URL}
        trustSignals={[...t.ctaTrust]}
      />

    </LazyMotion>
  );
}
