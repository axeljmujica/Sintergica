"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { VideoBackground } from "@/components/ui/VideoBackground";

interface PageHeroProps {
  badge: string;
  badgeColor?: string;
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaSecondaryLabel?: string;
  ctaSecondaryHref?: string;
  centered?: boolean;
  bgImage?: string;
  bgImageAlt?: string;
  bgVideo?: string;
  bgVideoPoster?: string;
  trustSignals?: string[];
}

export function PageHero({
  badge,
  badgeColor = "brand-accent",
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  ctaSecondaryLabel,
  ctaSecondaryHref,
  centered = true,
  bgImage,
  bgImageAlt = "",
  bgVideo,
  bgVideoPoster,
  trustSignals,
}: PageHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const shouldReduce = useReducedMotion();

  const anim = (delay: number) =>
    shouldReduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: isInView ? { opacity: 1, y: 0 } : {},
          transition: { duration: 0.5, delay },
        };

  const badgeColorMap: Record<string, string> = {
    "brand-accent": "border-brand-accent/20 bg-brand-accent/10 text-brand-accent",
    "success-600": "border-success-600/20 bg-success-600/10 text-success-600",
    "warning-600": "border-warning-600/20 bg-warning-600/10 text-warning-600",
    "purple-600": "border-purple-500/20 bg-purple-500/10 text-purple-400",
    "sky-600": "border-sky-500/20 bg-sky-500/10 text-sky-400",
  };

  const badgeClasses = badgeColorMap[badgeColor] ?? badgeColorMap["brand-accent"];

  return (
    <LazyMotion features={domAnimation}>
    <section className="relative overflow-hidden bg-brand-surface dark:bg-brand-midnight pt-32 pb-24 px-6">
      {/* Background: video, image, or gradient */}
      {bgVideo ? (
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <VideoBackground
            src={bgVideo}
            poster={bgVideoPoster || bgImage}
            overlay="dark"
            className="absolute inset-0 opacity-40 dark:opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-brand-surface/70 to-brand-surface/40 dark:from-brand-midnight dark:via-brand-midnight/70 dark:to-brand-midnight/40" />
        </div>
      ) : bgImage ? (
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Image
            src={bgImage}
            alt={bgImageAlt}
            fill
            priority
            placeholder="blur"
            blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iOSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iOSIgZmlsbD0iIzA0MDYxNSIvPjwvc3ZnPg=="
            className="object-cover object-center opacity-20"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-brand-surface/70 to-brand-surface/40 dark:from-brand-midnight dark:via-brand-midnight/70 dark:to-brand-midnight/40" />
        </div>
      ) : (
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-brand-accent/5 blur-3xl" />
          <div className="absolute -bottom-40 -right-40 h-[400px] w-[400px] rounded-full bg-brand-accent-light/5 blur-3xl" />
        </div>
      )}

      <div
        ref={ref}
        className={cn(
          "relative mx-auto max-w-4xl",
          centered && "text-center"
        )}
      >
        <m.span
          {...anim(0)}
          className={cn(
            "inline-flex items-center rounded-full border px-4 py-1.5 text-xs font-mulish font-medium uppercase tracking-widest",
            badgeClasses
          )}
        >
          {badge}
        </m.span>

        <m.h1
          {...anim(0.1)}
          className="font-proxima text-4xl font-extrabold leading-tight tracking-tight text-brand-midnight dark:text-brand-white sm:text-5xl md:text-6xl lg:text-[4rem] text-balance"
        >
          {title}
        </m.h1>

        <m.p
          {...anim(0.2)}
          className={cn(
            "mt-4 text-lg md:text-xl text-brand-midnight/70 dark:text-brand-white/70 max-w-2xl",
            centered && "mx-auto"
          )}
        >
          {subtitle}
        </m.p>

        {(ctaLabel || ctaSecondaryLabel) && (
          <m.div
            {...anim(0.3)}
            className={cn(
              "mt-8 flex flex-col gap-4 sm:flex-row",
              centered && "justify-center"
            )}
          >
            {ctaLabel && ctaHref && (
              <Link
                href={ctaHref}
                target={ctaHref.startsWith('http') ? "_blank" : undefined}
                rel={ctaHref.startsWith('http') ? "noopener noreferrer" : undefined}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-accent px-8 py-3.5 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-accent/25"
              >
                {ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
            {ctaSecondaryLabel && ctaSecondaryHref && (
              <Link
                href={ctaSecondaryHref}
                target={ctaSecondaryHref.startsWith('http') ? "_blank" : undefined}
                rel={ctaSecondaryHref.startsWith('http') ? "noopener noreferrer" : undefined}
                className="inline-flex items-center justify-center rounded-full border border-brand-midnight/15 dark:border-brand-white/15 px-8 py-3.5 font-semibold text-brand-midnight dark:text-brand-white transition-colors hover:bg-brand-midnight/[0.03] dark:hover:bg-brand-white/[0.05]"
              >
                {ctaSecondaryLabel}
              </Link>
            )}
          </m.div>
        )}
          {trustSignals && trustSignals.length > 0 && (
            <m.div
              {...anim(0.4)}
              className={cn(
                "mt-6 flex flex-wrap gap-4",
                centered && "justify-center"
              )}
            >
              {trustSignals.map((s) => (
                <span
                  key={s}
                  className="flex items-center gap-1.5 text-xs text-brand-midnight/50 dark:text-brand-white/45"
                >
                  <span className="h-1 w-1 rounded-full bg-brand-accent" />
                  {s}
                </span>
              ))}
            </m.div>
          )}
      </div>
    </section>
    </LazyMotion>
  );
}
