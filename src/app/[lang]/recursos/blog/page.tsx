import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { BlogContent } from "@/components/recursos/BlogContent";

export const metadata: Metadata = {
  title: "Blog | Sintérgica AI — IA Privada para México y LATAM",
  description:
    "Artículos sobre IA empresarial, regulación, transformación digital y el futuro de la inteligencia artificial en México y Latinoamérica.",
};

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-brand-surface dark:bg-brand-midnight">
      <Navbar />
      <main className="flex-1">
        <BlogContent />
      </main>
      <Footer />
    </div>
  );
}
