const express = require("express");
const authController = require("../controllers/authController");
const choqController = require("../controllers/choqController");

const router = express.Router();

router.use(authController.protect);
router
  .route("/")
  .get(choqController.getAllChoq)
  .post(choqController.createChoq);

router
  .route("/:id")
  .get(choqController.getChoq)
  .patch(choqController.updateChoq)
  .delete(choqController.deleteChoq);

module.exports = router;
