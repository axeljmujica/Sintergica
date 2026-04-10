export type LangCode = "es" | "en" | "pt";

export interface ResearchLine {
  num: string;
  title: string;
  desc: string;
  category: "modelos" | "datos" | "evaluacion" | "razonamiento";
}

export interface RoadmapPhase {
  status: string;
  statusVariant: "active" | "dev" | "goal";
  params: string;
  label: string;
  arch?: string;
  year: string;
  desc: string;
}

export interface CollabAudience {
  id: string;
  title: string;
  subtitle: string;
  items: string[];
}

export interface LabsI18nContent {
  meta: { title: string; description: string };
  hero: {
    badge: string;
    h1: string;
    subtitle: string;
    trustSignals: string[];
    ctaPrimary: string;
    ctaSecondary: string;
  };
  impact: {
    title: string;
    stats: { value: string; label: string }[];
    features: { title: string; desc: string; url?: string }[];
  };
  featuredResearch: {
    badge: string;
    h2: string;
    papers: {
      tag: string;
      title: string;
      url: string;
      image?: string;
      date?: string;
      featured?: boolean;
    }[];
  };
  researchLines: {
    badge: string;
    h2: string;
    subtitle: string;
    categoryLabels: Record<ResearchLine["category"], string>;
    lines: ResearchLine[];
  };
  roadmap: {
    badge: string;
    h2: string;
    subtitle: string;
    phases: RoadmapPhase[];
  };
  collaborate: {
    badge: string;
    h2: string;
    subtitle: string;
    audiences: CollabAudience[];
    ctaLabel: string;
  };
  links: {
    badge: string;
    h2: string;
    subtitle: string;
    github: { label: string; url: string; desc: string; cta: string };
    huggingface: { label: string; url: string; desc: string; cta: string };
  };
}

/* ── Español (default) ──────────────────────────────────────── */

