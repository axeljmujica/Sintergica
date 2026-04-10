import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Términos de Uso | Sintérgica AI — IA Privada para México y LATAM",
  description:
    "Términos y condiciones de uso del sitio web y servicios de Sintérgica AI.",
};

const T = {
  es: {
    title: "Términos de Uso",
    lastUpdated: "Última actualización: marzo 2026",
    s1Title: "1. Aceptación de los términos",
    s1Body: "Al acceder y utilizar el sitio web de Sintérgica AI (en adelante, \u201cel Sitio\u201d), usted acepta quedar sujeto a estos Términos de Uso. Si no está de acuerdo con alguno de estos términos, le solicitamos abstenerse de utilizar el Sitio.",
    s2Title: "2. Descripción del servicio",
    s2Body: "Sintérgica AI ofrece servicios de inteligencia artificial empresarial, incluyendo pero no limitado a: la plataforma Lattice, servicios de consultoría, implementación y capacitación. Los detalles específicos de cada servicio se acuerdan mediante contratos individuales.",
    s3Title: "3. Propiedad intelectual",
    s3Body: "Todo el contenido del Sitio, incluyendo pero no limitado a textos, gráficos, logotipos, iconos, imágenes, clips de audio, descargas digitales, compilaciones de datos y software, es propiedad de Sintérgica AI o de sus proveedores de contenido y está protegido por las leyes de propiedad intelectual aplicables en México e internacionalmente.",
    s4Title: "4. Uso aceptable",
    s4Body: "Usted se compromete a utilizar el Sitio únicamente para fines lícitos y de acuerdo con estos Términos. Queda prohibido utilizar el Sitio de cualquier manera que pueda dañar, deshabilitar, sobrecargar o deteriorar el Sitio o interferir con el uso de cualquier otra parte.",
    s5Title: "5. Limitación de responsabilidad",
    s5Body1: "La información proporcionada en el Sitio se ofrece \u201ctal cual\u201d sin garantías de ningún tipo, ya sean expresas o implícitas. Sintérgica AI no garantiza la exactitud, integridad o utilidad de cualquier información en el Sitio.",
    s5Body2: "En ningún caso Sintérgica AI será responsable por daños directos, indirectos, incidentales, consecuentes, especiales o ejemplares que resulten del uso o la imposibilidad de uso del Sitio.",
    s6Title: "6. Confidencialidad",
    s6Body: "Sintérgica AI se compromete a mantener la confidencialidad de toda la información proporcionada por sus clientes en el marco de los servicios contratados, de acuerdo con los términos establecidos en los contratos individuales.",
    s7Title: "7. Modificaciones",
    s7Body: "Sintérgica AI se reserva el derecho de modificar estos Términos de Uso en cualquier momento. Las modificaciones serán efectivas inmediatamente después de su publicación en el Sitio. Su uso continuado del Sitio después de la publicación de las modificaciones constituirá su aceptación de las mismas.",
    s8Title: "8. Ley aplicable y jurisdicción",
    s8Body: "Estos Términos de Uso se regirán e interpretarán de acuerdo con las leyes vigentes en México. Cualquier controversia derivada de estos términos será sometida a la jurisdicción de los tribunales competentes de la Ciudad de México.",
    s9Title: "9. Contacto",
    s9Body: "Para cualquier pregunta o comentario sobre estos Términos de Uso, puede contactarnos en:",
  },
  en: {
    title: "Terms of Use",
    lastUpdated: "Last updated: March 2026",
    s1Title: "1. Acceptance of terms",
    s1Body: "By accessing and using the Sintérgica AI website (hereinafter, \u201cthe Site\u201d), you agree to be bound by these Terms of Use. If you do not agree with any of these terms, please refrain from using the Site.",
    s2Title: "2. Description of service",
    s2Body: "Sintérgica AI offers enterprise artificial intelligence services, including but not limited to: the Lattice platform, consulting, implementation, and training services. The specific details of each service are agreed upon through individual contracts.",
    s3Title: "3. Intellectual property",
    s3Body: "All content on the Site, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, data compilations, and software, is the property of Sintérgica AI or its content providers and is protected by applicable intellectual property laws in Mexico and internationally.",
    s4Title: "4. Acceptable use",
    s4Body: "You agree to use the Site only for lawful purposes and in accordance with these Terms. You are prohibited from using the Site in any way that could damage, disable, overburden, or impair the Site or interfere with any other party\u2019s use.",
    s5Title: "5. Limitation of liability",
    s5Body1: "The information provided on the Site is offered \u201cas is\u201d without warranties of any kind, whether express or implied. Sintérgica AI does not guarantee the accuracy, completeness, or usefulness of any information on the Site.",
    s5Body2: "In no event shall Sintérgica AI be liable for direct, indirect, incidental, consequential, special, or exemplary damages resulting from the use or inability to use the Site.",
    s6Title: "6. Confidentiality",
    s6Body: "Sintérgica AI commits to maintaining the confidentiality of all information provided by its clients within the scope of contracted services, in accordance with the terms established in individual contracts.",
    s7Title: "7. Modifications",
    s7Body: "Sintérgica AI reserves the right to modify these Terms of Use at any time. Modifications will be effective immediately upon publication on the Site. Your continued use of the Site after the publication of modifications will constitute your acceptance of them.",
    s8Title: "8. Governing law and jurisdiction",
    s8Body: "These Terms of Use shall be governed by and construed in accordance with the laws of Mexico. Any dispute arising from these terms shall be submitted to the jurisdiction of the competent courts of Mexico City.",
    s9Title: "9. Contact",
    s9Body: "For any questions or comments about these Terms of Use, you may contact us at:",
  },
  "pt-br": {
    title: "Termos de Uso",
    lastUpdated: "Última atualização: março de 2026",
    s1Title: "1. Aceitação dos termos",
    s1Body: "Ao acessar e utilizar o site da Sintérgica AI (doravante, \u201co Site\u201d), você concorda em ficar vinculado a estes Termos de Uso. Se você não concordar com algum destes termos, solicitamos que se abstenha de utilizar o Site.",
    s2Title: "2. Descrição do serviço",
    s2Body: "A Sintérgica AI oferece serviços de inteligência artificial empresarial, incluindo, mas não se limitando a: a plataforma Lattice, serviços de consultoria, implementação e capacitação. Os detalhes específicos de cada serviço são acordados por meio de contratos individuais.",
    s3Title: "3. Propriedade intelectual",
    s3Body: "Todo o conteúdo do Site, incluindo, mas não se limitando a textos, gráficos, logotipos, ícones, imagens, clipes de áudio, downloads digitais, compilações de dados e software, é propriedade da Sintérgica AI ou de seus provedores de conteúdo e está protegido pelas leis de propriedade intelectual aplicáveis no México e internacionalmente.",
    s4Title: "4. Uso aceitável",
    s4Body: "Você se compromete a utilizar o Site apenas para fins lícitos e de acordo com estes Termos. É proibido utilizar o Site de qualquer maneira que possa danificar, desabilitar, sobrecarregar ou deteriorar o Site ou interferir no uso de qualquer outra parte.",
    s5Title: "5. Limitação de responsabilidade",
    s5Body1: "As informações fornecidas no Site são oferecidas \u201ccomo estão\u201d sem garantias de qualquer tipo, sejam expressas ou implícitas. A Sintérgica AI não garante a exatidão, integridade ou utilidade de qualquer informação no Site.",
    s5Body2: "Em nenhum caso a Sintérgica AI será responsável por danos diretos, indiretos, incidentais, consequentes, especiais ou exemplares resultantes do uso ou da impossibilidade de uso do Site.",
    s6Title: "6. Confidencialidade",
    s6Body: "A Sintérgica AI se compromete a manter a confidencialidade de todas as informações fornecidas por seus clientes no âmbito dos serviços contratados, de acordo com os termos estabelecidos nos contratos individuais.",
    s7Title: "7. Modificações",
    s7Body: "A Sintérgica AI se reserva o direito de modificar estes Termos de Uso a qualquer momento. As modificações serão efetivas imediatamente após sua publicação no Site. O uso continuado do Site após a publicação das modificações constituirá sua aceitação das mesmas.",
    s8Title: "8. Lei aplicável e jurisdição",
    s8Body: "Estes Termos de Uso serão regidos e interpretados de acordo com as leis vigentes no México. Qualquer controvérsia derivada destes termos será submetida à jurisdição dos tribunais competentes da Cidade do México.",
    s9Title: "9. Contato",
    s9Body: "Para qualquer pergunta ou comentário sobre estes Termos de Uso, você pode nos contatar em:",
  },
} as const;

