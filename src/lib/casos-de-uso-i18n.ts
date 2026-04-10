export type LangCode = "es" | "en" | "pt-br";

export type IndustriaId =
  | "energia"
  | "salud"
  | "logistica"
  | "ecommerce"
  | "gobierno";

export type ProductoId =
  | "saleshub"
  | "lattice"
  | "lattice-seeb-salud"
  | "lattice-seeb-logistica"
  | "nahui";

export interface MetricaDestacada {
  value: string;
  label: string;
}

export interface CasoDeUso {
  id: string;
  empresa: string;
  industria: IndustriaId;
  productos: ProductoId[];
  problema: string;
  solucion: string;
  resultado: string;
  metrica: MetricaDestacada;
}

export interface CasosDeUsoI18nContent {
  meta: { title: string; description: string };
  hero: {
    badge: string;
    h1: string;
    subtitle: string;
    trustSignals: string[];
  };
  filter: {
    all: string;
    industrias: Record<IndustriaId, string>;
  };
  productos: Record<ProductoId, string>;
  labels: {
    industria: string;
    productos: string;
    problema: string;
    solucion: string;
    resultado: string;
    metrica: string;
  };
  casos: CasoDeUso[];
  disclaimer: string;
  cta: {
    title: string;
    subtitle: string;
    label: string;
    href: string;
    trustSignals: string[];
  };
}

