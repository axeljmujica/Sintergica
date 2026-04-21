"use client";

import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";
import {
  LayoutDashboard,
  Calendar,
  Settings,
  Users,
  Truck,
  MapPin,
  Search,
  Bell,
  CheckCircle2,
  Navigation,
  Plus,
  Minus,
  Eye,
  Pencil,
  Trash2,
  Package
} from "lucide-react";

const SIDEBAR_MENUS = [
  {
    title: "Operaciones",
    items: [
      { icon: LayoutDashboard, label: "Dashboard", active: false },
      { icon: MapPin, label: "Rutas", active: true },
      { icon: Calendar, label: "Programación", active: false },
      { icon: Package, label: "Órdenes", active: false },
    ],
  },
  {
    title: "Recursos",
    items: [
      { icon: Users, label: "Conductores", active: false },
      { icon: Truck, label: "Vehículos", active: false },
    ],
  },
];

const ROUTE_POINTS = [
  { id: "A", label: "CEDIS Central Sur", customer: "Carga Inicial", status: "completed" },
  { id: "B", label: "Corporativo Polanco", customer: "Entrega #1024", status: "active" },
  { id: "C", label: "Sucursal Condesa", customer: "Entrega #1025", status: "pending" },
  { id: "D", label: "Lomas de Chapultepec", customer: "Entrega #1026", status: "pending" },
  { id: "E", label: "Interlomas", customer: "Entrega #1027", status: "pending" },
];

const MAP_POINTS = [
  { id: "A", left: "25%", top: "75%", status: "completed" },
  { id: "B", left: "45%", top: "50%", status: "active" },
  { id: "C", left: "55%", top: "65%", status: "pending" },
  { id: "D", left: "70%", top: "40%", status: "pending" },
  { id: "E", left: "80%", top: "25%", status: "pending" },
];

