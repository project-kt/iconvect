import { env } from "@/env";
import OpenAI from "openai";

let openaiClientInstance: OpenAI | null = null;

export const getOpenaiClient = () => {
  return (openaiClientInstance ??= new OpenAI({ apiKey: env.OPENAI_API_KEY }));
};
