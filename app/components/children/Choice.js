// Include React
var React = require("react");

// Creating the Choice component
var Choice = React.createClass({
  
  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">What would you like to do?</h3>
        </div>
        <div className="panel-body text-center">

        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Choice;
