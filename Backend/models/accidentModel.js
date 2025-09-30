const mongoose = require("mongoose");

const accidentSchema = new mongoose.Schema({
  date: {
    type: Date,
    // required: [true, "Please provide a date for the accident"],
  },
  heure: {
    type: String,
    // required: [true, "Please provide an hour for the accident"],
  },
  lieu: {
    type: String,
    // required: [true, "Please provide an place for the accident"],
  },
  codePostale: {
    type: String,
    // required: [true, "Please provide an zip code for the accident"],
  },
  ville: {
    type: String,
    // required: [true, "Please provide an ville for the accident"],
  },
  choc: {
    type: mongoose.Schema.ObjectId,
    ref: "choq",
  },
  circomstance: {
    type: mongoose.Schema.ObjectId,
    ref: "Circonstance",
  },
});
const Accident = mongoose.model("Accident", accidentSchema);

module.exports = Accident;
