const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  hospitalName: {
    type: String,
    required: true,
    trim: true,
  },
  location: {
    type: String,
    required: true,
  },
  numberOfDoctors: {
    type: Number,
    required: true,
  },
  numberOfBed: {
    type: Number,
    required: true,
  },
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
