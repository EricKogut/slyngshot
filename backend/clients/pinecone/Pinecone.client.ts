import axios from 'axios';

const apiKey = process.env.PINECONE_API_KEY;
const baseUrl = process.env.PINECONE_BASE_URL;
import { CONSTANTS } from './constants';
const pineconeBaseURL = process.env.PINECONE_BASE_URL;

declare type PineconeQuery = {
  topK?: number;
  filter: number[];
};

export const query = async ({ topK, filter }: PineconeQuery) => {
  const options = {
    method: 'POST',
    url: pineconeBaseURL + '/query',

    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'Api-Key': apiKey,
    },
    data: {
      includeValues: 'false',
      includeMetadata: 'true',
      vector: filter,
      topK: 10,
    },
  };

  try {
    const result = await axios.request(options);
    let matchString = '';
    for (const match of result.data.matches) {
      matchString += match.metadata.text + ' ';
    }
    return matchString;
  } catch (error) {
    return error;
  }
};
