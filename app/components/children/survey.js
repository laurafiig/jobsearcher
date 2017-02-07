// Include React
var React = require("react");

// Include the SurveyForm components
var SurveyForm = require("./forms/SurveyForm");

// Include the helpers for making API calls
var helpers = require("../../utils/helpers");

// Creating the Survey component
var Survey = React.createClass({

  // Here we set initial variables for the component to be blanks
  getInitialState: function() {
    return {
      results: {}
    };
  },

   // Here we describe this component's render method
  render: function() {
    return (
      <div className="main-container">

        {/* Note how we pass the setQuery function to enable Query to perform searches */}
        <SurveyForm results={this.state.results} />
        
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Survey;
