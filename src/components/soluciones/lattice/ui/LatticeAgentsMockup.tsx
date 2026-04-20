"use client";

import { LazyMotion, domAnimation } from "motion/react";
import { Bot, Search, Sparkles, TrendingUp, FileText, Radar } from "lucide-react";

type Status = "running" | "queued" | "done";

const AGENTS: Array<{
  name: string;
  task: string;
  Icon: typeof Bot;
  color: string;
  bg: string;
  status: Status;
  progress: number;
  metric: string;
  time: string;
  active?: boolean;
}> = [
  {
    name: "Prospector LATAM",
    task: "Buscando empresas fintech en México",
    Icon: Search,
    color: "text-[#006EFA]",
    bg: "bg-[#006EFA]",
    status: "running",
    progress: 67,
    metric: "127 leads procesados",
    time: "hace 3 min",
    active: true,
  },
  {
    name: "Monitor Regulatorio CNBV",
    task: "Escaneando circulares y publicaciones",
    Icon: Radar,
    color: "text-[#9333EA]",
    bg: "bg-[#9333EA]",
    status: "running",
    progress: 23,
    metric: "8 cambios detectados",
    time: "hace 1 min",
  },
  {
    name: "Analista de Tendencias",
    task: "Síntesis semanal de mercado",
    Icon: TrendingUp,
    color: "text-[#F97316]",
    bg: "bg-[#F97316]",
    status: "done",
    progress: 100,
    metric: "Reporte generado",
    time: "hace 18 min",
  },
];

const RESULTS = [
  { empresa: "Kavak", sector: "Automotriz", score: 92 },
  { empresa: "Bitso", sector: "Fintech", score: 88 },
  { empresa: "Clip", sector: "Fintech", score: 85 },
  { empresa: "Rappi MX", sector: "Retail", score: 79 },
];

function StatusPill({ status }: { status: Status }) {
  const config = {
    running: { dot: "bg-[#16A34A]", label: "Ejecutando", text: "text-[#15803D]", bg: "bg-[#16A34A]/10" },
    queued: { dot: "bg-[#F59E0B]", label: "En cola", text: "text-[#B45309]", bg: "bg-[#F59E0B]/10" },
    done: { dot: "bg-[#006EFA]", label: "Completado", text: "text-[#006EFA]", bg: "bg-[#006EFA]/10" },
  }[status];
  return (
    <span className={`inline-flex items-center gap-1 rounded-full px-1.5 py-0.5 text-[10px] font-medium ${config.bg} ${config.text}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${config.dot}`} />
      {config.label}
    </span>
  );
}

export function LatticeAgentsMockup() {
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
            <Bot className="h-3 w-3 text-[#9333EA]" />
            Lattice Agents
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-5 py-5 [&::-webkit-scrollbar]:hidden">
          {/* Header */}
          <div className="mb-4 flex items-end justify-between">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">Mis Agentes</div>
              <div className="font-proxima text-lg font-bold text-slate-900">3 agentes activos</div>
            </div>
            <div className="flex items-center gap-1 rounded-md bg-[#9333EA] px-2.5 py-1 text-[11px] font-semibold text-white shadow-sm">
              <Sparkles className="h-3 w-3" />
              Nuevo agente
            </div>
          </div>

          {/* Stats */}
          <div className="mb-5 grid grid-cols-3 gap-2.5">
            {[
              { label: "Tareas hoy", value: "247", delta: "+18%" },
              { label: "Tiempo ahorrado", value: "42h", delta: "semana" },
              { label: "Éxito promedio", value: "94%", delta: "+2.1%" },
            ].map((s) => (
              <div key={s.label} className="rounded-lg border border-slate-200 bg-white px-3 py-2">
                <div className="text-[10px] font-medium text-slate-500">{s.label}</div>
                <div className="mt-0.5 flex items-baseline gap-1.5">
                  <span className="font-proxima text-xl font-bold text-slate-900">{s.value}</span>
                  <span className="text-[10px] font-medium text-[#16A34A]">{s.delta}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Agents list */}
          <div className="flex flex-col gap-2.5">
            {AGENTS.map((a) => (
              <div
                key={a.name}
                className={`rounded-xl border bg-white p-3 transition-colors ${
                  a.active ? "border-[#9333EA]/40 ring-1 ring-[#9333EA]/20" : "border-slate-200"
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${a.bg} text-white shadow-sm`}>
                    <a.Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <div className="truncate text-[13px] font-semibold text-slate-900">{a.name}</div>
                      <StatusPill status={a.status} />
                    </div>
                    <p className="mt-0.5 truncate text-[11px] text-slate-500">{a.task}</p>
                    <div className="mt-2 flex items-center gap-2.5">
                      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100">
                        <div
                          className={`h-full rounded-full ${a.status === "done" ? "bg-[#16A34A]" : "bg-[#006EFA]"}`}
                          style={{ width: `${a.progress}%` }}
                        />
                      </div>
                      <span className="shrink-0 text-[10px] font-medium tabular-nums text-slate-500">{a.progress}%</span>
                    </div>
                    <div className="mt-1.5 flex items-center justify-between text-[10px] text-slate-500">
                      <span>{a.metric}</span>
                      <span>{a.time}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Structured output */}
          <div className="mt-5 rounded-xl border border-slate-200 bg-white">
            <div className="flex items-center justify-between border-b border-slate-200 px-3 py-2">
              <div className="flex items-center gap-1.5">
                <FileText className="h-3 w-3 text-[#006EFA]" />
                <span className="text-[11px] font-semibold text-slate-900">Salida estructurada</span>
                <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[9px] font-mono text-slate-500">JSON</span>
              </div>
              <span className="text-[10px] text-slate-500">Prospector LATAM</span>
            </div>
            <table className="w-full text-[11px]">
              <thead className="bg-slate-50/60 text-[10px] text-slate-500">
                <tr>
                  <th className="px-3 py-1.5 text-left font-semibold">Empresa</th>
                  <th className="px-3 py-1.5 text-left font-semibold">Sector</th>
                  <th className="px-3 py-1.5 text-right font-semibold">Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {RESULTS.map((r) => (
                  <tr key={r.empresa}>
                    <td className="px-3 py-1.5 font-medium text-slate-900">{r.empresa}</td>
                    <td className="px-3 py-1.5 text-slate-600">{r.sector}</td>
                    <td className="px-3 py-1.5 text-right">
                      <span
                        className={`inline-flex items-center rounded px-1.5 py-0.5 text-[10px] font-semibold ${
                          r.score >= 85 ? "bg-[#16A34A]/10 text-[#15803D]" : "bg-[#006EFA]/10 text-[#006EFA]"
                        }`}
                      >
                        {r.score}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="border-t border-slate-100 px-3 py-1.5">
              <span className="text-[10px] font-medium text-[#006EFA]">Ver los 127 resultados →</span>
            </div>
          </div>
        </div>
      </div>
    </LazyMotion>
  );
}
