import axios from 'axios';

const apiKey = process.env.PINECONE_API_KEY;
const baseUrl = process.env.PINECONE_BASE_URL;
import { CONSTANTS } from './constants';
const pineconeBaseURL = process.env.PINECONE_BASE_URL;

// export const describeIndex = async (params: any) => {
//   const options = { ...CONSTANTS.baseRequest, CONSTANTS.describeIndexStats };
//   try {
//     const result = await axios.request(options);
//     return result;
//   } catch (error) {
//     return error;
//   }
// };

declare type PineconeQuery = {
  topK: number;
  filter: any;
};

export const query = async ({ topK, filter }: PineconeQuery) => {
  // const options = {
  //   ...CONSTANTS.baseRequest,
  //   query: pineconeBaseURL + '/query',
  //   data: {
  //     includeValues: 'false',
  //     includeMetadata: 'true',
  //     filter: filter,
  //     topK: topK,
  //   },
  // };

  // const options = {
  //   method: 'POST',
  //   url: pineconeBaseURL + '/query',
  //   headers: { accept: 'application/json', 'content-type': 'application/json' },
  //   data: {
  //     vector: filter[0],
  //     includeValues: 'false',
  //     includeMetadata: 'false',
  //     topK: 12,
  //   },
  // };

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
      includeMetadata: 'false',
      vector: filter,
      topK: 10,
    },
  };

  console.log(options, 'are the options');
  try {
    const result = await axios.request(options);
    return result;
  } catch (error) {
    return error;
  }
};
