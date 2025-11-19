import { z } from "zod";
import { router, publicProcedure } from "../_core/trpc";
import { getDb } from "../db";
import { appointments } from "../../drizzle/schema";
import { eq, gte, and } from "drizzle-orm";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const COMPANY_EMAIL = "contact@netzinformatique.fr";

export const bookingRouter = router({
  // Get available time slots for a specific date
  getAvailableSlots: publicProcedure
    .input(
      z.object({
        date: z.string(), // ISO date string (YYYY-MM-DD)
      })
    )
    .query(async ({ input }: { input: { date: string } }) => {
      const { date } = input;
      
      // Get all appointments for the specified date
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      
      const existingAppointments = await db
        .select()
        .from(appointments)
        .where(
          and(
            gte(appointments.date, new Date(`${date}T00:00:00`)),
            eq(appointments.status, "confirmed" as any)
          )
        );

      // Define available time slots (9:00 - 18:00, 1-hour intervals)
      const allSlots = [
        "09:00-10:00",
        "10:00-11:00",
        "11:00-12:00",
        "14:00-15:00", // Lunch break 12:00-14:00
        "15:00-16:00",
        "16:00-17:00",
        "17:00-18:00",
      ];

      // Filter out booked slots
      const bookedSlots = existingAppointments.map((apt: any) => apt.timeSlot);
      const availableSlots = allSlots.filter(
        (slot) => !bookedSlots.includes(slot)
      );

      return {
        date,
        availableSlots,
        bookedSlots,
      };
    }),

  // Create a new appointment
  createAppointment: publicProcedure
    .input(
      z.object({
        firstName: z.string().min(2, "Le prénom doit contenir au moins 2 caractères"),
        lastName: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
        email: z.string().email("Email invalide"),
        phone: z.string().min(10, "Numéro de téléphone invalide"),
        date: z.string(), // ISO date string
        timeSlot: z.string(),
        notes: z.string().optional(),
      })
    )
    .mutation(async ({ input }: any) => {
      const { firstName, lastName, email, phone, date, timeSlot, notes } = input;

      // Check if slot is still available
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      
      const existingAppointment = await db
        .select()
        .from(appointments)
        .where(
          and(
            gte(appointments.date, new Date(`${date}T00:00:00`)),
            eq(appointments.timeSlot, timeSlot),
            eq(appointments.status, "confirmed" as any)
          )
        )
        .limit(1);

      if (existingAppointment.length > 0) {
        throw new Error("Ce créneau n'est plus disponible");
      }

      // Create appointment
      const [newAppointment] = await db.insert(appointments).values({
        firstName,
        lastName,
        email,
        phone,
        date: new Date(`${date}T${timeSlot.split("-")[0]}:00`),
        timeSlot,
        status: "confirmed" as any,
        notes: notes || null,
      });

      // Send confirmation email to user
      if (RESEND_API_KEY) {
        try {
          await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${RESEND_API_KEY}`,
            },
            body: JSON.stringify({
              from: "noreply@bilancompetence.ai",
              to: email,
              subject: "Confirmation de votre rendez-vous - Bilan de Compétences",
              html: `
                <h2>Votre rendez-vous est confirmé !</h2>
                <p>Bonjour ${firstName} ${lastName},</p>
                <p>Nous avons bien reçu votre demande de rendez-vous gratuit pour discuter de votre bilan de compétences.</p>
                <h3>Détails du rendez-vous :</h3>
                <ul>
                  <li><strong>Date :</strong> ${new Date(date).toLocaleDateString("fr-FR", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</li>
                  <li><strong>Horaire :</strong> ${timeSlot}</li>
                  <li><strong>Téléphone :</strong> ${phone}</li>
                </ul>
                ${notes ? `<p><strong>Vos notes :</strong> ${notes}</p>` : ""}
                <p>Nous vous appellerons au numéro indiqué (${phone}) à l'heure prévue.</p>
                <p>Si vous avez besoin de modifier ou annuler ce rendez-vous, contactez-nous au +33 3 67 31 02 01 ou par email à ${COMPANY_EMAIL}.</p>
                <p>À très bientôt,<br>L'équipe NETZ Informatique</p>
              `,
            }),
          });
        } catch (error) {
          console.error("Failed to send confirmation email:", error);
        }

        // Send notification to company
        try {
          await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${RESEND_API_KEY}`,
            },
            body: JSON.stringify({
              from: "noreply@bilancompetence.ai",
              to: COMPANY_EMAIL,
              subject: `Nouveau rendez-vous : ${firstName} ${lastName}`,
              html: `
                <h2>Nouveau rendez-vous confirmé</h2>
                <h3>Informations du client :</h3>
                <ul>
                  <li><strong>Nom :</strong> ${firstName} ${lastName}</li>
                  <li><strong>Email :</strong> ${email}</li>
                  <li><strong>Téléphone :</strong> ${phone}</li>
                  <li><strong>Date :</strong> ${new Date(date).toLocaleDateString("fr-FR", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</li>
                  <li><strong>Horaire :</strong> ${timeSlot}</li>
                </ul>
                ${notes ? `<p><strong>Notes du client :</strong> ${notes}</p>` : ""}
              `,
            }),
          });
        } catch (error) {
          console.error("Failed to send notification email:", error);
        }
      }

      return {
        success: true,
        appointment: newAppointment,
      };
    }),
});
