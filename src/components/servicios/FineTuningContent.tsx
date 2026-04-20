"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import {
  Brain, Shield, FileText, Zap, CheckCircle2, ChevronDown,
  ArrowRight, Database, Lock, FlaskConical, Rocket, AlertTriangle,
  BookOpen, Scale, HeartPulse, Building2, Bolt, TrendingUp,
  CheckCircle,
} from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTASection } from "@/components/shared/CTASection";
import { useLocale } from "@/i18n/DictionaryProvider";

const BOOKING_URL = "https://sales.sintergica.ai/widget/booking/vh6cQRURUU1nU5nslpu4";

const T = {
  es: {
    hero: {
      badge: "FINE-TUNING PRIVADO · LATTICE SÉEB",
      title: "IA que piensa\ncomo tu organización.\nEntrenada con tus datos.\nNunca expuestos.",
      subtitle: "Los SLM Lattice Séeb son modelos expertos, rápidos y ligeros diseñados para IA agéntica. Especializamos cada uno en tu terminología sectorial, normativas y lógica interna — on-premise, sin salida de datos.",
      bgImageAlt: "Visualización abstracta de fine-tuning de modelos de IA",
      ctaLabel: "Solicitar diagnóstico",
      ctaSecondaryLabel: "Ver metodología",
      trustSignals: ["Entrenamiento on-premise", "Datos nunca expuestos", "Latencia <300 ms", "Listo para IA agéntica"],
    },
    problem: {
      badge: "EL PROBLEMA",
      title: "Por qué la IA genérica falla en contextos especializados",
      subtitle: "Usar un LLM de propósito general en procesos críticos de negocio no es una solución de IA — es una fuente de riesgo operativo.",
    },
    painPoints: [
      { title: "La IA genérica alucina en tu dominio", description: "GPT-4 no conoce tu reglamento interno, tus disposiciones del DOF ni la nomenclatura técnica de tu operación. Responde con confianza sobre lo que desconoce." },
      { title: "Tus datos viajan a servidores ajenos", description: "El fine-tuning en modelos de terceros implica enviar tus manuales, contratos y políticas a infraestructura que no controlas. Eso es un riesgo regulatorio y reputacional." },
      { title: "Los LLMs masivos son lentos y costosos para agentes", description: "Un agente que debe consultar 200 veces al día no puede esperar 4 segundos por respuesta ni agotar tokens en contexto. Los LLMs de propósito general no están diseñados para IA agéntica." },
    ],
    seeb: {
      badge: "Lattice Séeb",
      titleLine1: "SLM expertos.",
      titleLine2: "No modelos fundacionales.",
      desc1: (
        <>
          Lattice Séeb son <strong className="text-brand-midnight dark:text-brand-white">Small Language Models</strong> destilados
          de Lattice Na&apos;at (1T). Con 4B–9B parámetros, están diseñados para una sola cosa:
          ejecutar tareas industriales específicas con velocidad y precisión dentro de flujos agénticos.
        </>
      ),
      desc2: (
        <>
          El fine-tuning especializa uno de estos SLM con <strong className="text-brand-midnight dark:text-brand-white">tu corpus propietario</strong> —
          manuales, normativas, terminología sectorial — hasta que el modelo entiende tu organización
          desde adentro, no desde una búsqueda en internet.
        </>
      ),
      features: [
        "Compacto: corre en hardware estándar on-premise",
        "Rápido: latencia <300 ms, ideal para agentes de alta frecuencia",
        "Privado: entrenado y desplegado dentro de tu infraestructura",
        "Especializado: precisión >94% en tu dominio específico",
      ],
      corpusTitle: "¿Qué documentación se usa para entrenar?",
      corpusMinimum: (
        <>
          <strong className="text-brand-midnight dark:text-brand-white">Mínimo recomendado:</strong> 50,000 tokens curados (~100 págs).
          Tenemos técnicas de data augmentation para corpus reducidos.
        </>
      ),
    },
    corpusLabels: [
      "Manuales operativos y procedimientos internos",
      "Normativas sectoriales (DOF, CNBV, CRE, COFEPRIS)",
      "Terminología técnica y glosarios industriales",
      "Contratos tipo, cláusulas y jurisprudencia",
      "Protocolos clínicos y guías de práctica médica",
      "Reportes históricos, auditorías y resoluciones",
    ],
    process: {
      badge: "PROCESO",
      title: "De tu corpus a un agente experto en 4 pasos",
      subtitle: "Un proceso riguroso con validación humana en cada etapa. Sin atajos que comprometan la precisión.",
      stepLabel: "PASO",
    },
    processSteps: [
      { title: "Curación de corpus", description: "Recolectamos, limpiamos y estructuramos tu documentación propietaria: manuales operativos, políticas, normativas sectoriales, resoluciones y terminología específica de tu organización.", detail: "Entregable: dataset curado y validado por expertos del dominio" },
      { title: "Alineación y validación humana", description: "Expertos en tu industria validan que el corpus refleje el conocimiento correcto antes de entrenar. Eliminamos sesgos, inconsistencias y datos sensibles que no deben ingresar al modelo.", detail: "Entregable: corpus aprobado con etiquetas de calidad" },
      { title: "Entrenamiento supervisado del SLM", description: "Fine-tuning de los SLM Lattice Séeb (4B–9B parámetros) sobre tu corpus curado. El entrenamiento ocurre en entorno aislado — on-premise o VPC privada — sin salida de datos.", detail: "Entregable: modelo Séeb especializado en tu dominio" },
      { title: "Evaluación y despliegue", description: "Medimos precisión, latencia y cobertura del dominio frente a benchmarks reales de tu operación. Desplegamos en tu infraestructura y dejamos el modelo listo para IA agéntica.", detail: "Entregable: modelo en producción + reporte de métricas" },
    ],
    comparison: {
      badge: "COMPARATIVA",
      title: "IA genérica vs. Séeb especializado",
      subtitle: "La diferencia no es cosmética. Es la diferencia entre un asistente que adivina y uno que sabe.",
      colCapability: "Capacidad",
      colGeneric: "LLM genérico",
      colSeeb: "Lattice Séeb",
    },
    comparisonRows: [
      { feature: "Precisión en terminología interna", generic: "~40–60%", seeb: ">94%" },
      { feature: "Alucinaciones en dominio especializado", generic: "Alta frecuencia", seeb: "Mínimas" },
      { feature: "Latencia por respuesta", generic: "3–8 segundos", seeb: "<300 ms" },
      { feature: "Datos salen de tu infraestructura", generic: "Sí", seeb: "Nunca" },
      { feature: "Contexto normativo México/LATAM", generic: "Superficial", seeb: "Nativo y profundo" },
      { feature: "Diseñado para IA agéntica", generic: "No", seeb: "Sí (Rust + 16 capas)" },
      { feature: "Elegible para licitación pública MX", generic: "No", seeb: "Sí (CFDI 4.0 + RFC)" },
      { feature: "Costo por millón de tokens (blended)", generic: "$35–$215 MXN/M", seeb: "$10–$16 MXN/M" },
    ],
    industries: {
      badge: "INDUSTRIAS",
      title: "Séeb ya opera en sectores regulados",
      subtitle: "Cada vertical tiene su propio corpus, terminología y normativa. Séeb se entrena para cada uno.",
    },
    industryItems: [
      { name: "Legal", example: "Análisis de contratos, jurisprudencia SCJN, compliance regulatorio." },
      { name: "Financiero", example: "Disposiciones CNBV, reportes de riesgo, auditoría KYC." },
      { name: "Energía", example: "Normativas CRE, seguridad NOM, gestión de activos industriales." },
      { name: "Salud", example: "Protocolos COFEPRIS, historia clínica, farmacovigilancia." },
      { name: "Gobierno", example: "Procesos del DOF, trámites, atención ciudadana especializada." },
      { name: "Manufactura", example: "Manuales de línea, control de calidad, OEE y mantenimiento." },
    ],
    deliverables: {
      badge: "ENTREGABLES",
      title: "Qué recibes al final del proceso",
      subtitle: "No solo un modelo. Un activo de conocimiento privado, documentado y listo para operar.",
    },
    deliverableItems: [
      "SLM Lattice Séeb especializado y validado en tu dominio",
      "Despliegue on-premise o VPC privada dentro de tu infraestructura",
      "Reporte de métricas: precisión, cobertura y latencia",
      "Documentación técnica completa del modelo y del corpus",
      "Integración lista para IA agéntica con Lattice Agents",
      "Protocolo de actualización y re-entrenamiento incremental",
    ],
    deliverablesCta: "Iniciar diagnóstico",
    security: {
      title: "Soberanía total de datos",
      desc: "El proceso de fine-tuning, el corpus y el modelo resultante viven exclusivamente en tu infraestructura. Sintérgica no retiene, no copia ni tiene acceso posterior al modelo entrenado. Es tuyo.",
      items: [
        "Certificado de zero-retention al cierre del proyecto",
        "Cumplimiento LFPDPPP en todo el proceso",
        "Compatible con políticas de seguridad corporativa",
      ],
    },
    faq: {
      badge: "FAQ",
      title: "Preguntas sobre fine-tuning privado",
    },
    faqs: [
      { q: "¿Mis datos salen de mi empresa durante el entrenamiento?", a: "No. El proceso completo de fine-tuning ocurre en tu infraestructura (on-premise) o en una VPC privada aislada dentro de tu proveedor de nube actual. Ningún dato tuyo pasa por servidores de Sintérgica ni de terceros. Cumplimiento total con LFPDPPP." },
      { q: "¿Cuánto tiempo tarda el proceso de fine-tuning?", a: "Depende del volumen y calidad de tu corpus. Un proyecto estándar con corpus ya estructurado puede completarse en 3 a 5 semanas. La fase de curación y validación humana es la más variable. Te damos un estimado preciso tras el diagnóstico inicial." },
      { q: "¿Qué diferencia hay entre fine-tuning y RAG (Retrieval-Augmented Generation)?", a: "RAG busca documentos en tiempo real y los inyecta como contexto — útil para consultas sobre documentos cambiantes. Fine-tuning modifica los pesos del modelo para que interiorice tu dominio permanentemente: más rápido, más preciso, sin costo de tokens por contexto. Para IA agéntica de alta frecuencia, fine-tuning supera a RAG en rendimiento y costo operativo." },
      { q: "¿Cuál es el tamaño mínimo de corpus que necesito?", a: "Para obtener resultados sólidos recomendamos al menos 50,000 tokens de texto curado y validado en tu dominio (equivalente a ~100 páginas densas). Tenemos técnicas de data augmentation para organizaciones con corpus reducido. El diagnóstico inicial determina la viabilidad exacta." },
    ],
    cta: {
      title: "Tu IA más inteligente que cualquier competidor en tu industria",
      subtitle: "El modelo que conoce tu empresa de adentro hacia afuera. Privado, veloz y listo para agentes autónomos.",
      ctaLabel: "Solicitar diagnóstico de fine-tuning",
      trustSignals: ["Datos nunca expuestos", "On-premise o VPC privada", "Cumplimiento LFPDPPP"],
    },
  },
  en: {
    hero: {
      badge: "PRIVATE FINE-TUNING · LATTICE SÉEB",
      title: "AI that thinks like\nyour organization.\nTrained on your data.\nNever exposed.",
      subtitle: "Lattice Séeb SLMs are expert, fast, and lightweight models designed for agentic AI. We specialize each one in your sector terminology, regulations, and internal logic — on-premise, with no data leaving your infrastructure.",
      bgImageAlt: "Abstract visualization of AI model fine-tuning",
      ctaLabel: "Request diagnosis",
      ctaSecondaryLabel: "View methodology",
      trustSignals: ["On-premise training", "Data never exposed", "Latency <300 ms", "Ready for agentic AI"],
    },
    problem: {
      badge: "THE PROBLEM",
      title: "Why generic AI fails in specialized contexts",
      subtitle: "Using a general-purpose LLM in critical business processes is not an AI solution — it's a source of operational risk.",
    },
    painPoints: [
      { title: "Generic AI hallucinates in your domain", description: "GPT-4 doesn't know your internal regulations, your DOF provisions, or the technical nomenclature of your operation. It answers confidently about what it doesn't know." },
      { title: "Your data travels to third-party servers", description: "Fine-tuning on third-party models means sending your manuals, contracts, and policies to infrastructure you don't control. That's a regulatory and reputational risk." },
      { title: "Massive LLMs are slow and costly for agents", description: "An agent that needs to make 200 queries a day can't wait 4 seconds per response or exhaust tokens on context. General-purpose LLMs aren't designed for agentic AI." },
    ],
    seeb: {
      badge: "Lattice Séeb",
      titleLine1: "Expert SLMs.",
      titleLine2: "Not foundation models.",
      desc1: (
        <>
          Lattice Séeb are <strong className="text-brand-midnight dark:text-brand-white">Small Language Models</strong> distilled
          from Lattice Na&apos;at (1T). With 4B–9B parameters, they are designed for one thing:
          executing specific industrial tasks with speed and precision within agentic workflows.
        </>
      ),
      desc2: (
        <>
          Fine-tuning specializes one of these SLMs with <strong className="text-brand-midnight dark:text-brand-white">your proprietary corpus</strong> —
          manuals, regulations, sector terminology — until the model understands your organization
          from the inside, not from an internet search.
        </>
      ),
      features: [
        "Compact: runs on standard on-premise hardware",
        "Fast: latency <300 ms, ideal for high-frequency agents",
        "Private: trained and deployed within your infrastructure",
        "Specialized: >94% accuracy in your specific domain",
      ],
      corpusTitle: "What documentation is used for training?",
      corpusMinimum: (
        <>
          <strong className="text-brand-midnight dark:text-brand-white">Recommended minimum:</strong> 50,000 curated tokens (~100 pages).
          We have data augmentation techniques for reduced corpora.
        </>
      ),
    },
    corpusLabels: [
      "Operational manuals and internal procedures",
      "Sector regulations (DOF, CNBV, CRE, COFEPRIS)",
      "Technical terminology and industry glossaries",
      "Standard contracts, clauses, and case law",
      "Clinical protocols and medical practice guidelines",
      "Historical reports, audits, and resolutions",
    ],
    process: {
      badge: "PROCESS",
      title: "From your corpus to an expert agent in 4 steps",
      subtitle: "A rigorous process with human validation at every stage. No shortcuts that compromise accuracy.",
      stepLabel: "STEP",
    },
    processSteps: [
      { title: "Corpus curation", description: "We collect, clean, and structure your proprietary documentation: operational manuals, policies, sector regulations, resolutions, and terminology specific to your organization.", detail: "Deliverable: curated dataset validated by domain experts" },
      { title: "Alignment and human validation", description: "Experts in your industry validate that the corpus reflects the correct knowledge before training. We eliminate biases, inconsistencies, and sensitive data that should not enter the model.", detail: "Deliverable: approved corpus with quality labels" },
      { title: "Supervised SLM training", description: "Fine-tuning of Lattice Séeb SLMs (4B–9B parameters) on your curated corpus. Training occurs in an isolated environment — on-premise or private VPC — with no data leaving.", detail: "Deliverable: Séeb model specialized in your domain" },
      { title: "Evaluation and deployment", description: "We measure accuracy, latency, and domain coverage against real benchmarks from your operation. We deploy on your infrastructure and leave the model ready for agentic AI.", detail: "Deliverable: model in production + metrics report" },
    ],
    comparison: {
      badge: "COMPARISON",
      title: "Generic AI vs. Specialized Séeb",
      subtitle: "The difference is not cosmetic. It's the difference between an assistant that guesses and one that knows.",
      colCapability: "Capability",
      colGeneric: "Generic LLM",
      colSeeb: "Lattice Séeb",
    },
    comparisonRows: [
      { feature: "Accuracy in internal terminology", generic: "~40–60%", seeb: ">94%" },
      { feature: "Hallucinations in specialized domain", generic: "High frequency", seeb: "Minimal" },
      { feature: "Latency per response", generic: "3–8 seconds", seeb: "<300 ms" },
      { feature: "Data leaves your infrastructure", generic: "Yes", seeb: "Never" },
      { feature: "Mexico/LATAM regulatory context", generic: "Superficial", seeb: "Native and deep" },
      { feature: "Designed for agentic AI", generic: "No", seeb: "Yes (Rust + 16 layers)" },
      { feature: "Eligible for MX public procurement", generic: "No", seeb: "Yes (CFDI 4.0 + RFC)" },
      { feature: "Cost per million tokens (blended)", generic: "$35–$215 MXN/M", seeb: "$10–$16 MXN/M" },
    ],
    industries: {
      badge: "INDUSTRIES",
      title: "Séeb already operates in regulated sectors",
      subtitle: "Each vertical has its own corpus, terminology, and regulations. Séeb is trained for each one.",
    },
    industryItems: [
      { name: "Legal", example: "Contract analysis, SCJN case law, regulatory compliance." },
      { name: "Financial", example: "CNBV provisions, risk reports, KYC auditing." },
      { name: "Energy", example: "CRE regulations, NOM safety, industrial asset management." },
      { name: "Healthcare", example: "COFEPRIS protocols, clinical records, pharmacovigilance." },
      { name: "Government", example: "DOF processes, procedures, specialized citizen services." },
      { name: "Manufacturing", example: "Line manuals, quality control, OEE and maintenance." },
    ],
    deliverables: {
      badge: "DELIVERABLES",
      title: "What you receive at the end of the process",
      subtitle: "Not just a model. A private, documented knowledge asset ready to operate.",
    },
    deliverableItems: [
      "Specialized and validated Lattice Séeb SLM in your domain",
      "On-premise or private VPC deployment within your infrastructure",
      "Metrics report: accuracy, coverage, and latency",
      "Complete technical documentation of the model and corpus",
      "Integration ready for agentic AI with Lattice Agents",
      "Update and incremental retraining protocol",
    ],
    deliverablesCta: "Start diagnosis",
    security: {
      title: "Total data sovereignty",
      desc: "The fine-tuning process, the corpus, and the resulting model live exclusively in your infrastructure. Sintérgica does not retain, copy, or have subsequent access to the trained model. It's yours.",
      items: [
        "Zero-retention certificate at project closure",
        "LFPDPPP compliance throughout the process",
        "Compatible with corporate security policies",
      ],
    },
    faq: {
      badge: "FAQ",
      title: "Questions about private fine-tuning",
    },
    faqs: [
      { q: "Does my data leave my company during training?", a: "No. The entire fine-tuning process occurs in your infrastructure (on-premise) or in an isolated private VPC within your current cloud provider. None of your data passes through Sintérgica's or third-party servers. Full LFPDPPP compliance." },
      { q: "How long does the fine-tuning process take?", a: "It depends on the volume and quality of your corpus. A standard project with an already structured corpus can be completed in 3 to 5 weeks. The curation and human validation phase is the most variable. We give you a precise estimate after the initial diagnosis." },
      { q: "What's the difference between fine-tuning and RAG (Retrieval-Augmented Generation)?", a: "RAG searches for documents in real time and injects them as context — useful for queries about changing documents. Fine-tuning modifies the model's weights so it permanently internalizes your domain: faster, more accurate, no token cost for context. For high-frequency agentic AI, fine-tuning outperforms RAG in performance and operational cost." },
      { q: "What is the minimum corpus size I need?", a: "For solid results, we recommend at least 50,000 tokens of curated and validated text in your domain (equivalent to ~100 dense pages). We have data augmentation techniques for organizations with reduced corpora. The initial diagnosis determines the exact feasibility." },
    ],
    cta: {
      title: "Your AI smarter than any competitor in your industry",
      subtitle: "The model that knows your company inside out. Private, fast, and ready for autonomous agents.",
      ctaLabel: "Request fine-tuning diagnosis",
      trustSignals: ["Data never exposed", "On-premise or private VPC", "LFPDPPP compliance"],
    },
  },
  "pt-br": {
    hero: {
      badge: "FINE-TUNING PRIVADO · LATTICE SÉEB",
      title: "IA que pensa como\nsua organização.\nTreinada com seus dados.\nNunca expostos.",
      subtitle: "Os SLM Lattice Séeb são modelos especialistas, rápidos e leves projetados para IA agêntica. Especializamos cada um na sua terminologia setorial, normativas e lógica interna — on-premise, sem saída de dados.",
      bgImageAlt: "Visualização abstrata de fine-tuning de modelos de IA",
      ctaLabel: "Solicitar diagnóstico",
      ctaSecondaryLabel: "Ver metodologia",
      trustSignals: ["Treinamento on-premise", "Dados nunca expostos", "Latência <300 ms", "Pronto para IA agêntica"],
    },
    problem: {
      badge: "O PROBLEMA",
      title: "Por que a IA genérica falha em contextos especializados",
      subtitle: "Usar um LLM de propósito geral em processos críticos de negócio não é uma solução de IA — é uma fonte de risco operacional.",
    },
    painPoints: [
      { title: "A IA genérica alucina no seu domínio", description: "O GPT-4 não conhece seu regulamento interno, suas disposições do DOF nem a nomenclatura técnica da sua operação. Responde com confiança sobre o que desconhece." },
      { title: "Seus dados viajam para servidores de terceiros", description: "O fine-tuning em modelos de terceiros implica enviar seus manuais, contratos e políticas para infraestrutura que você não controla. Isso é um risco regulatório e reputacional." },
      { title: "Os LLMs massivos são lentos e caros para agentes", description: "Um agente que precisa consultar 200 vezes ao dia não pode esperar 4 segundos por resposta nem esgotar tokens em contexto. Os LLMs de propósito geral não são projetados para IA agêntica." },
    ],
    seeb: {
      badge: "Lattice Séeb",
      titleLine1: "SLM especialistas.",
      titleLine2: "Não modelos fundacionais.",
      desc1: (
        <>
          Lattice Séeb são <strong className="text-brand-midnight dark:text-brand-white">Small Language Models</strong> destilados
          do Lattice Na&apos;at (1T). Com 4B–9B parâmetros, são projetados para uma única coisa:
          executar tarefas industriais específicas com velocidade e precisão dentro de fluxos agênticos.
        </>
      ),
      desc2: (
        <>
          O fine-tuning especializa um desses SLM com <strong className="text-brand-midnight dark:text-brand-white">seu corpus proprietário</strong> —
          manuais, normativas, terminologia setorial — até que o modelo entenda sua organização
          por dentro, não a partir de uma busca na internet.
        </>
      ),
      features: [
        "Compacto: roda em hardware padrão on-premise",
        "Rápido: latência <300 ms, ideal para agentes de alta frequência",
        "Privado: treinado e implantado dentro da sua infraestrutura",
        "Especializado: precisão >94% no seu domínio específico",
      ],
      corpusTitle: "Que documentação é usada para treinar?",
      corpusMinimum: (
        <>
          <strong className="text-brand-midnight dark:text-brand-white">Mínimo recomendado:</strong> 50.000 tokens curados (~100 págs).
          Temos técnicas de data augmentation para corpus reduzidos.
        </>
      ),
    },
    corpusLabels: [
      "Manuais operacionais e procedimentos internos",
      "Normativas setoriais (DOF, CNBV, CRE, COFEPRIS)",
      "Terminologia técnica e glossários industriais",
      "Contratos tipo, cláusulas e jurisprudência",
      "Protocolos clínicos e guias de prática médica",
      "Relatórios históricos, auditorias e resoluções",
    ],
    process: {
      badge: "PROCESSO",
      title: "Do seu corpus a um agente especialista em 4 passos",
      subtitle: "Um processo rigoroso com validação humana em cada etapa. Sem atalhos que comprometam a precisão.",
      stepLabel: "PASSO",
    },
    processSteps: [
      { title: "Curadoria de corpus", description: "Coletamos, limpamos e estruturamos sua documentação proprietária: manuais operacionais, políticas, normativas setoriais, resoluções e terminologia específica da sua organização.", detail: "Entregável: dataset curado e validado por especialistas do domínio" },
      { title: "Alinhamento e validação humana", description: "Especialistas na sua indústria validam que o corpus reflita o conhecimento correto antes do treinamento. Eliminamos vieses, inconsistências e dados sensíveis que não devem entrar no modelo.", detail: "Entregável: corpus aprovado com etiquetas de qualidade" },
      { title: "Treinamento supervisionado do SLM", description: "Fine-tuning dos SLM Lattice Séeb (4B–9B parâmetros) sobre seu corpus curado. O treinamento ocorre em ambiente isolado — on-premise ou VPC privada — sem saída de dados.", detail: "Entregável: modelo Séeb especializado no seu domínio" },
      { title: "Avaliação e implantação", description: "Medimos precisão, latência e cobertura do domínio frente a benchmarks reais da sua operação. Implantamos na sua infraestrutura e deixamos o modelo pronto para IA agêntica.", detail: "Entregável: modelo em produção + relatório de métricas" },
    ],
    comparison: {
      badge: "COMPARATIVO",
      title: "IA genérica vs. Séeb especializado",
      subtitle: "A diferença não é cosmética. É a diferença entre um assistente que adivinha e um que sabe.",
      colCapability: "Capacidade",
      colGeneric: "LLM genérico",
      colSeeb: "Lattice Séeb",
    },
    comparisonRows: [
      { feature: "Precisão em terminologia interna", generic: "~40–60%", seeb: ">94%" },
      { feature: "Alucinações em domínio especializado", generic: "Alta frequência", seeb: "Mínimas" },
      { feature: "Latência por resposta", generic: "3–8 segundos", seeb: "<300 ms" },
      { feature: "Dados saem da sua infraestrutura", generic: "Sim", seeb: "Nunca" },
      { feature: "Contexto regulatório México/LATAM", generic: "Superficial", seeb: "Nativo e profundo" },
      { feature: "Projetado para IA agêntica", generic: "Não", seeb: "Sim (Rust + 16 camadas)" },
      { feature: "Elegível para licitação pública MX", generic: "Não", seeb: "Sim (CFDI 4.0 + RFC)" },
      { feature: "Custo por milhão de tokens (blended)", generic: "$35–$215 MXN/M", seeb: "$10–$16 MXN/M" },
    ],
    industries: {
      badge: "INDÚSTRIAS",
      title: "Séeb já opera em setores regulados",
      subtitle: "Cada vertical tem seu próprio corpus, terminologia e normativa. Séeb é treinado para cada um.",
    },
    industryItems: [
      { name: "Jurídico", example: "Análise de contratos, jurisprudência SCJN, compliance regulatório." },
      { name: "Financeiro", example: "Disposições CNBV, relatórios de risco, auditoria KYC." },
      { name: "Energia", example: "Normativas CRE, segurança NOM, gestão de ativos industriais." },
      { name: "Saúde", example: "Protocolos COFEPRIS, prontuário clínico, farmacovigilância." },
      { name: "Governo", example: "Processos do DOF, trâmites, atendimento cidadão especializado." },
      { name: "Manufatura", example: "Manuais de linha, controle de qualidade, OEE e manutenção." },
    ],
    deliverables: {
      badge: "ENTREGÁVEIS",
      title: "O que você recebe ao final do processo",
      subtitle: "Não apenas um modelo. Um ativo de conhecimento privado, documentado e pronto para operar.",
    },
    deliverableItems: [
      "SLM Lattice Séeb especializado e validado no seu domínio",
      "Implantação on-premise ou VPC privada dentro da sua infraestrutura",
      "Relatório de métricas: precisão, cobertura e latência",
      "Documentação técnica completa do modelo e do corpus",
      "Integração pronta para IA agêntica com Lattice Agents",
      "Protocolo de atualização e retreinamento incremental",
    ],
    deliverablesCta: "Iniciar diagnóstico",
    security: {
      title: "Soberania total de dados",
      desc: "O processo de fine-tuning, o corpus e o modelo resultante vivem exclusivamente na sua infraestrutura. A Sintérgica não retém, não copia nem tem acesso posterior ao modelo treinado. É seu.",
      items: [
        "Certificado de zero-retention no encerramento do projeto",
        "Conformidade LFPDPPP em todo o processo",
        "Compatível com políticas de segurança corporativa",
      ],
    },
    faq: {
      badge: "FAQ",
      title: "Perguntas sobre fine-tuning privado",
    },
    faqs: [
      { q: "Meus dados saem da minha empresa durante o treinamento?", a: "Não. O processo completo de fine-tuning ocorre na sua infraestrutura (on-premise) ou em uma VPC privada isolada dentro do seu provedor de nuvem atual. Nenhum dado seu passa por servidores da Sintérgica nem de terceiros. Conformidade total com LFPDPPP." },
      { q: "Quanto tempo leva o processo de fine-tuning?", a: "Depende do volume e qualidade do seu corpus. Um projeto padrão com corpus já estruturado pode ser concluído em 3 a 5 semanas. A fase de curadoria e validação humana é a mais variável. Damos uma estimativa precisa após o diagnóstico inicial." },
      { q: "Qual a diferença entre fine-tuning e RAG (Retrieval-Augmented Generation)?", a: "RAG busca documentos em tempo real e os injeta como contexto — útil para consultas sobre documentos em mudança. Fine-tuning modifica os pesos do modelo para que ele internalize seu domínio permanentemente: mais rápido, mais preciso, sem custo de tokens por contexto. Para IA agêntica de alta frequência, fine-tuning supera o RAG em desempenho e custo operacional." },
      { q: "Qual é o tamanho mínimo de corpus que preciso?", a: "Para obter resultados sólidos, recomendamos pelo menos 50.000 tokens de texto curado e validado no seu domínio (equivalente a ~100 páginas densas). Temos técnicas de data augmentation para organizações com corpus reduzido. O diagnóstico inicial determina a viabilidade exata." },
    ],
    cta: {
      title: "Sua IA mais inteligente que qualquer concorrente na sua indústria",
      subtitle: "O modelo que conhece sua empresa por dentro e por fora. Privado, veloz e pronto para agentes autônomos.",
      ctaLabel: "Solicitar diagnóstico de fine-tuning",
      trustSignals: ["Dados nunca expostos", "On-premise ou VPC privada", "Conformidade LFPDPPP"],
    },
  },
} as const;

