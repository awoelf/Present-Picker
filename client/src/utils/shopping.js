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
    // console.log(data["inline_shopping_results"]); Display search results in console
    return data["inline_shopping_results"];
  });

  return results;
};

module.exports = getSearchResults;