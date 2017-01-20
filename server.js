// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

// Require  Schema


// Create Instance of Express
var app = express();
// Sets an initial port. We'll use this later in our listener
var PORT = process.env.PORT || 3000;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));

// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
mongoose.connect("mongodb://localhost/jobsearcher");
//mongoose.connect("mongodb://heroku_n9z61jwb:g70uj5oi9kcut1g19ru8ur1ori@ds117899.mlab.com:17899/heroku_n9z61jwb");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------------

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// This is the route we will send GET requests to retrieve our most recent search data.
// We will call this route the moment our page gets rendered
app.get("/api", function(req, res) { });


// This is the route we will send POST requests to save each search.
app.post("/api", function(req, res) { });


 
// -------------------------------------------------

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});