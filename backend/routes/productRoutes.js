const express = require('express');
const router = express.Router();
const{getAllProducts, getProductByID} = require('../controller/productControllers');


//@desc Get all products from database
//@Router Get all /api/products
//@access Public
router.get('/', getAllProducts)


//@desc Get all product by ID from database
//@Router Get all /api/products/:id
//@access Public
router.get('/:id', getProductByID)

module.exports = router;


