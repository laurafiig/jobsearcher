//Include React
var React = require("react");

// Include the helpers for making API calls
var helpers = require("../../../utils/helpers");

//Creating the LoginForm component
var LoginForm = React.createClass({
	//set Initial variables to be blank
	getInitialState: function() {
		return {
			username: "",
			password: ""
		};
	},

	//When we detect changes in textbox, register it.
	handleChange: function(event) {
		console.log("Text Changed!");
		//create syntax to capture any change in text to query terms.
		var newState = {};
		newState[event.target.id] = event.target.value;
		this.setState(newState);
	},

/*
	//handles the sending of the search terms to the parent Login component
	handleSubmit: function(event) {
		event.preventDefault();
		console.log("Clicked!");
		console.log("inputs start");
		console.log(this.state.username);
		console.log(this.state.password);
		console.log("inputs end");

	},
*/

  // This code handles the sending of the search terms to the parent Search component
  handleClick: function(event) {
    console.log("CLICKED");
    console.log(event);

    helpers.postSavedLog(event.username, event.password).then(function() {
      console.log(event.username, event.password);
    });
  },

	//describe the component's render method
	render: function() {
		return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Create User Here</h3>
        </div>
        <div className="panel-body text-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h4 className="">
                <strong>Username</strong>
              </h4>
              <input
                type="text"
                value={this.state.username}
                className="form-control text-center"
                id="username"
                onChange={this.handleChange}
                
              />
              <br />
              <h4 className="">
                <strong>Password</strong>
              </h4>
              <input
                type="password"
                value={this.state.password}
                className="form-control text-center"
                id="password"
                onChange={this.handleChange}
                
              />
              <br />
              <button 
              	className="btn btn-primary btn-lg"
              	onClick={() => this.handleClick(this.state)}>Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = LoginForm;
