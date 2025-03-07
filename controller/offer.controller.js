const Offer = require("../models/offer.model");

const createOfferForProduct = async (req, res) => {
    try {
        const body = req.body;
        const product = new Offer(body);
        const result = await product.save();
        res.status(201).json(result);
    } catch (error) {
        throw new Error("Error creating Offer");
    }
}

const getOffers = async (req, res) => {
    try {
        const offers = await Offer.find().populate("productId").exec();
        console.log("Offers", offers);
        res.status(200).json(offers);
    } catch (error) {
        console.log("Error getting offers", error);
        res.status(500).json({message: "Error getting offers", error: error});
    }
}

module.exports = { createOfferForProduct, getOffers };