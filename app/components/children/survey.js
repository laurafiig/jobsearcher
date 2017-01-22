// Include React
var React = require("react");

// Creating the Survey component
var Survey = React.createClass({

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
                value=""
                className="form-control text-center"
                id="term"
                onChange=""
                required
              />
              <br />
              <h4 className="">
                <strong>Stage</strong>
              </h4>              
              <select>
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
                value=""
                className="form-control text-center"
                id="term"
                onChange=""
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
