// Include React
var React = require("react");

// Include the Helper (for the saved recall)
var helpers = require("../../utils/helpers");

var Choice = require("./Choice");

// Creating the Reviews component
var Reviews = React.createClass({

  getInitialState: function() {
    return { savedComments: "" };
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

  // This code handles the deleting saved comments from our database
  handleClick2: function(item) {
    console.log("CLICKED");
    console.log(item);
    helpers.postSavedCom(item.subject, item.compPos, item.phase, item.comment).then(function() {
      console.log(item.subject);
    });
      /*// Here we capture 
    event.preventDefault();
    console.log("CLICKED");
    this.props.updateComment(this.state.subject, this.state.compPos, this.state.phase, this.state.comment);
    console.log("submit form")
    console.log(this.state.subject)
    console.log(this.state.comment)
    console.log("end submit form")*/
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
              <span className="btn-group-vertical pull-right">
              <a href="#Survey" className="btn btn-primary" onClick={() => this.handleClick2(comment)}>View/Update</a>
              <button className="btn btn-warning" onClick={() => this.handleClick(comment)}>Delete</button>
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

            <div className="panel panel-primary">
              <div className="panel-heading">
                <h1 className="panel-title">
                  <strong>
                    <i className="fa fa-download" aria-hidden="true"></i> Saved Comments</strong>
                </h1>
              </div>
              <div className="panel-body">
                <ul className="list-group">
                  {this.renderComments()}
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
