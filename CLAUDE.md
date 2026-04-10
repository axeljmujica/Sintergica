# CLAUDE.md — Sintérgica AI Website

> **Referencia visual:** cohere.com — laboratorio de IA enterprise.
> **Posicionamiento:** Sintérgica NO es una agencia digital. Es un laboratorio de IA deeptech que construye modelos de IA y plataformas enterprise para México y América Latina.

---

## 1. STACK TÉCNICO

```
Next.js 15 (App Router, RSC) · TypeScript strict · Tailwind CSS v4
Aceternity UI (shadcn registry) + shadcn/ui · Motion (framer-motion v12+)
Proxima Nova (display/títulos) · Gilroy (accent/decorativa) · Mulish (prosa larga)
Lucide React · next-intl (es, en, pt-BR) · next-themes · Vercel
```

### Estructura de archivos

```
src/
├── app/[locale]/
│   ├── layout.tsx · page.tsx (Homepage)
│   ├── lattice/          → page, seeb, naat, seguridad
│   ├── soluciones/       → page, nahui, saleshub, consultoria, implementacion,
│   │                       capacitacion, desarrollo-a-medida, maas
│   ├── industrias/       → page, legal, gobierno, logistica, energia, salud,
│   │                       financiero, ventas
│   ├── investigacion/    → page, naat, sesgo-weird, gobernanza, constitucion
│   ├── precios/page.tsx
│   ├── empresa/          → nosotros, equipo, alianzas, prensa, contacto
│   └── blog/             → page, [slug]
├── components/
│   ├── layout/           → Header, MegaMenu, Footer, MobileNav
│   ├── ui/               → Aceternity + shadcn (ver sección 7)
│   ├── sections/         → Hero, Pain, Products, Verticals, Stats, Security,
│   │                       Pricing, Partners, Comparison, CTA, Testimonials
│   ├── shared/           → AnimatedCounter, FadeIn, SectionBadge, GlassCard, GradientText
│   └── icons/ProductIcons.tsx
├── lib/                  → constants.ts, animations.ts, utils.ts
├── messages/             → es.json, en.json, pt.json
└── styles/globals.css
```

---

## 2. DESIGN SYSTEM "TURING"

### Paleta disponible

```
Brand:      #006EFA (primario)
Escala:     50:#F9F9FC → 500:#006EFA → 950:#000B19
Neutrals:   slate-50:#F8FAFC → slate-900:#020617
Semánticos: danger:#DC2626 · warning:#D97706 · success:#16A34A
Acentos:    purple:#9333EA · pink:#DF4288 · sky:#0284C7 · blue:#2563EB · lime:#65A30D
```

Los colores de cada producto se definen por contexto. No hay asignación fija — usar los colores disponibles de la paleta según se indique.

### Gradientes disponibles

```
brand:  135deg #006EFA → #5DB0F5
purple: 135deg #C084FC → #818CF8
blue:   135deg #818CF8 → #60A5FA
labs:   135deg #93C5FD → #C4B5FD
hero:   180deg slate-900 → #0a1628 → slate-900
```

### Tokens rápidos

```
Elevation light: lv0-lv1=slate-200 · lv2=slate-200+border:slate-300 · lv3=white+border:slate-300
Elevation dark:  lv0=slate-800 · lv1=slate-900 · lv2=slate-900+border:slate-700 · lv3=slate-950+border:slate-300
Spacings: xs:0.25rem sm:0.5rem base:0.75rem lg:1rem xl:1.25rem 2xl:1.5rem 3xl:2rem 4xl:2.5rem 5xl:4rem 6xl:8rem
Radius: sm:8px base:12px lg:16px full:9999px
Icons: sm:16px base:20px lg:24px
```

---

## 3. TIPOGRAFÍA — LEY ABSOLUTA

