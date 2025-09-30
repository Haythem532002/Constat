const express = require("express");
const authController = require("../controllers/authController");
const constatController = require("../controllers/constatController");

const router = express.Router();

// router.use(authController.protect);
router
  .route("/")
  .get(constatController.getAllConstat)
  .post(constatController.createConstat);

router
  .route("/:id")
  .get(constatController.getConstat)
  .patch(constatController.updateConstat)
  .delete(constatController.deleteConstat);

module.exports = router;
