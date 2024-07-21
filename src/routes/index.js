const express = require("express");
const router = express.Router();
const userRoute = require("./user_route");
const productRoute = require("./product_route");
const cartRoute = require("./cart_route");
const cartHistoryRoute = require("./carthistory_routes");

router.use("/User", userRoute);
router.use("/Product", productRoute);
router.use("/Cart", cartRoute);
router.use("/CartHistory", cartHistoryRoute);
module.exports = router;
