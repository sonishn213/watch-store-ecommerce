const express = require("express");
const router = express.Router();

const {
  getCartItems,
  setCartItems,
  deleteCartItems,
  deleteAllCartItems,
} = require("../controller/cartItemsController");
const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getCartItems).post(protect, setCartItems);
router.delete("/deleteall", protect, deleteAllCartItems);
router.delete("/:id", protect, deleteCartItems);

module.exports = router;
