"use client";

import { useEffect } from "react";
import { env } from "@/env";

export function EnvDebugger() {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.log("----------------------------------------");
      console.log("🚧 CLIENT-SIDE ENVIRONMENT VARIABLES 🚧");
      console.log("NEXT_PUBLIC_API_URL:", env.NEXT_PUBLIC_API_URL);
      console.log("NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY:", env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
      console.log("NEXT_PUBLIC_POSTHOG_KEY:", env.NEXT_PUBLIC_POSTHOG_KEY);
      console.log("NEXT_PUBLIC_POSTHOG_HOST:", env.NEXT_PUBLIC_POSTHOG_HOST);
      console.log("----------------------------------------");
    }
  }, []);

  return null;
}
