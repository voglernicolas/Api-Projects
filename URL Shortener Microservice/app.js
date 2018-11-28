const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const shorUrl = require('./models/shortUrl');
const app = express();

app.use(bodyParser.json());
app.use(cors());

//Acceso a database en heroku o local
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/shortUrl");

//Acceso a node sobre public/index.html
app.use(express.static(__dirname + "/public"));

//Crear database entry
app.get("/new/:urlToShorten(*)", (req,res,next) =>{
  //ES5. let urlToShorten = req.params.urlToShorten
  let {urlToShorten} = req.params;
  //RegExp para URL

});

app.listen(3000, () =>{
  console.log("Works!");
});
