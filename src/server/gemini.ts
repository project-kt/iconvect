import { env } from "@/env";
import { GoogleGenAI } from "@google/genai";

let geminiClientInstance: GoogleGenAI | null = null;

export const getGeminiClient = () => {
  return (geminiClientInstance ??= new GoogleGenAI({ apiKey: env.GOOGLE_API_KEY }));
};
