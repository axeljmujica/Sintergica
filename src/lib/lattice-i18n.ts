export type LangCode = "es" | "en" | "pt-br";

/* ── Shared types ─────────────────────────────────────────────── */

export interface LatticeHeroContent {
  badge: string;
  h1: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export interface LatticeIntegrationsContent {
  label: string;
}

export interface LatticePillar {
  title: string;
  description: string;
  cta: string;
}

export interface LatticePillarsContent {
  badge: string;
  h2: string;
  subtitle: string;
  pillars: [LatticePillar, LatticePillar, LatticePillar];
}

export interface LatticeCapability {
  tag: string;
  title: string;
  description: string;
}

export interface LatticeCapabilitiesContent {
  badge: string;
  h2: string;
  subtitle: string;
  capabilities: [LatticeCapability, LatticeCapability, LatticeCapability];
}

export interface LatticeVertical {
  id: string;
  label: string;
  description: string;
  metric: string;
  metricLabel: string;
}

export interface LatticeVerticalsContent {
  badge: string;
  h2: string;
  subtitle: string;
  verticals: LatticeVertical[];
}

export interface LatticeSecurityFeature {
  title: string;
  description: string;
  cta?: string;
}

export interface LatticeSecurityContent {
  badge: string;
  h2: string;
  subtitle: string;
  features: [LatticeSecurityFeature, LatticeSecurityFeature, LatticeSecurityFeature, LatticeSecurityFeature];
}

export interface LatticeComparisonRow {
  requirement: string;
  generic: string;
  lattice: string;
  genericStatus: "negative" | "partial";
  latticeStatus: "positive";
}

export interface LatticeComparisonContent {
  badge: string;
  h2: string;
  colGeneric: string;
  colLattice: string;
  colRequirement: string;
  rows: LatticeComparisonRow[];
}

export interface LatticeModel {
  name: string;
  description: string;
  detail?: string;
}

export interface LatticeModelsContent {
  badge: string;
  h2: string;
  subtitle: string;
  models: [LatticeModel, LatticeModel, LatticeModel, LatticeModel];
}

export interface LatticeTestimonialContent {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface LatticeCTAContent {
  badge: string;
  h2: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
  bullets: string[];
}

export interface LatticeI18nContent {
  meta: { title: string; description: string };
  hero: LatticeHeroContent;
  integrations: LatticeIntegrationsContent;
  pillars: LatticePillarsContent;
  capabilities: LatticeCapabilitiesContent;
  verticals: LatticeVerticalsContent;
  security: LatticeSecurityContent;
  comparison: LatticeComparisonContent;
  models: LatticeModelsContent;
  testimonial: LatticeTestimonialContent;
  cta: LatticeCTAContent;
}

/* ── Español ──────────────────────────────────────────────────── */

const es: LatticeI18nContent = {
  meta: {
    title: "Lattice — El workspace de IA para empresas | Sintérgica AI",
    description:
      "Chat inteligente, agentes autónomos, automatizaciones y modelos entrenados en el contexto de México y LATAM — en un solo lugar. Datos en tu infraestructura.",
  },
  hero: {
    badge: "Lattice Platform",
    h1: "El workspace de IA donde tu equipo trabaja, decide y ejecuta",
    subtitle:
      "Chat inteligente, agentes autónomos, automatizaciones y modelos entrenados en el contexto de México y LATAM — en un solo lugar. Con tus datos en tu infraestructura.",
    ctaPrimary: "Solicitar demo",
    ctaSecondary: "Ver la plataforma",
  },
  integrations: {
    label: "Compatible con las herramientas que ya usas",
  },
  pillars: {
    badge: "Plataforma",
    h2: "Menos fricción. Más impacto.",
    subtitle:
      "Lattice es la plataforma que elimina la distancia entre tu equipo y la IA — con el contexto regulatorio que los modelos globales no tienen, la seguridad que el sector regulado exige, y la flexibilidad para escalar desde un piloto hasta toda la organización.",
    pillars: [
      {
        title: "Productividad",
        description:
          "Respuestas instantáneas con contexto de tu organización. Genera reportes, analiza contratos y consulta bases de conocimiento — todo fundamentado en tus documentos internos.",
        cta: "Conocer más",
      },
      {
        title: "Automatización",
        description:
          "Despliega agentes que trabajan solos y flujos sin código que conectan tus sistemas. De la tarea repetitiva al proceso autónomo.",
        cta: "Conocer más",
      },
      {
        title: "Seguridad",
        description:
          "Despliegue privado en AWS Querétaro, nube privada o on-premise. Arquitectura zero-trust con 16 capas de seguridad. Tus datos nunca salen de tu infraestructura.",
        cta: "Conocer más",
      },
    ],
  },
  capabilities: {
    badge: "Capacidades",
    h2: "De la conversación a la ejecución",
    subtitle:
      "Lattice no es un chat con IA. Es un sistema operativo inteligente que busca, crea, automatiza y actúa — integrado con tus herramientas, gobernado por tus reglas.",
    capabilities: [
      {
        tag: "Búsqueda y recuperación inteligente",
        title: "Consulta",
        description:
          "Pregunta en lenguaje natural y obtén respuestas verificables, fundamentadas en tus documentos internos. Lattice indexa PDF, Word, Excel, HTML y URLs con búsqueda semántica — el modelo consulta tu corpus antes de responder. Cada respuesta incluye la referencia exacta al documento fuente.",
      },
      {
        tag: "IA Generativa",
        title: "Crea",
        description:
          "Genera reportes, compara contratos, produce dashboards interactivos y exporta resultados — directamente desde el chat. Las Lattice Apps se renderizan en el panel lateral: tablas, calculadoras, formularios, visualizaciones de datos y código ejecutable. Se comparten con el equipo o se embeben en sistemas externos.",
      },
      {
        tag: "Automatización y agentes",
        title: "Automatiza",
        description:
          "Los Lattice Agents reciben un objetivo en lenguaje natural y lo ejecutan de forma autónoma. Lattice Flows conecta tus sistemas con automatizaciones visuales sin código — desde la generación de leads hasta el monitoreo regulatorio. Los agentes trabajan en segundo plano, 24/7, y reportan al dashboard.",
      },
    ],
  },
  verticals: {
    badge: "Verticales",
    h2: "Inteligencia que entiende tu industria",
    subtitle:
      "Lattice incluye modelos Seeb — Small Language Models especializados por sector, entrenados en normativa, terminología y procesos reales de cada vertical. No es un modelo genérico intentando ser experto. Es un modelo que ya lo es.",
    verticals: [
      {
        id: "legal",
        label: "Legal",
        description:
          "Revisa contratos en minutos, detecta cláusulas de riesgo, compara versiones y genera borradores fundamentados en legislación mexicana vigente. El modelo cita el artículo exacto — no inventa.",
        metric: "−60%",
        metricLabel: "tiempo de revisión contractual",
      },
      {
        id: "gobierno",
        label: "Gobierno",
        description:
          "Cumplimiento LGTAIP documentado. Despliegue en territorio nacional. Audit trail inmutable. Lattice es elegible para licitación pública — los modelos globales no lo son.",
        metric: "−70%",
        metricLabel: "tiempo de detección de anomalías",
      },
      {
        id: "logistica",
        label: "Logística",
        description:
          "Clasifica aranceles, genera pedimentos, detecta errores documentales y monitorea cadenas de suministro — con conocimiento de las regulaciones aduaneras de México y LATAM.",
        metric: "−40%",
        metricLabel: "tiempos de despacho",
      },
      {
        id: "financiero",
        label: "Financiero",
        description:
          "Detección de operaciones atípicas, aceleración de KYC/KYB, cumplimiento de circulares CNBV y análisis de riesgo — sin que los datos salgan de tu infraestructura.",
        metric: "3×",
        metricLabel: "detección de transacciones atípicas",
      },
      {
        id: "salud",
        label: "Salud",
        description:
          "Documentación clínica automatizada, codificación de diagnósticos, asistencia en notas de evolución y cumplimiento COFEPRIS — con trazabilidad completa de acceso a expedientes.",
        metric: "−35%",
        metricLabel: "errores de documentación clínica",
      },
      {
        id: "energia",
        label: "Energía",
        description:
          "Análisis de contratos de suministro, monitoreo regulatorio CRE, reporteo ESG automatizado y optimización operativa para generadores, distribuidores y comercializadores.",
        metric: "Continuo",
        metricLabel: "monitoreo regulatorio y reporteo ESG",
      },
    ],
  },
  security: {
    badge: "Enterprise",
    h2: "Privado. Seguro. Auditable.",
    subtitle: "Esto es lo que \"enterprise-ready\" significa en serio.",
    features: [
      {
        title: "Seguridad por arquitectura",
        description:
          "Arquitectura zero-trust con 16 capas de seguridad independientes. Motor construido en Rust — un lenguaje que elimina por diseño clases enteras de vulnerabilidades. Encriptación AES-256-GCM en reposo, TLS 1.3 en tránsito. Los secretos se eliminan de memoria inmediatamente después de usarse.",
        cta: "Conocer más",
      },
      {
        title: "Completamente personalizable",
        description:
          "Cada canal tiene su propio modelo asignado, base de conocimiento y reglas de acceso. Crea agentes especializados con herramientas específicas, ajusta modelos con tus datos mediante fine-tuning de Seeb, y despliega flujos de automatización adaptados a tus procesos.",
      },
      {
        title: "Interoperable por diseño",
        description:
          "Más de 40 adaptadores de canal: WhatsApp, Telegram, Slack, Teams, correo electrónico y más. APIs flexibles para conectar ERP, CRM, bases de datos y sistemas legacy. Compatible con los principales estándares de integración.",
      },
      {
        title: "Desplegable en tu infraestructura",
        description:
          "Cuatro modalidades: SaaS gestionado, nube privada (VPC), on-premise completo o híbrido. Funciona desde AWS Querétaro hasta un servidor air-gapped sin conexión a internet. Tú decides dónde viven tus datos.",
        cta: "Conocer más",
      },
    ],
  },
  comparison: {
    badge: "Comparativa",
    h2: "Lo que pasa la auditoría — y lo que no",
    colRequirement: "Requisito de auditoría",
    colGeneric: "Chatbots globales",
    colLattice: "Lattice Platform",
    rows: [
      { requirement: "Datos en territorio nacional (México)", generic: "Servidores en EE.UU.", lattice: "AWS Querétaro u on-premise", genericStatus: "negative", latticeStatus: "positive" },
      { requirement: "Despliegue on-premise air-gapped", generic: "No disponible", lattice: "Disponible", genericStatus: "negative", latticeStatus: "positive" },
      { requirement: "Audit trail inmutable y verificable", generic: "Parcial", lattice: "Merkle audit trail", genericStatus: "partial", latticeStatus: "positive" },
      { requirement: "RBAC a nivel de agente y herramienta", generic: "Limitado", lattice: "Granular", genericStatus: "partial", latticeStatus: "positive" },
      { requirement: "Sin retención de datos por el proveedor", generic: "No garantizado", lattice: "Zero-retention certificado", genericStatus: "negative", latticeStatus: "positive" },
      { requirement: "Cumplimiento LGTAIP documentado", generic: "No disponible", lattice: "Documentado", genericStatus: "negative", latticeStatus: "positive" },
      { requirement: "Elegible para licitación pública MX", generic: "No elegible", lattice: "Elegible (CFDI 4.0 + RFC)", genericStatus: "negative", latticeStatus: "positive" },
    ],
  },
  models: {
    badge: "Modelos",
    h2: "Los modelos que entienden México",
    subtitle:
      "Lattice no depende de un solo proveedor de IA. Integra modelos globales de frontera y modelos propios especializados para el contexto local.",
    models: [
      {
        name: "Na'at",
        description:
          "Modelo especializado para México y LATAM. Entrenado sobre un corpus de normativa mexicana, español regional y contexto regulatorio latinoamericano. Tres variantes según escala y costo: Na'at 4B, Na'at 9B y Na'at Full.",
        detail: "Open source con atribución obligatoria. Publicado en Hugging Face.",
      },
      {
        name: "Seeb",
        description:
          "Familia de Small Language Models especializados por vertical: Legal, Gobierno, Logística, Energía, Salud y Financiero. Cada modelo conoce la terminología, los procesos y la regulación específica de su industria.",
        detail: "Disponible en dos variantes: Seeb (estándar) y Seeb Pro (mayor capacidad).",
      },
      {
        name: "Fine-tuning privado",
        description:
          "Ajusta un modelo Seeb con los datos exclusivos de tu organización. El modelo resultante opera exclusivamente dentro de Lattice para tu empresa — nadie más lo usa, nadie más accede a tus datos de entrenamiento.",
      },
      {
        name: "Modelos globales de frontera",
        description:
          "Lattice también integra los principales modelos de última generación del mercado. Tu equipo elige el modelo por canal o por sesión, con control de costos visible antes de cada ejecución.",
      },
    ],
  },
  testimonial: {
    quote:
      "Lattice nos dio lo que ningún chatbot global podía: un agente que conoce la regulación mexicana, trabaja con nuestros documentos reales y no saca nuestros datos del país.",
    author: "Cliente piloto",
    role: "Director de Tecnología",
    company: "Empresa del sector regulado",
  },
  cta: {
    badge: "Siguiente paso",
    h2: "Lleva tu operación al siguiente nivel",
    subtitle:
      "Agenda una Sesión de Diagnóstico Inteligente — 45 minutos, sin costo, sin compromiso. Analizamos tu operación y te mostramos exactamente cómo Lattice se integra a tu flujo de trabajo.",
    ctaPrimary: "Agendar sesión de diagnóstico",
    ctaSecondary: "Escribir a hola@sintergica.ai",
    bullets: [
      "Alinea la IA a tus flujos de trabajo y casos de uso reales",
      "Elige la modalidad de despliegue que se adapta a tu infraestructura",
      "Pasa del piloto a producción — de forma segura y medible",
    ],
  },
};

/* ── English ──────────────────────────────────────────────────── */

const en: LatticeI18nContent = {
  meta: {
    title: "Lattice — The AI Workspace for Enterprises | Sintérgica AI",
    description:
      "Intelligent chat, autonomous agents, automations and models trained on Mexico and LATAM context — in one place. Your data stays in your infrastructure.",
  },
  hero: {
    badge: "Lattice Platform",
    h1: "The AI workspace where your team works, decides, and executes",
    subtitle:
      "Intelligent chat, autonomous agents, automations and models trained on Mexico and LATAM context — in one place. Your data stays in your infrastructure.",
    ctaPrimary: "Request a demo",
    ctaSecondary: "See the platform",
  },
  integrations: {
    label: "Compatible with the tools you already use",
  },
  pillars: {
    badge: "Platform",
    h2: "Less friction. More impact.",
    subtitle:
      "Lattice is the platform that closes the gap between your team and AI — with the regulatory context that global models lack, the security that regulated sectors demand, and the flexibility to scale from a pilot to the entire organization.",
    pillars: [
      {
        title: "Productivity",
        description:
          "Instant answers with your organization's context. Generate reports, analyze contracts, and query knowledge bases — all grounded in your internal documents.",
        cta: "Learn more",
      },
      {
        title: "Automation",
        description:
          "Deploy agents that work autonomously and no-code flows that connect your systems. From repetitive tasks to autonomous processes.",
        cta: "Learn more",
      },
      {
        title: "Security",
        description:
          "Private deployment on AWS Querétaro, private cloud, or on-premise. Zero-trust architecture with 16 security layers. Your data never leaves your infrastructure.",
        cta: "Learn more",
      },
    ],
  },
  capabilities: {
    badge: "Capabilities",
    h2: "From conversation to execution",
    subtitle:
      "Lattice is not an AI chatbot. It's an intelligent operating system that searches, creates, automates, and acts — integrated with your tools, governed by your rules.",
    capabilities: [
      {
        tag: "Intelligent search & retrieval",
        title: "Query",
        description:
          "Ask in natural language and get verifiable answers grounded in your internal documents. Lattice indexes PDF, Word, Excel, HTML, and URLs with semantic search — the model queries your corpus before answering. Every response includes the exact reference to the source document.",
      },
      {
        tag: "Generative AI",
        title: "Create",
        description:
          "Generate reports, compare contracts, produce interactive dashboards, and export results — directly from chat. Lattice Apps render in the side panel: tables, calculators, forms, data visualizations, and executable code. Share with your team or embed in external systems.",
      },
      {
        tag: "Automation & agents",
        title: "Automate",
        description:
          "Lattice Agents receive an objective in natural language and execute it autonomously. Lattice Flows connects your systems with visual no-code automations — from lead generation to regulatory monitoring. Agents work in the background, 24/7, and report to the dashboard.",
      },
    ],
  },
  verticals: {
    badge: "Verticals",
    h2: "Intelligence that understands your industry",
    subtitle:
      "Lattice includes Seeb models — Small Language Models specialized by sector, trained on regulations, terminology, and real processes for each vertical. Not a generic model trying to be an expert. A model that already is one.",
    verticals: [
      {
        id: "legal",
        label: "Legal",
        description:
          "Review contracts in minutes, detect risk clauses, compare versions, and generate drafts grounded in current Mexican law. The model cites the exact article — it doesn't make things up.",
        metric: "−60%",
        metricLabel: "contract review time",
      },
      {
        id: "gobierno",
        label: "Government",
        description:
          "Documented LGTAIP compliance. National territory deployment. Immutable audit trail. Lattice is eligible for public procurement — global models are not.",
        metric: "−70%",
        metricLabel: "anomaly detection time",
      },
      {
        id: "logistica",
        label: "Logistics",
        description:
          "Classify tariffs, generate customs declarations, detect document errors, and monitor supply chains — with knowledge of Mexico and LATAM customs regulations.",
        metric: "−40%",
        metricLabel: "clearance times",
      },
      {
        id: "financiero",
        label: "Financial",
        description:
          "Detection of atypical operations, KYC/KYB acceleration, CNBV circular compliance, and risk analysis — without data leaving your infrastructure.",
        metric: "3×",
        metricLabel: "atypical transaction detection",
      },
      {
        id: "salud",
        label: "Healthcare",
        description:
          "Automated clinical documentation, diagnosis coding, progress note assistance, and COFEPRIS compliance — with full access traceability for patient records.",
        metric: "−35%",
        metricLabel: "clinical documentation errors",
      },
      {
        id: "energia",
        label: "Energy",
        description:
          "Supply contract analysis, CRE regulatory monitoring, automated ESG reporting, and operational optimization for generators, distributors, and marketers.",
        metric: "Continuous",
        metricLabel: "regulatory monitoring & ESG reporting",
      },
    ],
  },
  security: {
    badge: "Enterprise",
    h2: "Private. Secure. Auditable.",
    subtitle: "This is what \"enterprise-ready\" actually means.",
    features: [
      {
        title: "Security by architecture",
        description:
          "Zero-trust architecture with 16 independent security layers. Engine built in Rust — a language that eliminates entire classes of vulnerabilities by design. AES-256-GCM encryption at rest, TLS 1.3 in transit. Secrets are wiped from memory immediately after use.",
        cta: "Learn more",
      },
      {
        title: "Fully customizable",
        description:
          "Each channel has its own assigned model, knowledge base, and access rules. Create specialized agents with specific tools, fine-tune models with your data via Seeb fine-tuning, and deploy automation flows adapted to your processes.",
      },
      {
        title: "Interoperable by design",
        description:
          "Over 40 channel adapters: WhatsApp, Telegram, Slack, Teams, email, and more. Flexible APIs to connect ERP, CRM, databases, and legacy systems. Compatible with major integration standards.",
      },
      {
        title: "Deployable in your infrastructure",
        description:
          "Four modalities: managed SaaS, private cloud (VPC), full on-premise, or hybrid. Works from AWS Querétaro to an air-gapped server with no internet connection. You decide where your data lives.",
        cta: "Learn more",
      },
    ],
  },
  comparison: {
    badge: "Comparison",
    h2: "What passes the audit — and what doesn't",
    colRequirement: "Audit requirement",
    colGeneric: "Global chatbots",
    colLattice: "Lattice Platform",
    rows: [
      { requirement: "Data in national territory (Mexico)", generic: "US-based servers", lattice: "AWS Querétaro or on-premise", genericStatus: "negative", latticeStatus: "positive" },
      { requirement: "Air-gapped on-premise deployment", generic: "Not available", lattice: "Available", genericStatus: "negative", latticeStatus: "positive" },
      { requirement: "Immutable & verifiable audit trail", generic: "Partial", lattice: "Merkle audit trail", genericStatus: "partial", latticeStatus: "positive" },
      { requirement: "Agent & tool-level RBAC", generic: "Limited", lattice: "Granular", genericStatus: "partial", latticeStatus: "positive" },
      { requirement: "Zero data retention by provider", generic: "Not guaranteed", lattice: "Certified zero-retention", genericStatus: "negative", latticeStatus: "positive" },
      { requirement: "Documented LGTAIP compliance", generic: "Not available", lattice: "Documented", genericStatus: "negative", latticeStatus: "positive" },
      { requirement: "Eligible for MX public procurement", generic: "Not eligible", lattice: "Eligible (CFDI 4.0 + RFC)", genericStatus: "negative", latticeStatus: "positive" },
    ],
  },
  models: {
    badge: "Models",
    h2: "The models that understand Mexico",
    subtitle:
      "Lattice doesn't depend on a single AI provider. It integrates frontier global models and proprietary models specialized for local context.",
    models: [
      {
        name: "Na'at",
        description:
          "Model specialized for Mexico and LATAM. Trained on a corpus of Mexican regulations, regional Spanish, and Latin American regulatory context. Three variants by scale and cost: Na'at 4B, Na'at 9B, and Na'at Full.",
        detail: "Open source with mandatory attribution. Published on Hugging Face.",
      },
      {
        name: "Seeb",
        description:
          "A family of Small Language Models specialized by vertical: Legal, Government, Logistics, Energy, Healthcare, and Financial. Each model knows the terminology, processes, and specific regulations of its industry.",
        detail: "Available in two variants: Seeb (standard) and Seeb Pro (higher capacity).",
      },
      {
        name: "Private fine-tuning",
        description:
          "Fine-tune a Seeb model with your organization's exclusive data. The resulting model operates exclusively within Lattice for your company — no one else uses it, no one else accesses your training data.",
      },
      {
        name: "Frontier global models",
        description:
          "Lattice also integrates the leading state-of-the-art models on the market. Your team chooses the model per channel or per session, with cost control visible before each execution.",
      },
    ],
  },
  testimonial: {
    quote:
      "Lattice gave us what no global chatbot could: an agent that knows Mexican regulation, works with our real documents, and doesn't send our data out of the country.",
    author: "Pilot client",
    role: "CTO",
    company: "Regulated sector company",
  },
  cta: {
    badge: "Next step",
    h2: "Take your operations to the next level",
    subtitle:
      "Schedule a Smart Diagnostic Session — 45 minutes, free, no strings attached. We analyze your operations and show you exactly how Lattice integrates into your workflow.",
    ctaPrimary: "Schedule diagnostic session",
    ctaSecondary: "Write to hola@sintergica.ai",
    bullets: [
      "Align AI to your real workflows and use cases",
      "Choose the deployment modality that fits your infrastructure",
      "Go from pilot to production — safely and measurably",
    ],
  },
};

/* ── Português BR ─────────────────────────────────────────────── */

const ptBr: LatticeI18nContent = {
  meta: {
    title: "Lattice — O workspace de IA para empresas | Sintérgica AI",
    description:
      "Chat inteligente, agentes autônomos, automações e modelos treinados no contexto do México e LATAM — em um só lugar. Seus dados na sua infraestrutura.",
  },
  hero: {
    badge: "Lattice Platform",
    h1: "O workspace de IA onde sua equipe trabalha, decide e executa",
    subtitle:
      "Chat inteligente, agentes autônomos, automações e modelos treinados no contexto do México e LATAM — em um só lugar. Com seus dados na sua infraestrutura.",
    ctaPrimary: "Solicitar demo",
    ctaSecondary: "Ver a plataforma",
  },
  integrations: {
    label: "Compatível com as ferramentas que você já usa",
  },
  pillars: {
    badge: "Plataforma",
    h2: "Menos atrito. Mais impacto.",
    subtitle:
      "Lattice é a plataforma que elimina a distância entre sua equipe e a IA — com o contexto regulatório que os modelos globais não têm, a segurança que o setor regulado exige, e a flexibilidade para escalar de um piloto até toda a organização.",
    pillars: [
      {
        title: "Produtividade",
        description:
          "Respostas instantâneas com contexto da sua organização. Gere relatórios, analise contratos e consulte bases de conhecimento — tudo fundamentado nos seus documentos internos.",
        cta: "Saiba mais",
      },
      {
        title: "Automação",
        description:
          "Implante agentes que trabalham sozinhos e fluxos sem código que conectam seus sistemas. Da tarefa repetitiva ao processo autônomo.",
        cta: "Saiba mais",
      },
      {
        title: "Segurança",
        description:
          "Implantação privada na AWS Querétaro, nuvem privada ou on-premise. Arquitetura zero-trust com 16 camadas de segurança. Seus dados nunca saem da sua infraestrutura.",
        cta: "Saiba mais",
      },
    ],
  },
  capabilities: {
    badge: "Capacidades",
    h2: "Da conversa à execução",
    subtitle:
      "Lattice não é um chat com IA. É um sistema operacional inteligente que busca, cria, automatiza e age — integrado com suas ferramentas, governado pelas suas regras.",
    capabilities: [
      {
        tag: "Busca e recuperação inteligente",
        title: "Consulta",
        description:
          "Pergunte em linguagem natural e obtenha respostas verificáveis, fundamentadas nos seus documentos internos. Lattice indexa PDF, Word, Excel, HTML e URLs com busca semântica — o modelo consulta seu corpus antes de responder. Cada resposta inclui a referência exata ao documento fonte.",
      },
      {
        tag: "IA Generativa",
        title: "Cria",
        description:
          "Gere relatórios, compare contratos, produza dashboards interativos e exporte resultados — direto do chat. As Lattice Apps se renderizam no painel lateral: tabelas, calculadoras, formulários, visualizações de dados e código executável. Compartilhe com a equipe ou incorpore em sistemas externos.",
      },
      {
        tag: "Automação e agentes",
        title: "Automatiza",
        description:
          "Os Lattice Agents recebem um objetivo em linguagem natural e o executam de forma autônoma. Lattice Flows conecta seus sistemas com automações visuais sem código — da geração de leads ao monitoramento regulatório. Os agentes trabalham em segundo plano, 24/7, e reportam ao dashboard.",
      },
    ],
  },
  verticals: {
    badge: "Verticais",
    h2: "Inteligência que entende sua indústria",
    subtitle:
      "Lattice inclui modelos Seeb — Small Language Models especializados por setor, treinados em normativas, terminologia e processos reais de cada vertical. Não é um modelo genérico tentando ser especialista. É um modelo que já é.",
    verticals: [
      {
        id: "legal",
        label: "Jurídico",
        description:
          "Revise contratos em minutos, detecte cláusulas de risco, compare versões e gere rascunhos fundamentados na legislação mexicana vigente. O modelo cita o artigo exato — não inventa.",
        metric: "−60%",
        metricLabel: "tempo de revisão contratual",
      },
      {
        id: "gobierno",
        label: "Governo",
        description:
          "Conformidade LGTAIP documentada. Implantação em território nacional. Audit trail imutável. Lattice é elegível para licitação pública — os modelos globais não são.",
        metric: "−70%",
        metricLabel: "tempo de detecção de anomalias",
      },
      {
        id: "logistica",
        label: "Logística",
        description:
          "Classifique tarifas, gere declarações aduaneiras, detecte erros documentais e monitore cadeias de suprimentos — com conhecimento das regulamentações aduaneiras do México e LATAM.",
        metric: "−40%",
        metricLabel: "tempos de despacho",
      },
      {
        id: "financiero",
        label: "Financeiro",
        description:
          "Detecção de operações atípicas, aceleração de KYC/KYB, conformidade com circulares CNBV e análise de risco — sem que os dados saiam da sua infraestrutura.",
        metric: "3×",
        metricLabel: "detecção de transações atípicas",
      },
      {
        id: "salud",
        label: "Saúde",
        description:
          "Documentação clínica automatizada, codificação de diagnósticos, assistência em notas de evolução e conformidade COFEPRIS — com rastreabilidade completa de acesso a prontuários.",
        metric: "−35%",
        metricLabel: "erros de documentação clínica",
      },
      {
        id: "energia",
        label: "Energia",
        description:
          "Análise de contratos de fornecimento, monitoramento regulatório CRE, relatórios ESG automatizados e otimização operacional para geradores, distribuidores e comercializadores.",
        metric: "Contínuo",
        metricLabel: "monitoramento regulatório e relatórios ESG",
      },
    ],
  },
  security: {
    badge: "Enterprise",
    h2: "Privado. Seguro. Auditável.",
    subtitle: "Isto é o que \"enterprise-ready\" realmente significa.",
    features: [
      {
        title: "Segurança por arquitetura",
        description:
          "Arquitetura zero-trust com 16 camadas de segurança independentes. Motor construído em Rust — uma linguagem que elimina por design classes inteiras de vulnerabilidades. Criptografia AES-256-GCM em repouso, TLS 1.3 em trânsito. Os segredos são eliminados da memória imediatamente após o uso.",
        cta: "Saiba mais",
      },
      {
        title: "Completamente personalizável",
        description:
          "Cada canal tem seu próprio modelo atribuído, base de conhecimento e regras de acesso. Crie agentes especializados com ferramentas específicas, ajuste modelos com seus dados via fine-tuning do Seeb, e implante fluxos de automação adaptados aos seus processos.",
      },
      {
        title: "Interoperável por design",
        description:
          "Mais de 40 adaptadores de canal: WhatsApp, Telegram, Slack, Teams, e-mail e mais. APIs flexíveis para conectar ERP, CRM, bancos de dados e sistemas legados. Compatível com os principais padrões de integração.",
      },
      {
        title: "Implantável na sua infraestrutura",
        description:
          "Quatro modalidades: SaaS gerenciado, nuvem privada (VPC), on-premise completo ou híbrido. Funciona desde a AWS Querétaro até um servidor air-gapped sem conexão com a internet. Você decide onde seus dados ficam.",
        cta: "Saiba mais",
      },
    ],
  },
  comparison: {
    badge: "Comparativo",
    h2: "O que passa na auditoria — e o que não passa",
    colRequirement: "Requisito de auditoria",
    colGeneric: "Chatbots globais",
    colLattice: "Lattice Platform",
    rows: [
      { requirement: "Dados em território nacional (México)", generic: "Servidores nos EUA", lattice: "AWS Querétaro ou on-premise", genericStatus: "negative", latticeStatus: "positive" },
      { requirement: "Implantação on-premise air-gapped", generic: "Não disponível", lattice: "Disponível", genericStatus: "negative", latticeStatus: "positive" },
      { requirement: "Audit trail imutável e verificável", generic: "Parcial", lattice: "Merkle audit trail", genericStatus: "partial", latticeStatus: "positive" },
      { requirement: "RBAC a nível de agente e ferramenta", generic: "Limitado", lattice: "Granular", genericStatus: "partial", latticeStatus: "positive" },
      { requirement: "Sem retenção de dados pelo provedor", generic: "Não garantido", lattice: "Zero-retention certificado", genericStatus: "negative", latticeStatus: "positive" },
      { requirement: "Conformidade LGTAIP documentada", generic: "Não disponível", lattice: "Documentado", genericStatus: "negative", latticeStatus: "positive" },
      { requirement: "Elegível para licitação pública MX", generic: "Não elegível", lattice: "Elegível (CFDI 4.0 + RFC)", genericStatus: "negative", latticeStatus: "positive" },
    ],
  },
  models: {
    badge: "Modelos",
    h2: "Os modelos que entendem o México",
    subtitle:
      "Lattice não depende de um único provedor de IA. Integra modelos globais de fronteira e modelos próprios especializados para o contexto local.",
    models: [
      {
        name: "Na'at",
        description:
          "Modelo especializado para México e LATAM. Treinado sobre um corpus de normativas mexicanas, espanhol regional e contexto regulatório latino-americano. Três variantes por escala e custo: Na'at 4B, Na'at 9B e Na'at Full.",
        detail: "Open source com atribuição obrigatória. Publicado no Hugging Face.",
      },
      {
        name: "Seeb",
        description:
          "Família de Small Language Models especializados por vertical: Jurídico, Governo, Logística, Energia, Saúde e Financeiro. Cada modelo conhece a terminologia, os processos e a regulamentação específica do seu setor.",
        detail: "Disponível em duas variantes: Seeb (padrão) e Seeb Pro (maior capacidade).",
      },
      {
        name: "Fine-tuning privado",
        description:
          "Ajuste um modelo Seeb com os dados exclusivos da sua organização. O modelo resultante opera exclusivamente dentro do Lattice para sua empresa — ninguém mais o usa, ninguém mais acessa seus dados de treinamento.",
      },
      {
        name: "Modelos globais de fronteira",
        description:
          "Lattice também integra os principais modelos de última geração do mercado. Sua equipe escolhe o modelo por canal ou por sessão, com controle de custos visível antes de cada execução.",
      },
    ],
  },
  testimonial: {
    quote:
      "Lattice nos deu o que nenhum chatbot global poderia: um agente que conhece a regulamentação mexicana, trabalha com nossos documentos reais e não tira nossos dados do país.",
    author: "Cliente piloto",
    role: "Diretor de Tecnologia",
    company: "Empresa do setor regulado",
  },
  cta: {
    badge: "Próximo passo",
    h2: "Leve sua operação ao próximo nível",
    subtitle:
      "Agende uma Sessão de Diagnóstico Inteligente — 45 minutos, sem custo, sem compromisso. Analisamos sua operação e mostramos exatamente como o Lattice se integra ao seu fluxo de trabalho.",
    ctaPrimary: "Agendar sessão de diagnóstico",
    ctaSecondary: "Escrever para hola@sintergica.ai",
    bullets: [
      "Alinhe a IA aos seus fluxos de trabalho e casos de uso reais",
      "Escolha a modalidade de implantação que se adapta à sua infraestrutura",
      "Vá do piloto à produção — de forma segura e mensurável",
    ],
  },
};

/* ── Export ────────────────────────────────────────────────────── */

export const LATTICE_I18N: Record<LangCode, LatticeI18nContent> = { es, en, "pt-br": ptBr };

export const LATTICE_DEFAULT = es;
