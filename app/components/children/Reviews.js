// Include React
var React = require("react");
// Include the Helper (for the saved recall)
var helpers = require("../../utils/helpers");
//include button component
var Choice = require("./Choice");


// Creating the Reviews component
var Reviews = React.createClass({

  getInitialState: function() {
    return { 
      savedComments: "",
      subject: "",
      compPos: "",
      phase: "",
      comment: ""
     };
  },

  // When this component mounts, get all saved comments from our db
  componentDidMount: function() {
    helpers.getSavedCom().then(function(commentData) {
      this.setState({ savedComments: commentData.data });
      console.log("saved results", commentData.data);
    }.bind(this));
  },

  // This code handles the deleting saved comments from our database
  handleClick: function(item) {
    console.log("CLICKED");
    console.log(item);
    // Delete the list!
    helpers.deleteSavedCom(item._id, item.subject, item.compPos, item.phase, item.comment).then(function() {
      // Get the revised list!
      helpers.getSavedCom().then(function(commentData) {
        this.setState({ savedComments: commentData.data });
        console.log("saved results", commentData.data);
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
      subject: item.subject,
      compPos: item.compPos,
      phase: item.phase,
      comment: item.comment
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

    // This code handles the sending of the search terms to the list.
  handleClick3: function(event) {
    console.log("CLICKED");
    console.log(event);

    helpers.postSavedCom(event.subject, event.compPos, event.phase, event.comment).then(function() {
      // Get the revised list!
      helpers.getSavedCom().then(function(commentData) {
        this.setState({ savedComments: commentData.data });
        console.log("saved results", commentData.data);
      }.bind(this));
    }.bind(this));
  },
 
  // A helper method for rendering the HTML when we have no saved comments
  renderEmpty: function() {
    return (
      <li className="list-group-item">
        <h3>
          <span>
            <em>No saved comments!</em>
          </span>
        </h3>
      </li>
    );
  },

  // A helper method for mapping through our comments and outputting some HTML
  renderComments: function() {
    return this.state.savedComments.map(function(comment, index) {
      return (
        <div key={index}>
          <li className="list-group-item">
            <h3>
              <span>
                <em>{comment.subject}</em>
              </span>
              <span className="btn-group pull-right">
              <button className="btn btn-primary" onClick={() => this.handleClick2(comment)}>View/Update</button>
              </span>
            </h3>
            <h3>
              <span className="btn-group pull-right">
              <button className="btn btn-primary" onClick={() => this.handleClick(comment)}>Delete</button>
              </span>
            </h3>
            <h4>
              <span>
                <em>Position: {comment.compPos}</em>
              </span>
            </h4>
            <h4>
              <span>
                <em>Phase: {comment.phase}</em>
              </span>
            </h4>
            <p>{comment.comment}</p>
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
      <i className="header-content-inner" aria-hidden="true"></i> Saved Comments</strong>
      </h1>
      </header>

      <div className="panel-body">
      <ul className="list-group">
      {this.renderComments()}
      </ul>
      </div>

    </section>
  </div>

  <div className="col-sm-6 bg-white">
  <section>
  <div className="header-content">
  <h2 className="header-content-inner">Leave Feedback Here</h2>
  </div>
  <div>
  <form >
  <div className="form-group">
  <h4 className="">
  <strong>Review Subject</strong>
  </h4>
  </div>
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
  <button  className="btn btn-primary" onClick={() => this.handleClick3(this.state)}>Submit</button>
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
    // If we have no comments, we will return this.renderEmpty() which in turn returns some HTML
    if (!this.state.savedComments) {
      return this.renderEmpty();
    }
    // If we have comments, return this.renderContainer() which in turn returns all saves comments
    return this.renderContainer();
  }
});

// Export the component back for use in other files
module.exports = Reviews;
