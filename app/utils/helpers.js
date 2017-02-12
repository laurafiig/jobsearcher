// Include the Axios library for HTTP requests
var axios = require("axios");

// Helper Functions
var helpers = {

/*  // This will run our query.
  runQuery: function(term, start, end) {


    // Adjust to get search terms in proper format
    var formattedTerm = term.trim();
    var formattedStart = start.trim() + "0101";
    var formattedEnd = end.trim() + "1231";
    console.log("Query Run");
    // Run a query using Axios. Then return the results as an object with an array.
    // See the Axios documentation for details on how we structured this with the params.
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json", {
      params: {
        "api-key": APIKey,
        "q": formattedTerm,
        "begin_date": formattedStart,
        "end_date": formattedEnd
      }
    })
    .then(function(results) {
      console.log("Axios Results", results.data.response);
      return results.data.response;
    });
  },
*/

/*
  // This will return any saved articles from our database
  getSaved: function() {
    return axios.get("/api/saved")
      .then(function(results) {
        console.log("axios results", results);
        return results;
      });
  },
 */ 
  
  // This will save new survey results to our database
  postSavedCom: function(subject, compPos, phase, comment) {
    var newComment = { subject: subject, compPos: compPos, phase: phase,comment: comment };
    return axios.post("/api/surveys", newComment)
      .then(function(response) {
        console.log("axios results", response.data._id);
        return response.data._id;
      });
  },

  // This will save new survey results to our database
  postSavedLog: function(username, password) {
    var newComment = { username: username, password: password };
    return axios.post("/api/logins", newComment)
      .then(function(response) {
        console.log("axios results", response.data._id);
        return response.data._id;
      });
  },

  // This will save new survey results to our database
  postSavedApp: function(compName, position, link, appDate, howApp, appContact, phoneDate, phoneCont, phoneResult, intDate, intContact, intResult, offerDate, accepted, rejectDate, method) {
    var newComment = { company: compName, title: position , link: link, dateApp: appDate, howApp: howApp, contactApp: appContact, datePhone: phoneDate, contactPhone: phoneCont, resultPhone: phoneResult, dateInt: intDate, contactInt: intContact, resultInt: intResult, dateOffer: offerDate, Accept: accepted, dateRej: rejectDate, howRej: method, };
    return axios.post("/api/apps", newComment)
      .then(function(response) {
        console.log("axios results", response.data._id);
        return response.data._id;
      });
  },

 /* 
  // This will remove saved articles from our database
  deleteSaved: function(title, data, url) {
    return axios.delete("/api/saved", {
      params: {
        "title": title,
        "data": data,
        "url": url
      }
    })
    .then(function(results) {
      console.log("axios results", results);
      return results;
    });
  }
*/

};


// We export the helpers function
module.exports = helpers;
