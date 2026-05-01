const mongoose = require('mongoose');

const medicationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  genericName: { type: String },
  brand: { type: String },
  dosage: { type: String },
  price: { type: Number, required: true },
  mrp: { type: Number },
  pharmacy: { type: String },
  category: { type: String },
  manufacturer: { type: String },
  inStock: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Medication', medicationSchema);
