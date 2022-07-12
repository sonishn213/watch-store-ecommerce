const asyncHandler = require("express-async-handler");
const Order = require("../models/orderModel");

// @desc  Set order
// @route POST api/orders
// @access private
const setOrders = asyncHandler(async (req, res) => {
  if (!req.body.products) {
    res.status(400);
    throw new Error("Please add a p_id field");
  }
  try {
    const order = await Order.create({
      user: req.user.id,
      products: req.body.products,
      amount: req.body.amount,
      cust_name: req.body.form.name,
      phno: req.body.form.phno,
      email: req.body.form.email,
      address: req.body.form.address,
      zipcode: req.body.form.zipcode,
      city: req.body.form.city,
      state: req.body.form.state,
      payment_status: "pending",
      order_status: "initiated",
      razor_order_id: req.body.razor_order_id,
    });
    res.status(201).json(order);
  } catch (error) {
    res.status(500);
    throw new Error(`Order cant be created : ${error}`);
  }
});

// @desc  get Orders
// @route GET api/orders
// @access private
const getOrders = asyncHandler(async (req, res) => {
  //get all the orders from orders using userid
  const orders = await Order.find({
    $and: [{ user: req.user.id }, { payment_status: "paid" }],
  }).sort({ createdAt: -1 });

  //return result
  res.status(200).json(orders);
});

//export
module.exports = { setOrders, getOrders };
