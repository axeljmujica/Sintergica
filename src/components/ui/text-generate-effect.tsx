"use client";
import { useEffect, useRef } from "react";
import {
  m,
  stagger,
  useAnimate,
  useInView,
  useReducedMotion,
} from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
  triggerOnView = false,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
  /** When true the animation starts when the element enters the viewport */
  triggerOnView?: boolean;
}) => {
  const shouldReduce = useReducedMotion();
  const [scope, animate] = useAnimate();
  const sentinelRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sentinelRef, { once: true, margin: "-60px" });
  const hasAnimated = useRef(false);
  const wordsArray = words.split(" ");

  const shouldStart = triggerOnView ? isInView : true;

  useEffect(() => {
    if (!shouldStart || hasAnimated.current) return;
    hasAnimated.current = true;

    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: shouldReduce ? 0 : duration,
        delay: shouldReduce ? 0 : stagger(0.08),
      }
    );
  }, [shouldStart, scope, animate, filter, duration, shouldReduce]);

  const renderWords = () => {
    return (
      <m.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <m.span
              key={word + idx}
              className={shouldReduce ? "opacity-100" : "opacity-0"}
              style={{
                filter:
                  shouldReduce ? "none" : filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </m.span>
          );
        })}
      </m.div>
    );
  };

  return (
    <div ref={sentinelRef} className={cn(className)}>
      <div className="leading-snug tracking-wide">{renderWords()}</div>
    </div>
  );
};
