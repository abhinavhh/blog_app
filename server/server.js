require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// Databse Connection

const connectDB = require('./config/database');
const app = express();
connectDB();

const port = 4000;
app.listen(port, () => {
    console.log('server running on port 4000');
});