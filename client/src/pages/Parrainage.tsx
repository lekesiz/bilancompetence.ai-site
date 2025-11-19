import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SEOHead from "@/components/SEOHead";
import { Gift, Users, Euro, Share2, Copy, Check } from "lucide-react";
import { toast } from "sonner";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function Parrainage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [copied, setCopied] = useState(false);
  
  // Demo promo code (in production, this would be generated per user)
  const promoCode = "BILANAMI50";
  const referralLink = `https://bilancompetence.ai?ref=${promoCode}`;

  const handleCopyCode = () => {
    navigator.clipboard.writeText(promoCode);
    setCopied(true);
    toast.success("Code promo copié !");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(referralLink);
    toast.success("Lien de parrainage copié !");
  };

  const handleSendInvitation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) {
      toast.error("Veuillez remplir tous les champs");
      return;
    }
    
    // In production: send invitation email via tRPC
    toast.success(`Invitation envoyée à ${name} !`);
    setEmail("");
    setName("");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead
        title="Programme de Parrainage - Gagnez 50€ par filleul"
        description="Parrainez vos amis et gagnez 50€ pour chaque bilan de compétences réalisé. Votre filleul bénéficie d'une réduction de 50€. Programme gagnant-gagnant 2025."
        keywords="parrainage, réduction, code promo, bilan de compétences, offre spéciale"
        canonical="https://bilancompetence.ai/parrainage"
      />
      <Breadcrumbs items={[{ label: "Parrainage" }]} />
      
      <main className="flex-1 py-16">
        <div className="container">
          {/* Hero Section */}
          <div className="mx-auto max-w-4xl text-center mb-16">
            <div className="mb-6 inline-flex rounded-full bg-primary/10 p-6">
              <Gift className="h-12 w-12 text-primary" />
            </div>
            <h1 className="mb-6 font-serif text-4xl font-bold md:text-5xl">
              Parrainez et Gagnez 50€
            </h1>
            <p className="text-lg text-muted-foreground">
              Recommandez notre bilan de compétences à vos proches et recevez 50€ pour chaque parrainage réussi.
              Votre filleul bénéficie également d'une réduction de 50€ !
            </p>
          </div>

          {/* How it works */}
          <div className="mb-16">
            <h2 className="mb-8 text-center font-serif text-3xl font-bold">
              Comment ça marche ?
            </h2>
            <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
              <Card className="p-6 text-center">
                <div className="mb-4 inline-flex rounded-full bg-blue-100 p-4">
                  <Share2 className="h-8 w-8 text-blue-600" />
                </div>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold mx-auto">
                  1
                </div>
                <h3 className="mb-3 font-semibold text-lg">Partagez votre code</h3>
                <p className="text-sm text-muted-foreground">
                  Envoyez votre code promo personnel à vos amis, famille ou collègues
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="mb-4 inline-flex rounded-full bg-green-100 p-4">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold mx-auto">
                  2
                </div>
                <h3 className="mb-3 font-semibold text-lg">Votre filleul s'inscrit</h3>
                <p className="text-sm text-muted-foreground">
                  Il utilise votre code pour bénéficier de 50€ de réduction sur son bilan
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="mb-4 inline-flex rounded-full bg-purple-100 p-4">
                  <Euro className="h-8 w-8 text-purple-600" />
                </div>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold mx-auto">
                  3
                </div>
                <h3 className="mb-3 font-semibold text-lg">Recevez votre récompense</h3>
                <p className="text-sm text-muted-foreground">
                  Dès que votre filleul complète son bilan, vous recevez 50€ par virement
                </p>
              </Card>
            </div>
          </div>

          {/* Promo Code Section */}
          <div className="mb-16 mx-auto max-w-3xl">
            <Card className="p-8">
              <h2 className="mb-6 text-center font-serif text-2xl font-bold">
                Votre Code de Parrainage
              </h2>
              
              <div className="mb-6 rounded-lg bg-muted/30 p-6 text-center">
                <p className="mb-3 text-sm text-muted-foreground">Votre code promo personnel</p>
                <div className="mb-4 flex items-center justify-center gap-4">
                  <span className="font-mono text-3xl font-bold tracking-wider">
                    {promoCode}
                  </span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCopyCode}
                  >
                    {copied ? (
                      <>
                        <Check className="mr-2 h-4 w-4" />
                        Copié
                      </>
                    ) : (
                      <>
                        <Copy className="mr-2 h-4 w-4" />
                        Copier
                      </>
                    )}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Lien de parrainage : {referralLink}
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleCopyLink}
                  className="mt-2"
                >
                  <Copy className="mr-2 h-3 w-3" />
                  Copier le lien
                </Button>
              </div>

              <div className="rounded-lg border bg-card card-hover-subtle p-6">
                <h3 className="mb-4 font-semibold">Inviter un ami par email</h3>
                <form onSubmit={handleSendInvitation} className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Nom de votre ami
                    </label>
                    <input
                      type="text"
                      placeholder="Jean Dupont"
                      className="w-full rounded-lg border px-4 py-2"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Email de votre ami
                    </label>
                    <input
                      type="email"
                      placeholder="jean@example.com"
                      className="w-full rounded-lg border px-4 py-2"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Share2 className="mr-2 h-4 w-4" />
                    Envoyer l'invitation
                  </Button>
                </form>
              </div>
            </Card>
          </div>

          {/* Benefits */}
          <div className="mx-auto max-w-4xl">
            <Card className="p-8 bg-gradient-to-br from-primary/5 to-primary/10">
              <h2 className="mb-6 text-center font-serif text-2xl font-bold">
                Avantages du Programme
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Gift className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">Récompense garantie</h3>
                    <p className="text-sm text-muted-foreground">
                      50€ par filleul qui complète son bilan de compétences
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">Parrainages illimités</h3>
                    <p className="text-sm text-muted-foreground">
                      Aucune limite au nombre de personnes que vous pouvez parrainer
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Euro className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">Paiement rapide</h3>
                    <p className="text-sm text-muted-foreground">
                      Virement bancaire sous 7 jours après validation du bilan
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">Avantage mutuel</h3>
                    <p className="text-sm text-muted-foreground">
                      Votre filleul économise aussi 50€ sur son bilan
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="mb-4 text-muted-foreground">
              Des questions sur le programme de parrainage ?
            </p>
            <Button asChild variant="outline">
              <a href="/contact">Contactez-nous</a>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
