
import type { Locale } from "@/i18n/config";

export interface IndustriaMetric {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
}

export interface IndustriaUseCase {
  title: string;
  description: string;
  icon: string;
}

export interface IndustriaData {
  slug: string;
  name: string;
  badge: string;
  imageUrl: string;
  secondaryImageUrl?: string;
  imageAlt: string;
  atmosphericImageUrl?: string;
  headline: string;
  subheadline: string;
  heroMetrics: { value: string; label: string }[];
  sectorIcon: string;
  problemBadge: string;
  problemTitle: string;
  problemBody: string;
  problemPoints: string[];
  agentName: string;
  agentRole: string;
  agentIcon: string;
  agentBio: string;
  agentCapabilities: string[];
  useCases: IndustriaUseCase[];
  impactMetrics: IndustriaMetric[];
}

/* ── Non-translatable base data per industry ─────────────────── */
interface IndustriaBase {
  slug: string;
  imageUrl: string;
  secondaryImageUrl?: string;
  atmosphericImageUrl?: string;
  sectorIcon: string;
  agentIcon: string;
  agentName: string;
  impactMetricValues: { value: number; suffix: string; prefix?: string }[];
}

const INDUSTRIAS_BASE: Record<string, IndustriaBase> = {
  legal: {
    slug: "legal",
    imageUrl: "/images/industries/seeb-legal.jpg",
    secondaryImageUrl: "/images/industries/seeb-legal-2.jpg",
    atmosphericImageUrl: "/images/industries/seeb-legal-2.jpg",
    sectorIcon: "Scale",
    agentIcon: "Scale",
    agentName: "Ana",
    impactMetricValues: [
      { value: 47, suffix: "+" },
      { value: 60, suffix: "%" },
      { value: 96, suffix: "%" },
      { value: 0, suffix: "", prefix: "" },
    ],
  },
  gobierno: {
    slug: "gobierno",
    imageUrl: "/images/industries/seeb-gob.jpg",
    secondaryImageUrl: "/images/industries/seeb-gob-2.jpg",
    atmosphericImageUrl: "/images/industries/seeb-gob-2.jpg",
    sectorIcon: "Landmark",
    agentIcon: "Landmark",
    agentName: "Carlos",
    impactMetricValues: [
      { value: 60, suffix: "%" },
      { value: 3, suffix: "x" },
      { value: 100, suffix: "%" },
      { value: 0, suffix: "" },
    ],
  },
  logistica: {
    slug: "logistica",
    imageUrl: "/images/industries/seeb-logistica.jpg",
    secondaryImageUrl: "/images/industries/seeb-logistica-2.jpg",
    atmosphericImageUrl: "/images/industries/seeb-logistica-2.jpg",
    sectorIcon: "Ship",
    agentIcon: "Ship",
    agentName: "Carlos",
    impactMetricValues: [
      { value: 40, suffix: "%" },
      { value: 95, suffix: "%" },
      { value: 80, suffix: "%" },
      { value: 100, suffix: "%" },
    ],
  },
  energia: {
    slug: "energia",
    imageUrl: "/images/industries/seeb-energia.jpg",
    secondaryImageUrl: "/images/industries/seeb-energia-2.jpg",
    atmosphericImageUrl: "/images/industries/seeb-energia-2.jpg",
    sectorIcon: "Zap",
    agentIcon: "Zap",
    agentName: "Sofía",
    impactMetricValues: [
      { value: 80, suffix: "%" },
      { value: 100, suffix: "%" },
      { value: 90, suffix: "%" },
      { value: 0, suffix: "" },
    ],
  },
  salud: {
    slug: "salud",
    imageUrl: "/images/industries/seeb-salud.jpg",
    secondaryImageUrl: "/images/industries/seeb-salud-2.jpg",
    atmosphericImageUrl: "/images/industries/seeb-salud-2.jpg",
    sectorIcon: "HeartPulse",
    agentIcon: "HeartPulse",
    agentName: "Marco",
    impactMetricValues: [
      { value: 35, suffix: "%" },
      { value: 50, suffix: "%" },
      { value: 100, suffix: "%" },
      { value: 90, suffix: "%" },
    ],
  },
  financiero: {
    slug: "financiero",
    imageUrl: "/images/industries/seeb-finanzas.jpg",
    secondaryImageUrl: "/images/industries/seeb-finanzas-2.jpg",
    atmosphericImageUrl: "/images/industries/seeb-finanzas-2.jpg",
    sectorIcon: "Building2",
    agentIcon: "Building2",
    agentName: "Sofía",
    impactMetricValues: [
      { value: 3, suffix: "x" },
      { value: 90, suffix: "%" },
      { value: 100, suffix: "%" },
      { value: 70, suffix: "%" },
    ],
  },
  ventas: {
    slug: "ventas",
    imageUrl: "/images/industries/seeb-ventas.jpg",
    secondaryImageUrl: "/images/industries/seeb-ventas-2.jpg",
    atmosphericImageUrl: "/images/industries/seeb-ventas-2.jpg",
    sectorIcon: "TrendingUp",
    agentIcon: "TrendingUp",
    agentName: "Laura",
    impactMetricValues: [
      { value: 3, suffix: "x" },
      { value: 40, suffix: "%" },
      { value: 2.5, suffix: "x" },
      { value: 60, suffix: "%" },
    ],
  },
};

/* ── Translatable content per industry, per locale ───────────── */
interface IndustriaText {
  name: string;
  badge: string;
  imageAlt: string;
  headline: string;
  subheadline: string;
  heroMetrics: { value: string; label: string }[];
  problemBadge: string;
  problemTitle: string;
  problemBody: string;
  problemPoints: string[];
  agentRole: string;
  agentBio: string;
  agentCapabilities: string[];
  useCases: IndustriaUseCase[];
  impactMetricLabels: string[];
}

