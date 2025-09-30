const mongoose = require("mongoose");

const circonstanceSchema = new mongoose.Schema({
  stationnement: Boolean,
  quittaitStationnement: Boolean,
  prenaitStationnement: Boolean,
  sortaitParking: Boolean,
  sengageaitParking: Boolean,
  arretCirculation: Boolean,
  frottement: Boolean,
  heurtaitArriere: Boolean,
  roulaitMemeSens: Boolean,
  changeaitFile: Boolean,
  doublait: Boolean,
  viraitDroite: Boolean,
  viraitGauche: Boolean,
  reculait: Boolean,
  empletait: Boolean,
  venaitDroite: Boolean,
  navaitPasObserved: Boolean,
  aucun: Boolean,
});

module.exports = mongoose.model("Circonstance", circonstanceSchema);