export const CASOS_DE_USO_I18N: Record<LangCode, CasosDeUsoI18nContent> = {
  es: {
    meta: {
      title: "Casos de Uso Reales | Sintérgica AI — IA Privada para México y LATAM",
      description:
        "Casos de uso reales de IA privada con Lattice, SalesHub y Nahui. Resultados documentados en energía, salud, logística, e-commerce y gobierno.",
    },
    hero: {
      badge: "CASOS DE USO REALES",
      h1: "IA privada en operación: resultados documentados",
      subtitle:
        "Cinco casos de implementación con Lattice, SalesHub y Nahui en sectores reales de México. Problema identificado, solución desplegada, resultado medible.",
      trustSignals: [
        "Datos de operaciones reales",
        "Implementaciones en México",
        "Resultados verificables",
      ],
    },
    filter: {
      all: "Todos",
      industrias: {
        energia: "Energía",
        salud: "Salud",
        logistica: "Logística",
        ecommerce: "E-Commerce",
        gobierno: "Gobierno",
      },
    },
    productos: {
      saleshub: "SalesHub",
      lattice: "Lattice",
      "lattice-seeb-salud": "Lattice Séeb Salud",
      "lattice-seeb-logistica": "Lattice Séeb Logística",
      nahui: "Nahui",
    },
    labels: {
      industria: "Industria",
      productos: "Soluciones aplicadas",
      problema: "Problema",
      solucion: "Solución",
      resultado: "Resultado",
      metrica: "Métrica clave",
    },
    casos: [
      {
        id: "energia-solar",
        empresa: "Empresa de Energía Solar",
        industria: "energia",
        productos: ["saleshub", "lattice"],
        problema:
          "Leads captados por canales digitales sin seguimiento estructurado. Tiempo de primera respuesta: 24 a 48 horas. La competencia respondía en minutos, generando pérdida de oportunidades calificadas.",
        solucion:
          "Despliegue de agentes SDR de IA por WhatsApp integrados con SalesHub. Calificación automática de leads, respuesta en menos de 2 minutos, seguimiento automatizado y escalado al equipo comercial cuando el lead alcanza score de conversión.",
        resultado:
          "Incremento en leads calificados por mes. Reducción del tiempo de primera respuesta de 48 horas a menos de 2 minutos. Equipo comercial enfocado en cierres, no en prospección inicial.",
        metrica: {
          value: "< 2 min",
          label: "primera respuesta",
        },
      },
      {
        id: "clinica-privada",
        empresa: "Clínica Privada — Séeb Salud",
        industria: "salud",
        productos: ["saleshub", "lattice-seeb-salud"],
        problema:
          "Alta tasa de no-shows (pacientes que no asisten a citas agendadas) sin protocolo de recordatorio efectivo. Pacientes con más de 90 días sin actividad sin reactivación sistemática. Agenda subutilizada.",
        solucion:
          "Agente IA por WhatsApp con recordatorios automáticos 48h y 2h antes de la cita. Protocolo de reactivación automática para pacientes inactivos 90+ días. Lattice Séeb Salud como base de conocimiento clínico para respuestas contextualizadas.",
        resultado:
          "Reducción de no-shows. Reactivación de pacientes previamente inactivos. Agenda con mayor ocupación sin incremento de carga administrativa.",
        metrica: {
          value: "−35%",
          label: "no-shows",
        },
      },
      {
        id: "agencia-aduanal",
        empresa: "Agencia Aduanal",
        industria: "logistica",
        productos: ["lattice-seeb-logistica"],
        problema:
          "Errores frecuentes en clasificación arancelaria por volumen de pedimentos y complejidad normativa. Revisiones manuales lentas. Riesgo de multas y retrasos en despacho por errores documentales.",
        solucion:
          "Validación documental automatizada con Lattice Séeb Logística. El agente verifica fracción arancelaria, documentos requeridos y consistencia entre pedimento y factura comercial antes de presentar ante aduana.",
        resultado:
          "Reducción de errores en clasificación arancelaria. Despachos más rápidos por menor número de correcciones. Equipo de agentes aduanales enfocado en casos complejos.",
        metrica: {
          value: "−40%",
          label: "errores de clasificación",
        },
      },
      {
        id: "ecommerce",
        empresa: "E-Commerce de Moda",
        industria: "ecommerce",
        productos: ["saleshub"],
        problema:
          "Equipo de atención al cliente saturado respondiendo consultas repetitivas. Baja tasa de conversión en carritos abandonados. Sin estrategia de recompra automática para clientes existentes.",
        solucion:
          "Automatización de atención con agentes IA para consultas frecuentes, estado de pedidos y devoluciones. Flujos de remarketing inteligente para carritos abandonados y recompra. Segmentación automática de clientes por comportamiento.",
        resultado:
          "Aumento en tasa de recompra de clientes existentes. Reducción de tickets de soporte por automatización de consultas repetitivas. Conversión mejorada en carritos abandonados.",
        metrica: {
          value: "+28%",
          label: "tasa de recompra",
        },
      },
      {
        id: "limpieza-municipal",
        empresa: "Servicio de Limpia Municipal",
        industria: "gobierno",
        productos: ["lattice", "nahui"],
        problema:
          "Rutas de recolección de residuos definidas por criterio histórico, no por datos de generación en tiempo real. Quejas ciudadanas recibidas por múltiples canales sin trazabilidad ni tiempo de respuesta definido.",
        solucion:
          "Nahui para optimización dinámica de rutas según zonas de alta generación, tráfico y flota disponible. Lattice como agente de atención ciudadana automatizado que recibe, clasifica y da seguimiento a reportes de servicio.",
        resultado:
          "Ahorro en combustible por optimización de rutas. Tiempo de respuesta a quejas ciudadanas reducido. Visibilidad en tiempo real del estado operativo de la flota.",
        metrica: {
          value: "−22%",
          label: "consumo de combustible",
        },
      },
    ],
    disclaimer:
      "Los resultados presentados combinan datos de implementaciones piloto, proyecciones basadas en benchmarks del sector y capacidad demostrada en entornos controlados.",
    cta: {
      title: "¿Quieres ver cómo aplica esto a tu operación?",
      subtitle:
        "Agenda un Diagnóstico Inteligente. Analizamos tus procesos, identificamos los casos de uso con mayor impacto y entregamos un mapa de implementación con ROI estimado.",
      label: "Solicitar Diagnóstico",
      href: "https://sales.sintergica.ai/widget/booking/vh6cQRURUU1nU5nslpu4",
      trustSignals: ["Sin permanencia", "Demo con tus datos reales", "ROI estimado en 1 semana"],
    },
  },

  en: {
    meta: {
      title: "Real Use Cases | Sintérgica AI — Private AI for Mexico & LATAM",
      description:
        "Real use cases of private AI with Lattice, SalesHub and Nahui. Documented results in energy, health, logistics, e-commerce and government.",
    },
    hero: {
      badge: "REAL USE CASES",
      h1: "Private AI in action: documented results",
      subtitle:
        "Five implementation cases with Lattice, SalesHub and Nahui across real sectors in Mexico. Problem identified, solution deployed, measurable result.",
      trustSignals: [
        "Real operations data",
        "Implementations in Mexico",
        "Verifiable results",
      ],
    },
    filter: {
      all: "All",
      industrias: {
        energia: "Energy",
        salud: "Health",
        logistica: "Logistics",
        ecommerce: "E-Commerce",
        gobierno: "Government",
      },
    },
    productos: {
      saleshub: "SalesHub",
      lattice: "Lattice",
      "lattice-seeb-salud": "Lattice Séeb Health",
      "lattice-seeb-logistica": "Lattice Séeb Logistics",
      nahui: "Nahui",
    },
    labels: {
      industria: "Industry",
      productos: "Applied solutions",
      problema: "Problem",
      solucion: "Solution",
      resultado: "Result",
      metrica: "Key metric",
    },
    casos: [
      {
        id: "energia-solar",
        empresa: "Solar Energy Company",
        industria: "energia",
        productos: ["saleshub", "lattice"],
        problema:
          "Leads captured through digital channels with no structured follow-up. First response time: 24 to 48 hours. Competitors responded in minutes, causing loss of qualified opportunities.",
        solucion:
          "Deployment of AI SDR agents via WhatsApp integrated with SalesHub. Automatic lead qualification, response in under 2 minutes, automated follow-up and escalation to the sales team when the lead reaches conversion score.",
        resultado:
          "Increase in qualified leads per month. First response time reduced from 48 hours to under 2 minutes. Sales team focused on closing, not initial prospecting.",
        metrica: { value: "< 2 min", label: "first response" },
      },
      {
        id: "clinica-privada",
        empresa: "Private Clinic — Séeb Health",
        industria: "salud",
        productos: ["saleshub", "lattice-seeb-salud"],
        problema:
          "High no-show rate (patients not attending scheduled appointments) with no effective reminder protocol. Patients with over 90 days of inactivity without systematic reactivation. Underutilized schedule.",
        solucion:
          "AI agent via WhatsApp with automatic reminders 48h and 2h before appointment. Automatic reactivation protocol for inactive patients 90+ days. Lattice Séeb Health as clinical knowledge base for contextualized responses.",
        resultado:
          "Reduction in no-shows. Reactivation of previously inactive patients. Higher schedule occupancy without increased administrative burden.",
        metrica: { value: "−35%", label: "no-shows" },
      },
      {
        id: "agencia-aduanal",
        empresa: "Customs Brokerage Agency",
        industria: "logistica",
        productos: ["lattice-seeb-logistica"],
        problema:
          "Frequent errors in tariff classification due to high volume of customs entries and regulatory complexity. Slow manual reviews. Risk of fines and clearance delays due to document errors.",
        solucion:
          "Automated document validation with Lattice Séeb Logistics. The agent verifies tariff code, required documents, and consistency between the customs declaration and commercial invoice before submission.",
        resultado:
          "Reduction in tariff classification errors. Faster clearances due to fewer corrections. Customs agents focused on complex cases.",
        metrica: { value: "−40%", label: "classification errors" },
      },
      {
        id: "ecommerce",
        empresa: "Fashion E-Commerce",
        industria: "ecommerce",
        productos: ["saleshub"],
        problema:
          "Customer service team overwhelmed with repetitive queries. Low conversion rate on abandoned carts. No automatic repurchase strategy for existing customers.",
        solucion:
          "AI agent automation for frequent queries, order status and returns. Intelligent remarketing flows for abandoned carts and repurchase. Automatic customer segmentation by behavior.",
        resultado:
          "Increase in repurchase rate from existing customers. Reduction in support tickets through automation. Improved conversion on abandoned carts.",
        metrica: { value: "+28%", label: "repurchase rate" },
      },
      {
        id: "limpieza-municipal",
        empresa: "Municipal Waste Service",
        industria: "gobierno",
        productos: ["lattice", "nahui"],
        problema:
          "Collection routes defined by historical criteria, not real-time generation data. Citizen complaints received through multiple channels without traceability or defined response times.",
        solucion:
          "Nahui for dynamic route optimization based on high-generation zones, traffic, and available fleet. Lattice as an automated citizen service agent that receives, classifies, and tracks service reports.",
        resultado:
          "Fuel savings through route optimization. Citizen complaint response time reduced. Real-time visibility of fleet operational status.",
        metrica: { value: "−22%", label: "fuel consumption" },
      },
    ],
    disclaimer:
      "Results shown combine data from pilot implementations, projections based on industry benchmarks, and demonstrated capability in controlled environments.",
    cta: {
      title: "Want to see how this applies to your operation?",
      subtitle:
        "Schedule an Intelligent Diagnostic. We analyze your processes, identify the highest-impact use cases, and deliver an implementation roadmap with estimated ROI.",
      label: "Request Diagnostic",
      href: "https://sales.sintergica.ai/widget/booking/vh6cQRURUU1nU5nslpu4",
      trustSignals: ["No lock-in", "Demo with your real data", "Estimated ROI in 1 week"],
    },
  },

  "pt-br": {
    meta: {
      title: "Casos de Uso Reais | Sintérgica AI — IA Privada para México e LATAM",
      description:
        "Casos de uso reais de IA privada com Lattice, SalesHub e Nahui. Resultados documentados em energia, saúde, logística, e-commerce e governo.",
    },
    hero: {
      badge: "CASOS DE USO REAIS",
      h1: "IA privada em operação: resultados documentados",
      subtitle:
        "Cinco casos de implementação com Lattice, SalesHub e Nahui em setores reais do México. Problema identificado, solução implantada, resultado mensurável.",
      trustSignals: [
        "Dados de operações reais",
        "Implementações no México",
        "Resultados verificáveis",
      ],
    },
    filter: {
      all: "Todos",
      industrias: {
        energia: "Energia",
        salud: "Saúde",
        logistica: "Logística",
        ecommerce: "E-Commerce",
        gobierno: "Governo",
      },
    },
    productos: {
      saleshub: "SalesHub",
      lattice: "Lattice",
      "lattice-seeb-salud": "Lattice Séeb Saúde",
      "lattice-seeb-logistica": "Lattice Séeb Logística",
      nahui: "Nahui",
    },
    labels: {
      industria: "Setor",
      productos: "Soluções aplicadas",
      problema: "Problema",
      solucion: "Solução",
      resultado: "Resultado",
      metrica: "Métrica principal",
    },
    casos: [
      {
        id: "energia-solar",
        empresa: "Empresa de Energia Solar",
        industria: "energia",
        productos: ["saleshub", "lattice"],
        problema:
          "Leads captados por canais digitais sem acompanhamento estruturado. Tempo de primeira resposta: 24 a 48 horas. Concorrentes respondiam em minutos.",
        solucion:
          "Implantação de agentes SDR de IA via WhatsApp integrados ao SalesHub. Qualificação automática de leads, resposta em menos de 2 minutos e escalada para a equipe comercial.",
        resultado:
          "Aumento em leads qualificados por mês. Tempo de primeira resposta reduzido de 48 horas para menos de 2 minutos.",
        metrica: { value: "< 2 min", label: "primeira resposta" },
      },
      {
        id: "clinica-privada",
        empresa: "Clínica Privada — Séeb Saúde",
        industria: "salud",
        productos: ["saleshub", "lattice-seeb-salud"],
        problema:
          "Alta taxa de no-shows sem protocolo eficaz de lembrete. Pacientes com mais de 90 dias sem atividade sem reativação sistemática.",
        solucion:
          "Agente IA via WhatsApp com lembretes automáticos 48h e 2h antes da consulta. Protocolo de reativação automática para pacientes inativos 90+ dias.",
        resultado:
          "Redução de no-shows. Reativação de pacientes previamente inativos. Agenda com maior taxa de ocupação.",
        metrica: { value: "−35%", label: "no-shows" },
      },
      {
        id: "agencia-aduanal",
        empresa: "Agência Aduaneira",
        industria: "logistica",
        productos: ["lattice-seeb-logistica"],
        problema:
          "Erros frequentes na classificação tarifária pelo volume de declarações e complexidade regulatória.",
        solucion:
          "Validação documental automatizada com Lattice Séeb Logística. O agente verifica a classificação tarifária e a consistência dos documentos antes do desembaraço.",
        resultado:
          "Redução de erros de classificação tarifária. Desembaraços mais rápidos com menos correções.",
        metrica: { value: "−40%", label: "erros de classificação" },
      },
      {
        id: "ecommerce",
        empresa: "E-Commerce de Moda",
        industria: "ecommerce",
        productos: ["saleshub"],
        problema:
          "Equipe de atendimento sobrecarregada com consultas repetitivas. Baixa taxa de conversão em carrinhos abandonados.",
        solucion:
          "Automação de atendimento com agentes IA para consultas frequentes e fluxos de remarketing inteligente para carrinhos abandonados.",
        resultado:
          "Aumento na taxa de recompra. Redução de tickets de suporte. Melhor conversão em carrinhos abandonados.",
        metrica: { value: "+28%", label: "taxa de recompra" },
      },
      {
        id: "limpieza-municipal",
        empresa: "Serviço Municipal de Limpeza",
        industria: "gobierno",
        productos: ["lattice", "nahui"],
        problema:
          "Rotas de coleta definidas por critério histórico, sem dados de geração em tempo real. Reclamações dos cidadãos sem rastreabilidade.",
        solucion:
          "Nahui para otimização dinâmica de rotas. Lattice como agente de atendimento ao cidadão para receber e acompanhar chamados.",
        resultado:
          "Economia de combustível por otimização de rotas. Tempo de resposta a reclamações reduzido.",
        metrica: { value: "−22%", label: "consumo de combustível" },
      },
    ],
    disclaimer:
      "Os resultados apresentados combinam dados de implementações piloto, projeções baseadas em benchmarks do setor e capacidade demonstrada em ambientes controlados.",
    cta: {
      title: "Quer ver como isso se aplica à sua operação?",
      subtitle:
        "Agende um Diagnóstico Inteligente. Analisamos seus processos, identificamos os casos de uso de maior impacto e entregamos um mapa de implementação com ROI estimado.",
      label: "Solicitar Diagnóstico",
      href: "https://sales.sintergica.ai/widget/booking/vh6cQRURUU1nU5nslpu4",
      trustSignals: ["Sem fidelidade", "Demo com seus dados reais", "ROI estimado em 1 semana"],
    },
  },
};
