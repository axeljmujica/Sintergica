"use client";

import { useRef } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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
    "brand-accent": "border-brand-accent/40 bg-brand-accent/15 text-brand-accent-light",
    "success-600": "border-emerald-400/40 bg-emerald-500/15 text-emerald-300",
    "warning-600": "border-amber-400/40 bg-amber-500/15 text-amber-300",
    "purple-600": "border-purple-400/40 bg-purple-500/15 text-purple-200",
    "sky-600": "border-sky-400/40 bg-sky-500/15 text-sky-200",
  };

  const badgeDotMap: Record<string, string> = {
    "brand-accent": "bg-brand-accent",
    "success-600": "bg-emerald-400",
    "warning-600": "bg-amber-400",
    "purple-600": "bg-purple-300",
    "sky-600": "bg-sky-300",
  };

  const badgeClasses = badgeColorMap[badgeColor] ?? badgeColorMap["brand-accent"];
  const dotClass = badgeDotMap[badgeColor] ?? badgeDotMap["brand-accent"];

  return (
    <LazyMotion features={domAnimation}>
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#0A0F1C] px-6 pb-16 pt-28">
      {/* Background: video, image, or gradient */}
      {bgVideo ? (
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <VideoBackground
            src={bgVideo}
            poster={bgVideoPoster || bgImage}
            overlay="dark"
            className="absolute inset-0 opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C]/90 via-[#0A0F1C]/75 to-[#0A0F1C]" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(10,15,28,0.85) 0%, rgba(10,15,28,0.55) 40%, transparent 75%)",
            }}
          />
        </div>
      ) : bgImage ? (
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <Image
            src={bgImage}
            alt={bgImageAlt}
            fill
            priority
            className="object-cover object-center opacity-35"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0F1C]/90 via-[#0A0F1C]/75 to-[#0A0F1C]" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(10,15,28,0.85) 0%, rgba(10,15,28,0.55) 40%, transparent 75%)",
            }}
          />
        </div>
      ) : null}

      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
          }}
        />
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-accent/[0.10] blur-[120px]" />
        <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-[150px]" />
      </div>

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
            "inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-mulish font-medium uppercase tracking-widest backdrop-blur-sm",
            badgeClasses
          )}
        >
          <span className="relative flex h-2 w-2">
            {!shouldReduce && (
              <span className={cn("absolute inline-flex h-full w-full animate-ping rounded-full opacity-75", dotClass)} />
            )}
            <span className={cn("relative inline-flex h-2 w-2 rounded-full", dotClass)} />
          </span>
          {badge}
        </m.span>

        <m.h1
          {...anim(0.1)}
          className="mt-6 font-proxima text-4xl font-extrabold leading-tight tracking-tight text-brand-white sm:text-5xl md:text-6xl lg:text-[4rem] text-balance [text-shadow:0_2px_20px_rgba(10,15,28,0.8)]"
        >
          {title}
        </m.h1>

        <m.p
          {...anim(0.2)}
          className={cn(
            "mt-6 text-lg md:text-xl text-brand-white max-w-2xl [text-shadow:0_2px_12px_rgba(10,15,28,0.9)]",
            centered && "mx-auto"
          )}
        >
          {subtitle}
        </m.p>

        {(ctaLabel || ctaSecondaryLabel) && (
          <m.div
            {...anim(0.3)}
            className={cn(
              "mt-10 flex flex-col gap-4 sm:flex-row",
              centered && "justify-center"
            )}
          >
            {ctaLabel && ctaHref && (
              <Link
                href={ctaHref}
                target={ctaHref.startsWith('http') ? "_blank" : undefined}
                rel={ctaHref.startsWith('http') ? "noopener noreferrer" : undefined}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-accent px-8 py-3.5 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-accent/30"
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
                className="inline-flex items-center justify-center rounded-full border border-brand-white/20 px-8 py-3.5 font-semibold text-brand-white transition-colors hover:bg-brand-white/[0.05]"
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
                "mt-10 flex flex-wrap gap-x-6 gap-y-3",
                centered && "justify-center"
              )}
            >
              {trustSignals.map((s) => (
                <span
                  key={s}
                  className="flex items-center gap-2 text-sm text-brand-white [text-shadow:0_2px_8px_rgba(10,15,28,0.9)]"
                >
                  <CheckCircle2 className="h-4 w-4 text-brand-accent-light" />
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
