// Include React
var React = require("react");

// Creating the Survey component
var Survey = React.createClass({
  // Here we set initial variables for the component to be blanks
  getInitialState: function() {
    return {
      appNumber: "",
      value: "",
      comment: ""
    };
  },

  // Whenever we detect ANY change in the textbox, we register it.
  handleChange: function(event) {
    console.log("TEXT CHANGED");

    // Here we create syntax to capture any change in text to the query terms (pre-search).
    // See this Stack Overflow answer for more details:
    // http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },

  // This code handles the sending of the search terms to the parent Search component
  handleSubmit: function(event) {
    event.preventDefault();
    console.log("CLICKED");
    this.props.postSaved(this.state.appNumber, this.state.value, this.state.comment);
    console.log("inputs start");
    console.log(this.state.appNumber);
    console.log(this.state.value);
    console.log(this.state.comment);
    console.log("inputs end");
  },

  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">Survey Goes Here</h3>
        </div>
        <div className="panel-body text-center">
          <form>
            <div className="form-group">
              <h4 className="">
                <strong>Application Number</strong>
              </h4>
              <input
                type="text"
                value={this.state.appNumber}
                className="form-control text-center"
                id="appNumber"
                onChange={this.handleChange}
              />
              <br />
              <h4 className="">
                <strong>Stage</strong>
              </h4>              
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="application">Application Process</option>
                <option value="phone">Phone Interview</option>
                <option value="interview">Interview</option>
                <option value="offer">Offer</option>
                <option value="rejection">Rejection</option>
                <option value="general">General</option>
              </select>
              <br />
              <h4 className="">
                <strong>Comments</strong>
              </h4>
              <textarea
                type="text"
                value={this.state.comment}
                className="form-control text-center"
                id="comment"
                onChange={this.handleChange}
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
module.exports = Survey;
