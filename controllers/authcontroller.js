const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const users = [{ id: 1, username: 'admin', password: '$2b$10$abcd...'}]; // senha "admin" criptografada

exports.login = (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username);

    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    bcrypt.compare(password, user.password, (err, result) => {
        if (err || !result) return res.status(401).json({ message: 'Invalid credentials' });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    });
};