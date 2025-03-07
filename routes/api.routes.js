const express = require('express');
const ProductController = require('../controller/product.controller');
const OfferController = require('../controller/offer.controller');
const OrderController = require('../controller/order.controller');
const router = express.Router();

// product routes
router.post('/product/create', ProductController.createProduct )
router.get('/products', ProductController.getProducts);
// end product routes

// offer routes
router.post('/offer/create', OfferController.createOfferForProduct);
router.get('/offers', OfferController.getOffers);
// end offer routes

// order routes
router.post('/order/create', OrderController.createOrder);
router.get('/orders', OrderController.getOrders);
router.get('/order/:id', OrderController.getTotalPriceByOrderId);
// end order routes
module.exports = router;