const PAIN_POINTS_BASE = [
  { icon: AlertTriangle, color: "text-red-400", bg: "bg-red-500/[0.07]", border: "border-red-500/20" },
  { icon: Lock, color: "text-amber-400", bg: "bg-amber-500/[0.07]", border: "border-amber-500/20" },
  { icon: Zap, color: "text-orange-400", bg: "bg-orange-500/[0.07]", border: "border-orange-500/20" },
];

const PROCESS_STEPS_BASE = [
  { num: "01", icon: Database },
  { num: "02", icon: FlaskConical },
  { num: "03", icon: Brain },
  { num: "04", icon: Rocket },
];

const CORPUS_TYPES_BASE = [
  { icon: FileText },
  { icon: Scale },
  { icon: BookOpen },
  { icon: Building2 },
  { icon: HeartPulse },
  { icon: TrendingUp },
];

const INDUSTRIES_BASE = [
  { icon: Scale,      iconColor: "text-blue-400",     iconBg: "bg-blue-500/15",    border: "border-blue-500/25",    glow: "shadow-blue-500/20" },
  { icon: Building2,  iconColor: "text-emerald-400",  iconBg: "bg-emerald-500/15", border: "border-emerald-500/25", glow: "shadow-emerald-500/20" },
  { icon: Bolt,       iconColor: "text-amber-400",    iconBg: "bg-amber-500/15",   border: "border-amber-500/25",   glow: "shadow-amber-500/20" },
  { icon: HeartPulse, iconColor: "text-pink-400",     iconBg: "bg-pink-500/15",    border: "border-pink-500/25",    glow: "shadow-pink-500/20" },
  { icon: TrendingUp, iconColor: "text-purple-400",   iconBg: "bg-purple-500/15",  border: "border-purple-500/25",  glow: "shadow-purple-500/20" },
  { icon: Database,   iconColor: "text-cyan-400",     iconBg: "bg-cyan-500/15",    border: "border-cyan-500/25",    glow: "shadow-cyan-500/20" },
];


