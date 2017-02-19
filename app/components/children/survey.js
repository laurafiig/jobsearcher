// Include React
var React = require("react");

// Include the helpers for making API calls
var helpers = require("../../utils/helpers");

var Choice = require("./Choice");

// Creating the Survey component
var Survey = React.createClass({

  // Here we set initial variables for the component to be blanks
  getInitialState: function() {
    return {
      subject: "",
      compPos: "",
      phase: "",
      comment: ""
    };
  },

 /*   componentDidMount: function(item) {
    console.log("CLICKED HERE");
    console.log(item);
    helpers.getSavedCom(item.subject, item.compPos, item.phase, item.comment).then(function() {
      console.log("SUBJECT", item.subject);
    return {
      subject: this.state.subject,
      compPos: this.state.compPos,
      phase: this.state.phase,
      comment: this.state.comment
    };

    });
    
  },*/

  // Whenever we detect ANY change in the textbox, we register it.
  handleChange: function(event) {
    console.log("TEXT CHANGED");
    // Here we create syntax to capture any change in text to the query terms (pre-search).
    
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },

  

  // This code handles the sending of the search terms to the parent Search component
  handleClick: function(event) {
    console.log("CLICKED");
    console.log(event);

    helpers.postSavedCom(event.subject, event.compPos, event.phase, event.comment).then(function() {
      console.log(event.comment);
    });
  },

   // Here we describe this component's render method
  render: function() {
    return (
      <div className="main-container">
      <Choice />


       <div className="panel panel-default">
        <div className="panel-heading">
          <h2 className="text-center">Leave Feedback Here</h2>
        </div>
        <div className="panel-body text-center">
          <form >
            <div className="form-group">
              <h4 className="">
                <strong>Review Subject</strong>
              </h4>
              <input
                type="text"
                value={this.state.subject}
                className="form-control text-center"
                id="subject"
                onChange={this.handleChange}
                required
              />
              <br />
              <h4 className="">
                <strong>Company/Position</strong>
              </h4>
              <input
                type="text"
                value={this.state.compPos}
                className="form-control text-center"
                id="compPos"
                onChange={this.handleChange}
              />
              <br />
              <h4 className="">
                <strong>Application Phase</strong>
              </h4>
              <input
                type="text"
                value={this.state.phase}
                className="form-control text-center"
                id="phase"
                onChange={this.handleChange}
              />
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
              <button  className="btn btn-primary" onClick={() => this.handleClick(this.state)}>Submit</button>



            </div>
          </form>
        </div>
      </div>
        
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = Survey;
