const express = require("express");
const authController = require("../controllers/authController");
const circonstanceController = require("../controllers/circonstanceController");

const router = express.Router();

router.use(authController.protect);
router
  .route("/")
  .get(circonstanceController.getAllCirconstance)
  .post(circonstanceController.createCirconstance);

router
  .route("/:id")
  .get(circonstanceController.getCirconstance)
  .patch(circonstanceController.updateCirconstance)
  .delete(circonstanceController.deleteCirconstance);

module.exports = router;
