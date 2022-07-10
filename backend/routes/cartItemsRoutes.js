const express = require("express");
const router = express.Router();

const {
  getCartItems,
  setCartItems,
  deleteCartItems,
} = require("../controller/cartItemsController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getCartItems).post(protect, setCartItems);

router.delete("/:id", protect, deleteCartItems);

module.exports = router;
