---
trigger: manual
---

---
trigger: always_on
---

# Design Tokens — Sistema de Color Sintérgica AI

Fuente de verdad de todos los colores del proyecto.
NUNCA usar valores hex directamente en el código.
NUNCA usar clases Tailwind genéricas (blue-500, gray-400, white, black).
SIEMPRE usar los tokens definidos aquí.

---

## 1. Fondos oscuros (dark backgrounds)

```
brand-midnight   #040615   → fondo principal — el más oscuro
brand-navy       #060715   → fondo secundario, cards sobre midnight
brand-deep       #0d101e   → superficies internas, overlays, modales
```

Jerarquía de profundidad:
  brand-midnight (base) → brand-navy (cards) → brand-deep (elementos sobre cards)

---

## 2. Azules de acción (interactive blues)

```
brand-accent        #3665f5   → CTA primario, links activos, highlights
brand-accent-light  #53abe6   → íconos decorativos, acentos secundarios
```

Regla de densidad: máximo 2 elementos con brand-accent visible
simultáneamente en cualquier viewport. Si hay más de 2, revisar
si alguno puede resolverse con un token alternativo de esta guía.

Opacidades aprobadas para brand-accent (fondos y bordes):
```
brand-accent/5    → glow muy sutil
brand-accent/10   → fondo de card activa
brand-accent/15   → divisores, separadores
brand-accent/20   → borde de card destacada
brand-accent/30   → overlay hover
brand-accent/50   → badge background sobre oscuro
```
Opacidades > 50% sobre fondos oscuros: verificar contraste AA antes de usar.

---

## 3. Textos y fondos claros

```
brand-white    #ffffff   → texto principal sobre fondos oscuros, fondos blancos
brand-surface  #f6f9fc   → texto muted, fondos neutros, hover states
```

---

## 4. Escala de brand (paleta completa Sintérgica)

Escala cromática de la identidad de marca — de más claro a más oscuro.
Usar para enriquecer la UI sin recurrir al azul de acción.

```
brand-50     #F9F9FC   → fondos ultra sutiles, hover en modo claro
brand-100    #B4E0F7   → chips, badges informativos, fondos suaves
brand-200    #89CAF5   → íconos secundarios, bordes de cards
brand-300    #5DB0F5   → labels, captions con acento ligero
brand-400    #3092F7   → hover states de elementos interactivos
brand-500    #006EFA   → alternativa a brand-accent en fondos claros
brand-600    #005ACD   → accent sobre fondos claros (cumple AA)
brand-700    #0046A0   → texto de acento sobre blanco
brand-800    #003373   → fondo oscuro con tono azul puro
brand-900    #001F46   → fondo muy oscuro, alternativa a brand-midnight
brand-950    #000B19   → el más oscuro de la escala brand
```

---

## 5. Neutros (slate)

Para texto de apoyo, bordes y superficies neutras.
Preferir sobre grises Tailwind genéricos.

```
slate-50     #F8FAFC   → fondo alternativo a brand-surface
slate-100    #F1F5F9   → backgrounds de cards en modo claro
slate-200    #E2E8F0   → bordes, separadores, divisores
slate-300    #CBD5E1   → placeholders
slate-400    #94A3B8   → metadata, timestamps, labels secundarios
slate-500    #64748B   → texto de apoyo, captions
slate-600    #475569   → texto secundario sobre fondos claros
slate-700    #334155   → texto con buen contraste sobre claro
slate-800    #1E293B   → casi negro para texto
slate-900    #020617   → negro profundo, alternativa a brand-midnight
```

---

## 6. Colores semánticos

SOLO para comunicar estado. Nunca decorativamente.
Nunca como color de identidad de marca.

### Éxito / confirmación / métricas positivas
```
success-100  #DCFCE7   → fondo de alert success
success-200  #BBF7D0   → borde success
success-400  #4ADE80   → ícono success, check
success-600  #16A34A   → texto success sobre claro (AA)
```

### Advertencia / fricción
```
warning-100  #FFEDD5   → fondo alert warning
warning-200  #FED7AA   → borde warning
warning-400  #FB923C   → ícono warning
warning-600  #D97706   → texto warning sobre claro (AA)
```

### Error / peligro / dato negativo
```
danger-200   #FEE2E2   → fondo alert error
danger-400   #FECACA   → borde error
danger-500   #DC2626   → ícono error, destructive actions
danger-600   #DC2626   → texto error sobre claro (AA)
```

