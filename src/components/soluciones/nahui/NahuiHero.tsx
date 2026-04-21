import { MapPin, Route, PackageCheck } from "lucide-react";
import { NahuiDashboardMockup } from "./ui/NahuiDashboardMockup";

const MICRO_FEATURES = [
  { icon: MapPin, label: "Rastreo en tiempo real" },
  { icon: Route, label: "Optimización de rutas" },
  { icon: PackageCheck, label: "Prueba de entrega digital" },
];

export function NahuiHero() {
  return (
    <section
      className="relative overflow-hidden bg-[#030716]"
      aria-label="Nahui Hero"
    >
      <div className="relative mx-auto w-full max-w-7xl px-6 py-24 pt-32 lg:px-8 text-center flex flex-col items-center">
        <div className="max-w-4xl flex flex-col items-center">
          <span className="inline-flex items-center rounded-full border border-[#53abe6]/25 bg-[#53abe6]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#53abe6]">
            Logística Inteligente
          </span>

          <h1 className="mt-6 font-proxima text-4xl font-extrabold leading-tight text-white md:text-5xl lg:text-6xl text-balance">
            Gestión logística inteligente para operaciones reales.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-white/70 text-balance">
            Trazabilidad operativa, control de ejecución en campo, visibilidad en
            tiempo real y optimización de tu cadena de operaciones. Compatible con
            Lattice para habilitar copilotos de IA en logística.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {MICRO_FEATURES.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.04] px-3 py-1.5 text-sm text-white/60"
              >
                <Icon className="h-4 w-4" />
                {label}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row justify-center">
            <a
              href="https://sales.sintergica.ai/widget/booking/vh6cQRURUU1nU5nslpu4"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#006EFA] px-8 py-3.5 font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0058CC] hover:shadow-lg hover:shadow-[#006EFA]/25"
            >
              Solicitar demo de Nahui →
            </a>
            <a
              href="#capacidades"
              className="inline-flex items-center justify-center rounded-full border border-white/[0.12] px-8 py-3.5 font-semibold text-white transition-colors hover:bg-white/[0.05]"
            >
              Ver capacidades →
            </a>
          </div>
        </div>

        <div className="mt-16 w-full max-w-[1100px]">
          <NahuiDashboardMockup />
        </div>
      </div>
    </section>
  );
}
