import { Link } from "wouter";
import { blogPosts } from "@/data/blogPosts";
import { Calendar, Clock } from "lucide-react";

export default function Blog() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              Blog & Ressources Carrière
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Conseils d'experts, tendances du marché et guides pratiques pour
              réussir votre transition professionnelle en Alsace et ailleurs.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group"
              >
                <article className="h-full overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm transition-all hover:shadow-md">
                  {/* Image */}
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Category */}
                    <div className="mb-3 inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {post.category}
                    </div>

                    {/* Title */}
                    <h2 className="mb-3 font-serif text-xl font-semibold line-clamp-2 group-hover:text-primary">
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="mb-4 text-sm text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Meta */}
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
        </div>
      </section>
    </div>
  );
}