const es: LabsI18nContent = {
  meta: {
    title: "Sintérgica Labs — Investigación de frontera en IA desde México | Sintérgica AI",
    description:
      "Laboratorio de investigación en IA sin fines de lucro. Modelos, benchmarks y NLP para México y LATAM. Lattice Na'at: 1T parámetros.",
  },
  hero: {
    badge: "Sintérgica Labs · Investigación Abierta",
    h1: "Sintérgica Labs: Investigación de frontera desde México",
    subtitle:
      "Laboratorio de investigación sin fines de lucro. Posicionamos a México y América Latina en la frontera del conocimiento en IA.",
    trustSignals: [
      "Sin fines de lucro",
      "Open research",
      "México y LATAM",
      "Colaboración abierta",
    ],
    ctaPrimary: "Colaborar con Labs",
    ctaSecondary: "Ver líneas de investigación",
  },
  impact: {
    title: "Avanzando colectivamente la ciencia de la IA en LATAM",
    stats: [
      { value: "4", label: "modelos liberados" },
      { value: "10+", label: "papers e investigaciones" },
      { value: "5+", label: "socios académicos" },
    ],
    features: [
      { title: "Iniciativa de Ciencia Abierta", desc: "A través de la creación de una comunidad de ciencia abierta y la liberación de nuestros modelos, estamos empoderando la próxima era de progreso tecnológico en la región.", url: "https://huggingface.co/sintergica" },
      { title: "Privacidad de Datos", desc: "Curación de datasets de alta calidad con contexto normativo, cultural y lingüístico de México y América Latina para entrenar modelos sin sesgo WEIRD." },
      { title: "Colaboración Institucional", desc: "Proveemos acceso a infraestructura y modelos a socios académicos e instituciones cívicas para proyectos que impulsen un impacto real a través de la IA." }
    ],
  },
  featuredResearch: {
    badge: "Nuestra Investigación",
    h2: "Publicaciones y Modelos",
    papers: [
      { tag: "Nuevo Modelo", title: "Lattice Na'at 1T", url: "/investigacion/lattice-naat", date: "2025", featured: true },
      { tag: "Paper", title: "Mitigación de sesgo WEIRD en LLMs", url: "#", date: "Próximamente" },
      { tag: "Dataset", title: "Corpus Normativo Mexicano V1", url: "https://huggingface.co/sintergica", date: "2024" },
      { tag: "Evaluación", title: "MMLU-LatAm: Evaluando contexto regional", url: "#", date: "Próximamente" },
      { tag: "Modelo", title: "Lattice Séeb 9B", url: "#", date: "2025" }
    ],
  },
  researchLines: {
    badge: "Líneas de investigación",
    h2: "Nueve líneas de frontera",
    subtitle:
      "Investigación aplicada enfocada en desafíos reales de IA para contextos no anglosajones.",
    categoryLabels: {
      modelos: "Modelos eficientes",
      datos: "Datos y lenguas",
      evaluacion: "Evaluación",
      razonamiento: "Razonamiento",
    },
    lines: [
      {
        num: "01",
        title: "Destilación eficiente de conocimiento",
        desc: "Transferencia de capacidades de modelos grandes (1T+) a modelos compactos sin pérdida significativa de rendimiento.",
        category: "modelos",
      },
      {
        num: "02",
        title: "Ajuste fino con bajo costo computacional",
        desc: "Métodos LoRA y QLoRA para fine-tuning paramétrico eficiente. Adaptación a dominios específicos con recursos limitados.",
        category: "modelos",
      },
      {
        num: "03",
        title: "Curación de datasets para MX y LATAM",
        desc: "Construcción de corpora de alta calidad con contexto normativo, cultural y lingüístico de México y América Latina.",
        category: "datos",
      },
      {
        num: "04",
        title: "NLP para lenguas originarias",
        desc: "Modelos y herramientas de procesamiento del lenguaje natural para náhuatl, maya y otras lenguas indígenas de México.",
        category: "datos",
      },
      {
        num: "05",
        title: "Benchmarks no-WEIRD",
        desc: "Spanish HELM y MMLU-LatAm: evaluación de modelos con métricas que no asumen contexto occidental, educado e industrializado.",
        category: "evaluacion",
      },
      {
        num: "06",
        title: "Mitigación de sesgo cultural",
        desc: "Identificación y reducción de sesgos WEIRD en modelos entrenados con datos predominantemente anglosajones.",
        category: "evaluacion",
      },
      {
        num: "07",
        title: "Representaciones lógicas tensoriales",
        desc: "Codificación de conocimiento estructurado y relaciones lógicas en espacios tensoriales para razonamiento explícito.",
        category: "razonamiento",
      },
      {
        num: "08",
        title: "Razonamiento recursivo eficiente",
        desc: "Arquitecturas y estrategias para razonamiento en múltiples pasos con eficiencia computacional en inferencia.",
        category: "razonamiento",
      },
      {
        num: "09",
        title: "SLMs para sistemas agénticos",
        desc: "Modelos pequeños especializados como componentes de sistemas multi-agente con gobernanza verificable.",
        category: "razonamiento",
      },
    ],
  },
  roadmap: {
    badge: "Proyecto principal",
    h2: "Lattice Na\u2019at: hacia la frontera global",
    subtitle:
      "Sintérgica AI desarrolló el modelo de IA de mayor escala en LATAM con 1 billón de parámetros. Esta es la ruta hacia la frontera global.",
    phases: [
      {
        status: "Actualidad",
        statusVariant: "active",
        params: "1T",
        label: "Proyecto de Investigación 1T",
        arch: "Agnóstico",
        year: "Fase 1",
        desc: "Curaduría intensiva de datasets con universidades y organizaciones. En fase de pruebas con corpus normativo y soporte de lenguas originarias.",
      },
      {
        status: "Mayo 2026",
        statusVariant: "dev",
        params: "1T",
        label: "Evolución Lattice 2.0",
        arch: "Arquitecturas avanzadas (Kimi K2.5 / MoE)",
        year: "Fase 2",
        desc: "Migración del modelo base hacia arquitecturas de razonamiento avanzado. El valor central se mantiene en el enriquecimiento de nuestro dataset nacional.",
      },
      {
        status: "2030",
        statusVariant: "goal",
        params: "Frontera",
        label: "Modelo de Frontera",
        year: "Fase 3",
        desc: "Capacidades de razonamiento a nivel experto humano en dominios especializados. Modelo fundacional de frontera que incluya un dataset curado de toda América Latina.",
      },
    ],
  },
  collaborate: {
    badge: "Colaborar",
    h2: "Únete a la investigación",
    subtitle:
      "Sintérgica Labs es un proyecto abierto. Buscamos colaboradores que quieran construir el futuro de la IA desde América Latina.",
    audiences: [
      {
        id: "investigadores",
        title: "Investigadores",
        subtitle: "Acceso y publicación",
        items: [
          "Acceso anticipado a modelos y datasets",
          "Co-autoría en publicaciones",
          "Infraestructura de cómputo compartida",
          "Red de investigadores LATAM",
        ],
      },
      {
        id: "universidades",
        title: "Universidades",
        subtitle: "Convenios y proyectos",
        items: [
          "Convenios de colaboración formales",
          "Proyectos de tesis y posgrado",
          "Talleres y seminarios conjuntos",
          "Becas de investigación",
        ],
      },
      {
        id: "desarrolladores",
        title: "Desarrolladores",
        subtitle: "Open source y APIs",
        items: [
          "Contribución a modelos open source",
          "APIs de investigación (acceso anticipado)",
          "Bounties por mejoras técnicas",
          "Mentoría técnica",
        ],
      },
      {
        id: "organizaciones",
        title: "Organizaciones",
        subtitle: "Financiamiento y datos",
        items: [
          "Aportación de datos especializados",
          "Financiamiento de líneas de investigación",
          "Casos de uso reales como benchmark",
          "Reconocimiento en publicaciones",
        ],
      },
    ],
    ctaLabel: "Contactar al equipo de Labs",
  },
  links: {
    badge: "Open research",
    h2: "Accede al trabajo de Labs",
    subtitle: "Todo nuestro trabajo abierto vive en GitHub y HuggingFace.",
    github: {
      label: "GitHub",
      url: "github.com/Sintergica-AI",
      desc: "Código fuente, scripts de entrenamiento, pipelines de curación de datos y herramientas de evaluación.",
      cta: "Ver repositorios →",
    },
    huggingface: {
      label: "HuggingFace",
      url: "huggingface.co/sintergica",
      desc: "Modelos publicados, datasets curados y spaces de demostración de Lattice Na'at y Lattice Séeb.",
      cta: "Ver modelos →",
    },
  },
};

