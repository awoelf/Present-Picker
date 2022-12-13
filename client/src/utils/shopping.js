require('dotenv').config()
const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch(process.env.SEARCH_API_KEY);

// Accepts a string search query and returns google shopping search results
const getSearchResults = async (query) => {
  // Search terms
  const params = {
    q: query,
    tbm: 'shop',
    hl: 'en',
    gl: 'us',
  };

  const results = search.json(params, (data) => {
    return data;
  });

  return results;
};

module.exports = getSearchResults;