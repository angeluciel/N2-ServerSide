const Product = require('../models/productModel');

exports.getProducts = async (req, res) => {
    try {
        const results = await Product.getAll();
        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
};

exports.getProductById = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await Product.getById(id);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar produto por ID' });
    }
};

exports.getProductsByCategory = async (req, res) => {
    const categoryId = req.params.categoryId;
    try {
        const results = await Product.getByCategory(categoryId);
        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar produtos por categoria' });
    }
};

exports.getProductsByOrderQuantity = async (req, res) => {
    const orderQuantity = req.query.qtde_pedido;
    try {
        const results = await Product.getByOrderQuantity(orderQuantity);
        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar produtos por quantidade de pedido' });
    }
};

exports.createProduct = async (req, res) => {
    const newProduct = req.body;
    try {
        const result = await Product.create(newProduct);
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar novo produto' });
    }
};

exports.updateProduct = async (req, res) => {
    const id = req.params.id;
    const updatedProduct = req.body;
    try {
        const result = await Product.update(id, updatedProduct);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar produto' });
    }
};

exports.deleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const result = await Product.delete(id);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao deletar produto' });
    }
};
