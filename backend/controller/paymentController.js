const shortid = require("shortid");
const Razorpay = require("razorpay");
const asyncHandler = require("express-async-handler");
const Order = require("../models/orderModel");

const razorpay = new Razorpay({
  key_id: "rzp_test_yigtEka9cZV5c2",
  key_secret: "O1ERhd0IRzxXaY19dLVHQM95",
});

// @desc  verify payments
// @route POST api/payments/verification
// @access private
const verification = async (req, res) => {
  // do a validation
  const secret = "Soni@8722";

  console.log(req.body, "from verification");

  const crypto = require("crypto");

  const shasum = crypto.createHmac("sha256", secret);
  shasum.update(JSON.stringify(req.body));
  const digest = shasum.digest("hex");

  console.log(digest, req.headers["x-razorpay-signature"]);

  if (digest === req.headers["x-razorpay-signature"]) {
    console.log("request is legit");
    // process it
    const orderId = req.body.payload.payment.entity.order_id; //get the order id from req body
    //updata order
    const updatedOrder = await Order.updateMany(
      { razor_order_id: orderId },
      {
        payment_status: "paid",
        order_status: "placed",
      }
    );
    // res.status(200).json(updatedOrder);
  }
  res.json({ status: "ok" });
};

// @desc  create payment
// @route POST api/payments/razorpay
// @access private
const createPayment = asyncHandler(async (req, res) => {
  const payment_capture = 1;
  const amount = req.body.totalprice;
  const currency = "INR";

  const options = {
    amount: amount * 100,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };

  try {
    const response = await razorpay.orders.create(options);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = { verification, createPayment };
