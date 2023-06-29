const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  title: {
    type: String,
    default: "Untitled",
  },
  content: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Note", noteSchema);
