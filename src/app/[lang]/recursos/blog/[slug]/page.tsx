import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User } from 'lucide-react';

// For static export
export const dynamic = 'force-static';

interface Props {
  params: Promise<{ slug: string; lang: string }>;
}

// Generate static params for static export
export async function generateStaticParams() {
  try {
    const res = await fetch(`https://blog.sintergica.ai/wp-json/wp/v2/posts?per_page=100`, { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    
    const posts = await res.json();
    // Exclude pt-BR temporarily due to SSG export errors
    const locales = ['es', 'en'];
    
    const paths = [];
    
    for (const locale of locales) {
      for (const post of posts) {
        if (post && post.slug) {
          paths.push({
            lang: locale,
            slug: post.slug.toString()
          });
        }
      }
    }
    
    return paths;
  } catch (error) {
    console.error('Error generating static params:', error);
    return []; 
  }
}

// Fetch single post data by slug
async function getPost(slug: string) {
  try {
    const res = await fetch(`https://blog.sintergica.ai/wp-json/wp/v2/posts?slug=${slug}&_embed=1`, { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    const posts = await res.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const post = await getPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-brand-surface dark:bg-brand-midnight text-brand-midnight dark:text-brand-surface flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Artículo no encontrado</h1>
          <a href={`/${resolvedParams.lang}/recursos/blog`} className="text-brand-accent hover:underline">Volver al blog</a>
        </div>
      </div>
    );
  }

  const title = post?.title?.rendered || 'Title';
  const content = post?.content?.rendered || '';
  const imageUrl = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || post.yoast_head_json?.og_image?.[0]?.url || "";
  const author = post._embedded?.author?.[0]?.name || "Equipo Sintérgica";
  const dateStr = post.date ? new Date(post.date).toLocaleDateString("es-MX", { month: "long", day: "numeric", year: "numeric" }) : "";
  const category = post._embedded?.['wp:term']?.[0]?.[0]?.name;

  return (
    <div className="min-h-screen bg-brand-surface dark:bg-brand-midnight text-brand-midnight dark:text-brand-surface print:bg-transparent print:bg-white flex flex-col">
      <div className="print-hide">
        <Navbar />
      </div>

      <main className="flex-1 pt-32 pb-24">
        <article className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          
          {/* Back Button */}
          <Link 
            href={`/${resolvedParams.lang}/recursos/blog`} 
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-midnight/60 dark:text-brand-white/60 hover:text-brand-accent transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al blog
          </Link>

          {/* Header */}
          <header className="mb-12 text-center md:text-left">
            {category && (
              <span className="inline-block bg-brand-accent/10 text-brand-accent text-sm font-bold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
                {category}
              </span>
            )}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-proxima font-bold text-brand-midnight dark:text-brand-white leading-tight mb-8" dangerouslySetInnerHTML={{ __html: title }} />
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm text-brand-midnight/60 dark:text-brand-white/60 bg-white/50 dark:bg-brand-midnight/50 backdrop-blur-sm p-4 rounded-2xl border border-brand-midnight/5 dark:border-brand-white/5 w-fit mx-auto md:mx-0">
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                <span className="font-medium">Por {author}</span>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-brand-midnight/20 dark:bg-brand-white/20 hidden sm:block"></div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span className="font-medium">{dateStr}</span>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          {imageUrl && (
            <div className="relative w-full aspect-[16/9] md:aspect-[2/1] rounded-3xl overflow-hidden mb-16 bg-neutral-100 dark:bg-brand-deep shadow-2xl shadow-brand-midnight/5">
              <Image 
                src={imageUrl} 
                alt="Imagen destacada del artículo" 
                fill 
                className="object-cover" 
                priority
              />
            </div>
          )}

          {/* Content Body */}
          <div 
            className="prose prose-lg dark:prose-invert prose-brand max-w-none mx-auto prose-headings:font-proxima prose-a:text-brand-accent hover:prose-a:text-brand-400 prose-img:rounded-3xl prose-img:shadow-xl prose-p:leading-relaxed"
            dangerouslySetInnerHTML={{ __html: content }} 
          />

        </article>
      </main>

      <div className="print-hide">
        <Footer />
      </div>
    </div>
  );
}
