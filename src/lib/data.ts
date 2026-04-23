import {
  Scale,
  Landmark,
  Ship,
  Zap,
  HeartPulse,
  Network,
  MapPin,
  BarChart3,
  Search,
  Wrench,
  Handshake,
  Building2,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

// ── 0. Navigation ───────────────────────────────────────────
export interface NavItem {
  name: string;
  desc?: string;
  href: string;
  badge?: string;
  dotColor?: string;
  icon?: LucideIcon;
}

export interface NavGroup {
  heading: string;
  items: NavItem[];
}

export interface NavMenuEntry {
  label: string;
  groups: NavGroup[];
  featured?: {
    title: string;
    desc: string;
    href: string;
    image?: string;
    gradient?: string;
  };
  bottomLinks?: { label: string; href: string }[];
  headerImages?: string[];
  compact?: boolean;
  featuredBelow?: boolean;
}

export const NAV_MENUS: Record<string, NavMenuEntry> = {
  lattice: {
    label: "Lattice",
    groups: [
      {
        heading: "ECOSISTEMA LATTICE",
        items: [
          { name: "Lattice", desc: "Sistema operativo de agentes autónomos", href: "/soluciones/lattice" },
          { name: "Lattice Séeb", desc: "SLMs especializados por industria", href: "/soluciones/lattice-seeb" },
          { name: "Lattice Na'at", desc: "Modelo maestro 120B para LATAM", href: "/investigacion/lattice-naat" },
        ],
      },
    ],
    featured: {
      title: "Seguridad →",
      desc: "16 capas de protección, desarrollado en Rust, con compliance verificable para entornos críticos.",
      href: "/seguridad",
      image: "/images/Foto Premium gestión de documentos.jpg",
    },
    bottomLinks: [
      { label: "Despliegue Privado", href: "/servicios/implementacion" },
      { label: "Fine Tuning", href: "/servicios/fine-tuning" },
    ],
  },
  soluciones: {
    label: "Soluciones",
    groups: [
      {
        heading: "Soluciones",
        items: [
          { name: "Lattice", desc: "IA privada con gobernanza y trazabilidad", href: "/soluciones/lattice" },
          { name: "Nahui", desc: "Trazabilidad operativa y control en campo", href: "/soluciones/nahui" },
          { name: "SalesHub", desc: "Automatización de ventas y captación de leads", href: "/soluciones/saleshub" },
        ],
      },
      {
        heading: "Servicios",
        items: [
          { name: "Consultoría", desc: "Estrategia de IA para tu organización", href: "/servicios/consultoria" },
          { name: "Implementación", desc: "Despliegue end-to-end de Lattice", href: "/servicios/implementacion" },
          { name: "Capacitación", desc: "Formación para equipos técnicos y de negocio", href: "/servicios/capacitacion" },
        ],
      },
    ],
    bottomLinks: [
      { label: "Desarrollo a Medida", href: "/servicios/desarrollo-a-medida" },
      { label: "Marketing as a Service (MaaS)", href: "/servicios/maas" },
    ],
  },
  industrias: {
    label: "Industrias",
    featuredBelow: false,
    groups: [
      {
        heading: "Sectores",
        items: [
          { name: "Legal", href: "/industrias/legal", icon: Scale },
          { name: "Gobierno", href: "/industrias/gobierno", icon: Landmark },
          { name: "Logística y Com. Ext.", href: "/industrias/logistica", icon: Ship },
          { name: "Energía", href: "/industrias/energia", icon: Zap },
          { name: "Salud", href: "/industrias/salud", icon: HeartPulse },
          { name: "Financiero", href: "/industrias/financiero", icon: Building2 },
          { name: "Ventas", href: "/industrias/ventas", icon: TrendingUp },
        ],
      },
    ],
    featured: {
      title: "Lattice Séeb →",
      desc: "SLMs especializados por industria. Modelos entrenados con corpus sectorial de LATAM.",
      href: "/soluciones/lattice-seeb",
      image: "/images/ai-cloud-concept-with-lit-brain.jpg",
    },
    bottomLinks: [
      { label: "Casos de uso", href: "/casos-de-uso" },
    ],
  },
  investigacion: {
    label: "Investigación",
    groups: [
      {
        heading: "Investigación",
        items: [
          { name: "Lattice Na'at", desc: "Modelo 120B de Sintérgica AI para LATAM", href: "/investigacion/lattice-naat" },
          { name: "Sesgo WEIRD", desc: "Por qué la IA global no es suficiente", href: "/investigacion/sesgo-weird" },
          { name: "Gobernanza", desc: "Ética, transparencia y control", href: "/investigacion/gobernanza" },
        ],
      },
      {
        heading: "Recursos",
        items: [
          { name: "Blog", desc: "Artículos y pensamiento de IA", href: "/recursos/blog" },
          { name: "Eventos", desc: "Webinars, workshops y conferencias", href: "/recursos/eventos" },
          { name: "Constitución", desc: "Marco constitucional de IA para México", href: "/investigacion/constitucion" },
        ],
      },
    ],
    featured: {
      title: "Sintérgica Labs →",
      desc: "Investigación abierta en IA desde México. Modelos, papers y datasets para la comunidad.",
      href: "/investigacion/labs",
      image: "/images/Catedral Metropolitana Ciudad de México.jpg",
    },
    bottomLinks: [
      { label: "GitHub", href: "https://github.com/Sintergica-AI" },
      { label: "HuggingFace", href: "https://huggingface.co/sintergica" },
    ],
  },

  empresa: {
    label: "Empresa",
    compact: true,
    groups: [
      {
        heading: "Empresa",
        items: [
          { name: "Nosotros", href: "/empresa/nosotros" },
          { name: "Equipo", href: "/empresa/equipo" },
          { name: "Alianzas", href: "/empresa/alianzas" },
          { name: "Prensa", href: "/empresa/prensa" },
          { name: "Contacto", href: "/empresa/contacto" },
        ],
      },
    ],
  },
};

export const LANGUAGES = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "pt", label: "PT" },
] as const;

