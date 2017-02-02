// Include React
var React = require("react");

//Include LoginForm components
var LoginForm = require("./forms/LoginForm");

//for making API calls, even though we have no APIs....
var helpers = require("../../utils/helpers");

// Creating the Login component
var Login = React.createClass({
  //set initial variables for component to be blank
  getInitialState: function() {
    return {
      results: {}
    };
  },

  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-default">

        <LoginForm />

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Login;
