const express = require ('express');

const router = express.Router();

const productController = require("../controllers/productController");

router.get("/products", productController.products);
router.get("/products/:id", productController.products);
router.post("/products", productController.createProduct);

module.exports = router;