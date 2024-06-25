const db = require('../config/db');

const Order = {
    getAll: (callback) => {
        db.query('SELECT * FROM orders', callback);
    },
    create: (order, callback) => {
        db.query('INSERT INTO orders SET ?', order, callback);
    }
};

module.exports = Order;
