const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const characterSchema = new Schema({
  title: String,
  content: String
});

module.exports = mongoose.model("newobject", characterSchema);