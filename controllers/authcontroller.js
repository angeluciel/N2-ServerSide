const jwt = require('jsonwebtoken');
const db = require('../config/db');
require('dotenv').config();

const secret = process.env.JWT_SECRET;

const generateToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email }, secret, { expiresIn: '1h' });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const [rows] = await db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password]);
    if (rows.length > 0) {
      const user = rows[0];
      const token = generateToken(user);
      res.json({ token });
    } else {
      res.status(401).json({ error: 'Credenciais inválidas' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};