const db = require('../config/db');

const Order = {
    getAll: (callback) => {
        db.query('SELECT * FROM orders', callback);
    },
    create: (order, callback) => {
        db.query('INSERT INTO orders SET ?', order, callback);
    }
};

exports.createOrderItem = async (orderItem) => {
    const { num_pedido, cod_produto, qtde_pedido } = orderItem;
    try {
        const [result] = await db.execute('INSERT INTO orders (num_pedido, cod_produto, qtde_pedido) VALUES (?, ?, ?)', [num_pedido, cod_produto, qtde_pedido]);
        return result;
    } catch (error) {
        throw error;
    }
};

module.exports = Order;