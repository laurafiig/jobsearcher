// Include React
var React = require("react");

// Creating the AppForm component
var AppForm = React.createClass({
  
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
    // See this Stack Overflow answer for more details:
    // http://stackoverflow.com/questions/21029999/react-js-identifying-different-inputs-with-one-onchange-handler
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },

  handleChangeStage: function(event) {
      this.setState({value: event.target.value});
  },


  // This code handles the sending of the search terms to the parent Search component
  handleSubmit: function(event) {
    event.preventDefault();
    console.log("CLICKED");
    console.log("inputs start");
    console.log(this.state.subject);
    console.log(this.state.value);
    console.log(this.state.comment);
    console.log("inputs end");
    //this.props.postSaved(this.state.subject, this.state.value, this.state.comment);
 
  },

  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h2 className="text-center">Application Info</h2>
        </div>
        <div className="panel-body text-center">
          <form>
            <div className="form-group">
              <h4 className="">
                <strong>Company Name</strong>
              </h4>
              <input
                type="text"
                value=""
                className="form-control text-center"
                id="compName"
                onChange=""
                required
              />
              <br />
              <h4 className="">
                <strong>Position</strong>
              </h4>
              <input
                type="text"
                value=""
                className="form-control text-center"
                id="position"
                onChange=""
                required
              />
              <br />
              <h4 className="">
                <strong>Link</strong>
              </h4>
              <input
                type="text"
                value=""
                className="form-control text-center"
                id="link"
                onChange=""
              />
              <br />
              <h4 className="">
                <strong>Date</strong>
              </h4>
              <input
                type="date"
                value=""
                className="form-control text-center"
                id="appDate"
                onChange=""
              />
              <br />              
              <h4 className="">
                <strong>How Applied</strong>
              </h4>              
              <select>
                <option value="linkedin">Linked In</option>
                <option value="company">On Company Website</option>
                <option value="jobboard">Job Board</option>
                <option value="recruiter">Recruiter</option>
              </select>
              <br />
              <h4 className="">
                <strong>Contact Name</strong>
              </h4>
              <input
                type="text"
                value=""
                className="form-control text-center"
                id="appContact"
                onChange=""
              />
              <hr />
              <h2 className="">
                <strong>Phone Interview</strong>
              </h2>
              <h4 className="">
                <strong>Date</strong>
              </h4>
              <input
                type="date"
                value=""
                className="form-control text-center"
                id="phoneDate"
                onChange=""
              />
              <h4 className="">
                <strong>Contact Name</strong>
              </h4>
              <input
                type="text"
                value=""
                className="form-control text-center"
                id="phoneCont"
                onChange=""
              />
              <h4 className="">
                <strong>Result</strong>
              </h4>
              <input
                type="text"
                value=""
                className="form-control text-center"
                id="phoneResult"
                onChange=""
              />
              <hr />
              <h2 className="">
                <strong>Interview</strong>
              </h2>
              <h4 className="">
                <strong>Date</strong>
              </h4>
              <input
                type="date"
                value=""
                className="form-control text-center"
                id="intDate"
                onChange=""
              />
              <h4 className="">
                <strong>Contact Name</strong>
              </h4>
              <input
                type="text"
                value=""
                className="form-control text-center"
                id="intContact"
                onChange=""
              />
              <h4 className="">
                <strong>Result</strong>
              </h4>
              <input
                type="text"
                value=""
                className="form-control text-center"
                id="intResult"
                onChange=""
              />
              <hr />
              <h2 className="">
                <strong>Job Offer</strong>
              </h2>
              <h4 className="">
                <strong>Date</strong>
              </h4>
              <input
                type="date"
                value=""
                className="form-control text-center"
                id="offerDate"
                onChange=""
              />
              <h4 className="">
                <strong>AcceptedApplied</strong>
              </h4>              
              <select>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
              <hr />
              <h2 className="">
                <strong>Rejection</strong>
              </h2>
              <h4 className="">
                <strong>Date</strong>
              </h4>
              <input
                type="date"
                value=""
                className="form-control text-center"
                id="rejectDate"
                onChange=""
              />
              <h4 className="">
                <strong>Method</strong>
              </h4>              
              <select>
                <option value="phone">Phone</option>
                <option value="email">EMail</option>
                <option value="other">Other</option>
              </select>
              <hr />
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
module.exports = AppForm;
