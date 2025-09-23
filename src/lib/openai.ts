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

  const response = await client.responses.create({
    model: 'gpt-5',
    input: history,
  });

  if (response.output_text && response.output_text.trim().length > 0) {
    return response.output_text.trim();
  }

  const textSegments = (response.output as Array<any> | undefined)
    ?.flatMap(item => item?.content ?? [])
    ?.filter((part: any) => typeof part?.text === 'string')
    ?.map((part: any) => part.text.trim())
    ?.filter(Boolean);

  if (textSegments && textSegments.length > 0) {
    return textSegments.join('\n');
  }

  throw new Error('No textual response returned from the model.');
};
