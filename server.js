const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const productRoutes = require('./routes/productRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const orderRoutes = require('./routes/orderRoutes');
const authRoutes = require('./routes/authRoutes');
const { verifyToken } = require('./middleware/authMiddleware');

dotenv.config();

const app = express();
app.use(bodyParser.json());

app.use('/api/products', verifyToken, productRoutes);
app.use('/api/categories', verifyToken, categoryRoutes);
app.use('/api/orders', verifyToken, orderRoutes);
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
