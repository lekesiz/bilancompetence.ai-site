import { publicProcedure, router } from "../_core/trpc";
import { z } from "zod";

const RESEND_API_URL = "https://api.resend.com/emails";

export const contactRouter = router({
  // Debug endpoint to check if RESEND_API_KEY is loaded (development only)
  checkApiKey: publicProcedure.query(() => {
    const hasKey = !!process.env.RESEND_API_KEY;
    const keyPrefix = process.env.RESEND_API_KEY?.substring(0, 8) || 'NOT_FOUND';
    return {
      hasKey,
      keyPrefix,
      nodeEnv: process.env.NODE_ENV,
    };
  }),
  send: publicProcedure
    .input(
      z.object({
        name: z.string().min(2, "Le nom doit contenir au moins 2 caract\u00e8res"),
        email: z.string().email("Email invalide"),
        phone: z.string().optional(),
        subject: z.string().min(5, "Le sujet doit contenir au moins 5 caract\u00e8res"),
        message: z.string().min(20, "Le message doit contenir au moins 20 caract\u00e8res"),
      })
    )
    .mutation(async ({ input }) => {
      // Read API key at runtime (Manus injects secrets at runtime)
      const RESEND_API_KEY = process.env.RESEND_API_KEY;
      
      if (!RESEND_API_KEY) {
        console.error("[Contact] RESEND_API_KEY not found in environment");
        console.error("[Contact] Available env vars:", Object.keys(process.env).filter(k => k.includes('RESEND')));
        throw new Error("Service temporairement indisponible. Veuillez nous contacter par téléphone au +33 3 67 31 02 01.");
      }

      const emailHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0284c7 0%, #0891b2 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #0284c7; display: block; margin-bottom: 5px; }
            .value { background: white; padding: 12px; border-radius: 4px; border-left: 3px solid #0891b2; }
            .footer { text-align: center; margin-top: 30px; color: #6b7280; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">📧 Nouveau Message de Contact</h1>
              <p style="margin: 10px 0 0 0; opacity: 0.9;">bilancompetence.ai</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">👤 Nom</span>
                <div class="value">${input.name}</div>
              </div>
              <div class="field">
                <span class="label">📧 Email</span>
                <div class="value"><a href="mailto:${input.email}">${input.email}</a></div>
              </div>
              ${
                input.phone
                  ? `
              <div class="field">
                <span class="label">📞 Téléphone</span>
                <div class="value"><a href="tel:${input.phone}">${input.phone}</a></div>
              </div>
              `
                  : ""
              }
              <div class="field">
                <span class="label">📋 Sujet</span>
                <div class="value">${input.subject}</div>
              </div>
              <div class="field">
                <span class="label">💬 Message</span>
                <div class="value" style="white-space: pre-wrap;">${input.message}</div>
              </div>
              <div class="footer">
                <p>Ce message a été envoyé depuis le formulaire de contact de <strong>bilancompetence.ai</strong></p>
                <p style="margin-top: 10px;">
                  <a href="mailto:${input.email}" style="color: #0284c7; text-decoration: none;">Répondre directement</a>
                </p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `;

      try {
        const response = await fetch(RESEND_API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "Contact BilanCompetence.ai <noreply@bilancompetence.ai>",
            to: ["contact@netzinformatique.fr"],
            subject: `[Contact] ${input.subject}`,
            html: emailHtml,
            reply_to: input.email,
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Resend API error (full):", JSON.stringify(errorData, null, 2));
          console.error("Response status:", response.status, response.statusText);
          throw new Error(`Échec de l'envoi de l'email: ${JSON.stringify(errorData)}`);
        }

        const data = await response.json();
        return {
          success: true,
          messageId: data.id,
        };
      } catch (error) {
        console.error("[Contact] Error sending email:", error);
        console.error("[Contact] Error details:", error instanceof Error ? error.message : String(error));
        // Re-throw the original error message if available
        if (error instanceof Error) {
          throw error;
        }
        throw new Error("Une erreur s'est produite lors de l'envoi du message. Veuillez nous contacter directement au +33 3 67 31 02 01.");
      }
    }),
});
