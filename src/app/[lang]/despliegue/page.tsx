import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { PrivateDeployments } from "@/components/despliegue/PrivateDeployments";

export const metadata: Metadata = {
  title: "Despliegue Privado de IA | Sintérgica AI — On-Premise, VPC y SaaS",
  description:
    "Despliega Lattice en tu propia infraestructura con cero acceso externo. Opciones SaaS, VPC y On-Premise air-gapped. Cumplimiento LFPDPPP garantizado.",
  openGraph: {
    title: "Despliegue Privado de IA | Sintérgica AI",
    description:
      "Despliega Lattice en tu propia infraestructura con cero acceso externo. On-Premise, VPC y SaaS para México y LATAM.",
    url: "https://sintergica.ai/despliegue",
    siteName: "Sintérgica AI",
    locale: "es_MX",
    type: "website",
  },
  alternates: { canonical: "https://sintergica.ai/despliegue" },
  robots: { index: true, follow: true },
};

export default function DesplieguePage() {
  return (
    <div className="min-h-screen bg-brand-surface dark:bg-brand-midnight">
      <Navbar />
      <main>
        <PrivateDeployments />
      </main>
      <Footer />
    </div>
  );
}
