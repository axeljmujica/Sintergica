---
name: new-section
description: Invoke when building a new landing page section from scratch. Ensures correct structure, brand tokens, typography hierarchy, responsive layout, animation pattern, and Spanish copy aligned with Sintérgica AI messaging.
---

## Section Build Checklist

### Structure
- [ ] Semantic: <section> wrapping all content
- [ ] Container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- [ ] Spacing: py-16 md:py-24 lg:py-32
- [ ] overflow-hidden if using absolute positioned decorations

### Typography
- [ ] ONE h2 with font-display font-bold (section title)
- [ ] h3 for cards/items — NO font-display
- [ ] Paragraph: text-base, NO font class

### Colors
- [ ] Zero raw Tailwind color classes
- [ ] All colors from brand tokens only
- [ ] Dark surfaces: brand-midnight or brand-navy
- [ ] Accent elements: brand-accent or brand-accent-light

### Animation (Framer Motion 12)
- [ ] Import from "motion/react"
- [ ] useReducedMotion() guard in component
- [ ] Animate only: transform + opacity
- [ ] Stagger delay pattern: 0.1s between children

### Responsive
- [ ] Tested at 375px width
- [ ] Grid collapses correctly on mobile
- [ ] Touch targets min 44x44px
- [ ] No horizontal overflow

### Copy
- [ ] Spanish only
- [ ] No lorem ipsum — use Documento Maestro content
- [ ] First sentence = benefit or answer
- [ ] Include at least one concrete number
- [ ] Brand name: "Sintérgica AI" with accent, never abbreviated