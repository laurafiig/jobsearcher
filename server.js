// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
//because mongoose mpromise is deprecated,
var Promise = require("bluebird");

mongoose.Promise = Promise;

// Require  Schema
var Comment = require("./models/comment.js");
var Job = require("./models/jobsearch.js");
var Login = require("./models/login.js");

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
//mongoose.connect("mongodb://localhost/jobsearcher");
mongoose.connect("mongodb://heroku_n9z61jwb:g70uj5oi9kcut1g19ru8ur1ori@ds117899.mlab.com:17899/heroku_n9z61jwb");
var db = mongoose.connection;

db.on("error", function(err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// -------------------------------------------

// Main "/" Route. This will redirect the user to our rendered React application
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// -------------------------------------------

// Route to add a review to database
app.post("/api/surveys", function(req, res) {
  var newComment = new Comment(req.body);
  console.log(req.body);
  newComment.save(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

// Route to update a review to database
app.post("/api/surveys/id", function(req, res) {
  console.log("WHY!!!!", req.body);
  Comment.update({
      _id: req.body._id
  }, {
    $set: {
      login: req.body.login,
      subject: req.body.subject,
      compPos: req.body.compPos,
      phase: req.body.phase,
      comment: req.body.comment
    }
  },function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

// Route to get all saved reviews
app.get("/api/surveys", function(req, res) {
  Comment.find({})
    .exec(function(err, doc) {
      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });
});


// Route to delete a review
app.delete("/api/surveys/", function(req, res) {
  var id = req.param("_id");
  Comment.find({ _id: id }).remove().exec(function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Deleted");
    }
  });
});

// -------------------------------------------

// Route to add a user to database
app.post("/api/logins", function(req, res) {
  var newLogin = new Login(req.body);
  console.log(req.body);
  newLogin.save(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});

// Route to retrieve login data.
app.get("/api/logins", function(req, res) {
  Login.find({})
    //string a call to populate the entry with the job and comments from the same login
    .populate("comments", "apps")
    .exec(function(err, doc) {
      if (err) {
        res.send(err);
      }
      else {
        res.send(doc);
      }
    });
});

// -------------------------------------------

// Route to add an application to database
app.post("/api/apps", function(req, res) {
  var newJob = new Job(req.body);
  console.log(req.body);
  newJob.save(function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});
  
  // Route to update a review to database
app.post("/api/apps/id", function(req, res) {
  console.log("WHY!!!!", req.body);
  Job.update({
      _id: req.body._id
  }, {
    $set: {
      login: req.body.login,
      compName: req.body.compName,
      position: req.body.position,
      link: req.body.link,
      appDate: req.body.appDate,
      howApp: req.body.howApp,
      appContact: req.body.appContact,
      phoneDate: req.body.phoneDate,
      phoneCont: req.body.phoneCont,
      phoneResult: req.body.phoneResult,
      intDate: req.body.intDate,
      intContact: req.body.intContact,
      intResult: req.body.intResult,
      offerDate: req.body.offerDate,
      accepted: req.body.accepted,
      rejectDate: req.body.rejectDate,
      method: req.body.method
    }
  },function(err, doc) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(doc);
    }
  });
});
  
// Route to get all saved applications
app.get("/api/apps", function(req, res) {
  Job.find({})
    .exec(function(err, doc) {
      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });
});

// Route to delete a job
app.delete("/api/apps/", function(req, res) {
  var id = req.param("_id");
  Job.find({ _id: id }).remove().exec(function(err) {
    if (err) {
      console.log(err);
    }
    else {
      res.send("Deleted");
    }
  });
});

// -------------------------------------------------

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});