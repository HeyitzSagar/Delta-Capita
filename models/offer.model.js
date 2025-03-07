const mongoose = require('mongoose');
const { offerTypes } = require('../utils/constant');

const offerSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Types.ObjectId,
        ref: 'Product'
    },
    offerType: {
        type: Number,
        enums: Object.values(offerTypes),
        default: null,
    },
}, {
    timestamps: true
});

const Offer = mongoose.model('Offer', offerSchema);

module.exports = Offer;