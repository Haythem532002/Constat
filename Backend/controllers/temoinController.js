const factory = require("./handlerFactory");
const Temoin = require("../models/temoinModel");

exports.createTemoin = factory.createOne(Temoin);
exports.getAllTemoin = factory.getAll(Temoin);
exports.getTemoin = factory.getOne(Temoin);
exports.updateTemoin = factory.updateOne(Temoin);
exports.deleteTemoin = factory.deleteOne(Temoin);
