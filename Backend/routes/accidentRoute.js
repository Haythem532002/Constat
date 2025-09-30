const express = require("express");
const authController = require("../controllers/authController");
const accidentController = require("../controllers/accidentController");

const router = express.Router();

// router.use(authController.protect);
router
  .route("/")
  .get(accidentController.getAllAccident)
  .post(accidentController.createAccident);

router
  .route("/:id")
  .get(accidentController.getAccident)
  .patch(accidentController.updateAccident)
  .delete(accidentController.deleteAccident);

module.exports = router;
