const mongoose = require("mongoose");

const voitureSchema = new mongoose.Schema({
  typeVehicule: {
    type: String,
  },
  assurance: {
    type: mongoose.Schema.ObjectId,
    ref: "Assurance",
  },
  mat: {
    type: String,
  },
});
const voiture = mongoose.model("voiture", voitureSchema);

module.exports = voiture;
