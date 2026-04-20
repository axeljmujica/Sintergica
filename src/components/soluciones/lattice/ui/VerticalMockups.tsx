"use client";

import {
  AlertTriangle,
  FileText,
  Scale,
  CheckCircle2,
  Building2,
  TrendingUp,
  ShieldCheck,
  FileCheck,
  Truck,
  Package,
  Landmark,
  Activity,
  HeartPulse,
  Stethoscope,
  Zap,
  Gauge,
  Leaf,
} from "lucide-react";

function Shell({
  children,
  appName,
  appIcon: AppIcon,
  iconColor,
}: {
  children: React.ReactNode;
  appName: string;
  appIcon: typeof Scale;
  iconColor: string;
}) {
  return (
    <div className="relative flex h-full w-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_20px_40px_-16px_rgba(15,23,42,0.18)]">
      <div className="flex h-8 shrink-0 items-center gap-2 border-b border-slate-200 bg-white px-3">
        <div className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
          <span className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
          <span className="h-2 w-2 rounded-full bg-[#28C840]" />
        </div>
        <div className="ml-1.5 flex items-center gap-1 rounded bg-slate-100 px-1.5 py-0.5 text-[9px] font-medium text-slate-600">
          <AppIcon className="h-2.5 w-2.5" style={{ color: iconColor }} />
          {appName}
        </div>
      </div>
      <div className="flex min-h-0 flex-1 flex-col">{children}</div>
    </div>
  );
}

/* ---------------------- LEGAL ---------------------- */
export function LegalVerticalMockup() {
  return (
    <Shell appName="Lattice Séeb Legal" appIcon={Scale} iconColor="#8B5CF6">
      <div className="flex items-center justify-between border-b border-slate-200 bg-white px-3 py-1.5">
        <div className="flex items-center gap-1.5">
          <FileText className="h-3 w-3 text-slate-400" />
          <span className="text-[10px] font-semibold text-slate-900">Contrato Servicios v3.2</span>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-[#8B5CF6]/10 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-[#8B5CF6]">
          <Scale className="h-2 w-2" />
          Análisis
        </span>
      </div>
      <div className="relative flex-1 overflow-hidden bg-slate-50 p-3">
        <div className="rounded-lg border border-slate-200 bg-white p-3 text-[9px] leading-relaxed text-slate-700">
          <p className="mb-1.5 font-semibold text-slate-900">Cláusula 7 · Responsabilidad</p>
          <p className="text-[8.5px] text-slate-600">
            7.1 El prestador responderá por daños ocasionados en el ejercicio de sus funciones…
          </p>
          <p className="mt-1 text-[8.5px]">
            <span className="rounded bg-[#FEE2E2] px-1 py-px text-[#991B1B] ring-1 ring-inset ring-[#FCA5A5]/40">
              7.3 La indemnización se limita al 10% del valor total — sin tope superior aplicable.
            </span>
          </p>
          <p className="mt-1 text-[8.5px] text-slate-600">
            7.4 El cliente renuncia a reclamos posteriores al periodo de 30 días…
          </p>
        </div>
        <div className="mt-2 rounded-lg border border-[#8B5CF6]/30 bg-[#8B5CF6]/5 p-2">
          <div className="flex items-center gap-1.5 text-[9px] font-semibold text-[#6D28D9]">
            <AlertTriangle className="h-3 w-3" />
            Riesgo detectado · Cláusula 7.3
          </div>
          <p className="mt-1 text-[8.5px] leading-snug text-slate-700">
            Limitación contraria al{" "}
            <span className="font-mono text-[#8B5CF6]">Art. 2104 CCF</span> — permite exigir daño
            integral.
          </p>
          <div className="mt-1.5 flex items-center gap-1 text-[8px] font-medium text-[#16A34A]">
            <CheckCircle2 className="h-2.5 w-2.5" />
            Sugerencia de redacción alternativa disponible
          </div>
        </div>
      </div>
    </Shell>
  );
}

/* ---------------------- GOBIERNO ---------------------- */
export function GobiernoVerticalMockup() {
  const kpis = [
    { label: "Recaudación", value: "+18%", color: "#06B6D4", Icon: TrendingUp },
    { label: "LGTAIP", value: "98%", color: "#16A34A", Icon: ShieldCheck },
    { label: "Trámites", value: "2,341", color: "#F59E0B", Icon: FileCheck },
  ];
  return (
    <Shell appName="Lattice Gobierno" appIcon={Building2} iconColor="#06B6D4">
      <div className="flex items-center justify-between border-b border-slate-200 px-3 py-1.5">
        <span className="text-[10px] font-semibold text-slate-900">Municipio de Mérida</span>
        <span className="text-[8.5px] text-slate-500">Q1 · 2026</span>
      </div>
      <div className="flex-1 overflow-hidden bg-slate-50 p-3">
        <div className="grid grid-cols-3 gap-1.5">
          {kpis.map((k) => (
            <div key={k.label} className="rounded-lg border border-slate-200 bg-white p-1.5">
              <div className="flex items-center gap-1 text-[8.5px] font-medium text-slate-500">
                <k.Icon className="h-2.5 w-2.5" style={{ color: k.color }} />
                {k.label}
              </div>
              <div className="mt-0.5 font-proxima text-sm font-bold text-slate-900">{k.value}</div>
            </div>
          ))}
        </div>
        <div className="mt-2 rounded-lg border border-slate-200 bg-white p-2">
          <div className="mb-1 flex items-center justify-between">
            <span className="text-[9px] font-semibold text-slate-900">Recaudación trimestral</span>
            <span className="text-[8px] font-medium text-[#16A34A]">+18% vs Q4</span>
          </div>
          <div className="flex h-12 items-end gap-1">
            {[38, 52, 44, 61, 58, 72, 68, 81, 76, 88, 84, 95].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t"
                style={{
                  height: `${h}%`,
                  background: i >= 8 ? "#06B6D4" : "#06B6D4" + "55",
                }}
              />
            ))}
          </div>
        </div>
        <div className="mt-2 flex items-center gap-1.5 rounded-md bg-[#16A34A]/10 px-2 py-1 text-[9px] font-medium text-[#15803D]">
          <ShieldCheck className="h-3 w-3" />
          Audit trail inmutable · 14,231 operaciones
        </div>
      </div>
    </Shell>
  );
}

