"use client";

import { useReducedMotion } from "motion/react";
import { useCountUp } from "@/lib/useCountUp";
import { cn } from "@/lib/utils";

interface NumberTickerProps {
  value: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
  delay?: number;
}

export function NumberTicker({
  value,
  suffix = "",
  prefix = "",
  className,
  duration = 2000,
  delay = 0,
}: NumberTickerProps) {
  const shouldReduce = useReducedMotion();
  const { count, ref } = useCountUp({
    end: value,
    duration: shouldReduce ? 0 : duration,
    delay,
  });

  return (
    <span ref={ref as React.Ref<HTMLSpanElement>} className={cn("tabular-nums", className)}>
      {prefix}
      {count}
      {suffix}
    </span>
  );
}
