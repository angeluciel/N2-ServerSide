const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

exports.verifyToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(403).json({ error: 'Nenhum token fornecido' });
    }

    jwt.verify(token, secret, (err, decoded) => {
        if (err) {
            console.error('Erro na verificação do token:', err);
            return res.status(401).json({ error: 'Token inválido' });
        }

        req.userId = decoded.id;
        next();
    });
};
