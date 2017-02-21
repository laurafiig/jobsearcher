// Include React
var React = require("react");

// Include the Helper (for the saved recall)
var helpers = require("../../utils/helpers");

var Choice = require("./Choice");

// Creating the Jobs component
var Jobs = React.createClass({

  getInitialState: function() {
    return { 
      savedJobs: "",
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

  // When this component mounts, get all saved jobs from our db
  componentDidMount: function() {
    helpers.getSavedApp().then(function(jobData) {
      this.setState({ savedJobs: jobData.data });
      console.log("saved results", jobData.data);
    }.bind(this));
  },


  // This code handles the deleting saved jobs from our database
  handleClick: function(item) {
    console.log("CLICKED");
    console.log(item);
    // Delete the list!
    helpers.deleteSavedApp(item._id, item.compName, item.position, item.link, item.appDate, item.howApp, item.appContact, item.phoneDate, item.phoneCont, item.phoneResult, item.intDate, item.intContact, item.intResult, item.offerDate, item.accepted, item.rejectDate, item.method).then(function() {
      // Get the revised list!
      helpers.getSavedApp().then(function(jobData) {
        this.setState({ savedJobs: jobData.data });
        console.log("saved results", jobData.data);
      }.bind(this));
    }.bind(this));
  },

  // This code handles the updating saved comments from our database
  handleClick2: function(item) {
//    console.log("FOR UPDATE");
//    console.log(item);
//    console.log("subject:", item.subject);
//    console.log("END FOR UPDATE");
    
      console.log(item)
      this.setState({
      compName: item.compName,
      position: item.position,
      link: item.link,
      appDate: item.appDate,
      howApp: item.howApp,
      appContact: item.appContact,
      phoneDate: item.phoneDate,
      phoneCont: item.phoneCont,
      phoneResult: item.phoneResult,
      intDate: item.intDate,
      intContact: item.intContact,
      intResult: item.intResult,
      offerDate: item.offerDate,
      accepted: item.accepted,
      rejectDate: item.rejectDate,
      method: item.method
    });
    
  },

  // Whenever we detect ANY change in the textbox, we register it.
  handleChange: function(event) {
    console.log("TEXT CHANGED");
    // Here we create syntax to capture any change in text to the query terms (pre-search).
    
    var newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  },

    //This code handles the sending of the application to the list.
    handleClick3: function(event) {
    console.log("CLICKED");
    console.log(event);

    helpers.postSavedApp(event.compName, event.position, event.link, event.appDate, event.howApp, event.appContact, event.phoneDate, event.phoneCont, event.phoneResult, event.intDate, event.intContact, event.intResult, event.offerDate, event.accepted, event.rejectDate, event.method).then(function() {
      // Get the revised list!
      helpers.getSavedApp().then(function(jobData) {
        this.setState({ savedJobs: jobData.data });
        console.log("saved results", jobData.data);
      }.bind(this));
    }.bind(this));
  },

  // A helper method for rendering the HTML when we have no saved jobs
  renderEmpty: function() {
    return (
      <li className="list-group-item">
        <h3>
          <span>
            <em>No saved jobs!</em>
          </span>
        </h3>
      </li>
    );
  },

  // A helper method for mapping through our jobs and outputting some HTML
  renderJobs: function() {

    return this.state.savedJobs.map(function(job, index) {

      return (
        <div key={index}>
          <li className="list-group-item">
            <h3>
              <span>
                <em>{job.compName}</em>
              </span>
              <span className="btn-group pull-right">
                <button className="btn btn-primary" onClick={() => this.handleClick2(job)}>View/Update</button>
              </span>
            </h3>
            <h3>
              <span>
                <em>{job.position}</em>
              </span>
              <span className="btn-group pull-right">
                <button className="btn btn-primary" onClick={() => this.handleClick(job)}>Delete</button>
              </span>
            </h3>
            <h4>
              <span>
                <br />
                <em>Date Applied: {job.appDate}</em>
              </span>
            </h4>
          </li>
        </div>
      );
    }.bind(this));
  },

  // A helper method for rendering a container and all of our artiles inside
  renderContainer: function() {
    return (
      <div className="main-container">
 

        <div className="row">
          <div className="col-lg-12">
            
      <Choice />

          </div>
        </div>

        <div className="row">
          <div className="col-sm-6">

            <section>
              <header className="header-content">
                <h1>
                  <strong>
                    <i className="header-content-inner" aria-hidden="true"></i>Job Applications</strong>
                </h1>
              </header>
              <div>
                <ul className="list-group">
                  {this.renderJobs()}
                </ul>
              </div>
            </section>
           </div> 

          <div className="col-sm-6">
          <section>
          <header className="header-content">
      <h1>
      <strong>
      <i className="header-content-inner" aria-hidden="true"></i> Application Info</strong>
      </h1>
      </header>
        <div>
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
              <button className="btn btn-primary" onClick={() => this.handleClick3(this.state)} >
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
      </div>
      </div>
        
      </div>
    );
  },
  // Our render method. Utilizing a few helper methods to keep this logic clean
  render: function() {
    // If we have no jobs, we will return this.renderEmpty() which in turn returns some HTML
    if (!this.state.savedJobs) {
      return this.renderEmpty();
    }
    // If we have jobs, return this.renderContainer() which in turn returns all saves comments
    return this.renderContainer();
  }
});


// Export the component back for use in other files
module.exports = Jobs;