export default async function TerminosPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = (["es", "en", "pt-br"].includes(lang) ? lang : "es") as keyof typeof T;
  const t = T[locale];

  return (
    <div className="min-h-screen bg-brand-surface dark:bg-brand-midnight">
      <Navbar />
      <main className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
        <article className="mx-auto max-w-3xl font-mulish text-brand-midnight/80 dark:text-brand-white/80">
          <h1 className="font-proxima text-3xl font-extrabold text-brand-midnight dark:text-brand-white mb-2 sm:text-4xl">
            {t.title}
          </h1>
          <p className="text-sm text-brand-midnight/40 dark:text-brand-white/40 mb-10">
            {t.lastUpdated}
          </p>

          <div className="space-y-8 text-sm leading-relaxed">
            <section>
              <h2 className="font-proxima text-lg font-bold text-brand-midnight dark:text-brand-white mb-3">
                {t.s1Title}
              </h2>
              <p>{t.s1Body}</p>
            </section>

            <section>
              <h2 className="font-proxima text-lg font-bold text-brand-midnight dark:text-brand-white mb-3">
                {t.s2Title}
              </h2>
              <p>{t.s2Body}</p>
            </section>

            <section>
              <h2 className="font-proxima text-lg font-bold text-brand-midnight dark:text-brand-white mb-3">
                {t.s3Title}
              </h2>
              <p>{t.s3Body}</p>
            </section>

            <section>
              <h2 className="font-proxima text-lg font-bold text-brand-midnight dark:text-brand-white mb-3">
                {t.s4Title}
              </h2>
              <p>{t.s4Body}</p>
            </section>

            <section>
              <h2 className="font-proxima text-lg font-bold text-brand-midnight dark:text-brand-white mb-3">
                {t.s5Title}
              </h2>
              <p>{t.s5Body1}</p>
              <p className="mt-3">{t.s5Body2}</p>
            </section>

            <section>
              <h2 className="font-proxima text-lg font-bold text-brand-midnight dark:text-brand-white mb-3">
                {t.s6Title}
              </h2>
              <p>{t.s6Body}</p>
            </section>

            <section>
              <h2 className="font-proxima text-lg font-bold text-brand-midnight dark:text-brand-white mb-3">
                {t.s7Title}
              </h2>
              <p>{t.s7Body}</p>
            </section>

            <section>
              <h2 className="font-proxima text-lg font-bold text-brand-midnight dark:text-brand-white mb-3">
                {t.s8Title}
              </h2>
              <p>{t.s8Body}</p>
            </section>

            <section>
              <h2 className="font-proxima text-lg font-bold text-brand-midnight dark:text-brand-white mb-3">
                {t.s9Title}
              </h2>
              <p>
                {t.s9Body}{" "}
                <a href="mailto:legal@sintergica.ai" className="text-brand-accent hover:text-brand-accent-light transition-colors">
                  legal@sintergica.ai
                </a>
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
