// Include React
var React = require("react");

// Here we include all of the sub-components
var Form = require("./children/Form");
var Jobs = require("./children/Jobs");
var Reviews = require("./children/Reviews");
var Survey = require("./children/Survey");

// Creating the Main component
var Main = React.createClass({

  
  // Here we render the function
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron">
            <h2 className="text-center">Job Search Helper!</h2>
            <p className="text-center">
              <em>Track jobs you have applied for and give your feedback.</em>
            </p>
          </div>
        </div>
        <div className="row">  
          <div className="col-md-12">
            <Form />
          </div>
        </div>  
        <div className="row">  
          <div className="col-md-12">
            <Jobs />
          </div>
        </div>  
        <div className="row">  
          <div className="col-md-12">
            <Survey />
          </div>
        </div>  
        <div className="row">  
          <div className="col-md-12">
            <Reviews />
          </div>
        </div>  
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Main;
