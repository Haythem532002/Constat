const factory = require("./handlerFactory");
const Choq = require("./../models/choqModel");

exports.createChoq = factory.createOne(Choq);
exports.getAllChoq = factory.getAll(Choq);
exports.getChoq = factory.getOne(Choq);
exports.updateChoq = factory.updateOne(Choq);
exports.deleteChoq = factory.deleteOne(Choq);
