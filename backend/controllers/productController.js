const Product = require('../models/product');

exports.createProduct = async (req, res) => {
    try {
        const {title, description, price, imgUrl} = req.body;

    let newProduct = new Product({
        title,
        description,
        price,
        imgUrl,
    });

    newProduct = await newProduct.save();

    res.status(201).json(newProduct);
    } catch (e) {
        res.status(500).json({error: e.message})
    }

};

exports.products = async (req, res) => {
    try {
        const products = await Product.find({});

        res.json(products);
    } catch {
        res.status(500).json({ error: e.message });
    }
};

exports.product = async (req, res) => {
    try {
    const product = await Product.findById(req.params.id);

    res.json(product)
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
}


