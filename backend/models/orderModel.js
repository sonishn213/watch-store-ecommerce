const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  p_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Product",
  },
  p_name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  mainimg: {
    type: String,
    required: true,
  },
});
const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    product: {
      type: productSchema,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
      ref: "Product",
    },
    cust_name: {
      type: String,
      required: true,
    },
    phno: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    zipcode: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    payment_status: {
      type: String,
      required: true,
    },
    order_status: {
      type: String,
      required: true,
    },
    razor_order_id: {
      //this is transaction id
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Orders", orderSchema);
