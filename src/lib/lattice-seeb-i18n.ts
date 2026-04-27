export type LangCode = "es" | "en" | "pt";

export interface SeebThesis {
  code: string;
  title: string;
  stat: string;
  statLabel: string;
  desc: string;
}

export interface SeebModel {
  id: string;
  name: string;
  corpus: string[];
  useCases: string[];
}

export interface SeebFAQ {
  q: string;
  a: string;
}

export interface SeebI18nContent {
  meta: { title: string; description: string };
  hero: {
    badge: string;
    h1: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustSignals: string[];
  };
  whySLMs: {
    badge: string;
    h2: string;
    citation: string;
    theses: SeebThesis[];
  };
  models: {
    badge: string;
    h2: string;
    subtitle: string;
    models: SeebModel[];
  };
  distillation: {
    badge: string;
    h2: string;
    subtitle: string;
    naatLabel: string;
    naatParams: string;
    naatDesc: string;
    processLabel: string;
    seebParams: string;
  };
  faq: {
    badge: string;
    h2: string;
    questions: SeebFAQ[];
  };
  cta: {
    badge: string;
    h2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
}

/* ── Español (default) ──────────────────────────────────────── */

const es: SeebI18nContent = {
  meta: {
    title: "Lattice Séeb — Modelos especializados por industria | Sintérgica AI",
    description:
      "SLMs especializados por industria, destilados de Lattice Na'at. IA privada para sectores regulados en México y LATAM.",
  },
  hero: {
    badge: "Lattice Séeb · Modelos Especializados",
    h1: "Lattice Séeb: Modelos expertos para cada industria",
    subtitle:
      "Small Language Models especializados en IA Agéntica, destilados desde Lattice Na'at, entrenados con datasets curados por sector.",
    ctaPrimary: "Agenda un diagnóstico",
    ctaSecondary: "Ver modelos disponibles",
    trustSignals: [
      "Especializados en IA Agéntica",
      "6 industrias especializadas",
      "Despliegue: API, VPC u On-premise",
      "Sin dependencia de Wi-Fi",
    ],
  },
  whySLMs: {
    badge: "Por qué SLMs",
    h2: "Los SLMs son el futuro de la IA agéntica",
    citation:
      'Basado en "Small Language Models are the Future of Agentic AI" — Belcak et al., NVIDIA (2025)',
    theses: [
      {
        code: "V1",
        title: "Especializados en IA Agéntica",
        stat: "NVIDIA",
        statLabel: "Benchmark",
        desc: "El estándar para el razonamiento autónomo. Según estudios de NVIDIA (2025), en tareas agénticas de dominio específico, los SLMs superan en precisión y consistencia a modelos genéricos masivos.",
      },
      {
        code: "V2",
        title: "Adaptación a la infraestructura nacional",
        stat: "10-30×",
        statLabel: "menos energía",
        desc: "Requieren de 10x a 30x menos energía y hardware. Permiten respuestas instantáneas operando de manera local, eliminando la dependencia de Wi-Fi y los costos por consumo de datos.",
      },
      {
        code: "V3",
        title: "Flexibilidad de costos y despliegue",
        stat: "Cero",
        statLabel: "costos extras",
        desc: "Accede vía API pagando por token, o adquiere la licencia del modelo para despliegue en VPC/On-premise. Al licenciarlo para tu infraestructura, eliminas por completo los costos de tokens y garantizas que tus datos nunca salgan.",
      },
    ],
  },
  models: {
    badge: "Modelos disponibles",
    h2: "Un modelo entrenado para cada sector",
    subtitle:
      "Cada Lattice Séeb conoce las regulaciones, la terminología y los procesos de su industria.",
    models: [
      {
        id: "legal",
        name: "Lattice Séeb Legal",
        corpus: ["Código Civil Federal", "Código de Comercio", "Jurisprudencia SCJN", "Ley de Amparo", "DOF"],
        useCases: ["Revisión contractual automatizada", "Monitoreo del DOF", "Análisis de jurisprudencia", "Due diligence documental"],
      },
      {
        id: "gobierno",
        name: "Lattice Séeb Gobierno",
        corpus: ["LAASSP y CompraNet", "Constituciones y leyes estatales", "Reglamentos municipales", "Procesos legislativos y judiciales", "LGTAIP y transparencia local"],
        useCases: ["Licitaciones federales, estatales y municipales", "Análisis de iniciativas legislativas", "Soporte a procesos judiciales", "Respuestas a LGTAIP y leyes locales", "Redacción de oficios y dictámenes"],
      },
      {
        id: "logistica",
        name: "Lattice Séeb Logística",
        corpus: ["Normativa SAT", "Ley Aduanera", "Fracciones TIGIE", "Normativa 3PL", "Reglas de comercio exterior"],
        useCases: ["Clasificación arancelaria TIGIE", "Validación de pedimentos", "Análisis de regulaciones", "Optimización de rutas"],
      },
      {
        id: "energia",
        name: "Lattice Séeb Energía",
        corpus: ["Normativa CRE", "Regulación CFE y PEMEX", "NOMs energéticas", "Seguridad industrial"],
        useCases: ["Análisis de contratos de suministro", "Cumplimiento de NOMs", "Regulación CRE para permisos", "Monitoreo regulatorio"],
      },
      {
        id: "salud",
        name: "Lattice Séeb Salud",
        corpus: ["Normativa COFEPRIS", "Protocolos clínicos", "NOMs de salud", "Farmacovigilancia", "Terminología médica"],
        useCases: ["Análisis de expedientes clínicos", "Verificación COFEPRIS", "Farmacovigilancia", "Análisis de autorizaciones sanitarias"],
      },
      {
        id: "financiero",
        name: "Lattice Séeb Financiero",
        corpus: ["Disposiciones CNBV", "Normativa CNSF", "Regulación SAT/CFDI", "KYC/AML", "Normativa PLD"],
        useCases: ["Auditoría y detección PLD", "Reportes CNBV y UIF", "Análisis de CFDIs", "Due diligence financiero"],
      },
    ],
  },
  distillation: {
    badge: "Proceso de destilación",
    h2: "De Na'at a Séeb: precisión industrial a escala",
    subtitle:
      "Lattice Na'at es el modelo base. A través de destilación supervisada con corpus curado, generamos Séeb: modelos expertos por industria optimizados para IA agéntica.",
    naatLabel: "Lattice Na'at",
    naatParams: "Modelo fundacional de frontera",
    naatDesc:
      "El modelo fundacional de mayor escala desarrollado en LATAM. Base de conocimiento general, razonamiento complejo y comprensión de lenguaje especializado.",
    processLabel: "Destilación supervisada · corpus curado por industria",
    seebParams: "Alta velocidad · Bajo cómputo",
  },
  faq: {
    badge: "Preguntas frecuentes",
    h2: "Resuelve tus dudas sobre Lattice Séeb",
    questions: [
      {
        q: "¿Qué significa Séeb?",
        a: "Séeb significa \"rápido\" o \"veloz\" en lengua maya (pronunciado se'eb). Elegimos este nombre porque estos modelos pequeños (SLMs de 4B y 9B parámetros) están diseñados específicamente para operar con baja latencia y alta velocidad, haciéndolos ideales para arquitecturas de IA agéntica donde se requieren decenas de llamadas por minuto.",
      },
      {
        q: "¿Se pueden crear modelos Séeb para industrias no listadas?",
        a: "Sí. El proceso de destilación de Lattice Séeb puede adaptarse a cualquier vertical con corpus normativo disponible. Trabajamos contigo para curar y validar el dataset específico de tu industria. Contáctanos para iniciar un diagnóstico.",
      },
      {
        q: "¿Qué son los datasets curados de Lattice Séeb?",
        a: "Es el corpus de entrenamiento seleccionado, limpiado y validado manualmente por expertos en la materia. Incluye normativas vigentes, jurisprudencias, protocolos y documentación sectorial. La calidad del dataset determina la precisión del modelo.",
      },
      {
        q: "¿Lattice Séeb opera on-premise?",
        a: "Sí. Ofrecemos acceso vía API con cobro por token, pero Lattice Séeb está optimizado para ejecutarse en tu infraestructura (VPC u On-premise). Al pagar la licencia del modelo para uso local, eliminas los costos por token y tus datos nunca salen de tu entorno.",
      },
      {
        q: "¿Cuál es la diferencia entre Lattice Séeb y un LLM genérico?",
        a: "Lattice Séeb está entrenado con corpus normativo de México y LATAM, opera on-premise y está optimizado para tareas industriales específicas. Un LLM genérico no conoce el DOF, la SCJN ni las disposiciones CRE con la profundidad de Séeb.",
      },
    ],
  },
  cta: {
    badge: "Siguiente paso",
    h2: "Agenda un diagnóstico para tu industria",
    subtitle:
      "Identifica qué modelo de Lattice Séeb es el adecuado para tus procesos y recibe una propuesta de implementación con ROI estimado.",
    ctaPrimary: "Agendar diagnóstico",
    ctaSecondary: "Ver arquitectura de Lattice",
  },
};

/* ── English ────────────────────────────────────────────────── */

const en: SeebI18nContent = {
  meta: {
    title: "Lattice Séeb — Industry-specialized AI models | Sintérgica AI",
    description:
      "Specialized SLMs per industry, distilled from Lattice Na'at. Private AI for regulated sectors in Mexico and LATAM.",
  },
  hero: {
    badge: "Lattice Séeb · Specialized Models",
    h1: "Lattice Séeb: Expert models for every industry",
    subtitle:
      "Specialized Small Language Models for Agentic AI, distilled from Lattice Na'at, trained with curated sector-specific datasets.",
    ctaPrimary: "Schedule a diagnostic",
    ctaSecondary: "View available models",
    trustSignals: [
      "Specialized in Agentic AI",
      "6 specialized industries",
      "Deployment: API, VPC, or On-premise",
      "Zero Wi-Fi reliance",
    ],
  },
  whySLMs: {
    badge: "Why SLMs",
    h2: "Small Language Models are the future of agentic AI",
    citation:
      'Based on "Small Language Models are the Future of Agentic AI" — Belcak et al., NVIDIA (2025)',
    theses: [
      {
        code: "V1",
        title: "Specialized in Agentic AI",
        stat: "NVIDIA",
        statLabel: "Benchmark",
        desc: "The standard for autonomous reasoning. According to NVIDIA research (2025), for domain-specific agentic tasks, SLMs outperform massive generic models in accuracy and consistency.",
      },
      {
        code: "V2",
        title: "Adapted to national infrastructure",
        stat: "10-30×",
        statLabel: "less energy",
        desc: "They require 10x to 30x less energy and hardware. This enables instant responses operating locally, eliminating Wi-Fi reliance and mobile data consumption costs.",
      },
      {
        code: "V3",
        title: "Cost and deployment flexibility",
        stat: "Zero",
        statLabel: "extra costs",
        desc: "Access via API paying per token, or acquire the model license for VPC/On-premise deployment. By licensing it for your infrastructure, you completely eliminate token costs and ensure your data stays private.",
      },
    ],
  },
  models: {
    badge: "Available models",
    h2: "One model trained for each sector",
    subtitle:
      "Each Lattice Séeb knows the regulations, terminology and processes of its industry.",
    models: es.models.models,
  },
  distillation: {
    badge: "Distillation process",
    h2: "From Na'at to Séeb: industrial precision at scale",
    subtitle:
      "Lattice Na'at is the base model. Through supervised distillation with curated corpus, we generate Séeb: industry expert models optimized for agentic AI.",
    naatLabel: "Lattice Na'at",
    naatParams: "Frontier foundational model",
    naatDesc:
      "The first AI model developed in Mexico. General knowledge base, complex reasoning, and specialized language understanding.",
    processLabel: "Supervised distillation · industry-curated corpus",
    seebParams: "High speed · Low compute",
  },
  faq: {
    badge: "Frequently asked questions",
    h2: "Solve your doubts about Lattice Séeb",
    questions: [
      {
        q: "What does Séeb mean?",
        a: "Séeb means \"fast\" or \"swift\" in the Mayan language (pronounced se'eb). We chose this name because these small models (4B and 9B parameter SLMs) are specifically designed to operate with low latency and high speed, making them ideal for agentic AI architectures where dozens of calls per minute are required.",
      },
      {
        q: "Can Séeb models be created for unlisted industries?",
        a: "Yes. The Lattice Séeb distillation process can be adapted to any vertical with available regulatory corpus. We work with you to curate and validate the dataset specific to your industry. Contact us to start a diagnostic.",
      },
      {
        q: "What are Lattice Séeb curated datasets?",
        a: "It is the training corpus selected, cleaned, and manually validated by subject-matter experts. It includes current regulations, case law, protocols, and sector documentation. Dataset quality determines model accuracy.",
      },
      {
        q: "Does Lattice Séeb run on-premise?",
        a: "Yes. We offer API access with per-token billing, but Lattice Séeb is optimized to run on your infrastructure (VPC or On-premise). By licensing the model for local use, you eliminate token costs and your data never leaves your environment.",
      },
      {
        q: "What is the difference between Lattice Séeb and a generic LLM?",
        a: "Lattice Séeb is trained with Mexican and LATAM regulatory corpus, runs on-premise, and is optimized for specific industrial tasks. A generic LLM does not know the DOF, SCJN, or CRE regulations with the depth of Séeb.",
      },
    ],
  },
  cta: {
    badge: "Next step",
    h2: "Schedule a diagnostic for your industry",
    subtitle:
      "Identify which Lattice Séeb model fits your processes and receive an implementation proposal with estimated ROI.",
    ctaPrimary: "Schedule diagnostic",
    ctaSecondary: "View Lattice architecture",
  },
};

/* ── Português BR ───────────────────────────────────────────── */

const pt: SeebI18nContent = {
  meta: {
    title: "Lattice Séeb — Modelos de IA especializados por setor | Sintérgica AI",
    description:
      "SLMs especializados por setor, destilados do Lattice Na'at. IA privada para setores regulados no México e LATAM.",
  },
  hero: {
    badge: "Lattice Séeb · Modelos Especializados",
    h1: "Lattice Séeb: Modelos especialistas para cada setor",
    subtitle:
      "Small Language Models especializados em IA Agêntica, destilados do Lattice Na'at, treinados com datasets curados por setor.",
    ctaPrimary: "Agendar diagnóstico",
    ctaSecondary: "Ver modelos disponíveis",
    trustSignals: [
      "Especializados em IA Agêntica",
      "6 setores especializados",
      "Implantação: API, VPC ou On-premise",
      "Sem dependência de Wi-Fi",
    ],
  },
  whySLMs: {
    badge: "Por que SLMs",
    h2: "Os SLMs são o futuro da IA agêntica",
    citation:
      'Baseado em "Small Language Models are the Future of Agentic AI" — Belcak et al., NVIDIA (2025)',
    theses: [
      {
        code: "V1",
        title: "Especializados em IA Agêntica",
        stat: "NVIDIA",
        statLabel: "Benchmark",
        desc: "O padrão para raciocínio autônomo. Segundo estudos da NVIDIA (2025), em tarefas agênticas de domínio específico, os SLMs superam modelos genéricos massivos em precisão e consistência.",
      },
      {
        code: "V2",
        title: "Adaptação à infraestrutura nacional",
        stat: "10-30×",
        statLabel: "menos energia",
        desc: "Requerem de 10x a 30x menos energia e hardware. Permitem respostas instantâneas operando localmente, eliminando a dependência de Wi-Fi e os custos por consumo de dados.",
      },
      {
        code: "V3",
        title: "Flexibilidade de custos e implantação",
        stat: "Zero",
        statLabel: "custos extras",
        desc: "Acesse via API pagando por token, ou adquira a licença do modelo para implantação em VPC/On-premise. Ao licenciá-lo para sua infraestrutura, você elimina totalmente os custos de tokens e garante que seus dados nunca saiam.",
      },
    ],
  },
  models: {
    badge: "Modelos disponíveis",
    h2: "Um modelo treinado para cada setor",
    subtitle:
      "Cada Lattice Séeb conhece as regulamentações, a terminologia e os processos do seu setor.",
    models: es.models.models,
  },
  distillation: {
    badge: "Processo de destilação",
    h2: "De Na'at a Séeb: precisão industrial em escala",
    subtitle:
      "Lattice Na'at é o modelo base. Por meio de destilação supervisionada com corpus curado, geramos o Séeb: modelos especialistas por setor otimizados para IA agêntica.",
    naatLabel: "Lattice Na'at",
    naatParams: "Modelo fundacional de fronteira",
    naatDesc:
      "O primeiro modelo de IA desenvolvido no México. Base de conhecimento geral, raciocínio complexo e compreensão de linguagem especializada.",
    processLabel: "Destilação supervisionada · corpus curado por setor",
    seebParams: "Alta velocidade · Baixa computação",
  },
  faq: {
    badge: "Perguntas frequentes",
    h2: "Tire suas dúvidas sobre o Lattice Séeb",
    questions: [
      {
        q: "O que significa Séeb?",
        a: "Séeb significa \"rápido\" ou \"veloz\" no idioma maia (pronuncia-se se'eb). Escolhemos este nome porque esses modelos pequenos (SLMs de 4B e 9B parâmetros) são projetados especificamente para operar com baixa latência e alta velocidade, tornando-os ideais para arquiteturas de IA agêntica onde dezenas de chamadas por minuto são necessárias.",
      },
      {
        q: "É possível criar modelos Séeb para indústrias não listadas?",
        a: "Sim. O processo de destilação do Lattice Séeb pode ser adaptado a qualquer vertical com corpus normativo disponível. Trabalhamos com você para curar e validar o dataset específico do seu setor. Entre em contato para iniciar um diagnóstico.",
      },
      {
        q: "O que são os datasets curados do Lattice Séeb?",
        a: "É o corpus de treinamento selecionado, limpo e validado manualmente por especialistas. Inclui regulamentações vigentes, jurisprudências, protocolos e documentação setorial. A qualidade do dataset determina a precisão do modelo.",
      },
      {
        q: "O Lattice Séeb opera on-premise?",
        a: "Sim. Oferecemos acesso via API com cobrança por token, mas o Lattice Séeb é otimizado para ser executado na sua infraestrutura (VPC ou On-premise). Ao pagar a licença do modelo para uso local, você elimina os custos por token e seus dados nunca saem do seu ambiente.",
      },
      {
        q: "Qual é a diferença entre o Lattice Séeb e um LLM genérico?",
        a: "O Lattice Séeb é treinado com corpus regulatório do México e LATAM, opera on-premise e é otimizado para tarefas industriais específicas. Um LLM genérico não conhece o DOF, a SCJN nem as disposições CRE com a profundidade do Séeb.",
      },
    ],
  },
  cta: {
    badge: "Próximo passo",
    h2: "Agende um diagnóstico para o seu setor",
    subtitle:
      "Identifique qual modelo do Lattice Séeb é adequado para seus processos e receba uma proposta de implementação com ROI estimado.",
    ctaPrimary: "Agendar diagnóstico",
    ctaSecondary: "Ver arquitetura do Lattice",
  },
};

/* ── Export ─────────────────────────────────────────────────── */

export const LATTICE_SEEB_I18N: Record<LangCode, SeebI18nContent> = { es, en, pt };

export const SEEB_DEFAULT = es;
