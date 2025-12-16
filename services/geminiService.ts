import { GoogleGenAI } from "@google/genai";
import { MENU_ITEMS } from "../constants";

// Ideally this comes from env, but for the demo structure we assume it's injected or we handle the missing key gracefully
const API_KEY = process.env.API_KEY || ''; 

export const GeminiService = {
  getRecommendation: async (mood: string): Promise<string> => {
    if (!API_KEY) {
      return "I recommend the Wagyu Burger! (AI Key missing)";
    }

    try {
      const ai = new GoogleGenAI({ apiKey: API_KEY });
      
      const menuContext = MENU_ITEMS.map(item => `${item.name} (${item.category}): ${item.description}`).join('\n');
      
      const prompt = `
        You are an expert chef at a high-end restaurant. 
        Here is our menu:
        ${menuContext}

        The customer says they are in the mood for: "${mood}".
        
        Recommend 1 specific dish from the menu and explain why in 1 short sentence. Be charming.
        Do not mention items not on the menu.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
      });

      return response.text || "I recommend the Chef's Special today!";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "I'm having trouble connecting to the Chef's brain. Try the Wagyu Burger!";
    }
  }
};
