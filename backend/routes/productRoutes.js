const express = require("express");
const router = express.Router();

const {
  getProducts,
  setProducts,
  getSingleProduct,
} = require("../controller/productController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").post(getProducts);
router.route("/add").post(protect, setProducts);
router.get("/:id", getSingleProduct);

module.exports = router;
