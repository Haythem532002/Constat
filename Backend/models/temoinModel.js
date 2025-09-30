const mongoose = require("mongoose");

const temoinSchema = new mongoose.Schema({
  nomPrénom: {
    type: String,
  },
  numTel: {
    type: String,
  },
  addresse: {
    type: String,
  },
  codePostal: {
    type: String,
  },
  ville: {
    type: String,
  },
});
const temoin = mongoose.model("temoin", temoinSchema);

module.exports = temoin;
