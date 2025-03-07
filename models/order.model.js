const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Types.ObjectId,
        ref: 'Product',
    },
    // i can take the userid as well but i am making it to solve minimal problem
    quantity: {
        type: Number,
        default: null,
    }
}, {
    timestamps: true
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;