/* ── English ────────────────────────────────────────────────── */

const en: LabsI18nContent = {
  meta: {
    title: "Sintérgica Labs — Frontier AI Research from Mexico | Sintérgica AI",
    description:
      "Non-profit AI research lab. Models, benchmarks, and NLP for Mexico and LATAM. Lattice Na'at: 1T parameters.",
  },
  hero: {
    badge: "Sintérgica Labs · Open Research",
    h1: "Sintérgica Labs: Frontier research from Mexico",
    subtitle:
      "Non-profit research lab. We position Mexico and Latin America at the frontier of AI knowledge.",
    trustSignals: ["Non-profit", "Open research", "Mexico & LATAM", "Open collaboration"],
    ctaPrimary: "Collaborate with Labs",
    ctaSecondary: "View research lines",
  },
  impact: {
    title: "Collectively advancing the science of AI in LATAM",
    stats: [
      { value: "4", label: "released models" },
      { value: "10+", label: "papers & research" },
      { value: "5+", label: "academic partners" },
    ],
    features: [
      { title: "Open Science Initiative", desc: "By building an open science community and releasing our models, we are empowering the next era of technological progress in the region.", url: "https://huggingface.co/sintergica" },
      { title: "Data Sovereignty", desc: "Curation of high-quality datasets with regulatory, cultural, and linguistic context from Mexico and Latin America to train models without WEIRD bias." },
      { title: "Institutional Collaboration", desc: "We provide access to infrastructure and models to academic partners and civic institutions for projects driving real-world impact through AI." }
    ],
  },
  featuredResearch: {
    badge: "Our Research",
    h2: "Publications and Models",
    papers: [
      { tag: "New Model", title: "Lattice Na'at 1T", url: "/investigacion/lattice-naat", date: "2025", featured: true },
      { tag: "Paper", title: "WEIRD bias mitigation in LLMs", url: "#", date: "Coming soon" },
      { tag: "Dataset", title: "Mexican Regulatory Corpus V1", url: "https://huggingface.co/sintergica", date: "2024" },
      { tag: "Evaluation", title: "MMLU-LatAm: Evaluating regional context", url: "#", date: "Coming soon" },
      { tag: "Model", title: "Lattice Séeb 9B", url: "#", date: "2025" }
    ],
  },
  researchLines: {
    badge: "Research lines",
    h2: "Nine frontier research lines",
    subtitle: "Applied research focused on real AI challenges for non-Anglo-Saxon contexts.",
    categoryLabels: {
      modelos: "Efficient models",
      datos: "Data & languages",
      evaluacion: "Evaluation",
      razonamiento: "Reasoning",
    },
    lines: [
      { num: "01", title: "Efficient knowledge distillation", desc: "Transfer of capabilities from large models (1T+) to compact models without significant performance loss.", category: "modelos" },
      { num: "02", title: "Low-cost fine-tuning (LoRA, QLoRA)", desc: "Parameter-efficient fine-tuning methods for adapting base models to specific domains with limited resources.", category: "modelos" },
      { num: "03", title: "Dataset curation for MX and LATAM", desc: "Building high-quality corpora with regulatory, cultural, and linguistic context from Mexico and Latin America.", category: "datos" },
      { num: "04", title: "NLP for indigenous languages", desc: "Models and tools for natural language processing of Nahuatl, Maya, and other indigenous languages of Mexico.", category: "datos" },
      { num: "05", title: "Non-WEIRD benchmarks", desc: "Spanish HELM and MMLU-LatAm: model evaluation with metrics that don't assume Western, Educated, Industrialized context.", category: "evaluacion" },
      { num: "06", title: "Cultural bias mitigation", desc: "Identification and reduction of WEIRD biases in models trained predominantly on Anglo-Saxon data.", category: "evaluacion" },
      { num: "07", title: "Tensorial logical representations", desc: "Encoding of structured knowledge and logical relations in tensorial spaces for explicit reasoning.", category: "razonamiento" },
      { num: "08", title: "Efficient recursive reasoning", desc: "Architectures and strategies for multi-step reasoning with computational efficiency at inference time.", category: "razonamiento" },
      { num: "09", title: "SLMs for agentic systems", desc: "Specialized small models as components of multi-agent systems with verifiable governance.", category: "razonamiento" },
    ],
  },
  roadmap: {
    badge: "Main project",
    h2: "Lattice Na\u2019at: toward the global frontier",
    subtitle: "Sintérgica AI developed the largest AI model in LATAM with 1 trillion parameters. This is the path to the global frontier.",
    phases: [
      { status: "Active", statusVariant: "active", params: "1T", label: "Lattice Na\u2019at", year: "2025", desc: "Largest AI model developed in LATAM. Regulatory, cultural, and linguistic knowledge base for Mexico and LATAM. Active production." },
      { status: "In development", statusVariant: "dev", params: "1T", label: "Na\u2019at Scale", arch: "Kimi K2.5 architecture", year: "2027", desc: "Scaling toward 1 trillion parameters adopting the Kimi K2.5 architecture. Enhanced reasoning and extended context." },
      { status: "Goal", statusVariant: "goal", params: "Frontier", label: "Na\u2019at Global", year: "2030", desc: "Position a Latin American-origin model at the global frontier of AI knowledge. Regional cognitive sovereignty." },
    ],
  },
  collaborate: {
    badge: "Collaborate",
    h2: "Join the research",
    subtitle: "Sintérgica Labs is an open project. We seek collaborators who want to build the future of AI from Latin America.",
    audiences: [
      { id: "investigadores", title: "Researchers", subtitle: "Access & publication", items: ["Early access to models and datasets", "Co-authorship in publications", "Shared compute infrastructure", "LATAM researcher network"] },
      { id: "universidades", title: "Universities", subtitle: "Partnerships & projects", items: ["Formal collaboration agreements", "Thesis and graduate projects", "Joint workshops and seminars", "Research grants"] },
      { id: "desarrolladores", title: "Developers", subtitle: "Open source & APIs", items: ["Contribute to open source models", "Research APIs (early access)", "Bounties for technical improvements", "Technical mentorship"] },
      { id: "organizaciones", title: "Organizations", subtitle: "Funding & data", items: ["Contribution of specialized data", "Funding of research lines", "Real use cases as benchmarks", "Recognition in publications"] },
    ],
    ctaLabel: "Contact the Labs team",
  },
  links: {
    badge: "Open research",
    h2: "Access Labs' work",
    subtitle: "All our open work lives on GitHub and HuggingFace.",
    github: { label: "GitHub", url: "github.com/Sintergica-AI", desc: "Source code, training scripts, data curation pipelines, and evaluation tools.", cta: "View repositories →" },
    huggingface: { label: "HuggingFace", url: "huggingface.co/sintergica", desc: "Published models, curated datasets, and demo spaces for Lattice Na'at and Lattice Séeb.", cta: "View models →" },
  },
};