// ── 1. Hero ──────────────────────────────────────────────────────────
export const HERO = {
  badge: "Sintérgica AI",
  headlineLine1: "La IA más inteligente no es la más grande.",
  headlineLine2: "Es la del",
  headlineAccent: "contexto correcto.",
  subtitle:
    "Construimos, implementamos y operamos Inteligencia Artificial para empresas, gobierno y sectores regulados en México y LATAM.",
  ctaPrimary: "Agenda tu diagnóstico →",
  ctaPrimaryHref: "/diagnostico",
  ctaSecondary: "Ver Casos de Uso",
  ctaSecondaryHref: "/casos-de-uso",
  metrics: [
    { value: "0", label: "datos expuestos a EE.UU." },
    { value: "100%",    label: "contexto normativo local" },
    { value: "16",    label: "capas de seguridad" },
  ],
  trustText: "Compatible con tu proveedor de nube y On-Premise.",
  socials: [
    { label: "LinkedIn",    href: "https://www.linkedin.com/company/sintergica/" },
    { label: "GitHub",      href: "https://github.com/Sintergica-AI" },
    { label: "HuggingFace", href: "https://huggingface.co/sintergica" },
  ],
} as const;

// ── 2. El Problema (Costo Real) ────────────────────────
export const PROBLEMA = {
  badge: "Las tres brechas",
  title:
    "Por qué los modelos globales fallan en LATAM.",
  ctaLabel: "Descubre la IA →",
  ctaHref: "/soluciones/lattice",
} as const;

// ── 3. Nuestras Soluciones ──────────────────────────
export interface Solucion {
  icon: LucideIcon;
  name: string;
  tag: string;
  description: string;
  stat: string;
  statLabel: string;
  cta: string;
  href: string;
  featured?: boolean;
}

export const SOLUCIONES_SECTION = {
  badge: "Ecosistema de Productos",
  title: "Tres productos. Una infraestructura integral.",
} as const;

export const SOLUCIONES: readonly Solucion[] = [
  {
    icon: Network,
    name: "Lattice Platform",
    tag: "El Workspace de IA",
    description:
      "El sistema operativo inteligente de tu organización. Como si ChatGPT y Slack se fusionaran, con agentes autónomos que trabajan solos y automatizaciones sin código.",
    stat: "16",
    statLabel: "capas de seguridad en Sandbox",
    cta: "Conocer Lattice →",
    href: "/soluciones/lattice",
    featured: true,
  },
  {
    icon: MapPin,
    name: "Nahui",
    tag: "Logística Inteligente",
    description:
      "Diseñado para la complejidad real de México: casetas, aduanas, normatividad SAT. El único TMS integrado con una IA privada que no envía tus datos fuera.",
    stat: "3",
    statLabel: "semanas para estar operativo",
    cta: "Conocer Nahui →",
    href: "/soluciones/nahui",
  },
  {
    icon: BarChart3,
    name: "SalesHub",
    tag: "Motor Comercial",
    description:
      "CRM, email marketing, funnels y agenda en un solo lugar. Integrado con Lattice, WhatsApp Business y pasarelas de pago locales (Mercado Pago, OXXO Pay).",
    stat: "5",
    statLabel: "herramientas reemplazadas",
    cta: "Conocer SalesHub →",
    href: "/soluciones/saleshub",
  },
] as const;

