const OpenAI = require('openai');

async function leftPadAi(inputString, length, padChar) {
  // Ensure environment variable for API key exists
  if (!process.env.OPENAI_API_KEY) {
    throw new Error('OPENAI_API_KEY not set in environment variables.');
  }

  // Create an OpenAI client instance
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
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

    if (response.choices && response.choices.length > 0) {
      return response.choices[0].message.content.trim();
    } else {
      throw new Error('Invalid response structure from the OpenAI API.');
    }
  } catch (error) {
    console.error('Error calling OpenAI API:', error.message);
    throw new Error('Failed to get a response from the OpenAI API. Please see the error details above.');
  }
}

module.exports = leftPadAi;