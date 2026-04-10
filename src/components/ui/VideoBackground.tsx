"use client";

import { useRef } from "react";
import Image from "next/image";
import { useInView } from "motion/react";

interface VideoBackgroundProps {
  src: string;
  poster?: string;
  overlay?: "dark" | "light" | "brand" | "none";
  className?: string;
  playsInline?: boolean;
}

export function VideoBackground({
  src,
  poster,
  overlay = "dark",
  className = "absolute inset-0",
  playsInline = true,
}: VideoBackgroundProps) {
  const ref = useRef<HTMLVideoElement>(null);
  // Only play when in view to save resources
  const isInView = useInView(ref, { once: false, margin: "200px" });

  return (
    <div className={`overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      {poster && (
        <Image
          src={poster}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      )}
      
      {isInView && (
        <video
          ref={ref}
          autoPlay
          muted
          loop
          playsInline={playsInline}
          poster={poster}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isInView ? "opacity-100" : "opacity-0"}`}
        >
          <source src={src} type="video/mp4" />
        </video>
      )}

      {/* Overlays adapt to theme */}
      {overlay === "dark" && (
        <div className="absolute inset-0 bg-brand-midnight/60 dark:bg-brand-midnight/80" />
      )}
      {overlay === "light" && (
        <div className="absolute inset-0 bg-brand-surface/60 dark:bg-brand-midnight/80" />
      )}
      {overlay === "brand" && (
        <div className="absolute inset-0 bg-brand-navy/70 dark:bg-brand-deep/80" />
      )}
      
      {/* Universal gradient for text readability */}
      {overlay !== "none" && (
        <div className="absolute inset-0 bg-gradient-to-t from-brand-midnight/80 via-transparent to-brand-midnight/30 dark:from-brand-midnight/90 dark:via-transparent dark:to-brand-midnight/50" />
      )}
    </div>
  );
}