function FineTuningHero({ t }: { t: (typeof T)[keyof typeof T] }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const shouldReduce = useReducedMotion();

  const anim = (delay: number) =>
    shouldReduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: isInView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.6, delay },
        };

  return (
    <section
      className="relative flex min-h-screen flex-col overflow-hidden bg-[#050914]"
      aria-label="Fine-tuning privado con Lattice Séeb"
    >
      {/* Background image */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Image
          src="/images/ai-cloud-concept-with-lit-brain.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-55"
        />
        {/* Overlays: deep vignette + horizontal legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050914] via-[#050914]/60 to-[#050914]/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050914]/70 via-transparent to-[#050914]/30" />
        {/* Multi-color glows from palette: brand + purple + pink + sky */}
        <div className="absolute -top-32 -left-24 h-[520px] w-[520px] rounded-full bg-brand-accent/20 blur-[120px]" />
        <div className="absolute -top-20 right-0 h-[460px] w-[560px] rounded-full bg-purple-500/18 blur-[120px]" />
        <div className="absolute bottom-0 left-1/4 h-[400px] w-[500px] rounded-full bg-pink-500/12 blur-[110px]" />
        <div className="absolute bottom-10 right-10 h-[380px] w-[420px] rounded-full bg-sky-400/14 blur-[100px]" />
        {/* Subtle dot grid */}
        <div className="dot-grid absolute inset-0 opacity-20" />
      </div>

      <div
        ref={ref}
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center px-6 pt-32 pb-0 text-center"
      >
        {/* Brain mark — gradient brand→purple */}
        <m.div {...anim(0)} className="flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-gradient-to-br from-brand-accent/25 via-purple-500/20 to-pink-500/15 backdrop-blur-md">
            <Brain className="h-7 w-7 text-white" />
          </div>
        </m.div>

        {/* Badge with gradient dot chain */}
        <m.div {...anim(0.05)} className="mt-6 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-5 py-2 text-[0.75rem] font-mulish font-medium uppercase tracking-widest text-white/85 backdrop-blur-md">
            <span className="flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-accent-light animate-pulse" />
              <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
              <span className="h-1.5 w-1.5 rounded-full bg-pink-400" />
            </span>
            {t.hero.badge}
          </span>
        </m.div>

        {/* H1 */}
        <m.h1
          {...anim(0.1)}
          className="mt-7 font-proxima text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[4rem]"
        >
          {t.hero.title.split("\n").map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </m.h1>

        {/* Subtitle */}
        <m.p
          {...anim(0.2)}
          className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/75 text-pretty md:text-lg"
        >
          {t.hero.subtitle}
        </m.p>

        {/* CTAs */}
        <m.div
          {...anim(0.3)}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex h-14 items-center gap-2 rounded-full bg-brand-accent px-9 text-[1rem] font-mulish font-medium text-white shadow-xl shadow-brand-accent/30 transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02] hover:bg-brand-accent-light hover:shadow-brand-accent/40"
          >
            {t.hero.ctaLabel}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#proceso"
            className="inline-flex h-14 items-center justify-center rounded-full border border-white/20 bg-white/8 px-8 text-[1rem] font-mulish font-medium text-white backdrop-blur-md transition-colors hover:bg-white/15"
          >
            {t.hero.ctaSecondaryLabel}
          </a>
        </m.div>

        {/* Trust signals — cycling through palette */}
        <m.div
          {...anim(0.4)}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
        >
          {t.hero.trustSignals.map((signal, i) => {
            const colors = [
              "text-brand-accent-light",
              "text-purple-300",
              "text-pink-300",
              "text-sky-300",
            ];
            return (
              <span key={signal} className="flex items-center gap-1.5 text-sm text-white/70">
                <CheckCircle className={`h-3.5 w-3.5 shrink-0 ${colors[i % colors.length]}`} />
                {signal}
              </span>
            );
          })}
        </m.div>

      </div>
    </section>
  );
}

