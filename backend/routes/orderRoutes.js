const express = require("express");
const router = express.Router();

const { setOrders, getOrders } = require("../controller/orderController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getOrders).post(protect, setOrders);

module.exports = router;
