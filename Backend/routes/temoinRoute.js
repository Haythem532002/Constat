const express = require("express");
const authController = require("../controllers/authController");
const temoinController = require("../controllers/temoinController");

const router = express.Router();

// router.use(authController.protect);
router
  .route("/")
  .get(temoinController.getAllTemoin)
  .post(temoinController.createTemoin);

router
  .route("/:id")
  .get(temoinController.getTemoin)
  .patch(temoinController.updateTemoin)
  .delete(temoinController.deleteTemoin);

module.exports = router;
