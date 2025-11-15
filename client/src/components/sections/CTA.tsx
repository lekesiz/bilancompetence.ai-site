import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { COMPANY_PHONE } from "@/const";

interface CTAProps {
  variant?: "default" | "secondary";
}

export default function CTA({ variant = "default" }: CTAProps) {
  if (variant === "secondary") {
    return (
      <section className="border-y bg-muted/30 py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-serif text-2xl font-bold md:text-3xl">
              Prêt à Transformer Votre Carrière ?
            </h2>
            <p className="mb-6 text-muted-foreground">
              Réservez votre entretien préliminaire gratuit et sans engagement.
              Découvrez comment le bilan de compétences peut vous aider.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">Prendre Rendez-vous</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={`tel:${COMPANY_PHONE.replace(/\s/g, "")}`}>
                  Appelez-nous: {COMPANY_PHONE}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary to-secondary py-20 text-primary-foreground">
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl lg:text-5xl">
            Kariyerinizin Kontrolünü Elinize Alın
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/90">
            Ücretsiz ön görüşmemizde, hedeflerinizi dinler, size en uygun
            programı önerir ve tüm sorularınızı yanıtlarız. Hiçbir bağlayıcılık
            yok, sadece samimi bir kariyer sohbeti.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto"
            >
              <Link href="/contact?source=cta_main">
                Ücretsiz Görüşme Talep Edin
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 sm:w-auto"
            >
              <Link href="/financement/tarifs">Tarifelerimizi Görün</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-white/5 blur-3xl" />
    </section>
  );
}
