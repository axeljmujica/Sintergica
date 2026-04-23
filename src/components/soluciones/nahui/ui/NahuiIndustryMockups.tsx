"use client";

import {
  Truck,
  Warehouse,
  ShoppingCart,
  Boxes,
  PackageOpen,
  Factory,
  MapPin,
  Clock,
  CheckCircle2,
  Package,
  Circle,
  TrendingUp,
  Users,
  DollarSign,
  ArrowUpRight,
  ArrowDownRight,
  Star,
  Search,
  Filter,
  Store,
  Banknote,
  RotateCcw,
  AlertTriangle,
  ChevronRight,
  Wallet,
  Smartphone,
  Eye,
  ClipboardCheck,
  Timer,
  Calendar,
  ArrowRight,
} from "lucide-react";

/* ── Shared frame ─────────────────────────────────────────── */

function Frame({
  children,
  accent,
  title,
  badge,
  icon: Icon,
}: {
  children: React.ReactNode;
  accent: string;
  title: string;
  badge?: string;
  icon: typeof Truck;
}) {
  return (
    <div className="absolute inset-0 flex flex-col rounded-2xl bg-[#0a0f1d] text-white overflow-hidden">
      {/* Top bar */}
      <div className="flex h-9 items-center justify-between border-b border-white/5 bg-[#070b16] px-3 shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1">
            <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
            <span className="h-2 w-2 rounded-full bg-[#FEBC2E]" />
            <span className="h-2 w-2 rounded-full bg-[#28C840]" />
          </div>
          <div className="flex items-center gap-1.5 text-[10px] font-bold text-white/85">
            <span
              className="flex h-4 w-4 items-center justify-center rounded"
              style={{ backgroundColor: `${accent}20`, color: accent }}
            >
              <Icon className="h-2.5 w-2.5" />
            </span>
            {title}
          </div>
        </div>
        {badge && (
          <span
            className="rounded-full px-2 py-0.5 text-[8px] font-bold uppercase tracking-wider"
            style={{
              backgroundColor: `${accent}15`,
              color: accent,
              border: `1px solid ${accent}30`,
            }}
          >
            {badge}
          </span>
        )}
      </div>
      {/* Body */}
      <div className="relative flex-1 overflow-hidden">{children}</div>
    </div>
  );
}

/* ── 1. Última milla ───────────────────────────────────────── */

const STOPS = [
  { id: "A", name: "Polanco · Masaryk 340", eta: "10:24", status: "done", code: "#1021" },
  { id: "B", name: "Condesa · Amsterdam 112", eta: "10:52", status: "active", code: "#1022" },
  { id: "C", name: "Roma Norte · Colima 256", eta: "11:15", status: "pending", code: "#1023" },
  { id: "D", name: "Del Valle · Insurgentes 980", eta: "11:48", status: "pending", code: "#1024" },
];

