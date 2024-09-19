const mongoose = require("mongoose");

const Schema = mongoose.Schema;

module.exports = mongoose.model(
  "product",
  new Schema({
    name: {
      type: String,
      required: [true, "name is required"],
    },
    quantity: {
      type: Number,
      required: [true, "quantity is requiredd"],
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: [true, "price is required"],
    },
  })
);
