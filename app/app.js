// Include the Main React Dependencies
var React = require("react");
var ReactDOM = require("react-dom");

// Grabs the Routes
var routes = require("./config/routes");

// Renders the contents according to the route page.
ReactDOM.render(routes, document.getElementById("app"));

// Include the main Main Component
//var Main = require("./components/Main");

// This code here allows us to render our main component (in this case Main)
//ReactDOM.render(<Main />, document.getElementById("app"));
