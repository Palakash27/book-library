const restClient = {
  get: async url => {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  },
  post: {},
  put: {}
};

export default restClient;
