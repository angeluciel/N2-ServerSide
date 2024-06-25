const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

exports.verifyToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) return res.status(403).json({ error: 'Nenhum token fornecido' });

  jwt.verify(token, secret, (err, decoded) => {
    if (err) return res.status(500).json({ error: 'Falha na autenticação do token' });

    req.userId = decoded.id;
    next();
  });
};