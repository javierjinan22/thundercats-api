const express = require('express');

const router = express.Router();
const productController = require("../controller/product.js");

//get all product
router.get('/', productController.getAllProduct);
//create New product
router.post('/', productController.createNewProduct);
module.exports = router;