const Product = require("../models/product.model");


const createProduct = async(req, res) => {
    try {
        const body = req.body;
        const product = new Product(body);
        const result = await product.save();
        res.status(201).json(result);
    } catch (error) {
        throw new Error("Error creating product");
    }
}

const getProducts = async(req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        throw new Error("Error getting products");
    }
}

module.exports = {
    createProduct,
    getProducts,
 
};