/* ── Português BR ───────────────────────────────────────────── */

const pt: LabsI18nContent = {
  meta: {
    title: "Sintérgica Labs — Pesquisa de fronteira em IA no México | Sintérgica AI",
    description:
      "Laboratório de pesquisa em IA sem fins lucrativos. Modelos, benchmarks e PLN para México e LATAM. Lattice Na'at: 1T parâmetros.",
  },
  hero: {
    badge: "Sintérgica Labs · Pesquisa Aberta",
    h1: "Sintérgica Labs: Pesquisa de fronteira no México",
    subtitle:
      "Laboratório de pesquisa sem fins lucrativos. Posicionamos o México e a América Latina na fronteira do conhecimento em IA.",
    trustSignals: ["Sem fins lucrativos", "Pesquisa aberta", "México e LATAM", "Colaboração aberta"],
    ctaPrimary: "Colaborar com Labs",
    ctaSecondary: "Ver linhas de pesquisa",
  },
  impact: {
    title: "Avançando coletivamente a ciência da IA na LATAM",
    stats: [
      { value: "4", label: "modelos lançados" },
      { value: "10+", label: "artigos e pesquisas" },
      { value: "5+", label: "parceiros acadêmicos" },
    ],
    features: [
      { title: "Iniciativa de Ciência Aberta", desc: "Através da criação de uma comunidade de ciência aberta e do lançamento de nossos modelos, estamos capacitando a próxima era de progresso tecnológico na região.", url: "https://huggingface.co/sintergica" },
      { title: "Soberania de Dados", desc: "Curadoria de datasets de alta qualidade com contexto regulatório, cultural e linguístico do México e da América Latina para treinar modelos sem viés WEIRD." },
      { title: "Colaboração Institucional", desc: "Fornecemos acesso a infraestrutura e modelos para parceiros acadêmicos e instituições cívicas para projetos que impulsionam um impacto real através da IA." }
    ],
  },
  featuredResearch: {
    badge: "Nossa Pesquisa",
    h2: "Publicações e Modelos",
    papers: [
      { tag: "Novo Modelo", title: "Lattice Na'at 1T", url: "/investigacion/lattice-naat", date: "2025", featured: true },
      { tag: "Artigo", title: "Mitigação de viés WEIRD em LLMs", url: "#", date: "Em breve" },
      { tag: "Dataset", title: "Corpus Regulatório Mexicano V1", url: "https://huggingface.co/sintergica", date: "2024" },
      { tag: "Avaliação", title: "MMLU-LatAm: Avaliando o contexto regional", url: "#", date: "Em breve" },
      { tag: "Modelo", title: "Lattice Séeb 9B", url: "#", date: "2025" }
    ],
  },
  researchLines: {
    badge: "Linhas de pesquisa",
    h2: "Nove linhas de fronteira",
    subtitle: "Pesquisa aplicada focada em desafios reais de IA para contextos não anglo-saxônicos.",
    categoryLabels: {
      modelos: "Modelos eficientes",
      datos: "Dados e línguas",
      evaluacion: "Avaliação",
      razonamiento: "Raciocínio",
    },
    lines: [
      { num: "01", title: "Destilação eficiente de conhecimento", desc: "Transferência de capacidades de modelos grandes (1T+) para modelos compactos sem perda significativa de desempenho.", category: "modelos" },
      { num: "02", title: "Ajuste fino com baixo custo computacional", desc: "Métodos LoRA e QLoRA para ajuste fino paramétrico eficiente. Adaptação a domínios específicos com recursos limitados.", category: "modelos" },
      { num: "03", title: "Curadoria de datasets para MX e LATAM", desc: "Construção de corpora de alta qualidade com contexto regulatório, cultural e linguístico do México e da América Latina.", category: "datos" },
      { num: "04", title: "PLN para línguas originárias", desc: "Modelos e ferramentas de processamento de linguagem natural para náhuatl, maia e outras línguas indígenas do México.", category: "datos" },
      { num: "05", title: "Benchmarks não-WEIRD", desc: "Spanish HELM e MMLU-LatAm: avaliação de modelos com métricas que não assumem contexto ocidental, educado e industrializado.", category: "evaluacion" },
      { num: "06", title: "Mitigação de viés cultural", desc: "Identificação e redução de vieses WEIRD em modelos treinados predominantemente com dados anglo-saxônicos.", category: "evaluacion" },
      { num: "07", title: "Representações lógicas tensoriais", desc: "Codificação de conhecimento estruturado e relações lógicas em espaços tensoriais para raciocínio explícito.", category: "razonamiento" },
      { num: "08", title: "Raciocínio recursivo eficiente", desc: "Arquiteturas e estratégias para raciocínio em múltiplas etapas com eficiência computacional na inferência.", category: "razonamiento" },
      { num: "09", title: "SLMs para sistemas agênticos", desc: "Modelos pequenos especializados como componentes de sistemas multi-agente com governança verificável.", category: "razonamiento" },
    ],
  },
  roadmap: {
    badge: "Projeto principal",
    h2: "Lattice Na\u2019at: em direção à fronteira",
    subtitle: "Sintérgica AI desenvolveu o modelo de IA de maior escala na LATAM com 1 trilhão de parâmetros. Este é o caminho para a fronteira global.",
    phases: [
      { status: "Ativo", statusVariant: "active", params: "1T", label: "Lattice Na\u2019at", year: "2025", desc: "Modelo de IA de maior escala desenvolvido na LATAM. Base de conhecimento regulatório, cultural e linguístico para México e LATAM. Em produção ativa." },
      { status: "Em desenvolvimento", statusVariant: "dev", params: "1T", label: "Na\u2019at Escala", arch: "Arquitetura Kimi K2.5", year: "2027", desc: "Escalonamento para 1 trilhão de parâmetros adotando a arquitetura Kimi K2.5. Maior capacidade de raciocínio e contexto estendido." },
      { status: "Objetivo", statusVariant: "goal", params: "Fronteira", label: "Na\u2019at Global", year: "2030", desc: "Posicionar um modelo de origem latino-americana na fronteira global do conhecimento em IA. Soberania cognitiva regional." },
    ],
  },
  collaborate: {
    badge: "Colaborar",
    h2: "Junte-se à pesquisa",
    subtitle: "Sintérgica Labs é um projeto aberto. Buscamos colaboradores que queiram construir o futuro da IA na América Latina.",
    audiences: [
      { id: "investigadores", title: "Pesquisadores", subtitle: "Acesso e publicação", items: ["Acesso antecipado a modelos e datasets", "Co-autoria em publicações", "Infraestrutura de computação compartilhada", "Rede de pesquisadores LATAM"] },
      { id: "universidades", title: "Universidades", subtitle: "Convênios e projetos", items: ["Convênios de colaboração formais", "Projetos de tese e pós-graduação", "Workshops e seminários conjuntos", "Bolsas de pesquisa"] },
      { id: "desarrolladores", title: "Desenvolvedores", subtitle: "Open source e APIs", items: ["Contribuição a modelos open source", "APIs de pesquisa (acesso antecipado)", "Bounties por melhorias técnicas", "Mentoria técnica"] },
      { id: "organizaciones", title: "Organizações", subtitle: "Financiamento e dados", items: ["Aporte de dados especializados", "Financiamento de linhas de pesquisa", "Casos de uso reais como benchmark", "Reconhecimento em publicações"] },
    ],
    ctaLabel: "Contatar a equipe de Labs",
  },
  links: {
    badge: "Pesquisa aberta",
    h2: "Acesse o trabalho de Labs",
    subtitle: "Todo o nosso trabalho aberto está no GitHub e HuggingFace.",
    github: { label: "GitHub", url: "github.com/Sintergica-AI", desc: "Código-fonte, scripts de treinamento, pipelines de curação de dados e ferramentas de avaliação.", cta: "Ver repositórios →" },
    huggingface: { label: "HuggingFace", url: "huggingface.co/sintergica", desc: "Modelos publicados, datasets curados e spaces de demonstração do Lattice Na'at e Lattice Séeb.", cta: "Ver modelos →" },
  },
};

/* ── Export ─────────────────────────────────────────────────── */

export const LABS_I18N: Record<LangCode, LabsI18nContent> = { es, en, pt };
export const LABS_DEFAULT = es;
