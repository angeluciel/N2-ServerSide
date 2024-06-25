const db = require('../config/db');

const Product = {
    getAll: (callback) => {
        db.query ('SELECT * FROM products', callback);
    },
    getById: (id, callback) => {
        db.query('SELECT * FROM products WHERE id_categoria = ?', [categoryId], callback);
    },
    create: (product, callback) => {
        db.query('INSERT INTO products SET ?', product , callback);
    },
    update: (id, product, callback) => {
        db.query('UPDATE products SET ? WHERE cod_produto = ?', [product, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM products WHERE cod_produto = ?', [id], callback);
    },
    getLowStockProducts: (callback) => {
        db.query('SELECT * FROM products WHERE qtde_produto <= 7', callback);
    }
};

module.exports = Product;