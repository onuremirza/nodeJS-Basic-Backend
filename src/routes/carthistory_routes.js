const express = require("express");
const router = express.Router();
const { authenticateToken, authorizeRole } = require("../middlewares/auth");
const controller = require("../controller");

router.get(
  "/",
  authenticateToken,
  controller.carthistoryController.getCartHistories
);
router.post(
  "/",
  authenticateToken,
  controller.carthistoryController.createCartHistory
);
router.put(
  "/:id",
  authenticateToken,
  controller.carthistoryController.updateCartHistory
);
router.delete(
  "/:id",
  authenticateToken,
  controller.carthistoryController.deleteCartHistory
);

module.exports = router;
