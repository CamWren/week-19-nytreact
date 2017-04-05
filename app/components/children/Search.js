// Include React
var React = require("react");

var Search = React.createClass({

  // Here we set a generic state associated with the text being searched for
  getInitialState: function() {
    return { searchTerm: "" };
  },

  // This function will respond to the user input
  handleChange: function(event) {

    this.setState({ searchTerm: event.target.value });

  },

  // When a user submits...
  handleSubmit: function(event) {
    // prevent the HTML from trying to submit a form if the user hits "Enter" instead of
    // clicking the button
    event.preventDefault();

    // Set the parent to have the search term
    this.props.setTerm(this.state.term);
    this.setState({ searchTerm: "" });
  },

  // Here we render the function
  render: function() {

    return (

      <div className="container">

        <div className="jumbotron">
          <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i>Search</strong></h1>
          
						<form onSubmit={this.handleSubmit}>
							<div className="form-group">
								<label htmlFor="search">Search Term:</label>
								<input type="text" className="form-control" id="search-term" defaultValue={this.state.searchTerm} onChange={this.handleChange} required />
							</div>
            
            
              <div className="form-group">
                <label htmlFor="pwd">Number of Records to Retrieve:</label>
                <select className="form-control" id="num-records-select" defaultValue={this.state.num5} onChange={this.handleChange}>
                  <option value="1">1</option>
                  <option value="5">5</option>
                  <option value="10">10</option>
                </select>
              </div>

              
							<div className="form-group">
								<label htmlFor="start-year">Start Year (Optional):</label>
								<input type="text" className="form-control" id="start-year" defaultValue={this.state.searchTerm} onChange={this.handleChange} required />
							</div>

							<div>
								<label htmlFor="end-year">End Year (Optional):</label>
								<input type="text" className="form-control" id="end-year" defaultValue={this.state.searchTerm} onChange={this.handleChange} required />
							</div>

							
							<button type="submit" className="btn btn-default" id="run-search"><i className="fa fa-search"></i> Search</button>
							<button type="button" className="btn btn-default" id="clear-all"><i className="fa fa-trash"></i> Clear Results</button>

           </form>

        </div>

      </div>
    );
  }
});

// Export the componen back for use in other files
module.exports = Search;