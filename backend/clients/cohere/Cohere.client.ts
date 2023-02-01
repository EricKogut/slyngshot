import axios from 'axios';
import cohere from 'cohere-ai';

declare type GeneratePrompts = {
  prompt: string;
  max;
};
export const generate = async (params: GeneratePrompts) => {
  cohere.init(process.env.COHERE_API_KEY || 'null');

  // Hit the `generate` endpoint on the `large` model
  const generateResponse = await cohere.generate({
    prompt: params.prompt,
    max_tokens: 50,
    temperature: 1,
  });

  return generateResponse.body.generations;
};

export const embed = async () => {
  cohere.init(process.env.COHERE_API_KEY || 'null');
  const response = await await cohere.embed({ texts: ['this is a test'] });
  return response.body.embeddings;
};
