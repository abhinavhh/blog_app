const express = require('express');
const userSchema = require('./models/user');

const connectDB = require('./config/database');
const app = express();

connectDB();

app.use(express.json());
const PORT = 4000;

app.listen(PORT, () => {
    console.log('Listening on 4000');
});