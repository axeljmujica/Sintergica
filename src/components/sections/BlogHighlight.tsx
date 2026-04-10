"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { m, LazyMotion, domAnimation } from "motion/react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

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

export function BlogHighlight() {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const lang = params?.lang || "es";

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch("https://blog.sintergica.ai/wp-json/wp/v2/posts?_embed=1&per_page=3");
        if (res.ok) {
          const data = await res.json();
          setPosts(data);
        }
      } catch (err) {
        console.error("Error fetching latest blog posts", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const decodeHTMLEntities = (text: string) => {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = text;
    return textArea.value;
  };

  const stripHTML = (html: string) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };
  return (
    <LazyMotion features={domAnimation}>
      <section className="bg-brand-surface py-12 lg:py-16 w-full px-4 lg:px-10">
        <div className="mx-auto w-full max-w-web3-internal-wrapper">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-4">
            <h2 className="font-proxima text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-midnight text-balance">
              Lo último de la industria
            </h2>
            <Link 
              href={`/${lang}/recursos/blog`} 
              className="inline-flex items-center gap-2 text-brand-midnight font-medium group text-sm md:text-base whitespace-nowrap"
            >
              Ir al blog
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {loading ? (
               [...Array(3)].map((_, i) => (
                <div key={i} className="rounded-3xl bg-[#F3F1EC] p-4 h-[450px] animate-pulse">
                  <div className="w-full aspect-[16/9] bg-brand-midnight/10 rounded-2xl mb-6"></div>
                  <div className="h-4 bg-brand-midnight/10 w-1/3 mb-4 rounded"></div>
                  <div className="h-6 bg-brand-midnight/10 w-full mb-2 rounded"></div>
                  <div className="h-6 bg-brand-midnight/10 w-5/6 rounded"></div>
                </div>
               ))
            ) : posts.length > 0 ? (
              posts.map((post, index) => {
                const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || post.yoast_head_json?.og_image?.[0]?.url || "/images/blog_abstract.png";
                const author = post._embedded?.author?.[0]?.name || "EQUIPO SINTÉRGICA";
                const dateRaw = new Date(post.date).toLocaleDateString("es-MX", { month: "short", day: "numeric", year: "numeric" });
                const category = post._embedded?.['wp:term']?.[0]?.[0]?.name;

                return (
                  <m.div
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="relative bg-white border border-brand-midnight/5 shadow-sm rounded-3xl overflow-hidden p-3 sm:p-4 group h-full flex flex-col"
                  >
                    <Link href={`/${lang}/recursos/blog/${post.slug}`} className="absolute inset-0 z-10">
                      <span className="sr-only">Leer {decodeHTMLEntities(post.title.rendered)}</span>
                    </Link>

                    {/* Image */}
                    <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-brand-surface">
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
                      <p className="font-mono text-[10px] md:text-xs tracking-[0.05em] uppercase text-brand-midnight/60 mb-3 md:mb-4">
                        {author} - {dateRaw}
                      </p>
                      <h3 className="font-proxima text-xl sm:text-2xl font-medium text-brand-midnight leading-tight pr-4 line-clamp-3">
                        {decodeHTMLEntities(post.title.rendered)}
                      </h3>
                    </div>

                    {/* Read More Text */}
                    <span className="absolute bottom-6 sm:bottom-7 left-5 sm:left-6 text-brand-midnight/80 text-sm font-medium z-0 group-hover:text-brand-midnight transition-colors">
                      Leer artículo
                    </span>

                    {/* Notch effect - Bottom Right Arrow */}
                    <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-brand-surface rounded-tl-[30px] flex items-center justify-center z-10 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
                      <div className="relative w-full h-full flex flex-col">
                        <svg className="absolute -top-6 right-0 w-6 h-6 text-brand-surface fill-current hidden sm:block" viewBox="0 0 24 24"><path d="M24 24H0C13.2548 24 24 13.2548 24 0V24Z"></path></svg>
                        <svg className="absolute bottom-0 -left-6 w-6 h-6 text-brand-surface fill-current hidden sm:block" viewBox="0 0 24 24"><path d="M24 24H0C13.2548 24 24 13.2548 24 0V24Z"></path></svg>
                        <div className="m-auto">
                          <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-brand-midnight transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </m.div>
                );
              })
            ) : null}
          </div>

        </div>
      </section>
    </LazyMotion>
  );
}
