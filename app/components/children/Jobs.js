// Include React
var React = require("react");

// Include the Helper (for the saved recall)
var helpers = require("../../utils/helpers");

// Creating the Jobs component
var Jobs = React.createClass({

  getInitialState: function() {
    return { savedJobs: "" };
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
                <em>{job.company}</em>
              </span>
              <span className="btn-group pull-right">
                <button className="btn btn-primary">View/Update</button>
              </span>
            </h3>
            <h3>
              <span>
                <em>{job.title}</em>
              </span>
              <span className="btn-group pull-right">
                <button className="btn btn-warning" onClick={() => this.handleClick(job)}>Delete</button>
              </span>
            </h3>
            <h4>
              <span>
                <br />
                <em>Date Applied: {job.dateApp}</em>
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

            <div className="panel panel-primary">
              <div className="panel-heading">
                <h1 className="panel-title">
                  <strong>
                    <i className="fa fa-download" aria-hidden="true"></i>Job Applications</strong>
                </h1>
              </div>
              <div className="panel-body">
                <ul className="list-group">
                  {this.renderJobs()}
                </ul>
              </div>
            </div>
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
