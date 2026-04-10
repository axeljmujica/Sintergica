import type { Config } from "tailwindcss";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const flattenColorPalette = require("tailwindcss/lib/util/flattenColorPalette").default;

// Aceternity UI requires CSS variables for all colors
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );
  addBase({ ":root": newVars });
}

/*
 * ──────────────────────────────────────────────────────────────
 * Sintérgica AI — Brand Color System
 * Source colors (6 official):
 *   #040615  midnight    — darkest bg, primary text on light
 *   #060715  navy        — secondary dark bg
 *   #0d101e  deep        — dark surfaces
 *   #3665f5  accent      — primary blue (CTAs, links, highlights)
 *   #53abe6  accent-light — lighter blue (secondary accent)
 *   #ffffff  white       — light bg, text on dark
 *
 * Derived tints use opacity classes (e.g. bg-brand-accent/10)
 * to avoid introducing non-brand hex values.
 * ──────────────────────────────────────────────────────────────
 */

const config: Config = {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-mulish)", "sans-serif"],
        proxima: ["var(--font-proxima)", "sans-serif"],
        mulish: ["var(--font-mulish)", "sans-serif"],
        gilroy: ["var(--font-gilroy)", "sans-serif"],
      },
      colors: {
        theme: {
          bg: {
            primary: "var(--bg-primary)",
            secondary: "var(--bg-secondary)",
          },
          text: {
            primary: "var(--text-primary)",
            secondary: "var(--text-secondary)",
          },
          accent: "var(--accent)",
          border: "var(--border)",
          card: "var(--card-bg)",
          code: "var(--code-bg)",
        },
        brand: {
          midnight: "var(--brand-midnight)",
          navy: "var(--brand-navy)",
          deep: "var(--brand-deep)",
          accent: "var(--brand-accent)",
          "accent-light": "var(--brand-accent-light)",
          white: "var(--brand-white)",
          surface: "var(--brand-surface)",
        },
        // Semantic surface tokens (map to CSS vars)
        surface: {
          elevated: "var(--surface-elevated)",
          overlay: "var(--surface-overlay)",
          subtle: "var(--surface-subtle)",
        },
        // Semantic content tokens
        content: {
          primary: "var(--content-primary)",
          secondary: "var(--content-secondary)",
          tertiary: "var(--content-tertiary)",
          disabled: "var(--content-disabled)",
        },
        // Semantic border tokens
        "border-semantic": {
          subtle: "var(--border-subtle)",
          default: "var(--border-default)",
          strong: "var(--border-strong)",
          accent: "var(--border-accent)",
        },
        // Interactive tokens
        interactive: {
          accent: "var(--interactive-accent)",
          "accent-hover": "var(--interactive-accent-hover)",
          "accent-light": "var(--interactive-accent-light)",
        },
        success: { 600: "#16A34A" },
        warning: { 600: "#D97706" },
        danger: { 600: "#DC2626" },
        info: { 600: "#0EA5E9" },
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        aurora: {
          from: { backgroundPosition: "50% 50%, 50% 50%" },
          to: { backgroundPosition: "350% 50%, 350% 50%" },
        },
        spotlight: {
          "0%": { opacity: "0", transform: "translate(-72%, -62%) scale(0.5)" },
          "100%": { opacity: "1", transform: "translate(-50%,-40%) scale(1)" },
        },
        shimmer: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "-200% 0" },
        },
        // New keyframes for Aceternity-style components
        sparkle: {
          "0%, 100%": { transform: "scale(0) rotate(0deg)", opacity: "0" },
          "50%": { transform: "scale(1) rotate(90deg)", opacity: "1" },
        },
        wave: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "lamp-beam": {
          "0%": { opacity: "0.5", transform: "scaleX(0.8)" },
          "100%": { opacity: "0.8", transform: "scaleX(1)" },
        },
        "slide-down": {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "enter-from-right": {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "enter-from-left": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        float: "float 6s ease-in-out infinite",
        "gradient-x": "gradient-x 8s ease infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        aurora: "aurora 60s linear infinite",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shimmer: "shimmer 2s linear infinite",
        sparkle: "sparkle 1.5s ease-in-out infinite",
        wave: "wave 6s linear infinite",
        "lamp-beam": "lamp-beam 2s ease-in-out infinite alternate",
        "slide-down": "slide-down 0.2s ease-out",
        "slide-up": "slide-up 0.2s ease-out",
        "enter-from-right": "enter-from-right 0.25s ease-out",
        "enter-from-left": "enter-from-left 0.25s ease-out",
        "scale-in": "scale-in 0.15s ease-out",
      },
      // Semantic shadow tokens
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        accent: "var(--shadow-accent)",
        "accent-lg": "0 16px 48px rgba(54, 101, 245, 0.30)",
      },
    },
  },
  plugins: [
    addVariablesForColors,
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
};

export default config;
