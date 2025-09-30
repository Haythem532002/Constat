const mongoose = require("mongoose");

const assureSchema = new mongoose.Schema({
  nomAssuréA: String,
  prenomAssureA: String,
  numTelephoneA: String,
  codePostaleA: String,
});

module.exports = mongoose.model("assure", assureSchema);
