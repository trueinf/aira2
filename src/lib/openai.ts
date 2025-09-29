import OpenAI from 'openai';

export type ChatRole = 'system' | 'user' | 'assistant';

export interface ChatMessageInput {
  role: ChatRole;
  content: string;
  type?: 'message';
}

let openAIClient: OpenAI | null = null;

const getClient = () => {
  if (!openAIClient) {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

    if (!apiKey) {
      throw new Error('Missing VITE_OPENAI_API_KEY. Add it to your .env file.');
    }

    openAIClient = new OpenAI({
      apiKey,
      // Expose key to browser only when you understand the security implications
      dangerouslyAllowBrowser: true,
    });
  }

  return openAIClient;
};

export const getAssistantResponse = async (history: ChatMessageInput[]) => {
  const client = getClient();

  const response = await client.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: history,
    max_tokens: 1000,
    temperature: 0.7,
  });

  const message = response.choices[0]?.message?.content;
  
  if (message && message.trim().length > 0) {
    return message.trim();
  }

  throw new Error('No textual response returned from the model.');
};
