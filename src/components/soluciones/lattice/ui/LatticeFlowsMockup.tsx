"use client";

import { LazyMotion, domAnimation } from "motion/react";
import {
  Workflow,
  Zap,
  Bot,
  GitBranch,
  MessageSquare,
  Mail,
  Plus,
  Minus,
  Maximize2,
  Play,
} from "lucide-react";

type NodeDef = {
  id: string;
  label: string;
  subtitle: string;
  Icon: typeof Zap;
  color: string;
  tint: string;
  tag?: string;
  x: number;
  y: number;
};

const NODES: NodeDef[] = [
  { id: "trigger", label: "Lead recibido", subtitle: "HubSpot · Webhook", Icon: Zap, color: "#006EFA", tint: "rgba(0,110,250,0.08)", tag: "Trigger", x: 6, y: 38 },
  { id: "agent", label: "Calificar lead", subtitle: "Lattice Séeb · IA", Icon: Bot, color: "#9333EA", tint: "rgba(147,51,234,0.08)", tag: "Agente IA", x: 38, y: 38 },
  { id: "branch", label: "¿Score > 70?", subtitle: "Condición", Icon: GitBranch, color: "#F59E0B", tint: "rgba(245,158,11,0.08)", x: 68, y: 38 },
  { id: "slack", label: "Notificar ventas", subtitle: "Slack · #ventas", Icon: MessageSquare, color: "#16A34A", tint: "rgba(22,163,74,0.08)", x: 68, y: 10 },
  { id: "email", label: "Secuencia nurturing", subtitle: "Mailchimp · 5 emails", Icon: Mail, color: "#6B7280", tint: "rgba(107,114,128,0.08)", x: 68, y: 68 },
];

