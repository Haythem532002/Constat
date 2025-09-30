const express = require("express");
const authController = require("../controllers/authController");
const assuranceController = require("../controllers/assuranceController");

const router = express.Router();

router.use(authController.protect);
router
  .route("/")
  .get(assuranceController.getAllAssurance)
  .post(
    authController.restrictTo("admin"),
    assuranceController.createAssurance
  );

router
  .route("/:id")
  .get(assuranceController.getAssurance)
  .patch(
    authController.restrictTo("admin"),
    assuranceController.updateAssurance
  )
  .delete(
    authController.restrictTo("admin"),
    assuranceController.deleteAssurance
  );

module.exports = router;
