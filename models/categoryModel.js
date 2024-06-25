const db = require('../config/db');

const Category = {
    getAll: (callback) => {
        db.query('SELECT * FROM categories', callback);
    },
    getById: (id, callback) => {
        db.query('SELECT * FROM categories WHERE id_categoria = ?', [id], callback);
    },
    create: (category, callback) => {
        db.query('INSERT INTO categories SET ?', category, callback);
    },
    update: (id, category, callback) => {
        db.query('UPDATE categories SET ? WHERE id_categoria = ?', [category, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM categories WHERE id_categoria = ?', [id], callback);
    }
};

module.exports = Category;