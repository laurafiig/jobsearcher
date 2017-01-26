
// Include React
var React = require("react");

// Creating the Main component
var Main = React.createClass({

  
  // Here we render the function
  render: function() {
    return (
      <div className="container">
        <div className="jumbotron">
          <h2 className="text-center">Job Search Helper!</h2>
          <p className="text-center">
            <em>Track jobs you have applied for and give your feedback.</em>
          </p>
          <a href="#/Choice" className="btn btn-primary btn-lg">Home</a>
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