// ── 4. Industrias ─────────────────────────────────
export interface Industria {
  icon: LucideIcon;
  name: string;
  proName: string;
  useCase: string;
  agent: string;
  impact: string;
  gradient: string;
}

export const INDUSTRIAS_SECTION = {
  badge: "Industrias",
  title: "Sectores donde la precisión y privacidad son críticas",
  cta: "Descubre Lattice Séeb →",
  ctaHref: "/soluciones/lattice-seeb",
} as const;

export const INDUSTRIAS: readonly Industria[] = [
  {
    icon: Scale,
    name: "Legal",
    proName: "Lattice Séeb Legal",
    useCase: "Revisión contractual manual, investigación jurisprudencial",
    agent: "Ana — Analista Legal",
    impact: "−60% tiempo de revisión contractual",
    gradient: "grad-legal",
  },
  {
    icon: Landmark,
    name: "Gobierno",
    proName: "Lattice Séeb Gobierno",
    useCase: "Atención ciudadana, recaudación, crisis",
    agent: "Carlos — Inteligencia Comercial",
    impact: "−70% tiempo de detección de problemas",
    gradient: "grad-gobierno",
  },
  {
    icon: Ship,
    name: "Logística y Com. Ext.",
    proName: "Lattice Séeb Logística",
    useCase: "Errores documentales, clasificación arancelaria",
    agent: "Nahui + Lattice",
    impact: "−40% tiempos de despacho aduanal",
    gradient: "grad-logistica",
  },
  {
    icon: Zap,
    name: "Energía",
    proName: "Lattice Séeb Energía",
    useCase: "Reportes CRE/SENER, cambios regulatorios",
    agent: "Minerva — Investigación",
    impact: "Reportes en minutos vs. semanas",
    gradient: "grad-energia",
  },
  {
    icon: HeartPulse,
    name: "Salud",
    proName: "Lattice Séeb Salud",
    useCase: "Expedientes incompletos, cumplimiento COFEPRIS",
    agent: "Lattice + SalesHub",
    impact: "−35% errores de documentación clínica",
    gradient: "grad-salud",
  },
  {
    icon: Building2,
    name: "Financiero",
    proName: "Lattice Séeb Financiero",
    useCase: "PLD, KYC lento, reportes CNBV/UIF",
    agent: "Sofía — Compliance",
    impact: "3× más rápida detección de transacciones atípicas",
    gradient: "grad-financiero",
  },
  {
    icon: TrendingUp,
    name: "Retail & E-Commerce",
    proName: "SalesHub + MaaS",
    useCase: "Atención saturada, carritos abandonados",
    agent: "Lattice + SalesHub",
    impact: "15–25% recuperación de carritos",
    gradient: "grad-ventas",
  },
] as const;

// ── 5. Resultados y Prueba Social ───────────────────
export interface Contador {
  value: number;
  suffix: string;
  label: string;
}

export const RESULTADOS = {
  badge: "Resultados",
  title: "El impacto de implementar Lattice",
} as const;

export const CONTADORES: readonly Contador[] = [
  { value: 60, suffix: "%", label: "Menos tiempo en revisión legal" },
  { value: 70, suffix: "%", label: "Menos tiempo detectando crisis" },
  { value: 40, suffix: "%", label: "Menos carga en atención ciudadana" },
  { value: 3, suffix: "x", label: "Detección PLD más rápida" },
] as const;

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  image: string;
  companyName: string;
}

