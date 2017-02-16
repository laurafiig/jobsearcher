// Include the Axios library for HTTP requests
var axios = require("axios");

// Helper Functions
var helpers = {

//----------------------------
  
  // This will save new survey results to our database
  postSavedCom: function(subject, compPos, phase, comment) {
    var newComment = { subject: subject, compPos: compPos, phase: phase,comment: comment };
    return axios.post("/api/surveys", newComment)
      .then(function(response) {
        console.log("axios results", response.data._id);
        return response.data._id;
      });
  },

  // This will return any saved surveys from our database
  getSavedCom: function() {
    return axios.get("/api/surveys")
      .then(function(results) {
        console.log("axios results", results);
        return results;
      });
  },
 
  // This will remove saved articles from our database
  deleteSavedCom: function(_id) {
    return axios.delete("/api/surveys", {
      params: {
        "_id": _id
      }
    })
    .then(function(results) {
      console.log("axios results", results);
      return results;
    });
  },

//----------------------------

  // This will save new user results to our database
  postSavedLog: function(username, password) {
    var newComment = { username: username, password: password };
    return axios.post("/api/logins", newComment)
      .then(function(response) {
        console.log("axios results", response.data._id);
        return response.data._id;
      });
  },

  // This will return saved login data
  getSavedLog: function() {
    return axios.get("/api/logins").then(function(results) {
      console.log("axios results", results);
        return results;
    });
  },

//----------------------------
 
  // This will save new jobs to our database
  postSavedApp: function(compName, position, link, appDate, howApp, appContact, phoneDate, phoneCont, phoneResult, intDate, intContact, intResult, offerDate, accepted, rejectDate, method) {
    var newComment = { company: compName, title: position , link: link, dateApp: appDate, howApp: howApp, contactApp: appContact, datePhone: phoneDate, contactPhone: phoneCont, resultPhone: phoneResult, dateInt: intDate, contactInt: intContact, resultInt: intResult, dateOffer: offerDate, Accept: accepted, dateRej: rejectDate, howRej: method, };
    return axios.post("/api/apps", newComment)
      .then(function(response) {
        console.log("axios results", response.data._id);
        return response.data._id;
      });
  },

  // This will return any saved jobs from our database
  getSavedApp: function() {
    return axios.get("/api/apps")
      .then(function(results) {
        console.log("axios results", results);
        return results;
      });
  },

  // This will remove saved jobs from our database
  deleteSavedApp: function(_id) {
    return axios.delete("/api/apps", {
      params: {
        "_id": _id
      }
    })
    .then(function(results) {
      console.log("axios results", results);
      return results;
    });
  }

};

// We export the helpers function
module.exports = helpers;