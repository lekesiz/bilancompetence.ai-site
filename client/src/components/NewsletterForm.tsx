import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Loader2, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { trpc } from "@/lib/trpc";

interface NewsletterFormProps {
  variant?: "default" | "compact";
  className?: string;
}

export function NewsletterForm({ variant = "default", className = "" }: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const subscribeMutation = trpc.newsletter.subscribe.useMutation({
    onSuccess: () => {
      setIsSuccess(true);
      setEmail("");
      toast.success("Merci ! Vous êtes inscrit à notre newsletter.");
      
      // Reset success state after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    },
    onError: (error) => {
      console.error("Newsletter subscription error:", error);
      toast.error("Une erreur est survenue. Veuillez réessayer.");
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes("@")) {
      toast.error("Veuillez entrer une adresse email valide");
      return;
    }

    subscribeMutation.mutate({ email });
  };

  if (variant === "compact") {
    return (
      <form onSubmit={handleSubmit} className={`flex gap-2 ${className}`}>
        <Input
          type="email"
          placeholder="Votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={subscribeMutation.isPending || isSuccess}
          className="flex-1"
          required
        />
        <Button 
          type="submit" 
          disabled={subscribeMutation.isPending || isSuccess}
          size="sm"
        >
          {subscribeMutation.isPending ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : isSuccess ? (
            <CheckCircle2 className="h-4 w-4" />
          ) : (
            "S'inscrire"
          )}
        </Button>
      </form>
    );
  }

  return (
    <div className={`rounded-lg border bg-card p-6 ${className}`}>
      <div className="mb-4 flex items-center gap-3">
        <div className="rounded-full bg-primary/10 p-3">
          <Mail className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Restez Informé</h3>
          <p className="text-sm text-muted-foreground">
            Recevez nos conseils carrière et actualités
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          type="email"
          placeholder="Votre adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={subscribeMutation.isPending || isSuccess}
          required
        />
        <Button 
          type="submit" 
          className="w-full"
          disabled={subscribeMutation.isPending || isSuccess}
        >
          {subscribeMutation.isPending ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Inscription en cours...
            </>
          ) : isSuccess ? (
            <>
              <CheckCircle2 className="mr-2 h-4 w-4" />
              Inscrit avec succès !
            </>
          ) : (
            "S'inscrire à la Newsletter"
          )}
        </Button>
        <p className="text-xs text-muted-foreground">
          En vous inscrivant, vous acceptez de recevoir nos emails. Vous pouvez vous désinscrire à tout moment.
        </p>
      </form>
    </div>
  );
}
