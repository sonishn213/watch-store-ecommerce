const mongoose = require("mongoose");
const cartitemSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    p_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Product",
    },
    p_name: {
      type: String,
      required: true,
      ref: "Product",
    },
    price: {
      type: Number,
      required: true,
      ref: "Product",
    },
    mainimg: {
      type: String,
      required: true,
      ref: "Product",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("CartItems", cartitemSchema);
