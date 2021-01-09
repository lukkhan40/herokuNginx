const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const data = new Schema({
  mensaje: {
    type: String,
  },
});

module.exports = mongoose.model("M", data);
