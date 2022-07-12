const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");
const CartItems = require("../models/cartitemsModel");

// @desc  get cart items
// @route GET api/cartitems
// @access private
const getCartItems = asyncHandler(async (req, res) => {
  //get all the product id from cartItems using userid
  const cartitems = await CartItems.find({ user: req.user.id });

  //return result
  res.status(200).json(cartitems);
});

// @desc  set cartitems
// @route POST api/cartitems
// @access private
const setCartItems = asyncHandler(async (req, res) => {
  if (!req.body.p_id) {
    res.status(400);
    throw new Error("Please add a p_id field");
  }
  const cartitems = await CartItems.create({
    user: req.user.id,
    p_id: req.body.p_id,
    p_name: req.body.p_name,
    price: req.body.price,
    mainimg: req.body.mainimg,
  });
  res.status(200).json(cartitems);
});

// @desc  delete cartitems
// @route DELETE api/cartitems
// @access private
const deleteCartItems = asyncHandler(async (req, res) => {
  //check if id is sent
  if (!req.params.id) {
    res.status(400);
    throw new Error("Please add a id field");
  }

  //search cart item
  const cartItem = await CartItems.findById(req.params.id);
  //check if user is authorized
  if (cartItem.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User Not authorized");
  }
  //if no item throw error
  if (!cartItem) {
    res.status(400);
    throw new Error("Cart item not found");
  }

  //delete item
  await cartItem.remove();
  //send response
  res.status(200).json({ id: req.params.id });
});
// @desc  delete cartitems of user
// @route DELETE api/cartitems/deleteall
// @access private
const deleteAllCartItems = async (req, res) => {
  try {
    //delete item
    const deletedItems = await CartItems.deleteMany({ user: req.user.id });
    //send response
    res.status(200).json({ user: req.user.id });
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
};

//exports
module.exports = {
  getCartItems,
  setCartItems,
  deleteCartItems,
  deleteAllCartItems,
};
