"use client";

import { useRef, useState } from "react";
import { useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

interface GlareCardProps {
  children: React.ReactNode;
  className?: string;
  glareColor?: string;
  maxTilt?: number;
}

export function GlareCard({
  children,
  className,
  glareColor = "rgba(54, 101, 245, 0.06)",
  maxTilt = 8,
}: GlareCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("none");
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [isHovering, setIsHovering] = useState(false);
  const shouldReduce = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduce || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = ((e.clientX - cx) / (rect.width / 2)) * maxTilt;
    const dy = (-(e.clientY - cy) / (rect.height / 2)) * maxTilt;
    const glareX = ((e.clientX - rect.left) / rect.width) * 100;
    const glareY = ((e.clientY - rect.top) / rect.height) * 100;
    setTransform(
      `perspective(800px) rotateX(${dy}deg) rotateY(${dx}deg)`
    );
    setGlarePos({ x: glareX, y: glareY });
  };

  const handleMouseLeave = () => {
    setTransform("none");
    setIsHovering(false);
  };

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      className={cn("relative transition-transform duration-200 ease-out will-change-transform", className)}
      style={{ transform: shouldReduce ? "none" : transform }}
    >
      {children}

      {/* Glare overlay */}
      {!shouldReduce && (
        <div
          className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-200"
          style={{
            opacity: isHovering ? 1 : 0,
            background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, ${glareColor} 0%, transparent 60%)`,
          }}
          aria-hidden="true"
        />
      )}
    </div>
  );
}
