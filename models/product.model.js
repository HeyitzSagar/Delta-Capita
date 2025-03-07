const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        default: null,
    },
    price: {
        type: Number,
        default: null,
    },
}, {
    timestamps: true
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;