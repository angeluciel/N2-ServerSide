const Category = require('../models/categoryModel');

exports.getCategories = (req, res) => {
    Category.getAll((err, results) => {
        if (err) res.status(500).send(err);
        res.json(results);
    });
};

exports.getCategoryById = (req, res) => {
    Category.getById(req.params.id, (err, result) => {
        if (err) res.status(500).send(err);
        res.json(result);
    });
};

exports.createCategory = (req, res) => {
    const newCategory = req.body;
    Category.create(newCategory, (err, result) => {
        if (err) res.status(500).send(err);
        res.json(result);
    });
};

exports.updateCategory = (req, res) => {
    const updatedCategory = req.body;
    Category.update(req.params.id, updatedCategory, (err, result) => {
        if (err) res.status(500).send(err);
        res.json(result);
    });
};

exports.deleteCategory = (req, res) => {
    Category.delete(req.params.id, (err, result) => {
        if (err) res.status(500).send(err);
        res.json(result);
    });
};
