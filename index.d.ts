// index.d.ts

// Define the OpenAI API module (you can expand it with more accurate types if you use a specific OpenAI SDK).
declare module "openai" {
  interface CompletionRequest {
    model: string;
    messages: Array<{ role: 'system' | 'user' | 'assistant'; content: string }>;
  }

  interface CompletionResponse {
    choices: Array<{ message: { role: string; content: string } }>;
  }

  class OpenAI {
    constructor(config: { apiKey: string });
    chat: {
      completions: {
        create(request: CompletionRequest): Promise<CompletionResponse>;
      };
    };
  }

  export = OpenAI;
}

// Function type definition for leftPadAi
declare function leftPadAi(inputString: string, length: number, padChar: string): Promise<string>;

// Export the function
export = leftPadAi;