function UltimaMillaMockup() {
  const accent = "#53abe6";
  return (
    <Frame accent={accent} title="Nahui · Última Milla" badge="EN RUTA" icon={Truck}>
      <div className="flex h-full">
        {/* Left — stops list */}
        <div className="flex w-[56%] flex-col border-r border-white/5 p-3">
          <div className="mb-2 flex items-center justify-between">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-wider text-white/40">Ruta R-2041</p>
              <p className="text-[13px] font-bold text-white">Conductor: J. Mendoza</p>
            </div>
            <div className="flex items-center gap-1 rounded-md bg-[#22c55e]/10 px-2 py-1 text-[9px] font-bold text-[#22c55e]">
              <Circle className="h-2 w-2 fill-current" /> A tiempo
            </div>
          </div>

          {/* Progress */}
          <div className="mb-3 flex items-center gap-2">
            <div className="flex-1 h-1 rounded-full bg-white/5 overflow-hidden">
              <div className="h-full w-[45%] rounded-full" style={{ backgroundColor: accent }} />
            </div>
            <span className="text-[9px] font-bold text-white/60">9/20</span>
          </div>

          {/* Stops */}
          <div className="flex flex-col gap-1.5 overflow-hidden">
            {STOPS.map((s) => {
              const done = s.status === "done";
              const active = s.status === "active";
              return (
                <div
                  key={s.id}
                  className={`flex items-center gap-2.5 rounded-lg border p-2 ${
                    active
                      ? "border-[#53abe6]/40 bg-[#53abe6]/10"
                      : done
                      ? "border-[#22c55e]/20 bg-transparent"
                      : "border-white/5 bg-transparent"
                  }`}
                >
                  <div
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[9px] font-bold ${
                      done
                        ? "bg-[#22c55e]/20 text-[#22c55e]"
                        : active
                        ? "bg-[#53abe6] text-[#070b16]"
                        : "bg-white/10 text-white/60"
                    }`}
                  >
                    {done ? <CheckCircle2 className="h-3 w-3" /> : s.id}
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <p className={`truncate text-[10px] font-bold ${done ? "text-white/40 line-through" : "text-white/90"}`}>
                      {s.name}
                    </p>
                    <p className="text-[9px] text-white/40">{s.code}</p>
                  </div>
                  <div className="flex items-center gap-1 text-[9px] font-bold text-white/60">
                    <Clock className="h-2.5 w-2.5" />
                    {s.eta}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right — mini map */}
        <div className="relative flex-1 bg-[#0d1424] overflow-hidden">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice">
            <rect width="200" height="200" fill="#0d1424" />
            <line x1="0" y1="60" x2="200" y2="60" stroke="#1a2438" strokeWidth="4" />
            <line x1="0" y1="130" x2="200" y2="130" stroke="#1a2438" strokeWidth="4" />
            <line x1="55" y1="0" x2="55" y2="200" stroke="#1a2438" strokeWidth="4" />
            <line x1="145" y1="0" x2="145" y2="200" stroke="#1a2438" strokeWidth="4" />
            <rect x="10" y="10" width="35" height="40" fill="#141c2e" rx="2" />
            <rect x="65" y="10" width="70" height="40" fill="#141c2e" rx="2" />
            <rect x="155" y="10" width="35" height="40" fill="#141c2e" rx="2" />
            <rect x="10" y="70" width="35" height="50" fill="#141c2e" rx="2" />
            <rect x="65" y="70" width="70" height="50" fill="#141c2e" rx="2" />
            <rect x="155" y="70" width="35" height="50" fill="#141c2e" rx="2" />
            <rect x="10" y="140" width="35" height="50" fill="#141c2e" rx="2" />
            <rect x="65" y="140" width="70" height="50" fill="#141c2e" rx="2" />
            <rect x="155" y="140" width="35" height="50" fill="#141c2e" rx="2" />
            {/* Route path */}
            <path
              d="M 28 170 L 100 130 L 100 95 L 170 60 L 170 30"
              stroke={accent}
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="3 2"
            />
            <path d="M 28 170 L 100 130" stroke="#22c55e" strokeWidth="2" fill="none" />
          </svg>
          {/* Pins */}
          <div className="absolute" style={{ left: "14%", top: "85%" }}>
            <div className="h-3.5 w-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#22c55e] ring-2 ring-[#22c55e]/30" />
          </div>
          <div className="absolute" style={{ left: "50%", top: "65%" }}>
            <div className="relative -translate-x-1/2 -translate-y-1/2">
              <div className="flex h-5 w-5 items-center justify-center rounded-full shadow-lg" style={{ backgroundColor: accent }}>
                <Truck className="h-2.5 w-2.5 text-[#070b16]" />
              </div>
            </div>
          </div>
          <div className="absolute" style={{ left: "50%", top: "47%" }}>
            <div className="h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-[#0d1424]" />
          </div>
          <div className="absolute" style={{ left: "85%", top: "30%" }}>
            <div className="h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-[#0d1424]" />
          </div>
          <div className="absolute" style={{ left: "85%", top: "15%" }}>
            <div className="h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/40 bg-[#0d1424]" />
          </div>
          {/* ETA floating card */}
          <div className="absolute bottom-2 left-2 right-2 rounded-lg border border-white/10 bg-[#070b16]/90 p-2 backdrop-blur">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[8px] uppercase tracking-wider text-white/40 font-bold">Próxima entrega</p>
                <p className="text-[10px] font-bold text-white">Amsterdam 112 · #1022</p>
              </div>
              <div className="text-right">
                <p className="text-[14px] font-extrabold" style={{ color: accent }}>10:52</p>
                <p className="text-[8px] text-white/50">en 12 min</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
}

/* ── 2. 3PL ────────────────────────────────────────────────── */

const CLIENTS = [
  { name: "Cliente · Acme Corp", orders: 147, sla: 98, color: "#9333EA" },
  { name: "Cliente · Globex SA", orders: 89, sla: 96, color: "#0EA5E9" },
  { name: "Cliente · Initech MX", orders: 52, sla: 94, color: "#F59E0B" },
];

function ThreePLMockup() {
  const accent = "#9333EA";
  return (
    <Frame accent={accent} title="Nahui · Portal 3PL" badge="MULTI-CLIENTE" icon={Warehouse}>
      <div className="flex h-full p-3 gap-3">
        {/* Left — clients */}
        <div className="w-[45%] flex flex-col gap-1.5">
          <p className="text-[9px] font-bold uppercase tracking-wider text-white/40 mb-1">Clientes activos</p>
          {CLIENTS.map((c, i) => (
            <div
              key={c.name}
              className={`rounded-lg border p-2 ${i === 0 ? "border-[#9333EA]/40 bg-[#9333EA]/10" : "border-white/5 bg-white/[0.02]"}`}
            >
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: c.color }} />
                <p className="text-[10px] font-bold text-white truncate">{c.name}</p>
              </div>
              <div className="mt-1.5 flex items-center justify-between text-[9px]">
                <span className="text-white/50">{c.orders} órdenes</span>
                <span className="font-bold" style={{ color: c.color }}>SLA {c.sla}%</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right — active client dashboard */}
        <div className="flex-1 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[9px] font-bold uppercase tracking-wider text-white/40">Vista cliente</p>
              <p className="text-[11px] font-bold text-white">Acme Corp · Octubre 2026</p>
            </div>
            <div className="flex items-center gap-1 rounded-md bg-white/5 px-2 py-1 text-[9px] font-bold text-white/70">
              <Filter className="h-2.5 w-2.5" /> Filtros
            </div>
          </div>

          {/* KPI grid */}
          <div className="grid grid-cols-2 gap-2">
            <div className="rounded-lg border border-white/5 bg-white/[0.02] p-2">
              <p className="text-[8px] font-bold uppercase tracking-wider text-white/40">Facturación</p>
              <p className="mt-0.5 text-[13px] font-extrabold" style={{ color: accent }}>$847k</p>
              <div className="mt-0.5 flex items-center gap-1 text-[8px] text-[#22c55e] font-bold">
                <ArrowUpRight className="h-2 w-2" /> +12%
              </div>
            </div>
            <div className="rounded-lg border border-white/5 bg-white/[0.02] p-2">
              <p className="text-[8px] font-bold uppercase tracking-wider text-white/40">SLA cumplido</p>
              <p className="mt-0.5 text-[13px] font-extrabold text-white">98.2%</p>
              <div className="mt-0.5 flex items-center gap-1 text-[8px] text-[#22c55e] font-bold">
                <ArrowUpRight className="h-2 w-2" /> +1.4 pts
              </div>
            </div>
          </div>

          {/* Mini chart */}
          <div className="flex-1 rounded-lg border border-white/5 bg-white/[0.02] p-2 flex flex-col">
            <p className="text-[8px] font-bold uppercase tracking-wider text-white/40 mb-1">Servicios / semana</p>
            <div className="flex flex-1 items-end gap-1">
              {[40, 55, 48, 70, 62, 85, 78].map((h, i) => (
                <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, backgroundColor: `${accent}${i === 5 ? "" : "60"}` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
}

/* ── 3. Retail ─────────────────────────────────────────────── */

const STORES = [
  { name: "Suc. Polanco", otif: 98, status: "high" },
  { name: "Suc. Satélite", otif: 94, status: "high" },
  { name: "Suc. Coyoacán", otif: 87, status: "mid" },
  { name: "Suc. Pedregal", otif: 72, status: "low" },
];

function RetailMockup() {
  const accent = "#F59E0B";
  return (
    <Frame accent={accent} title="Nahui · Reabasto Retail" badge="OTIF LIVE" icon={ShoppingCart}>
      <div className="flex flex-col h-full p-3 gap-2">
        {/* Top KPIs */}
        <div className="grid grid-cols-3 gap-2">
          <div className="rounded-lg border border-white/5 bg-white/[0.02] p-2">
            <p className="text-[8px] font-bold uppercase tracking-wider text-white/40">OTIF Global</p>
            <p className="mt-0.5 text-[14px] font-extrabold" style={{ color: accent }}>92.8%</p>
          </div>
          <div className="rounded-lg border border-white/5 bg-white/[0.02] p-2">
            <p className="text-[8px] font-bold uppercase tracking-wider text-white/40">Tiendas</p>
            <p className="mt-0.5 text-[14px] font-extrabold text-white">148</p>
          </div>
          <div className="rounded-lg border border-white/5 bg-white/[0.02] p-2">
            <p className="text-[8px] font-bold uppercase tracking-wider text-white/40">Rechazos</p>
            <p className="mt-0.5 text-[14px] font-extrabold text-[#ef4444]">0.8%</p>
          </div>
        </div>

        {/* Stores list */}
        <div className="flex-1 rounded-lg border border-white/5 bg-white/[0.02] p-2 overflow-hidden">
          <div className="flex items-center justify-between mb-1.5">
            <p className="text-[9px] font-bold uppercase tracking-wider text-white/40">Tiendas · OTIF hoy</p>
            <div className="flex items-center gap-1 text-[8px] text-white/40">
              <Search className="h-2.5 w-2.5" /> SKU, tienda...
            </div>
          </div>
          <div className="flex flex-col gap-1">
            {STORES.map((s) => {
              const color = s.status === "high" ? "#22c55e" : s.status === "mid" ? accent : "#ef4444";
              return (
                <div key={s.name} className="flex items-center gap-2 rounded-md border border-white/5 bg-black/20 px-2 py-1.5">
                  <Store className="h-3 w-3" style={{ color }} />
                  <p className="flex-1 text-[10px] font-bold text-white">{s.name}</p>
                  <div className="flex items-center gap-1.5">
                    <div className="h-1 w-16 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${s.otif}%`, backgroundColor: color }} />
                    </div>
                    <span className="text-[9px] font-bold" style={{ color }}>
                      {s.otif}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Frame>
  );
}

/* ── 4. Distribución ───────────────────────────────────────── */

function DistribucionMockup() {
  const accent = "#0EA5E9";
  return (
    <Frame accent={accent} title="Nahui · Venta en Ruta" badge="LIQUIDACIÓN" icon={Boxes}>
      <div className="flex h-full p-3 gap-3">
        {/* Left — Route summary */}
        <div className="w-[50%] flex flex-col gap-2">
          <div className="rounded-lg border border-white/5 bg-white/[0.02] p-2">
            <div className="flex items-center justify-between mb-1.5">
              <p className="text-[10px] font-bold text-white">Ruta R-114 · Miguel</p>
              <span className="rounded-md bg-[#22c55e]/15 px-1.5 py-0.5 text-[8px] font-bold text-[#22c55e]">LISTO</span>
            </div>
            <div className="grid grid-cols-3 gap-1.5 text-center">
              <div>
                <p className="text-[8px] uppercase text-white/40 font-bold">PDVs</p>
                <p className="text-[11px] font-extrabold text-white">42</p>
              </div>
              <div>
                <p className="text-[8px] uppercase text-white/40 font-bold">Venta</p>
                <p className="text-[11px] font-extrabold" style={{ color: accent }}>$38.4k</p>
              </div>
              <div>
                <p className="text-[8px] uppercase text-white/40 font-bold">Cobro</p>
                <p className="text-[11px] font-extrabold text-[#22c55e]">$31.7k</p>
              </div>
            </div>
          </div>

          {/* Movimientos */}
          <div className="flex-1 rounded-lg border border-white/5 bg-white/[0.02] p-2">
            <p className="text-[9px] font-bold uppercase tracking-wider text-white/40 mb-1.5">Movimientos</p>
            <div className="flex flex-col gap-1">
              {[
                { icon: Banknote, label: "Cobro en efectivo", amount: "+$4,250", color: "#22c55e" },
                { icon: RotateCcw, label: "Devolución SKU-204", amount: "-$680", color: "#ef4444" },
                { icon: AlertTriangle, label: "Merma registrada", amount: "-$120", color: accent },
                { icon: Wallet, label: "Crédito abonado", amount: "+$2,800", color: "#22c55e" },
              ].map((m, i) => (
                <div key={i} className="flex items-center gap-2 rounded-md bg-black/20 px-2 py-1">
                  <m.icon className="h-3 w-3" style={{ color: m.color }} />
                  <span className="flex-1 text-[9px] text-white/80">{m.label}</span>
                  <span className="text-[9px] font-bold" style={{ color: m.color }}>{m.amount}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — Conciliación */}
        <div className="flex-1 rounded-lg border border-white/5 bg-white/[0.02] p-2 flex flex-col">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-bold text-white">Conciliación</p>
            <ClipboardCheck className="h-3 w-3" style={{ color: accent }} />
          </div>
          <div className="mt-2 flex flex-col gap-1.5 flex-1">
            <div className="flex justify-between border-b border-white/5 pb-1">
              <span className="text-[9px] text-white/60">Efectivo declarado</span>
              <span className="text-[9px] font-bold text-white">$28,450</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-1">
              <span className="text-[9px] text-white/60">Sistema</span>
              <span className="text-[9px] font-bold text-white">$28,450</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-1">
              <span className="text-[9px] text-white/60">Devoluciones</span>
              <span className="text-[9px] font-bold text-white">$680</span>
            </div>
            <div className="flex justify-between pb-1">
              <span className="text-[9px] text-white/60">Mermas</span>
              <span className="text-[9px] font-bold text-white">$120</span>
            </div>
          </div>
          <div
            className="mt-2 flex items-center justify-center gap-1 rounded-md py-1.5 text-[9px] font-bold"
            style={{ backgroundColor: `${accent}15`, color: accent }}
          >
            <CheckCircle2 className="h-3 w-3" /> Cuadre 100% · firmar
          </div>
        </div>
      </div>
    </Frame>
  );
}

/* ── 5. E-commerce ─────────────────────────────────────────── */

function EcommerceMockup() {
  const accent = "#10B981";
  return (
    <Frame accent={accent} title="Tu Tienda · Rastreo" badge="WHITE-LABEL" icon={PackageOpen}>
      <div className="flex h-full">
        {/* Phone card */}
        <div className="flex-1 flex items-center justify-center p-3">
          <div className="w-full max-w-[220px] rounded-2xl border border-white/10 bg-gradient-to-b from-[#0d1424] to-[#070b16] p-3 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-[9px] font-bold text-white/40">Pedido #TS-2198</span>
              <span className="rounded-full px-1.5 py-0.5 text-[8px] font-bold" style={{ backgroundColor: `${accent}15`, color: accent }}>
                EN CAMINO
              </span>
            </div>
            <p className="mt-2 text-[12px] font-extrabold text-white">Llega hoy, 15:40–16:10</p>
            <p className="text-[9px] text-white/50">Carlos va a 2.3 km de tu domicilio</p>

            {/* Timeline */}
            <div className="mt-3 flex flex-col gap-1.5">
              {[
                { label: "Pedido confirmado", time: "11:02", done: true },
                { label: "Empacado", time: "12:14", done: true },
                { label: "En ruta", time: "14:32", done: true, active: true },
                { label: "Entregado", time: "—", done: false },
              ].map((step, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className={`h-2.5 w-2.5 rounded-full shrink-0 ${step.active ? "ring-2 ring-offset-2 ring-offset-[#0d1424]" : ""}`}
                    style={{
                      backgroundColor: step.done ? accent : "#1f2937",
                      boxShadow: step.active ? `0 0 0 2px ${accent}40` : "none",
                    }}
                  />
                  <span className={`flex-1 text-[9px] ${step.done ? "text-white" : "text-white/40"} font-semibold`}>
                    {step.label}
                  </span>
                  <span className="text-[9px] text-white/40">{step.time}</span>
                </div>
              ))}
            </div>

            <div className="mt-3 flex items-center justify-between rounded-md border border-white/5 bg-white/[0.02] p-1.5">
              <div className="flex items-center gap-1.5">
                <div className="h-5 w-5 rounded-full bg-[#1e293b] flex items-center justify-center">
                  <Smartphone className="h-2.5 w-2.5" style={{ color: accent }} />
                </div>
                <div>
                  <p className="text-[8px] font-bold text-white">Contactar</p>
                  <p className="text-[7px] text-white/40">Carlos · conductor</p>
                </div>
              </div>
              <ChevronRight className="h-3 w-3 text-white/40" />
            </div>
          </div>
        </div>

        {/* Right — stats */}
        <div className="w-[40%] border-l border-white/5 p-3 flex flex-col gap-2">
          <p className="text-[9px] font-bold uppercase tracking-wider text-white/40">Integraciones</p>
          <div className="grid grid-cols-2 gap-1.5">
            {["Shopify", "VTEX", "ML", "WooComm."].map((int) => (
              <div key={int} className="rounded-md border border-white/5 bg-white/[0.02] px-2 py-1.5 text-center text-[9px] font-bold text-white/70">
                {int}
              </div>
            ))}
          </div>
          <div className="mt-auto rounded-lg border p-2" style={{ borderColor: `${accent}30`, backgroundColor: `${accent}08` }}>
            <p className="text-[8px] uppercase font-bold tracking-wider" style={{ color: accent }}>NPS de entrega</p>
            <div className="mt-0.5 flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-current" style={{ color: accent }} />
              <span className="text-[16px] font-extrabold text-white">4.6</span>
              <span className="text-[9px] text-white/50">/ 5</span>
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
}

/* ── 6. Manufactura ────────────────────────────────────────── */

const APPOINTMENTS = [
  { time: "08:00", dock: "A1", supplier: "Autopartes MX", status: "done" },
  { time: "09:30", dock: "A2", supplier: "Steel Corp", status: "active" },
  { time: "10:15", dock: "B1", supplier: "Plastics SA", status: "pending" },
  { time: "11:00", dock: "B2", supplier: "Química Norte", status: "pending" },
  { time: "12:30", dock: "A1", supplier: "Empaques Global", status: "pending" },
];

function ManufacturaMockup() {
  const accent = "#EAB308";
  return (
    <Frame accent={accent} title="Nahui · Gestión de Andenes" badge="CITAS HOY" icon={Factory}>
      <div className="flex h-full p-3 gap-2">
        {/* Left — dock map */}
        <div className="w-[42%] rounded-lg border border-white/5 bg-white/[0.02] p-2 flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[9px] font-bold uppercase tracking-wider text-white/40">Patio norte</p>
            <Calendar className="h-3 w-3" style={{ color: accent }} />
          </div>
          <div className="grid grid-cols-2 gap-1.5 flex-1">
            {[
              { id: "A1", status: "busy" },
              { id: "A2", status: "active" },
              { id: "B1", status: "free" },
              { id: "B2", status: "free" },
              { id: "C1", status: "free" },
              { id: "C2", status: "maint" },
            ].map((d) => {
              const colors = {
                busy: { bg: "rgba(156,163,175,0.15)", border: "rgba(156,163,175,0.4)", text: "#9ca3af" },
                active: { bg: `${accent}20`, border: `${accent}60`, text: accent },
                free: { bg: "rgba(34,197,94,0.15)", border: "rgba(34,197,94,0.4)", text: "#22c55e" },
                maint: { bg: "rgba(239,68,68,0.15)", border: "rgba(239,68,68,0.4)", text: "#ef4444" },
              }[d.status]!;
              return (
                <div
                  key={d.id}
                  className="flex flex-col items-center justify-center rounded-md border py-1"
                  style={{ backgroundColor: colors.bg, borderColor: colors.border }}
                >
                  <Truck className="h-3 w-3" style={{ color: colors.text }} />
                  <p className="mt-0.5 text-[9px] font-extrabold" style={{ color: colors.text }}>
                    {d.id}
                  </p>
                </div>
              );
            })}
          </div>
          <div className="mt-2 grid grid-cols-2 gap-1 text-[8px]">
            <div className="flex items-center gap-1 text-white/60"><span className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" /> Libre</div>
            <div className="flex items-center gap-1 text-white/60"><span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: accent }} /> En uso</div>
          </div>
        </div>

        {/* Right — schedule */}
        <div className="flex-1 rounded-lg border border-white/5 bg-white/[0.02] p-2 flex flex-col overflow-hidden">
          <div className="flex items-center justify-between mb-1.5">
            <p className="text-[10px] font-bold text-white">Agenda · Hoy</p>
            <div className="flex items-center gap-1 rounded-md bg-white/5 px-1.5 py-0.5 text-[8px] font-bold text-white/70">
              <Timer className="h-2.5 w-2.5" /> On-time 94%
            </div>
          </div>
          <div className="flex flex-col gap-1 flex-1">
            {APPOINTMENTS.map((a) => {
              const color = a.status === "done" ? "#22c55e" : a.status === "active" ? accent : "#64748b";
              return (
                <div
                  key={a.time + a.dock}
                  className={`flex items-center gap-2 rounded-md border px-2 py-1.5 ${
                    a.status === "active" ? "border-[#EAB308]/40" : "border-white/5"
                  }`}
                  style={{ backgroundColor: a.status === "active" ? `${accent}10` : "transparent" }}
                >
                  <span className="text-[10px] font-extrabold w-10 shrink-0" style={{ color }}>
                    {a.time}
                  </span>
                  <span className="rounded px-1 py-0.5 text-[8px] font-bold" style={{ backgroundColor: `${color}20`, color }}>
                    {a.dock}
                  </span>
                  <span className="flex-1 text-[9px] font-semibold text-white/80 truncate">{a.supplier}</span>
                  {a.status === "active" ? (
                    <ArrowRight className="h-3 w-3" style={{ color }} />
                  ) : a.status === "done" ? (
                    <CheckCircle2 className="h-3 w-3" style={{ color }} />
                  ) : (
                    <Circle className="h-3 w-3 text-white/20" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Frame>
  );
}

/* ── Dispatcher ────────────────────────────────────────────── */

export function NahuiIndustryMockup({ id }: { id: string }) {
  switch (id) {
    case "ultima-milla":
      return <UltimaMillaMockup />;
    case "3pl":
      return <ThreePLMockup />;
    case "retail":
      return <RetailMockup />;
    case "distribucion":
      return <DistribucionMockup />;
    case "ecommerce":
      return <EcommerceMockup />;
    case "manufactura":
      return <ManufacturaMockup />;
    default:
      return <UltimaMillaMockup />;
  }
}
