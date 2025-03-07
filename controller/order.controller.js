const Order = require("../models/order.model");
const Offer = require("../models/offer.model");
const calculatePrice = require("../utils/calculatePrize");
const createOrder = async (req, res) => {
    try {
       const order = await Order.create(req.body);
       res.status(201).json(order); 
    } catch (error) {
        console.log(error);
        throw new Error("Error creating order", error);
        
    }
}

const getOrders = async (req, res) => {
    try {
        const orders = await Order.find().populate("productId").exec();
        res.status(200).json(orders);
    } catch (error) {
        console.log(error);
        throw new Error("Error getting orders", error);
    }
}

const getTotalPriceByOrderId = async (req, res) => {
    try {

        const id = req.params.id;
        console.log("Consoling the id", id);
        const order = await Order.findById(id).populate("productId").exec();
        const offer = await Offer.findOne({ productId: order.productId._id }); 
        const totalPrice = calculatePrice(order.quantity, order.productId.price, offer.offerType,)
        console.log("Total price" + totalPrice);

        console.log("Offers", offer);
        console.log("Order", order);
        res.status(200).json({ offer: offer, totalPrice: totalPrice, order: order });
    } catch (error) {
        
    }
}

module.exports = {
    createOrder,
    getOrders,
    getTotalPriceByOrderId
}