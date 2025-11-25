import { GoogleGenAI } from "@google/genai";
import { COMPANY_INFO, SERVICES } from '../constants';
import { ChatMessage } from '../types';

// Initialize the client
const apiKey = process.env.API_KEY || ''; 
let ai: GoogleGenAI | null = null;

if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const sendMessageToGemini = async (
  history: ChatMessage[], 
  newMessage: string
): Promise<string> => {
  if (!ai) {
    return "I'm sorry, the AI service is currently unavailable. Please contact us directly via WhatsApp: " + COMPANY_INFO.phone;
  }

  const systemInstruction = `
    You are the intelligent virtual assistant for ${COMPANY_INFO.fullName} (OMEGA).
    Your goal is to assist clients with information about our services in the Oil & Gas and Construction sectors.
    
    Company Context:
    - Established: ${COMPANY_INFO.established} in Cairo, Egypt.
    - Slogan: "${COMPANY_INFO.slogan}"
    - Contact: ${COMPANY_INFO.phone}, ${COMPANY_INFO.email}
    - Location: Shebin Hathout Tower, Cairo.
    
    Services Provided (${SERVICES.length} total):
    ${SERVICES.map(s => `- ${s.title}: ${s.shortDescription}`).join('\n')}
    
    Mission: ${COMPANY_INFO.mission}
    
    Tone: Professional, Industrial, Helpful, Efficient.
    
    If asked about specific inspections (Lifting, NDT, etc.), summarize our capability based on the list above.
    If asked for a quote or booking, direct them to use the "Request Inspection" button or contact WhatsApp: ${COMPANY_INFO.whatsapp}.
    Keep answers concise (under 100 words) unless detailed technical info is requested.
  `;

  try {
    const model = 'gemini-2.5-flash';
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: systemInstruction,
      },
      history: history.map(msg => ({
        role: msg.role === 'model' ? 'model' : 'user',
        parts: [{ text: msg.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text || "I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the server right now. Please try again later.";
  }
};