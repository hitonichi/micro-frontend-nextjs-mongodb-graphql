const mongoose = require("mongoose");

const animalSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  legs: {
    type: Number,
    required: true,
  },
  color: {
    type: [String],
  },
});

module.exports = mongoose.model("Animal", animalSchema);
