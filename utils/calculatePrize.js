const { offerTypes } = require("./constant");

const calculatePrice =  (quantity, price, offerType) => {
    switch (offerType) {
        case offerTypes.BUY_ONE_GET_ONE:
            return Math.ceil(quantity / 2) * price; // BOGO: Buy 1, Get 1 Free
        case offerTypes.THREE_FOR_TWO:
            return Math.floor(quantity / 3) * 2 * price + (quantity % 3) * price; // Buy 3, Pay for 2
        default:
            return quantity * price; // No offer applied
    }
};

module.exports = calculatePrice;
