---
name: aceternity-integration
description: Invoke when adding, adapting, or troubleshooting any component from ui.aceternity.com. Handles brand token replacement, Framer Motion 12 import fix, mobile safety audit, and SSR wrapping.
---

## Protocol: Add an Aceternity Component

### Step 1 — Source
Copy from https://ui.aceternity.com/components/[name]
Save to: /components/ui/[kebab-name].tsx

### Step 2 — Fix Motion Import (CRITICAL)
Find every occurrence of:
  from "framer-motion"
Replace with:
  from "motion/react"

### Step 3 — Replace Colors
Aceternity source → brand token replacement:
  white / #fff          → text-brand-white / bg-brand-white
  zinc-900 / neutral-900 → bg-brand-midnight
  blue-500 / indigo-500  → bg-brand-accent / text-brand-accent
  blue-400               → text-brand-accent-light
  gray-400 / zinc-400    → text-brand-surface
  dark backgrounds       → bg-brand-navy or bg-brand-deep

### Step 4 — Fix Typography
Remove any font-family inline styles or font class overrides.
Apply typography.md rule: headings only get font-display.

### Step 5 — Accessibility
Add to every animated component:
  const shouldReduce = useReducedMotion()
Use shouldReduce to skip or minimize animations.

### Step 6 — SSR Safety
Canvas, particle, or WebGL components:
  const Component = dynamic(
    () => import('@/components/ui/[name]'),
    { ssr: false }
  )

### Step 7 — Mobile Audit
Test at 375px. If visual weight is too high:
  - Wrap in: <div className="hidden md:block">
  - Or reduce intensity with responsive props

## Component Approval Matrix

| Component            | Section           | Mobile       |
|---------------------|-------------------|--------------|
| BackgroundBeams      | Hero only         | hidden md:block |
| Spotlight            | Hero only         | Reduce opacity  |
| TextGenerateEffect   | Hero headline     | Full support    |
| HoverBorderGradient  | CTAs              | Full support    |
| CardHoverEffect      | Feature cards     | Full support    |
| BentoGrid            | Product sections  | Stack to 1 col  |
| StickyScroll         | Product walkthroughs | Simplify    |
| AnimatedTooltip      | Agent profiles    | Full support    |
| MovingBorder         | Highlight cards   | Full support    |
| WavyBackground       | Section dividers  | hidden md:block |