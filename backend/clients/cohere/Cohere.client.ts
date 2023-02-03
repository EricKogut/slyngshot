import axios from 'axios';
import cohere from 'cohere-ai';

declare type GeneratePrompts = {
  data: string;
};
export const generate = async ({ data }: GeneratePrompts) => {
  cohere.init(process.env.COHERE_API_KEY || 'null');

  const generateResponse = await cohere.generate({
    prompt: data,
    max_tokens: 150,
    temperature: 0.1,
  });

  return generateResponse.body.generations[0].text;
};

declare type GenerateEmbedding = {
  data: string;
};
export const embed = async ({ data }: GenerateEmbedding) => {
  cohere.init(process.env.COHERE_API_KEY || 'null');
  const response = await cohere.embed({ texts: [data] });

  return response.body.embeddings[0];
};
