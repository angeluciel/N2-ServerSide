const db = require('../config/db');

exports.getAll = async () => {
    try {
        const [rows, fields] = await db.execute('SELECT * FROM products');
        return rows;
    } catch (error) {
        throw error;
    }
};

exports.getById = async (id) => {
    try {
        const [rows, fields] = await db.execute('SELECT * FROM products WHERE cod_produto = ?', [id]);
        return rows[0];
    } catch (error) {
        throw error;
    }
};

// Retorna produtos de uma categoria específica
exports.getByCategory = async (categoryId) => {
    try {
        const [rows, fields] = await db.execute('SELECT * FROM products WHERE id_categoria = ?', [categoryId]);
        return rows;
    } catch (error) {
        throw error;
    }
};

exports.create = async (newProduct) => {
    const { cod_produto, nome_produto, qtde_produto, id_categoria } = newProduct;
    try {
        const result = await db.execute('INSERT INTO products (cod_produto, nome_produto, qtde_produto, id_categoria) VALUES (?, ?, ?, ?)',
            [cod_produto, nome_produto, qtde_produto, id_categoria]);
        return result;
    } catch (error) {
        throw error;
    }
};

exports.update = async (id, updatedProduct) => {
    const { nome_produto, qtde_produto, id_categoria } = updatedProduct;
    try {
        const result = await db.execute('UPDATE products SET nome_produto = ?, qtde_produto = ?, id_categoria = ? WHERE cod_produto = ?',
            [nome_produto, qtde_produto, id_categoria, id]);
        return result;
    } catch (error) {
        throw error;
    }
};

exports.delete = async (id) => {
    try {
        const result = await db.execute('DELETE FROM products WHERE cod_produto = ?', [id]);
        return result;
    } catch (error) {
        throw error;
    }
};

exports.getByOrderQuantity = async (quantity) => {
    try {
        const [rows, fields] = await db.execute('SELECT * FROM products WHERE qtde_produto = ?', [quantity]);
        return rows;
    } catch (error) {
        throw error;
    }
};

// Retorna produtos com baixo estoque
exports.getLowStockProducts = async () => {
    try {
        const [rows, fields] = await db.execute('SELECT * FROM products WHERE qtde_produto <= 3');
        return rows;
    } catch (error) {
        throw error;
    }
};
