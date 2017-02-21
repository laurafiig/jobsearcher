
// Include React
var React = require("react");

// Creating the Main component
var Main = React.createClass({

  
  // Here we render the function
  render: function() {
    return (
      <div className="container bg-pattern">
        <div className="jumbotron bg-photo">
          <h1 className="text-center"><strong>Job Search Helper!</strong></h1>
          <p className="text-center">
            <strong>Track jobs you have applied for and give your feedback.</strong>
          </p>
        </div>
        <div className="row">
          {/* This code will dump the correct Child Component */}
          {this.props.children}
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
