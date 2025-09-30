const mongoose = require("mongoose");

const choqModelSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  choqImages: {
    type: [String],
    required: true,
  },
  degatImages: [
    {
      type: [String],
    },
  ],
});

const choqModel = mongoose.model("choq", choqModelSchema);

module.exports = choqModel;
