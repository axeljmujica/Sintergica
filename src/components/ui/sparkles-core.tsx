"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  life: number;
  maxLife: number;
}

interface SparklesCoreProps {
  id?: string;
  background?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  particleColor?: string;
  className?: string;
  particleDensity?: number;
}

export function SparklesCore({
  id = "sparkles",
  background = "transparent",
  minSize = 0.6,
  maxSize = 1.4,
  speed = 1,
  particleColor = "#3665f5",
  className,
  particleDensity = 50,
}: SparklesCoreProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>(0);
  const particlesRef = useRef<Particle[]>([]);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    if (shouldReduce) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const colors = [particleColor, "#53abe6", "#6b8ff7"];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const createParticle = (): Particle => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * speed * 0.3,
      vy: (Math.random() - 0.5) * speed * 0.3 - speed * 0.1,
      size: minSize + Math.random() * (maxSize - minSize),
      opacity: 0,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 0,
      maxLife: 80 + Math.random() * 80,
    });

    // Initialize particles
    particlesRef.current = Array.from({ length: particleDensity }, createParticle);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p, i) => {
        p.life++;
        p.x += p.vx;
        p.y += p.vy;

        // Fade in then out
        const t = p.life / p.maxLife;
        p.opacity = t < 0.3 ? t / 0.3 : t > 0.7 ? (1 - t) / 0.3 : 1;

        ctx.save();
        ctx.globalAlpha = p.opacity * 0.8;
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = p.size * 3;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Respawn
        if (p.life >= p.maxLife) {
          particlesRef.current[i] = createParticle();
        }
      });

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      ro.disconnect();
    };
  }, [shouldReduce, particleColor, minSize, maxSize, speed, particleDensity]);

  if (shouldReduce) {
    // Static fallback: CSS dot pattern
    return (
      <div
        id={id}
        className={cn("absolute inset-0 pointer-events-none", className)}
        style={{ background }}
      >
        <div className="absolute inset-0 dot-grid opacity-30" />
      </div>
    );
  }

  return (
    <canvas
      id={id}
      ref={canvasRef}
      className={cn("absolute inset-0 pointer-events-none w-full h-full", className)}
      style={{ background }}
    />
  );
}
