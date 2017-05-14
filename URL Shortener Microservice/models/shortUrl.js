//Template/structure/model de documentos para shortUrl
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const urlSchema = new Schema({
  //keyvalue
  originalUrl: String,
  //item que haremos return
  shorterUrl: String
}, {timestamps: true});

//(param1 collection or tablename,param2 schema o estructura)
const ModelClass = mongoose.model("shortUrl", urlSchema);
//acceso en nodejs
module.exports = ModelClass;