export function LatticeFlowsMockup() {
  return (
    <LazyMotion features={domAnimation}>
      <div className="relative mx-auto flex h-[460px] w-full max-w-[1000px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_40px_-16px_rgba(15,23,42,0.18)] sm:h-[600px]">
        {/* Top bar */}
        <div className="flex h-10 shrink-0 items-center gap-3 border-b border-slate-200 bg-white px-4">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
          </div>
          <div className="ml-2 flex items-center gap-1.5 rounded bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">
            <Workflow className="h-3 w-3 text-[#0EA5E9]" />
            Lattice Flows
          </div>
        </div>

        {/* Flow header */}
        <div className="flex h-11 shrink-0 items-center justify-between border-b border-slate-200 bg-white px-4">
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-slate-500">Flujo</span>
            <span className="text-slate-300">/</span>
            <span className="text-[12px] font-semibold text-slate-900">Pipeline Ventas B2B</span>
            <span className="ml-1.5 inline-flex items-center gap-1 rounded-full bg-[#16A34A]/10 px-1.5 py-0.5 text-[9px] font-semibold text-[#15803D]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#16A34A]" />
              Activo
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <button className="rounded-md border border-slate-200 bg-white px-2 py-1 text-[11px] font-medium text-slate-600">
              Guardar
            </button>
            <button className="flex items-center gap-1 rounded-md bg-[#006EFA] px-2 py-1 text-[11px] font-semibold text-white">
              <Play className="h-3 w-3" />
              Probar
            </button>
          </div>
        </div>

        {/* Canvas */}
        <div className="relative flex-1 overflow-hidden bg-[#FAFBFC]">
          {/* Dot grid */}
          <svg aria-hidden="true" className="absolute inset-0 h-full w-full text-slate-900/[0.07]">
            <defs>
              <pattern id="flows-dots" width="18" height="18" patternUnits="userSpaceOnUse">
                <circle cx="1.5" cy="1.5" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#flows-dots)" />
          </svg>

          {/* Connections */}
          <svg aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <marker id="arr" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="4" markerHeight="4" orient="auto">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#CBD5E1" />
              </marker>
            </defs>
            {/* trigger → agent */}
            <path d="M 19 46 C 28 46, 28 46, 38 46" stroke="#CBD5E1" strokeWidth="0.6" fill="none" markerEnd="url(#arr)" vectorEffect="non-scaling-stroke" />
            {/* agent → branch */}
            <path d="M 56 46 C 62 46, 62 46, 68 46" stroke="#CBD5E1" strokeWidth="0.6" fill="none" markerEnd="url(#arr)" vectorEffect="non-scaling-stroke" />
            {/* branch → slack (top) */}
            <path d="M 77 42 C 80 28, 80 22, 80 18" stroke="#16A34A" strokeWidth="0.6" fill="none" markerEnd="url(#arr)" vectorEffect="non-scaling-stroke" opacity="0.5" />
            {/* branch → email (bottom) */}
            <path d="M 77 52 C 80 64, 80 72, 80 76" stroke="#94A3B8" strokeWidth="0.6" fill="none" markerEnd="url(#arr)" vectorEffect="non-scaling-stroke" strokeDasharray="2 2" />
          </svg>

          {/* Branch labels */}
          <span className="absolute left-[81%] top-[26%] rounded bg-white px-1 text-[9px] font-semibold text-[#16A34A] ring-1 ring-[#16A34A]/20">
            &gt; 70
          </span>
          <span className="absolute left-[81%] top-[60%] rounded bg-white px-1 text-[9px] font-semibold text-slate-500 ring-1 ring-slate-200">
            ≤ 70
          </span>

          {/* Nodes */}
          {NODES.map((n) => {
            const isAgent = n.id === "agent";
            return (
              <div
                key={n.id}
                className={`absolute flex w-[140px] items-center gap-2 rounded-lg border border-slate-200 bg-white p-2 shadow-sm ${
                  isAgent ? "ring-2 ring-[#9333EA]/25" : ""
                }`}
                style={{ left: `${n.x}%`, top: `${n.y}%`, borderLeftWidth: "3px", borderLeftColor: n.color }}
              >
                <div
                  className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md"
                  style={{ background: n.tint, color: n.color }}
                >
                  <n.Icon className="h-3.5 w-3.5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-[11px] font-semibold text-slate-900">{n.label}</div>
                  <div className="truncate text-[9.5px] text-slate-500">{n.subtitle}</div>
                </div>
                {n.tag && (
                  <span
                    className="absolute -top-2 right-1.5 rounded px-1 py-0.5 text-[8px] font-bold uppercase tracking-wider"
                    style={{ background: n.tint, color: n.color }}
                  >
                    {n.tag}
                  </span>
                )}
              </div>
            );
          })}

          {/* Zoom controls */}
          <div className="absolute bottom-3 left-3 flex items-center gap-0.5 rounded-lg border border-slate-200 bg-white p-0.5 shadow-sm">
            <button aria-label="Acercar" className="flex h-5 w-5 items-center justify-center rounded text-slate-500">
              <Plus className="h-3 w-3" />
            </button>
            <button aria-label="Alejar" className="flex h-5 w-5 items-center justify-center rounded text-slate-500">
              <Minus className="h-3 w-3" />
            </button>
            <button aria-label="Ajustar" className="flex h-5 w-5 items-center justify-center rounded text-slate-500">
              <Maximize2 className="h-3 w-3" />
            </button>
          </div>

          {/* Legend */}
          <div className="absolute bottom-3 right-3 flex items-center gap-2.5 rounded-lg border border-slate-200 bg-white/90 px-2.5 py-1.5 shadow-sm backdrop-blur-sm">
            <div className="flex items-center gap-1 text-[10px] text-slate-600">
              <span className="h-2 w-2 rounded-sm bg-[#006EFA]" />
              Trigger
            </div>
            <div className="flex items-center gap-1 text-[10px] text-slate-600">
              <span className="h-2 w-2 rounded-sm bg-[#9333EA]" />
              Agente IA
            </div>
            <div className="flex items-center gap-1 text-[10px] text-slate-600">
              <span className="h-2 w-2 rounded-sm bg-[#F59E0B]" />
              Lógica
            </div>
            <div className="flex items-center gap-1 text-[10px] text-slate-600">
              <span className="h-2 w-2 rounded-sm bg-[#16A34A]" />
              Acción
            </div>
          </div>
        </div>
      </div>
    </LazyMotion>
  );
}
