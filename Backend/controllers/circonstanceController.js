const factory = require("./handlerFactory");
const Circonstance = require("../models/circonstanceModel");

exports.createCirconstance = factory.createOne(Circonstance);
exports.getAllCirconstance = factory.getAll(Circonstance);
exports.getCirconstance = factory.getOne(Circonstance);
exports.updateCirconstance = factory.updateOne(Circonstance);
exports.deleteCirconstance = factory.deleteOne(Circonstance);
