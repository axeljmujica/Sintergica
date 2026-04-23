"use client";

import { Calendar, Phone, FileText, Megaphone, Webhook, Workflow, FileCode, CreditCard } from "lucide-react";
import {
  SiWhatsapp,
  SiMercadopago,
  SiStripe,
  SiPaypal,
  SiMeta,
  SiGoogleads,
  SiWordpress,
  SiGooglecalendar,
  SiZapier,
} from "react-icons/si";

const INTEGRATIONS = [
  { name: "WhatsApp Business", Icon: SiWhatsapp,       color: "#25D366" },
  { name: "Meta Ads",          Icon: SiMeta,           color: "#0866FF" },
  { name: "Google Ads",        Icon: SiGoogleads,      color: "#4285F4" },
  { name: "Mercado Pago",      Icon: SiMercadopago,    color: "#00B1EA" },
  { name: "Stripe",            Icon: SiStripe,         color: "#635BFF" },
  { name: "PayPal",            Icon: SiPaypal,         color: "#0070BA" },
  { name: "Google Calendar",   Icon: SiGooglecalendar, color: "#4285F4" },
  { name: "WordPress",         Icon: SiWordpress,      color: "#21759B" },
  { name: "Zapier / APIs",     Icon: SiZapier,         color: "#FF4A00" },
  { name: "Telefonía VoIP",    Icon: Phone,            color: undefined },
  { name: "Email SMTP/IMAP",   Icon: Megaphone,        color: undefined },
  { name: "Facturación CFDI",  Icon: FileText,         color: undefined },
  { name: "Webhooks",          Icon: Webhook,          color: undefined },
  { name: "Flows / Workflows", Icon: Workflow,         color: undefined },
  { name: "Lattice Platform",  Icon: FileCode,         color: undefined },
  { name: "Cobros recurrentes",Icon: CreditCard,       color: undefined },
] as const;

export function SalesHubTrustBar() {
  const items = [...INTEGRATIONS, ...INTEGRATIONS];

  return (
    <section
      className="relative overflow-hidden border-y border-slate-200 bg-white"
      aria-label="Integraciones nativas de SalesHub"
    >
      <div className="py-8">
        <p className="mb-6 text-center text-[13px] font-medium uppercase tracking-[0.1em] text-slate-500">
          Integraciones nativas — Pagos locales · WhatsApp · Ads · Calendarios · Lattice
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
