// Include React
var React = require("react");

// Include the helpers for making API calls
var helpers = require("../../utils/helpers");

// Creating the App component
var App = React.createClass({

  // Here we set initial variables for the component to be blanks
  getInitialState: function() {
    return {
      compName: "",
      position: "",
      link: "",
      appDate: "",
      howApp: "",
      appContact: "",
      phoneDate: "",
      phoneCont: "",
      phoneResult: "",
      intDate: "",
      intContact: "",
      intResult: "",
      offerDate: "",
      accepted: "",
      rejectDate: "",
      method: ""
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



    handleClick: function(event) {
    console.log("CLICKED");
    console.log(event);

    helpers.postSavedApp(event.compName, event.position, event.link, event.appDate, event.howApp, event.appContact, event.phoneDate, event.phoneCont, event.phoneResult, event.intDate, event.intContact, event.intResult, event.offerDate, event.accepted, event.rejectDate, event.method).then(function() {
      console.log(event.compName, event.position, event.link, event.appDate, event.howApp, event.appContact, event.phoneDate, event.phoneCont, event.phoneResult, event.intDate, event.intContact, event.intResult, event.offerDate, event.accepted, event.rejectDate, event.method);
    });
  },

  // Here we describe this component's render method
  render: function() {
    return (
      <div className="main-container">

      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title text-center">What would you like to do?</h3>
        </div>
        <div className="panel-body text-center">
              <a href="#/App" className="btn btn-primary btn-lg">New App</a>
              <a>          </a>
              <a href="#/Jobs" className="btn btn-primary btn-lg">See Apps</a>
              <a>          </a>
              <a href="#Survey" className="btn btn-primary btn-lg">New Review</a>
              <a>          </a>
              <a href="#/Reviews" className="btn btn-primary btn-lg">See Reviews</a>
                            
        </div>
      </div>

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
              <input             
                type="text"
                value={this.state.howApp}
                className="form-control text-center"
                id="howApp"
                onChange={this.handleChange}
              />
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
              <input
                type="text"
                value={this.state.accepted}
                className="form-control text-center"
                id="accepted"
                onChange={this.handleChange}
              />
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
              <input
                type="text"
                value={this.state.method}
                className="form-control text-center"
                id="method"
                onChange={this.handleChange}
              />
              <hr />
              <button className="btn btn-primary" onClick={() => this.handleClick(this.state)} >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
        
      </div>
    );
  }
});

// Export the component back for use in other files
module.exports = App;
