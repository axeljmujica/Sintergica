"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface WavyBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  colors?: string[];
}

export function WavyBackground({
  children,
  className,
  containerClassName,
  waveWidth = 50,
  backgroundFill = "transparent",
  blur = 10,
  speed = "slow",
  waveOpacity = 0.05,
  colors = ["#3665f5", "#53abe6", "#3665f5"],
}: WavyBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    if (shouldReduce) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let t = 0;
    const speedVal = speed === "fast" ? 0.025 : 0.012;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const drawWave = (color: string, amplitude: number, offset: number) => {
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth = waveWidth;
      ctx.globalAlpha = waveOpacity;
      for (let x = 0; x <= canvas.width + waveWidth; x += 5) {
        const y =
          canvas.height / 2 +
          amplitude * Math.sin((x / canvas.width) * Math.PI * 4 + t + offset);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (backgroundFill !== "transparent") {
        ctx.fillStyle = backgroundFill;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      drawWave(colors[0], canvas.height * 0.08, 0);
      drawWave(colors[1], canvas.height * 0.06, Math.PI * 0.5);
      drawWave(colors[2], canvas.height * 0.04, Math.PI);

      t += speedVal;
      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      ro.disconnect();
    };
  }, [shouldReduce, speed, waveWidth, waveOpacity, backgroundFill, colors]);

  if (shouldReduce) {
    return (
      <div className={cn("relative overflow-hidden", containerClassName)}>
        <div className="pointer-events-none absolute inset-0">
          <svg width="100%" height="100%" viewBox="0 0 1440 200" preserveAspectRatio="none" className="opacity-10">
            <path
              d="M0,100 C360,150 720,50 1080,100 C1260,125 1350,75 1440,100"
              stroke={colors[0]}
              strokeWidth={waveWidth}
              fill="none"
            />
          </svg>
        </div>
        <div className={cn("relative z-10", className)}>{children}</div>
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 w-full h-full"
        style={{ filter: `blur(${blur}px)` }}
        aria-hidden="true"
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
}