export function FineTuningContent() {
  const locale = useLocale();
  const t = T[locale] ?? T.es;

  const processRef = useRef<HTMLDivElement>(null);
  const processInView = useInView(processRef, { once: true, margin: "-60px" });
  const compRef = useRef<HTMLDivElement>(null);
  const compInView = useInView(compRef, { once: true, margin: "-60px" });
  const shouldReduce = useReducedMotion();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <LazyMotion features={domAnimation}>
      <>
        <FineTuningHero t={t} />

        {/* Problem Section */}
        <section className="bg-brand-surface dark:bg-brand-deep py-20 md:py-28 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              badge={t.problem.badge}
              title={t.problem.title}
              subtitle={t.problem.subtitle}
              centered
            />
            <div className="mt-14 grid gap-6 sm:grid-cols-3">
              {PAIN_POINTS_BASE.map((p, i) => {
                const Icon = p.icon;
                return (
                  <m.div
                    key={i}
                    initial={shouldReduce ? false : { opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: shouldReduce ? 0 : 0.5, delay: i * 0.1 }}
                    className={`rounded-2xl border ${p.border} ${p.bg} p-7`}
                  >
                    <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-surface dark:bg-brand-midnight/40`}>
                      <Icon className={`h-5 w-5 ${p.color}`} />
                    </div>
                    <h3 className="mb-2 font-proxima font-semibold text-brand-midnight dark:text-brand-white">{t.painPoints[i].title}</h3>
                    <p className="text-sm leading-relaxed text-brand-midnight/55 dark:text-brand-white/55">{t.painPoints[i].description}</p>
                  </m.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* What is Séeb fine-tuning */}
        <section className="relative overflow-hidden bg-brand-surface dark:bg-brand-midnight py-20 md:py-28 px-4 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-brand-accent/5 blur-[120px]" />
          <div className="relative mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <m.div
                initial={shouldReduce ? false : { opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: shouldReduce ? 0 : 0.7 }}
              >
                <span className="mb-4 inline-block rounded-full border border-brand-accent/20 bg-brand-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand-accent">
                  {t.seeb.badge}
                </span>
                <h2 className="font-proxima text-3xl font-bold text-brand-midnight dark:text-brand-white sm:text-4xl">
                  {t.seeb.titleLine1}<br />
                  <span className="text-brand-accent">{t.seeb.titleLine2}</span>
                </h2>
                <p className="mt-5 text-base leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">
                  {t.seeb.desc1}
                </p>
                <p className="mt-4 text-base leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">
                  {t.seeb.desc2}
                </p>
                <div className="mt-8 flex flex-col gap-3">
                  {t.seeb.features.map((feat) => (
                    <div key={feat} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                      <span className="text-sm text-brand-midnight/70 dark:text-brand-white/70">{feat}</span>
                    </div>
                  ))}
                </div>
              </m.div>

              {/* Corpus types card */}
              <m.div
                initial={shouldReduce ? false : { opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: shouldReduce ? 0 : 0.7, delay: 0.1 }}
                className="rounded-3xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep/60 p-8 backdrop-blur-sm"
              >
                <p className="mb-6 text-xs font-bold uppercase tracking-wider text-brand-accent">
                  {t.seeb.corpusTitle}
                </p>
                <div className="flex flex-col gap-4">
                  {CORPUS_TYPES_BASE.map((c, i) => {
                    const Icon = c.icon;
                    return (
                      <div key={i} className="flex items-center gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-accent/10">
                          <Icon className="h-4 w-4 text-brand-accent" />
                        </div>
                        <span className="text-sm text-brand-midnight/75 dark:text-brand-white/75">{t.corpusLabels[i]}</span>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-7 rounded-xl border border-brand-accent/20 bg-brand-accent/[0.06] px-5 py-4">
                  <p className="text-xs text-brand-midnight/50 dark:text-brand-white/50">
                    {t.seeb.corpusMinimum}
                  </p>
                </div>
              </m.div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="proceso" className="bg-brand-surface dark:bg-brand-deep py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            <SectionHeader
              badge={t.process.badge}
              title={t.process.title}
              subtitle={t.process.subtitle}
              centered
            />
            <div ref={processRef} className="mt-16 flex flex-col gap-6">
              {PROCESS_STEPS_BASE.map((step, i) => {
                const Icon = step.icon;
                return (
                  <m.div
                    key={step.num}
                    initial={shouldReduce ? false : { opacity: 0, x: -20 }}
                    animate={processInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: shouldReduce ? 0 : 0.5, delay: i * 0.12 }}
                    className="group relative flex gap-6 rounded-2xl border border-brand-midnight/5 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-midnight p-7 transition-all hover:border-brand-accent/20 hover:bg-brand-midnight/80"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-accent/10 transition-colors group-hover:bg-brand-accent/20">
                        <Icon className="h-5 w-5 text-brand-accent" />
                      </div>
                      {i < PROCESS_STEPS_BASE.length - 1 && (
                        <div className="h-full w-px bg-brand-white dark:bg-brand-midnight/5" />
                      )}
                    </div>
                    <div className="pt-1">
                      <span className="text-xs font-bold tracking-widest text-brand-accent/60">{t.process.stepLabel} {step.num}</span>
                      <h3 className="mt-1 text-lg font-proxima font-semibold text-brand-midnight dark:text-brand-white">{t.processSteps[i].title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-brand-midnight/55 dark:text-brand-white/55">{t.processSteps[i].description}</p>
                      <p className="mt-3 text-xs font-medium text-brand-accent/70">{t.processSteps[i].detail}</p>
                    </div>
                  </m.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Comparison — Versus layout */}
        <section className="relative overflow-hidden bg-brand-surface dark:bg-brand-midnight py-24 px-4 sm:px-6 lg:px-8">
          {/* Split glows: red for generic, brand for Séeb */}
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute left-0 top-1/2 h-[420px] w-[420px] -translate-x-1/3 -translate-y-1/2 rounded-full bg-red-500/5 blur-[120px]" />
            <div className="absolute right-0 top-1/2 h-[420px] w-[420px] translate-x-1/3 -translate-y-1/2 rounded-full bg-brand-accent/10 blur-[120px]" />
          </div>

          <div className="relative mx-auto max-w-5xl">
            <SectionHeader
              badge={t.comparison.badge}
              title={t.comparison.title}
              subtitle={t.comparison.subtitle}
              centered
            />

            {/* Comparison table */}
            <m.div
              ref={compRef}
              initial={shouldReduce ? false : { opacity: 0, y: 20 }}
              animate={compInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: shouldReduce ? 0 : 0.6 }}
              className="mt-14 overflow-hidden rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10"
            >
              {/* Header row */}
              <div className="grid grid-cols-[1.4fr_1fr_1fr]">
                <div className="border-b border-brand-midnight/10 dark:border-brand-white/10 bg-brand-midnight/[0.02] dark:bg-brand-white/[0.02] px-5 py-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-midnight/40 dark:text-brand-white/35">
                    {t.comparison.colCapability}
                  </span>
                </div>
                <div className="border-b border-l border-red-500/15 bg-red-500/[0.04] px-5 py-4">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 shrink-0 text-red-400" />
                    <span className="text-sm font-bold text-brand-midnight dark:text-brand-white">{t.comparison.colGeneric}</span>
                  </div>
                </div>
                <div className="relative overflow-hidden border-b border-l border-brand-accent/25 bg-gradient-to-b from-brand-accent/15 to-brand-accent/8 px-5 py-4">
                  <div className="pointer-events-none absolute -top-6 -right-6 h-20 w-20 rounded-full bg-brand-accent/25 blur-2xl" />
                  <div className="relative flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-brand-accent to-purple-500">
                      <Brain className="h-3.5 w-3.5 text-white" />
                    </div>
                    <span className="text-sm font-bold text-brand-accent">{t.comparison.colSeeb}</span>
                  </div>
                </div>
              </div>

              {/* Data rows */}
              {t.comparisonRows.map((row, i) => (
                <m.div
                  key={row.feature}
                  initial={shouldReduce ? false : { opacity: 0 }}
                  animate={compInView ? { opacity: 1 } : {}}
                  transition={{ duration: shouldReduce ? 0 : 0.3, delay: 0.3 + i * 0.05 }}
                  className={`grid grid-cols-[1.4fr_1fr_1fr] ${i < t.comparisonRows.length - 1 ? "border-b border-brand-midnight/8 dark:border-brand-white/8" : ""} ${i % 2 === 1 ? "bg-brand-midnight/[0.015] dark:bg-brand-white/[0.02]" : ""}`}
                >
                  <div className="flex items-center px-5 py-4">
                    <span className="text-sm text-brand-midnight/65 dark:text-brand-white/60">{row.feature}</span>
                  </div>
                  <div className="flex items-center border-l border-red-500/10 px-5 py-4">
                    <span className="text-sm font-medium text-red-500/90 dark:text-red-400">{row.generic}</span>
                  </div>
                  <div className="flex items-center gap-2 border-l border-brand-accent/15 bg-brand-accent/[0.025] px-5 py-4">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-brand-accent" />
                    <span className="text-sm font-semibold text-brand-accent">{row.seeb}</span>
                  </div>
                </m.div>
              ))}
            </m.div>
          </div>
        </section>

        {/* Industries */}
        <section className="bg-brand-surface dark:bg-brand-deep py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <SectionHeader
              badge={t.industries.badge}
              title={t.industries.title}
              subtitle={t.industries.subtitle}
              centered
            />
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {INDUSTRIES_BASE.map((ind, i) => {
                const Icon = ind.icon;
                return (
                  <m.div
                    key={i}
                    initial={shouldReduce ? false : { opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: shouldReduce ? 0 : 0.5, delay: i * 0.08 }}
                    className={`group relative overflow-hidden rounded-2xl border ${ind.border} bg-brand-surface dark:bg-brand-midnight p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${ind.glow}`}
                  >
                    {/* Color glow on hover */}
                    <div className={`pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full ${ind.iconBg} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`} />
                    <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl ${ind.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                      <Icon className={`h-5 w-5 ${ind.iconColor}`} />
                    </div>
                    <h3 className="font-proxima font-semibold text-brand-midnight dark:text-brand-white">{t.industryItems[i].name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-brand-midnight/55 dark:text-brand-white/55">{t.industryItems[i].example}</p>
                  </m.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="relative overflow-hidden bg-brand-surface dark:bg-brand-midnight py-20 md:py-28 px-4 sm:px-6 lg:px-8">
          <div className="pointer-events-none absolute left-0 top-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-brand-accent/5 blur-[120px]" />
          <div className="relative mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <SectionHeader
                  badge={t.deliverables.badge}
                  title={t.deliverables.title}
                  subtitle={t.deliverables.subtitle}
                />
                <ul className="mt-10 flex flex-col gap-4">
                  {t.deliverableItems.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" />
                      <span className="text-sm leading-relaxed text-brand-midnight/70 dark:text-brand-white/70">{d}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 group inline-flex items-center gap-2 rounded-full bg-brand-accent px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-accent/20 transition-all hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-brand-accent/30"
                >
                  {t.deliverablesCta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              {/* Security callout */}
              <m.div
                initial={shouldReduce ? false : { opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: shouldReduce ? 0 : 0.6 }}
                className="rounded-3xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep/60 p-8 backdrop-blur-sm"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-accent/10">
                  <Shield className="h-6 w-6 text-brand-accent" />
                </div>
                <h3 className="text-xl font-proxima font-semibold text-brand-midnight dark:text-brand-white">{t.security.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">
                  {t.security.desc}
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  {t.security.items.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" />
                      <span className="text-xs text-brand-midnight/60 dark:text-brand-white/60">{item}</span>
                    </div>
                  ))}
                </div>
              </m.div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-brand-surface dark:bg-brand-deep py-24 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <SectionHeader
              badge={t.faq.badge}
              title={t.faq.title}
              centered
            />
            <div className="mt-12 flex flex-col gap-4">
              {t.faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`border ${openFaq === i ? "border-brand-accent/30 bg-brand-accent/5" : "border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-midnight"} rounded-2xl overflow-hidden transition-colors`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between p-6 text-left"
                  >
                    <span className="pr-4 text-sm font-bold text-brand-midnight dark:text-brand-white">{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-brand-midnight/40 dark:text-brand-white/40 transition-transform duration-300 ${openFaq === i ? "rotate-180 text-brand-accent" : ""}`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === i ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                  >
                    <p className="p-6 pt-0 text-sm leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">{faq.a}</p>
                  </div>
                </div>
              ))}
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
