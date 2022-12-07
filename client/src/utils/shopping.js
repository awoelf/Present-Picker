const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch(
  `abe8dc34c3841c315bae3ff25400aab17df6c768b9cba6577d3fcf991b3183ed`
);

const getSearchResults = async (query) => {
  const params = {
    q: query,
    tbm: 'shop',
    hl: 'en',
    gl: 'us',
  };

  const callback = (data) => {
    console.log(data['product_results']);
  };

  search.json(params, callback);
};

getSearchResults('blanket');
