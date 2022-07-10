const mongoose = require("mongoose");
const productSchema = mongoose.Schema(
  {
    p_name: {
      type: String,
      required: [true, "Please provide text"],
    },
    description: {
      type: String,
      required: [false],
    },
    details: {
      type: String,
      required: [false],
    },
    price: {
      type: Number,
      required: [true, "Please provide price"],
    },
    mainimg: {
      type: String,
      required: [true, "Please provide main image"],
    },
    images: {
      type: [String],
    },
    gender: {
      type: String,
    },
    occation: {
      type: String,
    },
    strapmaterial: {
      type: String,
    },
    display: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
