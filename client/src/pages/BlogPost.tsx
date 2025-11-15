import { useRoute, Link } from "wouter";
import { blogPosts } from "@/data/blogPosts";
import { Button } from "@/components/ui/button";
import CTA from "@/components/sections/CTA";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Streamdown } from "streamdown";

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

  return (
    <div className="min-h-screen">
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
            <div className="mb-4 inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
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
                    <article className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="h-full w-full object-cover transition-transform group-hover:scale-105"
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
