"use client";

import { useEffect } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import { Clock, MessageSquare, Sparkles, ArrowRight, CheckCircle } from "lucide-react";
import { useLocale } from "@/i18n/DictionaryProvider";

const T = {
  es: {
    badge: "Sin costo, sin compromiso",
    headline: "Agenda tu Diagnóstico de IA Gratuito",
    subheadline1: "Descubre en 30 minutos qué procesos de tu empresa pueden automatizarse con",
    subheadlineBrand: "Sintérgica AI",
    subheadline2: ". Recibe un plan de implementación personalizado con ROI estimado.",
    valueProp1: "100% gratuito",
    valueProp2: "Sin tarjeta de crédito",
    valueProp3: "Resultados en 24h",
    diagTitle: "¿Qué incluye tu diagnóstico?",
    feat1Title: "Análisis de procesos",
    feat1Desc: "Identificamos tareas repetitivas y cuellos de botella en tu operación actual.",
    feat2Title: "Oportunidades de IA",
    feat2Desc: "Te mostramos casos de uso específicos para tu industria con ejemplos reales.",
    feat3Title: "Roadmap de implementación",
    feat3Desc: "Recibe un plan de 90 días con hitos claros y estimación de impacto.",
    testimonialQuote: "En 30 minutos identificaron 12 procesos que podíamos automatizar. El ROI proyectado fue de 340% en el primer año.",
    testimonialName: "María Rodríguez",
    testimonialRole: "Directora de Operaciones, Grupo Industrial MX",
    calendarTitle: "Calendario de diagnóstico Sintérgica AI",
    trustTitle: "Empresas que confían en nosotros",
    faqTitle: "Preguntas frecuentes",
    faqs: [
      { q: "¿Cuánto dura la sesión?", a: "La sesión tiene una duración de 30 minutos. Valoramos tu tiempo, así que comenzamos puntualmente y cubrimos todos los puntos clave de manera eficiente." },
      { q: "¿Necesito preparar algo?", a: "No es necesario. Solo ten a la mano información básica sobre tus procesos actuales que te gustaría mejorar. Nosotros hacemos las preguntas correctas." },
      { q: "¿Hay compromiso de compra?", a: "Absolutamente ninguno. El diagnóstico es 100% gratuito y sin compromiso. Recibirás tu análisis y decide tú si quieres continuar con nosotros." },
      { q: "¿Quién conducirá la sesión?", a: "Un especialista en transformación digital con experiencia en tu industria. No son vendedores, son consultores técnicos." },
    ],
  },
  en: {
    badge: "Free, no commitment",
    headline: "Book Your Free AI Diagnosis",
    subheadline1: "Discover in 30 minutes which processes in your company can be automated with",
    subheadlineBrand: "Sintérgica AI",
    subheadline2: ". Receive a personalized implementation plan with estimated ROI.",
    valueProp1: "100% free",
    valueProp2: "No credit card required",
    valueProp3: "Results in 24h",
    diagTitle: "What does your diagnosis include?",
    feat1Title: "Process analysis",
    feat1Desc: "We identify repetitive tasks and bottlenecks in your current operation.",
    feat2Title: "AI opportunities",
    feat2Desc: "We show you specific use cases for your industry with real examples.",
    feat3Title: "Implementation roadmap",
    feat3Desc: "Receive a 90-day plan with clear milestones and impact estimation.",
    testimonialQuote: "In 30 minutes they identified 12 processes we could automate. The projected ROI was 340% in the first year.",
    testimonialName: "María Rodríguez",
    testimonialRole: "Director of Operations, Grupo Industrial MX",
    calendarTitle: "Sintérgica AI diagnosis calendar",
    trustTitle: "Companies that trust us",
    faqTitle: "Frequently asked questions",
    faqs: [
      { q: "How long is the session?", a: "The session lasts 30 minutes. We value your time, so we start on time and cover all key points efficiently." },
      { q: "Do I need to prepare anything?", a: "No preparation needed. Just have basic information about your current processes you'd like to improve. We ask the right questions." },
      { q: "Is there a purchase commitment?", a: "Absolutely none. The diagnosis is 100% free and with no commitment. You'll receive your analysis and decide if you want to continue with us." },
      { q: "Who will lead the session?", a: "A digital transformation specialist with experience in your industry. They are not salespeople — they are technical consultants." },
    ],
  },
  "pt-br": {
    badge: "Sem custo, sem compromisso",
    headline: "Agende seu Diagnóstico de IA Gratuito",
    subheadline1: "Descubra em 30 minutos quais processos da sua empresa podem ser automatizados com a",
    subheadlineBrand: "Sintérgica AI",
    subheadline2: ". Receba um plano de implementação personalizado com ROI estimado.",
    valueProp1: "100% gratuito",
    valueProp2: "Sem cartão de crédito",
    valueProp3: "Resultados em 24h",
    diagTitle: "O que inclui seu diagnóstico?",
    feat1Title: "Análise de processos",
    feat1Desc: "Identificamos tarefas repetitivas e gargalos na sua operação atual.",
    feat2Title: "Oportunidades de IA",
    feat2Desc: "Mostramos casos de uso específicos para sua indústria com exemplos reais.",
    feat3Title: "Roadmap de implementação",
    feat3Desc: "Receba um plano de 90 dias com marcos claros e estimativa de impacto.",
    testimonialQuote: "Em 30 minutos identificaram 12 processos que podíamos automatizar. O ROI projetado foi de 340% no primeiro ano.",
    testimonialName: "María Rodríguez",
    testimonialRole: "Diretora de Operações, Grupo Industrial MX",
    calendarTitle: "Calendário de diagnóstico Sintérgica AI",
    trustTitle: "Empresas que confiam em nós",
    faqTitle: "Perguntas frequentes",
    faqs: [
      { q: "Quanto tempo dura a sessão?", a: "A sessão tem duração de 30 minutos. Valorizamos seu tempo, por isso começamos pontualmente e cobrimos todos os pontos-chave de forma eficiente." },
      { q: "Preciso preparar algo?", a: "Não é necessário. Apenas tenha em mãos informações básicas sobre seus processos atuais que gostaria de melhorar. Nós fazemos as perguntas certas." },
      { q: "Há compromisso de compra?", a: "Absolutamente nenhum. O diagnóstico é 100% gratuito e sem compromisso. Você receberá sua análise e decide se quer continuar conosco." },
      { q: "Quem conduzirá a sessão?", a: "Um especialista em transformação digital com experiência na sua indústria. Não são vendedores, são consultores técnicos." },
    ],
  },
} as const;

