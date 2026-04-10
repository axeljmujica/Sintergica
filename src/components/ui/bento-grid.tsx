"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
}

interface BentoGridItemProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  header?: React.ReactNode;
  className?: string;
  href?: string;
  delay?: number;
}

export function BentoGridItem({
  title,
  description,
  icon,
  header,
  className,
  href,
  delay = 0,
}: BentoGridItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduce = useReducedMotion();

  const Wrapper = href ? Link : "div";

  return (
    <m.div
      ref={ref}
      initial={shouldReduce ? false : { opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn("group relative", className)}
    >
      <Wrapper
        href={href ?? "#"}
        className={cn(
          "flex h-full flex-col overflow-hidden rounded-2xl border border-brand-midnight/[0.07] bg-brand-white transition-all duration-300 dark:border-brand-white/[0.07] dark:bg-brand-navy",
          "hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-accent/5 hover:border-brand-accent/20",
          href && "cursor-pointer"
        )}
      >
        {/* Visual header area */}
        {header && (
          <div className="relative h-40 w-full overflow-hidden bg-brand-surface dark:bg-brand-deep">
            {header}
            {/* Gradient fade to card body */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-brand-white dark:from-brand-navy" />
          </div>
        )}

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          {/* Icon */}
          {icon && (
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent/10 text-brand-accent dark:bg-brand-accent/15">
              {icon}
            </div>
          )}

          <h3 className="font-proxima text-lg font-semibold text-brand-midnight dark:text-brand-white">
            {title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-midnight/60 dark:text-brand-white/60">
            {description}
          </p>

          {href && (
            <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-brand-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100">
              Ver más <ArrowRight className="h-3 w-3 translate-x-0 transition-transform group-hover:translate-x-1" />
            </div>
          )}
        </div>

        {/* Spotlight glow on hover */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: "radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(54,101,245,0.04) 0%, transparent 60%)",
          }}
        />
      </Wrapper>
    </m.div>
  );
}
