const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//Informacion del sistema
const useragent = require("express-useragent");

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());

//API url
var api = "/api/whoami";

app.get(api, function (req, res, next) {
  //Vemos el lenguage en que esta configurada la maquina
  let language = req.acceptsLanguages();
  //Vemos informacion del sistema
  let os = req.useragent.os;
  let browser = req.useragent.browser ;
  let ipaddress = req.ip;

  res.json({"ipaddress" : ipaddress, "language" : language[0], "S.O" : os, "Browser" : browser});
});

app.listen(3000, function () {
  console.log("Working");
});
