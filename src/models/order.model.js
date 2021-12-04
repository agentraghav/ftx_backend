const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
  userId: {type: String, required: true},
  products: [
    {
      productId: {type: String, required: true},
      price: {type: Number, required: true},
      quantity: {type: Number, required: true},
      _id: false,
    },
  ],
  amount: {type: Number, required: true},
});
module.exports = Order = mongoose.model('order', orderSchema);
