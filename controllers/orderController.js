const Order = require('../models/orderModel');

exports.getOrders = async (req, res) => {
    try {
        const results = await Order.getAll();
        res.json(results);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao buscar pedidos' });
    }
};

exports.createOrderItem = async (req, res) => {
    const newOrderItem = req.body;
    try {
        const result = await Order.createOrderItem(newOrderItem);
        res.status(201).json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Erro ao criar item de pedido' });
    }
};