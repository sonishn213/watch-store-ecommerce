const express = require("express");
const router = express.Router();

const {
  verification,
  createPayment,
} = require("../controller/paymentController");

//routes
router.post("/verification", verification);
router.post("/razorpay", createPayment);

module.exports = router;
