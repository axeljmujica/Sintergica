'use client';

import { useState, useEffect } from 'react';
import { LazyMotion, domAnimation, m, useReducedMotion } from 'motion/react';
import { ArrowLeft, Calendar, User, Tag, Clock, Share2, Printer, Link as LinkIcon, Eye, Check, MessageCircle, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

interface WPPost {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: {
    author?: Array<{ name: string }>;
    'wp:featuredmedia'?: Array<{ source_url: string; alt_text?: string }>;
    'wp:term'?: Array<Array<{ id: number; name: string; taxonomy: string }>>;
  };
  yoast_head_json?: {
    og_image?: [{ url: string }];
    og_description?: string;
    author?: string;
  };
}

export function BlogPostContent({ post, lang = 'es' }: { post: WPPost; lang?: string }) {
  const shouldReduce = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const [views, setViews] = useState<number>(0);
  const [postUrl, setPostUrl] = useState('');
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Set URL for sharing
    setPostUrl(typeof window !== 'undefined' ? window.location.href : `https://sintergica.ai/${lang}/recursos/blog/${post.slug}`);
    
    // Simulate view counter increment
    const baseViews = 1250 + (post.id * 13) % 5000;
    setViews(baseViews + 1);
  }, [post.id, post.slug, lang]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(postUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrintPDF = async () => {
    if (isGeneratingPdf) return;
    
    try {
      setIsGeneratingPdf(true);
      const html2pdf = (await import('html2pdf.js')).default;
      const element = document.getElementById('blog-content-pdf');
      if (!element) return;

      element.classList.add('pdf-generating');
      
      const wasDarkMode = document.documentElement.classList.contains('dark') || document.documentElement.getAttribute('data-theme') === 'dark';
      if (wasDarkMode) {
        document.documentElement.setAttribute('data-theme', 'light');
        document.documentElement.classList.remove('dark');
      }

      const opt = {
        margin: [15, 15, 15, 15] as [number, number, number, number],
        filename: `${post.slug}.pdf`,
        image: { type: 'jpeg' as const, quality: 0.98 },
        html2canvas: { 
          scale: 2,
          useCORS: true,
          logging: false,
          letterRendering: true
        },
        jsPDF: { unit: 'mm', format: 'letter', orientation: 'portrait' as const }
      };

      await html2pdf().set(opt).from(element).save();
      
      if (wasDarkMode) {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.documentElement.classList.add('dark');
      }
      
      element.classList.remove('pdf-generating');
    } catch (error) {
      console.error('Error generating PDF:', error);
      window.print();
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  const decodeHTMLEntities = (text: string) => {
    if (typeof window === 'undefined') return text;
    const textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    return textArea.value;
  };

  const authorName = post._embedded?.author?.[0]?.name || post.yoast_head_json?.author || 'Equipo Sintérgica';
  const getValidImageUrl = () => {
    let url = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || post.yoast_head_json?.og_image?.[0]?.url;
    if (!url) return null;
    if (url.includes('sintergica.ai/wp-content') && !url.includes('blog.sintergica.ai')) {
      url = url.replace('sintergica.ai/wp-content', 'blog.sintergica.ai/wp-content');
    }
    return url;
  };

  const imageUrl = getValidImageUrl();
  const categories = post._embedded?.['wp:term']?.[0]?.filter((term: any) => term.taxonomy === 'category') || [];
  const tags = post._embedded?.['wp:term']?.[0]?.filter((term: any) => term.taxonomy === 'post_tag') || [];
  const articleTitle = decodeHTMLEntities(post.title.rendered);
  
  const encodedUrl = encodeURIComponent(postUrl || `https://sintergica.ai/${lang}/recursos/blog/${post.slug}`);
  const encodedTitle = encodeURIComponent(articleTitle);
  const encodedSummary = encodeURIComponent(post.yoast_head_json?.og_description || '');

  return (
    <LazyMotion features={domAnimation}>
      <article className="min-h-screen bg-brand-surface dark:bg-brand-midnight text-brand-midnight dark:text-brand-white pt-24 pb-20 selection:bg-brand-accent/30 selection:text-brand-midnight print:bg-white print:text-black print:pt-0 print:pb-0">
        {/* Progress Bar */}
        <div className="fixed top-0 left-0 right-0 h-1 bg-brand-surface dark:bg-brand-navy z-50 print:hidden">
          <m.div
            className="h-full bg-brand-accent origin-left w-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          />
        </div>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <m.div
            initial={shouldReduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <Link 
                href={`/${lang}/recursos/blog`}
                className="inline-flex items-center gap-2 text-sm font-medium text-brand-midnight/60 dark:text-brand-white/60 hover:text-brand-accent transition-colors group print-hide"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                Volver al blog
              </Link>

              {/* Action Toolbar */}
              <div className="flex items-center gap-3 print-hide">
                <div className="flex items-center gap-2 mr-4 text-brand-midnight/50 dark:text-brand-white/50 text-sm">
                  <Eye className="w-4 h-4" />
                  <span>{views.toLocaleString('es-MX')} vistas</span>
                </div>
                
                <button 
                  onClick={handlePrintPDF}
                  className="p-2 rounded-full bg-brand-surface dark:bg-brand-deep border border-brand-midnight/10 dark:border-brand-white/10 text-brand-midnight/60 dark:text-brand-white/60 hover:text-brand-accent hover:border-brand-accent/30 transition-all"
                  title="Imprimir artículo"
                >
                  <Printer className="w-4 h-4" />
                </button>
                
                <div className="h-6 w-px bg-brand-white dark:bg-brand-midnight/10 mx-1"></div>
                
                <div className="flex items-center gap-2">
                  {mounted && (
                    <>
                      <a 
                        href={`https://api.whatsapp.com/send?text=${encodedTitle}%20-%20${encodedUrl}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Compartir en WhatsApp"
                        className="p-2 rounded-full bg-brand-surface dark:bg-brand-deep border border-brand-midnight/10 dark:border-brand-white/10 text-brand-midnight/60 dark:text-brand-white/60 hover:text-[#25D366] hover:border-[#25D366]/30 transition-all flex items-center justify-center"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </a>
                      
                      <a 
                        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedSummary}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Compartir en LinkedIn"
                        className="p-2 rounded-full bg-brand-surface dark:bg-brand-deep border border-brand-midnight/10 dark:border-brand-white/10 text-brand-midnight/60 dark:text-brand-white/60 hover:text-[#0A66C2] hover:border-[#0A66C2]/30 transition-all flex items-center justify-center"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>

                      <a 
                        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Compartir en Twitter"
                        className="p-2 rounded-full bg-brand-surface dark:bg-brand-deep border border-brand-midnight/10 dark:border-brand-white/10 text-brand-midnight/60 dark:text-brand-white/60 hover:text-white hover:border-white/30 transition-all flex items-center justify-center"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    </>
                  )}

                  <button 
                    onClick={handleCopyLink}
                    className="p-2 rounded-full bg-brand-surface dark:bg-brand-deep border border-brand-midnight/10 dark:border-brand-white/10 text-brand-midnight/60 dark:text-brand-white/60 hover:text-brand-accent hover:border-brand-accent/30 transition-all"
                    title="Copiar enlace"
                  >
                    {copied ? <Check className="w-4 h-4 text-green-500" /> : <LinkIcon className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>
            
            <div id="blog-content-pdf">
              {/* Print Only Header */}
              <div className="hidden print:flex items-center justify-between border-b-2 border-[#3665f5] pb-4 mb-8">
                <div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo/Sintergica-ai-color@4x.png" alt="Sintérgica Logo" className="h-8 w-auto object-contain m-0" />
                </div>
                <div className="text-right text-[#64748b] text-xs">
                  <p className="m-0">sintergica.ai</p>
                </div>
              </div>

              {/* Header */}
              <header className="mb-10">
                <div className="flex flex-wrap gap-2 mb-6 print:hidden">
                  {categories.map((cat: any) => (
                    <span key={cat.id} className="bg-brand-accent/10 text-brand-accent border border-brand-accent/20 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {cat.name}
                    </span>
                  ))}
                </div>

                <h1 className="font-proxima font-extrabold text-4xl sm:text-5xl lg:text-6xl text-brand-midnight dark:text-brand-white leading-tight mb-6 print:text-[#0f172a]">
                  {articleTitle}
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-sm text-brand-midnight/60 dark:text-brand-white/60 border-y border-brand-midnight/10 dark:border-brand-white/10 py-4 print:text-[#64748b] print:border-[#e2e8f0]">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-brand-accent" />
                    <span>Por {authorName}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-brand-accent" />
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("es-MX", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <div className="flex items-center gap-2 print:hidden">
                    <Clock className="w-4 h-4 text-brand-accent" />
                    <span>
                      {/* Rough reading time estimation */}
                      {Math.ceil(post.content.rendered.split(' ').length / 200)} min de lectura
                    </span>
                  </div>
                </div>
              </header>

              {/* Featured Image */}
              {imageUrl && (
                <figure className="mb-12 rounded-2xl overflow-hidden border border-brand-midnight/10 dark:border-brand-white/10 shadow-2xl shadow-brand-accent/5 print:border-[#e2e8f0] print:shadow-none">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={imageUrl} 
                    alt={post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || post.title.rendered}
                    className="w-full h-auto max-h-[600px] object-cover"
                    referrerPolicy="no-referrer"
                  />
                </figure>
              )}

              {/* Content */}
              <div className="font-mulish prose dark:prose-invert prose-lg max-w-none
                print:prose-p:text-black print:prose-headings:text-black print:prose-strong:text-black print:prose-a:text-[#3665f5]
                print:prose-ul:text-black print:prose-ol:text-black print:prose-li:text-black
                print:prose-blockquote:bg-gray-50 print:prose-blockquote:text-gray-800 print:prose-blockquote:border-[#3665f5]
                print:prose-code:text-[#3665f5] print:prose-code:bg-gray-50
                print:prose-pre:bg-gray-50 print:prose-pre:text-black print:prose-pre:border-gray-200
                print:prose-hr:border-gray-200
                print:prose-img:max-w-full print:prose-img:h-auto
                prose-headings:font-proxima prose-headings:font-bold prose-headings:text-brand-midnight dark:prose-headings:text-brand-white
                prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
                prose-p:text-brand-midnight/80 dark:prose-p:text-brand-white/80 prose-p:leading-relaxed
                prose-a:text-brand-accent hover:prose-a:text-brand-accent-light prose-a:no-underline hover:prose-a:underline
                prose-strong:text-brand-midnight dark:prose-strong:text-brand-white prose-strong:font-semibold
                prose-ul:text-brand-midnight/80 dark:prose-ul:text-brand-white/80 prose-ol:text-brand-midnight/80 dark:prose-ol:text-brand-white/80
                prose-li:marker:text-brand-accent
                prose-blockquote:border-l-brand-accent prose-blockquote:bg-brand-surface dark:prose-blockquote:bg-brand-deep prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:text-brand-midnight/90 dark:prose-blockquote:text-brand-white/90
                prose-img:rounded-xl prose-img:border prose-img:border-brand-midnight/10 dark:prose-img:border-brand-white/10
                prose-hr:border-brand-midnight/10 dark:prose-hr:border-brand-white/10
                prose-code:text-brand-accent-light prose-code:bg-brand-surface dark:prose-code:bg-brand-deep prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none
                prose-pre:bg-brand-surface dark:prose-pre:bg-brand-deep prose-pre:border prose-pre:border-brand-midnight/10 dark:prose-pre:border-brand-white/10"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
              />

              {/* Print Only Footer */}
              <div className="hidden print:flex flex-col items-center justify-center border-t border-[#e2e8f0] pt-8 mt-12 gap-4">
                <div className="flex items-center gap-6">
                  <div className="flex flex-col">
                    <span className="text-[#0f172a] font-bold text-sm mb-1">Lee este artículo en línea:</span>
                    <span className="text-[#3665f5] text-sm break-all">{postUrl || `https://sintergica.ai/${lang}/recursos/blog/${post.slug}`}</span>
                  </div>
                </div>
                <div className="text-center text-[10px] text-[#64748b] mt-4">
                  Este documento fue generado desde sintergica.ai. Todos los derechos reservados.
                </div>
              </div>
            </div>

            {/* Footer / Tags */}
            <footer className="mt-16 pt-8 border-t border-brand-midnight/10 dark:border-brand-white/10 flex flex-col md:flex-row md:items-center justify-between gap-6 print-hide print-footer">
              {tags.length > 0 ? (
                <div className="flex items-center gap-3 flex-wrap">
                  <Tag className="w-4 h-4 text-brand-midnight/40 dark:text-brand-white/40" />
                  {tags.map((tag: any) => (
                    <span key={tag.id} className="bg-brand-surface dark:bg-brand-deep border border-brand-midnight/10 dark:border-brand-white/10 text-brand-midnight/60 dark:text-brand-white/60 text-sm px-3 py-1 rounded-full">
                      {tag.name}
                    </span>
                  ))}
                </div>
              ) : (
                <div></div>
              )}

              {/* Share Bottom */}
              <div className="flex items-center gap-3 self-start md:self-auto">
                <span className="text-sm text-brand-midnight/60 dark:text-brand-white/60 font-medium mr-2 flex items-center gap-2">
                  <Share2 className="w-4 h-4" /> Compartir
                </span>
                
                {mounted && (
                  <>
                    <a 
                      href={`https://api.whatsapp.com/send?text=${encodedTitle}%20-%20${encodedUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Compartir en WhatsApp"
                      className="p-2.5 rounded-full bg-brand-surface dark:bg-brand-deep border border-brand-midnight/10 dark:border-brand-white/10 text-brand-midnight/60 dark:text-brand-white/60 hover:text-brand-midnight hover:bg-[#25D366] hover:border-[#25D366] transition-all flex items-center justify-center"
                    >
                      <MessageCircle className="w-5 h-5" />
                    </a>
                    
                    <a 
                      href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedSummary}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Compartir en LinkedIn"
                      className="p-2.5 rounded-full bg-brand-surface dark:bg-brand-deep border border-brand-midnight/10 dark:border-brand-white/10 text-brand-midnight/60 dark:text-brand-white/60 hover:text-white hover:bg-[#0A66C2] hover:border-[#0A66C2] transition-all flex items-center justify-center"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>

                    <a 
                      href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Compartir en Twitter"
                      className="p-2.5 rounded-full bg-brand-surface dark:bg-brand-deep border border-brand-midnight/10 dark:border-brand-white/10 text-brand-midnight/60 dark:text-brand-white/60 hover:text-brand-midnight hover:bg-white hover:border-white transition-all flex items-center justify-center"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  </>
                )}
              </div>
            </footer>
          </m.div>
        </div>
      </article>
    </LazyMotion>
  );
}
