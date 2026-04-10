"use client";

import { useRef, useState } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { Send } from "lucide-react";

interface ContactFormProps {
  variant: "full" | "compact" | "diagnostic";
}

const INTERES_OPTIONS = [
  "Cliente",
  "Inversionista",
  "Universidad",
  "Gobierno",
  "Prensa",
  "Alianza",
];

const INDUSTRIA_OPTIONS = [
  "Legal",
  "Gobierno",
  "Log\u00edstica y Com. Ext.",
  "Energia",
  "Salud",
  "Financiero",
  "Otro",
];

const EQUIPO_OPTIONS = ["1-10", "11-50", "51-200", "200+"];

const inputClasses =
  "w-full rounded-lg border border-brand-midnight/10 bg-brand-white dark:bg-brand-midnight px-4 py-3 text-sm text-brand-midnight placeholder:text-brand-midnight/40 transition-colors focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent/50 dark:border-brand-white/10 dark:text-brand-white dark:placeholder:text-brand-white/35";

const labelClasses = "mb-1.5 block text-sm font-medium text-brand-midnight/70 dark:text-brand-white/70";

export function ContactForm({ variant }: ContactFormProps) {
  const ref = useRef<HTMLFormElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduce = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-xl border border-success-600/20 bg-success-600/10 p-8 text-center">
        <p className="text-lg font-semibold text-success-600">
          Mensaje enviado
        </p>
        <p className="mt-2 text-sm text-brand-midnight/60 dark:text-brand-white/60">
          Nuestro equipo se pondrá en contacto contigo pronto.
        </p>
      </div>
    );
  }

  return (
    <LazyMotion features={domAnimation}>
    <m.form
      ref={ref}
      onSubmit={handleSubmit}
      initial={shouldReduce ? false : { opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: shouldReduce ? 0 : 0.5 }}
      className="rounded-xl border border-brand-midnight/10 bg-brand-white dark:bg-brand-midnight/40 p-8 space-y-5 dark:border-brand-white/10"
    >
      {/* Name + Company row */}
      {variant !== "compact" ? (
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className={labelClasses}>Nombre</label>
            <input
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              required
              className={inputClasses}
            />
          </div>
          <div>
            <label className={labelClasses}>Empresa</label>
            <input
              type="text"
              name="empresa"
              placeholder="Tu empresa"
              className={inputClasses}
            />
          </div>
        </div>
      ) : (
        <div>
          <label className={labelClasses}>Nombre</label>
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            required
            className={inputClasses}
          />
        </div>
      )}

      {/* Email + Phone */}
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClasses}>Email</label>
          <input
            type="email"
            name="email"
            placeholder="tu@empresa.com"
            required
            className={inputClasses}
          />
        </div>
        {variant !== "compact" && (
          <div>
            <label className={labelClasses}>Teléfono</label>
            <input
              type="tel"
              name="telefono"
              placeholder="+52 ..."
              className={inputClasses}
            />
          </div>
        )}
      </div>

      {/* Full variant: Interest type */}
      {variant === "full" && (
        <div>
          <label className={labelClasses}>Tipo de interés</label>
          <select name="interes" aria-label="Tipo de interés" className={inputClasses} defaultValue="">
            <option value="" disabled>
              Selecciona una opción
            </option>
            {INTERES_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Diagnostic variant: Industry + Team size */}
      {variant === "diagnostic" && (
        <>
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={labelClasses}>Industria</label>
              <select name="industria" aria-label="Industria" className={inputClasses} defaultValue="">
                <option value="" disabled>
                  Selecciona tu industria
                </option>
                {INDUSTRIA_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClasses}>Tamaño de equipo</label>
              <select name="equipo" aria-label="Tamaño de equipo" className={inputClasses} defaultValue="">
                <option value="" disabled>
                  Selecciona
                </option>
                {EQUIPO_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className={labelClasses}>
              ¿Qué proceso te consume más tiempo?
            </label>
            <textarea
              name="proceso"
              rows={3}
              placeholder="Describe brevemente el proceso que quieres optimizar..."
              className={inputClasses}
            />
          </div>
        </>
      )}

      {/* Message (full and compact) */}
      {(variant === "full" || variant === "compact") && (
        <div>
          <label className={labelClasses}>Mensaje</label>
          <textarea
            name="mensaje"
            rows={4}
            placeholder="Cuéntanos sobre tu proyecto..."
            className={inputClasses}
          />
        </div>
      )}

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-accent px-7 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-lg hover:shadow-brand-accent/25 sm:w-auto"
      >
        <Send className="h-4 w-4" />
        {variant === "diagnostic"
          ? "Solicitar Diagnóstico Inteligente"
          : "Enviar mensaje"}
      </button>
    </m.form>
    </LazyMotion>
  );
}
