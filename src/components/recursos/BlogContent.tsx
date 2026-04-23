"use client";

import { useRef, useEffect, useState, useMemo } from "react";
import { LazyMotion, domAnimation, m, useInView, useReducedMotion } from "motion/react";
import { ArrowRight, Calendar, Search, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { PageHero } from "@/components/shared/PageHero";
import { CTASection } from "@/components/shared/CTASection";

interface WPCategory {
  id: number;
  name: string;
  slug: string;
}

interface WPPost {
  id: number;
  slug: string;
  date: string;
  link: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: {
    author?: Array<{ name: string }>;
    'wp:featuredmedia'?: Array<{ source_url: string; alt_text?: string }>;
    'wp:term'?: Array<Array<{ id: number; name: string; taxonomy: string }>>;
  };
  yoast_head_json?: {
    og_image?: [{ url: string }];
    og_description?: string;
  };
}

function BlogCardItem({ post, index, lang, decodeHTMLEntities, stripHTML }: { post: WPPost; index: number; lang: string; decodeHTMLEntities: (str: string) => string; stripHTML: (str: string) => string }) {
  const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || post.yoast_head_json?.og_image?.[0]?.url || "/images/blog_abstract.png";
  const author = post._embedded?.author?.[0]?.name || "EQUIPO SINTÉRGICA";
  const dateRaw = new Date(post.date).toLocaleDateString("es-MX", { month: "short", day: "numeric", year: "numeric" });
  const category = post._embedded?.['wp:term']?.[0]?.[0]?.name;

  return (
    <m.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative bg-white dark:bg-brand-deep border border-brand-midnight/5 dark:border-brand-white/5 shadow-sm rounded-3xl overflow-hidden p-3 sm:p-4 group h-full flex flex-col"
    >
      <Link href={`/${lang}/recursos/blog/${post.slug}`} className="absolute inset-0 z-10">
        <span className="sr-only">Leer {decodeHTMLEntities(post.title.rendered)}</span>
      </Link>

      {/* Image */}
      <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-brand-surface dark:bg-brand-midnight">
        {category && (
          <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-brand-midnight text-[10px] font-bold px-2.5 py-1 rounded-full z-10 shadow-sm uppercase tracking-wider">
            {decodeHTMLEntities(category)}
          </span>
        )}
        <Image 
          src={imageUrl} 
          alt={stripHTML(post.title.rendered)} 
          fill 
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col px-1 pb-16">
        <p className="font-mono text-[10px] md:text-xs tracking-[0.05em] uppercase text-brand-midnight/60 dark:text-brand-white/50 mb-3 md:mb-4">
          {author} - {dateRaw}
        </p>
        <h3 className="font-proxima text-xl sm:text-2xl font-medium text-brand-midnight dark:text-brand-white leading-tight pr-4 line-clamp-3">
          {decodeHTMLEntities(post.title.rendered)}
        </h3>
      </div>

      {/* Read More Text */}
      <span className="absolute bottom-6 sm:bottom-7 left-5 sm:left-6 text-brand-midnight/80 dark:text-brand-white/80 text-sm font-medium z-0 group-hover:text-brand-midnight dark:group-hover:text-white transition-colors">
        Leer artículo
      </span>

      {/* Notch effect - Bottom Right Arrow */}
      <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-brand-surface dark:bg-brand-midnight rounded-tl-[30px] flex items-center justify-center z-10 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
        <div className="relative w-full h-full flex flex-col">
          <svg className="absolute -top-6 right-0 w-6 h-6 text-brand-surface dark:text-brand-midnight fill-current hidden sm:block" viewBox="0 0 24 24"><path d="M24 24H0C13.2548 24 24 13.2548 24 0V24Z"></path></svg>
          <svg className="absolute bottom-0 -left-6 w-6 h-6 text-brand-surface dark:text-brand-midnight fill-current hidden sm:block" viewBox="0 0 24 24"><path d="M24 24H0C13.2548 24 24 13.2548 24 0V24Z"></path></svg>
          <div className="m-auto">
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-brand-midnight dark:text-brand-white transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </m.div>
  );
}

export function BlogContent() {
  const gridRef = useRef<HTMLDivElement>(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-60px" });
  const shouldReduce = useReducedMotion();
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [categories, setCategories] = useState<WPCategory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 12;
  const postsPerBlock = 6;
  const params = useParams();
  const lang = params?.lang || 'es';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsRes, categoriesRes] = await Promise.all([
          fetch('https://blog.sintergica.ai/wp-json/wp/v2/posts?_embed=1&per_page=100'),
          fetch('https://blog.sintergica.ai/wp-json/wp/v2/categories?per_page=100')
        ]);
        
        if (!postsRes.ok || !categoriesRes.ok) throw new Error('Error al cargar los datos');
        
        const postsData = await postsRes.json();
        const categoriesData = await categoriesRes.json();
        
        setPosts(postsData);
        setCategories(categoriesData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const decodeHTMLEntities = (text: string) => {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = text;
    return textArea.value;
  };

  const stripHTML = (html: string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  const filteredPosts = useMemo(() => {
    let result = posts;

    if (selectedCategory) {
      result = result.filter(post => 
        post._embedded?.['wp:term']?.[0]?.some(term => term.id === selectedCategory)
      );
    }

    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(post => 
        post.title.rendered.toLowerCase().includes(lowerQuery) ||
        post.excerpt.rendered.toLowerCase().includes(lowerQuery)
      );
    }

    return result;
  }, [posts, selectedCategory, searchQuery]);

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const firstBlock = currentPosts.slice(0, postsPerBlock);
  const secondBlock = currentPosts.slice(postsPerBlock);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  return (
    <LazyMotion features={domAnimation}>
    <>
      <PageHero
        badge="BLOG"
        title="Ideas, investigación y perspectivas sobre IA"
        subtitle="Artículos sobre IA empresarial, regulación, transformación digital y el futuro de la inteligencia artificial en México y Latinoamérica."
      />

      <section ref={gridRef} className="bg-brand-surface dark:bg-brand-midnight py-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Sidebar */}
          <aside className="w-full lg:w-64 flex-shrink-0 lg:sticky lg:top-24 space-y-6 bg-white dark:bg-brand-deep/30 rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 p-6 shadow-xl shadow-brand-midnight/5 dark:shadow-none">
            <div>
              <h3 className="text-brand-midnight dark:text-brand-white font-proxima font-semibold text-lg mb-4 flex items-center gap-2">
                <Search className="w-4 h-4 text-brand-accent" />
                Buscar
              </h3>
              <div className="relative">
                <input 
                  type="text"
                  placeholder="Artículos, temas..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-brand-surface dark:bg-brand-midnight border border-brand-midnight/10 dark:border-brand-white/10 rounded-xl py-2.5 px-4 text-sm text-brand-midnight dark:text-brand-surface focus:outline-none focus:border-brand-accent transition-colors"
                />
              </div>
            </div>

            <div className="h-px w-full bg-brand-white dark:bg-brand-midnight/10" />

            <div>
              <h3 className="text-brand-midnight dark:text-brand-white font-proxima font-semibold text-lg mb-4 flex items-center gap-2 mt-8">
                <Filter className="w-4 h-4 text-brand-accent" />
                Categorías
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-colors ${
                    selectedCategory === null
                      ? 'bg-brand-accent text-white font-medium'
                      : 'text-brand-midnight/70 dark:text-brand-white/70 hover:bg-brand-surface dark:hover:bg-brand-white/5'
                  }`}
                >
                  Todas las categorías
                </button>
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-brand-accent text-white font-medium'
                        : 'text-brand-midnight/70 dark:text-brand-white/70 hover:bg-brand-surface dark:hover:bg-brand-white/5'
                    }`}
                  >
                    {decodeHTMLEntities(category.name)}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="flex-1 w-full min-w-0">
            {loading ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="flex flex-col rounded-2xl border border-brand-midnight/10 dark:border-brand-white/10 bg-brand-surface dark:bg-brand-deep overflow-hidden animate-pulse">
                  <div className="h-40 bg-brand-white dark:bg-brand-midnight/5" />
                  <div className="p-6">
                    <div className="flex gap-3 mb-3">
                      <div className="h-4 w-20 bg-brand-white dark:bg-brand-midnight/5 rounded-full" />
                      <div className="h-4 w-24 bg-brand-white dark:bg-brand-midnight/5 rounded-full" />
                    </div>
                    <div className="h-6 bg-brand-white dark:bg-brand-midnight/5 rounded mt-2 mb-4 w-3/4" />
                    <div className="h-4 bg-brand-white dark:bg-brand-midnight/5 rounded mb-2" />
                    <div className="h-4 bg-brand-white dark:bg-brand-midnight/5 rounded mb-2" />
                    <div className="h-4 bg-brand-white dark:bg-brand-midnight/5 rounded w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="flex flex-col items-center justify-center py-20 px-4 text-center">
              <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-4">
                <span className="text-red-500 text-2xl">!</span>
              </div>
              <p className="text-red-400 font-medium mb-2">No pudimos cargar los artículos</p>
              <p className="text-brand-midnight/60 dark:text-brand-white/60 text-sm max-w-md">{error}</p>
            </div>
          ) : (
            <>
              {/* First Block */}
              {firstBlock.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mb-12">
                  {firstBlock.map((post, i) => (
                    <BlogCardItem 
                      key={post.id} 
                      post={post} 
                      index={i} 
                      lang={lang as string} 
                      decodeHTMLEntities={decodeHTMLEntities} 
                      stripHTML={stripHTML} 
                    />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 px-4">
                  <div className="w-12 h-12 rounded-full border-4 border-brand-accent/20 border-t-brand-accent animate-spin mb-4" />
                  <p className="text-brand-midnight/60 dark:text-brand-white/60 font-medium">Cargando artículos...</p>
                </div>
              )}

              {/* Interstitial CTA */}
              {firstBlock.length > 0 && (
                <div className="mb-12 bg-gradient-to-r from-brand-accent/20 via-brand-deep to-brand-midnight border border-brand-accent/20 rounded-2xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-brand-accent/5">
                  <div className="max-w-xl">
                    <h3 className="text-2xl font-proxima font-semibold text-brand-midnight dark:text-brand-white mb-2">¿Listo para transformar tu empresa con IA?</h3>
                    <p className="text-brand-midnight/80 dark:text-brand-white/80 text-sm">Descubre cómo nuestras soluciones de IA privada pueden optimizar tus operaciones y reducir costos hoy mismo.</p>
                  </div>
                  <a 
                    href="/diagnostico"
                    className="inline-flex items-center justify-center rounded-full bg-brand-accent px-8 py-3.5 text-sm font-bold text-brand-midnight transition-all hover:bg-brand-accent-light hover:scale-105"
                  >
                    Agendar Consultoría
                  </a>
                </div>
              )}

              {/* Second Block */}
              {secondBlock.length > 0 && (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 mb-12">
                  {secondBlock.map((post, i) => (
                    <BlogCardItem 
                      key={post.id} 
                      post={post} 
                      index={i} 
                      lang={lang as string} 
                      decodeHTMLEntities={decodeHTMLEntities} 
                      stripHTML={stripHTML} 
                    />
                  ))}
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-12 flex items-center justify-center gap-2">
                  <button
                    onClick={() => {
                      setCurrentPage(p => Math.max(1, p - 1));
                      gridRef.current?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    disabled={currentPage === 1}
                    title="Página anterior"
                    aria-label="Página anterior"
                    className="p-2 rounded-lg border border-brand-midnight/10 dark:border-brand-white/10 text-brand-midnight/70 dark:text-brand-white/70 hover:bg-white dark:hover:bg-brand-white/5 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  
                  <span className="text-sm font-medium text-brand-midnight/70 dark:text-brand-white/70 px-4">
                    Página {currentPage} de {totalPages || 1}
                  </span>

                  <button
                    onClick={() => {
                      setCurrentPage(p => Math.min(totalPages, p + 1));
                      gridRef.current?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    disabled={currentPage === totalPages || totalPages === 0}
                    title="Siguiente página"
                    aria-label="Siguiente página"
                    className="p-2 rounded-lg border border-brand-midnight/10 dark:border-brand-white/10 text-brand-midnight/70 dark:text-brand-white/70 hover:bg-white dark:hover:bg-brand-white/5 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </>
          )}

            <p className="mt-10 text-center text-sm text-brand-midnight/40 dark:text-brand-white/40">
              Únete a nuestra lista de correo para recibir los últimos artículos.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="¿Quieres saber más?"
        subtitle="Agenda una conversación con nuestro equipo para conocer cómo la IA privada puede transformar tu operación."
        ctaLabel="Contactar"
        ctaHref="/diagnostico"
      />
    </>
    </LazyMotion>
  );
}
