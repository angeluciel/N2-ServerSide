const Product = require('../models/productModel');
const Order = require('../models/orderModel');

exports.getProducts = (req, res) => {
    Product.getAll((err, results) => {
        if (err) res.status(500).send(err);
        res.json(results);
    });
};

exports.getProductById = (req, res) => {
    Product.getById(req.params.id, (err, result) => {
        if (err) res.status(500).send(err);
        res.json(result);
    });
};

exports.getProductsByCategory = (req, res) => {
    Product.getByCategory(req.params.categoryId, (err, results) => {
        if (err) res.status(500).send(err);
        res.json(results);
    });
};

exports.createProduct = (req, res) => {
    const newProduct = req.body;
    Product.create(newProduct, (err, result) => {
        if (err) res.status(500).send(err);
        res.json(result);
    });
};

exports.updateProduct = (req, res) => {
    const updatedProduct = req.body;
    Product.update(req.params.id, updatedProduct, (err, result) => {
        if (err) res.status(500).send(err);
        res.json(result);
    });
};

exports.deleteProduct = (req, res) => {
    Product.delete(req.params.id, (err, result) => {
        if (err) res.status(500).send(err);
        res.json(result);
    });
};

exports.checkStockAndCreateOrder = (req, res) => {
    Product.getLowStockProducts((err, products) => {
        if (err) res.status(500).send(err);
        
        products.forEach(product => {
            let order = {
                cod_produto: product.cod_produto,
                qtde_pedido: 0
            };
            
            if (product.qtde_produto <= 3) {
                order.qtde_pedido = 4;
            } else if (product.qtde_produto > 3 && product.qtde_produto < 7) {
                order.qtde_pedido = 3;
            }
            
            if (order.qtde_pedido > 0) {
                Order.create(order, (err, result) => {
                    if (err) console.error(err);
                });
            }
        });

        res.json({message: 'Orders created for low stock products'});
    });
};
