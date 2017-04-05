// Include React
var React = require("react");

// Here we include all of the sub-components
var Search = require("./children/Search");
var Results = require("./children/Results");
var SavedArticles = require("./children/SavedArticles");

// Helper for making AJAX requests to our API
var helpers = require("./utils/helpers");

var Main = React.createClass({

  // Here we set a generic state associated with the number of clicks
  // Note how we added in this history state variable
  getInitialState: function() {
    return { search: "", results: "", article: [] };
  },

  // The moment the page renders get the History
  componentDidMount: function() {
    // Get the latest history.
    helpers.getArticle().then(function(response) {
      console.log(response);
      if (response !== this.state.article) {
        console.log("Article", response.data);
        this.setState({ article: response.data });
      }
    }.bind(this));
  },

  // If the component changes (i.e. if a search is entered)...
  componentDidUpdate: function() {

    // Run the query for the address
    helpers.runQuery(this.state.search).then(function(data) {
      if (data !== this.state.results) {
        console.log("Address", data);
        this.setState({ results: data });

        // After we've received the result... then post the search term to our history.
        helpers.postArticle(this.state.search).then(function() {
          console.log("Updated!");

          // After we've done the post... then get the updated history
          helpers.getArticle().then(function(response) {
            console.log("Current Article", response.data);

            console.log("Article", response.data);

            this.setState({ article: response.data });

          }.bind(this));
        }.bind(this));
      }
    }.bind(this));
  },
  // This function allows childrens to update the parent.
  setTerm: function(searchTerm) {
    this.setState({ search: searchTerm });
  },

  // Here we render the function
  render: function() {

    return (

      <div className="container">

        <div className="jumbotron">
          <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i> New York Times Search</strong></h1>
          <p><em>Search for and annotate articles of interest!</em></p>
        </div>

        <div className="col-md-12">

          <Search setTerm={this.setTerm} />
        
        </div>

        <div className="col-md-12">
          
          <Results results={this.state.results} />
          
        </div>

        <div className="col-md-12">
      
          <SavedArticles savedArticles={this.state.article} />

        </div>

      </div>
    );
  }
});

// Export the componen back for use in other files
module.exports = Main;
