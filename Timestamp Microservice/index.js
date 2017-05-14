//Basic required import for NodeJS
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//Create an instance of express for our app and instantiate bodyParser and cors
const app = module.export = express();
app.use(bodyParser.json());
app.use(cors());
//Get call to return JSON that format natural and unix date
app.get("/dateValues/:dateVal", function (req,res,next) {
  //Gets the request data for date
  var dateVal = req.params.dateVal;
  //Options for formatting date in natural date view
  var dateFormattingOptions = {
    year : "numeric",
    month: "long",
    day: "numeric"
  };

  if (isNaN(dateVal)) {
    var naturalDate = new Date(dateVal);
    naturalDate = naturalDate.toLocaleDateString("es-ES", dateFormattingOptions);
    var unixDate = new Date(dateVal).getTime()/1000;
  } else {
    var unixDate = dateVal;
    var naturalDate = new Date(dateVal * 1000);
    naturalDate = naturalDate.toLocaleDateString("es-ES", dateFormattingOptions);
  }

  res.json({unix: unixDate, natural: naturalDate});
});

app.listen(3000, function () {
  console.log("Working");
})
