const mongoose = require("mongoose");

const assuranceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name for the assurance company"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email for the assurance company"],
  },
});
const Assurance = mongoose.model("Assurance", assuranceSchema);

module.exports = Assurance;
