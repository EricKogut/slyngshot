import axios from 'axios';

export const describeIndex = async (params: any) => {
  const options = {
    method: 'POST',
    url: 'https://cohere-pinecone-trec-a2894c7.svc.us-west1-gcp.pinecone.io/describe_index_stats',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'Api-Key': '6ceae9ee-84cb-4f97-98a1-560dc25edbc8',
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
};
