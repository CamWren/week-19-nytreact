// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// Helper functions for making API Calls
var helpers = {

  // This function serves our purpose of running the query to geolocate.
  runQuery: function(search) {

    // Figure out the geolocation
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
		queryURL += '?' + $.param({'api-key': "0db5f1c041ea4ac094a920019ec1b123", 'q': search});
    return axios.get(queryURL).then(function(response) {
      // If get get a result, return that result's formatted address property
      if (response.data.results[0]) {
        return response.data.results[0].formatted;
      }
      // If we don't get any results, return an empty string
      return "";
    });
  },

  // This function hits our own server to retrieve the record of query results
  getArticle: function() {
    return axios.get("/api");
  },

  // This function posts new searches to our database.
  postArticle: function(article) {
    return axios.post("/api", { article: article });
  }
};

// We export the API helper
module.exports = helpers;