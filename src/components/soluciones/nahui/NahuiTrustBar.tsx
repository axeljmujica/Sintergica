"use client";

import { Truck, Warehouse, Package, FileText, Database, Plug, ShoppingCart, CreditCard } from "lucide-react";
import {
  SiSap,
  SiShopify,
  SiWhatsapp,
  SiMercadopago,
  SiGooglemaps,
  SiWaze,
} from "react-icons/si";

const INTEGRATIONS = [
  { name: "SAP",              Icon: SiSap,          color: "#0070F2" },
  { name: "Shopify",          Icon: SiShopify,      color: "#96BF48" },
  { name: "Mercado Pago",     Icon: SiMercadopago,  color: "#00B1EA" },
  { name: "Google Maps",      Icon: SiGooglemaps,   color: "#4285F4" },
  { name: "Waze",             Icon: SiWaze,         color: "#33CCFF" },
  { name: "WhatsApp Business",Icon: SiWhatsapp,     color: "#25D366" },
  { name: "WMS / Almacén",    Icon: Warehouse,      color: undefined },
  { name: "ERPs",             Icon: Database,       color: undefined },
  { name: "E-commerce",       Icon: ShoppingCart,   color: undefined },
  { name: "Facturación CFDI", Icon: FileText,       color: undefined },
  { name: "Telemetría GPS",   Icon: Truck,          color: undefined },
  { name: "TPV / Cobros",     Icon: CreditCard,     color: undefined },
  { name: "Paqueterías",      Icon: Package,        color: undefined },
  { name: "APIs REST",        Icon: Plug,           color: undefined },
] as const;

export function NahuiTrustBar() {
  const items = [...INTEGRATIONS, ...INTEGRATIONS];

  return (
    <section
      className="relative overflow-hidden border-y border-slate-200 bg-white"
      aria-label="Integraciones compatibles"
    >
      <div className="py-8">
        <p className="mb-6 text-center text-[13px] font-medium uppercase tracking-[0.1em] text-slate-500">
          Integraciones nativas — ERP · WMS · E-commerce · Facturación SAT · App móvil · Lattice
        </p>

        <div className="relative mask-fade-x">
          <div className="flex w-max animate-marquee gap-12 hover:[animation-play-state:paused]">
            {items.map(({ name, Icon, color }, i) => (
              <div
                key={`${name}-${i}`}
                className="group flex shrink-0 cursor-default items-center gap-2"
              >
                <Icon
                  className="h-6 w-6 opacity-60 transition-opacity duration-200 group-hover:opacity-100 md:h-7 md:w-7"
                  style={color ? { color } : undefined}
                />
                <span className="hidden text-xs font-medium text-slate-500 transition-colors duration-200 group-hover:text-slate-900 sm:inline">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
