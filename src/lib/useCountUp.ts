"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

interface UseCountUpOptions {
  end: number;
  duration?: number;
  delay?: number;
  decimals?: number;
}

export function useCountUp({ end, duration = 2000, delay = 0, decimals = 0 }: UseCountUpOptions) {
  const shouldReduce = useReducedMotion();
  const [count, setCount] = useState(() => (shouldReduce ? end : 0));
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const hasRun = useRef(false);

  useEffect(() => {
    if (!isInView || hasRun.current || shouldReduce) return;
    hasRun.current = true;

    const startTime = performance.now() + delay;
    let rafId: number;

    const tick = (now: number) => {
      if (now < startTime) {
        rafId = requestAnimationFrame(tick);
        return;
      }
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out quad
      const eased = 1 - (1 - progress) * (1 - progress);
      const current = eased * end;
      setCount(Number(current.toFixed(decimals)));

      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isInView, shouldReduce, end, duration, delay, decimals]);

  return { count, ref };
}
