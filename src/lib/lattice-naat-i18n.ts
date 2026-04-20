export const NAAT_DEFAULT = {
  meta: {
    title: "Lattice Na'at — El Modelo Fundacional Soberano | Sintérgica AI",
    description:
      "Na'at es el modelo fundacional de Sintérgica AI: LLM entrenado para pensar en español mexicano, con normativa local, jurisprudencia y contexto latinoamericano. Open source con atribución.",
  },

  hero: {
    badge: "Modelo Fundacional",
    title: "El Modelo Fundacional Soberano.",
    subtitle:
      "El primer modelo de lenguaje de gran escala desarrollado en México. Entrenado para pensar en español mexicano — no traducido del inglés.",
    ctaPrimary: "Hablar con el equipo",
    ctaSecondary: "Ver la familia Na'at",
    microFeatures: [
      "Open source con atribución",
      "256K tokens de contexto",
      "Corpus normativo mexicano",
    ],
    version: "Lattice Na'at · Marzo 2026",
    versionState: "Producción activa",
  },

  why: {
    badge: "Por qué existe Na'at",
    h2: "El sesgo WEIRD: el 85% del mundo no está representado en la IA global.",
    p1: "En 2023, investigadores de Harvard (Atari, Xue, Park, Blasi & Henrich) compararon las respuestas de GPT con datos de 94,278 personas en 65 países. Encontraron una correlación de r = −0.70 entre la distancia cultural de un país respecto a Estados Unidos y la capacidad del modelo para representar a sus habitantes.",
    p2: "WEIRD — Western, Educated, Industrialized, Rich, Democratic — describe a las sociedades que producen la mayoría del contenido con el que se entrenan los modelos de IA. Representan alrededor del 15% de la humanidad.",
    p3: "México —con marcos jurídicos de derecho civil codificado, formas de organización social más colectivistas y un sistema regulatorio completamente propio— queda sistemáticamente sub-representado en modelos entrenados predominantemente con datos anglosajones.",
    p4: "El resultado es práctico: un modelo global que revisa un contrato mexicano puede aplicar lógica del Common Law.",
    conclusion: "Na'at fue construido para cerrar esa brecha.",
    stats: [
      { value: "r = −0.70", label: "Correlación sesgo–distancia cultural", source: "Atari et al., Harvard 2023" },
      { value: "≈15%", label: "Humanidad representada como WEIRD", source: "Ciencia del comportamiento" },
      { value: "65", label: "Países comparados en el estudio", source: "94,278 personas encuestadas" },
    ],
  },

  family: {
    badge: "La familia Na'at",
    h2: "Cinco variantes. Un modelo por escala, contexto y caso de uso.",
    subtitle:
      "Desde despliegue edge en dispositivos hasta el modelo frontera en SaaS cloud — la familia Na'at se adapta a la capacidad que cada workload necesita.",
    note: "★ Modelos principales en el SaaS cloud. Las variantes 0.8B y 2B están disponibles para despliegue on-premise y edge.",
    models: [
      {
        id: "edge",
        name: "Na'at Edge",
        params: "0.8B",
        context: "32K tokens",
        modality: "Texto",
        deployment: "On-premise · Edge · Móvil",
        useCase: "Dispositivos con recursos limitados, procesamiento offline",
        featured: false,
      },
      {
        id: "compact",
        name: "Na'at Compact",
        params: "2B",
        context: "64K tokens",
        modality: "Texto",
        deployment: "On-premise · Edge",
        useCase: "Servidores internos, tareas de clasificación y extracción",
        featured: false,
      },
      {
        id: "standard",
        name: "Na'at Standard",
        params: "4B",
        context: "128K tokens",
        modality: "Texto",
        deployment: "SaaS · On-premise",
        useCase: "Uso general en Lattice Platform, agentes conversacionales",
        featured: true,
      },
      {
        id: "advanced",
        name: "Na'at Advanced",
        params: "9B",
        context: "128K tokens",
        modality: "Texto · Imagen · Documentos",
        deployment: "SaaS · On-premise",
        useCase: "Análisis documental multimodal, razonamiento complejo",
        featured: true,
      },
      {
        id: "full",
        name: "Na'at Full",
        params: "1T (MoE · 32B activos)",
        context: "256K tokens",
        modality: "Texto · Imagen · Documentos",
        deployment: "SaaS cloud",
        useCase: "Máxima capacidad de razonamiento y contexto extendido",
        featured: true,
      },
    ],
  },

  differentiators: {
    badge: "Lo que diferencia a Na'at",
    h2: "Entrenado para el contexto que los modelos globales ignoran.",
    items: [
      {
        title: "Español mexicano nativo",
        desc: "Entrenado directamente en el español de México — no traducido del inglés ni adaptado del español neutro. Entiende modismos, variaciones regionales, terminología legal y técnica local.",
      },
      {
        title: "Normativa local profunda",
        desc: "El corpus incluye Código Civil Federal, Código de Comercio, Ley de Amparo, jurisprudencia SCJN, normativa SAT, disposiciones CNBV, DOF, legislación estatal y regulación sectorial de México y LATAM.",
      },
      {
        title: "Soberanía de datos",
        desc: "Los pesos del modelo están disponibles en Hugging Face con licencia open source bajo atribución obligatoria. Sin dependencia de ningún proveedor extranjero para su uso.",
      },
      {
        title: "Gobernanza comunitaria",
        desc: "Las decisiones sobre el modelo son de la comunidad, no de una empresa. Marco de gobernanza con universidades, investigadores e instituciones — documentado en Gobernanza y Constitución del Modelo.",
      },
      {
        title: "Lenguas originarias",
        desc: "Entrenamiento inicial con náhuatl y maya, con hoja de ruta para ampliar cobertura a más lenguas indígenas de México.",
      },
      {
        title: "Razonamiento multi-paso",
        desc: "Cadenas de pensamiento complejas, análisis documental profundo y multimodalidad nativa (texto, imágenes y documentos) en Na'at Advanced y Full.",
      },
    ],
  },

  ecosystem: {
    badge: "Na'at en el ecosistema Lattice",
    h2: "El motor base sobre el que se construye todo el ecosistema.",
    subtitle:
      "Cuando un agente Séeb enfrenta una tarea que excede su especialización, el orquestador puede escalar a Na'at Full para mayor profundidad de razonamiento.",
    nodes: [
      {
        key: "naat",
        label: "Lattice Na'at",
        sub: "Modelo maestro · 1T",
        desc: "Modelo fundacional entrenado en corpus mexicano completo.",
      },
      {
        key: "seeb",
        label: "Lattice Séeb",
        sub: "SLMs por vertical · 4B–9B",
        desc: "Destilados desde Na'at con precisión industrial por sector.",
      },
      {
        key: "agents",
        label: "Lattice Agents",
        sub: "Motor agéntico",
        desc: "Orquestan Séeb y escalan a Na'at Full cuando se requiere profundidad.",
      },
      {
        key: "platform",
        label: "Lattice Platform",
        sub: "Workspace",
        desc: "Interfaz conversacional, canales, RAG, Flows y gestión enterprise.",
      },
    ],
  },

  roadmap: {
    badge: "Hoja de ruta — La ruta hacia 2030",
    h2: "Una ruta técnica concreta hacia un modelo de frontera propio.",
    subtitle:
      "La meta 2030 posiciona a Sintérgica como la única empresa de LATAM con una ruta técnica concreta hacia un modelo frontera competitivo globalmente y especializado en el contexto latinoamericano.",
    milestones: [
      {
        year: "2026",
        title: "Lattice Na'at v1.0",
        desc: "Modelo fundacional basado en arquitecturas abiertas de última generación, especializado en corpus mexicano. Producción activa.",
        state: "actual",
      },
      {
        year: "2027",
        title: "Entrenamiento parcial desde cero",
        desc: "Primera capa de modelos Séeb entrenados desde cero por Sintérgica con corpus curado directamente junto a academia y cámaras empresariales.",
        state: "plan",
      },
      {
        year: "2028–2029",
        title: "Modelo propio en pre-entrenamiento",
        desc: "Inicio del pre-entrenamiento from-scratch de Na'at v2 con infraestructura dedicada y corpus ampliado con lenguas originarias.",
        state: "plan",
      },
      {
        year: "2030",
        title: "Modelo frontera latinoamericano",
        desc: "Modelo de frontera propio, competitivo globalmente y especializado en el contexto normativo y cultural de LATAM.",
        state: "plan",
      },
    ],
  },

  access: {
    badge: "Acceso y uso",
    h2: "Tres formas de usar Na'at hoy.",
    items: [
      {
        title: "Open source · descarga directa",
        body: "Los pesos del modelo están publicados en Hugging Face / sintergica-ai. Uso comercial y académico permitido con atribución obligatoria: \"Potenciado por Lattice de Sintérgica AI\".",
        link: { label: "Ver en Hugging Face", href: "https://huggingface.co/sintergica-ai" },
      },
      {
        title: "En Lattice Platform SaaS",
        body: "Na'at 4B y 9B incluidos en todos los planes. Na'at Full disponible en todos los planes (limitado a 5,000 CL/mes en Starter).",
        link: { label: "Ver planes", href: "/soluciones/lattice" },
      },
      {
        title: "Colaboración con Sintérgica Labs",
        body: "Na'at es un proyecto vivo. El ecosistema de investigación que lo mejora está en Sintérgica Labs — abierto a universidades, investigadores y donantes.",
        link: { label: "Conocer Labs", href: "/investigacion/labs" },
      },
    ],
  },

  faq: {
    badge: "Preguntas frecuentes",
    h2: "Preguntas frecuentes",
    questions: [
      {
        q: "¿Na'at es open source?",
        a: "Na'at está disponible para descarga con los pesos del modelo publicados en Hugging Face. La licencia permite uso comercial y académico, pero requiere atribución obligatoria — similar al modelo de licenciamiento que usa Meta para Llama. Según la definición formal de la Open Source Initiative, una licencia con atribución obligatoria no es \"open source\" en sentido estricto; Sintérgica usa el término en el sentido coloquial de \"pesos disponibles para descarga y uso libre\". Para la inmensa mayoría de organizaciones, la diferencia práctica es nula.",
      },
      {
        q: "¿Qué relación tiene Na'at con otros modelos abiertos?",
        a: "Na'at se construye sobre modelos base de última generación como plataforma de arranque, y se especializa con corpus de español mexicano, normativa local y contexto LATAM. La familia Na'at incluye modelos de distintos tamaños optimizados para diferentes usos — desde versiones compactas para despliegue en dispositivos hasta versiones completas para tareas de máxima capacidad.",
      },
      {
        q: "¿Puedo usar Na'at sin Lattice Platform?",
        a: "Sí. Los pesos están en Hugging Face. Puedes descargar el modelo y desplegarlo en tu propia infraestructura con las herramientas estándar del ecosistema (vLLM, SGLang, Ollama, etc.). Lattice Platform facilita el despliegue y añade funcionalidades (agentes, canales, RAG, Flows), pero Na'at funciona de forma independiente.",
      },
      {
        q: "¿Na'at realmente entiende náhuatl y maya?",
        a: "El entrenamiento en lenguas originarias es un trabajo en progreso. Na'at tiene entrenamiento inicial con corpus de náhuatl y maya que le permite procesar texto en estas lenguas con mayor precisión que modelos genéricos. La cobertura todavía no es comparable a la del español. Es un primer paso — necesario y significativo, pero primer paso. La hoja de ruta contempla ampliar la cobertura a más lenguas indígenas de México.",
      },
      {
        q: "¿Qué tan bueno es Na'at comparado con modelos globales?",
        a: "Na'at no compite con los modelos frontera globales en tareas generales de razonamiento en inglés. Donde Na'at muestra ventaja es en tareas que requieren conocimiento profundo del contexto mexicano: normativa local, terminología legal en español, comprensión cultural y razonamiento con el marco jurídico de derecho civil codificado. Para una empresa mexicana que necesita IA que entienda su realidad regulatoria, Na'at ofrece precisión contextual que los modelos globales no alcanzan — y corre en tu infraestructura sin depender de APIs extranjeras.",
      },
      {
        q: "¿Los datos que Na'at procesa se envían a algún servidor externo?",
        a: "Depende de cómo lo despliegues. En Lattice Platform SaaS, los datos se procesan en infraestructura cloud ubicada en México (AWS Querétaro). Si descargas Na'at y lo despliegas on-premise, los datos nunca salen de tus servidores. En ambos casos, Sintérgica no retiene datos de operación de los usuarios.",
      },
      {
        q: "¿Qué significa gobernanza comunitaria del modelo?",
        a: "Sintérgica está desarrollando un marco de gobernanza para Na'at que involucre a la comunidad de usuarios, investigadores e instituciones en las decisiones sobre el modelo. Este marco — documentado como Gobernanza del Modelo y Constitución del Modelo — está en construcción. A medida que el ecosistema crezca, las decisiones sobre actualización, extensión y política del modelo incorporarán voces más allá de Sintérgica.",
      },
    ],
  },

  cta: {
    badge: "Colabora con la investigación",
    h2: "Construyamos el cerebro digital de México, juntos.",
    subtitle:
      "Si tu organización, universidad o institución quiere contribuir al corpus, a la evaluación o al gobierno del modelo, hablemos. Na'at es un proyecto vivo y abierto.",
    ctaPrimary: "Hablar con el equipo",
    ctaSecondary: "Ver la arquitectura Lattice",
  },
} as const;

export type NaatContent = typeof NAAT_DEFAULT;
