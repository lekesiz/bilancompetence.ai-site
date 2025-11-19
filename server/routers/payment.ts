import { z } from "zod";
import { publicProcedure, protectedProcedure, router } from "../_core/trpc";
import Stripe from "stripe";
import { PRODUCTS, type ProductKey } from "../stripe/products";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2025-10-29.clover",
});

export const paymentRouter = router({
  createCheckoutSession: protectedProcedure
    .input(
      z.object({
        productKey: z.enum(["BILAN_ESSENTIEL", "BILAN_AVANCE", "BILAN_PREMIUM"]),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const product = PRODUCTS[input.productKey as ProductKey];
      
      const origin = ctx.req.headers.origin || "http://localhost:3000";
      
      const params: Stripe.Checkout.SessionCreateParams = {
        mode: "payment",
        line_items: [
          {
            price_data: {
              currency: product.currency,
              product_data: {
                name: product.name,
                description: product.description,
              },
              unit_amount: product.price,
            },
            quantity: 1,
          },
        ],
        customer_email: ctx.user.email || undefined,
        client_reference_id: ctx.user.id.toString(),
        metadata: {
          user_id: ctx.user.id.toString(),
          customer_email: ctx.user.email || null,
          customer_name: ctx.user.name ?? "",
          product_key: input.productKey,
        },
        allow_promotion_codes: true,
        success_url: `${origin}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${origin}/tarifs`,
      };

      const session = await stripe.checkout.sessions.create(params);

      return {
        url: session.url,
        sessionId: session.id,
      };
    }),

  getPaymentHistory: protectedProcedure.query(async ({ ctx }) => {
    // In production, fetch from database
    // For now, return demo data
    return [
      {
        id: "pi_demo123",
        amount: 179000,
        currency: "eur",
        status: "succeeded",
        created: new Date("2025-01-15"),
        product: "Bilan de Compétences Avancé",
      },
    ];
  }),

  getSessionStatus: publicProcedure
    .input(z.object({ sessionId: z.string() }))
    .query(async ({ input }) => {
      const session = await stripe.checkout.sessions.retrieve(input.sessionId);
      return {
        status: session.payment_status,
        customerEmail: session.customer_email,
        amountTotal: session.amount_total,
      };
    }),
});
