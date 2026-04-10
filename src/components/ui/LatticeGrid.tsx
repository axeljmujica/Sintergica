"use client";

import { LazyMotion, domAnimation, m } from "motion/react";

const NODES = [
  { cx: 80, cy: 60 },
  { cx: 200, cy: 40 },
  { cx: 320, cy: 80 },
  { cx: 440, cy: 30 },
  { cx: 140, cy: 160 },
  { cx: 260, cy: 140 },
  { cx: 380, cy: 170 },
  { cx: 500, cy: 120 },
  { cx: 60, cy: 260 },
  { cx: 180, cy: 280 },
  { cx: 300, cy: 240 },
  { cx: 420, cy: 270 },
  { cx: 520, cy: 230 },
  { cx: 100, cy: 360 },
  { cx: 240, cy: 340 },
  { cx: 360, cy: 380 },
  { cx: 480, cy: 350 },
  { cx: 160, cy: 440 },
  { cx: 300, cy: 460 },
  { cx: 440, cy: 430 },
];

const EDGES = [
  [0, 1], [1, 2], [2, 3], [0, 4], [1, 5], [2, 6], [3, 7],
  [4, 5], [5, 6], [6, 7], [4, 8], [5, 9], [5, 10], [6, 11],
  [7, 12], [8, 9], [9, 10], [10, 11], [11, 12], [8, 13],
  [9, 14], [10, 14], [11, 15], [12, 16], [13, 14], [14, 15],
  [15, 16], [13, 17], [14, 18], [15, 18], [16, 19], [17, 18], [18, 19],
];

export function LatticeGrid({ className = "" }: { className?: string }) {
  return (
    <LazyMotion features={domAnimation}>
    <svg
      viewBox="0 0 560 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Edges */}
      {EDGES.map(([a, b], i) => (
        <m.line
          key={`e-${i}`}
          x1={NODES[a].cx}
          y1={NODES[a].cy}
          x2={NODES[b].cx}
          y2={NODES[b].cy}
          stroke="currentColor"
          strokeWidth={1}
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.15 }}
          transition={{
            pathLength: { duration: 1.2, delay: 0.3 + i * 0.04, ease: "easeOut" },
            opacity: { duration: 0.6, delay: 0.3 + i * 0.04 },
          }}
        />
      ))}

      {/* Animated pulse edges (accent-colored, loop) */}
      {[
        [1, 5], [5, 10], [10, 14], [14, 18],
        [3, 7], [7, 12], [12, 16], [16, 19],
      ].map(([a, b], i) => (
        <m.line
          key={`pe-${i}`}
          x1={NODES[a].cx}
          y1={NODES[a].cy}
          x2={NODES[b].cx}
          y2={NODES[b].cy}
          stroke="#3665f5"
          strokeWidth={1.5}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.5, 0] }}
          transition={{
            duration: 3,
            delay: 1.5 + i * 0.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Nodes */}
      {NODES.map((node, i) => (
        <m.circle
          key={`n-${i}`}
          cx={node.cx}
          cy={node.cy}
          r={3}
          fill="currentColor"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{
            duration: 0.4,
            delay: 0.5 + i * 0.04,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Accent pulse nodes */}
      {[1, 5, 10, 14, 18, 7, 12].map((idx, i) => (
        <m.circle
          key={`pn-${i}`}
          cx={NODES[idx].cx}
          cy={NODES[idx].cy}
          r={5}
          fill="#3665f5"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [1, 1.8, 1],
            opacity: [0.6, 0, 0.6],
          }}
          transition={{
            duration: 3,
            delay: 2 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
    </LazyMotion>
  );
}
