"use client";

import { useEffect, useState } from "react";
import { LazyMotion, domAnimation, m, AnimatePresence, useReducedMotion } from "motion/react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

interface FloatingNavItem {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

interface FloatingNavProps {
  items: FloatingNavItem[];
  className?: string;
  showAfter?: number; // px scroll before appearing
}

export function FloatingNav({
  items,
  className,
  showAfter = 200,
}: FloatingNavProps) {
  const [visible, setVisible] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const pathname = usePathname();
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > showAfter);

      // Detect active section
      const sections = items.map((item) => item.href.replace(/.*#/, "#"));
      for (const hash of [...sections].reverse()) {
        const el = document.querySelector(hash);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveHash(hash);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [items, showAfter]);

  // Don't render on home page
  if (pathname === "/" || pathname.match(/^\/[a-z]{2}(-[a-z]{2})?\/?(#.*)?$/)) return null;

  return (
    <LazyMotion features={domAnimation}>
      <AnimatePresence>
        {visible && (
          <m.nav
            initial={shouldReduce ? false : { y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            aria-label="Navegación rápida de secciones"
            className={cn(
              "fixed bottom-8 left-1/2 z-50 -translate-x-1/2",
              "flex items-center gap-1 rounded-full px-3 py-2",
              "border border-brand-midnight/10 dark:border-brand-white/10",
              "bg-brand-white/80 dark:bg-brand-navy/80",
              "backdrop-blur-md",
              "shadow-md",
              className
            )}
          >
            {items.map((item) => {
              const hash = item.href.includes("#")
                ? "#" + item.href.split("#")[1]
                : item.href;
              const isActive = activeHash === hash;
              const Icon = item.icon;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-label={item.label}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.querySelector(hash);
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={cn(
                    "group relative flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium transition-all duration-200",
                    isActive
                      ? "bg-brand-accent text-white"
                      : "text-brand-midnight/60 hover:bg-brand-midnight/5 hover:text-brand-midnight dark:text-brand-white/60 dark:hover:bg-brand-white/5 dark:hover:text-brand-white"
                  )}
                >
                  {Icon && (
                    <Icon className={cn("h-3.5 w-3.5 shrink-0", isActive ? "text-white" : "")} />
                  )}
                  <span className="hidden sm:inline">{item.label}</span>
                </a>
              );
            })}
          </m.nav>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}
