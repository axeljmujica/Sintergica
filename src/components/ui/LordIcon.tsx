"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import lordicon to avoid SSR issues
const Player = dynamic(
  () => import("@lordicon/react").then((mod) => ({ default: mod.Player })),
  { ssr: false }
);

interface LordIconProps {
  src: string; // The URL to the json file
  trigger?: "hover" | "click" | "loop" | "in";
  colors?: { primary?: string; secondary?: string; tertiary?: string };
  size?: number;
  className?: string;
}

export function LordIcon({
  src,
  trigger = "hover",
  colors,
  size = 32,
  className = "",
}: LordIconProps) {
  const [iconData, setIconData] = useState<unknown>();

  useEffect(() => {
    fetch(src)
      .then((res) => res.json())
      .then(setIconData)
      .catch((err) => console.error("Error loading lordicon data:", err));
  }, [src]);

  if (!iconData) {
    return <div style={{ width: size, height: size }} className={className} />;
  }

  // Construct color string, default to primary brand colors if none provided
  const primaryColor = colors?.primary || "#006efa"; // brand-accent
  const secondaryColor = colors?.secondary || "#0A1628"; // brand-midnight
  const tertiaryColor = colors?.tertiary || "#b4e0f7"; // light-blue

  return (
    <div
      style={{ width: size, height: size }}
      className={`relative inline-flex items-center justify-center ${className}`}
      onMouseEnter={(e) => {
        // Find player instance and play
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const playerRef = (e.currentTarget.firstChild as any)?.player;
        if (playerRef && trigger === "hover") {
          playerRef.playFromBeginning();
        }
      }}
    >
      <Player
        icon={iconData}
        size={size}
        colorize={`primary:${primaryColor},secondary:${secondaryColor},tertiary:${tertiaryColor}`}
        state={trigger === "in" ? "in-reveal" : undefined}
      />
    </div>
  );
}
