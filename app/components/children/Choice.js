// Include React
var React = require("react");

// Creating the Choice component
var Choice = React.createClass({
  
  // Here we describe this component's render method
  render: function() {
    return (
      <section>
        <header className="header-content">
          <h3 className="header-content-inner">What would you like to do?</h3>
        </header>
        <div>
              <a href="#/Jobs" className="btn btn-primary btn-lg">Applications</a>
              <a>          </a>
              <a href="#/Reviews" className="btn btn-primary btn-lg">Reviews</a>
                            
        </div>
      </section>
    );
  }
});

// Export the component back for use in other files
module.exports = Choice;