export function NahuiDashboardMockup() {
  const shouldReduce = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <div className="rounded-2xl border border-brand-white/10 bg-[#090d1a] shadow-2xl backdrop-blur-xl overflow-hidden flex flex-col h-[450px] sm:h-[600px] w-full max-w-[1000px] mx-auto">
        {/* App Top Bar */}
        <div className="flex h-12 items-center justify-between border-b border-brand-white/10 bg-[#0d101e] px-4 shrink-0">
          <div className="flex items-center gap-4">
            {/* Mac dots */}
            <div className="flex items-center gap-1.5 mr-2">
              <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
              <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
              <span className="h-3 w-3 rounded-full bg-[#28C840]" />
            </div>
            <div className="hidden sm:flex items-center gap-2 rounded bg-brand-midnight/5 px-2 py-1.5 text-[11px] font-medium text-brand-white">
              <div className="flex h-4 w-4 items-center justify-center rounded bg-brand-accent/20 text-brand-accent">
                <Truck className="h-2.5 w-2.5" />
              </div>
              Nahui Ops
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button aria-label="Notificaciones del sistema" className="hidden sm:flex items-center justify-center h-6 w-6 rounded bg-brand-accent/10 text-brand-accent hover:bg-brand-accent/20 transition-colors">
              <CheckCircle2 className="h-3.5 w-3.5" />
            </button>
            <button aria-label="Ver alertas" className="text-brand-white/50 hover:text-brand-white transition-colors">
              <Bell className="h-4 w-4" />
            </button>
            <button aria-label="Ajustes" className="text-brand-white/50 hover:text-brand-white transition-colors">
              <Settings className="h-4 w-4" />
            </button>
            <div className="hidden sm:flex items-center gap-2 rounded-full bg-brand-midnight/5 py-1 pl-1 pr-3 border border-brand-white/10">
              <div className="h-5 w-5 rounded-full bg-brand-accent/20 flex items-center justify-center">
                <Truck className="h-3 w-3 text-brand-accent" />
              </div>
              <span className="text-[11px] font-medium text-brand-white/70">Nahui Logistics</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Left Sidebar */}
          <div className="hidden md:flex w-48 flex-col bg-[#0d101e]/60 border-r border-brand-white/10 p-3 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <button className="mb-6 flex w-full items-center justify-center gap-2 rounded-lg bg-brand-accent py-2 text-xs font-semibold text-brand-midnight hover:bg-brand-accent/90 transition-colors">
              <Plus className="h-4 w-4" />
              Crear orden
            </button>

            {SIDEBAR_MENUS.map(section => (
              <div key={section.title} className="mb-6">
                <h4 className="mb-2 px-2 text-[10px] font-proxima font-semibold uppercase tracking-wider text-brand-white/40">
                  {section.title}
                </h4>
                <div className="flex flex-col gap-0.5">
                  {section.items.map(item => (
                    <button
                      key={item.label}
                      className={`flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-xs font-medium transition-colors ${
                        item.active
                          ? "bg-brand-accent/10 text-brand-accent"
                          : "text-brand-white/70 hover:bg-brand-white/5 hover:text-brand-white"
                      }`}
                    >
                      <item.icon className="h-4 w-4" />
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Map Area */}
          <div className="relative flex-1 bg-[#090a18] overflow-hidden">
            {/* SVG Grayscale city map */}
            <svg className="absolute inset-0 h-full w-full" aria-hidden="true" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
              {/* Base */}
              <rect width="400" height="300" fill="#090a18"/>
              {/* City blocks */}
              <rect x="0" y="0" width="80" height="90" fill="#101d2b" rx="1"/>
              <rect x="110" y="0" width="60" height="60" fill="#101d2b" rx="1"/>
              <rect x="200" y="0" width="55" height="45" fill="#101d2b" rx="1"/>
              <rect x="285" y="0" width="115" height="60" fill="#101d2b" rx="1"/>
              <rect x="0" y="130" width="70" height="80" fill="#101d2b" rx="1"/>
              <rect x="110" y="125" width="50" height="60" fill="#101d2b" rx="1"/>
              <rect x="195" y="120" width="60" height="55" fill="#101d2b" rx="1"/>
              <rect x="285" y="110" width="115" height="70" fill="#101d2b" rx="1"/>
              <rect x="0" y="240" width="80" height="60" fill="#101d2b" rx="1"/>
              <rect x="110" y="225" width="80" height="75" fill="#101d2b" rx="1"/>
              <rect x="225" y="230" width="55" height="70" fill="#101d2b" rx="1"/>
              <rect x="310" y="215" width="90" height="85" fill="#101d2b" rx="1"/>
              {/* Secondary streets */}
              <line x1="90" y1="0" x2="90" y2="300" stroke="#16253a" strokeWidth="1.5"/>
              <line x1="180" y1="0" x2="180" y2="300" stroke="#16253a" strokeWidth="1.5"/>
              <line x1="270" y1="0" x2="270" y2="300" stroke="#16253a" strokeWidth="1.5"/>
              <line x1="360" y1="0" x2="360" y2="300" stroke="#16253a" strokeWidth="1"/>
              <line x1="0" y1="90" x2="400" y2="90" stroke="#16253a" strokeWidth="1.5"/>
              <line x1="0" y1="185" x2="400" y2="185" stroke="#16253a" strokeWidth="1.5"/>
              <line x1="0" y1="210" x2="400" y2="210" stroke="#13202e" strokeWidth="1"/>
              <line x1="135" y1="0" x2="135" y2="300" stroke="#13202e" strokeWidth="1"/>
              <line x1="225" y1="0" x2="225" y2="300" stroke="#13202e" strokeWidth="1"/>
              {/* Main avenues */}
              <line x1="0" y1="110" x2="400" y2="110" stroke="#1e3549" strokeWidth="5"/>
              <line x1="0" y1="200" x2="400" y2="200" stroke="#1e3549" strokeWidth="5"/>
              <line x1="100" y1="0" x2="100" y2="300" stroke="#1e3549" strokeWidth="5"/>
              <line x1="275" y1="0" x2="275" y2="300" stroke="#1e3549" strokeWidth="5"/>
              {/* Diagonal road */}
              <line x1="0" y1="90" x2="110" y2="0" stroke="#1a2e42" strokeWidth="3"/>
              {/* Park */}
              <rect x="196" y="115" width="55" height="30" fill="#112419" rx="3"/>
              {/* Roundabout */}
              <circle cx="275" cy="110" r="9" fill="none" stroke="#1e3549" strokeWidth="4"/>
              <circle cx="275" cy="110" r="4" fill="#152231"/>
              {/* Subtle gradient overlay for depth */}
              <defs>
                <radialGradient id="mapVignette" cx="50%" cy="50%" r="70%">
                  <stop offset="0%" stopColor="transparent"/>
                  <stop offset="100%" stopColor="#090a18" stopOpacity="0.4"/>
                </radialGradient>
              </defs>
              <rect width="400" height="300" fill="url(#mapVignette)"/>
            </svg>

            {/* Search overlay */}
            <div className="absolute left-4 top-4 z-10 flex w-[calc(100%-2rem)] sm:w-72 items-center gap-2.5 rounded-xl border border-brand-white/10 bg-[#090d1a]/95 px-3 py-2.5 shadow-xl backdrop-blur-md">
              <Search className="h-4 w-4 text-brand-white/50" />
              <span className="text-xs text-brand-white/50">Buscar por palabra clave...</span>
            </div>

            {/* Floating map tools */}
            <div className="absolute left-4 top-20 z-10 hidden sm:flex flex-col items-center gap-2 rounded-full border border-brand-white/10 bg-[#090d1a]/95 py-2 shadow-xl backdrop-blur-md w-10">
              <button aria-label="Acercar mapa" className="p-1.5 text-brand-white/50 hover:text-brand-white transition-colors"><Plus className="h-4 w-4" /></button>
              <div className="h-px w-6 bg-brand-white/10" />
              <button aria-label="Alejar mapa" className="p-1.5 text-brand-white/50 hover:text-brand-white transition-colors"><Minus className="h-4 w-4" /></button>
              <div className="h-px w-6 bg-brand-white/10" />
              <button aria-label="Navegar" className="p-1.5 text-brand-white/50 hover:text-brand-white transition-colors"><Navigation className="h-4 w-4" /></button>
              <button aria-label="Centrar en ruta" className="p-1.5 text-brand-accent"><MapPin className="h-4 w-4" /></button>
              <button aria-label="Ver detalles" className="p-1.5 text-brand-white/50 hover:text-brand-white transition-colors"><Eye className="h-4 w-4" /></button>
            </div>

            {/* SVG Route */}
            <svg className="absolute inset-0 h-full w-full pointer-events-none" aria-hidden="true">
              {/* Pending path */}
              <path
                d="M 25% 75% L 45% 50% L 55% 65% L 70% 40% L 80% 25%"
                fill="none"
                className="stroke-brand-white/30"
                strokeWidth="2"
                strokeDasharray="6 4"
              />
              {/* Completed path */}
              <path
                d="M 25% 75% L 45% 50%"
                fill="none"
                className="stroke-[#16A34A]"
                strokeWidth="2.5"
              />
            </svg>

            {/* Map Points */}
            {MAP_POINTS.map((point) => (
              <div
                key={point.id}
                className="absolute flex flex-col items-center -translate-x-1/2 -translate-y-1/2"
                style={{ left: point.left, top: point.top }}
              >
                {point.status === 'completed' ? (
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#16A34A] text-brand-midnight shadow-lg shadow-[#16A34A]/20">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                  </div>
                ) : point.status === 'active' ? (
                  <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-brand-accent text-brand-midnight shadow-lg shadow-brand-accent/30">
                    {!shouldReduce && (
                      <m.span 
                        className="absolute inset-0 rounded-full bg-brand-accent"
                        animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                    <Truck className="h-3.5 w-3.5 relative z-10" />
                  </div>
                ) : (
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#090d1a] border-2 border-brand-white/20 text-brand-white/70 shadow-lg">
                    <span className="text-[9px] font-bold">{point.id}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right Sidebar (Route details) */}
          <div className="hidden lg:flex w-72 flex-col bg-[#0d101e]/80 border-l border-brand-white/10">
            <div className="flex items-center justify-between border-b border-brand-white/10 p-4 bg-[#090d1a]/50">
              <h3 className="text-sm font-proxima font-semibold text-brand-white">Ruta Activa</h3>
              <div className="flex items-center gap-2">
                <button className="rounded bg-brand-accent/10 px-2 py-1 text-[10px] font-semibold text-brand-accent hover:bg-brand-accent/20 transition-colors">
                  Optimizar
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-2.5 p-4 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-6 rounded-full bg-[#16A34A] flex items-center p-0.5">
                    <div className="h-2 w-2 rounded-full bg-white ml-auto" />
                  </div>
                  <span className="text-[11px] text-brand-white/60 font-medium">Múltiples entregas</span>
                </div>
                <button className="flex items-center gap-1 text-[10px] text-brand-white/50 hover:text-brand-white transition-colors">
                  <Plus className="h-3 w-3" />
                  Punto
                </button>
              </div>

              {ROUTE_POINTS.map((rp) => (
                <div
                  key={rp.id}
                  className={`flex items-center gap-3 rounded-xl border p-2.5 transition-colors ${
                    rp.status === 'active' 
                      ? "border-brand-accent/30 bg-brand-accent/5" 
                      : rp.status === 'completed'
                      ? "border-brand-white/10 bg-[#090d1a]/30"
                      : "border-brand-white/10 bg-[#090d1a]/60 hover:border-brand-white/10"
                  }`}
                >
                  {/* Status Indicator */}
                  <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded text-[10px] font-bold ${
                    rp.status === 'completed' ? 'bg-[#16A34A]/20 text-[#16A34A]' :
                    rp.status === 'active' ? 'bg-brand-accent text-brand-midnight' :
                    'bg-brand-white/10 text-brand-white/60'
                  }`}>
                    {rp.id}
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-1 flex-col overflow-hidden">
                    <span className={`truncate text-xs font-semibold ${rp.status === 'completed' ? 'text-brand-white/50 line-through' : 'text-brand-white'}`}>
                      {rp.label}
                    </span>
                    <div className="flex items-center gap-1.5 mt-0.5 text-[10px] text-brand-white/50">
                      {rp.status === 'completed' ? <CheckCircle2 className="h-3 w-3 text-[#16A34A]" /> : <Package className="h-3 w-3" />}
                      <span className="truncate">{rp.customer}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-1 shrink-0">
                    <button aria-label="Editar parada" className="flex h-5 w-5 items-center justify-center rounded bg-brand-white/10 text-brand-white/50 hover:text-brand-white transition-colors">
                      <Pencil className="h-3 w-3" />
                    </button>
                    <button aria-label="Eliminar parada" className="flex h-5 w-5 items-center justify-center rounded bg-[#EF4444]/10 text-[#EF4444] hover:bg-[#EF4444]/20 transition-colors">
                      <Trash2 className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </LazyMotion>
  );
}

