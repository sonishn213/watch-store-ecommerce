const express = require("express");
const router = express.Router();

const {
  verification,
  createPayment,
} = require("../controller/paymentController");
const { protect } = require("../middleware/authMiddleware");

//routes
router.post("/verification", verification);
router.post("/razorpay", protect, createPayment);

module.exports = router;
