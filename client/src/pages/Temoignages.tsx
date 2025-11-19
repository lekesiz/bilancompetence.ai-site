// Header and Footer removed - using global layout from App.tsx
import SEOHead from "@/components/SEOHead";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";
import Breadcrumbs from "@/components/Breadcrumbs";
import ReviewSchema from "@/components/ReviewSchema";

export default function Temoignages() {
  const [selectedRating, setSelectedRating] = useState(5);
  const submitTestimonialMutation = trpc.contact.send.useMutation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const name = formData.get("name") as string;
    const role = formData.get("role") as string;
    const content = formData.get("content") as string;

    try {
      await submitTestimonialMutation.mutateAsync({
        name,
        email: "temoignage@bilancompetence.ai", // Placeholder email
        subject: "Nouveau Témoignage",
        phone: "",
        message: `NOUVEAU TÉMOIGNAGE\n\nNom: ${name}\nProfession: ${role}\nNote: ${selectedRating}/5\n\nTémoignage:\n${content}`,
      });

      toast.success("Merci ! Votre témoignage sera examiné sous 48h.");
      (e.target as HTMLFormElement).reset();
      setSelectedRating(5);
    } catch (error) {
      toast.error("Erreur lors de l'envoi. Veuillez réessayer.");
    }
  };

  const reviews = testimonials.map((t) => ({
    author: t.name,
    rating: t.rating,
    reviewBody: t.content,
    datePublished: '2024-12-01', // Default date
  }));

  return (
    <div className="min-h-screen">
      <ReviewSchema reviews={reviews} />
      <SEOHead
        title="Témoignages : Ils Ont Transformé Leur Carrière"
        description="Découvrez les témoignages de nos clients qui ont réalisé leur bilan de compétences. Histoires inspirantes de reconversion et évolution professionnelle Alsace."
        keywords="témoignages bilan de compétences, avis clients, reconversion professionnelle, success stories, Alsace, Grand-Est"
        canonical="https://bilancompetence.ai/temoignages"
      />
      <Breadcrumbs items={[{ label: "Témoignages" }]} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              Ils Ont Transformé Leur Carrière
            </h1>
            <p className="text-lead text-muted-foreground">
              Découvrez les témoignages authentiques de professionnels qui ont franchi le cap du bilan de compétences avec bilancompetence.ai. Des histoires inspirantes de reconversion, d'évolution et de réussite en Alsace et Grand-Est.
            </p>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="border-b bg-card py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">95%</div>
              <div className="text-sm text-muted-foreground">Taux de satisfaction</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">670+</div>
              <div className="text-sm text-muted-foreground">Bilans réalisés</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-primary">4.8/5</div>
              <div className="text-sm text-muted-foreground">Note moyenne</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-8 md:grid-cols-2">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="p-6">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-5 w-5 fill-primary text-primary"
                        />
                      ))}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.date}
                    </div>
                  </div>
                  <h3 className="mb-2 font-semibold">{testimonial.name} - {testimonial.role}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {testimonial.content}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-sm font-medium">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-gradient-to-br from-primary to-secondary py-16 text-primary-foreground">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
              Prêt à Écrire Votre Propre Success Story ?
            </h2>
            <p className="mb-8 text-lg opacity-90">
              Rejoignez les centaines de professionnels qui ont transformé leur carrière grâce à notre bilan de compétences enrichi par l'IA.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-background px-8 py-3 font-semibold text-foreground transition-colors hover:bg-background/90"
              >
                Commencer Mon Bilan
              </a>
              <a
                href="/faq"
                className="inline-flex items-center justify-center rounded-lg border-2 border-primary-foreground/20 bg-transparent px-8 py-3 font-semibold text-primary-foreground transition-colors hover:border-primary-foreground/40 hover:bg-primary-foreground/10"
              >
                Questions Fréquentes
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Submit Testimonial Form */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-2xl">
            <Card className="p-8">
              <h2 className="mb-2 font-serif text-2xl font-bold">
                Partagez Votre Expérience
              </h2>
              <p className="mb-6 text-sm text-muted-foreground">
                Votre témoignage aidera d'autres professionnels à franchir le pas. Il sera vérifié avant publication.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <Label htmlFor="testimonial-name">Nom *</Label>
                    <Input id="testimonial-name" name="name" required />
                  </div>
                  <div>
                    <Label htmlFor="testimonial-role">Profession</Label>
                    <Input
                      id="testimonial-role"
                      name="role"
                      placeholder="Ex: Chef de projet"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="testimonial-rating">Note *</Label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => setSelectedRating(rating)}
                        className="rounded p-2 hover:bg-primary/10"
                      >
                        <Star
                          className={`h-6 w-6 ${
                            rating <= selectedRating
                              ? "fill-primary text-primary"
                              : "text-muted-foreground"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <Label htmlFor="testimonial-content">Votre témoignage *</Label>
                  <Textarea
                    id="testimonial-content"
                    name="content"
                    rows={6}
                    required
                    placeholder="Partagez votre expérience avec notre bilan de compétences..."
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={submitTestimonialMutation.isPending}
                >
                  {submitTestimonialMutation.isPending
                    ? "Envoi en cours..."
                    : "Envoyer mon témoignage"}
                </Button>
                <p className="text-xs text-muted-foreground">
                  En soumettant ce formulaire, vous acceptez que votre témoignage soit publié sur notre site après validation.
                </p>
              </form>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
