import OpenAI from "openai";

// Create OpenAI client
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024. do not change this unless explicitly requested by the user
const DEFAULT_MODEL = "gpt-4o";

// Analyze text with AI
export async function analyzeText(prompt: string): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: DEFAULT_MODEL,
      messages: [{ role: "user", content: prompt }],
    });

    return response.choices[0].message.content || "Analysis not available";
  } catch (error) {
    console.error("Error analyzing text with OpenAI:", error);
    return "Sorry, we couldn't analyze this text right now. Please try again later.";
  }
}

// Generate AI content for marketing
export async function generateMarketingContent(topic: string, length: "short" | "medium" | "long" = "medium"): Promise<string> {
  try {
    const lengthMap = {
      short: 100,
      medium: 250,
      long: 500
    };

    const prompt = `Write ${length} marketing content about ${topic}. Focus on benefits, use persuasive language, and include a call to action.`;

    const response = await openai.chat.completions.create({
      model: DEFAULT_MODEL,
      messages: [
        {
          role: "system",
          content: `You are a professional marketing content writer. Create compelling marketing content about ${length} words long.`
        },
        { role: "user", content: prompt }
      ],
      max_tokens: lengthMap[length] * 2, // Ensure enough tokens for complete response
    });

    return response.choices[0].message.content || "Content generation failed";
  } catch (error) {
    console.error("Error generating marketing content:", error);
    return "Sorry, we couldn't generate marketing content right now. Please try again later.";
  }
}

// Project idea generator for potential clients
export async function generateProjectIdeas(industry: string, count: number = 3): Promise<string[]> {
  try {
    const prompt = `Generate ${count} unique website or application project ideas for a client in the ${industry} industry. Each idea should have a name, brief description, and potential benefits.`;

    const response = await openai.chat.completions.create({
      model: DEFAULT_MODEL,
      messages: [
        {
          role: "system",
          content: "You are a creative digital strategist helping generate innovative project ideas for clients."
        },
        { role: "user", content: prompt }
      ],
      response_format: { type: "json_object" },
    });

    const content = response.choices[0].message.content || "[]";
    const parsed = JSON.parse(content);
    
    if (parsed.ideas && Array.isArray(parsed.ideas)) {
      return parsed.ideas;
    }
    
    return ["Unable to generate project ideas at this time."];
  } catch (error) {
    console.error("Error generating project ideas:", error);
    return ["Sorry, we couldn't generate project ideas right now. Please try again later."];
  }
}