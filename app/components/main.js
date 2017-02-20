
// Include React
var React = require("react");

// Creating the Main component
var Main = React.createClass({

  
  // Here we render the function
  render: function() {
    return (
      <div className="container">
        <div className="jumbotron bg-dark">
          <h1 className="text-center">Job Search Helper!</h1>
          <p className="text-center">
            <em>Track jobs you have applied for and give your feedback.</em>
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
