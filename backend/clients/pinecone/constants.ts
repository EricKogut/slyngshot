const pineconeBaseURL = process.env.PINECONE_BASE_URL;
const apiKey = process.env.PINECONE_API_KEY;

export const CONSTANTS = {
  baseRequest: {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'Api-Key': apiKey,
    },
  },
  describeIndexStats: pineconeBaseURL + '/describe_index_stats',
  query: pineconeBaseURL + '/query',
};
