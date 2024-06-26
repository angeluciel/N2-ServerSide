const Category = require('../models/categoryModel');

exports.getCategories = async (req, res) => {
    try {
        const results = await Category.getAll();
        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar categorias' });
    }
};

exports.getCategoryById = async (req, res) => {
    try {
        const result = await Category.getById(req.params.id);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar categoria por ID' });
    }
};

exports.createCategory = async (req, res) => {
    try {
        const newCategory = req.body;
        const result = await Category.create(newCategory);
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar nova categoria' });
    }
};

exports.updateCategory = async (req, res) => {
    try {
        const updatedCategory = req.body;
        const result = await Category.update(req.params.id, updatedCategory);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao atualizar categoria' });
    }
};

exports.deleteCategory = async (req, res) => {
    try {
        const result = await Category.delete(req.params.id);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao deletar categoria' });
    }
};
