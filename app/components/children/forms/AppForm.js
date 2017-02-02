// Include React
var React = require("react");

// Creating the AppForm component
var AppForm = React.createClass({
  
  // Here we set initial variables for the component to be blanks
  getInitialState: function() {
    return {
      compName: "",
      position: "",
      link: "",
      appDate: "",
      value1: "other",
      appContact: "",
      phoneDate: "",
      phoneCont: "",
      phoneResult: "",
      intDate: "",
      intContact: "",
      intResult: "",
      offerDate: "",
      value2: "blank",
      rejectDate: "",
      value3: "other"
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

  handleChangeForm1: function(event) {
      this.setState({value1: event.target.value});
  },
  handleChangeForm2: function(event) {
      this.setState({value2: event.target.value});
  },
  handleChangeForm3: function(event) {  
      this.setState({value3: event.target.value});
  },

  
  // This code handles the sending of the search terms to the parent Search component
  handleSubmit: function(event) {
    event.preventDefault();
    console.log("CLICKED");
    console.log("inputs start");
    console.log(this.state.compName);
    console.log(this.state.position);
    console.log(this.state.link);
    console.log(this.state.appDate);
    console.log(this.state.value1);
    console.log(this.state.appContact);
    console.log(this.state.phoneDate);
    console.log(this.state.phoneCont);
    console.log(this.state.phoneResult);
    console.log(this.state.intDate);
    console.log(this.state.intContact);
    console.log(this.state.intResult);
    console.log(this.state.offerDate);
    console.log(this.state.value2);
    console.log(this.state.rejectDate);
    console.log(this.state.value3);
    console.log("inputs end");
    //this.props.postSaved(this.state.compName,this.state.position,this.state.link,this.state.appDate,this.state.appContact,this.state.phoneDate,this.state.phoneCont,this.state.phoneResult,this.state.intDate,this.state.intContact,this.state.intResult,this.state.offerDate,this.state.rejectDate);
 
  },

  // Here we describe this component's render method
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h2 className="text-center">Application Info</h2>
        </div>
        <div className="panel-body text-center">
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <h4 className="">
                <strong>Company Name</strong>
              </h4>
              <input
                type="text"
                value={this.state.compName}
                className="form-control text-center"
                id="compName"
                onChange={this.handleChange}
                required
              />
              <br />
              <h4 className="">
                <strong>Position</strong>
              </h4>
              <input
                type="text"
                value={this.state.position}
                className="form-control text-center"
                id="position"
                onChange={this.handleChange}
                required
              />
              <br />
              <h4 className="">
                <strong>Link</strong>
              </h4>
              <input
                type="text"
                value={this.state.link}
                className="form-control text-center"
                id="link"
                onChange={this.handleChange}
              />
              <br />
              <h4 className="">
                <strong>Date</strong>
              </h4>
              <input
                type="date"
                value={this.state.appDate}
                className="form-control text-center"
                id="appDate"
                onChange={this.handleChange}
              />
              <br />              
              <h4 className="">
                <strong>How Applied</strong>
              </h4>              
              <select value={this.state.value1} onChange={this.handleChangeForm1}>
                <option value="linkedin">Linked In</option>
                <option value="company">On Company Website</option>
                <option value="jobboard">Job Board</option>
                <option value="recruiter">Recruiter</option>
                <option value="other">Recruiter</option>
              </select>
              <br />
              <h4 className="">
                <strong>Contact Name</strong>
              </h4>
              <input
                type="text"
                value={this.state.appContact}
                className="form-control text-center"
                id="appContact"
                onChange={this.handleChange}
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
                value={this.state.phoneDate}
                className="form-control text-center"
                id="phoneDate"
                onChange={this.handleChange}
              />
              <h4 className="">
                <strong>Contact Name</strong>
              </h4>
              <input
                type="text"
                value={this.state.phoneCont}
                className="form-control text-center"
                id="phoneCont"
                onChange={this.handleChange}
              />
              <h4 className="">
                <strong>Result</strong>
              </h4>
              <input
                type="text"
                value={this.state.phoneResult}
                className="form-control text-center"
                id="phoneResult"
                onChange={this.handleChange}
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
                value={this.state.intDate}
                className="form-control text-center"
                id="intDate"
                onChange={this.handleChange}
              />
              <h4 className="">
                <strong>Contact Name</strong>
              </h4>
              <input
                type="text"
                value={this.state.intContact}
                className="form-control text-center"
                id="intContact"
                onChange={this.handleChange}
              />
              <h4 className="">
                <strong>Result</strong>
              </h4>
              <input
                type="text"
                value={this.state.intResult}
                className="form-control text-center"
                id="intResult"
                onChange={this.handleChange}
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
                value={this.state.offerDate}
                className="form-control text-center"
                id="offerDate"
                onChange={this.handleChange}
              />
              <h4 className="">
                <strong>Accepted</strong>
              </h4>              
              <select value={this.state.value2} onChange={this.handleChangeForm2}>
                <option value="yes">Yes</option>
                <option value="no">No</option>
                <option value="blank"></option>
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
                value={this.state.rejectDate}
                className="form-control text-center"
                id="rejectDate"
                onChange={this.handleChange}
              />
              <h4 className="">
                <strong>Method</strong>
              </h4>              
              <select value={this.state.value3} onChange={this.handleChangeForm3}>
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
