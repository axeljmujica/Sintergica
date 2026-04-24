import type { Metadata } from "next";
import { Navbar } from "@/components/sections/Navbar";
import { Footer } from "@/components/sections/Footer";
import type { Locale } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Aviso de Privacidad | Sintérgica AI — IA Privada para México y LATAM",
  description:
    "Aviso de privacidad de Sintérgica AI conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).",
};

const T = {
  es: {
    title: "Aviso de Privacidad",
    lastUpdated: "Última actualización: marzo 2026",
    s1Title: "I. Identidad y domicilio del responsable",
    s1Body: "MDA Startup Labs Solutions SAPI de CV (en adelante, \u201cSint\u00e9rgica\u201d), con domicilio en Juan de Grijalva 127 A, Fracc. Virginia, Boca del R\u00edo, Veracruz, M\u00e9xico, RFC: MSL240524TC2, es responsable del tratamiento de sus datos personales conforme a lo dispuesto por la Ley Federal de Protecci\u00f3n de Datos Personales en Posesi\u00f3n de los Particulares (LFPDPPP) y su Reglamento.",
    s2Title: "II. Datos personales que recabamos",
    s2Body1: "Para las finalidades señaladas en el presente aviso de privacidad, podemos recabar sus datos personales de distintas formas: cuando usted nos los proporciona directamente a través de nuestros formularios de contacto, cuando visita nuestro sitio web, o cuando nos los proporciona por cualquier otro medio.",
    s2Body2: "Los datos personales que podemos recabar incluyen: nombre completo, correo electrónico, número telefónico, nombre de la empresa, puesto o cargo, y cualquier otra información que usted voluntariamente nos proporcione.",
    s3Title: "III. Finalidades del tratamiento",
    s3Body1: "Sus datos personales serán utilizados para las siguientes finalidades primarias: responder a sus solicitudes de información, contacto o cotización; proporcionar los servicios contratados; enviar comunicaciones relacionadas con nuestros servicios; y dar cumplimiento a las obligaciones contractuales.",
    s3Body2: "De manera adicional, utilizaremos su información personal para las siguientes finalidades secundarias: enviar comunicaciones sobre nuevos productos, servicios o eventos; realizar estudios internos sobre hábitos de uso; e invitarle a participar en encuestas de satisfacción.",
    s4Title: "IV. Transferencia de datos",
    s4Body: "Sintérgica se compromete a no transferir su información personal a terceros sin su consentimiento, salvo las excepciones previstas en el artículo 37 de la LFPDPPP, así como a realizar esta transferencia en los términos que fija esa ley.",
    s5Title: "V. Derechos ARCO",
    s5Body1: "Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada adecuadamente (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición).",
    s5Body2: "Para el ejercicio de cualquiera de los derechos ARCO, puede enviar su solicitud a:",
    s6Title: "VI. Uso de cookies y tecnologías de rastreo",
    s6Body: "Nuestro sitio web puede utilizar cookies y otras tecnologías de rastreo para mejorar su experiencia de navegación. Usted puede deshabilitar el uso de cookies a través de la configuración de su navegador.",
    s7Title: "VII. Modificaciones al aviso de privacidad",
    s7Body: "Nos reservamos el derecho de efectuar en cualquier momento modificaciones o actualizaciones al presente aviso de privacidad. Estas modificaciones estarán disponibles al público a través de nuestro sitio web.",
    s8Title: "VIII. Contacto",
    s8Body: "Si tiene alguna duda o comentario sobre este aviso de privacidad, puede contactarnos en:",
  },
  en: {
    title: "Privacy Notice",
    lastUpdated: "Last updated: March 2026",
    s1Title: "I. Identity and address of the data controller",
    s1Body: "MDA Startup Labs Solutions SAPI de CV (hereinafter, \u201cSint\u00e9rgica\u201d), with domicile at Juan de Grijalva 127 A, Fracc. Virginia, Boca del R\u00edo, Veracruz, Mexico, RFC: MSL240524TC2, is responsible for the processing of your personal data in accordance with the Federal Law on Protection of Personal Data Held by Private Parties (LFPDPPP) and its Regulations.",
    s2Title: "II. Personal data we collect",
    s2Body1: "For the purposes stated in this privacy notice, we may collect your personal data in various ways: when you provide it directly through our contact forms, when you visit our website, or when you provide it through any other means.",
    s2Body2: "The personal data we may collect includes: full name, email address, phone number, company name, position or title, and any other information you voluntarily provide.",
    s3Title: "III. Purposes of data processing",
    s3Body1: "Your personal data will be used for the following primary purposes: responding to your information, contact, or quote requests; providing contracted services; sending communications related to our services; and fulfilling contractual obligations.",
    s3Body2: "Additionally, we will use your personal information for the following secondary purposes: sending communications about new products, services, or events; conducting internal usage studies; and inviting you to participate in satisfaction surveys.",
    s4Title: "IV. Data transfers",
    s4Body: "Sintérgica commits not to transfer your personal information to third parties without your consent, except as provided in Article 37 of the LFPDPPP, and to carry out any such transfers in accordance with the terms established by that law.",
    s5Title: "V. ARCO rights",
    s5Body1: "You have the right to know what personal data we hold about you, how we use it, and the conditions of use (Access). You also have the right to request correction of your personal information if it is outdated, inaccurate, or incomplete (Rectification); to request its deletion from our records or databases if you believe it is not being used properly (Cancellation); and to oppose the use of your personal data for specific purposes (Opposition).",
    s5Body2: "To exercise any of your ARCO rights, you may send your request to:",
    s6Title: "VI. Use of cookies and tracking technologies",
    s6Body: "Our website may use cookies and other tracking technologies to improve your browsing experience. You may disable cookies through your browser settings.",
    s7Title: "VII. Changes to this privacy notice",
    s7Body: "We reserve the right to make changes or updates to this privacy notice at any time. These changes will be made available to the public through our website.",
    s8Title: "VIII. Contact",
    s8Body: "If you have any questions or comments about this privacy notice, you may contact us at:",
  },
  "pt-br": {
    title: "Aviso de Privacidade",
    lastUpdated: "Última atualização: março de 2026",
    s1Title: "I. Identidade e domicílio do responsável",
    s1Body: "A MDA Startup Labs Solutions SAPI de CV (doravante, \u201cSint\u00e9rgica\u201d), com domic\u00edlio em Juan de Grijalva 127 A, Fracc. Virginia, Boca del R\u00edo, Veracruz, M\u00e9xico, RFC: MSL240524TC2, \u00e9 respons\u00e1vel pelo tratamento de seus dados pessoais conforme disposto pela Lei Federal de Prote\u00e7\u00e3o de Dados Pessoais em Posse de Particulares (LFPDPPP) e seu Regulamento.",
    s2Title: "II. Dados pessoais que coletamos",
    s2Body1: "Para as finalidades indicadas neste aviso de privacidade, podemos coletar seus dados pessoais de diferentes formas: quando você nos fornece diretamente através de nossos formulários de contato, quando visita nosso site, ou quando nos fornece por qualquer outro meio.",
    s2Body2: "Os dados pessoais que podemos coletar incluem: nome completo, e-mail, número de telefone, nome da empresa, cargo ou posição, e qualquer outra informação que você voluntariamente nos forneça.",
    s3Title: "III. Finalidades do tratamento",
    s3Body1: "Seus dados pessoais serão utilizados para as seguintes finalidades primárias: responder às suas solicitações de informação, contato ou cotação; fornecer os serviços contratados; enviar comunicações relacionadas aos nossos serviços; e cumprir as obrigações contratuais.",
    s3Body2: "Adicionalmente, utilizaremos suas informações pessoais para as seguintes finalidades secundárias: enviar comunicações sobre novos produtos, serviços ou eventos; realizar estudos internos sobre hábitos de uso; e convidá-lo a participar de pesquisas de satisfação.",
    s4Title: "IV. Transferência de dados",
    s4Body: "A Sintérgica se compromete a não transferir suas informações pessoais a terceiros sem o seu consentimento, salvo as exceções previstas no artigo 37 da LFPDPPP, bem como a realizar essa transferência nos termos estabelecidos por essa lei.",
    s5Title: "V. Direitos ARCO",
    s5Body1: "Você tem o direito de saber quais dados pessoais temos sobre você, para que os utilizamos e as condições de uso que lhes damos (Acesso). Da mesma forma, é seu direito solicitar a correção de suas informações pessoais caso estejam desatualizadas, sejam inexatas ou incompletas (Retificação); que as eliminemos de nossos registros ou bases de dados quando considerar que não estão sendo utilizadas adequadamente (Cancelamento); bem como se opor ao uso de seus dados pessoais para fins específicos (Oposição).",
    s5Body2: "Para o exercício de qualquer um dos direitos ARCO, você pode enviar sua solicitação para:",
    s6Title: "VI. Uso de cookies e tecnologias de rastreamento",
    s6Body: "Nosso site pode utilizar cookies e outras tecnologias de rastreamento para melhorar sua experiência de navegação. Você pode desabilitar o uso de cookies através das configurações do seu navegador.",
    s7Title: "VII. Modificações ao aviso de privacidade",
    s7Body: "Reservamo-nos o direito de efetuar a qualquer momento modificações ou atualizações ao presente aviso de privacidade. Essas modificações estarão disponíveis ao público através do nosso site.",
    s8Title: "VIII. Contato",
    s8Body: "Se você tiver alguma dúvida ou comentário sobre este aviso de privacidade, pode nos contatar em:",
  },
} as const;

export default async function PrivacidadPage({ params }: { params: Promise<{ lang: string }> }) {
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
              <p>{t.s2Body1}</p>
              <p className="mt-3">{t.s2Body2}</p>
            </section>

            <section>
              <h2 className="font-proxima text-lg font-bold text-brand-midnight dark:text-brand-white mb-3">
                {t.s3Title}
              </h2>
              <p>{t.s3Body1}</p>
              <p className="mt-3">{t.s3Body2}</p>
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
              <p className="mt-3">
                {t.s5Body2}{" "}
                <a href="mailto:privacidad@sintergica.ai" className="text-brand-accent hover:text-brand-accent-light transition-colors">
                  privacidad@sintergica.ai
                </a>
              </p>
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
              <p>
                {t.s8Body}{" "}
                <a href="mailto:privacidad@sintergica.ai" className="text-brand-accent hover:text-brand-accent-light transition-colors">
                  privacidad@sintergica.ai
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