export const TESTIMONIALES: readonly Testimonial[] = [
  {
    quote: "Lattice resolvió el problema que teníamos con las herramientas globales: nuestros datos sensibles ya no salen de México y el modelo entiende perfectamente el Código Civil Federal.",
    name: "Director de TI",
    role: "Sector Financiero",
    companyName: "Fintech Mexicana",
    image: "/images/home/legal.jpg",
  },
  {
    quote: "SalesHub y Lattice nos permitieron eliminar 4 suscripciones de software y unificar toda nuestra operación comercial en una plataforma que sí entiende cómo vendemos en LATAM.",
    name: "VP de Ventas",
    role: "Sector Retail",
    companyName: "Empresa de E-Commerce",
    image: "/images/home/legal.jpg",
  },
] as const;

export const CASO_EXITO = {
  problema: "Las herramientas de IA genéricas alucinan con la regulación mexicana.",
  solucion: "Lattice Séeb fue entrenado específicamente para tu industria.",
  resultado: "Precisión regulatoria total sin exponer datos.",
  cta: "Ver verticales →",
  ctaHref: "/soluciones/lattice-seeb",
} as const;

// ── 6. Modelo de Servicio ───────────────────────────────────
export interface PasoServicio {
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
}

export const MODELO_SERVICIO = {
  badge: "Implementación",
  title: "Despliegue guante blanco en 4 modalidades.",
} as const;

export const PASOS_SERVICIO: readonly PasoServicio[] = [
  {
    icon: Search,
    step: "01",
    title: "Diagnóstico Inteligente",
    description:
      "Sesión gratuita de 45 mins. Demo funcional con tus datos reales y mapa de procesos críticos. Entregamos un business case y arquitectura recomendada.",
  },
  {
    icon: Wrench,
    step: "02",
    title: "SaaS o Despliegue Privado",
    description: "Elige entre SaaS (instancia dedicada en AWS Querétaro), VPC (nube privada), On-Premise (servidores físicos) o Híbrido según tus necesidades.",
  },
  {
    icon: Handshake,
    step: "03",
    title: "Socio Estratégico",
    description: "Servicios de consultoría, fine-tuning privado, capacitación y MaaS. Operamos la IA contigo con SLA en español.",
  },
] as const;

// ── 6b. Pre-footer CTA ─────────────────────────────────────
export const PRE_FOOTER_CTA = {
  badge: "Diagnóstico Sin Costo",
  title: "¿Listo para implementar IA en tu organización?",
  subtitle: "Agenda tu sesión de Diagnóstico Inteligente (45 min). Identificamos procesos automatizables, definimos la arquitectura y trazamos tu hoja de ruta.",
  cta: "Agendar sesión de diagnóstico",
  ctaHref: "/diagnostico",
} as const;

// ── 7. Footer ───────────────────────────────────────────────
export const FOOTER_COLUMNS = [
  {
    title: "Productos",
    links: [
      { label: "Lattice Platform", href: "/soluciones/lattice" },
      { label: "Lattice Séeb", href: "/soluciones/lattice-seeb" },
      { label: "Nahui", href: "/soluciones/nahui" },
      { label: "SalesHub", href: "/soluciones/saleshub" },
    ],
  },
  {
    title: "Servicios",
    links: [
      { label: "Consultoría Estratégica", href: "/servicios/consultoria" },
      { label: "Implementación", href: "/servicios/implementacion" },
      { label: "Fine-Tuning Privado", href: "/servicios/fine-tuning" },
      { label: "Desarrollo a Medida", href: "/servicios/desarrollo-a-medida" },
    ],
  },
  {
    title: "Investigación",
    links: [
      { label: "Sintérgica Labs A.C.", href: "/investigacion/labs" },
      { label: "Lattice Na'at", href: "/investigacion/lattice-naat" },
      { label: "Blog", href: "/recursos/blog" },
      { label: "Eventos", href: "/recursos/eventos" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: "hola@sintergica.ai", href: "mailto:hola@sintergica.ai" },
      { label: "+52 56 5922 7340", href: "https://wa.me/525659227340" },
      { label: "Soporte", href: "/soporte" },
    ],
  },
] as const;

export const FOOTER_SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/sintergica/" },
  { label: "X", href: "#" },
  { label: "HuggingFace", href: "https://huggingface.co/sintergica" },
] as const;

export const FOOTER_BOTTOM_LINKS = [
  { label: "Aviso de Privacidad", href: "/privacidad" },
  { label: "Términos de Uso", href: "/terminos" },
  { label: "Seguridad & Compliance", href: "/seguridad" },
] as const;

export const FOOTER_TAGLINE = "La infraestructura de IA de referencia para América Latina." as const;