const T: Record<string, Record<Locale, IndustriaText>> = {
  /* ================================================================
   *  LEGAL
   * ================================================================ */
  legal: {
    es: {
      name: "Legal",
      badge: "Sector Legal",
      imageAlt: "Despacho legal con documentos y libros jurídicos",
      headline: "La IA que entiende el derecho mexicano",
      subheadline:
        "Lattice Séeb Legal fue construido con normativa civil, fiscal y contractual de México. No interpreta contratos con lógica de common law — entiende cómo se hacen los contratos aquí.",
      heroMetrics: [
        { value: "47+", label: "contratos revisados por semana" },
        { value: "96%", label: "precisión en detección de riesgos" },
        { value: "DOF", label: "monitoreo automático diario" },
      ],
      problemBadge: "El problema",
      problemTitle: "ChatGPT no sabe lo que es un CFDI. ¿Debería manejar tus contratos?",
      problemBody:
        "Los modelos globales de IA fueron entrenados con datos jurídicos anglosajones. Cuando los aplicas a contratos mexicanos, obtienen respuestas que suenan bien pero ignoran el Código Civil Federal, la LFPDPPP y la normativa fiscal del SAT.",
      problemPoints: [
        "Interpretan obligaciones con lógica de common law, no de derecho civil",
        "Desconocen la estructura de licitaciones bajo LAASSP y CompraNet",
        "No tienen contexto sobre cláusulas arbitrales en México",
        "Ignoran las modificaciones del DOF que cambian el marco regulatorio",
      ],
      agentRole: "Analista Legal — Lattice Séeb Legal",
      agentBio:
        "Ana es el agente especializado de Lattice para el sector legal mexicano. Entrenada con jurisprudencia, legislación federal y normativa fiscal de México, Ana puede revisar contratos, detectar cláusulas de riesgo y monitorear cambios regulatorios de forma autónoma.",
      agentCapabilities: [
        "Revisión de contratos con contexto de derecho civil mexicano",
        "Detección automática de cláusulas de riesgo y ambigüedades",
        "Monitoreo diario del Diario Oficial de la Federación",
        "Alertas de cambios regulatorios por materia y sector",
        "Análisis de licitaciones públicas (LAASSP, CompraNet)",
      ],
      useCases: [
        { title: "Revisión contractual masiva", description: "Analiza contratos completos en minutos, identifica cláusulas de riesgo, obligaciones críticas y omisiones con base en el marco jurídico mexicano.", icon: "FileText" },
        { title: "Monitoreo del DOF", description: "Escaneo diario del Diario Oficial de la Federación. Alertas automáticas cuando cambia normativa relevante para tu práctica o industria.", icon: "Search" },
        { title: "Due diligence acelerado", description: "Revisión de expedientes y documentación corporativa para fusiones, adquisiciones y auditorías. Síntesis ejecutiva con hallazgos críticos.", icon: "FileSearch" },
        { title: "Gestión de obligaciones", description: "Calendario de vencimientos, obligaciones contractuales y reportes regulatorios. Ana genera alertas antes de que se vuelvan urgentes.", icon: "ClipboardList" },
      ],
      impactMetricLabels: [
        "contratos revisados por semana",
        "reducción en tiempo de revisión",
        "precisión en detección de riesgos",
        "cláusulas críticas omitidas",
      ],
    },
    en: {
      name: "Legal",
      badge: "Legal Sector",
      imageAlt: "Law office with legal documents and books",
      headline: "The AI that understands Mexican law",
      subheadline:
        "Lattice Séeb Legal was built with Mexican civil, tax, and contractual regulations. It doesn't interpret contracts with common law logic — it understands how contracts are done here.",
      heroMetrics: [
        { value: "47+", label: "contracts reviewed per week" },
        { value: "96%", label: "risk detection accuracy" },
        { value: "DOF", label: "automatic daily monitoring" },
      ],
      problemBadge: "The problem",
      problemTitle: "ChatGPT doesn't know what a CFDI is. Should it handle your contracts?",
      problemBody:
        "Global AI models were trained with Anglo-Saxon legal data. When you apply them to Mexican contracts, you get answers that sound right but ignore the Federal Civil Code, LFPDPPP, and SAT tax regulations.",
      problemPoints: [
        "They interpret obligations with common law logic, not civil law",
        "They don't know the structure of tenders under LAASSP and CompraNet",
        "They have no context on arbitration clauses in Mexico",
        "They ignore DOF modifications that change the regulatory framework",
      ],
      agentRole: "Legal Analyst — Lattice Séeb Legal",
      agentBio:
        "Ana is Lattice's specialized agent for the Mexican legal sector. Trained with Mexican jurisprudence, federal legislation, and tax regulations, Ana can review contracts, detect risk clauses, and monitor regulatory changes autonomously.",
      agentCapabilities: [
        "Contract review with Mexican civil law context",
        "Automatic detection of risk clauses and ambiguities",
        "Daily monitoring of the Official Gazette (DOF)",
        "Regulatory change alerts by subject and sector",
        "Public tender analysis (LAASSP, CompraNet)",
      ],
      useCases: [
        { title: "Mass contract review", description: "Analyzes complete contracts in minutes, identifies risk clauses, critical obligations, and omissions based on the Mexican legal framework.", icon: "FileText" },
        { title: "DOF monitoring", description: "Daily scanning of the Official Gazette. Automatic alerts when relevant regulations change for your practice or industry.", icon: "Search" },
        { title: "Accelerated due diligence", description: "Review of files and corporate documentation for mergers, acquisitions, and audits. Executive summary with critical findings.", icon: "FileSearch" },
        { title: "Obligation management", description: "Calendar of deadlines, contractual obligations, and regulatory reports. Ana generates alerts before they become urgent.", icon: "ClipboardList" },
      ],
      impactMetricLabels: [
        "contracts reviewed per week",
        "reduction in review time",
        "risk detection accuracy",
        "critical clauses missed",
      ],
    },
    "pt-br": {
      name: "Jurídico",
      badge: "Setor Jurídico",
      imageAlt: "Escritório jurídico com documentos e livros de direito",
      headline: "A IA que entende o direito mexicano",
      subheadline:
        "O Lattice Séeb Legal foi construído com a normativa civil, fiscal e contratual do México. Não interpreta contratos com lógica de common law — entende como os contratos são feitos aqui.",
      heroMetrics: [
        { value: "47+", label: "contratos revisados por semana" },
        { value: "96%", label: "precisão na detecção de riscos" },
        { value: "DOF", label: "monitoramento automático diário" },
      ],
      problemBadge: "O problema",
      problemTitle: "O ChatGPT não sabe o que é um CFDI. Deveria gerenciar seus contratos?",
      problemBody:
        "Os modelos globais de IA foram treinados com dados jurídicos anglo-saxões. Quando aplicados a contratos mexicanos, geram respostas que parecem corretas mas ignoram o Código Civil Federal, a LFPDPPP e a normativa fiscal do SAT.",
      problemPoints: [
        "Interpretam obrigações com lógica de common law, não de direito civil",
        "Desconhecem a estrutura de licitações sob LAASSP e CompraNet",
        "Não têm contexto sobre cláusulas arbitrais no México",
        "Ignoram as modificações do DOF que alteram o marco regulatório",
      ],
      agentRole: "Analista Jurídica — Lattice Séeb Legal",
      agentBio:
        "Ana é a agente especializada do Lattice para o setor jurídico mexicano. Treinada com jurisprudência, legislação federal e normativa fiscal do México, Ana pode revisar contratos, detectar cláusulas de risco e monitorar mudanças regulatórias de forma autônoma.",
      agentCapabilities: [
        "Revisão de contratos com contexto do direito civil mexicano",
        "Detecção automática de cláusulas de risco e ambiguidades",
        "Monitoramento diário do Diário Oficial da Federação",
        "Alertas de mudanças regulatórias por matéria e setor",
        "Análise de licitações públicas (LAASSP, CompraNet)",
      ],
      useCases: [
        { title: "Revisão contratual em massa", description: "Analisa contratos completos em minutos, identifica cláusulas de risco, obrigações críticas e omissões com base no marco jurídico mexicano.", icon: "FileText" },
        { title: "Monitoramento do DOF", description: "Varredura diária do Diário Oficial da Federação. Alertas automáticos quando a normativa relevante para sua prática ou indústria muda.", icon: "Search" },
        { title: "Due diligence acelerada", description: "Revisão de expedientes e documentação corporativa para fusões, aquisições e auditorias. Síntese executiva com achados críticos.", icon: "FileSearch" },
        { title: "Gestão de obrigações", description: "Calendário de vencimentos, obrigações contratuais e relatórios regulatórios. Ana gera alertas antes que se tornem urgentes.", icon: "ClipboardList" },
      ],
      impactMetricLabels: [
        "contratos revisados por semana",
        "redução no tempo de revisão",
        "precisão na detecção de riscos",
        "cláusulas críticas omitidas",
      ],
    },
  },

  /* ================================================================
   *  GOBIERNO
   * ================================================================ */
  gobierno: {
    es: {
      name: "Gobierno",
      badge: "Sector Público",
      imageAlt: "Edificio institucional de gobierno",
      headline: "Seguridad digital para instituciones públicas",
      subheadline:
        "Lattice Séeb Gobierno opera dentro de instituciones municipales, estatales y federales — Ejecutivo, Legislativo y Judicial — procesando licitaciones, expedientes, iniciativas y normativa local sin que tus datos salgan de tu infraestructura.",
      heroMetrics: [
        { value: "3x", label: "más licitaciones analizadas" },
        { value: "60%", label: "menos tiempo en preparación" },
        { value: "100%", label: "datos en infraestructura nacional" },
      ],
      problemBadge: "El problema",
      problemTitle: "El sector público no puede depender de IA extranjera para procesar su información",
      problemBody:
        "Ayuntamientos, congresos locales, tribunales, fiscalías, secretarías estatales y dependencias federales manejan información sensible que no puede enviarse a servidores en Estados Unidos o Europa. Y los modelos de IA disponibles no entienden CompraNet, LAASSP, los reglamentos municipales ni los marcos normativos estatales.",
      problemPoints: [
        "Las herramientas de IA globales requieren enviar datos a servidores extranjeros",
        "Ningún modelo global conoce LAASSP, LOPSRM, CompraNet ni las leyes estatales y municipales de adquisiciones",
        "Cada estado y cada municipio tiene su propio marco normativo además del federal — los modelos globales no los distinguen",
        "La trazabilidad de decisiones es obligatoria por LGTAIP y leyes locales de transparencia, y los modelos externos no la garantizan",
      ],
      agentRole: "Inteligencia Institucional — Lattice Séeb Gobierno",
      agentBio:
        "Carlos es el agente especializado para los tres órdenes de gobierno y los tres poderes. Conoce la APF, CompraNet y LAASSP, pero también las leyes orgánicas estatales y municipales, los reglamentos de cabildo, los procesos legislativos (iniciativas, dictámenes, glosa) y los expedientes y acuerdos del Poder Judicial. Opera completamente dentro de la infraestructura institucional.",
      agentCapabilities: [
        "Análisis de licitaciones bajo LAASSP, LOPSRM y leyes estatales y municipales de adquisiciones",
        "Soporte legislativo: análisis de iniciativas, dictámenes y comparativos normativos entre entidades",
        "Soporte judicial: análisis de expedientes, jurisprudencia y proyectos de sentencia",
        "Generación de reportes institucionales con el formato oficial de cada poder y orden de gobierno",
        "Monitoreo de DOF, periódicos oficiales estatales y gacetas municipales por dependencia",
        "Trazabilidad completa de consultas y decisiones para LGTAIP y leyes locales de transparencia",
      ],
      useCases: [
        { title: "Análisis de licitaciones", description: "Extracción y análisis de convocatorias en CompraNet y plataformas estatales y municipales. Carlos identifica oportunidades, requisitos técnicos y riesgos de participación.", icon: "Search" },
        { title: "Cumplimiento normativo", description: "Verificación continua contra normativa federal, estatal y municipal aplicable a cada institución. Alertas automáticas cuando cambian leyes, reglamentos o lineamientos locales.", icon: "Shield" },
        { title: "Reportes institucionales", description: "Generación automatizada de reportes con el formato y estructura que pide cada poder — Ejecutivo, Legislativo o Judicial — y cada orden de gobierno.", icon: "ClipboardList" },
        { title: "Trazabilidad de procesos", description: "Registro inmutable de decisiones, consultas y acciones. Audit trail completo para transparencia y rendición de cuentas bajo LGTAIP y leyes locales.", icon: "FileSearch" },
      ],
      impactMetricLabels: [
        "reducción en tiempo de preparación",
        "más licitaciones analizadas",
        "trazabilidad de decisiones",
        "datos enviados al extranjero",
      ],
    },
    en: {
      name: "Government",
      badge: "Public Sector",
      imageAlt: "Government institutional building",
      headline: "Digital sovereignty for public institutions",
      subheadline:
        "Lattice Séeb Government runs inside municipal, state, and federal institutions — Executive, Legislative, and Judicial — processing tenders, case files, bills, and local regulations without your data leaving your infrastructure.",
      heroMetrics: [
        { value: "3x", label: "more tenders analyzed" },
        { value: "60%", label: "less preparation time" },
        { value: "100%", label: "data on national infrastructure" },
      ],
      problemBadge: "The problem",
      problemTitle: "The public sector cannot rely on foreign AI to process its information",
      problemBody:
        "City halls, state legislatures, courts, prosecutors' offices, state ministries, and federal agencies all handle sensitive information that cannot be sent to servers in the United States or Europe. And the AI models on the market don't understand CompraNet, LAASSP, municipal bylaws, or state regulatory frameworks.",
      problemPoints: [
        "Global AI tools require sending data to foreign servers",
        "No global model knows LAASSP, LOPSRM, CompraNet, or state and municipal procurement laws",
        "Every state and municipality has its own regulatory framework on top of the federal one — global models don't tell them apart",
        "Decision traceability is mandatory under LGTAIP and local transparency laws — external models don't guarantee it",
      ],
      agentRole: "Institutional Intelligence — Lattice Séeb Government",
      agentBio:
        "Carlos is the specialized agent for the three levels of government and the three branches. He knows APF, CompraNet, and LAASSP, but also state and municipal organic laws, city council bylaws, legislative processes (bills, committee reports, oversight) and case files, opinions, and rulings of the Judicial branch. He operates entirely within institutional infrastructure.",
      agentCapabilities: [
        "Tender analysis under LAASSP, LOPSRM, and state and municipal procurement laws",
        "Legislative support: analysis of bills, committee reports, and cross-jurisdictional comparisons",
        "Judicial support: case file analysis, jurisprudence, and draft rulings",
        "Institutional report generation in the official format of each branch and level of government",
        "Monitoring of DOF, state official gazettes, and municipal bulletins by agency",
        "Full traceability of queries and decisions for LGTAIP and local transparency laws",
      ],
      useCases: [
        { title: "Tender analysis", description: "Extraction and analysis of calls on CompraNet and state and municipal procurement platforms. Carlos identifies opportunities, technical requirements, and participation risks.", icon: "Search" },
        { title: "Regulatory compliance", description: "Continuous verification against federal, state, and municipal regulations applicable to each institution. Automatic alerts when laws, bylaws, or local guidelines change.", icon: "Shield" },
        { title: "Institutional reports", description: "Automated reports in the format and structure required by each branch — Executive, Legislative, or Judicial — and each level of government.", icon: "ClipboardList" },
        { title: "Process traceability", description: "Immutable record of decisions, queries, and actions. Complete audit trail for transparency and accountability under LGTAIP and local laws.", icon: "FileSearch" },
      ],
      impactMetricLabels: [
        "reduction in preparation time",
        "more tenders analyzed",
        "decision traceability",
        "data sent abroad",
      ],
    },
    "pt-br": {
      name: "Governo",
      badge: "Setor Público",
      imageAlt: "Edifício institucional do governo",
      headline: "Soberania digital para instituições públicas",
      subheadline:
        "O Lattice Séeb Governo opera dentro de instituições municipais, estaduais e federais — Executivo, Legislativo e Judiciário — processando licitações, processos, projetos de lei e normativa local sem que seus dados saiam da sua infraestrutura.",
      heroMetrics: [
        { value: "3x", label: "mais licitações analisadas" },
        { value: "60%", label: "menos tempo de preparação" },
        { value: "100%", label: "dados em infraestrutura nacional" },
      ],
      problemBadge: "O problema",
      problemTitle: "O setor público não pode depender de IA estrangeira para processar suas informações",
      problemBody:
        "Prefeituras, assembleias estaduais, tribunais, ministérios públicos, secretarias estaduais e órgãos federais lidam com informações sensíveis que não podem ser enviadas a servidores nos Estados Unidos ou Europa. E os modelos de IA disponíveis não entendem CompraNet, LAASSP, regulamentos municipais nem os marcos normativos estaduais.",
      problemPoints: [
        "As ferramentas de IA globais exigem envio de dados a servidores estrangeiros",
        "Nenhum modelo global conhece LAASSP, LOPSRM, CompraNet nem as leis estaduais e municipais de aquisições",
        "Cada estado e cada município tem seu próprio marco normativo além do federal — os modelos globais não os distinguem",
        "A rastreabilidade de decisões é obrigatória pela LGTAIP e pelas leis locais de transparência, e os modelos externos não a garantem",
      ],
      agentRole: "Inteligência Institucional — Lattice Séeb Governo",
      agentBio:
        "Carlos é o agente especializado para os três níveis de governo e os três poderes. Conhece a APF, o CompraNet e a LAASSP, mas também as leis orgânicas estaduais e municipais, os regulamentos das câmaras municipais, os processos legislativos (projetos de lei, pareceres, fiscalização) e os processos, decisões e sentenças do Poder Judiciário. Opera completamente dentro da infraestrutura institucional.",
      agentCapabilities: [
        "Análise de licitações sob LAASSP, LOPSRM e leis estaduais e municipais de aquisições",
        "Suporte legislativo: análise de projetos de lei, pareceres e comparativos normativos entre entidades",
        "Suporte judicial: análise de processos, jurisprudência e minutas de sentença",
        "Geração de relatórios institucionais no formato oficial de cada poder e nível de governo",
        "Monitoramento do DOF, diários oficiais estaduais e gazetas municipais por órgão",
        "Rastreabilidade completa de consultas e decisões para LGTAIP e leis locais de transparência",
      ],
      useCases: [
        { title: "Análise de licitações", description: "Extração e análise de editais no CompraNet e em plataformas estaduais e municipais. Carlos identifica oportunidades, requisitos técnicos e riscos de participação.", icon: "Search" },
        { title: "Conformidade regulatória", description: "Verificação contínua frente à normativa federal, estadual e municipal aplicável a cada instituição. Alertas automáticos quando leis, regulamentos ou diretrizes locais mudam.", icon: "Shield" },
        { title: "Relatórios institucionais", description: "Geração automatizada de relatórios no formato e estrutura exigidos por cada poder — Executivo, Legislativo ou Judiciário — e cada nível de governo.", icon: "ClipboardList" },
        { title: "Rastreabilidade de processos", description: "Registro imutável de decisões, consultas e ações. Trilha de auditoria completa para transparência e prestação de contas sob a LGTAIP e leis locais.", icon: "FileSearch" },
      ],
      impactMetricLabels: [
        "redução no tempo de preparação",
        "mais licitações analisadas",
        "rastreabilidade de decisões",
        "dados enviados ao exterior",
      ],
    },
  },

  /* ================================================================
   *  LOGÍSTICA
   * ================================================================ */
  logistica: {
    es: {
      name: "Logística y Comercio Exterior",
      badge: "Logística y Comercio Exterior",
      imageAlt: "Centro de distribución logística",
      headline: "Despacho más rápido. Cadena sin fricciones.",
      subheadline:
        "Lattice Séeb Logística conoce la Ley Aduanera, el SAT, carta porte y los procesos de comercio exterior mexicano. Automatiza la validación documental y acelera cada etapa del despacho.",
      heroMetrics: [
        { value: "40%", label: "reducción en tiempos de despacho" },
        { value: "95%", label: "precisión en clasificación arancelaria" },
        { value: "100%", label: "visibilidad de la cadena en tiempo real" },
      ],
      problemBadge: "El problema",
      problemTitle: "La aduana no perdona errores. Los modelos globales no conocen las reglas mexicanas.",
      problemBody:
        "La clasificación arancelaria, la carta porte y la normativa de comercio exterior en México tienen sus propias reglas. Un error de clasificación o un complemento mal generado puede paralizar una operación entera.",
      problemPoints: [
        "Los modelos globales no conocen la estructura del CFDI con Carta Porte",
        "La clasificación arancelaria requiere conocimiento del TIGIE mexicano",
        "Las reglas del SAT para comercio exterior cambian frecuentemente",
        "La validación de pedimentos requiere contexto aduanal específico de México",
      ],
      agentRole: "Coordinador Logístico — Lattice Séeb Logística",
      agentBio:
        "Carlos es el agente especializado en logística y comercio exterior. Conoce la Ley Aduanera, el TIGIE, la NOM de comercio exterior y los procesos del SAT. Valida documentación, clasifica mercancías y da visibilidad en tiempo real de toda la cadena.",
      agentCapabilities: [
        "Validación automática de CFDIs con Carta Porte",
        "Clasificación arancelaria con base en TIGIE actualizado",
        "Verificación de cumplimiento con regulaciones SAT",
        "Trazabilidad de embarques en tiempo real",
        "Alertas de inconsistencias antes del despacho",
      ],
      useCases: [
        { title: "Validación documental", description: "Revisión automática de CFDIs, pedimentos y carta porte antes del despacho. Detecta errores que causarían retención aduanal.", icon: "FileText" },
        { title: "Clasificación arancelaria", description: "Clasificación de mercancías con base en el TIGIE y NOM aplicables. Reduce errores de clasificación y sanciones aduanales.", icon: "Package" },
        { title: "Trazabilidad de cadena", description: "Visibilidad completa del estado de embarques, almacenes y entregas. Dashboard en tiempo real con alertas de desviaciones.", icon: "Globe" },
        { title: "Cumplimiento normativo", description: "Monitoreo de cambios en regulaciones SAT, Ley Aduanera y NOMs. Carlos alerta cuando una regla cambia y afecta tus operaciones.", icon: "Shield" },
      ],
      impactMetricLabels: [
        "reducción en tiempos de despacho",
        "precisión en clasificación arancelaria",
        "menos errores documentales",
        "visibilidad de cadena en tiempo real",
      ],
    },
    en: {
      name: "Logistics & Foreign Trade",
      badge: "Logistics & Foreign Trade",
      imageAlt: "Logistics distribution center",
      headline: "Faster clearance. Frictionless supply chain.",
      subheadline:
        "Lattice Séeb Logistics knows Mexico's Customs Law, SAT, carta porte, and foreign trade processes. It automates document validation and accelerates every stage of clearance.",
      heroMetrics: [
        { value: "40%", label: "reduction in clearance times" },
        { value: "95%", label: "tariff classification accuracy" },
        { value: "100%", label: "real-time supply chain visibility" },
      ],
      problemBadge: "The problem",
      problemTitle: "Customs doesn't forgive mistakes. Global models don't know the Mexican rules.",
      problemBody:
        "Tariff classification, carta porte, and Mexico's foreign trade regulations have their own rules. A classification error or poorly generated complement can paralyze an entire operation.",
      problemPoints: [
        "Global models don't know the CFDI with Carta Porte structure",
        "Tariff classification requires knowledge of the Mexican TIGIE",
        "SAT rules for foreign trade change frequently",
        "Customs document validation requires Mexico-specific customs context",
      ],
      agentRole: "Logistics Coordinator — Lattice Séeb Logistics",
      agentBio:
        "Carlos is the specialized agent for logistics and foreign trade. He knows the Customs Law, TIGIE, foreign trade NOMs, and SAT processes. He validates documentation, classifies goods, and provides real-time visibility across the entire chain.",
      agentCapabilities: [
        "Automatic validation of CFDIs with Carta Porte",
        "Tariff classification based on updated TIGIE",
        "SAT regulation compliance verification",
        "Real-time shipment traceability",
        "Pre-clearance inconsistency alerts",
      ],
      useCases: [
        { title: "Document validation", description: "Automatic review of CFDIs, customs declarations, and carta porte before clearance. Detects errors that would cause customs retention.", icon: "FileText" },
        { title: "Tariff classification", description: "Goods classification based on applicable TIGIE and NOMs. Reduces classification errors and customs penalties.", icon: "Package" },
        { title: "Supply chain traceability", description: "Full visibility of shipment, warehouse, and delivery status. Real-time dashboard with deviation alerts.", icon: "Globe" },
        { title: "Regulatory compliance", description: "Monitoring changes in SAT regulations, Customs Law, and NOMs. Carlos alerts when a rule change affects your operations.", icon: "Shield" },
      ],
      impactMetricLabels: [
        "reduction in clearance times",
        "tariff classification accuracy",
        "fewer document errors",
        "real-time supply chain visibility",
      ],
    },
    "pt-br": {
      name: "Logística e Comércio Exterior",
      badge: "Logística e Comércio Exterior",
      imageAlt: "Centro de distribuição logística",
      headline: "Despacho mais rápido. Cadeia sem atritos.",
      subheadline:
        "O Lattice Séeb Logística conhece a Lei Aduaneira, o SAT, a carta porte e os processos de comércio exterior mexicano. Automatiza a validação documental e acelera cada etapa do despacho.",
      heroMetrics: [
        { value: "40%", label: "redução nos tempos de despacho" },
        { value: "95%", label: "precisão na classificação tarifária" },
        { value: "100%", label: "visibilidade da cadeia em tempo real" },
      ],
      problemBadge: "O problema",
      problemTitle: "A alfândega não perdoa erros. Os modelos globais não conhecem as regras mexicanas.",
      problemBody:
        "A classificação tarifária, a carta porte e a normativa de comércio exterior no México têm suas próprias regras. Um erro de classificação ou um complemento mal gerado pode paralisar uma operação inteira.",
      problemPoints: [
        "Os modelos globais não conhecem a estrutura do CFDI com Carta Porte",
        "A classificação tarifária requer conhecimento do TIGIE mexicano",
        "As regras do SAT para comércio exterior mudam frequentemente",
        "A validação de documentos aduaneiros requer contexto específico do México",
      ],
      agentRole: "Coordenador Logístico — Lattice Séeb Logística",
      agentBio:
        "Carlos é o agente especializado em logística e comércio exterior. Conhece a Lei Aduaneira, o TIGIE, as NOMs de comércio exterior e os processos do SAT. Valida documentação, classifica mercadorias e oferece visibilidade em tempo real de toda a cadeia.",
      agentCapabilities: [
        "Validação automática de CFDIs com Carta Porte",
        "Classificação tarifária com base no TIGIE atualizado",
        "Verificação de conformidade com regulamentações do SAT",
        "Rastreabilidade de embarques em tempo real",
        "Alertas de inconsistências antes do despacho",
      ],
      useCases: [
        { title: "Validação documental", description: "Revisão automática de CFDIs, declarações aduaneiras e carta porte antes do despacho. Detecta erros que causariam retenção aduaneira.", icon: "FileText" },
        { title: "Classificação tarifária", description: "Classificação de mercadorias com base no TIGIE e NOMs aplicáveis. Reduz erros de classificação e penalidades aduaneiras.", icon: "Package" },
        { title: "Rastreabilidade da cadeia", description: "Visibilidade completa do status de embarques, armazéns e entregas. Dashboard em tempo real com alertas de desvios.", icon: "Globe" },
        { title: "Conformidade regulatória", description: "Monitoramento de mudanças nas regulamentações do SAT, Lei Aduaneira e NOMs. Carlos alerta quando uma regra muda e afeta suas operações.", icon: "Shield" },
      ],
      impactMetricLabels: [
        "redução nos tempos de despacho",
        "precisão na classificação tarifária",
        "menos erros documentais",
        "visibilidade da cadeia em tempo real",
      ],
    },
  },

  /* ================================================================
   *  ENERGÍA
   * ================================================================ */
  energia: {
    es: {
      name: "Energía",
      badge: "Sector Energético",
      imageAlt: "Infraestructura energética",
      headline: "Compliance energético sin fricción",
      subheadline:
        "Lattice Séeb Energía entiende la Ley de la Industria Eléctrica, la regulación de la CRE y los procesos de CENACE. Automatiza reportes regulatorios y monitorea el cumplimiento de concesiones.",
      heroMetrics: [
        { value: "100%", label: "cobertura de reportes CRE" },
        { value: "80%", label: "reducción en tiempo de compliance" },
        { value: "Minutos", label: "vs semanas para generar reportes" },
      ],
      problemBadge: "El problema",
      problemTitle: "El sector energético mexicano tiene su propio lenguaje regulatorio. Los modelos globales no lo hablan.",
      problemBody:
        "La Ley de la Industria Eléctrica, las regulaciones de la CRE y los procesos de CENACE son únicos en el mundo. Un modelo entrenado con datos del DOE de EUA no puede ayudarte a preparar un reporte para la CRE.",
      problemPoints: [
        "Los modelos globales desconocen la Ley de la Industria Eléctrica mexicana",
        "Las regulaciones de la CRE no tienen equivalente en otras jurisdicciones",
        "Los procesos de CENACE y CFE tienen nomenclatura y procedimientos únicos",
        "Los cambios regulatorios en el sector energético son frecuentes y críticos",
      ],
      agentRole: "Compliance Energético — Lattice Séeb Energía",
      agentBio:
        "Sofía es el agente especializado en cumplimiento regulatorio para el sector energético mexicano. Conoce la Ley de la Industria Eléctrica, las regulaciones de la CRE, CENACE y los procesos de CFE. Automatiza reportes y monitorea concesiones.",
      agentCapabilities: [
        "Generación automática de reportes para la CRE",
        "Monitoreo de concesiones y permisos de generación",
        "Análisis de cumplimiento con la Ley de la Industria Eléctrica",
        "Alertas de vencimientos de obligaciones regulatorias",
        "Procesamiento de resoluciones y acuerdos de la CRE",
      ],
      useCases: [
        { title: "Reportes regulatorios CRE", description: "Generación automatizada de reportes periódicos con el formato y datos requeridos por la Comisión Reguladora de Energía.", icon: "BarChart3" },
        { title: "Monitoreo de concesiones", description: "Control de vigencia, obligaciones y condicionantes de concesiones y permisos de generación, transmisión y distribución.", icon: "Shield" },
        { title: "Análisis tarifario", description: "Procesamiento de resoluciones tarifarias y análisis de impacto en operaciones. Sofía traduce la regulación en decisiones operativas.", icon: "BarChart3" },
        { title: "Compliance continuo", description: "Monitoreo permanente de cambios en la Ley de la Industria Eléctrica y regulaciones de la CRE. Alertas automáticas por impacto operativo.", icon: "AlertTriangle" },
      ],
      impactMetricLabels: [
        "reducción en tiempo de compliance",
        "cobertura de reportes CRE",
        "menos tiempo en preparación de reportes",
        "vencimientos de obligaciones omitidos",
      ],
    },
    en: {
      name: "Energy",
      badge: "Energy Sector",
      imageAlt: "Energy infrastructure",
      headline: "Frictionless energy compliance",
      subheadline:
        "Lattice Séeb Energy understands the Electric Industry Law, CRE regulations, and CENACE processes. It automates regulatory reports and monitors concession compliance.",
      heroMetrics: [
        { value: "100%", label: "CRE report coverage" },
        { value: "80%", label: "reduction in compliance time" },
        { value: "Minutes", label: "vs weeks to generate reports" },
      ],
      problemBadge: "The problem",
      problemTitle: "Mexico's energy sector has its own regulatory language. Global models don't speak it.",
      problemBody:
        "The Electric Industry Law, CRE regulations, and CENACE processes are unique in the world. A model trained with US DOE data cannot help you prepare a CRE report.",
      problemPoints: [
        "Global models don't know Mexico's Electric Industry Law",
        "CRE regulations have no equivalent in other jurisdictions",
        "CENACE and CFE processes have unique nomenclature and procedures",
        "Regulatory changes in the energy sector are frequent and critical",
      ],
      agentRole: "Energy Compliance — Lattice Séeb Energy",
      agentBio:
        "Sofía is the specialized agent for regulatory compliance in the Mexican energy sector. She knows the Electric Industry Law, CRE and CENACE regulations, and CFE processes. She automates reports and monitors concessions.",
      agentCapabilities: [
        "Automatic CRE report generation",
        "Concession and generation permit monitoring",
        "Electric Industry Law compliance analysis",
        "Regulatory obligation expiration alerts",
        "CRE resolution and agreement processing",
      ],
      useCases: [
        { title: "CRE regulatory reports", description: "Automated generation of periodic reports with the format and data required by the Energy Regulatory Commission.", icon: "BarChart3" },
        { title: "Concession monitoring", description: "Tracking validity, obligations, and conditions of generation, transmission, and distribution concessions and permits.", icon: "Shield" },
        { title: "Tariff analysis", description: "Processing tariff resolutions and analyzing operational impact. Sofía translates regulation into operational decisions.", icon: "BarChart3" },
        { title: "Continuous compliance", description: "Permanent monitoring of changes in the Electric Industry Law and CRE regulations. Automatic alerts by operational impact.", icon: "AlertTriangle" },
      ],
      impactMetricLabels: [
        "reduction in compliance time",
        "CRE report coverage",
        "less time in report preparation",
        "obligation expirations missed",
      ],
    },
    "pt-br": {
      name: "Energia",
      badge: "Setor Energético",
      imageAlt: "Infraestrutura energética",
      headline: "Compliance energético sem atrito",
      subheadline:
        "O Lattice Séeb Energia entende a Lei da Indústria Elétrica, a regulamentação da CRE e os processos do CENACE. Automatiza relatórios regulatórios e monitora o cumprimento de concessões.",
      heroMetrics: [
        { value: "100%", label: "cobertura de relatórios CRE" },
        { value: "80%", label: "redução no tempo de compliance" },
        { value: "Minutos", label: "vs semanas para gerar relatórios" },
      ],
      problemBadge: "O problema",
      problemTitle: "O setor energético mexicano tem sua própria linguagem regulatória. Os modelos globais não a falam.",
      problemBody:
        "A Lei da Indústria Elétrica, as regulamentações da CRE e os processos do CENACE são únicos no mundo. Um modelo treinado com dados do DOE dos EUA não pode ajudá-lo a preparar um relatório para a CRE.",
      problemPoints: [
        "Os modelos globais desconhecem a Lei da Indústria Elétrica mexicana",
        "As regulamentações da CRE não têm equivalente em outras jurisdições",
        "Os processos do CENACE e CFE têm nomenclatura e procedimentos únicos",
        "As mudanças regulatórias no setor energético são frequentes e críticas",
      ],
      agentRole: "Compliance Energético — Lattice Séeb Energia",
      agentBio:
        "Sofía é a agente especializada em conformidade regulatória para o setor energético mexicano. Conhece a Lei da Indústria Elétrica, as regulamentações da CRE, CENACE e os processos da CFE. Automatiza relatórios e monitora concessões.",
      agentCapabilities: [
        "Geração automática de relatórios para a CRE",
        "Monitoramento de concessões e permissões de geração",
        "Análise de conformidade com a Lei da Indústria Elétrica",
        "Alertas de vencimento de obrigações regulatórias",
        "Processamento de resoluções e acordos da CRE",
      ],
      useCases: [
        { title: "Relatórios regulatórios CRE", description: "Geração automatizada de relatórios periódicos com o formato e dados exigidos pela Comissão Reguladora de Energia.", icon: "BarChart3" },
        { title: "Monitoramento de concessões", description: "Controle de vigência, obrigações e condicionantes de concessões e permissões de geração, transmissão e distribuição.", icon: "Shield" },
        { title: "Análise tarifária", description: "Processamento de resoluções tarifárias e análise de impacto nas operações. Sofía traduz a regulamentação em decisões operacionais.", icon: "BarChart3" },
        { title: "Compliance contínuo", description: "Monitoramento permanente de mudanças na Lei da Indústria Elétrica e regulamentações da CRE. Alertas automáticos por impacto operacional.", icon: "AlertTriangle" },
      ],
      impactMetricLabels: [
        "redução no tempo de compliance",
        "cobertura de relatórios CRE",
        "menos tempo na preparação de relatórios",
        "vencimentos de obrigações omitidos",
      ],
    },
  },

  /* ================================================================
   *  SALUD
   * ================================================================ */
  salud: {
    es: {
      name: "Salud",
      badge: "Sector Salud",
      imageAlt: "Personal médico en entorno hospitalario",
      headline: "Precisión clínica. Compliance COFEPRIS.",
      subheadline:
        "Lattice Séeb Salud fue diseñado con la normativa COFEPRIS, NOM-024 y los protocolos institucionales del sector salud mexicano. Reduce errores documentales y acelera el cumplimiento normativo.",
      heroMetrics: [
        { value: "35%", label: "reducción en errores de documentación" },
        { value: "50%", label: "menos tiempo en auditorías" },
        { value: "100%", label: "trazabilidad de expedientes" },
      ],
      problemBadge: "El problema",
      problemTitle: "La documentación clínica en México requiere precisión absoluta. Un modelo global no basta.",
      problemBody:
        "Los expedientes clínicos, los protocolos COFEPRIS y las NOM del sector salud mexicano tienen requerimientos específicos que ningún modelo global domina. Un error de documentación puede costar una sanción o un proceso legal.",
      problemPoints: [
        "La NOM-004-SSA3 sobre expedientes clínicos no tiene equivalente global",
        "Los protocolos COFEPRIS requieren formatos y terminología específica de México",
        "La NOM-024-SSA3 para sistemas de información de salud tiene estructura propia",
        "Las auditorías de la SSA exigen trazabilidad completa que los sistemas externos no garantizan",
      ],
      agentRole: "Analista Clínico — Lattice Séeb Salud",
      agentBio:
        "Marco es el agente especializado en el sector salud mexicano. Conoce las NOM aplicables, los protocolos COFEPRIS y los requerimientos de documentación clínica. Ayuda a reducir errores, agilizar auditorías y mantener el cumplimiento normativo.",
      agentCapabilities: [
        "Revisión de expedientes clínicos contra NOM-004-SSA3",
        "Generación de reportes COFEPRIS con formato requerido",
        "Verificación de cumplimiento con NOM-024 en sistemas de información",
        "Auditoría documental con trazabilidad completa",
        "Alertas de vencimientos de permisos sanitarios",
      ],
      useCases: [
        { title: "Expedientes clínicos", description: "Verificación automática de completitud y cumplimiento de expedientes clínicos contra los requerimientos de la NOM-004-SSA3.", icon: "FileText" },
        { title: "Compliance COFEPRIS", description: "Preparación y revisión de documentación para trámites y renovaciones ante COFEPRIS. Marco conoce los formatos y criterios específicos.", icon: "Shield" },
        { title: "Protocolos institucionales", description: "Documentación y seguimiento de protocolos clínicos internos. Consistencia y trazabilidad en todos los procesos asistenciales.", icon: "ClipboardList" },
        { title: "Auditoría documental", description: "Preparación para auditorías de la SSA con evidencia organizada, trazable y disponible de forma inmediata.", icon: "FileSearch" },
      ],
      impactMetricLabels: [
        "reducción en errores de documentación",
        "menos tiempo en auditorías",
        "trazabilidad de expedientes",
        "reducción en tiempo de trámites COFEPRIS",
      ],
    },
    en: {
      name: "Healthcare",
      badge: "Healthcare Sector",
      imageAlt: "Medical staff in hospital environment",
      headline: "Clinical precision. COFEPRIS compliance.",
      subheadline:
        "Lattice Séeb Health was designed with COFEPRIS regulations, NOM-024, and the institutional protocols of Mexico's healthcare sector. It reduces documentation errors and accelerates regulatory compliance.",
      heroMetrics: [
        { value: "35%", label: "reduction in documentation errors" },
        { value: "50%", label: "less time in audits" },
        { value: "100%", label: "medical records traceability" },
      ],
      problemBadge: "The problem",
      problemTitle: "Clinical documentation in Mexico requires absolute precision. A global model is not enough.",
      problemBody:
        "Clinical records, COFEPRIS protocols, and Mexico's health sector NOMs have specific requirements that no global model masters. A documentation error can cost a sanction or a legal process.",
      problemPoints: [
        "NOM-004-SSA3 on clinical records has no global equivalent",
        "COFEPRIS protocols require Mexico-specific formats and terminology",
        "NOM-024-SSA3 for health information systems has its own structure",
        "SSA audits demand complete traceability that external systems don't guarantee",
      ],
      agentRole: "Clinical Analyst — Lattice Séeb Health",
      agentBio:
        "Marco is the specialized agent for the Mexican healthcare sector. He knows the applicable NOMs, COFEPRIS protocols, and clinical documentation requirements. He helps reduce errors, streamline audits, and maintain regulatory compliance.",
      agentCapabilities: [
        "Clinical records review against NOM-004-SSA3",
        "COFEPRIS report generation in required format",
        "NOM-024 compliance verification in information systems",
        "Document audit with full traceability",
        "Health permit expiration alerts",
      ],
      useCases: [
        { title: "Clinical records", description: "Automatic completeness and compliance verification of clinical records against NOM-004-SSA3 requirements.", icon: "FileText" },
        { title: "COFEPRIS compliance", description: "Preparation and review of documentation for COFEPRIS filings and renewals. Marco knows the specific formats and criteria.", icon: "Shield" },
        { title: "Institutional protocols", description: "Documentation and tracking of internal clinical protocols. Consistency and traceability across all care processes.", icon: "ClipboardList" },
        { title: "Document audit", description: "Preparation for SSA audits with organized, traceable, and immediately available evidence.", icon: "FileSearch" },
      ],
      impactMetricLabels: [
        "reduction in documentation errors",
        "less time in audits",
        "medical records traceability",
        "reduction in COFEPRIS filing time",
      ],
    },
    "pt-br": {
      name: "Saúde",
      badge: "Setor de Saúde",
      imageAlt: "Equipe médica em ambiente hospitalar",
      headline: "Precisão clínica. Compliance COFEPRIS.",
      subheadline:
        "O Lattice Séeb Saúde foi projetado com a normativa COFEPRIS, NOM-024 e os protocolos institucionais do setor de saúde mexicano. Reduz erros documentais e acelera o cumprimento regulatório.",
      heroMetrics: [
        { value: "35%", label: "redução em erros de documentação" },
        { value: "50%", label: "menos tempo em auditorias" },
        { value: "100%", label: "rastreabilidade de prontuários" },
      ],
      problemBadge: "O problema",
      problemTitle: "A documentação clínica no México requer precisão absoluta. Um modelo global não basta.",
      problemBody:
        "Os prontuários clínicos, os protocolos da COFEPRIS e as NOMs do setor de saúde mexicano têm requisitos específicos que nenhum modelo global domina. Um erro de documentação pode custar uma sanção ou um processo legal.",
      problemPoints: [
        "A NOM-004-SSA3 sobre prontuários clínicos não tem equivalente global",
        "Os protocolos da COFEPRIS exigem formatos e terminologia específicos do México",
        "A NOM-024-SSA3 para sistemas de informação em saúde tem estrutura própria",
        "As auditorias da SSA exigem rastreabilidade completa que os sistemas externos não garantem",
      ],
      agentRole: "Analista Clínico — Lattice Séeb Saúde",
      agentBio:
        "Marco é o agente especializado no setor de saúde mexicano. Conhece as NOMs aplicáveis, os protocolos da COFEPRIS e os requisitos de documentação clínica. Ajuda a reduzir erros, agilizar auditorias e manter o cumprimento regulatório.",
      agentCapabilities: [
        "Revisão de prontuários clínicos contra NOM-004-SSA3",
        "Geração de relatórios COFEPRIS no formato exigido",
        "Verificação de conformidade com NOM-024 em sistemas de informação",
        "Auditoria documental com rastreabilidade completa",
        "Alertas de vencimento de licenças sanitárias",
      ],
      useCases: [
        { title: "Prontuários clínicos", description: "Verificação automática de completude e conformidade de prontuários clínicos contra os requisitos da NOM-004-SSA3.", icon: "FileText" },
        { title: "Compliance COFEPRIS", description: "Preparação e revisão de documentação para trâmites e renovações junto à COFEPRIS. Marco conhece os formatos e critérios específicos.", icon: "Shield" },
        { title: "Protocolos institucionais", description: "Documentação e acompanhamento de protocolos clínicos internos. Consistência e rastreabilidade em todos os processos assistenciais.", icon: "ClipboardList" },
        { title: "Auditoria documental", description: "Preparação para auditorias da SSA com evidência organizada, rastreável e disponível de forma imediata.", icon: "FileSearch" },
      ],
      impactMetricLabels: [
        "redução em erros de documentação",
        "menos tempo em auditorias",
        "rastreabilidade de prontuários",
        "redução no tempo de trâmites COFEPRIS",
      ],
    },
  },

  /* ================================================================
   *  FINANCIERO
   * ================================================================ */
  financiero: {
    es: {
      name: "Financiero",
      badge: "Sector Financiero",
      imageAlt: "Entorno financiero con análisis de datos",
      headline: "Compliance financiero con contexto mexicano",
      subheadline:
        "Lattice Séeb Financiero entiende PLD, CNBV, UIF y la Ley de Instituciones de Crédito. Detecta transacciones atípicas, automatiza reportes regulatorios y mantiene tu KYC actualizado.",
      heroMetrics: [
        { value: "3x", label: "más rápida detección de transacciones atípicas" },
        { value: "90%", label: "reducción en tiempo de reportes PLD" },
        { value: "100%", label: "cobertura de obligaciones CNBV/UIF" },
      ],
      problemBadge: "El problema",
      problemTitle: "PLD, CNBV, UIF. La normativa financiera mexicana no tiene equivalente en ningún otro país.",
      problemBody:
        "Las obligaciones de Prevención de Lavado de Dinero en México tienen su propio marco normativo, plazos y formatos. Un modelo entrenado con datos del FinCEN de EUA no puede ayudarte a cumplir con la UIF mexicana.",
      problemPoints: [
        "La estructura de reportes UIF no tiene equivalente en regulaciones extranjeras",
        "Las Disposiciones de Carácter General de la CNBV son únicas en México",
        "Las matrices de riesgo PLD requieren contexto del sistema financiero mexicano",
        "Los criterios de KYC del Banco de México difieren de los estándares FATF globales",
      ],
      agentRole: "Compliance Financiero — Lattice Séeb Financiero",
      agentBio:
        "Sofía es el agente especializado en compliance financiero mexicano. Domina las Disposiciones de la CNBV, los requerimientos UIF, las matrices de riesgo PLD y los criterios de KYC del Banco de México. Monitorea transacciones y genera reportes regulatorios automáticamente.",
      agentCapabilities: [
        "Monitoreo de transacciones para detección de patrones atípicos",
        "Generación automática de Reportes de Operaciones Relevantes y Inusuales",
        "KYC automatizado con validación contra listas nacionales e internacionales",
        "Análisis de matrices de riesgo PLD con contexto mexicano",
        "Generación de reportes CNBV con formato y plazos regulatorios",
      ],
      useCases: [
        { title: "Detección PLD", description: "Monitoreo continuo de transacciones para identificar operaciones inusuales o relevantes según los criterios de la UIF y CNBV.", icon: "AlertTriangle" },
        { title: "Reportes regulatorios", description: "Generación automatizada de Reportes de Operaciones Relevantes, Inusuales y en Efectivo con formato y plazos de la UIF.", icon: "BarChart3" },
        { title: "KYC automatizado", description: "Verificación y actualización de expedientes de clientes contra listas OFAC, ONU y nacionales. Alertas de vencimiento de documentación.", icon: "CreditCard" },
        { title: "Auditoría de compliance", description: "Preparación para auditorías CNBV con evidencia organizada, trazable y disponible. Sofía identifica gaps antes de la visita regulatoria.", icon: "FileSearch" },
      ],
      impactMetricLabels: [
        "más rápida detección de transacciones atípicas",
        "reducción en tiempo de reportes PLD",
        "cobertura de obligaciones CNBV/UIF",
        "menos tiempo en preparación de auditorías",
      ],
    },
    en: {
      name: "Financial",
      badge: "Financial Sector",
      imageAlt: "Financial environment with data analysis",
      headline: "Financial compliance with Mexican context",
      subheadline:
        "Lattice Séeb Financial understands AML, CNBV, UIF, and the Credit Institutions Law. It detects atypical transactions, automates regulatory reports, and keeps your KYC up to date.",
      heroMetrics: [
        { value: "3x", label: "faster atypical transaction detection" },
        { value: "90%", label: "reduction in AML report time" },
        { value: "100%", label: "CNBV/UIF obligation coverage" },
      ],
      problemBadge: "The problem",
      problemTitle: "AML, CNBV, UIF. Mexico's financial regulations have no equivalent in any other country.",
      problemBody:
        "Mexico's Anti-Money Laundering obligations have their own regulatory framework, deadlines, and formats. A model trained with US FinCEN data cannot help you comply with the Mexican UIF.",
      problemPoints: [
        "UIF report structure has no equivalent in foreign regulations",
        "CNBV General Provisions are unique to Mexico",
        "AML risk matrices require Mexican financial system context",
        "Banco de México KYC criteria differ from global FATF standards",
      ],
      agentRole: "Financial Compliance — Lattice Séeb Financial",
      agentBio:
        "Sofía is the specialized agent for Mexican financial compliance. She masters CNBV Provisions, UIF requirements, AML risk matrices, and Banco de México KYC criteria. She monitors transactions and generates regulatory reports automatically.",
      agentCapabilities: [
        "Transaction monitoring for atypical pattern detection",
        "Automatic generation of Relevant and Unusual Operations Reports",
        "Automated KYC with validation against national and international lists",
        "AML risk matrix analysis with Mexican context",
        "CNBV report generation with regulatory format and deadlines",
      ],
      useCases: [
        { title: "AML detection", description: "Continuous transaction monitoring to identify unusual or relevant operations according to UIF and CNBV criteria.", icon: "AlertTriangle" },
        { title: "Regulatory reports", description: "Automated generation of Relevant, Unusual, and Cash Operations Reports with UIF format and deadlines.", icon: "BarChart3" },
        { title: "Automated KYC", description: "Verification and updating of client files against OFAC, UN, and national lists. Documentation expiration alerts.", icon: "CreditCard" },
        { title: "Compliance audit", description: "Preparation for CNBV audits with organized, traceable, and available evidence. Sofía identifies gaps before the regulatory visit.", icon: "FileSearch" },
      ],
      impactMetricLabels: [
        "faster atypical transaction detection",
        "reduction in AML report time",
        "CNBV/UIF obligation coverage",
        "less time in audit preparation",
      ],
    },
    "pt-br": {
      name: "Financeiro",
      badge: "Setor Financeiro",
      imageAlt: "Ambiente financeiro com análise de dados",
      headline: "Compliance financeiro com contexto mexicano",
      subheadline:
        "O Lattice Séeb Financeiro entende PLD, CNBV, UIF e a Lei de Instituições de Crédito. Detecta transações atípicas, automatiza relatórios regulatórios e mantém seu KYC atualizado.",
      heroMetrics: [
        { value: "3x", label: "detecção mais rápida de transações atípicas" },
        { value: "90%", label: "redução no tempo de relatórios PLD" },
        { value: "100%", label: "cobertura de obrigações CNBV/UIF" },
      ],
      problemBadge: "O problema",
      problemTitle: "PLD, CNBV, UIF. A normativa financeira mexicana não tem equivalente em nenhum outro país.",
      problemBody:
        "As obrigações de Prevenção à Lavagem de Dinheiro no México têm seu próprio marco normativo, prazos e formatos. Um modelo treinado com dados do FinCEN dos EUA não pode ajudá-lo a cumprir com a UIF mexicana.",
      problemPoints: [
        "A estrutura de relatórios da UIF não tem equivalente em regulamentações estrangeiras",
        "As Disposições de Caráter Geral da CNBV são únicas no México",
        "As matrizes de risco PLD requerem contexto do sistema financeiro mexicano",
        "Os critérios de KYC do Banco do México diferem dos padrões FATF globais",
      ],
      agentRole: "Compliance Financeiro — Lattice Séeb Financeiro",
      agentBio:
        "Sofía é a agente especializada em compliance financeiro mexicano. Domina as Disposições da CNBV, os requisitos da UIF, as matrizes de risco PLD e os critérios de KYC do Banco do México. Monitora transações e gera relatórios regulatórios automaticamente.",
      agentCapabilities: [
        "Monitoramento de transações para detecção de padrões atípicos",
        "Geração automática de Relatórios de Operações Relevantes e Incomuns",
        "KYC automatizado com validação contra listas nacionais e internacionais",
        "Análise de matrizes de risco PLD com contexto mexicano",
        "Geração de relatórios CNBV com formato e prazos regulatórios",
      ],
      useCases: [
        { title: "Detecção PLD", description: "Monitoramento contínuo de transações para identificar operações incomuns ou relevantes segundo os critérios da UIF e CNBV.", icon: "AlertTriangle" },
        { title: "Relatórios regulatórios", description: "Geração automatizada de Relatórios de Operações Relevantes, Incomuns e em Dinheiro com formato e prazos da UIF.", icon: "BarChart3" },
        { title: "KYC automatizado", description: "Verificação e atualização de expedientes de clientes contra listas OFAC, ONU e nacionais. Alertas de vencimento de documentação.", icon: "CreditCard" },
        { title: "Auditoria de compliance", description: "Preparação para auditorias da CNBV com evidência organizada, rastreável e disponível. Sofía identifica lacunas antes da visita regulatória.", icon: "FileSearch" },
      ],
      impactMetricLabels: [
        "detecção mais rápida de transações atípicas",
        "redução no tempo de relatórios PLD",
        "cobertura de obrigações CNBV/UIF",
        "menos tempo na preparação de auditorias",
      ],
    },
  },

  /* ================================================================
   *  VENTAS
   * ================================================================ */
  ventas: {
    es: {
      name: "Ventas",
      badge: "Fuerza de Ventas",
      imageAlt: "Equipo de ventas trabajando con tecnología",
      headline: "IA que convierte conversaciones en ingresos",
      subheadline:
        "La combinación de Lattice + SalesHub automatiza toda tu fuerza de ventas: prospección inteligente, follow-up persistente, propuestas personalizadas y análisis predictivo del pipeline.",
      heroMetrics: [
        { value: "3x", label: "más leads calificados" },
        { value: "40%", label: "menos tiempo administrativo" },
        { value: "2.5x", label: "más conversiones" },
      ],
      problemBadge: "El problema",
      problemTitle: "Tu equipo de ventas pasa más tiempo en Excel que vendiendo",
      problemBody:
        "Los equipos de ventas en LATAM pierden hasta 60% de su tiempo en tareas administrativas: actualizar CRMs, escribir correos de seguimiento, investigar leads y preparar propuestas. Las herramientas globales no entienden el contexto cultural ni el lenguaje de negocios latinoamericano.",
      problemPoints: [
        "CRM desactualizado con datos incompletos y duplicados",
        "Follow-up inconsistente por falta de tiempo y priorización",
        "Propuestas genéricas que no conectan con el cliente latinoamericano",
        "Sin visibilidad de qué leads tienen mayor probabilidad de convertir",
      ],
      agentRole: "Ejecutiva de Ventas — Lattice + SalesHub",
      agentBio:
        "Laura es tu ejecutiva de ventas virtual. Prospecciona leads 24/7, mantiene follow-up automático, califica oportunidades y prepara propuestas personalizadas. Integra Lattice para análisis conversacional y SalesHub para gestión del pipeline.",
      agentCapabilities: [
        "Prospección inteligente en redes profesionales y bases de datos",
        "Follow-up automatizado con timing óptimo basado en comportamiento",
        "Scoring predictivo de leads con propensión a convertir",
        "Generación de propuestas personalizadas con contexto de cada cliente",
        "Análisis de sentimiento en conversaciones y correos",
      ],
      useCases: [
        { title: "Prospección inteligente", description: "Laura identifica y cualifica leads automáticamente, enriquece perfiles con datos públicos y prioriza según fit con tu ICP.", icon: "Search" },
        { title: "Follow-up automatizado", description: "Secuencias de contacto personalizadas que se adaptan según la respuesta del prospecto. Ningún lead se queda sin seguimiento.", icon: "Mail" },
        { title: "Scoring de oportunidades", description: "Clasificación automática de leads según probabilidad de cierre, tamaño de deal y tiempo estimado. Prioriza tu tiempo.", icon: "Target" },
        { title: "Propuestas personalizadas", description: "Generación de propuestas y cotizaciones adaptadas a cada cliente, con lenguaje local y condiciones comerciales relevantes.", icon: "FileText" },
        { title: "Análisis de pipeline", description: "Predicción de cierres, identificación de cuellos de botella y recomendaciones de acciones para acelerar deals estancados.", icon: "BarChart3" },
        { title: "Coaching de ventas", description: "Análisis de llamadas y correos para identificar patrones de éxito, áreas de mejora y entrenamiento continuo del equipo.", icon: "Users" },
      ],
      impactMetricLabels: [
        "más leads calificados por mes",
        "menos tiempo en tareas administrativas",
        "más conversiones de pipeline",
        "menos leads perdidos por falta de follow-up",
      ],
    },
    en: {
      name: "Sales",
      badge: "Sales Force",
      imageAlt: "Sales team working with technology",
      headline: "AI that turns conversations into revenue",
      subheadline:
        "The Lattice + SalesHub combination automates your entire sales force: intelligent prospecting, persistent follow-up, personalized proposals, and predictive pipeline analysis.",
      heroMetrics: [
        { value: "3x", label: "more qualified leads" },
        { value: "40%", label: "less administrative time" },
        { value: "2.5x", label: "more conversions" },
      ],
      problemBadge: "The problem",
      problemTitle: "Your sales team spends more time in Excel than selling",
      problemBody:
        "Sales teams in LATAM lose up to 60% of their time on administrative tasks: updating CRMs, writing follow-up emails, researching leads, and preparing proposals. Global tools don't understand the cultural context or Latin American business language.",
      problemPoints: [
        "Outdated CRM with incomplete and duplicate data",
        "Inconsistent follow-up due to lack of time and prioritization",
        "Generic proposals that don't connect with the Latin American client",
        "No visibility into which leads are most likely to convert",
      ],
      agentRole: "Sales Executive — Lattice + SalesHub",
      agentBio:
        "Laura is your virtual sales executive. She prospects leads 24/7, maintains automatic follow-up, qualifies opportunities, and prepares personalized proposals. She integrates Lattice for conversational analysis and SalesHub for pipeline management.",
      agentCapabilities: [
        "Intelligent prospecting on professional networks and databases",
        "Automated follow-up with optimal timing based on behavior",
        "Predictive lead scoring with conversion propensity",
        "Personalized proposal generation with each client's context",
        "Sentiment analysis in conversations and emails",
      ],
      useCases: [
        { title: "Intelligent prospecting", description: "Laura automatically identifies and qualifies leads, enriches profiles with public data, and prioritizes by ICP fit.", icon: "Search" },
        { title: "Automated follow-up", description: "Personalized contact sequences that adapt based on prospect response. No lead goes without follow-up.", icon: "Mail" },
        { title: "Opportunity scoring", description: "Automatic lead classification by close probability, deal size, and estimated time. Prioritize your time.", icon: "Target" },
        { title: "Personalized proposals", description: "Generation of proposals and quotes tailored to each client, with local language and relevant commercial terms.", icon: "FileText" },
        { title: "Pipeline analysis", description: "Close prediction, bottleneck identification, and action recommendations to accelerate stalled deals.", icon: "BarChart3" },
        { title: "Sales coaching", description: "Call and email analysis to identify success patterns, improvement areas, and continuous team training.", icon: "Users" },
      ],
      impactMetricLabels: [
        "more qualified leads per month",
        "less time on administrative tasks",
        "more pipeline conversions",
        "fewer leads lost due to lack of follow-up",
      ],
    },
    "pt-br": {
      name: "Vendas",
      badge: "Força de Vendas",
      imageAlt: "Equipe de vendas trabalhando com tecnologia",
      headline: "IA que transforma conversas em receita",
      subheadline:
        "A combinação Lattice + SalesHub automatiza toda a sua força de vendas: prospecção inteligente, follow-up persistente, propostas personalizadas e análise preditiva do pipeline.",
      heroMetrics: [
        { value: "3x", label: "mais leads qualificados" },
        { value: "40%", label: "menos tempo administrativo" },
        { value: "2.5x", label: "mais conversões" },
      ],
      problemBadge: "O problema",
      problemTitle: "Sua equipe de vendas passa mais tempo no Excel do que vendendo",
      problemBody:
        "As equipes de vendas na LATAM perdem até 60% do tempo em tarefas administrativas: atualizar CRMs, escrever e-mails de follow-up, pesquisar leads e preparar propostas. As ferramentas globais não entendem o contexto cultural nem a linguagem de negócios latino-americana.",
      problemPoints: [
        "CRM desatualizado com dados incompletos e duplicados",
        "Follow-up inconsistente por falta de tempo e priorização",
        "Propostas genéricas que não conectam com o cliente latino-americano",
        "Sem visibilidade de quais leads têm maior probabilidade de converter",
      ],
      agentRole: "Executiva de Vendas — Lattice + SalesHub",
      agentBio:
        "Laura é sua executiva de vendas virtual. Prospecta leads 24/7, mantém follow-up automático, qualifica oportunidades e prepara propostas personalizadas. Integra Lattice para análise conversacional e SalesHub para gestão do pipeline.",
      agentCapabilities: [
        "Prospecção inteligente em redes profissionais e bases de dados",
        "Follow-up automatizado com timing ideal baseado em comportamento",
        "Scoring preditivo de leads com propensão a converter",
        "Geração de propostas personalizadas com contexto de cada cliente",
        "Análise de sentimento em conversas e e-mails",
      ],
      useCases: [
        { title: "Prospecção inteligente", description: "Laura identifica e qualifica leads automaticamente, enriquece perfis com dados públicos e prioriza segundo o fit com seu ICP.", icon: "Search" },
        { title: "Follow-up automatizado", description: "Sequências de contato personalizadas que se adaptam conforme a resposta do prospecto. Nenhum lead fica sem acompanhamento.", icon: "Mail" },
        { title: "Scoring de oportunidades", description: "Classificação automática de leads por probabilidade de fechamento, tamanho do deal e tempo estimado. Priorize seu tempo.", icon: "Target" },
        { title: "Propostas personalizadas", description: "Geração de propostas e cotações adaptadas a cada cliente, com linguagem local e condições comerciais relevantes.", icon: "FileText" },
        { title: "Análise de pipeline", description: "Previsão de fechamentos, identificação de gargalos e recomendações de ações para acelerar deals estagnados.", icon: "BarChart3" },
        { title: "Coaching de vendas", description: "Análise de ligações e e-mails para identificar padrões de sucesso, áreas de melhoria e treinamento contínuo da equipe.", icon: "Users" },
      ],
      impactMetricLabels: [
        "mais leads qualificados por mês",
        "menos tempo em tarefas administrativas",
        "mais conversões de pipeline",
        "menos leads perdidos por falta de follow-up",
      ],
    },
  },
};

