// Include React
var React = require("react");

// Creating the Reviews component
var Reviews = React.createClass({
  
  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">List of comments goes here</h3>
        </div>
        <div className="panel-body text-center">

        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Reviews;
