import { useRoute, Link } from "wouter";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import CTA from "@/components/sections/CTA";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Streamdown } from "streamdown";
import ArticleSchema from "@/components/ArticleSchema";
import SEOHead from "@/components/SEOHead";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const post = blogPosts.find((p) => p.slug === params?.slug);

  if (!post) {
    return (
      <div className="container flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 font-serif text-4xl font-bold">
            Article Non Trouvé
          </h1>
          <p className="mb-6 text-muted-foreground">
            Désolé, cet article n'existe pas ou a été supprimé.
          </p>
          <Button asChild>
            <Link href="/blog">Retour au Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  const currentUrl = `https://bilancompetence.ai/blog/${post.slug}`;
  
  // Safe date parsing with fallback
  const parseFrenchDate = (dateStr: string): string => {
    try {
      // Try parsing as ISO date first
      const isoDate = new Date(dateStr);
      if (!isNaN(isoDate.getTime())) {
        return isoDate.toISOString().split('T')[0];
      }
      
      // Parse French format: "5 décembre 2025"
      const months: Record<string, string> = {
        'janvier': '01', 'février': '02', 'mars': '03', 'avril': '04',
        'mai': '05', 'juin': '06', 'juillet': '07', 'août': '08',
        'septembre': '09', 'octobre': '10', 'novembre': '11', 'décembre': '12'
      };
      
      const match = dateStr.match(/(\d+)\s+(\w+)\s+(\d{4})/);
      if (match) {
        const [, day, month, year] = match;
        const monthNum = months[month.toLowerCase()];
        if (monthNum) {
          return `${year}-${monthNum}-${day.padStart(2, '0')}`;
        }
      }
      
      // Fallback to current date
      return new Date().toISOString().split('T')[0];
    } catch {
      return new Date().toISOString().split('T')[0];
    }
  };
  
  const datePublished = parseFrenchDate(post.date);

  return (
    <div className="min-h-screen">
      <SEOHead
        title={`${post.title} - bilancompetence.ai`}
        description={post.excerpt}
        canonical={currentUrl}
      />
      <ArticleSchema
        title={post.title}
        description={post.excerpt}
        author={post.author}
        datePublished={datePublished}
        image={post.image}
        url={currentUrl}
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            {/* Back Button */}
            <Button asChild variant="ghost" className="mb-6">
              <Link href="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour au Blog
              </Link>
            </Button>

            {/* Category */}
            <div className="mb-4 inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
              {post.category}
            </div>

            {/* Title */}
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime} de lecture</span>
              </div>
              <div>Par {post.author}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="border-b">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <div className="aspect-video overflow-hidden rounded-lg">
              <img
                src={post.image}
                alt={post.title}
                className="h-full w-full object-cover"
                width="1200"
                height="675"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container">
          <div className="prose prose-slate mx-auto max-w-4xl dark:prose-invert prose-headings:font-serif prose-h2:text-3xl prose-h2:font-bold prose-h3:text-2xl prose-h3:font-semibold prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
            <Streamdown>{post.content}</Streamdown>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="border-t bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 font-serif text-3xl font-bold">
              Articles Connexes
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {blogPosts
                .filter((p) => p.slug !== post.slug)
                .slice(0, 2)
                .map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group"
                  >
                    <article className="overflow-hidden rounded-lg border bg-card card-hover-subtle text-card-foreground shadow-soft transition-all hover:shadow-medium">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="h-full w-full object-cover transition-transform group-hover:scale-105"
                          loading="lazy"
                          width="800"
                          height="450"
                        />
                      </div>
                      <div className="p-4">
                        <div className="mb-2 text-xs font-medium text-primary">
                          {relatedPost.category}
                        </div>
                        <h3 className="font-serif text-lg font-semibold line-clamp-2 group-hover:text-primary">
                          {relatedPost.title}
                        </h3>
                      </div>
                    </article>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>

      <CTA variant="secondary" />
    </div>
  );
}