```
h1        → Proxima Nova 800 | font-proxima font-extrabold
h2        → Proxima Nova 700 | font-proxima font-bold
h3–h6     → Proxima Nova 600 | font-proxima font-semibold
body      → Mulish 400       | font-mulish (default)
botones   → Mulish 500       | font-mulish font-medium
badges    → Mulish 500       | font-mulish font-medium
prosa     → Mulish 400       | font-mulish
accent    → Gilroy           | font-gilroy (uso decorativo puntual, nunca como default)

PROHIBIDO: Gilroy en body, botones, badges o como fuente principal de headings.
PROHIBIDO: font-sans explícito, Archivo, Inter, Poppins, system-ui.
```

---

## 4. NAMING — LEY ABSOLUTA

Estos nombres base NUNCA deben aparecer en texto visible, comentarios, alt text ni metadata:

| Plataforma base | Nombre público | Prohibido mencionar |
|---|---|---|
| OpenWebUI / OpenFang | Lattice / Lattice Platform | OpenWebUI, OpenFang |
| GoHighLevel / GHL | SalesHub | GoHighLevel, GHL |
| Fleetbase | Nahui | Fleetbase |
| Fine-tunes Qwen | Séeb / Séeb Pro | Qwen |
| Fine-tune Kimi / K2.5 | Na'at / Na'at Full | Kimi, K2.5 |
| ActivePieces / N8N | Lattice Flows | ActivePieces, N8N |

---

## 5. NAVEGACIÓN

```
Header: [Logo SINTÉRGICΔ] — Lattice · Soluciones · Industrias · Investigación · Empresa — [☀️🌙] [🌐 ES] [CTA: Agenda tu diagnóstico]
```

Mega-menus estilo Cohere (3 columnas + card visual + bottom links):

