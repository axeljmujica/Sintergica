---
trigger: glob
globs: "**/*.tsx,**/*.ts,**/*.jsx"
---

# Performance Rules

<core_web_vitals_targets>
LCP < 2.5s  → Hero content must be server-rendered, not client-only
CLS = 0     → Reserve space for all dynamic content
INP < 200ms → No heavy computation on interaction handlers
</core_web_vitals_targets>

<animation_performance>
Safe to animate:    transform, opacity
Never animate:      width, height, top, left, margin, padding
Always add:         will-change: transform on elements with 
                    complex motion sequences
Heavy components:   wrap in dynamic() with ssr: false
</animation_performance>

<bundle_discipline>
Lucide icons — always named imports:
  ✅ import { ArrowRight, ChevronDown } from 'lucide-react'
  ❌ import * as Icons from 'lucide-react'

Non-hero sections — use LazyMotion:
  import { LazyMotion, domAnimation, m } from "motion/react"
  Replace <motion.div> with <m.div> inside <LazyMotion>

Aceternity — always copy source, never install as package.
  Place in: /components/ui/[component-name].tsx
</bundle_discipline>