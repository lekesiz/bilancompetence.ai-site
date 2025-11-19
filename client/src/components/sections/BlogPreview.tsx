import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

export default function BlogPreview() {
  // İlk 3 blog yazısını göster
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex items-end justify-between">
            <div>
              <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
                Actualités et Conseils
              </h2>
              <p className="max-w-2xl text-lg text-muted-foreground">
                Découvrez nos derniers articles sur le bilan de compétences, la reconversion professionnelle et le marché du travail en Alsace.
              </p>
            </div>
            <Button asChild variant="outline" className="hidden md:flex">
              <Link href="/blog">
                Voir tous les articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="group h-full rounded-lg border bg-card card-hover-subtle text-card-foreground shadow-soft transition-all hover:shadow-medium">
                  <div className="p-6">
                    <div className="mb-3 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {post.category}
                    </div>
                    <h3 className="mb-3 font-serif text-lg font-semibold group-hover:text-primary">
                      {post.title}
                    </h3>
                    <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button asChild variant="outline">
              <Link href="/blog">
                Voir tous les articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
