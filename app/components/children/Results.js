// Include React
var React = require("react");

var Results = React.createClass({

  // Here we render the function
  render: function() {

    return (

      <div className="container">

        <div className="jumbotron">
          <h1 className="text-center"><strong><i className="fa fa-newspaper-o"></i>Results</strong></h1>
        </div>

      </div>
    );
  }
});

// Export the componen back for use in other files
module.exports = Results;