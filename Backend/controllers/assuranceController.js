const factory = require("./handlerFactory");
const Assurance = require("./../models/assuranceModel");

exports.createAssurance = factory.createOne(Assurance);
exports.getAllAssurance = factory.getAll(Assurance);
exports.getAssurance = factory.getOne(Assurance);
exports.updateAssurance = factory.updateOne(Assurance);
exports.deleteAssurance = factory.deleteOne(Assurance);
