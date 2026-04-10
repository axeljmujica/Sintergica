---
trigger: glob
globs: "**/*.tsx,**/*.jsx"
---

# Responsive System

<breakpoints>
Tailwind defaults — do not customize:
  sm: 640px   lg: 1024px
  md: 768px   xl: 1280px
</breakpoints>

<mobile_first_law>
Write base = mobile. Scale up with prefixes.
Every section must be usable and readable at 375px width.
No horizontal overflow allowed at any breakpoint.
Decorated sections must have overflow-hidden.
</mobile_first_law>

<layout_rhythm>
Container:  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
Section:    py-16 md:py-24 lg:py-32
Grid:       grid-cols-1 md:grid-cols-2 lg:grid-cols-3
Gap:        gap-6 md:gap-8 lg:gap-10
</layout_rhythm>

<type_scale>
h1: text-4xl md:text-5xl lg:text-6xl xl:text-7xl
h2: text-3xl md:text-4xl lg:text-5xl
h3: text-xl md:text-2xl
p:  text-base (never scale body text)
</type_scale>

<touch_targets>
All interactive elements: min-h-[44px] min-w-[44px]
Buttons: py-3 minimum vertical padding
Nav links on mobile: py-3 minimum
</touch_targets>

<heavy_effects_on_mobile>
BackgroundBeams:        hidden md:block
Canvas/particle effects: hidden md:block  
Spotlight:              reduce opacity on mobile
All Aceternity effects: audit at 375px before shipping
</heavy_effects_on_mobile>