/* ── Helper: assemble full IndustriaData for a given slug + locale ── */
export function getIndustriaData(slug: string, locale: Locale): IndustriaData {
  const base = INDUSTRIAS_BASE[slug];
  const text = T[slug]?.[locale] ?? T[slug]?.es;

  if (!base || !text) {
    throw new Error(`Unknown industry slug: ${slug}`);
  }

  return {
    slug: base.slug,
    name: text.name,
    badge: text.badge,
    imageUrl: base.imageUrl,
    secondaryImageUrl: base.secondaryImageUrl,
    imageAlt: text.imageAlt,
    atmosphericImageUrl: base.atmosphericImageUrl,
    headline: text.headline,
    subheadline: text.subheadline,
    heroMetrics: text.heroMetrics,
    sectorIcon: base.sectorIcon,
    problemBadge: text.problemBadge,
    problemTitle: text.problemTitle,
    problemBody: text.problemBody,
    problemPoints: text.problemPoints,
    agentName: base.agentName,
    agentRole: text.agentRole,
    agentIcon: base.agentIcon,
    agentBio: text.agentBio,
    agentCapabilities: text.agentCapabilities,
    useCases: text.useCases,
    impactMetrics: base.impactMetricValues.map((m, i) => ({
      ...m,
      label: text.impactMetricLabels[i] ?? "",
    })),
  };
}

/* ── Backward-compatible: default Spanish data ────────────────── */
export const INDUSTRIAS_DATA: Record<string, IndustriaData> = Object.fromEntries(
  Object.keys(INDUSTRIAS_BASE).map((slug) => [slug, getIndustriaData(slug, "es")])
);

export const INDUSTRIAS_LIST = Object.values(INDUSTRIAS_DATA);

export const INDUSTRIA_SLUGS = Object.keys(INDUSTRIAS_BASE);
