const factory = require("./handlerFactory");
const Voiture = require("./../models/voitureModel");

exports.createVoiture = factory.createOne(Voiture);
exports.getAllVoiture = factory.getAll(Voiture);
exports.getVoiture = factory.getOne(Voiture);
exports.updateVoiture = factory.updateOne(Voiture);
exports.deleteVoiture = factory.deleteOne(Voiture);
