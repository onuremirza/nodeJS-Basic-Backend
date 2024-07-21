const express = require("express");
const router = express.Router();
const { authenticateToken, authorizeRole } = require("../middlewares/auth");
const controller = require("../controller");

router.get("/", authenticateToken, controller.cartController.getCarts);
router.post("/", authenticateToken, controller.cartController.createCart);
router.put(
  "/:id/status",
  [authenticateToken, authorizeRole(["admin"])],
  controller.cartController.updateCartStatus
);

module.exports = router;
