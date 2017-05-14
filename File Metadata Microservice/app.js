const express = require('express');
const cors = require('cors');
const multer = require('multer');
const bodyParser = require('body-parser');
const upload = multer({dest:"uploads/"});

const app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
//app.get("/", (req,res,next)=>{
//  res.sendFile(__dirname + "/index.html");
//});
//Todo lo que esta en la carpeta public es accesible
app.use(express.static(__dirname + "/public"));

app.post("/upload", upload.single("file"), (req,res,next)=>{
  return res.json(req.file);
});

app.listen(3000, ()=>{console.log("Working");});
