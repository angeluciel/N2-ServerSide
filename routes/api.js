const express = require('express');
const router = express.Router();
const authController = require('../controllers/authcontroller');
const auth = require('../middlewares/auth');

router.post('/login', authController.login);
router.get('/protected', auth.verifyToken, (req, res) => {
  res.json({ message: 'Acesso autorizado!' });
});

module.exports = router;