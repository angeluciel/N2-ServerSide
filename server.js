const express = require('express');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});