const Order = require('../models/orderModel');

exports.getOrders = (req, res) => {
    Order.getAll((err, results) => {
        if (err) res.status(500).send(err);
        res.json(results);
    });
};