/* ---------------------- LOGÍSTICA ---------------------- */
export function LogisticaVerticalMockup() {
  const rows = [
    { desc: "Autopartes de acero", frac: "8708.29.99", status: "ok" },
    { desc: "Circuitos electrónicos", frac: "8534.00.01", status: "ok" },
    { desc: "Lubricantes sintéticos", frac: "2710.19.88", status: "warn" },
    { desc: "Envases plásticos", frac: "3923.30.01", status: "ok" },
  ];
  return (
    <Shell appName="Nahui · Pedimentos" appIcon={Truck} iconColor="#F59E0B">
      <div className="flex items-center justify-between border-b border-slate-200 px-3 py-1.5">
        <div className="flex items-center gap-1.5">
          <Package className="h-3 w-3 text-[#F59E0B]" />
          <span className="text-[10px] font-semibold text-slate-900">Pedimento A1 · 3428</span>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-[#16A34A]/10 px-1.5 py-0.5 text-[8px] font-semibold text-[#15803D]">
          <span className="h-1 w-1 rounded-full bg-[#16A34A]" />
          Validando
        </span>
      </div>
      <div className="flex-1 overflow-hidden bg-slate-50 p-3">
        <div className="rounded-lg border border-slate-200 bg-white">
          <div className="grid grid-cols-[1.6fr_1fr_auto] gap-2 border-b border-slate-200 bg-slate-50/70 px-2 py-1 text-[8px] font-semibold uppercase tracking-wider text-slate-500">
            <span>Descripción</span>
            <span>Fracción</span>
            <span>Estado</span>
          </div>
          {rows.map((r) => (
            <div
              key={r.frac}
              className="grid grid-cols-[1.6fr_1fr_auto] items-center gap-2 border-b border-slate-100 px-2 py-1 text-[9px] last:border-0"
            >
              <span className="truncate text-slate-800">{r.desc}</span>
              <span className="font-mono text-[8.5px] text-slate-600">{r.frac}</span>
              {r.status === "ok" ? (
                <CheckCircle2 className="h-3 w-3 text-[#16A34A]" />
              ) : (
                <AlertTriangle className="h-3 w-3 text-[#F59E0B]" />
              )}
            </div>
          ))}
        </div>
        <div className="mt-2 rounded-lg border border-[#F59E0B]/30 bg-[#F59E0B]/5 p-2">
          <div className="flex items-center gap-1.5 text-[9px] font-semibold text-[#B45309]">
            <AlertTriangle className="h-3 w-3" />
            Revisar fracción 2710.19.88
          </div>
          <p className="mt-0.5 text-[8.5px] text-slate-700">
            La IA sugiere{" "}
            <span className="font-mono text-[#F59E0B]">2710.19.99</span> por contenido &gt; 70%
            sintético.
          </p>
        </div>
      </div>
    </Shell>
  );
}

/* ---------------------- FINANCIERO ---------------------- */
export function FinancieroVerticalMockup() {
  const txs = [
    { id: "TX-8821", amount: "$ 12,400", score: 92, tag: "Atípica", level: "high" },
    { id: "TX-8820", amount: "$ 3,200", score: 41, tag: "Normal", level: "low" },
    { id: "TX-8819", amount: "$ 8,750", score: 68, tag: "Revisar", level: "mid" },
    { id: "TX-8818", amount: "$ 1,120", score: 22, tag: "Normal", level: "low" },
  ];
  const levelClass = (lvl: string) =>
    lvl === "high"
      ? "bg-[#DC2626]/10 text-[#B91C1C] ring-[#DC2626]/20"
      : lvl === "mid"
      ? "bg-[#F59E0B]/10 text-[#B45309] ring-[#F59E0B]/20"
      : "bg-[#16A34A]/10 text-[#15803D] ring-[#16A34A]/20";
  return (
    <Shell appName="Lattice Financiero" appIcon={Landmark} iconColor="#3B82F6">
      <div className="flex items-center justify-between border-b border-slate-200 px-3 py-1.5">
        <div className="flex items-center gap-1.5">
          <Activity className="h-3 w-3 text-[#3B82F6]" />
          <span className="text-[10px] font-semibold text-slate-900">Monitor transaccional</span>
        </div>
        <span className="rounded-full bg-[#DC2626]/10 px-1.5 py-0.5 text-[8px] font-semibold text-[#B91C1C]">
          1 alerta
        </span>
      </div>
      <div className="flex-1 overflow-hidden bg-slate-50 p-3">
        <div className="grid grid-cols-3 gap-1.5">
          <div className="rounded-md border border-slate-200 bg-white p-1.5">
            <div className="text-[8px] text-slate-500">Hoy</div>
            <div className="font-proxima text-sm font-bold text-slate-900">1,284</div>
          </div>
          <div className="rounded-md border border-slate-200 bg-white p-1.5">
            <div className="text-[8px] text-slate-500">Atípicas</div>
            <div className="font-proxima text-sm font-bold text-[#DC2626]">7</div>
          </div>
          <div className="rounded-md border border-slate-200 bg-white p-1.5">
            <div className="text-[8px] text-slate-500">KYC</div>
            <div className="font-proxima text-sm font-bold text-[#3B82F6]">−50%</div>
          </div>
        </div>
        <div className="mt-2 overflow-hidden rounded-lg border border-slate-200 bg-white">
          {txs.map((t, i) => (
            <div
              key={t.id}
              className={`flex items-center justify-between px-2 py-1 text-[9px] ${
                i > 0 ? "border-t border-slate-100" : ""
              } ${t.level === "high" ? "bg-[#DC2626]/5" : ""}`}
            >
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-[8.5px] text-slate-500">{t.id}</span>
                <span className="font-semibold text-slate-900">{t.amount}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-[8.5px] text-slate-500">{t.score}</span>
                <span
                  className={`rounded px-1 py-0.5 text-[8px] font-semibold ring-1 ring-inset ${levelClass(t.level)}`}
                >
                  {t.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Shell>
  );
}

/* ---------------------- SALUD ---------------------- */
export function SaludVerticalMockup() {
  return (
    <Shell appName="Lattice Séeb Salud" appIcon={HeartPulse} iconColor="#10B981">
      <div className="flex items-center justify-between border-b border-slate-200 px-3 py-1.5">
        <div className="flex items-center gap-1.5">
          <Stethoscope className="h-3 w-3 text-[#10B981]" />
          <span className="text-[10px] font-semibold text-slate-900">Nota de evolución</span>
        </div>
        <span className="text-[8.5px] text-slate-500">Exp. 4421</span>
      </div>
      <div className="flex-1 overflow-hidden bg-slate-50 p-3">
        <div className="rounded-lg border border-slate-200 bg-white p-2 text-[9px] leading-relaxed text-slate-700">
          <p>
            Pac. masculino 58 años refiere cefalea tensional y{" "}
            <span className="rounded bg-[#10B981]/10 px-1 py-px text-[#047857] ring-1 ring-inset ring-[#10B981]/20">
              hipertensión arterial
            </span>{" "}
            controlada con IECA. TA 145/92.
          </p>
          <p className="mt-1">
            Se ajusta dosis de{" "}
            <span className="rounded bg-[#3B82F6]/10 px-1 py-px text-[#1D4ED8] ring-1 ring-inset ring-[#3B82F6]/20">
              enalapril 10mg
            </span>{" "}
            y se cita a control en 4 semanas.
          </p>
        </div>
        <div className="mt-2 rounded-lg border border-[#10B981]/30 bg-[#10B981]/5 p-2">
          <div className="flex items-center gap-1.5 text-[9px] font-semibold text-[#047857]">
            <FileCheck className="h-3 w-3" />
            Codificación sugerida CIE-10
          </div>
          <div className="mt-1.5 flex flex-wrap gap-1">
            <span className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-1.5 py-0.5 text-[8.5px]">
              <span className="font-mono font-semibold text-[#10B981]">I10</span>
              <span className="text-slate-600">Hipertensión esencial</span>
            </span>
            <span className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-white px-1.5 py-0.5 text-[8.5px]">
              <span className="font-mono font-semibold text-[#10B981]">G44.2</span>
              <span className="text-slate-600">Cefalea tensional</span>
            </span>
          </div>
          <div className="mt-1.5 flex items-center gap-1 text-[8px] font-medium text-slate-500">
            <ShieldCheck className="h-2.5 w-2.5 text-[#10B981]" />
            Trazabilidad COFEPRIS activa
          </div>
        </div>
      </div>
    </Shell>
  );
}

/* ---------------------- ENERGÍA ---------------------- */
export function EnergiaVerticalMockup() {
  const circulares = [
    { id: "CRE-125/2026", title: "Tarifas de transmisión SEN", status: "new" },
    { id: "CRE-118/2026", title: "Reporteo ESG trimestral", status: "review" },
    { id: "CRE-102/2026", title: "Certificados de energía limpia", status: "ok" },
  ];
  return (
    <Shell appName="Lattice Energía" appIcon={Zap} iconColor="#EAB308">
      <div className="flex items-center justify-between border-b border-slate-200 px-3 py-1.5">
        <div className="flex items-center gap-1.5">
          <Gauge className="h-3 w-3 text-[#EAB308]" />
          <span className="text-[10px] font-semibold text-slate-900">Monitor CRE · 24/7</span>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-[#16A34A]/10 px-1.5 py-0.5 text-[8px] font-semibold text-[#15803D]">
          <span className="h-1 w-1 animate-pulse rounded-full bg-[#16A34A]" />
          En línea
        </span>
      </div>
      <div className="flex-1 overflow-hidden bg-slate-50 p-3">
        <div className="grid grid-cols-2 gap-1.5">
          <div className="rounded-md border border-slate-200 bg-white p-1.5">
            <div className="flex items-center gap-1 text-[8px] text-slate-500">
              <Leaf className="h-2.5 w-2.5 text-[#16A34A]" />
              Reporteo ESG
            </div>
            <div className="font-proxima text-sm font-bold text-slate-900">Automático</div>
          </div>
          <div className="rounded-md border border-slate-200 bg-white p-1.5">
            <div className="flex items-center gap-1 text-[8px] text-slate-500">
              <Activity className="h-2.5 w-2.5 text-[#EAB308]" />
              Cambios hoy
            </div>
            <div className="font-proxima text-sm font-bold text-slate-900">3 nuevos</div>
          </div>
        </div>
        <div className="mt-2 overflow-hidden rounded-lg border border-slate-200 bg-white">
          <div className="border-b border-slate-200 bg-slate-50/70 px-2 py-1 text-[8px] font-semibold uppercase tracking-wider text-slate-500">
            Circulares CRE
          </div>
          {circulares.map((c, i) => {
            const badge =
              c.status === "new"
                ? { label: "Nuevo", cls: "bg-[#EAB308]/10 text-[#854D0E] ring-[#EAB308]/30" }
                : c.status === "review"
                ? { label: "Revisar", cls: "bg-[#3B82F6]/10 text-[#1D4ED8] ring-[#3B82F6]/30" }
                : { label: "Cumplido", cls: "bg-[#16A34A]/10 text-[#15803D] ring-[#16A34A]/30" };
            return (
              <div
                key={c.id}
                className={`flex items-center justify-between px-2 py-1 text-[9px] ${i > 0 ? "border-t border-slate-100" : ""}`}
              >
                <div className="min-w-0">
                  <div className="font-mono text-[8px] text-slate-500">{c.id}</div>
                  <div className="truncate font-medium text-slate-800">{c.title}</div>
                </div>
                <span
                  className={`shrink-0 rounded px-1 py-0.5 text-[8px] font-semibold ring-1 ring-inset ${badge.cls}`}
                >
                  {badge.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </Shell>
  );
}
