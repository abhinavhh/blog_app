// imports and setup

require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');

// Database connection

const connectDB = require('./config/database');
const app = express();
connectDB();

// Basic Middleware

app.use(express.json());
app.use(cookieParser());

// Security Enhancement

app.use(helmet());
app.disable('x-powered-by');

// Request Throtting ( limit each ip to 100 requests per 15 minute)

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
    standardHeaders: true,
    legacyHeaders: false,
});
app.use(limiter);

// response optimization

app.use(compression());

// cors config

const isProd = process.env.NODE_ENV === 'production';
app.use(cors({
    origin: isProd ?
        'https://front-end-url'
        :'http://localhost:5173',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type','Authorization'],
}));
app.options('*', cors());

// trust proxy

if (isProd) app.set('trust-proxy', 1);