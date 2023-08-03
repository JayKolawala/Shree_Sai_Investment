const mongoose = require("mongoose");

const service = new mongoose.Schema({
  
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  image: {
    type: String,
    require: true,
  }
  
});

module.exports = mongoose.model("Service", service);
