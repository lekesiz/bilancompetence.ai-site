import { useState } from "react";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/SEOHead";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { COMPANY_NAME, COMPANY_PHONE, COMPANY_EMAIL, COMPANY_ADDRESS } from "@/const";
import { MapPin, Phone, Mail, Loader2 } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { useLocation } from "wouter";
import { trackFormSubmission } from "@/components/GoogleAnalytics";

export default function Contact() {
  const [, setLocation] = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const sendContactMutation = trpc.contact.send.useMutation({
    onSuccess: () => {
      trackFormSubmission("contact_form");
      // Redirect to thank you page
      setLocation("/merci");
    },
    onError: (error: any) => {
      console.error("Contact form error:", error);
      
      // Try to parse error message from different possible structures
      let errorMessage = "Une erreur s'est produite. Veuillez réessayer.";
      
      // Check for Zod validation errors in tRPC format
      if (error.data?.zodError?.issues && error.data.zodError.issues.length > 0) {
        errorMessage = error.data.zodError.issues[0].message;
      }
      // Check for field errors
      else if (error.data?.zodError?.fieldErrors) {
        const firstField = Object.keys(error.data.zodError.fieldErrors)[0];
        const firstMessage = error.data.zodError.fieldErrors[firstField]?.[0];
        if (firstMessage) {
          errorMessage = firstMessage;
        }
      }
      // Check for direct error message
      else if (error.message) {
        errorMessage = error.message;
      }
      // Check for shape.message (tRPC format)
      else if (error.shape?.message) {
        errorMessage = error.shape.message;
      }
      
      toast.error(errorMessage);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation basique
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    sendContactMutation.mutate(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Contact : Prenez Rendez-vous pour Votre Bilan de Compétences"
        description="Contactez-nous pour un entretien préliminaire gratuit. Haguenau, Alsace. Réponse sous 24h. Tél, email, formulaire en ligne. Experts certifiés Qualiopi."
        keywords="contact bilan compétences, rendez-vous, Haguenau, Alsace, entretien gratuit"
        canonical="https://bilancompetence.ai/contact"
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl lg:text-6xl">
              Contactez-nous pour un Entretien Préalable Gratuit
            </h1>
            <p className="text-lead text-muted-foreground">
              Nous sommes à votre écoute pour répondre à toutes vos questions et vous accompagner dans votre projet professionnel.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6 font-serif text-3xl font-bold">Envoyez-nous un Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    Nom complet <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jean Dupont"
                    required
                    disabled={sendContactMutation.isPending}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jean.dupont@example.com"
                    required
                    disabled={sendContactMutation.isPending}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="mb-2 block text-sm font-medium">
                    Téléphone (optionnel)
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="06 12 34 56 78"
                    disabled={sendContactMutation.isPending}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-medium">
                    Sujet <span className="text-destructive">*</span>
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Demande d'information sur le bilan de compétences"
                    required
                    disabled={sendContactMutation.isPending}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium">
                    Message <span className="text-destructive">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet professionnel et vos attentes..."
                    rows={6}
                    required
                    disabled={sendContactMutation.isPending}
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={sendContactMutation.isPending}
                >
                  {sendContactMutation.isPending ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    "Envoyer le Message"
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="mb-6 font-serif text-3xl font-bold">Nos Coordonnées</h2>
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">Adresse</h3>
                    <p className="text-muted-foreground">{COMPANY_ADDRESS}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">Téléphone</h3>
                    <a
                      href={`tel:${COMPANY_PHONE}`}
                      className="text-primary hover:underline"
                    >
                      {COMPANY_PHONE}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">Email</h3>
                    <a
                      href={`mailto:${COMPANY_EMAIL}`}
                      className="text-primary hover:underline"
                    >
                      {COMPANY_EMAIL}
                    </a>
                  </div>
                </div>

                <div className="rounded-lg bg-muted p-6">
                  <h3 className="mb-3 font-semibold">Horaires d'Ouverture</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Lundi - Vendredi</span>
                      <span className="font-medium">9h00 - 18h00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Samedi</span>
                      <span className="font-medium">Sur rendez-vous</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Dimanche</span>
                      <span className="font-medium">Fermé</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-lg border-2 border-primary/20 bg-primary/5 p-6">
                  <h3 className="mb-3 font-semibold text-primary">Réponse Rapide</h3>
                  <p className="text-sm text-muted-foreground">
                    Nous nous engageons à vous répondre sous <strong>24 heures ouvrées</strong>.
                    Pour les demandes urgentes, n'hésitez pas à nous appeler directement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary to-accent py-16 text-white">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold md:text-4xl">
              Prêt à Donner un Nouvel Élan à Votre Carrière ?
            </h2>
            <p className="mb-8 text-lg opacity-90">
              Planifiez un entretien préliminaire gratuit et sans engagement pour découvrir comment notre bilan de compétences peut vous aider.
            </p>
            <Button size="lg" variant="secondary" asChild>
              <a href={`tel:${COMPANY_PHONE}`}>
                <Phone className="mr-2 h-5 w-5" />
                Appelez-nous Maintenant
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