### Informativos especiales
```
sky-200      #BAE6FD   → highlight informativo suave
sky-600      #0284C7   → info sobre fondos claros

purple-200   #E9D5FF   → tag investigación, beta, lab
purple-600   #9333EA   → acento investigación sobre claro

lime-200     #D9F99D   → fondo métrica positiva
lime-600     #65A30D   → texto métrica positiva (ROI, crecimiento)

yellow-200   #CA8A04   → highlight especial, anotaciones
yellow-600   #CA8A04   → texto advertencia suave

pink-200     #FBCFE8   → tag especial decorativo
pink-600     #DF4288   → acento de alto contraste sobre claro
```

---

## 7. Mapa de roles — qué color va dónde

| Elemento de UI                   | Token correcto                    | Prohibido               |
|----------------------------------|-----------------------------------|-------------------------|
| CTA primario                     | brand-accent                      | cualquier otro          |
| Hover de CTA                     | brand-400                         | brand-accent-light      |
| Links en body text               | brand-600                         | brand-accent            |
| Ícono decorativo                 | brand-accent-light o brand-200    | brand-accent            |
| Badge informativo                | brand-100 + brand-700             | brand-accent sólido     |
| Badge estado: activo/éxito       | success-100 + success-600         | brand-accent            |
| Badge estado: pendiente          | warning-100 + warning-600         | brand-accent            |
| Badge estado: error              | danger-200 + danger-600           | brand-accent            |
| Badge investigación / lab        | purple-200 + purple-600           | brand-accent            |
| Separador / divider              | slate-200 o brand-accent/15       | brand-accent sólido     |
| Fondo de card (modo oscuro)      | brand-navy o brand-deep           | brand-accent            |
| Fondo de card (modo claro)       | slate-100 o brand-surface         | brand-accent            |
| Texto de apoyo / metadata        | slate-400 o slate-500             | brand-accent            |
| Texto secundario                 | slate-600                         | brand-accent            |
| Métrica numérica positiva        | lime-600 o success-600            | brand-accent            |
| Métrica numérica de problema     | warning-600 o danger-600          | brand-accent            |
| Gráfica — serie 1                | brand-accent                      | —                       |
| Gráfica — serie 2                | brand-300                         | brand-accent            |
| Gráfica — serie 3                | lime-600                          | brand-accent            |
| Gráfica — serie 4                | purple-600                        | brand-accent            |
| Agente Ana (Legal)               | purple-200 / purple-600           | brand-accent            |
| Agente Carlos (Comercial)        | sky-200 / sky-600                 | brand-accent            |
| Agente Sofía (Compliance)        | warning-100 / warning-600         | brand-accent            |
| Agente Marco (Analista)          | brand-100 / brand-600             | brand-accent            |
| Agente Luna (Contenido)          | lime-200 / lime-600               | brand-accent            |

---

## 8. Árbol de decisión — antes de escribir cualquier color

1. ¿Es una acción principal (botón, CTA, link nav activo)?
   → brand-accent

2. ¿Es un ícono o acento puramente decorativo?
   → brand-accent-light o brand-200/brand-300

3. ¿Comunica un estado (éxito / error / warning / info)?
   → semánticos del bloque 6

4. ¿Es texto de apoyo, metadata, caption?
   → slate-400 / slate-500 / slate-600

5. ¿Es un borde, separador o divisor?
   → slate-200 o brand-accent/15

6. ¿Es fondo de card o superficie en modo oscuro?
   → brand-navy, brand-deep o brand-900

7. ¿Es un tag de categoría o etiqueta especial?
   → purple, lime, sky o pink según contexto semántico

8. ¿Ya hay 2 elementos con brand-accent en el viewport?
   → elegir alternativa de esta guía

Si el caso no está cubierto aquí: consultar al equipo de diseño
antes de improvisar un color fuera del sistema.

---

## 9. tailwind.config.ts — configuración requerida

```ts
// theme.extend.colors
colors: {
  brand: {
    midnight: '#040615',
    navy:     '#060715',
    deep:     '#0d101e',
    accent:   '#3665f5',
    'accent-light': '#53abe6',
    white:    '#ffffff',
    surface:  '#f6f9fc',
    // Escala completa
    50:  '#F9F9FC',
    100: '#B4E0F7',
    200: '#89CAF5',
    300: '#5DB0F5',
    400: '#3092F7',
    500: '#006EFA',
    600: '#005ACD',
    700: '#0046A0',
    800: '#003373',
    900: '#001F46',
    950: '#000B19',
  },
  // slate, success, warning, danger, sky, purple,
  // lime, pink, yellow → disponibles como colores
  // Tailwind nativos, no requieren configuración adicional.
}
```