import { z } from "zod";
import { publicProcedure, router } from "../_core/trpc";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const COMPANY_EMAIL = "contact@netzinformatique.fr";

export const newsletterRouter = router({
  subscribe: publicProcedure
    .input(
      z.object({
        email: z.string().email("Email invalide"),
      })
    )
    .mutation(async ({ input }) => {
      const { email } = input;

      if (!RESEND_API_KEY) {
        console.error("[Newsletter] RESEND_API_KEY not found in environment");
        console.error("[Newsletter] Available env vars:", Object.keys(process.env).filter(k => k.includes('RESEND')));
        throw new Error("Service temporairement indisponible. Veuillez réessayer plus tard.");
      }

      try {
        // Send confirmation email to subscriber
        const subscriberEmailResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "noreply@bilancompetence.ai",
            to: email,
            subject: "Bienvenue dans notre newsletter !",
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h1 style="color: #2563eb;">Bienvenue chez bilancompetence.ai !</h1>
                <p>Merci de vous être inscrit à notre newsletter.</p>
                <p>Vous recevrez désormais nos meilleurs conseils pour votre carrière :</p>
                <ul>
                  <li>Guides pratiques sur le bilan de compétences</li>
                  <li>Tendances du marché de l'emploi en Alsace</li>
                  <li>Conseils pour votre reconversion professionnelle</li>
                  <li>Actualités sur le financement CPF</li>
                </ul>
                <p style="margin-top: 30px;">À très bientôt,<br><strong>L'équipe bilancompetence.ai</strong></p>
                <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
                <p style="font-size: 12px; color: #6b7280;">
                  Vous recevez cet email car vous vous êtes inscrit sur bilancompetence.ai.
                  <br>Pour vous désinscrire, répondez à cet email avec "STOP".
                </p>
              </div>
            `,
          }),
        });

        if (!subscriberEmailResponse.ok) {
          const errorData = await subscriberEmailResponse.json();
          console.error("[Newsletter] Resend API error:", errorData);
          throw new Error("Erreur lors de l'envoi de l'email de confirmation");
        }

        // Send notification to company
        const notificationEmailResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "noreply@bilancompetence.ai",
            to: COMPANY_EMAIL,
            subject: "[Newsletter] Nouvel abonné",
            html: `
              <div style="font-family: Arial, sans-serif;">
                <h2>Nouvel abonné à la newsletter</h2>
                <p><strong>Email :</strong> ${email}</p>
                <p><strong>Date :</strong> ${new Date().toLocaleString("fr-FR")}</p>
              </div>
            `,
          }),
        });

        if (!notificationEmailResponse.ok) {
          console.error("[Newsletter] Failed to send notification email");
          // Don't throw error, subscriber email was sent successfully
        }

        console.log(`[Newsletter] New subscriber: ${email}`);
        
        return {
          success: true,
          message: "Inscription réussie",
        };
      } catch (error) {
        console.error("[Newsletter] Error:", error);
        console.error("[Newsletter] Error details:", error instanceof Error ? error.message : String(error));
        throw new Error("Une erreur est survenue. Veuillez réessayer plus tard ou nous contacter directement.");
      }
    }),
});
