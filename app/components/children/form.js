// Include React
var React = require("react");

// Creating the Form component
var Form = React.createClass({

  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Form Goes Here</h3>
        </div>
        <div className="panel-body text-center">
          <form >
            
          </form>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Form;
