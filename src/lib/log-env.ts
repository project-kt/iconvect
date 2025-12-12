import { env } from "@/env";

export function logServerEnv() {
  if (env.NODE_ENV === "development") {
    console.log("----------------------------------------");
    console.log("🚧 SERVER-SIDE ENVIRONMENT VARIABLES 🚧");
    console.log("NODE_ENV:", env.NODE_ENV);
    console.log("DATABASE_URL:", env.DATABASE_URL);
    
    // Auth
    console.log("AUTH_SECRET:", env.AUTH_SECRET);
    console.log("AUTH_TRUST_HOST:", env.AUTH_TRUST_HOST);
    console.log("AUTH_GITHUB_ID:", env.AUTH_GITHUB_ID);
    console.log("AUTH_GITHUB_SECRET:", env.AUTH_GITHUB_SECRET);
    console.log("GOOGLE_CLIENT_ID:", env.GOOGLE_CLIENT_ID);
    console.log("GOOGLE_CLIENT_SECRET:", env.GOOGLE_CLIENT_SECRET);

    // AI
    console.log("GOOGLE_API_KEY:", env.GOOGLE_API_KEY);
    console.log("OPENAI_API_KEY:", env.OPENAI_API_KEY);
    console.log("OPENAI_ORGANIZATION:", env.OPENAI_ORGANIZATION);
    console.log("OPENAI_PROJECT:", env.OPENAI_PROJECT);

    // Stripe
    console.log("STRIPE_SECRET_KEY:", env.STRIPE_SECRET_KEY);
    console.log("STRIPE_WEBHOOK_SECRET:", env.STRIPE_WEBHOOK_SECRET);
    console.log("----------------------------------------");
  }
}