export default function DiagnosticoPage() {
  const locale = useLocale();
  const t = T[locale] ?? T.es;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sales.sintergica.ai/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-brand-surface text-brand-midnight dark:bg-brand-midnight dark:text-brand-white">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 via-transparent to-brand-accent-light/5 dark:from-brand-accent/10 dark:to-transparent" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-accent/10 px-4 py-2 text-sm font-medium text-brand-accent-dark dark:text-brand-accent mb-6">
                <Sparkles className="h-4 w-4" />
                <span>{t.badge}</span>
              </div>

              {/* Headline */}
              <h1 className="font-proxima font-bold text-4xl md:text-5xl lg:text-6xl text-brand-midnight dark:text-brand-white mb-6">
                {t.headline}
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-brand-midnight/70 dark:text-brand-white/70 mb-8 leading-relaxed">
                {t.subheadline1}{" "}
                <strong className="text-brand-accent-dark dark:text-brand-accent">{t.subheadlineBrand}</strong>
                {t.subheadline2}
              </p>

              {/* Value props */}
              <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm text-brand-midnight/70 dark:text-brand-white/60 mb-12">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>{t.valueProp1}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>{t.valueProp2}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>{t.valueProp3}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calendar Section */}
        <section className="pb-16 md:pb-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
              <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
                {/* Left: What to expect */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="rounded-2xl bg-brand-surface dark:bg-brand-white/5 p-6 md:p-8">
                    <h2 className="font-proxima font-bold text-2xl text-brand-midnight dark:text-brand-white mb-6">
                      {t.diagTitle}
                    </h2>

                    <div className="space-y-5">
                      <div className="flex gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent/10">
                          <MessageSquare className="h-5 w-5 text-brand-accent" />
                        </div>
                        <div>
                          <h3 className="font-proxima font-semibold text-brand-midnight dark:text-brand-white mb-1">
                            {t.feat1Title}
                          </h3>
                          <p className="text-sm text-brand-midnight/70 dark:text-brand-white/60">
                            {t.feat1Desc}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent/10">
                          <Sparkles className="h-5 w-5 text-brand-accent" />
                        </div>
                        <div>
                          <h3 className="font-proxima font-semibold text-brand-midnight dark:text-brand-white mb-1">
                            {t.feat2Title}
                          </h3>
                          <p className="text-sm text-brand-midnight/70 dark:text-brand-white/60">
                            {t.feat2Desc}
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-accent/10">
                          <Clock className="h-5 w-5 text-brand-accent" />
                        </div>
                        <div>
                          <h3 className="font-proxima font-semibold text-brand-midnight dark:text-brand-white mb-1">
                            {t.feat3Title}
                          </h3>
                          <p className="text-sm text-brand-midnight/70 dark:text-brand-white/60">
                            {t.feat3Desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Testimonial mini */}
                  <div className="rounded-2xl bg-gradient-to-br from-brand-accent/10 to-brand-accent-light/10 dark:from-brand-accent/5 dark:to-brand-accent-light/5 p-6">
                    <blockquote className="text-sm text-brand-midnight/80 dark:text-brand-white/80 italic mb-4">
                      &ldquo;{t.testimonialQuote}&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-brand-accent/20 flex items-center justify-center text-sm font-semibold text-brand-accent">
                        MR
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-brand-midnight dark:text-brand-white">
                          {t.testimonialName}
                        </p>
                        <p className="text-xs text-brand-midnight/60 dark:text-brand-white/60">
                          {t.testimonialRole}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right: Calendar Widget */}
                <div className="lg:col-span-3">
                  <div className="rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-white dark:bg-brand-navy p-1 shadow-xl shadow-brand-midnight/5">
                    <div className="rounded-xl overflow-hidden bg-white dark:bg-brand-midnight">
                      <iframe
                      src="https://sales.sintergica.ai/widget/booking/vh6cQRURUU1nU5nslpu4"
                      className="w-full min-h-[700px] border-0"
                      scrolling="no"
                      id="UoWffsid9YlEl4fD40BX_1773406834839"
                      title={t.calendarTitle}
                    />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="border-t border-brand-midnight/5 dark:border-brand-white/5 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-brand-midnight/60 dark:text-brand-white/60 uppercase tracking-wider">
                {t.trustTitle}
              </p>
            </div>

            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50">
              {["Empresa 1", "Empresa 2", "Empresa 3", "Empresa 4", "Empresa 5"].map((name, i) => (
                <div
                  key={i}
                  className="h-8 w-32 rounded bg-brand-surface dark:bg-brand-white/10 flex items-center justify-center text-xs text-brand-midnight/40 dark:text-brand-white/40 font-medium"
                >
                  {name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Mini Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="font-proxima font-bold text-3xl text-center text-brand-midnight dark:text-brand-white mb-12">
              {t.faqTitle}
            </h2>

            <div className="space-y-6">
              {t.faqs.map((item, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-brand-midnight/5 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-white/5 p-6"
                >
                  <h3 className="font-proxima font-semibold text-brand-midnight dark:text-brand-white mb-2 flex items-center gap-2">
                    <ArrowRight className="h-4 w-4 text-brand-accent shrink-0" />
                    {item.q}
                  </h3>
                  <p className="text-sm text-brand-midnight/70 dark:text-brand-white/60 pl-6">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
