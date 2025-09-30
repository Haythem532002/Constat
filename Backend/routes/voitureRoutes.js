const express = require("express");
const authController = require("../controllers/authController");
const voitureController = require("../controllers/voitureController");

const router = express.Router();

// router.use(authController.protect);
router
  .route("/")
  .get(voitureController.getAllVoiture)
  .post(voitureController.createVoiture);

router
  .route("/:id")
  .get(voitureController.getVoiture)
  .patch(voitureController.updateVoiture)
  .delete(voitureController.deleteVoiture);

module.exports = router;
