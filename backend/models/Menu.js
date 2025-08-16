const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  image: { type: String }, // URL of image
  category: { type: String, enum: ["starters", "main", "soup", "desserts"], required: true },
  rating: { type: Number, default: 0 }
});

module.exports = mongoose.model("Menu", menuSchema);
