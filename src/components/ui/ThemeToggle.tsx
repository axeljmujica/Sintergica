"use client";

import { useTheme } from "next-themes";
import { useSyncExternalStore, useId } from "react";
import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";

const emptySubscribe = () => () => {};

interface ThemeToggleProps {
  scrolled?: boolean;
}

export function ThemeToggle({ scrolled = false }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const shouldReduce = useReducedMotion();
  const maskId = useId();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  if (!mounted) {
    return <div className="h-8 w-8 rounded-full" aria-hidden="true" />;
  }

  const isDark = theme === "dark";
  const t = shouldReduce
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 200, damping: 20 };

  const iconColor = scrolled
    ? "text-brand-midnight/60 dark:text-brand-white/70"
    : "text-brand-midnight/70 dark:text-brand-white/70";

  return (
    <LazyMotion features={domAnimation}>
    <button
      type="button"
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`relative flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-brand-accent/10 ${iconColor}`}
    >
      <m.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        className="h-[18px] w-[18px]"
        style={{ overflow: "visible" }}
      >
        <defs>
          <mask id={maskId}>
            <rect x="0" y="0" width="24" height="24" fill="white" />
            <m.circle
              initial={false}
              animate={{ cx: isDark ? 17 : 28, cy: isDark ? 7 : 2 }}
              transition={t}
              r="6"
              fill="black"
            />
          </mask>
        </defs>

        {/* Sun body → Moon body (mask creates crescent) */}
        <m.circle
          cx="12"
          cy="12"
          initial={false}
          animate={{ r: isDark ? 8 : 5 }}
          transition={t}
          mask={`url(#${maskId})`}
          fill="currentColor"
        />

        {/* Sun rays — scale out in dark mode */}
        <m.g
          initial={false}
          animate={{
            opacity: isDark ? 0 : 1,
            rotate: isDark ? 0 : 45,
            scale: isDark ? 0 : 1,
          }}
          transition={t}
          style={{ transformOrigin: "center" }}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </m.g>
      </m.svg>
    </button>
    </LazyMotion>
  );
}
