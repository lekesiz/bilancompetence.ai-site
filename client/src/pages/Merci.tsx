import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { CheckCircle, Phone, Calendar, ArrowRight } from "lucide-react";
import { COMPANY_PHONE } from "@/const";
import { trackConversion, trackCTAClick } from "@/components/GoogleAnalytics";
import { Link } from "wouter";

export default function Merci() {
  useEffect(() => {
    // Track conversion when user lands on this page
    trackConversion("contact_form_submission");
  }, []);

  const handlePhoneClick = () => {
    trackCTAClick("call_now", "merci_page");
  };

  const handleScheduleClick = () => {
    trackCTAClick("schedule_call", "merci_page");
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Merci pour Votre Message - bilancompetence.ai"
        description="Votre message a été reçu. Nous vous répondrons sous 24h."
        canonical="https://bilancompetence.ai/merci"
      />

      {/* Success Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-background to-accent/10 py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 inline-flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-green-600">
              <CheckCircle className="h-12 w-12" />
            </div>
            
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              Merci pour Votre Message !
            </h1>
            
            <p className="mb-8 text-lead text-muted-foreground">
              Votre demande a été reçue avec succès. Notre équipe vous répondra dans les{" "}
              <strong className="text-primary">24 heures ouvrées</strong>.
            </p>

            <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-6">
              <p className="text-sm text-muted-foreground">
                📧 Un email de confirmation a été envoyé à l'adresse que vous avez fournie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Steps */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center font-serif text-3xl font-bold md:text-4xl">
              Et Maintenant ?
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              {/* CTA 1: Call Now */}
              <div className="rounded-lg border bg-card card-hover-subtle p-8 text-center shadow-soft transition-shadow hover:shadow-medium">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Phone className="h-8 w-8" />
                </div>
                <h3 className="mb-4 font-serif text-2xl font-bold">
                  Besoin d'une Réponse Immédiate ?
                </h3>
                <p className="mb-6 text-muted-foreground">
                  Appelez-nous directement pour discuter de votre projet professionnel avec un conseiller.
                </p>
                <Button size="lg" className="w-full" asChild onClick={handlePhoneClick}>
                  <a href={`tel:${COMPANY_PHONE}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    {COMPANY_PHONE}
                  </a>
                </Button>
              </div>

              {/* CTA 2: Schedule Call */}
              <div className="rounded-lg border bg-card card-hover-subtle p-8 text-center shadow-soft transition-shadow hover:shadow-medium">
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Calendar className="h-8 w-8" />
                </div>
                <h3 className="mb-4 font-serif text-2xl font-bold">
                  Planifiez un Entretien Gratuit
                </h3>
                <p className="mb-6 text-muted-foreground">
                  Réservez un créneau pour un entretien préliminaire de 30 minutes, sans engagement.
                </p>
                <Button size="lg" variant="outline" className="w-full" asChild onClick={handleScheduleClick}>
                  <a href={`mailto:${COMPANY_PHONE}`}>
                    <Calendar className="mr-2 h-5 w-5" />
                    Planifier un Rendez-vous
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="bg-muted py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center font-serif text-3xl font-bold">
              Que Se Passe-t-il Ensuite ?
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Analyse de Votre Demande</h3>
                  <p className="text-muted-foreground">
                    Notre équipe étudie votre message et prépare une réponse personnalisée adaptée à votre situation.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Réponse Sous 24h</h3>
                  <p className="text-muted-foreground">
                    Vous recevrez une réponse détaillée par email ou téléphone selon votre préférence.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Entretien Préliminaire Gratuit</h3>
                  <p className="text-muted-foreground">
                    Nous planifions ensemble un entretien de 30 minutes pour mieux comprendre vos besoins et objectifs.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-white font-bold">
                  4
                </div>
                <div>
                  <h3 className="mb-2 font-semibold">Proposition Personnalisée</h3>
                  <p className="text-muted-foreground">
                    Nous vous proposons un parcours de bilan de compétences adapté à votre profil et vos ambitions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore More */}
      <section className="py-16">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-8 font-serif text-3xl font-bold">
              En Attendant, Découvrez...
            </h2>
            
            <div className="grid gap-6 md:grid-cols-3">
              <Link href="/bilan-de-competences/approche-ia" className="group rounded-lg border bg-card card-hover-subtle p-6 text-left transition-all hover:border-primary hover:shadow-medium">
                <h3 className="mb-2 font-semibold group-hover:text-primary">
                  Notre Approche IA
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Découvrez comment l'intelligence artificielle enrichit votre bilan.
                </p>
                <span className="inline-flex items-center text-sm font-medium text-primary">
                  En savoir plus <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>

              <Link href="/faq" className="group rounded-lg border bg-card card-hover-subtle p-6 text-left transition-all hover:border-primary hover:shadow-medium">
                <h3 className="mb-2 font-semibold group-hover:text-primary">
                  Questions Fréquentes
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Trouvez des réponses à vos questions sur le bilan de compétences.
                </p>
                <span className="inline-flex items-center text-sm font-medium text-primary">
                  Consulter la FAQ <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>

              <Link href="/financement/cpf" className="group rounded-lg border bg-card card-hover-subtle p-6 text-left transition-all hover:border-primary hover:shadow-medium">
                <h3 className="mb-2 font-semibold group-hover:text-primary">
                  Financement CPF
                </h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Apprenez comment financer votre bilan avec votre CPF.
                </p>
                <span className="inline-flex items-center text-sm font-medium text-primary">
                  Découvrir <ArrowRight className="ml-1 h-4 w-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
