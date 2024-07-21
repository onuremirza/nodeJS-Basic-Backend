const express = require("express");
const router = express.Router();
const { authenticateToken, authorizeRole } = require("../middlewares/auth");
const controller = require("../controller");

router.get("/", authenticateToken, controller.productController.getProducts);
router.post(
  "/",
  [authenticateToken, authorizeRole(["admin"])],
  controller.productController.createProduct
);
router.put(
  "/:id",
  [authenticateToken, authorizeRole(["admin"])],
  controller.productController.updateProduct
);
router.delete(
  "/:id",
  [authenticateToken, authorizeRole(["admin"])],
  controller.productController.deleteProduct
);

module.exports = router;