- **Lattice:** Ecosistema (Lattice, Séeb, Na'at) · Card: "Seguridad → 16 capas" · Links: Despliegue Privado, Fine Tuning
- **Soluciones:** Plataformas (Lattice, Nahui, SalesHub) · Servicios (Consultoría, Implementación, Capacitación) · Links: Desarrollo a Medida, MaaS
- **Industrias:** 7 sectores (Legal, Gobierno, Logística, Energía, Salud, Financiero, Ventas) · Card: "Lattice Séeb → SLMs por industria"
- **Investigación:** Na'at, Sesgo WEIRD, Gobernanza, Constitución · Recursos: Blog, Eventos · Card: "Sintérgica Labs" · Links: GitHub, HuggingFace
- **Empresa:** Dropdown simple: Nosotros, Equipo, Alianzas, Prensa, Contacto

---

## 6. COPY & VOICE

**Voz:** Técnico pero accesible. Confiado sin arrogancia. Directo. Como un CTO que también sabe vender. Español mexicano natural — términos técnicos en inglés están bien (fine-tuning, SaaS, pipeline, on-premise).

### Reglas de copy

1. **Claridad > Creatividad** — Si no se entiende en 5 segundos, reescríbelo.
2. **Beneficio > Feature** — MAL: "Sandbox WASM con firma Ed25519". BIEN: "Tus datos nunca salen de tu infraestructura".
3. **Especificidad > Vaguedad** — MAL: "Ahorra tiempo". BIEN: "Reduce revisión contractual de 5 días a 4 horas".
4. **Social proof > Promesas.**
5. **Un CTA por sección.**
6. **Dolor → Solución → Prueba → Acción.**

### Lo que NUNCA se escribe

- "La IA más avanzada del mundo"
- "primer modelo de IA soberana de LATAM" (existen LatamGPT y Kal)
- Nombres de proveedores base (ver sección 4)
- Hipérboles sin dato que las respalde
- Comparaciones negativas nombrando competidores
- Copy genérico: "soluciones innovadoras", "transformación digital de vanguardia"

---

## 7. UX/UI

### Principio rector

El sitio debe sentirse como Stripe, Linear o Vercel — no como un documento de Word con Tailwind. Cada sección necesita profundidad visual, movimiento sutil y variedad cromática.

### 3 capas por sección

1. **Fondo:** gradient, textura o componente Aceternity
2. **Contenido:** cards con elevación (shadows, borders, glassmorphism)
3. **Acentos:** glows, badges de color, líneas decorativas, íconos

### Alternancia de fondos

```
Hero:        slate-950 + gradient-hero + BackgroundBeams
Problema:    white / slate-900 dark
Productos:   brand-50 / brand-950 dark
Verticales:  white + color por industria
Comparativa: slate-950 + glows
Stats:       gradient brand-500→700
Seguridad:   slate-900
Partners:    slate-50
CTA Final:   brand-500→600
Footer:      slate-950
```

### Componentes Aceternity obligatorios

| Sección | Componente |
|---|---|
| Hero homepage | `BackgroundBeams` + `Spotlight` |
| Hero texto | `TextGenerateEffect` |
| Grid productos | `BentoGrid` |
| Cards servicio | `3DCard` |
| Logo partners | `InfiniteMovingCards` |
| Tabs verticales | `Tabs` (Aceternity) |
| Features scroll | `StickyScrollReveal` |
| Badges producto | `MovingBorder` |
| Fondo secciones alt | `WavyBackground` |
| Terminal/demo | `MacbookScroll` |

### Micro-interacciones obligatorias

| Elemento | Interacción |
|---|---|
| Botones | `whileHover={{ scale: 1.02 }}` + shadow-glow |
| Cards | `whileHover={{ y: -4 }}` + shadow increase |
| Nav items | CSS underline slide |
| Toggles | Rotate 180° + fade |
| Badges "nuevo" | `animate-pulse` |
| Links con flecha | Arrow +4px en hover |
| Tabs | Content slideUp |
| Accordion | `AnimatePresence` + height auto |
| Scroll indicator | Fade on scroll |
| Logos marquee | Infinite scroll sin pausa |

### Animaciones de entrada

Scroll-triggered con Motion. `fadeUpVariants`: opacity 0→1, y 30→0, delay stagger (cards: 100ms, items: 50ms, stats: 150ms). Transiciones máximo 500ms. Respetar `prefers-reduced-motion`.

### Estrategia de imágenes

- **Hero:** Fotografía real tech/IA o gradientes + 3D abstractos. NUNCA stock genérico.
- **Productos:** Mockup visual por producto.
- **Industrias:** Imagen representativa por vertical.
- **Fuentes:** Unsplash, Pexels, screenshots propios. NUNCA iStock watermarked ni AI-generated faces.
- **Tratamiento:** WebP/AVIF via `next/image`. Overlay con gradient brand. 16:9 heros, 4:3 cards, 1:1 avatars.

### Breakpoints

| Ancho | Nav | Grid | Hero |
|---|---|---|---|
| 375px | Hamburger | 1 col | Stack centrado |
| 768px | Hamburger | 2 cols | 1 col izquierda |
| 1024px | Mega-menu | 3 cols | 2 cols (texto + visual) |
| 1440px | Mega-menu | 3–4 cols | Max-width 7xl centrado |

### Accesibilidad

Contraste AA · `prefers-reduced-motion` · Focus rings visibles · Alt text descriptivo · Aria labels en botones de ícono

---

## 8. i18n

3 locales: `es` (default, sin prefijo), `en`, `pt-BR`. next-intl con routing traducido. Todo texto de `messages/*.json` vía `useTranslations()`. Nunca hardcodeado.

---

## 9. SEO + GEO + AEO

- **SEO:** `generateMetadata()` con hreflang. Sitemap multilingual. Schema.org: Organization, Product, SoftwareApplication, FAQPage, Service, BreadcrumbList.
- **GEO:** Contenido citeable en HTML (no escondido en JS). Entidades claras. Permitir GPTBot, Claude-Web, PerplexityBot en robots.txt.
- **AEO:** FAQ schema en productos y precios. HowTo schema donde aplique. Preguntas en H2/H3. Tablas comparativas en HTML semántico.

---

## 10. MÉTRICAS DE IMPACTO

```
Legal:      −60% revisión contractual · −70% comparación documental
Gobierno:   −70% detección problemas · +15–30% ingresos propios
Logística:  −40% tiempos despacho · −60% errores documentales
Salud:      −35% errores documentación · −25% ausencias
Financiero: 3× detección transacciones atípicas · −50% tiempo KYC
General:    −30–40% tareas repetitivas · ROI 3–6 meses
MaaS:       −30–60% costo/lead · +40–80% conversión · 5–10× contenido
```

---

## 11. CHECKLIST PR

Antes de merge:

- [ ] Proxima Nova en h1/h2/h3. Gilroy solo como accent decorativo.
- [ ] Brand color #006EFA correcto
- [ ] Nombres públicos correctos (sección 4), sin proveedores base
- [ ] H1 claro en 5 seg sin contexto
- [ ] CTA visible above the fold
- [ ] Beneficios antes que features, métricas específicas
- [ ] Social proof visible
- [ ] Al menos 2 colores por sección + profundidad visual (shadows, layers, gradients)
- [ ] Animación scroll-triggered + hover states
- [ ] Imagen/visual presente (no solo texto)
- [ ] Fondos alternados entre secciones
- [ ] Responsive 375/768/1024/1440px
- [ ] Dark mode funcional
- [ ] i18n 3 idiomas
- [ ] Schema.org + metadata SEO + hreflang
- [ ] Copy pasa reglas de voz (sección 6)
- [ ] Transiciones ≤500ms · `prefers-reduced-motion`

---

## 12. MODO AUDITORÍA

Cuando se diga "revisa la web como consultor YC" o "audita esta página":

1. Primera impresión (5 seg): ¿Qué entiendo? ¿Para quién? ¿Qué hago?
2. Claridad del mensaje: ¿H1 se entiende solo?
3. Jerarquía visual: ¿Ojos van donde deben? ¿CTA obvio?
4. Copy audit: Aplicar reglas sección 6
5. Objeciones: ¿Se resuelven?
6. Conversión: ¿Path claro por buyer persona?
7. Mobile: ¿375px funcional?
8. Velocidad: ¿Imágenes optimizadas? ¿Lazy load?
9. SEO/GEO: ¿Metadata? ¿Schema.org? ¿Citeable?
10. Score + recomendaciones

```
🔴 CRÍTICO (arreglar hoy):       [problema + por qué + solución]
🟡 IMPORTANTE (siguiente sprint): [problema + por qué + solución]
🟢 OPORTUNIDAD (backlog):         [mejora + impacto esperado]
📊 SCORE: [X/10] — [resumen]
```

---

## 13. REGLAS DE COMPORTAMIENTO (Claude Code)

### Antes de escribir código

- Siempre lee el archivo/componente existente antes de modificarlo.
- Si un componente Aceternity ya existe en `components/ui/`, úsalo. No lo reimplementes.
- Pregunta antes de crear una página nueva o un componente compartido.

### Patrones obligatorios

- Componentes: React Server Components por default. `"use client"` solo si hay interactividad.
- Imports: Aceternity desde `@/components/ui/`, shadcn igual. Nunca instalar paquetes duplicados.
- Estilos: Tailwind classes únicamente. Nunca CSS modules ni styled-components.
- i18n: Todo texto visible viene de `messages/*.json` vía `useTranslations()`. Nunca hardcodear strings.

### Commits y PRs

- Formato de commit: `feat(lattice): add security section` / `fix(nav): mega-menu mobile`
- Antes de considerar terminado, pasar la checklist PR (sección 11).

### Lo que NUNCA hacer

- Instalar fuentes diferentes a Proxima Nova, Gilroy y Mulish.
- Crear archivos CSS separados.
- Usar `any` en TypeScript.
- Importar componentes de Aceternity que no están en la tabla de componentes obligatorios sin preguntar.

---

*Versión: Marzo 2026 — Optimizado para Claude Code*