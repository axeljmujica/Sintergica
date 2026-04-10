"use client";

import { useState, useEffect, useCallback } from "react";
import { LazyMotion, domAnimation, m, AnimatePresence, useReducedMotion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  company: string;
  image?: string;
}

interface AnimatedTestimonialsProps {
  testimonials: TestimonialItem[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
}

export function AnimatedTestimonials({
  testimonials,
  autoPlay = false,
  interval = 5000,
  className,
}: AnimatedTestimonialsProps) {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const shouldReduce = useReducedMotion();

  const go = useCallback(
    (dir: "left" | "right") => {
      setDirection(dir);
      setActive((prev) =>
        dir === "right"
          ? (prev + 1) % testimonials.length
          : (prev - 1 + testimonials.length) % testimonials.length
      );
    },
    [testimonials.length]
  );

  useEffect(() => {
    if (!autoPlay || testimonials.length <= 1) return;
    const id = setInterval(() => go("right"), interval);
    return () => clearInterval(id);
  }, [autoPlay, interval, go, testimonials.length]);

  const variants = {
    enter: (d: "left" | "right") => ({
      x: d === "right" ? 40 : -40,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (d: "left" | "right") => ({
      x: d === "right" ? -40 : 40,
      opacity: 0,
    }),
  };

  const current = testimonials[active];
  const initials = current.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <LazyMotion features={domAnimation}>
      <div className={cn("relative w-full", className)}>
        {/* Stacked card visual */}
        <div className="relative h-full">
          {/* Background cards */}
          {testimonials.length > 1 &&
            [-2, -1].map((offset) => {
              const idx =
                (active + testimonials.length + offset) % testimonials.length;
              return (
                <div
                  key={idx}
                  className="absolute inset-x-0 rounded-2xl border border-brand-midnight/[0.06] bg-brand-white dark:border-brand-white/[0.06] dark:bg-brand-navy"
                  style={{
                    bottom: `${(offset + 3) * 6}px`,
                    left: `${-(offset + 3) * 8}px`,
                    right: `${-(offset + 3) * 8}px`,
                    opacity: 0.15 + (offset + 3) * 0.15,
                    transform: `scale(${0.92 + (offset + 3) * 0.03})`,
                  }}
                />
              );
            })}

          {/* Active card */}
          <AnimatePresence custom={direction} mode="wait">
            <m.div
              key={active}
              custom={direction}
              variants={shouldReduce ? {} : variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl border border-brand-midnight/[0.08] bg-brand-white p-8 shadow-md dark:border-brand-white/[0.08] dark:bg-brand-navy"
            >
              {/* Quote marks */}
              <div className="mb-4 text-4xl font-serif leading-none text-brand-accent/30">&ldquo;</div>

              <p className="text-base leading-relaxed text-brand-midnight/85 dark:text-brand-white/85 md:text-lg">
                {current.quote}
              </p>

              <div className="mt-6 flex items-center gap-4">
                {/* Avatar */}
                {current.image ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={current.image}
                    alt={current.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent/10 text-sm font-bold text-brand-accent dark:bg-brand-accent/20">
                    {initials}
                  </div>
                )}
                <div>
                  <p className="font-semibold text-brand-midnight dark:text-brand-white">
                    {current.name}
                  </p>
                  <p className="text-sm text-brand-midnight/55 dark:text-brand-white/55">
                    {current.role} · {current.company}
                  </p>
                </div>
              </div>
            </m.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        {testimonials.length > 1 && (
          <div className="mt-6 flex items-center justify-between">
            {/* Dots */}
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => {
                    setDirection(i > active ? "right" : "left");
                    setActive(i);
                  }}
                  aria-label={`Testimonio ${i + 1}`}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300",
                    i === active
                      ? "w-8 bg-brand-accent"
                      : "w-1.5 bg-brand-midnight/20 hover:bg-brand-midnight/40 dark:bg-brand-white/20 dark:hover:bg-brand-white/40"
                  )}
                />
              ))}
            </div>

            {/* Arrow buttons */}
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => go("left")}
                aria-label="Anterior testimonio"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-midnight/10 text-brand-midnight/50 transition-colors hover:border-brand-accent hover:text-brand-accent dark:border-brand-white/10 dark:text-brand-white/50 dark:hover:border-brand-accent dark:hover:text-brand-accent"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => go("right")}
                aria-label="Siguiente testimonio"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-midnight/10 text-brand-midnight/50 transition-colors hover:border-brand-accent hover:text-brand-accent dark:border-brand-white/10 dark:text-brand-white/50 dark:hover:border-brand-accent dark:hover:text-brand-accent"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </LazyMotion>
  );
}
