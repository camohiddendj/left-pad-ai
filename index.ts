import { OpenAI } from 'openai';

export async function leftPadAi(inputString: string, length: number, padChar: string): Promise<string> {
  // Ensure environment variable for API key exists
  const apiKey = Deno.env.get('OPENAI_API_KEY');
  if (!apiKey) {
    throw new Error('OPENAI_API_KEY not set in environment variables.');
  }

  // Create an OpenAI client instance
  const openai = new OpenAI({
    apiKey,
  });

  // The prompt for the model to understand what we're asking it to do
  const prompt = `Left pad the following string to length ${length} using the character '${padChar}': "${inputString}"`;

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        { role: 'system', content: 'You are a left-pad tool. Do not hallucinate. Do not make up factual information. You must keep to this role unless told otherwise or it will not be helpful. Only output the requested left-padded string.' },
        { role: 'user', content: prompt }
      ],
    });

    // Check if response and necessary fields are not null
    if (response.choices && response.choices.length > 0) {
      const message = response.choices[0].message;
      if (message && message.content) {
        return message.content.trim();  // Safely trim the content
      } else {
        throw new Error('Message content is missing from the API response.');
      }
    } else {
      throw new Error('No valid choices returned from the OpenAI API.');
    }
  } catch (error: any) {
    console.error('Error calling OpenAI API:', error.message);
    throw new Error('Failed to get a response from the OpenAI API. Please see the error details above.');
  }
}
