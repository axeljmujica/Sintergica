"use client";

import { motion } from "motion/react";
import { Terminal, Key, Webhook, Zap } from "lucide-react";

const FEATURES = [
  {
    icon: Terminal,
    title: "API REST Full",
    description: "Endpoints documentados para inferencia, manejo de sesiones, gestión de documentos y administración de agentes.",
  },
  {
    icon: Webhook,
    title: "Model Context Protocol (MCP)",
    description: "Soporte nativo para MCP. Permite a Lattice conectarse de forma estandarizada con tus bases de datos, APIs internas y herramientas como Slack, Jira o SAP.",
  },
  {
    icon: Key,
    title: "Gestión de Tokens",
    description: "Si no tienes infraestructura para alojar el modelo, puedes consumir Na'at y Séeb pagando por token de uso, manteniendo la privacidad.",
  },
  {
    icon: Zap,
    title: "Baja Latencia",
    description: "Los modelos Séeb (SLMs) están optimizados para inferencia rápida, ideal para operaciones agénticas y respuestas en tiempo real.",
  },
];

export function ApiFeatures() {
  return (
    <section className="bg-brand-surface dark:bg-brand-midnight py-24 sm:py-32">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="font-proxima text-3xl font-bold tracking-tight text-brand-midnight dark:text-brand-white sm:text-4xl">
            Desarrollador a Desarrollador
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-brand-midnight/70 dark:text-brand-white/70">
            Arquitectura abierta pensada para integrarse sin fricción en tu stack tecnológico actual.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex flex-col rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-white dark:bg-brand-midnight/[0.02] p-6 hover:bg-brand-white/[0.04] transition-colors"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-accent/20">
                <feature.icon className="h-5 w-5 text-brand-accent" />
              </div>
              <h3 className="mb-2 text-lg font-proxima font-semibold text-brand-midnight dark:text-brand-white">{feature.title}</h3>
              <p className="text-sm text-brand-midnight/70 dark:text-brand-white/70 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
