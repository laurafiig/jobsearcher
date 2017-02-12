// Include React
var React = require("react");

// Include the helpers for making API calls
var helpers = require("../../../utils/helpers");

// Creating the SurveyForm component
var SurveyForm = React.createClass({
  
  // Here we set initial variables for the component to be blanks
  getInitialState: function() {
    return {
      subject: "",
      value: "",
      comment: ""
    };
  },

  // Whenever we detect ANY change in the textbox, we register it.
  handleChange: function(event) {
    console.log("TEXT CHANGED");
    // Here we create syntax to capture any change in text to the query terms (pre-search).
    
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },

  

/*
  // This code handles the sending of the search terms to the parent Search component
  handleSubmit: function(event) {
    event.preventDefault();
    console.log("CLICKED");
    console.log("inputs start");
    console.log(this.state.subject);
    console.log(this.state.comment);
    console.log("inputs end");
    this.props.updateSurvey(this.state.subject,  this.state.comment);
    // add to submit button onSubmit={this.handleSubmit}{/*
  },
*/

  // This code handles the sending of the search terms to the parent Search component
  handleClick: function(event) {
    console.log("CLICKED");
    console.log(event);

    helpers.postSaved(event.subject, event.comment).then(function() {
      console.log(event.comment);
    });
  },


  // Here we describe this component's render method
  render: function() {
    return (
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
    );
  }
});

// Export the component back for use in other files
module.exports = SurveyForm;
