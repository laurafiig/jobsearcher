// Include React
var React = require("react");

//for making API calls, even though we have no APIs....
var helpers = require("../../utils/helpers");

// Creating the Login component
var Login = React.createClass({
  //set initial variables for component to be blank
  getInitialState: function() {
    return {
      username: "",
      password: "",
      userLog: "",
      passLog: ""
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


  // This code handles the sending of the search terms to the parent Search component
  handleClick: function(event) {
    console.log("CLICKED");
    console.log(event);

    helpers.postSavedLog(event.username, event.password).then(function() {
      console.log(event.username, event.password);
    });
  },

  handleElse: function(event) {
    console.log("Clicked");
    console.log(event);

    helpers.getSavedLog().then(function(loginData) {
      console.log(event.userLog, event.passLog);
      this.setState({userLog: event.userLog, passLog: event.passLog});
    }.bind(this));
  },

  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-default">

        <div className="panel panel-default row">
        <div className="panel-heading col-sm-6">
          <h3 className="panel-title text-center">Create User Here</h3>
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
              <a href="#/Choice" 
                
                className="btn btn-primary btn-lg"
                onClick={() => this.handleClick(this.state)}>Login
                </a>
            </div>
          </form>
        </div>
        </div>

        <div className="panel-heading col-sm-6">
          <h3 className="panel-title text-center">Returning User Login Here</h3>
        <div className="panel-body text-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h4 className="">
                <strong>Username</strong>
              </h4>
              <input
                type="text"
                value={this.state.userLog}
                className="form-control text-center"
                id="userLog"
                onChange={this.handleChange}
                
              />
              <br />
              <h4 className="">
                <strong>Password</strong>
              </h4>
              <input
                type="password"
                value={this.state.passLog}
                className="form-control text-center"
                id="passLog"
                onChange={this.handleChange}
                
              />
              <br />
              <a href="#/Choice" 
                
                className="btn btn-primary btn-lg"
                onClick={() => this.handleElse(this.state)}>Login
                </a>
            </div>
          </form>
        </div>
        </div>

    </div>

      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Login;
