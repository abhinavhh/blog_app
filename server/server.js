require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Databse Connection

const connectDB = require('./config/database');
const app = express();
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true,
    allowedHeaders: ['Content-Type','application/json'],
}))

const port = 4000;
app.listen(port, () => {
    console.log('server running on port 4000');
});