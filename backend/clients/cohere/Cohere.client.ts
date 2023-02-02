import axios from 'axios';
import cohere from 'cohere-ai';

declare type GeneratePrompts = {
  prompt: string;
};
export const generate = async (params: GeneratePrompts) => {
  cohere.init(process.env.COHERE_API_KEY || 'null');

  const generateResponse = await cohere.generate({
    prompt: params.prompt,
    max_tokens: 50,
    temperature: 1,
  });

  return generateResponse.body.generations;
};

declare type GenerateEmbedding = {
  texts: string[];
};
export const embed = async ({ texts }: GenerateEmbedding) => {
  cohere.init(process.env.COHERE_API_KEY || 'null');
  const response = await await cohere.embed({ texts: texts });
  return response.body.embeddings[0];
};
