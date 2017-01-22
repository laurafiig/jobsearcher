// Include React
var React = require("react");

// Creating the Login component
var Login = React.createClass({

  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Login Form Here</h3>
        </div>
        <div className="panel-body text-center">
          <form>
            <div className="form-group">
              <h4 className="">
                <strong>Username</strong>
              </h4>
              <input
                type="text"
                value=""
                className="form-control text-center"
                id="term"
                onChange=""
                required
              />
              <br />
              <h4 className="">
                <strong>Password</strong>
              </h4>
              <input
                type="password"
                value=""
                className="form-control text-center"
                id="term"
                onChange=""
                required
              />
              <br />
              <button
                className="btn btn-default"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Login;
