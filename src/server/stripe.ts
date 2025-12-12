import { env } from "@/env";
import Stripe from "stripe";

let stripeClientInstance: Stripe | null = null;

export const getStripeClient = () => {
  return (stripeClientInstance ??= new Stripe(env.STRIPE_SECRET_KEY ?? "dummy_key_for_build", {
    typescript: true
  }));
};
