const mongoose = require("mongoose");

const notification = new mongoose.Schema({
    name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  number: {
    type: String,
    require: true,
  },
  subject: {
    type: String,
    require: true,
  },
  message: {
    type: String,
    require: true,
  },
  
});

module.exports = mongoose.model("ssis", notification);
