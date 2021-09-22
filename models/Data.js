const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema({
  name: String,
  dates: Object,
});

module.exports = mongoose.model("Data", DataSchema);
