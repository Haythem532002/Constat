const factory = require("./handlerFactory");
const Accident = require("./../models/accidentModel");

exports.createAccident = factory.createOne(Accident);
exports.getAllAccident = factory.getAll(Accident);
exports.getAccident = factory.getOne(Accident);
exports.updateAccident = factory.updateOne(Accident);
exports.deleteAccident = factory.deleteOne(Accident);
