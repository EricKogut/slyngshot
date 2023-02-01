import axios from 'axios';
import cohere from 'cohere-ai';

export const generate = async () => {
  console.log('genenenakjfannnnnnnipsgene');

  cohere.init(process.env.COHERE_API_KEY || 'null');

  // Hit the `generate` endpoint on the `large` model
  const generateResponse = await cohere.generate({
    prompt: 'Once upon a time in a magical land called',
    max_tokens: 50,
    temperature: 1,
  });

  console.log(generateResponse.body.generations);
  /*
  {
    statusCode: 200,
    body: {
      text: "Eldorado, the anointed monarchs of the ancient world and the ruling family were divided into three kingdoms, each of which was ruled by an individual leader."
    }
  }
  */
};
