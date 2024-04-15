require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./DB/db');

const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
