# Estructura de Assets — Sintérgica AI

## Carpetas

```
public/
├── logo/                  ← Logo de Sintérgica AI (SVG, PNG)
│   ├── logo-dark.svg      ← Logo para fondo oscuro (texto blanco/accent)
│   ├── logo-light.svg     ← Logo para fondo claro (texto oscuro/accent)
│   ├── logo-icon.svg      ← Isotipo / icono solo
│   └── logo-full.png      ← Logo completo en PNG (fallback)
│
├── favicon/               ← Favicons y app icons
│   ├── favicon.ico        ← 32x32 clásico
│   ├── favicon-16x16.png
│   ├── favicon-32x32.png
│   ├── apple-touch-icon.png  ← 180x180
│   ├── android-chrome-192x192.png
│   ├── android-chrome-512x512.png
│   └── site.webmanifest
│
├── images/
│   ├── home/              ← Imágenes específicas de la landing / home page
│   │   ├── hero-bg.webp
│   │   ├── testimonial-1.webp
│   │   ├── testimonial-2.webp
│   │   ├── testimonial-3.webp
│   │   └── news-*.webp
│   │
│   └── shared/            ← Imágenes compartidas entre páginas
│       ├── og-image.png   ← Open Graph (1200x630)
│       ├── pattern-dots.svg
│       └── placeholder.webp
```

## Convenciones

- **Formato preferido**: WebP para fotos, SVG para logos/iconos
- **Naming**: kebab-case, descriptivo (`hero-bg.webp`, no `img1.webp`)
- **Tamaños**: usar `next/image` con `width`/`height` explícitos
- **OG Image**: 1200×630px, colocar en `/images/shared/og-image.png`

## Colores de marca (referencia rápida)

| Token         | Hex       | Uso                          |
|---------------|-----------|------------------------------|
| midnight      | `#040615` | Fondo oscuro principal, texto |
| navy          | `#0d1e41` | Fondo oscuro secundario      |
| deep          | `#0d101e` | Superficies oscuras          |
| accent        | `#3665f5` | Azul primario / CTAs         |
| accent-light  | `#53abe6` | Azul claro / highlights      |
| white         | `#ffffff` | Fondos claros, texto en dark |
