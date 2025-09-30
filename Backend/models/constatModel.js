const mongoose = require("mongoose");

const constatSchema = new mongoose.Schema({
  // vehiculeA: {
  //   type: mongoose.Schema.ObjectId,
  //   ref: "voiture",
  // },
  // vehiculeB: {
  //   type: mongoose.Schema.ObjectId,
  //   ref: "voiture",
  // },
  nomAssuréA: String,
  prenomAssureA: String,
  numTelephoneA: String,
  immatA:String,
  codePostaleA: String,
  nomConducteurA: String,
  prenomConducteurA: String,
  adressEmailA: String,
  permitConducteurA: String,
  nomAssuréB: String,
  prenomAssureB: String,
  numTelephoneB: String,
  immatB:String,
  codePostaleB: String,
  nomConducteurB: String,
  prenomConducteurB: String,
  adressEmailB: String,
  permitCondicteurB: String,
  // temoin: [
  //   {
  //     type: mongoose.Schema.ObjectId,
  //     ref: "temoin",
  //   },
  // ],
  signatureA: String,
  signatureB: String,
  observationA: String,
  observationB: String,
});

const constat = mongoose.model("Constat", constatSchema);

module.exports = constat;
