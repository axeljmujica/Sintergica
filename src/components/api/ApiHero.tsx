"use client";

import { motion } from "motion/react";
import { Code2 } from "lucide-react";

export function ApiHero() {
  return (
    <section className="relative overflow-hidden bg-brand-surface dark:bg-brand-midnight pb-20 pt-32 sm:pb-32 sm:pt-40">
      {/* Abstract background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-20">
        <div className="absolute h-[600px] w-[600px] rounded-full bg-brand-accent blur-[120px]" />
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-brand-400 blur-[100px]" />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 flex justify-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-accent/20 bg-brand-accent/10 px-4 py-2 text-sm font-semibold text-brand-accent">
              <Code2 className="h-4 w-4" />
              Acceso Programático
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-proxima text-4xl font-extrabold tracking-tight text-brand-midnight dark:text-brand-white sm:text-6xl"
          >
            Conecta tus sistemas a la{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-400">
              inteligencia de Lattice
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-brand-midnight/70 dark:text-brand-white/70"
          >
            Integra los modelos Na&apos;at y Séeb directamente en tus flujos de trabajo actuales mediante nuestra API REST y compatibilidad con el Model Context Protocol (MCP).
          </motion.p>
        </div>
      </div>
    </section>
  );
}
